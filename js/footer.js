//$(function(){
	var musicIndex = 0;
	$(".music").find("span").click(function(){
		musicIndex++;
		index = $(this).index();
		$(".footer_wrap").append('<audio class="myaudio'+ musicIndex +'" src="music/sound0'+ index +'.mp3" autoplay></audio>');
		var removeIndex = musicIndex;
		setTimeout(function(){
			$(".myaudio"+removeIndex).remove();
		},3000);
		
	});
	
//})

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
var Amusic =  $(".music").find("span");
shake(Amusic,"rubberBand");


