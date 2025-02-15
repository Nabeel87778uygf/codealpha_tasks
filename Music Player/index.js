let art = document.getElementById("artContainer");
let audio = document.getElementById("audio");
let progress = document.getElementById("progress");

function playMusic() {
    audio.play();
    art.classList.add('rotating');
}
function pauseMusic() {
    audio.pause();
    art.classList.remove('rotating');
}
function stopMusic() {
    audio.pause();
    audio.currentTime = 0;
    art.classList.remove('rotating');
}
function rewindMusic() {
    audio.currentTime -= 5;
}
function forwardMusic() {
    audio.currentTime += 5;
}
audio.addEventListener('timeupdate', () => {
    let progressPercentage = (audio.currentTime / audio.duration) * 100;
    progress.style.width = progressPercentage + '%';
    if (audio.ended) {
        art.classList.remove('rotating');
    }
});