// my little jQuery :D

//create selector and node creation functions
const $ = selector => selector.startsWith('#')
  ? document.querySelector(selector)
  : document.querySelectorAll(selector);
$.new = node => document.createElement(node);
$.ready = callback => document.on('DOMContentLoaded', callback);

//create new manipulation methods
Object.prototype.first = function () { return this[0]; };
Object.prototype.addClass = function (_class) { this.classList.add(_class); return this; };
Object.prototype.removeClass = function (_class) { this.classList.remove(_class); return this; };
Object.prototype.attr = function (attr, val) { this.setAttribute(attr, val); return this; };
Object.prototype.txt = function (txt) { this.textContent = txt; return this; };
Object.prototype.on = function (evt, callback, options) { this.addEventListener(evt, callback, options); return this; };
Object.prototype.empty = function () { while (this.lastChild) { this.removeChild(this.lastChild); } };
Array.prototype.shuffle = function () {
  for (let i = this.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [this[i], this[j]] = [this[j], this[i]];
  } return this;
};
Array.prototype.build = function (num) { for (let i = 1; i <= num; i++) { this.push(i); } return this; };

// Polyfills: append and startsWith
if (!Object.prototype.append) { Object.prototype.append = function (node) { return this.appendChild(node); }; }
if (!String.prototype.startsWith) String.prototype.startsWith = function (str) {
  return this.split('').splice(0, 1).join('') === str;
};

//assign $ as global var
window.$ = $;