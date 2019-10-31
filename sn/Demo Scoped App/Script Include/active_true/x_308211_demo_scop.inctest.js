/* 
 * Application : Demo Scoped App
 * ClassName   : sys_script_include
 * Created On  : 2019-10-31 12:34:08
 * Created By  : admin
 * Updated On  : 2019-10-31 12:52:55
 * Updated By  : admin
 * URL         : /sys_script_include.do?sys_id=31bbf686dbbc0010343f58b3ca961997
 */
/**
 * Class Description
 * 
 * @class 
 * @author System Administrator [admin]
 * @memberof x_308211_demo_scop.module:sys_script_include
 */
var inctest = Class.create();
inctest.prototype = /** @lends x_308211_demo_scop.module:sys_script_include.inctest.prototype */ {
	/**
	 * Description
	 * 
	 * @returns {undefined}
	 */
	initialize: function() {
	},
	
	/**
	 * Description
	 * 
	 * @returns {boolean}
	 */
	dummy: function(){
		gs.addInfoMessage("Testing devops");
		return true;
	},
	
	type: 'inctest'
};
