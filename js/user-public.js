/**
 * Created by lenovo on 2016/6/5.
 */
(function($){
    $(function() {
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
    })
})(jQuery)