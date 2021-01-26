document.addEventListener("mousedown", e => {
     let field = document.getElementById("field");
     let fieldCoords = field.getBoundingClientRect()
     let ballCoords = {
          top: field.clientTop + e.offsetY - field.clientTop - ball.clientHeight / 2,
          left: field.clientLeft + e.offsetX - field.clientLeft - ball.clientWidth / 2
     };
     
     if (ballCoords.top < 0) ballCoords.top = 0;
     
     if (ballCoords.left < 0) ballCoords.left = 0;
      
     if (ballCoords.left + ball.clientWidth > field.clientWidth) {
     ballCoords.left = field.clientWidth - ball.clientWidth;
     }
     
     if (ballCoords.top + ball.clientHeight > field.clientHeight) {
     ballCoords.top = field.clientHeight - ball.clientHeight;
     }
     
     ball.style.left = ballCoords.left + 'px';
     ball.style.top = ballCoords.top + 'px';
});
