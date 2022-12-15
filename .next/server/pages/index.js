"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ \"socket.io-client\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([socket_io_client__WEBPACK_IMPORTED_MODULE_1__]);\nsocket_io_client__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nlet socket;\nconst socketInitializer = async (setDolphins, setCarrots)=>{\n    // We just call it because we don't need anything else out of it\n    await fetch(\"/api/socket\");\n    socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    socket.on(\"dolphins\", (dolphins, carrots)=>{\n        setDolphins(dolphins);\n        setCarrots(carrots);\n    });\n};\nfunction Home() {\n    const [dolphins, setDolphins] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [carrots, setCarrots] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        socketInitializer(setDolphins, setCarrots);\n    }, []);\n    const handleClick = ()=>{\n        socket.emit(\"add\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    dolphins,\n                    \" \\uD83D\\uDC2C\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jimmytennant/nextjs-toolmax/pages/index.jsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    carrots,\n                    \" \\uD83E\\uDD55\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jimmytennant/nextjs-toolmax/pages/index.jsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleClick,\n                children: \"+ \\uD83E\\uDD55\"\n            }, void 0, false, {\n                fileName: \"/Users/jimmytennant/nextjs-toolmax/pages/index.jsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jimmytennant/nextjs-toolmax/pages/index.jsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFBa0M7QUFDVTtBQUU1QyxJQUFJRztBQUVKLE1BQU1DLG9CQUFvQixPQUFPQyxhQUFhQyxhQUFlO0lBQzNELGdFQUFnRTtJQUNoRSxNQUFNQyxNQUFNO0lBRVpKLFNBQVNILDREQUFFQTtJQUVYRyxPQUFPSyxFQUFFLENBQUMsWUFBWSxDQUFDQyxVQUFVQyxVQUFZO1FBQzNDTCxZQUFZSTtRQUNaSCxXQUFXSTtJQUNiO0FBQ0Y7QUFFZSxTQUFTQyxPQUFPO0lBQzdCLE1BQU0sQ0FBQ0YsVUFBVUosWUFBWSxHQUFHSCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNRLFNBQVNKLFdBQVcsR0FBR0osK0NBQVFBLENBQUM7SUFFdkNELGdEQUFTQSxDQUFDLElBQU07UUFDZEcsa0JBQWtCQyxhQUFhQztJQUNqQyxHQUFHLEVBQUU7SUFFTCxNQUFNTSxjQUFjLElBQU07UUFDeEJULE9BQU9VLElBQUksQ0FBQztJQUNkO0lBRUEscUJBQ0UsOERBQUNDOzswQkFDQyw4REFBQ0M7O29CQUFJTjtvQkFBUzs7Ozs7OzswQkFDZCw4REFBQ007O29CQUFJTDtvQkFBUTs7Ozs7OzswQkFDYiw4REFBQ007Z0JBQU9DLFNBQVNMOzBCQUFhOzs7Ozs7Ozs7Ozs7QUFLcEMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Rvb2xtYXgvLi9wYWdlcy9pbmRleC5qc3g/N2ZmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaW8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5sZXQgc29ja2V0O1xuXG5jb25zdCBzb2NrZXRJbml0aWFsaXplciA9IGFzeW5jIChzZXREb2xwaGlucywgc2V0Q2Fycm90cykgPT4ge1xuICAvLyBXZSBqdXN0IGNhbGwgaXQgYmVjYXVzZSB3ZSBkb24ndCBuZWVkIGFueXRoaW5nIGVsc2Ugb3V0IG9mIGl0XG4gIGF3YWl0IGZldGNoKCcvYXBpL3NvY2tldCcpO1xuXG4gIHNvY2tldCA9IGlvKCk7XG5cbiAgc29ja2V0Lm9uKCdkb2xwaGlucycsIChkb2xwaGlucywgY2Fycm90cykgPT4ge1xuICAgIHNldERvbHBoaW5zKGRvbHBoaW5zKTtcbiAgICBzZXRDYXJyb3RzKGNhcnJvdHMpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtkb2xwaGlucywgc2V0RG9scGhpbnNdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtjYXJyb3RzLCBzZXRDYXJyb3RzXSA9IHVzZVN0YXRlKDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc29ja2V0SW5pdGlhbGl6ZXIoc2V0RG9scGhpbnMsIHNldENhcnJvdHMpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgc29ja2V0LmVtaXQoJ2FkZCcpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT57ZG9scGhpbnN9IPCfkKw8L2gxPlxuICAgICAgPGgxPntjYXJyb3RzfSDwn6WVPC9oMT5cbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9PlxuICAgICAgICArIPCfpZVcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbImlvIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzb2NrZXQiLCJzb2NrZXRJbml0aWFsaXplciIsInNldERvbHBoaW5zIiwic2V0Q2Fycm90cyIsImZldGNoIiwib24iLCJkb2xwaGlucyIsImNhcnJvdHMiLCJIb21lIiwiaGFuZGxlQ2xpY2siLCJlbWl0IiwiZGl2IiwiaDEiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/***/ ((module) => {

module.exports = import("socket.io-client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.jsx"));
module.exports = __webpack_exports__;

})();