document.addEventListener("mouseup", e =>{
  if (e.target.tagName != "LI")
  return;

  if (e.ctrlKey || e.metaKey) {
    toggleSelect(e.target);
  }
  else {
    singleSelect(e.target);
  }
});

/*press.onclick = function(event){
    if (event.target.tagName != "LI")
    return;

    if (event.ctrlKey || event.metaKey) {
      toggleSelect(event.target);
    }
    else {
      singleSelect(event.target);
    }
}
press.onmousedown = function() {
    return false;
  };*/

  function toggleSelect(li) {
    li.classList.toggle('selected');
  }

  function singleSelect(li) {
    let selected = press.querySelectorAll('.selected');
    for(let elem of selected) {
      elem.classList.remove('selected');
    }
    li.classList.add('selected');
}