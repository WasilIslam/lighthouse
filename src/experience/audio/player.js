function AudioPlayer(audioFilePath) {
    this.audio = new Audio(audioFilePath);
    this.audio.loop = true; // Loop the audio file
    this.isPlaying = false;

    this.togglePlay = function() {
        if (this.isPlaying) {
            this.audio.pause();
            this.audio.currentTime = 0; // Reset to the beginning
            this.isPlaying = false;
        } else {
            this.audio.currentTime = 0; // Reset to the beginning
            this.audio.play();
            this.isPlaying = true;
        }
    };
}

// Usage example:
let player;

export function toggleRainMP3() {
    if (!player) player = new AudioPlayer('audio/rain.mp3');

    player.togglePlay();
}
