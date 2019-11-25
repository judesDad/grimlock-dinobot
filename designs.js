// Select color input
const color = document.getElementById("colorPicker");

// Select size input
const size = document.getElementById("sizePicker");
const gridHeight = document.getElementById("inputHeight");
const gridWidth = document.getElementById("inputWidth");
const canvas = document.getElementById("pixelCanvas");
// When size is submitted by the user, call makeGrid()
document.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("submit is successful");
    height = (inputHeight.value);
    width = (inputWidth.value);
    console.log(height, width);
    makeGrid(height, width);
})


    



function makeGrid(height, width) {

for (let i = 0; i <= height; i++) {
    let row = canvas.insertRow(i);
    for (let j = 0; j <= width; j++) {
        let cell = row.insertCell(j);
    }
}    
    
    
    }
    

// Your code goes here!


