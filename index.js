// Your code here

function moveDodgerLeft() {
    // .replace removes the "px" and replaces it so that the string is just the number representing the position of the dodger
    let leftNumbers = dodger.style.left.replace("px", "");
    // takes in the string of the dodger position and turns it into an int
    let left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      // if the dodger position is greater than the edge of the black box sub 1
      dodger.style.left = `${left - 5}px`;
    }
  } 

  function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
  
    if (left < 360) { //360px is end of box
      dodger.style.left = `${left + 5}px`;
    }
  } 

  function moveDodgerUp() {
    let bottomNumbers = dodger.style.bottom.replace("px", "");
    let bottom = parseInt(bottomNumbers, 10);
  
    if (bottom < 380) { //380px is end of box
      dodger.style.bottom = `${bottom + 5}px`;
    }
  } 

  function moveDodgerDown() {
    let bottomNumbers = dodger.style.bottom.replace("px", "");
    let bottom = parseInt(bottomNumbers, 10);
  
    if (bottom > 0) { 
      dodger.style.bottom = `${bottom - 5}px`;
    }
  } 

  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
    else if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
    else if (e.key === "ArrowUp") {
        moveDodgerUp();
    }
    else if (e.key === "ArrowDown") {
        moveDodgerDown();
    }
  }); 