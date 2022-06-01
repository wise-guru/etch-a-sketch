const grid = document.querySelector('#grid');
const newGrid = document.querySelector('#newGrid');


grid.style.gridTemplateColumns = "repeat(16, 1fr)";
grid.style.gridTemplateRows = "repeat(16, 1fr)";

let cell = document.createElement('div');
cell.classList.add('cell')
grid.appendChild(cell);


for (let i = 0; i < 256; i++) {
    cell = document.createElement('div');
    grid.appendChild(cell);
    cell.style.outline = "solid black 1px";

    cell.addEventListener('mouseenter', function(event) {
        event.target.style.backgroundColor = 'red';
    })

}

function reset() {
    document
      .querySelectorAll("#grid")
      .forEach((e) => e.parentNode.removeChild(e));
  }


function userGridInput() {
    let playerInput = parseInt(prompt("Enter the number of squares per each side for the new grid."));
    reset();

    
    newGrid.style.gridTemplateColumns = `repeat(${playerInput}, 1fr)`;
    newGrid.style.gridTemplateRows = `repeat(${playerInput}, 1fr)`;
    newGrid.style.display = 'grid';
    newGrid.style.width = '500px';
    newGrid.style.height = '500px';
    newGrid.style.outline = 'solid black 4px';
    newGrid.style.margin = 'auto';


  for (i = 0; i < Math.pow(playerInput, 2); i++) {

    if (playerInput < 100) {
        
        let newCell = document.createElement('div');
        newGrid.appendChild(newCell);
        newCell.style.outline = "solid black 2px";
    
        newCell.addEventListener('mouseenter', function(event) {
            event.target.style.backgroundColor = 'red';
        })    
        
    }
}
}

const gridBtn = document.querySelector('#gridBtn');
gridBtn.addEventListener('click', function() {
    userGridInput();
})
