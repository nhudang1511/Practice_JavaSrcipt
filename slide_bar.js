const slide_bar = document.querySelector(".slide-center");
const btn_close = document.querySelector(".close-btn");
const slide_bar_toggle=document.querySelector(".sidebar-toggle");

slide_bar_toggle.addEventListener("click",function(){
    slide_bar.classList.toggle("open-slide")
});

btn_close.addEventListener("click",function(){
    slide_bar.classList.add("open-slide");
});