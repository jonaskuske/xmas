// my little jQuery :D

//create selector and node creation functions
const $ = selector => selector.startsWith('#') || selector === 'html' || selector === 'body'
  ? document.querySelector(selector)
  : document.querySelectorAll(selector);
$.new = node => document.createElement(node);
$.ready = callback => document.on('DOMContentLoaded', callback);

//create new manipulation methods
Object.prototype.addClass = function (_class) { this.classList.add(_class); return this; };
Object.prototype.removeClass = function (_class) { this.classList.remove(_class); return this; };
Object.prototype.attr = function (attr, val) { this.setAttribute(attr, val); return this; };
Object.prototype.txt = function (txt) { this.textContent = txt; return this; };
Object.prototype.on = function (evt, callback, options) { this.addEventListener(evt, callback, options); return this; };
Object.prototype.empty = function () { while (this.lastChild) { this.removeChild(this.lastChild); } };
Array.prototype.build = function (num) { for (let i = 1; i <= num; i++) { this.push(i); } return this; };
Array.prototype.shuffle = function () {
  for (let i = this.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [this[i], this[j]] = [this[j], this[i]];
  } return this;
};

// Polyfills: append and startsWith
if (!Document.prototype.append) { Object.prototype.append = function (node) { return this.appendChild(node); }; }
if (!String.prototype.startsWith) String.prototype.startsWith = function (str) {
  for (let i = 0; i < str.length; i++) {
    if (this.charAt(i) !== str[i]) return false;
  }
  return true;
};

//assign $ as global var
window.$ = $;