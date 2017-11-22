import '@styles/main-style';
import '@sounds/xmas';

import './my-tiny-jquery.js';
import particlesJS from 'particlesjs';
import config from './particles.config';

const passive = { passive: true };
let audioIsPlaying = false;
const calendar = $('.door-wrapper').first();
const content = $('.content-wrapper').first();

//startup function
$.ready(() => {
  $('#audio-player').on('play', () => { audioIsPlaying = true; });
  injectDoors();
  attachListeners();
  startAnimation();
});
//

function injectDoors() {
  let days = [].build(24).shuffle();
  days.forEach((day, i) => {
    const door = $.new('div')
      .addClass('door')
      .addClass(`door-${i + 1}`)
      .attr('data-day', day)
      .on('click', navigateToGiftView, passive);
    const date = $.new('p')
      .addClass('date')
      .txt(day);
    door.append(date);
    calendar.append(door);
  });
}
function attachListeners() {
  $('#shuffle-btn').on('click', () => {
    calendar.empty();
    injectDoors();
  }, passive);
  $('#mute-btn').on('click', () => {
    audioIsPlaying
      ? $('#audio-player').pause()
      : $('#audio-player').play();
    audioIsPlaying = !audioIsPlaying;
  }, passive);
  $('#back-btn').on('click', () => {
    content.addClass('hidden');
    calendar.removeClass('hidden');
  }, passive);
}
function startAnimation() {
  if (!window.matchMedia('(max-width: 1200px)').matches) {
    particlesJS.init(config);
  }
}
function navigateToGiftView() {
  $('#gift-view-date').txt(this.dataset.day);
  calendar.addClass('hidden');
  content.removeClass('hidden');
}