let gridCount;
const container = document.querySelector('#grid-container');




function createGrid(num) {
  for (i = 0; i < num; i++) {
    createRow(i);
  };
};




function createRow(num) {
  const row = document.createElement('div');
  const nextLine = document.createElement('br');
  container.appendChild(row);
  row.classList.add('row')
  gridCount = num;
  for (i = 0; i < num; i++){
    createOne();
  };
  container.appendChild(nextLine);
};



function createOne() {
  const row = document.querySelector('.row');
  const blocks = document.createElement('div');
  row.appendChild(blocks);
  blocks.classList.add('block');
  
};

createRow(20);

createRow(10);