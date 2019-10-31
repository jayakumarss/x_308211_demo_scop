/* 
 * Application : Demo Scoped App
 * ClassName   : sys_script_include
 * Created On  : 2019-10-31 12:05:51
 * Created By  : admin
 * Updated On  : 2019-10-31 12:14:40
 * Updated By  : admin
 * URL         : /sys_script_include.do?sys_id=1d057a02dbbc0010343f58b3ca9619e4
 */
/**
 * Class Description
 * 
 * @class 
 * @author System Administrator [admin]
 * @memberof x_308211_demo_scop.module:sys_script_include
 */
var IncidentTest = Class.create();
IncidentTest.prototype = /** @lends x_308211_demo_scop.module:sys_script_include.Incident_Test.prototype */ {
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
    type: 'IncidentTest'
};
