let gridCount = 16;
let size = 500 / gridCount;
let sizepx = size + 'px';
const container = document.querySelector('#grid-container');

function createSizes(num) {
  size = 500 / gridCount;
  sizepx = size + 'px';
}

function createGrid(num) {
  for (i = 0; i < num; i++) {
    createRow(i);
  };
};

function createRow(num) {
  const newRow = document.createElement('div');
  const nextLine = document.createElement('br');
  container.appendChild(newRow);
  newRow.classList.add('row');
  for (a = 0; a < gridCount; a++){
    createOne();
  };
  newRow.classList.remove('row');
  newRow.classList.add('row' + num);
  newRow.style.height = sizepx;
};

function createOne() {
  const row = document.querySelector('.row');
  const blocks = document.createElement('div');
  row.appendChild(blocks);
  blocks.classList.add('block');
  blocks.style.height = sizepx;
  blocks.style.width = sizepx;
};

createGrid(gridCount);

function changeGridSize() {
  gridCount = prompt('What size would you like the grid?', 16);
  
  createSizes(gridCount);
  clearGrid();
  createGrid(gridCount);
};

function clearGrid() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}