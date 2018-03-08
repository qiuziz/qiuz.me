/*
 * @Author: qiuziz
 * @Date: 2018-03-05 10:47:38
 * */


const http = require('http');
const express = require('express');

const app = express();

// 邮箱登录
app.use('/bloglist', require('./router/bloglist'));

const port = process.env.PORT || 8888;

http.createServer(app).listen(port);
