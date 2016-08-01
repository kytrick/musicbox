// more information on audio API here:  http://www.html5rocks.com/en/tutorials/webaudio/intro/

var Audio = {
    gainNode: undefined, // volume
    bufferList: undefined, // array holding the sounds to play
    // audioContext is the object that knows how to decode binary audio data and make browser play sound
    // init creates the sound; play generates the sound
    audioContext: new (window.AudioContext ||
                       window.webkitAudioContext)(),
    init: function(bufferList) {
        this.bufferList = bufferList;
        this.gainNode = this.audioContext.createGain();
        this.gainNode.gain.value = 1;
        this.gainNode.connect(this.audioContext.destination);
    },
    play: function(i) {
        var sound = this.audioContext.createBufferSource();
        sound.connect(this.gainNode);
        sound.buffer = this.bufferList[i];
        sound.start(0);
        sound.stop(this.audioContext.currentTime + 18);
    }
};