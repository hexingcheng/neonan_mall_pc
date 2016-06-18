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
            var $allSubList = $("#all-sort").find(".sub-menu-list");
            var $allIconToggle = $("#all-sort").find(".icon-toggle");
            $("#all-sort").on("click", ".icon-toggle", function(){
                var $this = $(this);
                var $subList = $this.parents(".list-item").find(".sub-menu-list");
                var flag = $this.hasClass("plus-icon");
                for(var i = 0; i < $allIconToggle.size(); i++){
                    if($allIconToggle.hasClass("subtraction-icon")){
                        $allIconToggle.eq(i)
                            .removeClass("subtraction-icon").addClass("plus-icon")
                            .parents(".list-item").find(".sub-menu-list");
                    }
                }
                $allSubList.slideUp();
                if(flag){
                    $subList.slideDown();
                    $this.toggleClass('plus-icon').toggleClass("subtraction-icon");
                } else {
                    $subList.slideUp();
                }
            })
        }
    };

    exports.initPage = function(){
        _dom.init();
    };

});