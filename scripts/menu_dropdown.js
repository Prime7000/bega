var menu_dropdown = document.querySelector(".menu_dropdown");
var nav_links_android = document.querySelector(".nav-links_android");
var open = 1, closed = 0;
var menustate = closed;
nav_links_android.onclick = ()=>{
    menustate ++;
    if(menustate > open){
        menustate =closed;
    }
}
//create a timer to automatically notice the states
setInterval(()=>{
    if(menustate == open){
        menu_dropdown.style.display = "flex";
    }
    else{
        menu_dropdown.style.display = "none";
    }
}, 10);