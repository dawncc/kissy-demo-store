/*
combined files : 

src/mods/loader/index

*/
/**
 * @fileoverview Kissy_demo - Loader.
 * @author 
 */
/**
 * KISSY.use('kissy_demo/mods/loader/index',function(S,Loader){
 *		new Loader();
 * });
 */
KISSY.add('src/mods/loader/index',function(S,Base) {

	var Loader = Base.extend({
		initializer:function(){
			var self = this;

			// Your Code
			alert('ok');
		}
	},{
		ATTRS: {
			// 这里是初始参数和默认值
			A:{
				value:'abc'
			}
		}
	});

	return Loader;
	
},{
	requires:['base']	
});

