const grid = document.querySelector('#grid');

function getGrid(gridDimension) {
  for(let i = 0; i <= gridDimension; i++) {
    let row = document.createElement('div');
    row.classList.add('row');
    grid.appendChild(row);
    for(let j = 0; j <= gridDimension; j++) {
      let box = document.createElement('div');
      box.classList.add('box')
      row.appendChild(box)
    }
  }
};

function getBlack(gridBox) {
  gridBox.style.backgroundColor = 'black';
};

getGrid(16);

const boxes = document.querySelectorAll('.box')

boxes.forEach((box) => {
  box.addEventListener('mouseover', () => {
    getBlack(box);
  });
});