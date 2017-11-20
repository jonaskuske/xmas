// my little jQuery :D

// make startsWith() compatible with IE (1 char only)
if (!String.prototype.startsWith) String.prototype.startsWith = function (str) {
  return this.split('').splice(0, 1).join('') === str;
};
//create selector and node creation functions
let nodes;
const $ = selector => selector.startsWith('#')
  ? document.querySelector(selector)
  : ((nodes = document.querySelectorAll(selector)).length === 1)
    ? nodes[0]
    : nodes;
$.new = node => document.createElement(node);
//create new manipulation methods
Object.prototype.addClass = function (_class) { this.classList.add(_class); return this; };
Object.prototype.removeClass = function (_class) { this.classList.remove(_class); return this; };
Object.prototype.attr = function (attr, val) { this.setAttribute(attr, val); return this; };
Object.prototype.txt = function (txt) { this.textContent = txt; return this; };
Object.prototype.on = function (evt, callback, options) { this.addEventListener(evt, callback, options); return this; };
Object.prototype.empty = function () { while (this.lastChild) { this.removeChild(this.lastChild); } };
if (!Object.prototype.append) { Object.prototype.append = function (node) { return this.appendChild(node); }; }
Array.prototype.shuffle = function () {
  for (let i = this.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [this[i], this[j]] = [this[j], this[i]];
  } return this;
};
Array.prototype.of = function (num) { for (let i = 1; i <= num; i++) { this.push(i); } return this; };

//assign $ as global var
window.$ = $;