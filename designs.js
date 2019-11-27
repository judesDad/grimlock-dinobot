// Select color input
const color = document.getElementById("colorPicker");

// Select size input
const gridSize = document.getElementById("sizePicker");
const gridHeight = document.getElementById("inputHeight");
const gridWidth = document.getElementById("inputWidth");
const designCanvas = document.getElementById("pixelCanvas");
// When size is submitted by the user, call makeGrid()
document.addEventListener('submit', (event) => {
    event.preventDefault();
    //console.log("submit is successful");
    height = (inputHeight.value);
    width = (inputWidth.value);
    //console.log(height, width);
   
    makeGrid(height, width);
})


    



function makeGrid(height, width) {

for (let d = 0; d <= height; d++) {
    let row = designCanvas.insertRow(d);
    for (let j = 0; j <= width; j++) {
        let cell = row.insertCell(j);
    cell.addEventListener('click', (event) => {
        event.target.style.backgroundColor = color.value;
        
        //console.log(event);
        
    })    
    }
}    
    
    
    }
    

// Your code goes here!


