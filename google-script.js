// Minimal google utility stub — replaces the original 97 KB Google library.
// Only the functions actually used by pacman.js and index.html are provided.
if (!google.dom) google.dom = {};
if (!google.dom.append) google.dom.append = function (el) { document.body.appendChild(el); };
if (!google.dom.remove) google.dom.remove = function (el) { if (el && el.parentNode) el.parentNode.removeChild(el); };
if (!google.browser) google.browser = { engine: { IE: false } };
else if (!google.browser.engine) google.browser.engine = { IE: false };
