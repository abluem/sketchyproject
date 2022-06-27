const square = document.createElement('div');
const box = document.querySelector('#box');
const resetBoxes = document.querySelector('#resetbutton');

square.style.background = '#fff';

window.addEventListener('load', function() {
  for (i = 0; i < 256; i++) {
    cloneSquare();
  }
});

box.addEventListener('mouseover', function(e) {
  e.target.style.background = 'linear-gradient(red,orange,yellow,green,blue,indigo,violet)';
});

resetBoxes.addEventListener('click', function() {
  let numBoxes = prompt('How many squares per side do you want? Please type a number between 1-100.', '');

  box.style.setProperty('grid-template', `repeat(${numBoxes}, 1fr) / repeat(${numBoxes}, 1fr)`);

  if (numBoxes > 0 && numBoxes < 101) {
    while (box.firstChild) {
      box.removeChild(box.firstChild);
    }

    let boxDimensions = numBoxes * numBoxes;

    for (i = 0; i < boxDimensions; i++) {
      cloneSquare();
    }

    } else {
        alert('Sorry, please enter a number between 1-100 next time.');
    }
});

function cloneSquare() {
    let squares = square.cloneNode(true);
    box.appendChild(squares);
}