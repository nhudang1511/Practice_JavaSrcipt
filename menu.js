const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./menu_img/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./menu_img/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./menu_img/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./menu_img/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./menu_img/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./menu_img/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./menu_img/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./menu_img/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./menu_img/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "bison steak",
      category: "dinner",
      price: 22.99,
      img: "./menu_img/item-10.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];
const section_menu = document.querySelector(".section-center");
const btn_container = document.querySelector(".list-button");
window.addEventListener("DOMContentLoaded",function(){
  displayMenu(menu);
  displayButton();
});
function displayMenu(menuItem){
  let menufillter = menuItem.map(function(item){
    return `<article class="menu-item">
    <img src= ${item.img} alt="pancake">
    <div class="menu-info">
        <header>
            <h4 class="name">${item.title}</h4>
            <h4 class="price">$${item.price}</h4>
        </header>
       <p>${item.desc}</p>
    </div>
</article>`;
  });
  menufillter = menufillter.join("");
  section_menu.innerHTML = menufillter;
}
function displayButton(){
  const categories = menu.reduce(
    function(values, item){
    if(!values.includes(item.category)){
      values.push(item.category);
    }
    return values;
  },["all"]);
  
  let btns = categories.map(function(category){
    return ` <button class="fillter-btn" data-id=${category}>${category}</button>`;
  }).join("");
  btn_container.innerHTML = btns;
  const btns_filtter = btn_container.querySelectorAll(".fillter-btn");
  btns_filtter.forEach(function(btn){
    btn.addEventListener("click",function(e){
      // console.log(e.currentTarget.dataset.id);
      const pos = e.currentTarget.dataset.id;
      const btn_fillter = menu.filter(function(item){
        if(item.category===pos){
          console.log(item.category)
          return item;
        }
      });
      if(pos==="all"){
        displayMenu(menu);
      }
      else{
        displayMenu(btn_fillter);
      }
    });
  });
}