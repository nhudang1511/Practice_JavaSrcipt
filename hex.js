const background_color=[0,1,2,3,4,5,6,7,8,9,"A", "B", "C", "D","E", "F"];
const btn = document.getElementById("btn");
const btn_hex = document.getElementsByClassName("hex-color")[0];
const btn_main = document.getElementsByClassName("main-color")[0];
const color_text = document.querySelector(".color");

btn_hex.style.color="rgb(28, 120, 240)";
btn_main.style.color="black";

btn.addEventListener('click',function(){
   let color_item="#";
   for(let i=0;i<6;i++){
    color_item+=background_color[getColorNumber()];
   }
   document.body.style.backgroundColor=color_item;
   color_text.innerHTML=color_item;
});
function getColorNumber(){
    return Math.floor(Math.random()*background_color.length);
}