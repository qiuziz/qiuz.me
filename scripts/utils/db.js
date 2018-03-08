/*
 * @Author: qiuziz
 * @Date: 2018-03-05 10:41:25
 * */

const MongoClient = require('mongodb').MongoClient;
const DB_CONN_STR = 'mongodb://localhost:27017/qiuz_me'; // 数据库为 qiuz_me

// const insertData = function(db, callback) {
// 	// 连接到表 site
// 	const collection = db.collection('site');

// 	// 插入数据
// 	const data = [{"name": "菜鸟教程", "url": "www.runoob.com"}, {"name": "菜鸟工具", "url": "c.runoob.com"}];
// 	collection.insert(data, function(err, result) {
// 		if (err) {
// 			console.log('Error:' + err);
// 			return;
// 		}
// 		callback(result);
// 	});
// }


function connect(callback) {
	MongoClient.connect(DB_CONN_STR, function(err, db) {
		callback(err, db);
	});
}

module.exports = connect;
