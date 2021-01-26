document.addEventListener("mousedown", e =>{
  if (e.target.className != 'remove-button') 
  return;
  
  let box = e.target.closest('.box');
  box.remove();
});
