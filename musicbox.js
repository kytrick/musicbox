window.onload = function() {

	var bufferLoader = new BufferLoader(
        Audio.audioContext,
        [
            "A4.mp3",
            "A5.mp3",
            "C4.mp3",
            "C5.mp3",
            "D4.mp3",
            "D5.mp3",
            "E4.mp3",
            "E5.mp3",
            "G4.mp3",
            "G5.mp3",
        ],
        finishedLoading
    );
    bufferLoader.load();

    function finishedLoading(bufferList) {
        Audio.init(bufferList);

	var canvas = document.getElementById('canvas');
	var view = new View(canvas);


	// When handleClick gets called, it is getting called as a 
	// method of the canvas object, not as a method of the view object.

	// It’s a method of the canvas object, because we’re assigning the 
	// function to the click property of the canvas object.	

	// canvas.addEventListener("click", view.handleClick, false);
	canvas.addEventListener("click", view.handleClick.bind(view), false);

	// setInterval calls a function over and over
	setInterval(view.updateDisplay.bind(view), view.frameRate);

	//view.updateDisplay();
}
};