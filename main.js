var last_x;
var last_y;
color= "red";
line_width= 2;
var width=screen.width;
var height=screen.height;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var new_width= width - 300;
var new_height= height - 300;
if(width < 992){
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
}
canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e){
    console.log(my_touchstart);
    last_x= e.touches[0].clientX - canvas.offsetLeft;
    last_y= e.touches[0].clientY - canvas.offsetTop; 
}
canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e){
    console.log(my_touchmove);
    var current_x= e.touches[0].clientX - canvas.offsetLeft;
    var current_y= e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=line_width;
    console.log("last position of x and y coordinates =")
    console.log("x ="+ last_x + "y ="+ last_y);
    ctx.moveTo(last_x, last_y);
    ctx.lineTo(current_x, current_y);
    ctx.stroke();
    last_x= current_x;
    last_y= current_y;

}
