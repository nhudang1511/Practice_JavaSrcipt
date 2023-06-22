const btns = document.querySelectorAll(".btn");
const value = document.getElementById("value");

let count=0;

btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const btn_style =e.currentTarget.classList;
        if(btn_style.contains("decrease")){
            count--;
        }
        else if(btn_style.contains("increase")){
            count++;
        }
        else{
            count=0;
        }
        if(count>0){
            value.style.color="green";
        }
        else if(count<0){
            value.style.color="red";
        }
        else{
            value.style.color="black";
        }
        value.innerHTML=count;
    });
});