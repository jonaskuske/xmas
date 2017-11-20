import '@styles/main-style';

import '@sounds/xmas';
import particlesJS from 'particlesjs';
import config from './particles.config';

// 'my little jQuery' :D
const $ = selector => selector.startsWith('#')
  ? document.querySelector(selector)
  : document.querySelectorAll(selector);
const create = node => document.createElement(node);
Object.prototype.addClass = function (_class) { this.classList.add(_class); return this; };
Object.prototype.removeClass = function (_class) { this.classList.remove(_class); return this; };
Object.prototype.attr = function (attr, val) { this.setAttribute(attr, val); return this; };
Object.prototype.txt = function (txt) { this.textContent = txt; return this; };
Object.prototype.on = function (evt, callback, options) { this.addEventListener(evt, callback, options); return this; };
Object.prototype.empty = function () { while (this.lastChild) { this.removeChild(this.lastChild); } };
//

const passive = { passive: true };
let audioIsPlaying = false;
const calendar = $('.door-wrapper')[0];
const content = $('.gift-wrapper')[0];

document.on('DOMContentLoaded', () => {
  injectDoors();
  attachListeners();
  let particles = particlesJS.init(config);
  $('#audio-player').on('play', () => { audioIsPlaying = true; });
});
function injectDoors() {
  let days = Array.from(Array(24).keys()).map(val => val + 1); //create Array with entries 1-24
  shuffle(days);
  days.forEach(day => {
    const door = create('div').addClass('door').attr('data-day', day).on('click', navigateToGiftView, passive);
    const date = create('p').addClass('date').txt(day);
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
function navigateToGiftView() {
  $('#gift-view-date').txt(this.dataset.day);
  calendar.addClass('hidden');
  content.removeClass('hidden');
}
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}