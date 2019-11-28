//  color variable set by HTML Id
const color = document.getElementById("colorPicker");


// variables set for grid and design canvas by HTML Id
const gridSize = document.getElementById("sizePicker");
const gridHeight = document.getElementById("inputHeight");
const gridWidth = document.getElementById("inputWidth");
const designCanvas = document.getElementById("pixelCanvas");


// When size is submitted by the user, call makeGrid()
document.addEventListener('submit', (event) => { // submit event to send height and width data
    event.preventDefault(); // used to stop the submit button from resetting the page
    //console.log("submit is successful");
    height = (inputHeight.value); // Value for Grid Height
    width = (inputWidth.value);   // Value for Grid Width
    //console.log(height, width);
    designCanvas.innerHTML = "";  // Used to stop from adding rows and cells when submit button is used to  reset grid
    makeGrid(height, width); // calling make grid function for the submit event
})


// Your code goes here!


function makeGrid(height, width) {  // makeGrid Function to build grid by height and width

for (let d = 0; d < height; d++) {  // nested for loop to to insert rows and cells for grid
    let row = designCanvas.insertRow(d);
    for (let j = 0; j < width; j++) {
        let cell = row.insertCell(j);
    cell.addEventListener('click', (event) => { // event listener click to set the color when a cell is clicked
        event.target.style.backgroundColor = color.value;
    designCanvas.addEventListener('dblclick', (event) => { // event listener double click to remomve color when cell is double clicked
        event.target.style.backgroundColor = ''
    });


    })
    }
}
 
 
    }
    




