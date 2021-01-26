const closeButton = document.getElementsByClassName("close");

for (let i = 0; i < closeButton.length; i++) {
  closeButton[i].addEventListener("click", function() {
    this.parentElement.style.display = 'none';
  });
}