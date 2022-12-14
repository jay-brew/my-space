// express 모듈 호출
const express = require('express');
const app = express();
const port = 4000; // 겹치지 않게
const db = require('./config/db');
const cors = require("cors");
const crypto = require('crypto-js');
const jwt = require('jsonwebtoken');
const {Cookies} = require('react-cookie');
const {sign} = require('jsonwebtoken');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// express-session
const session = require('express-session');

require('dotenv').config();

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({
    extended : false
}));

app.use(cookieParser());
app.use(express.static('public'));
app.set('view engine', 'hbs');

app.use(session({
    HttpOnly:false,  // true 설정 시 스크립트를 통해서 session 을 사용할 수 없도록 한다. 보안적
    secure: false,   // https 에서만 세션을 주고받을 수 있다. http에서 불가.
    secret:"test",  // 세션을 발급할 때 사용되는 key, 보안적. 환경변수 파일에서 따로 관리해야 한다.
    resave:false,   // session 을 저장하고 불러올 때 다시 저장할지에 대한 여부 (false : 세션 아이디를 접속할 때마다 새롭게 발급하지 않음.)
    saveUninitialized:true, // session 을 저장할 때 초기화할지에 대한 여부 (세션 아이디를 실제 사용하기 전에는 발급하지 않음)
    cookie:{maxAge:24000 * 60 * 60} // cookie 의 생명 기간. 단위 : ms
}));

// MySQL Table GET
app.get("/api/get", (req,res) => {
    const sql = "SELECT * FROM login";
    db.query(sql, (err, result) => {
        //res.send(req.cookies);
        res.send(JSON.stringify(result));
    })
});

// 로그인 관련 쿠키 추가
app.get('/setCookie', (req,res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Credentials', 'true'); // 쿠키도 공유
    res.setHeader('Access-Control-Allow-Headers', 'Context-type');
    res.cookie("id",req.query.id);
    res.send("로그인 성공");
});

// 로그인 관련 쿠키 삭제
app.get('/deleteCookie', (req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Credentials', 'true'); // 쿠키도 공유
    res.setHeader('Access-Control-Allow-Headers', 'Context-type');
    res.clearCookie('id');
    res.send("");
});

app.get('/cookieCheck', (req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Credentials', 'true'); // 쿠키도 공유
    res.setHeader('Access-Control-Allow-Headers', 'Context-type');
    if(req.cookies.id!==undefined){
        res.send(true)
    } else {
        res.send(false)
    }
});

// 로그인
app.post("/login", (req,res) => {
    const sqlLogin = "SELECT * FROM login WHERE id = ? ;";
    db.query(sqlLogin,[req.body.id], (err, result) => {
        if(result[0]===undefined) {
            res.send("존재하지 않는 id입니다.");
        }  else {
            if(req.body.pw === crypto.AES.decrypt(result[0]["password"], 'secret key').toString(crypto.enc.Utf8)){
                const token = jwt.sign(
                    {
                        id:"id"
                    },
                        process.env.REACT_APP_SECRET_TOKEN_PASSWORD,
                    {
                        expiresIn:'7d'
                    },
                );

                const cookies = new Cookies();
                cookies.set("token",token);

                const sqlToken = "UPDATE login SET token=? WHERE id=?;";
                db.query(sqlToken,[cookies.get("token"), req.body.id], (err, result) => {
                    db.query("SELECT id, nickname FROM login WHERE id = ?;",[req.body.id], (err, result) => {
                        res.send(result);
                    })
                })
            }else {
                res.send("비밀번호가 일치하지 않습니다.");
            }
        }
    })
});

// 로그아웃
app.post("/logout", (req,res) => {
    var id = req.body.id;
    
    res.clearCookie('id');
    
    const sqlToken = "UPDATE login SET token=? WHERE id=?;";
    db.query(sqlToken,['', req.body.id], (err, result) => {
        res.send("로그아웃");
    })
});

// 회원가입
app.post("/signup", (req,res) => {
    let id = req.body.id;
    let password = req.body.pw;
    let nickname = req.body.nickname;
    let email = req.body.email;

    const sqlQuery = "insert into login(`id`,`password`, `nickname`, `email`) VALUES (?, ?, ? ,?);";
     db.query(sqlQuery, [id, password, nickname, email], (err, result) => {
       res.send(result);
     });
});

// study 글 list 가져오기
app.get("/getStudyList", (req,res) => {
    const sqlQuery = "SELECT * FROM react.studytable;";
    db.query(sqlQuery, (err, result) => {
       res.send(result);
    });
});

// post 가져오기
app.get("/getPost/:idx", (req,res) => {
    const idx = req.params.idx;
    const sqlQuery = "SELECT * FROM studytable WHERE idx=?;";
    db.query(sqlQuery,[idx], (err, result) => {
       res.send(result);
    });
});

// study 글 등록
app.post("/study/create", (req,res) => {
    let title = req.body.title;
    let content = req.body.content;

    console.log("title : ", title);
    console.log("content : ", content);
    const sqlQuery = "insert into studyTable(`title`, `content`) VALUES (?, ?);";
    db.query(sqlQuery, [title, content], (err, result) => {
       res.send(result);
    });
});

// study 글 수정
app.post("/study/update", (req,res) => {
    let title = req.body.title;
    let content = req.body.content;
    let idx = req.body.idx;

    console.log("title : ", title);
    console.log("content : ", content);
    const sqlQuery = "update studyTable SET title=?, content=? WHERE idx=?;";
    db.query(sqlQuery, [title, content, idx], (err, result) => {
       res.send(result);
    });
});

// study 글 삭제
app.post("/study/delete", (req,res) => {
    let idx = req.body.idx;

    const sqlQuery = "delete FROM studyTable WHERE idx=?;";
    db.query(sqlQuery, [idx], (err, result) => {
       res.send(result);
    });
});

// id, password 찾기
app.post('/idpwfind', (req,res) => {
    let id = req.body.id;
    let email = req.body.email;
    let nickname = req.body.nickname;
    let idOrNick = id===undefined ? 'nickname' : 'id';
    let idOrNickValue = id===undefined ? nickname : id;

    const sqlQuery = "select * from login where email='"+email+"' AND " + idOrNick+"='"+idOrNickValue+"';"
    db.query(sqlQuery, (err,result)=>{
        if(result[0]===undefined){
            res.send("일치하는 정보가 없습니다.")
        } else {
            id===undefined ? res.send(result[0]["id"]) : res.send(crypto.AES.decrypt(result[0]["password"], 'secret key').toString(crypto.enc.Utf8));
        }
    })
})

app.listen(port, () => {
    console.log(`http://localhost:${port}/`);
});
