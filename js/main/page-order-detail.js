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
            var $numInput = $("#item-number");
            var $numInputComponent = $(".num-wrap-component");
            var $sub = $numInputComponent.find(".subtraction-calc");
            var $plus = $numInputComponent.find(".plus-calc");
            $numInput.on("keydown", function(eve){
                var kc = eve.which;
                setTimeout(function(){      // 立即获取的值跟keydown事件获取上有所冲突
                    // 排除数字键 删除键 和 左右键
                    if(!(kc >47 && kc < 58) && kc != 8 && kc != 37 && kc != 39){
                        $numInput.val(1);
                    } else {
                        // 删除按钮删除到input中无值的情况下
                        if(!$numInput.val())
                            $numInput.val(1);
                    }
                    checkoutValidate()
                }, 10)
            });
            checkoutValidate();
            function checkoutValidate(max){
                max = max ? max : 9999;
                var val = parseInt($numInput.val());
                if(val == 1){
                    $sub.attr("disabled", true);
                } else {
                    $sub.attr("disabled", false);
                }
                if(max && val == max){
                    $plus.attr("disabled", true);
                } else {
                    $plus.attr("disabled", false);
                }
                console.log(val)
            }
            $sub.on("click", function(){
                var val = parseInt($numInput.val());
                $numInput.val(--val);
                checkoutValidate();
            })
            $plus.on("click", function(){
                var val = parseInt($numInput.val());
                $numInput.val(++val);
                checkoutValidate();
            })
        }
    };

    exports.initPage = function(){
        _dom.init();
    };

});