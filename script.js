const audioA = document.getElementById('audioA');
const audioB = document.getElementById('audioB');

function playB() {
  audioA.pause(); // pause A, keep its position
  audioB.currentTime = 0;
  audioB.play();
}

// When B finishes, resume A automatically
audioB.addEventListener('ended', () => {
  audioA.play();
});

let hr = document.getElementById('hr');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displayTime(){
    let date = new Date();
    let min = date.getMinutes();

    let minRotation = min * 6;
    min.style.transform = 'rotate{${minRotation}deg}';
}

setInterval(displayTime, 1000);
