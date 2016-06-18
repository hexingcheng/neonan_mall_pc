/**
 * Created by lee on 16/6/18.
 */
define(function(require, exports, module){
    require('jquery');
    var $ = jQuery;

    var _dom = {
        init : function(){
            var _this = this;
            $(function() {
                _this.domInit();
            })
        },
        domInit : function(){
            // TODO


        }
    };

    exports.initPage = function(){
        _dom.init();
    };

});