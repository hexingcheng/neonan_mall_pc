/**
 * Created by lee on 16/6/18.
 */
define(function(require, exports, module){
    require('jquery');
    var userPublic = require("../user-public");
    var $ = jQuery;

    var _dom = {
        init : function(){
            var _this = this;
            $(function() {
                _this.domInit();
            })
        },
        domInit : function(){
            userPublic.init();
        }
    };

    exports.initPage = function(){
        _dom.init();
    };

});