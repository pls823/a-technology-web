/**头部，底部导入页面**/
$("#header").load("header.html");
$("#footer").load("footer.html");

/**全局变量num（页数），页面导入初始新闻**/
var num = 0;
newsdown(num);

/**点击显示下页新闻**/
$(".list_more").click(function() {
	num++;
	if(num < Object.keys(newspages).length) {
		newsdown(num);
	}
	if(num == Object.keys(newspages).length-1){
		$(".list_more").hide();
	}
});


/**点击跳转到文章页**/
$("#articleList").delegate(".content_one","click",(function(){
	
	window.open("article.html?page=news&articleId="+$(this).attr("articleId"),"_blank")
	
}))



/**导入data中的json数据**/
function newsdown(num) {
	var page = newspages["p" + num].newsdate;
	for(var i = 0; i < page.length; i++) {
		

		var news = $("#itemHtml").html().replace("$number$", page[i].img)
			                            .replace("$title$", page[i].title)
			                            .replace("$date$", page[i].odate)
			                            .replace("$p$", page[i].discrible)
			                            .replace("$articleId$", page[i].articleId)
		$("#articleList").append(news);
		
	}
}