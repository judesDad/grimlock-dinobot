// Select color input
var color = document.getElementById('colorPicker');
// Select size input
var gridSize = document.getElementById('sizePicker');
var designCanvas = document.getElementById('pixelCanvas');
var gridHeight = document.getElementById('inputHeight');
var gridWidth = document.getElementById('inputWidth');

// When size is submitted by the user, call makeGrid()
function gridSize(sizePicker) {
    document.getElementById(sizePicker).submit(event);
    sizePicker.addEventListener('submit', event => {
    event.preventDefault();
    height = ('inputHeight.value');
    width = ('inputWidth.value');
    makeGrid(height, width);
});
    
}
console.log(event + 'works');
console.log(gridHeight.value, gridWidth.value);
console.log(color.value);
// Your code goes here!
function makeGrid(height, width) {
    var designCanvas = document.getElementById('pixelCanvas') [0];
    for (var i = 1; i <= height; i++) {
        var row = document.createElement('tr');
        for (var j = 1; j <= width; j++) {
            var cell = document.createElement('td');
            row.appendChild(cell);
        }
    }



}
