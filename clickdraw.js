// Jawadul Kadir
// SoftDev2 pd7
// K00 -- I See a Red Door...
// 2018-2-5

//getting the canvas
var c = document.getElementById("slate");
//gettign the context of the canvas
var ctx = c.getContext("2d");

//setting fill and stroke style
ctx.fillStyle = "#dabbed";
ctx.strokeStyle = "#dabbed";
console.log(ctx);

//state variable for what shape to draw
var shape = "dot";

//state variable for if the canvas was just cleared
var cleared = false;

//draws the dot or box
var draw = function(e){
    if(shape == "dot"){
	ctx.arc(e.offsetX,e.offsetY,5,0,2*Math.PI);
	ctx.fill();
	if(!cleared) ctx.stroke();
	ctx.closePath();
	ctx.beginPath();
	ctx.moveTo(e.offsetX, e.offsetY);
	cleared = false;
    }
    if(shape == "box"){
	if(!cleared) ctx.lineTo(e.offsetX, e.offsetY);
	ctx.rect(e.offsetX - 5, e.offsetY - 5, 10, 10);
	ctx.fill();
	ctx.stroke();
	ctx.closePath();
	ctx.beginPath();
	ctx.moveTo(e.offsetX, e.offsetY);
	cleared = false;
    }
};

var toggle = function(e){
	if(shape == "dot"){
	    shape = "box";
	}
	else{
		shape = "dot";
	}
};

var clear = function(e){
	ctx.closePath();
	ctx.clearRect(0,0,600,600);
	cleared = true;
};

c.addEventListener("click", draw);
document.getElementById("toggle").addEventListener("click", toggle);
document.getElementById("clear").addEventListener("click", clear)
