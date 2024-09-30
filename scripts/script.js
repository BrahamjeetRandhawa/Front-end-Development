// JavaScript Document
console.log("hi");

var Menu = document.querySelector("nav:first-of-type button");

console.log(Menu);

Menu.onclick = openMenu;

function openMenu() {
    var deNav = document.querySelector("nav:nth-of-type(2)");

    deNav.classList.add("toonMenu");
}


var Menu_2 = document.querySelector("nav:nth-of-type(2) button");

console.log(Menu_2);

Menu_2.onclick = sluitMenu;

function sluitMenu() {
    var deNav_2 = document.querySelector("nav:nth-of-type(2)");

    deNav_2.classList.add("verbergMenu");
}







// Menu_2.addEventListener('click', () =>)





var img_scale = document.querySelector(".Fanta section img:first-of-type");

img_scale.onclick = vergroot;

function vergroot() {
    var scaleImg = document.querySelector(".Fanta section img:first-of-type");
    scaleImg.classList.add("vergroten");
}



var img_back = document.querySelector(".vergroten");

window.addEventListener('scroll', verklein);

function verklein() {
    var klein = document.querySelector(".vergroten");
    klein.classList.remove("vergroten");
}
