const grid = document.querySelector('#grid');
const newGrid = document.querySelector('#newGrid');



function createGrid(input) {
    grid.style.gridTemplateColumns = `repeat(${input}, 1fr)`;
grid.style.gridTemplateRows = `repeat(${input}, 1fr)`;

    for (let i = 0; i < Math.pow(input,2); i++) {
        cell = document.createElement('div');
        grid.appendChild(cell);
        cell.style.outline = "solid black 1px";

        cell.addEventListener('mouseenter', function(event) {
            event.target.style.backgroundColor = ("background","rgb("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+")")
        })

    }
}

createGrid(16);

function userGrid() {
    input = parseInt(prompt("Enter the number of squares per each side for the new grid."));

    if (input >= 2 || input < 100) {
    createGrid(input);
    }
    else if (input < 2 || input > 100) {
        console.log("Input is too low or too high")
    }
    else if (input != Number.isInteger()) {
        console.log("Not a number.");
    }

}




function reset() {
    let cells = grid.querySelectorAll('div');
    cells.forEach((div) => div.style.backgroundColor = 'white');
  }

/*
function color() {
    $(this).css("background","rgb("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+")")
}
*/

const gridBtn = document.querySelector('#gridBtn');
gridBtn.addEventListener('click', function() {
    reset();
    userGrid();
})

const resetBtn = document.querySelector('#resetBtn');
resetBtn.addEventListener('click', function() {
    reset();
})
