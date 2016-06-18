$(document).ready(function(){
	$('.next-img').on('click',function(){
		var all = $('li','.list-ul').length;
		var top = parseInt($('.list-ul').css('top'));
		if(Math.abs(top)==(all-3)*122){
			return;
		}
		$('.list-ul').animate({
			top:"+=-122px"
		})
	})
	$('.per-img').on('click',function(){
		var top = $('.list-ul').css('top');
		if(top=="0px"){
			return;
		}
		$('.list-ul').animate({
			top:"+=122px"
		})
	})
    //点击到中图
    var midChangeHandler = null;
	
    $("#imageMenu li img").bind("click", function(){
		if ($(this).attr("id") != "onlickImg") {
			var mid = $(this).attr('data-mid');
			var big = $(this).attr('data-big');
			midChange(mid,big);
			$("#imageMenu li").removeAttr("id");
			$(this).parent().attr("id", "onlickImg");
		}
	})

    function midChange(src,big) {
        $("#midimg").attr("src", src).load(function() {
            changeViewImg(big);
        });
    }

    //大视窗看图
    function mouseover(e) {
        if ($("#winSelector").css("display") == "none") {
            $("#winSelector,#bigView").show();
        }
        $("#winSelector").css(fixedPosition(e));
        e.stopPropagation();
    }
    function mouseOut(e) {
        if ($("#winSelector").css("display") != "none") {
            $("#winSelector,#bigView").hide();
        }
        e.stopPropagation();
    }


    $("#midimg").mouseover(mouseover); //中图事件
    $("#midimg,#winSelector").mousemove(mouseover).mouseout(mouseOut); //选择器事件

    var $divWidth = $("#winSelector").width(); //选择器宽度
    var $divHeight = $("#winSelector").height(); //选择器高度
    var $imgWidth = $("#midimg").width(); //中图宽度
    var $imgHeight = $("#midimg").height(); //中图高度
    var $viewImgWidth = $viewImgHeight = $height = null; //IE加载后才能得到 大图宽度 大图高度 大图视窗高度

    function changeViewImg(big) {
    	$("#bigView img").attr("src",big);   
    }
    $("#bigView").scrollLeft(0).scrollTop(0);
    function fixedPosition(e) {
        if (e == null) {
            alert('出现错误')
            return;
        }
        var $imgLeft = $("#midimg").offset().left; //中图左边距
        var $imgTop = $("#midimg").offset().top; //中图上边距
        X = e.pageX - $imgLeft - $divWidth / 2; //selector顶点坐标 X
        Y = e.pageY - $imgTop - $divHeight / 2; //selector顶点坐标 Y
        X = X < 0 ? 0 : X;
        Y = Y < 0 ? 0 : Y;
        X = X + $divWidth > $imgWidth ? $imgWidth - $divWidth : X;
        Y = Y + $divHeight > $imgHeight ? $imgHeight - $divHeight : Y;
        
        if ($viewImgWidth == null) {
            $viewImgWidth = $("#bigView img").outerWidth();
            $viewImgHeight = $("#bigView img").height();
            if ($viewImgWidth < 200 || $viewImgHeight < 200) {
                $viewImgWidth = $viewImgHeight = 800;
            }

            $height = $divHeight * $viewImgHeight / $imgHeight;
            $("#bigView").width($divWidth * $viewImgWidth / $imgWidth);
            $("#bigView").height($height);
        }
        var scrollX = X * $viewImgWidth / $imgWidth;
        var scrollY = Y * $viewImgHeight / $imgHeight;

        $("#bigView img").css({ "left": scrollX * -1, "top": scrollY * -1 });
        $("#bigView").css({ "top": 0, "left": $(".preview").position().left + $(".preview").width() });
        var obj = { left: X, top: Y };
        console.log(JSON.stringify(obj))
        return { left: X, top: Y };
    }

});