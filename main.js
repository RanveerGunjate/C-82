var mouse_event="empty";
var last_position_of_x;
var last_position_of_y;

var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var colour_1="red";
var width_of_line=1;

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
colour_1=document.getElementById("Colour").value;
width_of_line=document.getElementById("width_of _line").value;
mouse_event="mousedown";
}

canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e){
    current_mouseX=e.clientX-canvas.offsetLeft;
    current_mouseY=e.clientY-canvas.offsetTop;

    if(mouse_event=="mousedown"){
        ctx.beginPath()
        ctx.strokeStyle=colour_1;
        ctx.lineWidth=width_of_line;
        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
       // ctx.moveTo(last_position_of_x,last_position_of_y);


        console.log("Current position of x and y coordinates = ");
        console.log("x = " + current_mouseX + "y = " + current_mouseY);
               // ctx.lineTo(current_mouseX,current_mouseY);
               ctx.arc(current_mouseX,current_mouseY,40,0,2*Math.PI);
                ctx.stroke();
    }
    last_position_of_x=current_mouseX;
    last_position_of_y=current_mouseY;
}

canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e){
mouse_event="mouseup";    
}

canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e){
    mouse_event="mouseleave";
}