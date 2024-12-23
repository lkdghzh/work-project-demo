(() => {
  var __webpack_modules__ = {
    "./src/a.js": (module, __unused_webpack_exports, __webpack_require__) => {
      eval(
        "var b=__webpack_require__(\"./src/b.js\")\nconsole.log('a',b)\nmodule.exports='a'"
      );
    },
    "./src/b.js": (module) => {
      eval(
        "console.log('b')\nmodule.exports='b'"
      );
    },
    "./src/index.js": (
      __unused_webpack_module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      eval(
        "var a=__webpack_require__(\"./src/a.js\")\nconsole.log('index',a)"
      );
    },
  };
  var __webpack_module_cache__ = {};

  function __webpack_require__(moduleId) {
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
    var module = (__webpack_module_cache__[moduleId] = {
      // no module.id needed
      // no module.loaded needed
      exports: {},
    });

    // 执行模块
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

    // 每个模块返回
    return module.exports;
  }

  var __webpack_exports__ = __webpack_require__("./src/index.js");
})();
