const background_color=["red","green","blue","#F1F5F8"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click',function(){
    const randomNumber = Math.floor(Math.random()*background_color.length);
    console.log(randomNumber);
    document.body.style.backgroundColor=background_color[randomNumber];
    color.innerHTML=background_color[randomNumber];
});