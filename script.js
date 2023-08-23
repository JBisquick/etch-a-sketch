const grid = document.querySelector('#grid');
const slider = document.querySelector('#slider');
const sliderValue = document.querySelector('#slider-value');
const colorButtons = document.querySelectorAll('.buttons')
let rows = document.querySelectorAll('.row');
let boxes = document.querySelectorAll('.box');
let color = 'rainbow'

sliderValue.textContent = slider.value;
getGrid(16);

slider.oninput = function() {
  sliderValue.textContent = this.value;
};

function getGrid(gridDimension) {
  deleteGrid();

  for(let i = 0; i < gridDimension; i++) {
    let row = document.createElement('div');
    row.classList.add('row');
    grid.appendChild(row);
    for(let j = 0; j < gridDimension; j++) {
      let box = document.createElement('div');
      box.classList.add('box');
      row.appendChild(box);
    }
  }
  grabGrid();
  changeColor();
};

function grabGrid() {
  boxes = document.querySelectorAll('.box');
  rows = document.querySelectorAll('.row');
};

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

function changeColor() {
  switch (color) {
    case 'black':
      boxes.forEach((box) => {
        box.addEventListener('mouseover', () => {
          getBlack(box);
        });
      });
      break;
    case 'rainbow':
      boxes.forEach((box) => {
        box.addEventListener('mouseover', () => {
          getRainbow(box);
        });
      });
      break;
  }
};

function getRGBValue() {
  return Math.floor(Math.random() * 256);
};

function getRainbow(gridBox) {
  gridBox.style.backgroundColor = `rgb(${getRGBValue()}, ${getRGBValue()}, ${getRGBValue()})`;
}

function getBlack(gridBox) {
  gridBox.style.backgroundColor = 'black';
};

colorButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.id === 'rainbow') {
      color = 'rainbow';
      changeColor();
    } else {
      color = 'black'
      changeColor();
    }
  });
});
