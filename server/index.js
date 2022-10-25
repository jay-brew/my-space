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
const { genSaltSync, hashSync, compareSync } = require("bcrypt");
const saltRounds = 10;
const plainTextPassword1 = 'asdf1234';
const plainTextPassword2 = 'qwer1234';

require('dotenv').config();

const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { rejectSeries } = require('async');

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({
    extended : false
}));
app.use(cookieParser());
app.use(express.static('public'));
app.set('view engine', 'hbs');

app.get("getCookie")

// MySQL Table GET
app.get("/api/get", (req,res) => {
    const sql = "SELECT * FROM login";
    db.query(sql, (err, result) => {
        res.send(JSON.stringify(result));
    })
});

// 로그인
app.post("/login", (req,res) => {
    const sqlLogin = "SELECT * FROM login WHERE id = ? ;";
    db.query(sqlLogin,[req.body.id], (err, result) => {
        console.log(result);
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
                    console.log(`UPDATE login SET token=${cookies.get("token")} WHERE id=${req.body.id};`)
                    res.send("로그인 성공");
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

    const sqlToken = "UPDATE login SET token=? WHERE id=?;";
    db.query(sqlToken,['', req.body.id], (err, result) => {
        res.send("로그아웃");
    })
});

// 회원가입
app.post("/signup", (req,res) => {
    var id = req.body.id;
    var password = req.body.pw;
    var nickname = req.body.nickname;
    var email = req.body.email;

    const sqlQuery = "insert into login(`id`,`password`, `nickname`, `email`) VALUES (?, ?, ? ,?);";
     db.query(sqlQuery, [id, password, nickname, email], (err, result) => {
       res.send(result);
     });
});

app.listen(port, () => {
    console.log(`http://localhost:${port}/`);
});
