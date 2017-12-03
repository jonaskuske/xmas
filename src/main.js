import '@styles/main-style';
import '@sounds/xmas';

import './my-tiny-jquery.js';
import particlesJS from 'particlesjs';
import config from './particles.config';

const passive = { passive: true };
let audioIsPlaying = false;
let playIsAutoplay = true;
const calendar = $('.door-wrapper')[0];
const content = $('.content-wrapper')[0];

//startup function
$.ready(() => {
  injectDoors();
  attachListeners();
  startAnimation();
});
//
// called by audio HTML element once onplay fires
window.handleAudioStart = function () { //eslint-disable-line no-unused-vars
  if (playIsAutoplay) audioIsPlaying = true;
};
//
function injectDoors() {
  const date = new Date();
  let days = (new Array).build(24).shuffle();
  days.forEach((day, i) => {
    const door = $.new('div')
      .addClass('door')
      .addClass(`door-${i + 1}`);
    day <= date.getDate() && date.getMonth() === 11
      ? door
        .on('click', navigateToGiftView, passive)
        .attr('data-day', day)
      : door
        .addClass('disabled');
    const dateTag = $.new('p')
      .addClass('date')
      .txt(day);
    door.append(dateTag);
    calendar.append(door);
  });
}
function attachListeners() {
  $('#shuffle-btn').on('click', () => {
    calendar.empty();
    injectDoors();
  }, passive);
  $('#mute-btn').on('click', () => {
    playIsAutoplay = false;
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
  window.scrollTo(0, 0);
}