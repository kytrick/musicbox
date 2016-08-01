
// This is the "V" part of MVC


// Get the canvas from the DOM with this View constructor
function View(canvas) {

	this.canvas=canvas;
	this.clicks = []; // array that will store your circles
	this.frameRate = 1000/30; //about 33 frames per second
}

//add a click handler:

View.prototype.handleClick = function(event) {
	var view = this;  // this refers to the canvas object, not the view object
	var x = event.offsetX;
	var y = event.offsetY;

	console.log(x);
	console.log(y);
	console.log(view);
	console.log(this);

	var pos = view.clicks.push({x: x, y: y, radius: 100});  //adds your click to the circle array
	console.log("Add a circle at", x, ", ", y);


};

//add an updateDisplay method to the View:

View.prototype.updateDisplay = function() {

	var view = this;  // the value in "this" will be the View object
	var context = view.canvas.getContext("2d"); //context is what we actually draw on in the canvas
	context.clearRect(0, 0, view.canvas.width, view.canvas.height);
	context.fillStyle = 'black';
	context.fillRect(0, 0, view.canvas.width, view.canvas.height);

	// loop through the clicks and generate circles

	for (var i = 0; i < view.clicks.length; i++) {
		var circle = view.clicks[i];
		view.drawCircle(context, circle.x, circle.y, circle.radius, 1);
	}

	// view.drawCircle(context, 150, 150, 100, 1); //this is devined in the next method drawCircle
};

//add a drawCircle method to the View:

View.prototype.drawCircle = function(context, x, y, radius, alpha) {
	context.beginPath();
	context.arc(x, y, radius, 0, 2*Math.PI);
	// weird format for fillstyle.  Think of a better way.
	context.fillStyle = "rgba(" + x%256 + ", " + y%256  + ", " + (x * y % 256)+ " ," + alpha + ")";
	context.fill();
};