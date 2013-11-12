
/*
 * http://g.tbcdn.cn/demo/kissy_demo/@@version/config.js
 */
(function(){
	if (KISSY.Config.debug) {
		var srcPath = "../../";
		KISSY.config({
			packages:[
				{
					name:"kissy_demo",
					path:srcPath,
					charset:"utf-8",
					ignorePackageNameInUri:true,
					debug:true
				}
			]
		});
	} else {
		KISSY.config({
			packages: [
				{
					name: 'kissy_demo',
					// 修改 abc.json 中的 version 字段来生成版本号
					path: 'http://g.tbcdn.cn/demo/kissy_demo/@@version',
					ignorePackageNameInUri: true
				}
			]
		});
	}
})();
