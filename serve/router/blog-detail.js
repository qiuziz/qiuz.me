/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date: 2019-06-18 15:40:53
 * @Last Modified by: qiuz
 * @Last Modified time: 2019-06-19 11:38:41
 */

const express = require("express");
const router = express();
const handleToMongoDB = require('../utils/handleToMongoDB');

router.post('/', async (req, res) => {
	console.log(req.body);
	const findBlog = await handleToMongoDB.findOne('blog', { id: req.body.id });
	res.type('json');
	res.send({data: findBlog, code: '0000'});
});

module.exports = router;
