
// This is the "V" part of MVC


// Get the canvas from the DOM
function View(canvas) {

	this.canvas=canvas;
}

//add an updateDisplay method to the View:

View.prototype.updateDisplay = function() {

	var view = this;  // the value in "this" will be the View object
	var context = view.canvas.getContext("2d"); //context is what we actually draw on in the canvas
	context.clearRect(0, 0, view.canvas.width, view.canvas.height);
	context.fillStyle = 'black';
	context.fillRect(0, 0, view.canvas.width, view.canvas.height);

	view.drawCircle(context, 150, 150, 100, 1); //this is devined in the next method
};

//add a drawCircle method to the View:

View.prototype.drawCircle = function(context, x, y, radius, alpha) {
	context.beginPath();
	context.arc(x, y, radius, 0, 2*Math.PI);
	// weird format for fillstyle.  Think of a better way.
	context.fillStyle = "rgba(" + x%256 + ", " + y%256  + ", " + (x * y % 256)+ " ," + alpha + ")";
	context.fill();
};