$("#header").load("header.html");
$("#footer").load("footer.html");

/*图片抖动******************************************************************/
function shake(Oclick,animate){
	Oclick.mouseover(function(){
        	$(this).addClass("animated" +" "+ animate);
	})
	
	Oclick.mouseout(function(){
        	$(this).removeClass("animated"+" "+animate);
	})
}

/*轮播函数***************************************************************/
function lb1(arr) {
	var Oarr = ["left", "middle", "right", "divbox", "boxlen", "tranclass"];
     	Oarr = arr;
 
	var num = 0;
	
/*左边控件*/
	Oarr[0].click(function() {
		num--;
		lbmove(num);
	})
/*中间控件*/
	Oarr[1].click(function() {
		num = $(this).index();
		lbmove(num);
	})
/*右边控件*/
	Oarr[2].click(function() {
		num++;
		lbmove(num);
	})
/*被控模块*/
	function lbmove(num) {
		num %= Oarr[4];
		Oarr[3].eq(num).show().siblings().hide();
		Oarr[1].eq(num).addClass(Oarr[5]).siblings().removeClass(Oarr[5]);
	}
}
/*****************************************************************************/
/*第一个轮播*/
var Lbleft1 = $(".banner_wrap .prev");
var Lbmiddle1 = $(".banner_wrap .middle span");
var Lbright1 = $(".banner_wrap .next");
var Lbbox1 = $(".banner_one");
var Lbboxlen1 = $("#bannerbox1").children().length;
var Lbclass1 = "now";
var Lbarr1 = [Lbleft1, Lbmiddle1, Lbright1, Lbbox1, Lbboxlen1, Lbclass1];
    lb1(Lbarr1);
    shake(Lbleft1,"tada");
    shake(Lbright1,"tada");
/*轮播函数***************************************************************/
function lb2(arr) {
	var Oarr = ["left", "middle", "right", "divbox", "boxlen", "tranclass"];
     	Oarr = arr;
 
	var num = 0;
	
/*左边控件*/
	Oarr[0].click(function() {
		num--;
		num %= Oarr[4];
		/*被控模块*/
		Oarr[3].eq(num).removeClass("animated fadeInRight").addClass("animated fadeInLeft").show().siblings().hide();
		Oarr[1].eq(num).addClass(Oarr[5]).siblings().removeClass(Oarr[5]);
	})
/*中间控件*/
	Oarr[1].click(function() {
		num = $(this).index();
		/*被控模块*/
		Oarr[3].eq(num).removeClass("animated fadeInLeft").addClass("animated fadeInRight").show().siblings().hide();
		Oarr[1].eq(num).addClass(Oarr[5]).siblings().removeClass(Oarr[5]);
	})
/*右边控件*/
	Oarr[2].click(function() {
		num++;
		num %= Oarr[4];
		/*被控模块*/
		Oarr[3].eq(num).removeClass("animated fadeInLeft").addClass("animated fadeInRight").show().siblings().hide();
		Oarr[1].eq(num).addClass(Oarr[5]).siblings().removeClass(Oarr[5]);
	})


}
/*****************************************************************************/		
/*第二个轮播*/
var Lbleft2 = $(".change_line .prev");
var Lbmiddle2 = $("#chanping01>.now_line .now_linebtn_one");
var Lbright2 = $(".change_line .next");
var Lbbox2 = $("#chanping01>.contents>.content_one");
var Lbboxlen2 = $("#chanping01>.contents").children().length;
var Lbclass2 = "now";
var Lbarr2 = [Lbleft2, Lbmiddle2, Lbright2, Lbbox2, Lbboxlen2, Lbclass2];
    lb2(Lbarr2);
    shake(Lbleft2,"tada");
    shake(Lbright2,"tada");

/*显示隐藏函数****************************************************************/
function onoff(Oclick,Oshow){

	Oclick.click(function(){
		var num = Oclick.index($(this));
		
        if(Oshow.eq(num).is(":hidden")){
        	/*这个为定制的功能*/
        	Oclick1.eq(num).addClass("zhankai").end().not(":eq("+num+")").removeClass("zhankai");
        	Oshow.eq(num).slideToggle().end().not(":eq("+num+")").slideUp();
        }else{
        	/*这个为定制的功能*/
        	Oclick1.eq(num).removeClass("zhankai");
        	Oshow.eq(num).slideUp();
        }

	})
}
/********************************************************************使用函数*/

/*第一次轮回调用*/
var Oclick1 = $(".shousuo_icon");
var Oclick2 = $(".centerimg");
var Oshow =$(".yewucontent_ditail");
    onoff(Oclick1,Oshow);
    onoff(Oclick2,Oshow);
    shake(Oclick1,"tada");
    shake(Oclick2,"tada");


    


/*第三个轮播*/
var Lbleft3 = $(".team_change .prev");
var Lbmiddle3 = $(".team_change .middle_points span");
var Lbright3 = $(".team_change .next");
var Lbboxwrap = $(".team_move");
var Lbbox3 = $(".team_move>.twoteam_wrap");
var Lbboxlen3 = $(".team_move").children().length;
var Lbclass3 = "now";
var Lbarr3 = [Lbleft3, Lbmiddle3, Lbright3, Lbbox3, Lbboxlen3, Lbclass3];
    lb3(Lbarr3);
    shake(Lbleft3,"tada");
    shake(Lbright3,"tada");
    
    
function lb3(arr){
	var Oarr = ["left", "middle", "right", "divbox", "boxlen", "tranclass"];
     	Oarr = arr;
 
	var num = 0;

/*左边控件*/
	Oarr[0].click(function(){
		num--;
		num %= Oarr[4];
		/*被控模块*/
		Lbboxwrap.prepend(Lbboxwrap.children().last()).css("left",-1130).animate({left:500},500).animate({left:0},500)
		Oarr[1].eq(num).addClass(Oarr[5]).siblings().removeClass(Oarr[5]);
})
	
	
/*右边控件*/
	Oarr[2].click(function(){
		num++;
		num %= Oarr[4];
		/*被控模块*/
	Lbboxwrap.animate({left:500},500).animate({left:-1130},500,function(){
		$(this).css("left",0).append($(this).children().first())
	});
	Oarr[1].eq(num).addClass(Oarr[5]).siblings().removeClass(Oarr[5]);
	
	
	
})

}
/*轮播结束*/

