const path = require("path");
function resolve(dir) {
	return path.join(__dirname, dir);
}

// 默认拥有@ 表示src的路径 脚手架已经配置好了
module.exports = {
	chainWebpack: (config) => {
		// 用于配置别名
		config.resolve.alias
			.set("assets", resolve("src/assets"))//assets表示指向根目录下的src/assets路径
			.set("views", resolve("src/views"))//views表示指向根目录下的src/views路径
	},
}