parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=document.querySelector(".append-row"),t=document.querySelector(".remove-row"),r=document.querySelector(".append-column"),d=document.querySelector(".remove-column"),l=document.querySelector(".field"),o=10,i=2;function n(){t.removeAttribute("disabled");var r=l.querySelectorAll("tr").length;r===o-1?e.setAttribute("disabled",!0):e.removeAttribute("disabled");for(var d=l.rows[0].querySelectorAll("td"),i=l.insertRow(r),n=0;n<d.length;n++)i.insertAdjacentHTML("beforeend","<td></td>")}function u(){e.removeAttribute("disabled");var r=l.querySelectorAll("tr").length;r===i+1?t.setAttribute("disabled",!0):t.removeAttribute("disabled"),l.deleteRow(r-1)}function c(){d.removeAttribute("disabled"),l.rows[0].querySelectorAll("td").length===o-1?r.setAttribute("disabled",!0):r.removeAttribute("disabled");for(var e=0;e<l.rows.length;e++)l.rows[e].insertAdjacentHTML("beforeend","<td></td>")}function s(){r.removeAttribute("disabled");var e=l.rows[0].querySelectorAll("td");e.length===i+1?d.setAttribute("disabled",!0):d.removeAttribute("disabled");for(var t=0;t<l.rows.length;t++)l.rows[t].deleteCell(e.length-1)}e.addEventListener("click",n),t.addEventListener("click",u),r.addEventListener("click",c),d.addEventListener("click",s);
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.3aef01c8.js.map