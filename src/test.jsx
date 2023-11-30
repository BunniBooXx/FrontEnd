const ctx = new AudioContext(); 
let audio;
fetch("http://127.0.0.1:5000/static/yona.mp3")
.then(data => data.arrayBuffer())
.then(arrayBuffer => ctx.decodeAudioData(arrayBuffer))
.then(decodedAudio => {
  audio = decodedAudio;
}); 

function playback(){
  const playSound = ctx.createBufferSource();
  playSound.buffer = audio; 
  playSound.connect(ctx.destination)
}

window.addEventListener("mousedown", playback)