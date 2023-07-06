const projects = [
    {
      id: 1,
      title: "count timer",
      img: "./project_images/count_timer.png",
      href: "./count_timer.html",
    },
    {
      id: 2,
      title: "counter",
      img: "./project_images/counter.png",
      href: "./counter.html",
    },
    {
        id: 3,
        title: "lorem isum",
        img: "./project_images/lorem_isum.png",
        href: "./lorem_isum.html",
      },
    {
      id: 4,
      title: "menu",
      img: "./project_images/menu.png",
      href: "./menu.html",
    },
    {
        id: 5,
        title: "model",
        img: "./project_images/model.png",
        href: "./model.html",
    },
    {
        id: 6,
        title: "nav bar",
        img: "./project_images/nav_bar.png",
        href: "./nav_bar.html",
      },
      {
        id: 7,
        title: "question",
        img: "./project_images/question.png",
        href: "./question.html",
      },
      {
          id: 8,
          title: "random background",
          img: "./project_images/random_bg.png",
          href: "./random_background.html",
        },
      {
        id: 9,
        title: "review",
        img: "./project_images/review.png",
        href: "./review.html",
      },
      {
          id: 10,
          title: "scroll",
          img: "./project_images/scroll.png",
          href: "./scroll.html",
      },
      {
        id: 11,
        title: "slide bar",
        img: "./project_images/slide_bar.png",
        href: "./slide_bar.html",
      },
      {
          id: 12,
          title: "tab",
          img: "./project_images/tab.png",
          href: "./tab.html",
        },
      {
        id: 13,
        title: "video",
        img: "./project_images/video.png",
        href: "./video.html",
      },
];

const section_center = document.querySelector(".section-center");

const project_filter = projects.map(function(project){
    return `<article class="project-item">
    <a href= ${project.href} target="_blank">
        <img class="project-img" src= ${project.img} alt="project_image" >
        <p class="project-name"> ${project.title}</p>
    </a>
  </article>`;
}).join("");

section_center.innerHTML = project_filter;