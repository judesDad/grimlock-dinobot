// Select color input
// Select size input
var height, width, color;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event){
    event.preventDefault();
    height = $('#inputHeight').val();
    width = $('#inputWidth').val();
    makeGrid(height, width);
    
})


// Your code goes here!
function makeGrid(x, y) {
    $('tr').remove();
    for (var d = 1; d <= x; d++) {
        $('#pixelCanvas').append('<tr id=table' + d + '></tr>');
        for (var j = 1; j <= y; j++) {
            $('#table' + d).append('<td></td>');
        }
    }

    $('td').click(function addColor() {
        color = $('#colorPicker').val();

        if ($(this).attr('style')) {
            $(this).removeAttr('style')
        } else {
            $(this).attr('style', 'background-color:' + color);
        }
    })

}
