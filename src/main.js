import '@styles/main-style';

import '@sounds/xmas';
import particles from 'particlesjs';
import config from './particles.config';

const $ = val => val.startsWith('#')
  ? document.querySelector(val)
  : document.querySelectorAll(val);
const create = el => document.createElement(el);

let audioIsPlaying = true;

document.addEventListener('DOMContentLoaded', () => {
  injectDoors();
  injectAudio();
  attachListeners();
  particles.init(config);
  $('body')[0].classList.remove('invisible');
});

function injectDoors() {
  let days = Array.from(Array(24).keys()).map(val => val + 1); //create Array with entries 1-24
  shuffle(days);
  days.forEach(day => {
    const door = create('div');
    door.className += 'door';
    door.setAttribute('data-day', day);
    door.innerHTML = `<p class="date">${day}</p>`;
    door.addEventListener('click', navigateToGiftView);
    $('.door-wrapper')[0].append(door);
  });
}
function injectAudio() {
  const audio = create('audio');
  audio.id = 'audio-player';
  audio.src = './sound/xmas.mp3';
  audio.autoplay = true;
  audio.loop = true;
  $('body')[0].append(audio);
}
function attachListeners() {
  $('#shuffle-btn').addEventListener('click', () => {
    $('.door-wrapper')[0].innerHTML = '';
    injectDoors();
  });
  $('#mute-btn').addEventListener('click', () => {
    audioIsPlaying
      ? $('#audio-player').pause()
      : $('#audio-player').play();
    audioIsPlaying = !audioIsPlaying;
  });
  $('#back-btn').addEventListener('click', () => {
    $('.gift-wrapper')[0].classList.add('hidden');
    $('.door-wrapper')[0].classList.remove('hidden');
  });
}
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
function navigateToGiftView(evt) {
  $('#gift-view-date').innerHTML = evt.target.dataset.day;
  $('.door-wrapper')[0].classList.add('hidden');
  $('.gift-wrapper')[0].classList.remove('hidden');
}