/* 
 * Application : Demo Scoped App
 * ClassName   : sys_script_include
 * Created On  : 2019-10-31 12:55:08
 * Created By  : admin
 * Updated On  : 2019-10-31 12:55:17
 * Updated By  : admin
 * URL         : /sys_script_include.do?sys_id=dd9007cadbbc0010343f58b3ca9619b1
 */
/**
 * Class Description
 * 
 * @class 
 * @author System Administrator [admin]
 * @memberof x_308211_demo_scop.module:sys_script_include
 */
var tst = Class.create();
tst.prototype = /** @lends x_308211_demo_scop.module:sys_script_include.tst.prototype */ {
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
    type: 'tst'
};
