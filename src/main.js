import '../index.html';
import '@styles/main-style';

import '@sounds/xmas';
import particles_config from './lib/particles.config';

const $ = val => val.startsWith('#') ? document.querySelector(val) : document.querySelectorAll(val);

document.addEventListener('DOMContentLoaded', () => {
  injectDoors();
  particlesJS('particles-js', particles_config); //eslint-disable-line no-undef
  injectAudio();
});

function injectDoors() {
  for (let day = 1; day <= 24; day++) {
    const door = document.createElement('div');
    door.className += 'door';
    door.innerHTML = `<p class="date">${day}</p>`;
    $('#calendar').append(door);
  }
}
function injectAudio() {
  const audio = document.createElement('audio');
  audio.src = './sound/xmas.mp3';
  audio.autoplay = true;
  audio.loop = true;
  $('#calendar').append(audio);
}
