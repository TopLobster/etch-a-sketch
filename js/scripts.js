"use strict";

let gridSize = 16;
let grid;
let randomColors;

function createGrid() {
    clearGrid();
    let gridDivWidth = 90 / gridSize;
    let divPix;
    for (let i = 0; i < gridSize * gridSize; i++) {
        divPix = document.createElement('div');
        divPix.className = 'pix';
        divPix.style.width = gridDivWidth + "vmin";
        divPix.style.height = gridDivWidth + "vmin";
        grid.appendChild(divPix);
        grid.childNodes[i].addEventListener('mouseover', () => {
            grid.childNodes[i].style.opacity = Number(grid.childNodes[i].style.opacity) + 0.1;
            if (randomColors) {
                grid.childNodes[i].style.background = "#" + (Math.random()*0xffffff<<0).toString(16);
            }
        });
    }
}

function clearGrid() {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}

function resetGrid() {
    for (let i = 0; i < grid.childNodes.length; i++) {
        grid.childNodes[i].style.opacity = 0;
    }
}

function clamp(x, min, max) {
    return x > max ? max : x < min ? min : x;
}

window.onload = function() {
    grid = document.querySelector("main");
    createGrid();
    let create = document.querySelector("#create").addEventListener('click', () => {
        randomColors = false;
        gridSize = clamp(document.querySelector("#size").value, 1, 100);
        createGrid();
    });
    let createRandom = document.querySelector("#createRandom").addEventListener('click', () => {
        randomColors = true;
        gridSize = clamp(document.querySelector("#size").value, 1, 100);
        createGrid();
    });
    let reset = document.querySelector("#reset").addEventListener('click', () => resetGrid());
};