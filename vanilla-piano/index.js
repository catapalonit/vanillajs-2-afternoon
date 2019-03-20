window.addEventListener("keypress", function(event) {
    const tone = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    if (!tone) return;
    const pianoKey = document.querySelector(`.pianoKey[data-key="${event.keyCode}"]`);

    tone.currentTime = 0;
    tone.play();

    pianoKey.classList.add("pressed");
    setTimeout(function() {pianoKey.classList.remove("pressed")}, 300);
});