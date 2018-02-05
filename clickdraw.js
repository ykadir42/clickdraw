// Jawadul Kadir
// SoftDev2 pd7
// K00 -- I See a Red Door...
// 2018-2-5

var c = document.getElementById("slate");
var ctx = c.getContext("2d");
ctx.fillStyle = "#dabbed";
console.log(ctx);

var shape = "dot";

var draw = function(e){
	if(shape == "dot"){
		ctx.beginPath();
	    ctx.arc(e.offsetX,e.offsetY,5,0,2*Math.PI);
	    ctx.fill();
		ctx.closePath();
	}
	if(shape == "box"){
		ctx.beginPath();
		ctx.rect(e.offsetX - 5, e.offsetY - 5, 10, 10);
		ctx.fill();
		ctx.closePath();
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
	ctx.clearRect(0,0,600,600);
};

c.addEventListener("click", draw);
document.getElementById("toggle").addEventListener("click", toggle);
document.getElementById("clear").addEventListener("click", clear)
