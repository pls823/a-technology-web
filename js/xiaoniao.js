/*开始动画*/
var timer = setTimeout(function() {
	$(".welcome_content").css({ "display": "block" });
	$(".welcome").animate({ "height": "700px" }, "1s", function() {
		$(".welcome_wrap").delay(1000).slideUp(1000);
	})
}, 3000);

/*获取高度*/
var oWrap = document.querySelector(".content_wrap");
var oContent = document.querySelector(".content");
var aLis = document.querySelectorAll(".content>div");
var ifMove = true; //解决鼠标连续触发问题
setSize();
window.onresize = setSize;

function setSize() {
	var screenHeight = document.documentElement.clientHeight - 55;
	var screenWidth = document.documentElement.clientWidth;

	//	设置蒙版尺寸
	$(".wrap_block").height(screenHeight + 55);
	$(".wrap_block").width(screenWidth);

	oWrap.style.height = screenHeight + 'px';
	oWrap.style.width = oContent.style.width = screenWidth + 'px';
	oContent.style.height = screenHeight * 5 + 'px';
	for(var i = 0; i < aLis.length; i++) {
		aLis[i].style.height = screenHeight + 'px';
		aLis[i].style.width = screenWidth + 'px';
	}
}
document.onmousewheel = fn;
document.addEventListener('DOMMouseScroll', fn);

oContent.style.top = 0;

function fn(e) {
	e = e || event;
	var distance = parseInt(oWrap.style.height);
	//var step = distance / 10;
	if(e.wheelDelta > 0 || e.detail < 0) {
		if(ifMove) {
			ifMove = false;
			//console.log("向上滚");
			var topValue = parseInt(oContent.style.top);
			if(topValue < 0) {
				oContent.style.top = topValue + distance + 'px';
			}

			setTimeout(function() {
				console.log("滚那么快干嘛，等着！")
				ifMove = true;
			}, 1000);
		}
	} else {
		if(ifMove) {
			ifMove = false;
			//console.log("向下滚");
			var topValue = parseInt(oContent.style.top);
			if(topValue > -distance * 4) {
				oContent.style.top = parseInt(oContent.style.top) - distance + 'px';
			}

			setTimeout(function() {
				console.log("滚那么快干嘛，等着！")
				ifMove = true;
			}, 1000);
		}
	}
}
//屏幕滚动指定地点
var anchors = $(".header .nav_wrap>div");
$(aLis).each(function(index, ele) {
	$(ele).attr("id", "a" + index);
});
anchors.click(function() {
	if($(this).index()<5){
	var distance = $("#a" + ($(this).index()+1)).get(0).offsetTop;
	oContent.style.top = -distance + 'px';
	$(".nav_li").eq($(this).index()).addClass("now").siblings().removeClass("now");
	}else{
	window.open("index.html");
	}
});
/**获取url中的数据**/
var num;
getUrl("top")
function getUrl(name){
	var reg = new RegExp("(^|&)"+name+"=([^&]*)(&|$)")
    num = window.location.search.substr(1).match(reg)[2];
}
//首页点击
if(!isNaN(num)){
	$(".welcome_wrap").slideUp(0);
	anchors.eq(num).trigger("click");
}


//page1 点击事件
$(".more").click(function(){
	oContent.style.top = -$("#a1").get(0).offsetTop + 'px';
})

//page2 点击事件
function lb4(arr) {
	var Oarr = ["left","right", "divbox", "boxlen"];
     	Oarr = arr;
 
	var num = 0;
	
/*左边控件*/
	Oarr[0].click(function() {
		num--;
		num %= Oarr[3];
		/*被控模块*/
		Oarr[2].eq(num).removeClass("animated fadeInRight").addClass("animated fadeInLeft").show().siblings().hide();
	})

/*右边控件*/
	Oarr[1].click(function() {
		num++;
		num %= Oarr[3];
		/*被控模块*/
		Oarr[2].eq(num).removeClass("animated fadeInLeft").addClass("animated fadeInRight").show().siblings().hide();
	})
}
var Lbleft4 = $(".page2btnl");
var Lbright4 = $(".page2btnr");
var Lbbox4 = $(".page2contentbox>div");
var Lbboxlen4 = $(".page2contentbox").children().length;
var Lbarr4 = [Lbleft4, Lbright4, Lbbox4, Lbboxlen4];
    lb4(Lbarr4);


    //page4滑动门

    $(".page4_B_btns>div").hover(function(){
        var on=$(this).css("background-position-x");
        console.log(on);
	            if(on==0+"px"){
	                $(this).css("cursor","default")
                }else{
                    $(this).css("cursor","pointer")
                }
    })


	$(".page4_B_btn2").click(function(){
		$(".page4_C_body1").animate({"left":"-910px"},500);
		$(".page4_B_btn1").animate({"background-position-x":"80px"},500,function(){
			$(".page4_B_btn2").animate({"background-position-x":"0"},500)
		})
	});
	
	$(".page4_B_btn1").click(function(){
		$(".page4_C_body1").animate({"left":"0"},500);
		$(".page4_B_btn2").animate({"background-position-x":"-80px"},500,function(){
			$(".page4_B_btn1").animate({"background-position-x":"0"},500)
		})
	});
	

