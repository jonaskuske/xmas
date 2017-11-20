// my little jQuery :D

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

//assign $ as global var
window.$ = $;