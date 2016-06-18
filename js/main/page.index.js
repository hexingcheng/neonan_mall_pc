/**
 * Created by lee on 16/6/18.
 */
define(function(require, exports, module){
    require('jquery');
    require("swiper");
    var $ = jQuery;

    var _dom = {
        init : function(){
            var _this = this;
            $(function() {
                _this.domInit();
            })
        },
        domInit : function(){
            // 首页轮播初始化
            var indexSwiper = new Swiper('#index-slider', {
                pagination: '#slider-pagination',
                paginationClickable: true,
                //autoplay: 4000,
                loop: true
            });
        }
    };

    exports.initPage = function(){
        _dom.init();
    };

});