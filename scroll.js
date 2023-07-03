const nav_toggle = document.querySelector(".nav-toggle");
const links_container = document.querySelector(".links-container");
const links = document.querySelector(".links");
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

const nav_bar = document.getElementById("nav");

window.addEventListener("scroll",function(){
    
    const scrollHeight = window.pageYOffset;
    const nav_height = nav_bar.getBoundingClientRect().height;

    if(scrollHeight>nav_height){
        nav_bar.classList.add("fix-nav");
    }
    else{
        nav_bar.classList.remove("fix-nav");
    }
    
});
nav_toggle.addEventListener("click",function(){
    //links_container.classList.toggle("show-links");
   const links_height = links.getBoundingClientRect().height;
   const container_height = links_container.getBoundingClientRect().height;

   //console.log(links_height);
    if(container_height===0){
      links_container.style.height = `${links_height}px`;
     }
    else{
      links_container.style.height = 0;
     }

});

const scroll_link = document.querySelectorAll(".scroll-link");
scroll_link.forEach(function(link){
    link.addEventListener("click",function(e){
        e.preventDefault();

        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        const containerHeight = links_container.getBoundingClientRect().height;
        const nav_height = nav_bar.getBoundingClientRect().height;
        const fixedNav = nav_bar.classList.contains("fix-nav");

        let position = element.offsetTop - nav_height;

        if(!fixedNav){
            position = position - nav_height;
        }
        if (nav_height > 100) {
            position = position + containerHeight;
          }
        window.scrollTo({
            left:0,
            top:position,
        });
        links_container.style.height=0;
    });
}); 