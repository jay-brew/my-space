// express 모듈 호출
const express = require('express');
const app = express();
const port = 4000; // 겹치지 않게
const db = require('./config/db');
const cors = require("cors");

const {sign} = require('jsonwebtoken');
const { genSaltSync, hashSync, compareSync } = require("bcrypt");
const saltRounds = 10;
const plainTextPassword1 = 'asdf1234';
const plainTextPassword2 = 'qwer1234';

require('dotenv').config();

const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// const {hashSync, getSaltSync, compareSync} = require('bcrypt');

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({
    extended : false
}));
app.use(cookieParser());
app.use(express.static('public'));
// app.engine("hbs",exphbs({ extname: '.hbs' }));
app.set('view engine', 'hbs');

app.get("/api/get", (req,res) => {
    const sql = "SELECT * FROM login";
    db.query(sql, (err, result) => {
        res.send("result : "+ JSON.stringify(result));
    })
});

app.post("/signup", (req,res) => {
    const salt = genSaltSync(10);
    req.body.id = hashSync(req.body.id, salt);

    const jsontoken = sign({ id: req.body.id }, "SECRET_TOKEN" , {
        expiresIn: "1h"
      });
      
    console.log("jsontoken : ", jsontoken);
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
