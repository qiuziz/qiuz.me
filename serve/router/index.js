/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date: 2019-06-18 15:40:53
 * @Last Modified by: qiuz
 * @Last Modified time: 2019-06-19 11:41:21
 */

const express = require("express");
const app = express();

app.use('/blog', require('./blog-detail'));
app.use('/blogList', require('./blog-list'));

module.exports = app;
