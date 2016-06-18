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
            this.initNumberBox();       // 初始化数字按钮
            this.checkAll();        // 是否选中所有商品

        },
        initNumberBox : function(){
            var $numInput = $(".num-wrap-component .item-number");
            var $numInputComponent = $(".num-wrap-component");
            var $sub = $numInputComponent.find(".subtraction-calc");
            var $plus = $numInputComponent.find(".plus-calc");
            $numInput.on("keydown", function(eve){
                var kc = eve.which;
                var $this = $(this);
                setTimeout(function(){      // 立即获取的值跟keydown事件获取上有所冲突
                    // 排除数字键 删除键 和 左右键
                    if(!(kc >47 && kc < 58) && kc != 8 && kc != 37 && kc != 39){
                        $this.val(1);
                    } else {
                        // 删除按钮删除到input中无值的情况下
                        if(!$this.val())
                            $this.val(1);
                    }
                    checkoutValidate($this)
                }, 10)
            });
            checkoutValidate($numInput);
            function checkoutValidate($input, max){
                max = max ? max : 9999;
                var val = parseInt($input.val());
                var $sub = $input.siblings(".subtraction-calc");
                var $plus = $input.siblings(".plus-calc");
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
            }
            $sub.on("click", function(){
                var $input = $(this).siblings(".item-number")
                var val = parseInt($input.val());
                $input.val(--val);
                checkoutValidate($input);
            });
            $plus.on("click", function(){
                var $input = $(this).siblings(".item-number")
                var val = parseInt($input.val());
                $input.val(++val);
                checkoutValidate($input);
            });
        },
        //  选择所有商品
        checkAll: function(){
            var $selected = $("#select-all");
            var $allCheckbox = $(".checkbox-col-item input[type=checkbox]");
            $selected.on("change", function(){
                console.log($selected.is(":checked"))
                if($selected.is(":checked")){
                    $allCheckbox.prop("checked", true);
                } else {
                    $allCheckbox.prop("checked", false);
                }
            })

        }
    };

    exports.initPage = function(){
        _dom.init();
    };

});