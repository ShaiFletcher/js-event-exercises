let menuElem = document.getElementById('stuff');
let titleElem = menuElem.querySelector('.title');

titleElem.onclick = function() {
menuElem.classList.toggle('open');
};