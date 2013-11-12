/**
 * @fileoverview Kissy_demo - Simple.
 * @author 
 */
/**
 * KISSY.use('kissy_demo/pages/simple/index',function(S,Simple){
 *		new Simple();
 * });
 */
KISSY.add('kissy_demo/pages/simple/index',function(S,Base) {

	var Simple = Base.extend({
		initializer:function(){
			var self = this;

			// Your Code
			alert('ok');
		}
	},{
		ATTRS: {
			A:{
				value:'abc'
			}
		}
	});

	return Simple;
	
},{
	requires:['base']	
});
