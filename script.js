const grid = document.querySelector('#grid');
let cells = grid.querySelectorAll('div');
let color = 'black';


// Create the default grid//
function createGrid(input) {
    grid.style.gridTemplateColumns = `repeat(${input}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${input}, 1fr)`;
    

    for (let i = 0; i < Math.pow(input,2); i++) {
        cell = document.createElement('div');
        grid.appendChild(cell);
        cell.style.outline = "solid black 1px";
        cell.style.backgroundColor = 'white';

        cell.addEventListener('mouseenter', sketchColor);

    }
}

createGrid(16);

//Function that creates new grid//
function userGrid() {
    const removeChilds = (grid) => {
        while (grid.lastChild) {
            grid.removeChild(grid.lastChild)
        }
    }

    removeChilds(grid)


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



//Function to reset the grid//
function reset() {
    let cells = grid.querySelectorAll('div');
    cells.forEach((div) => div.style.backgroundColor = 'white');
  }

//Links function for new grid to New Grid Button// 
const gridBtn = document.querySelector('#gridBtn');
gridBtn.addEventListener('click', function() {
    reset();
    userGrid();
})

//Links reset function to reset button//
const resetBtn = document.querySelector('#resetBtn');
resetBtn.addEventListener('click', function() {
    reset();
})

//Function for default color//
function sketchColor() {
    if (color === 'rgb') {
        this.style.backgroundColor = ("background","rgb("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+")")
    }
    else {
        this.style.backgroundColor = color;
    }
}
//function to change color based on button click//
function changeColor(choice) {
    color = choice;
}