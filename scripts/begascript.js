//This would contain the basic scripting of the website
var background_main = document.querySelectorAll(".divbody");
var timer= 0;
var change_time = 0;
var bg_loc = 0;
var change_images = Array("cdc-VdkZz0v7EM8-unsplash", "logan-moreno-gutierrez-fN6K30xtiKE-unsplash", "national-cancer-institute-2fyeLhUeYpg-unsplash");
var flex_images = document.querySelector(".flex_images");

var people_count = document.querySelector(".people_count");
var main_body_background = document.querySelector(".main_body_background");
var main_body_background_p = document.querySelector(".main_body_background p");

var people = 1000, people_start = 0;
var background_opacity = [];
setInterval(function(){
	people_start +=2;
	if(people_start >= people){
		people_start = people;
	}
	timer += 1;

	//the controls
	if(change_time > 2){
		change_time = 0;
		bg_loc = 0;

	}
	if(timer >1000){
		timer = 0;
		change_time +=1;
		bg_loc -= screen.width-17;
		console.log(bg_loc);
	}

	if (bg_loc > screen.width * 2) {
		bg_loc = 0;
		change_time =0;
	}
	


	//display effect
	//loop through
	

	for(var i=0; i<background_main.length; i++){
		
		background_main[i].style.backgroundImage = "url(images/"+change_images[i]+".jpg)";
		background_main[i].style.opacity = background_opacity[i];
	}

	people_count.innerText = people_start;
	flex_images.style.left = bg_loc + "px";
	
}, 10);

var a=0, ot=main_body_background_p.style.top;
