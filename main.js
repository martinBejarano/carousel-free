'use strict'

let itemsContainer = document.querySelector(".carousel-container__inner-container");
let items = document.querySelectorAll(".carousel-container__item");

let optionsContainer = document.querySelector(".carousel-container__options-contianer");
let options = []

itemsContainer.style.width = `${items.length * 100}%`

items.forEach((item,i)=>{
    items[i].dataset.id = i;
    items[i].style.width = `${100 / items.length}%`
    
    let option = document.createElement("DIV");
    option.className="carousel-container__option"
    option.dataset.id = i

    optionsContainer.appendChild(option)
    options.push(option)
})


let active = options[0];
active.classList.add("active")

options.forEach((option,i)=>{
    options[i].addEventListener("click", ()=>{
        itemsContainer.style.transform = `translateX(-${parseInt(items[i].style.width) * items[i].dataset.id}%)`

        active.classList.remove("active")
        active = options[i];
        active.classList.add("active")
    })
})
