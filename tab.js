const about = document.querySelector(".about");
const tab_btns = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".content");

about.addEventListener("click",function(e){
    const id = e.target.dataset.id;
    // console.log(id);
    if(id){
        tab_btns.forEach(function(tab_btn){
            tab_btn.classList.remove("active");
        });
        e.target.classList.add("active");

        contents.forEach(function(content){
            content.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active");
    }
});