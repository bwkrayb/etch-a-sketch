let gridCount = 16;
const container = document.querySelector('#grid-container');

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
};

function createOne() {
  const row = document.querySelector('.row');
  const blocks = document.createElement('div');
  row.appendChild(blocks);
  blocks.classList.add('block');
  
};

createGrid(gridCount);

function changeGridSize() {
  gridCount = prompt();
  clearGrid();
  createGrid(gridCount);
};

function clearGrid() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}