const switch_btn = document.querySelector(".switch-button");
const video = document.querySelector(".video-container");
const preload = document.querySelector(".preload");

window.addEventListener("load",function(){
    preload.classList.add("hide");
});

switch_btn.addEventListener("click",function(){
    if(!switch_btn.classList.contains("new-switch")){
        switch_btn.classList.add("new-switch");
        video.pause();
    }
    else{
        switch_btn.classList.remove("new-switch");
        video.play();
    }
});