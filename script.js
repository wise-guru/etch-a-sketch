const grid = document.querySelector('#grid');

grid.style.gridTemplateColumns = "repeat(16, 1fr)";
grid.style.gridTemplateRows = "repeat(16, 1fr)";


for (let i = 0; i < 256; i++) {
    const cell = document.createElement('div');
    grid.appendChild(cell);
    cell.style.outline = "solid black 1px";

    cell.addEventListener('mouseenter', function(event) {
        event.target.style.backgroundColor = 'red';
    })

}

