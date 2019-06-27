const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
	fixBabelImports('antd-mobile', {
		libraryName: 'antd-mobile',
		style: 'css',
	}),
	fixBabelImports('antd', {
		libraryName: 'antd',
		libraryDirectory: 'es',
		style: 'css',
	}),
	addLessLoader({
		strictMath: true,
		noIeCompat: true,
		localIdentName: '[local]--[hash:base64:5]' // if you use CSS Modules, and custom `localIdentName`, default is '[local]--[hash:base64:5]'.
	})
);
