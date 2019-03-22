"use-strict";

let gridSize = 16;

function queryGridSize() {
    do {
        gridSize = Number(prompt("Enter the dimensions of the grid"));
    } while (gridSize > 100 || gridSize < 1 || isNaN(gridSize));
    createGrid();
}

function createGrid() {
    clearGrid();
    let main = document.querySelector("main");
    let divPix = "";
    for (let i = 0; i < gridSize * gridSize; i++) {
        divPix = document.createElement('div');
        divPix.className = 'pix';
        // TODO add event listeners on hover to each div
        main.appendChild(divPix);
    }
    sizeGrid();
}

function sizeGrid() {
    let gridDivWidth = document.querySelector("main").clientWidth / gridSize;
    divs = document.querySelectorAll('div.pix');
    for (let i = 0; i < divs.length; i++) {
        divs[i].setAttribute('style', 'width: ' + gridDivWidth + 'px; height: ' + gridDivWidth + 'px;');
    }
    //TODO fix sizing issue and overflow
}

function clearGrid() {
    // TODO
}

function resetGrid() {
    // TODO
    alert("test");
}

window.onload = function() {
    createGrid();
    let create = document.querySelector("#create").addEventListener('click', () => queryGridSize());
    let reset = document.querySelector("#reset").addEventListener('click', () => resetGrid());
    let resize = document.addEventListener("resize", () => sizeGrid());
};