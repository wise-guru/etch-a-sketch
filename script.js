const grid = document.querySelector('#grid');
let cells = grid.querySelectorAll('div');
let color = 'black';



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


const gridBtn = document.querySelector('#gridBtn');
gridBtn.addEventListener('click', function() {
    reset();
    userGrid();
})

const resetBtn = document.querySelector('#resetBtn');
resetBtn.addEventListener('click', function() {
    reset();
})

function defaultColor() {

    this.style.backgroundColor = (color);

    /*
    
    const rgb = document.querySelector('#rgb');
    rgb.addEventListener('click', function() {
            this.style.backgroundColor = ("background","rgb("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+")")
        })
    
    const black = document.querySelector('#black');
    black.addEventListener('click', function () {
        this.style.backgroundColor = ('black');
    })
  
    */

}   


/*
cell.addEventListener('mouseenter', function(event) {
            event.target.style.backgroundColor = ("background","rgb("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+")")
*/

function sketchColor() {
    if (color === 'rgb') {
        this.style.backgroundColor = ("background","rgb("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+")")
    }
    else {
        this.style.backgroundColor = color;
    }
}

function changeColor(choice) {
    color = choice;
}