var context = $("canvas")[0].getContext("2d");
var color = $(".selected").css("background-color");
//Selecting the various colors
$(".controls").on("click","li", function(){
    
    $(this).siblings().removeClass("selected");
    $(this).addClass("selected");
    color = $(this).css("background-color");
        
});

//Toggling the controls
$("#revealColorSelect").click(function(){
    changeColor();
    $("#colorSelect").toggle();
});

//Change the color in Span when color ranges are changed

function changeColor(){
    var r = $("#red").val();
    var g = $("#green").val();
    var b = $("#blue").val();
    $("#newColor").css("background-color","rgb("+r+","+g+","+b+")");
};

$("input[type=range]").change(changeColor);

//Adding the color when Add Color is pressed
$("#addNewColor").click(function(){
    var $newColor = $("<li></li>");
    $newColor.css("background-color", $("#newColor").css("background-color"));
    $(".controls ul").append($newColor);
    $newColor.click();
});

//Drawing

/*
    //drawing a square by defining the co-ordinates
    context.beginPath();
    context.moveTo(20,20);
    context.lineTo(40,20);
    context.lineTo(40,40);
    context.lineTo(20,40);
    context.closePath();
    context.stroke();
*/

//Now using the Mouse Events
$canvas.mousedown(function(e){
  lastEvent = e;
  mouseDown = true;
}).mousemove(function(e){
  //Draw lines
  if(mouseDown) {
    context.beginPath();
    context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
    context.lineTo(e.offsetX, e.offsetY);
    context.strokeStyle = color;
    context.stroke();
    lastEvent = e;
  }
}).mouseup(function(){
  mouseDown = false;
}).mouseleave(function(){
  $canvas.mouseup();
});

