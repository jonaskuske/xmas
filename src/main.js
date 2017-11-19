import '@styles/main-style';

import '@sounds/xmas';
import particles from 'particlesjs';
import config from './particles.config';

const $ = val => val.startsWith('#') ? document.querySelector(val) : document.querySelectorAll(val);
let audioIsPlaying = true;

document.addEventListener('DOMContentLoaded', () => {
  injectDoors();
  injectAudio();
  particles.init(config);

  $('#shuffle-btn').addEventListener('click', () => {
    $('#calendar').innerHTML = '';
    injectDoors();
  });
  $('#mute-btn').addEventListener('click', () => {
    audioIsPlaying
      ? $('#audio-player').pause()
      : $('#audio-player').play();
    audioIsPlaying = !audioIsPlaying;
  });
});

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
function injectDoors() {
  let days = Array.from(Array(24).keys()).map(val => val + 1);
  shuffle(days);
  days.forEach(day => {
    const door = document.createElement('div');
    door.className += 'door';
    door.innerHTML = `<p class="date">${day}</p>`;
    $('#calendar').append(door);
  });
}
function injectAudio() {
  const audio = document.createElement('audio');
  audio.id = 'audio-player';
  audio.src = './sound/xmas.mp3';
  audio.autoplay = true;
  audio.loop = true;
  $('body')[0].append(audio);
}
