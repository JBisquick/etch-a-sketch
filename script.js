const grid = document.querySelector('#grid');
const pickColor = document.querySelector('#pick-color');
const slider = document.querySelector('#slider');
const sliderValue = document.querySelector('#slider-value');
const buttons = document.querySelectorAll('.buttons')
let rows = document.querySelectorAll('.row');
let boxes = document.querySelectorAll('.box');
let color = 'black'

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
};

function grabGrid() {
  boxes = document.querySelectorAll('.box');
  rows = document.querySelectorAll('.row');

  boxes.forEach((box) => {
    box.addEventListener('mouseover', () => {
      switch (color) {
        case 'black':
          getBlack(box)
          break;
        case 'rainbow':
          getRainbow(box);
          break;
        case 'shading':
          getDarker(box);
          break;
        case 'eraser':
          getEraser(box);
          break;
        case 'pick-color':
          getPickedColor(box);
          break;
      }
    });
  });
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

function getRGBValue() {
  return Math.floor(Math.random() * 256);
};

function getRainbow(gridBox) {
  gridBox.style.backgroundColor = `rgb(${getRGBValue()}, ${getRGBValue()}, ${getRGBValue()})`;
};

function getBlack(gridBox) {
  gridBox.style.backgroundColor = 'rgb(0, 0, 0)';
};

function getEraser(gridBox) {
  gridBox.style.backgroundColor = 'rgb(147, 158, 147)';
};

function getPickedColor(gridBox) {
  gridBox.style.backgroundColor = pickColor.value;
};

function getDarker(gridBox) {
  switch (gridBox.style.backgroundColor) {
    case 'rgba(0, 0, 0, 0.1)':
      gridBox.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
      break;
    case 'rgba(0, 0, 0, 0.2)':
      gridBox.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
      break;
    case 'rgba(0, 0, 0, 0.3)':
      gridBox.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
      break;
    case 'rgba(0, 0, 0, 0.4)':
      gridBox.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
      break;
    case 'rgba(0, 0, 0, 0.5)':
      gridBox.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
      break;
    case 'rgba(0, 0, 0, 0.6)':
      gridBox.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
      break;
    case 'rgba(0, 0, 0, 0.7)':
      gridBox.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
      break;
    case 'rgba(0, 0, 0, 0.8)':
      gridBox.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
      break;
    case 'rgba(0, 0, 0, 0.9)':
      gridBox.style.backgroundColor = 'rgb(0, 0, 0)';
      break;
    case 'rgb(0, 0, 0)':
      break;
    default:
      gridBox.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
      break;
  }
};

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.id === 'rainbow') {
      color = 'rainbow';
    } else if (e.target.id === 'shading') {
      color = 'shading';
    } else if (e.target.id === 'clear') {
      getGrid(slider.value);
    } else if (e.target.id === 'eraser') {
      color = 'eraser'
    } else if (e.target.id === 'pick-color') {
      color = 'pick-color'
    } else {
      color = 'black';
    }
  });
});
