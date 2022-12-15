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
exports.id = "pages/api/socket";
exports.ids = ["pages/api/socket"];
exports.modules = {

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/***/ ((module) => {

module.exports = import("socket.io");;

/***/ }),

/***/ "(api)/./pages/api/socket.js":
/*!*****************************!*\
  !*** ./pages/api/socket.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SocketHandler)\n/* harmony export */ });\n/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io */ \"socket.io\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([socket_io__WEBPACK_IMPORTED_MODULE_0__]);\nsocket_io__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nfunction SocketHandler(req, res) {\n    if (res.socket.server.io) return res.end(); // already set up\n    // Below is code to set up socket.\n    // The code below should only be run once, when server is first pinged.\n    const io = new socket_io__WEBPACK_IMPORTED_MODULE_0__.Server(res.socket.server);\n    res.socket.server.io = io;\n    // create world\n    let carrots = 0;\n    // handle connection\n    io.on(\"connection\", (socket)=>{\n        // welcome!\n        socket.on(\"add\", ()=>{\n            carrots++;\n        });\n    });\n    // emit regular updates\n    setInterval(()=>{\n        const dolphins = Math.floor(Math.random() * 50);\n        io.emit(\"dolphins\", dolphins, carrots);\n    }, 1000);\n    res.end();\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc29ja2V0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQW1DO0FBRXBCLFNBQVNDLGNBQWNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLElBQUlBLElBQUlDLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDQyxFQUFFLEVBQUUsT0FBT0gsSUFBSUksR0FBRyxJQUFJLGlCQUFpQjtJQUU3RCxrQ0FBa0M7SUFDbEMsdUVBQXVFO0lBRXZFLE1BQU1ELEtBQUssSUFBSU4sNkNBQU1BLENBQUNHLElBQUlDLE1BQU0sQ0FBQ0MsTUFBTTtJQUN2Q0YsSUFBSUMsTUFBTSxDQUFDQyxNQUFNLENBQUNDLEVBQUUsR0FBR0E7SUFFdkIsZUFBZTtJQUNmLElBQUlFLFVBQVU7SUFFZCxvQkFBb0I7SUFDcEJGLEdBQUdHLEVBQUUsQ0FBQyxjQUFjTCxDQUFBQSxTQUFVO1FBQzVCLFdBQVc7UUFFWEEsT0FBT0ssRUFBRSxDQUFDLE9BQU8sSUFBTTtZQUNyQkQ7UUFDRjtJQUNGO0lBRUEsdUJBQXVCO0lBQ3ZCRSxZQUFZLElBQU07UUFDaEIsTUFBTUMsV0FBV0MsS0FBS0MsS0FBSyxDQUFDRCxLQUFLRSxNQUFNLEtBQUs7UUFFNUNSLEdBQUdTLElBQUksQ0FBQyxZQUFZSixVQUFVSDtJQUNoQyxHQUFHO0lBRUhMLElBQUlJLEdBQUc7QUFDVCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9vbG1heC8uL3BhZ2VzL2FwaS9zb2NrZXQuanM/OTM1YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZXJ2ZXIgfSBmcm9tICdzb2NrZXQuaW8nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTb2NrZXRIYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGlmIChyZXMuc29ja2V0LnNlcnZlci5pbykgcmV0dXJuIHJlcy5lbmQoKTsgLy8gYWxyZWFkeSBzZXQgdXBcblxuICAvLyBCZWxvdyBpcyBjb2RlIHRvIHNldCB1cCBzb2NrZXQuXG4gIC8vIFRoZSBjb2RlIGJlbG93IHNob3VsZCBvbmx5IGJlIHJ1biBvbmNlLCB3aGVuIHNlcnZlciBpcyBmaXJzdCBwaW5nZWQuXG4gIFxuICBjb25zdCBpbyA9IG5ldyBTZXJ2ZXIocmVzLnNvY2tldC5zZXJ2ZXIpO1xuICByZXMuc29ja2V0LnNlcnZlci5pbyA9IGlvO1xuXG4gIC8vIGNyZWF0ZSB3b3JsZFxuICBsZXQgY2Fycm90cyA9IDA7XG5cbiAgLy8gaGFuZGxlIGNvbm5lY3Rpb25cbiAgaW8ub24oJ2Nvbm5lY3Rpb24nLCBzb2NrZXQgPT4ge1xuICAgIC8vIHdlbGNvbWUhXG5cbiAgICBzb2NrZXQub24oJ2FkZCcsICgpID0+IHtcbiAgICAgIGNhcnJvdHMrKztcbiAgICB9KTtcbiAgfSk7XG5cbiAgLy8gZW1pdCByZWd1bGFyIHVwZGF0ZXNcbiAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIGNvbnN0IGRvbHBoaW5zID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNTApO1xuXG4gICAgaW8uZW1pdCgnZG9scGhpbnMnLCBkb2xwaGlucywgY2Fycm90cyk7XG4gIH0sIDEwMDApO1xuXG4gIHJlcy5lbmQoKTtcbn1cbiJdLCJuYW1lcyI6WyJTZXJ2ZXIiLCJTb2NrZXRIYW5kbGVyIiwicmVxIiwicmVzIiwic29ja2V0Iiwic2VydmVyIiwiaW8iLCJlbmQiLCJjYXJyb3RzIiwib24iLCJzZXRJbnRlcnZhbCIsImRvbHBoaW5zIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiZW1pdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/socket.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/socket.js"));
module.exports = __webpack_exports__;

})();