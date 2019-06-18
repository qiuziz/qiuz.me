/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date: 2019-06-18 15:40:53
 * @Last Modified by: qiuz
 * @Last Modified time: 2019-06-18 15:40:53
 */

const express = require("express");
const router = express();
const handleToMongoDB = require('../utils/handleToMongoDB');

router.get('/', async (req, res) => {
	const findBook = await handleToMongoDB.findOne('blog', {});
	res.send(findBook);
});

module.exports = router;
