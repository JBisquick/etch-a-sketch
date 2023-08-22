const grid = document.querySelector('#grid');
const slider = document.querySelector('#slider');
const sliderValue = document.querySelector('#slider-value');

sliderValue.textContent = slider.value;
getGrid(16);

slider.oninput = function() {
  sliderValue.textContent = this.value;
};

function getGrid(gridDimension) {
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
};

function getBlack(gridBox) {
  gridBox.style.backgroundColor = 'black';
};

const boxes = document.querySelectorAll('.box');

boxes.forEach((box) => {
  box.addEventListener('mouseover', () => {
    getBlack(box);
  });
});