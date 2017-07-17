$(".listdown").hover(function() {
	$(this).find("ul").stop().slideDown(1000, "elasticOut");
	$(this).addClass("bgcolor");
	
},function(){
	$(this).stop().find("ul").hide();
	$(this).removeClass("bgcolor");
})

$(".wrap>li>ul>li").hover(function() {
	$(this).animate({"padding-left":"70px"},500);
	
},function(){
	$(this).animate({"padding-left":"30px"},500);
})
