import '@styles/main-style';

import '@sounds/xmas';
import particles from 'particlesjs';

const $ = val => val.startsWith('#') ? document.querySelector(val) : document.querySelectorAll(val);

document.addEventListener('DOMContentLoaded', () => {
  injectDoors();
  particles.init({
    selector: '#particles-js',
    maxParticles: 200,
    speed: .7,
    sizeVariations: 15,
    color: '#f0f0f0',
    connectParticles: true,
    minDistance: 50
  });
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
