/*
 * @Author: qiuziz
 * @Date: 2018-03-05 10:47:38
 * */


const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// 添加json解析
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/qiuz/', require('./router/index'));

const port = process.env.PORT || 8888;

http.createServer(app).listen(port);
