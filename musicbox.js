window.onload = function() {

	var canvas = document.getElementById('canvas');
	var view = new View(canvas);


	// When handleClick gets called, it is getting called as a 
	// method of the canvas object, not as a method of the view object.

	// It’s a method of the canvas object, because we’re assigning the 
	// function to the click property of the canvas object.	

	// canvas.addEventListener("click", view.handleClick, false);
	canvas.addEventListener("click", view.handleClick.bind(view), false);

	view.updateDisplay();
}