// express 모듈 호출
const express = require('express');
const app = express();
const port = 4000; // 겹치지 않게
const db = require('./config/db');
const cors = require("cors");
const bodyParser = require('body-parser');

// const session = require('express-session'); // 세션 관리
// const cookieParser = require('cookie-parser'); // 쿠키 파싱 미들웨어
// const dotenv = require('dotenv'); // .env SECRET 정보

app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.get("/api/get", (req,res) => {
    const sql = "SELECT * FROM login";
    db.query(sql, (err, result) => {
        res.send("result : "+ JSON.stringify(result));
    })
});

app.post("/signup", (req,res) => {
    console.log("/signup", req.body);
    var idx = req.body.idx;
    var id = req.body.id;
    var password = req.body.password;
    var email = req.body.email;

    const sqlQuery = "insert into login(`idx`,`id`,`password`, `email`) VALUES (?, ?, ?, ?);";
     db.query(sqlQuery, [idx, id, password, email], (err, result) => {
       res.send(result);
     });
});


app.listen(port, () => {
    console.log(`http://localhost:${port}/`);
});
