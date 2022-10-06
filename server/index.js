// express 모듈 호출
const express = require('express');
const app = express();
const port = 4000;
const db = require('./config/db');

app.get("/", (req,res) => {
    const sql = "SELECT * FROM board_sample.table1";
    db.query(sql, (err, result) => {
        res.send("result : "+ JSON.stringify(result));
    })
});

app.listen(port, () => {
    console.log(`Server On : http://localhost:${port}/`);
});
