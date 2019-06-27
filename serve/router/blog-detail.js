/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date: 2019-06-18 15:40:53
 * @Last Modified by: qiuz
 * @Last Modified time: 2019-06-27 11:35:44
 */

const express = require("express");
const router = express();
const handleToMongoDB = require('../utils/handleToMongoDB');
const ObjectID = require('mongodb').ObjectID;

router.post('/', async (req, res) => {
	console.log(req.body);
	const findBlog = await handleToMongoDB.findOne('blog', { _id: ObjectID(req.body.id) });
	res.type('json');
	res.send({data: findBlog, code: '0000'});
});

module.exports = router;
