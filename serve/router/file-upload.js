/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date: 2019-06-26 15:17:38
 * @Last Modified by: qiuz
 * @Last Modified time: 2019-06-27 14:41:18
 */

const express = require('express');
const router = express();
const fs = require('fs');
const marked = require('marked');
// 上传模块
const multer = require('multer');
const handleToMongoDB = require('../utils/handleToMongoDB');
const ObjectID = require('mongodb').ObjectID;

// 实例化上传模块(前端使用参数名为file)
const storage = multer.diskStorage({
	destination: './',
	filename: function (req, file, cb) {
		cb(null, file.originalname)
	}
});

const fileFilter = (req, file, cb) => {
	if (file.originalname.indexOf('.md') > -1) {
		// The function should call `cb` with a boolean
		// to indicate if the file should be accepted
		cb(null, true)
	}

	// To reject this file pass `false`, like so:
	cb(null, false)

}

const upload = multer({ dest: 'uploads/', storage: storage, fileFilter: fileFilter }).single('file');

// 单文件上传
router.post("/", upload, (req, res) => {
	if (!req.file) {
		res.send({ 'data': null, 'code': '0001', msg: '文件格式不支持' });
		return;
	}
	if (!req.body.title) {
		res.send({ 'data': null, 'code': '0002', msg: 'title 不能为空' });
		return;
	}
	fs.readFile(req.file.destination + req.file.originalname, 'utf8', (err, data) => {
		if (req.body.id) {
			handleToMongoDB.update('blog', {_id: ObjectID(req.body.id)}, {html: marked(data), title: req.body.title, updateTime: new Date().format("yyyy-MM-dd hh:mm:ss")});
		} else {
			handleToMongoDB.insert('blog', {html: marked(data), title: req.body.title, createTime: new Date().format("yyyy-MM-dd hh:mm:ss")});
		}
	})
	res.send({'data': 'null', 'code': '0000'});
});

module.exports = router;