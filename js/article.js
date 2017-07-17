/**头部，底部导入页面**/
$("#header").load("header.html");
$("#footer").load("footer.html");

/**获取url中的数据**/
var num;
getUrl("articleId")
function getUrl(name){
	var reg = new RegExp("(^|&)"+name+"=([^&]*)(&|$)")
    num = window.location.search.substr(1).match(reg)[2];
}

/**导入内容**/
var paper = articlepages["paper"+num].data;
	
$(".typetitle").html(paper.typeTitle)
$(".typeEntitle").html(paper.typeEntitle)
$(".title").html(paper.title)
$(".dateTime").html(paper.updateAt)
$(".author").html(paper.updateByFullName)
$(".artimg").attr("src",paper.coverImg)
$(".arttext").html(paper.content)
	
/****/	
/*图片抖动******************************************************************/
function shake(Oclick,animate){
	Oclick.mouseover(function(){

        	$(this).addClass("animated" +" "+ animate);
	})
	
	Oclick.mouseout(function(){
        	$(this).removeClass("animated"+" "+animate);
	})
}
/****************************************************/
var zan =  $(".like_more");
shake(zan,"rubberBand");
/**点击喜欢文字按钮**/

var likeTipsArr = ["娘娘威武","皇上万岁，万万岁","爱死你啦、MUA~","再点一下试试~"]; 

zan.click(function(){
	if($(".like_tips").text()=="再点一下试试~"){
		$(".like_tips").text("喊你点就点嗦~傻~");
		doMove();
	}else{
		$(".like_tips").text(likeTipsArr[Math.round(Math.random()*likeTipsArr.length)]);
		doMove();
	}
	
	
})

function doMove(){
	$(".like_tips").animate({"top":"0","opacity":"1"},600,"elasticOut")
	    .delay(600).animate({"left":"-500px",opacity:"1"},600,"backIn",function(){
	         $(".like_tips").animate({"top":"-200","left":"458px",opacity:"0"},0)
			 $(".like_more").addClass("yellow");
	    	
	    })
}
