
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
};