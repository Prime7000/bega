var background_main = document.querySelectorAll(".divbody");
var main_body_background = document.querySelector(".main_body_background");
var main_body_background_p = document.querySelector(".main_body_background p");

window.onscroll = function(){
		reveal();
		hidebg();

	}
function reveal(){
	var mbody = document.querySelectorAll(".body1");
	for(var i=0; i<mbody.length; i++){
		var windowHeight = window.innerHeight;
		var elementTop = mbody[i].getBoundingClientRect().top;
		var elementVisible = 150;
		if(elementTop < windowHeight - elementVisible){
			mbody[i].style.opacity = 1;
		}
		else{
			mbody[i].style.opacity = 0;
		}
	}
}
function hidebg(){
	for(var j=0; j<main_body_background.length; j++){
		var bg_top = main_body_background[i].getBoundingClientRect().top;
		var windowHeight = window.innerHeight;
		main_body_background_p.style.top = pageYOffset+100+"px";
		if(bg_top < windowHeight + 200){
			main_body_background[i].style.opacity = 0;
		}
		else{
			main_body_background[i].style.opacity = 1;
		}
	}
}