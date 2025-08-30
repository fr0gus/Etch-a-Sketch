let gridContainer = document.querySelector(".container");
let gridSize = 16;
const baseWidth = 640;
const sizeButton = document.querySelector("#size-button");

function getRandomColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return "rgb(" + r + "," + g + "," + b + ")"
}

function createGrid(size) {
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add("grid-row");
        for (let j = 0; j < size; j++) {
            const square = document.createElement("div");
            square.classList.add("grid-square");
            square.style.width = (baseWidth/size).toString() + "px";
            row.appendChild(square);
        }
        gridContainer.appendChild(row);
    }
}

function redrawGrid(){
    let newSize = prompt("Enter desired size (max 100)");
    newSize = Number(newSize);
    if (newSize > 100) {
        alert("Please enter a number <= 100.");
        return;
        
    }

    gridContainer.innerHTML = null;
    createGrid(newSize);
}

gridContainer.addEventListener("mouseover",event=> {
    event.target.style.backgroundColor = getRandomColor();
});

sizeButton.addEventListener("click", redrawGrid);

createGrid(gridSize);