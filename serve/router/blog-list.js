/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date: 2019-06-18 15:40:53
 * @Last Modified by: qiuz
 * @Last Modified time: 2019-06-19 11:02:44
 */

const express = require("express");
const router = express();
const handleToMongoDB = require('../utils/handleToMongoDB');

router.get('/', async (req, res) => {
	const blogList = await handleToMongoDB.find('blog', {});
	res.send({data: blogList, code: '0000'});
});

module.exports = router;
