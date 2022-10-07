// express 모듈 호출
const express = require('express');
const app = express();
const port = 4000; // 겹치지 않게
const db = require('./config/db');
const cors = require("cors");

app.use(cors());

app.get("/api/get", (req,res) => {
    const sql = "SELECT * FROM login";
    db.query(sql, (err, result) => {
        res.send("result : "+ JSON.stringify(result));
    })
});

app.listen(port, () => {
    console.log(`http://localhost:${port}/`);
});
