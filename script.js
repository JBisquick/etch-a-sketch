const grid = document.querySelector('#grid');
const slider = document.querySelector('#slider');
const sliderValue = document.querySelector('#slider-value');
let rows = document.querySelectorAll('.row');
let boxes = document.querySelectorAll('.box');

sliderValue.textContent = slider.value;

getGrid(16);

slider.oninput = function() {
  sliderValue.textContent = this.value;
};

function getGrid(gridDimension) {
  deleteGrid();

  for(let i = 0; i <= gridDimension; i++) {
    let row = document.createElement('div');
    row.classList.add('row');
    grid.appendChild(row);
    for(let j = 0; j <= gridDimension; j++) {
      let box = document.createElement('div');
      box.classList.add('box');
      row.appendChild(box);
    }
  }
  grabGrid();
};

function grabGrid() {
  boxes = document.querySelectorAll('.box');
  rows = document.querySelectorAll('.row');
}

function deleteGrid() {
  // Only deleting the grid if the grid has been grabbed
  if (boxes[0] !== "") {
    boxes.forEach((box) => {
      box.remove();
    });  
    
    rows.forEach((row) => {
      row.remove();
    });
  }
};

function getBlack(gridBox) {
  gridBox.style.backgroundColor = 'black';
};

boxes.forEach((box) => {
  box.addEventListener('mouseover', () => {
    getBlack(box);
  });
});