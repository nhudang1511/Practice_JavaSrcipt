const form = document.querySelector(".form");
const input_grocery = document.getElementById("grocery");
const alert_item = document.querySelector(".alert");
const list = document.querySelector(".grocery-list");
const grocery_container = document.querySelector(".grocery-container");
const clear_btn = document.querySelector(".clear-btn");
const submit_btn = document.querySelector(".submit-btn");

form.addEventListener("submit",addItem);
clear_btn.addEventListener("click",clearFunc);
window.addEventListener("DOMContentLoaded", setupItems);

let editFlag = false;
let editId = "";
let editElement;

function addItem(e){
    e.preventDefault();
    const value = input_grocery.value;
    const id = new Date().getTime().toString();

    if(value && !editFlag){
        createListItem(id,value);
        grocery_container.classList.add("show-container");
        displayAlert("item added","sucessfull");
        //set local storage
        addToLocalStorage(id, value);
        //set back to default
        getDefault();
    }
    else if(value && editFlag){
        editElement.innerHTML = value;
        displayAlert("item changed","sucessfull");
        editLocalStorage(editId, value);
        getDefault();
    }
    else{
        displayAlert("please enter item","danger");
    }
}

function displayAlert(context, active){
    alert_item.innerHTML = context;
    alert_item.classList.add(`alert-${active}`);

    //set timeout alert
    setTimeout(function(){
        alert_item.innerHTML="";
        alert_item.classList.remove(`alert-${active}`);
    },1000);
}
function clearFunc(){
    const items = document.querySelectorAll(".item");

    if(items.length > 0){
        items.forEach(function(item){
            list.removeChild(item);
        });
    }
    grocery_container.classList.remove("show-container");
    displayAlert("empty value","danger");
    getDefault();
    localStorage.removeItem("list");
}
function getDefault(){
    input_grocery.value = "";
    submit_btn.innerHTML = "submit";
    editFlag = false;
    editId = "";
}
function deleteFunc(e){
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
    list.removeChild(element);
    if(list.children.length === 0){
        grocery_container.classList.remove("show-container");
    }
    displayAlert("empty value","danger");
    getDefault();
    removeFromLocalStorage(id);
}
function editFunc(e){
    editElement = e.currentTarget.parentElement.previousElementSibling;
    const element = e.currentTarget.parentElement.parentElement;

    editFlag = true;
    submit_btn.innerHTML = "edit";
    input_grocery.value = editElement.innerHTML;
    editId = element.dataset.id;
}

//local storage

//add to local storage
function addToLocalStorage(id, value) {
    const grocery = { id, value };
    let items = getLocalStorage();
    items.push(grocery);
    localStorage.setItem("list", JSON.stringify(items));
}

//remove to local storage
function removeFromLocalStorage(id) {
    let items = getLocalStorage();
    items = items.filter(function (item) {
      if (item.id !== id) {
        return item;
      }
    });
    
    localStorage.setItem("list", JSON.stringify(items));
}  
function editLocalStorage(id, value) {
    let items = getLocalStorage();
    items = items.map(function (item) {
      if (item.id === id) {
        item.value = value;
      }
      return item;
    });
    localStorage.setItem("list", JSON.stringify(items));
  }
  

function getLocalStorage() {
    return localStorage.getItem("list")
      ? JSON.parse(localStorage.getItem("list"))
      : [];
}

function setupItems() {
    let items = getLocalStorage();
  
    if (items.length > 0) {
      items.forEach(function (item) {
        createListItem(item.id, item.value);
      });
      grocery_container.classList.add("show-container");
    }
}
function createListItem(id, value) {
    const element = document.createElement("article");
    element.classList.add("item");
        //create unit data-id of element 
    const attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = `<p class="item-title">${value}</p>
        <div class="btn-container">
            <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
            </button>
            <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
            </button>
        </div>`;
        //setting edit and delete button
    const edit_btn = element.querySelector(".edit-btn");
    edit_btn.addEventListener("click",editFunc);
    const delete_btn = element.querySelector(".delete-btn");
    delete_btn.addEventListener("click",deleteFunc);
        //add element in list
    list.appendChild(element);
}
