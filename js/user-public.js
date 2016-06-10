/**
 * Created by lenovo on 2016/6/5.
 */
(function($){
    $(function() {

        //  left menu
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

        // popover
        var $commentMask = $(".nn-comment-mask");
        var $commentBox = $(".nn-comment-content");
        function showPopover(){
            $commentMask.css("display", "block");
            $commentBox.css("display", "block");
            $("body").addClass("forbidden-scroll");
        }
        function hiddenPopover(){
            $commentMask.css("display", "none");
            $commentBox.css("display", "none");
            $("body").removeClass("forbidden-scroll");
        }
        $("#nn-order-list-wrap").on("click", ".comment", function(){        // order list page show comment popover
            showPopover()
        });
        // address manage show add address popover
        $("#add-usual-address").on("click", function(){
            showPopover()
        });
        $commentBox.on("click", ".close-comment", function(){
            hiddenPopover()
        });
        $commentMask.on("click", function(){
            hiddenPopover()
        })
        

    })
})(jQuery)