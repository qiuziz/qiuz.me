/*
 * @Author: qiuziz
 * @Date: 2018-03-05 10:15:02
 * */

const express = require("express");
const router = express();
const connect = require('../utils/db');

router.get('/', (req, res) => {
	connect((err, db) => {
		if (err) throw err;
		// 连接到表 aaa
		var collection = db.collection('blog');

		// 查询数据库
		collection.find({}, {_id: 0}).toArray(function(err, doc) {
			if (err) {
				db.close();
				res.status(502).send('fetch error')
				return;
			}
			var music_req = JSON.stringify(doc[0]);
			db.close();
			res.send(music_req);
		})
	});
});

module.exports = router;
