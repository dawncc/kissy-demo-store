/*
combined files : 

src/config

*/

/*
 * http://g.tbcdn.cn/demo/kissy_demo/0.0.1/config.js
 */
 (function(){
 	KISSY.config({
        debug: true, //启用debug模式
    });
 	if (KISSY.Config.debug) {
 		var srcPath = "../../";
 		KISSY.config({
 			packages:[
 			{
 				name:"kissy_demo",
 				path:srcPath,
 				charset:"gbk",
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
					path: 'http://g.tbcdn.cn/demo/kissy_demo/0.0.1',
					ignorePackageNameInUri: true
				}
				]
			});
 	}
 })();

