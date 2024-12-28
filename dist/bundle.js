/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 967:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var b=__webpack_require__(170)
console.log('a',b)
module.exports='a'

/***/ }),

/***/ 170:
/***/ ((module) => {

console.log('b')
module.exports='b'


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var a=__webpack_require__(967)
console.log('index',a)
/******/ })()
;