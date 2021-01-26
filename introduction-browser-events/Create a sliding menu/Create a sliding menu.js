let menuElem = document.getElementById('stuff');
let titleElem = menuElem.querySelector('.title');
titleElem.addEventListener("mousedown", e =>{
    menuElem.classList.toggle('open');
    
});