parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Sr7R":[function(require,module,exports) {

},{}],"Focm":[function(require,module,exports) {
"use strict";function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function e(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}require("./main.css");var r=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"],a=function(t,n){return Math.floor(Math.random()*(n-t+1)+t)},i={startBtnEl:document.querySelector('[data-action="start"]'),stopBtnEl:document.querySelector('[data-action="stop"]')},o=function(){function n(e){var r=e.startBtn;t(this,n),this.intervalId=null,this.startBtn=r}return e(n,[{key:"start",value:function(){this.intervalId=setInterval(function(){document.body.style.backgroundColor=r[a(0,r.length-1)]},1e3),this.startBtn.disabled=!0}},{key:"stop",value:function(){clearInterval(this.intervalId),this.startBtn.disabled=!1}}]),n}(),s=new o({startBtn:i.startBtnEl});i.startBtnEl.addEventListener("click",s.start.bind(s)),i.stopBtnEl.addEventListener("click",s.stop.bind(s));
},{"./main.css":"Sr7R"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-11-color-switch/src.c215ab87.js.map