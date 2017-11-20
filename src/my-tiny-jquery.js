// 'my little jQuery' :D
const $ = selector => selector.startsWith('#')
  ? document.querySelector(selector)
  : document.querySelectorAll(selector);
$.new = node => document.createElement(node);
Object.prototype.addClass = function (_class) { this.classList.add(_class); return this; };
Object.prototype.removeClass = function (_class) { this.classList.remove(_class); return this; };
Object.prototype.attr = function (attr, val) { this.setAttribute(attr, val); return this; };
Object.prototype.txt = function (txt) { this.textContent = txt; return this; };
Object.prototype.on = function (evt, callback, options) { this.addEventListener(evt, callback, options); return this; };
Object.prototype.empty = function () { while (this.lastChild) { this.removeChild(this.lastChild); } };
window.$ = $;