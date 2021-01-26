webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/Users.js":
/*!************************!*\
  !*** ./pages/Users.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Users; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



var _jsxFileName = "C:\\Users\\Usuario\\Desktop\\nextProject\\pages\\Users.js",
    _s = $RefreshSig$();



function Users(_ref) {
  _s();

  var _this = this;

  var users = _ref.users;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      loading = _useState[0],
      stateLoading = _useState[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: !loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: users.map(function (u) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("fieldset", {
          onClick: function onClick() {
            return next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/users/[id]", "/users/".concat(u.id));
          },
          children: ["".concat(u.first_name, " ").concat(u.last_name), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
            children: u.email
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            dir: "rtl",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: u.avatar,
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 15
          }, _this)]
        }, u.id, true, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "https://media1.giphy.com/media/17mNCcKU1mJlrbXodo/200w.webp?cid=ecf05e47imf5o95iv63beq4xnci23ygystujzewjeudsn3gl&rid=200w.webp",
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }, this)
  }, void 0, false);
}

_s(Users, "gZNuFbZdzyZiT0KT5sR3edEHO7g=");

_c = Users;

var _c;

$RefreshReg$(_c, "Users");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvVXNlcnMuanMiXSwibmFtZXMiOlsiVXNlcnMiLCJ1c2VycyIsInVzZVN0YXRlIiwibG9hZGluZyIsInN0YXRlTG9hZGluZyIsIm1hcCIsInUiLCJSb3V0ZXIiLCJwdXNoIiwiaWQiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwiZW1haWwiLCJhdmF0YXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxLQUFULE9BQTBCO0FBQUE7O0FBQUE7O0FBQUEsTUFBVEMsS0FBUyxRQUFUQSxLQUFTOztBQUFBLGtCQUNQQyxzREFBUSxDQUFDLElBQUQsQ0FERDtBQUFBLE1BQ2hDQyxPQURnQztBQUFBLE1BQ3ZCQyxZQUR1Qjs7QUFFdkMsc0JBQ0U7QUFBQSxjQUNHLENBQUNELE9BQUQsZ0JBQ0M7QUFBQSxnQkFDR0YsS0FBSyxDQUFDSSxHQUFOLENBQVUsVUFBQ0MsQ0FBRDtBQUFBLDRCQUNUO0FBRUUsaUJBQU8sRUFBRTtBQUFBLG1CQUFNQyxrREFBTSxDQUFDQyxJQUFQLENBQVksYUFBWixtQkFBcUNGLENBQUMsQ0FBQ0csRUFBdkMsRUFBTjtBQUFBLFdBRlg7QUFBQSwrQkFJTUgsQ0FBQyxDQUFDSSxVQUpSLGNBSXNCSixDQUFDLENBQUNLLFNBSnhCLGdCQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEYsZUFNRTtBQUFBLHNCQUFRTCxDQUFDLENBQUNNO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFORixlQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEYsZUFRRTtBQUFLLGVBQUcsRUFBQyxLQUFUO0FBQUEsbUNBQ0U7QUFBSyxpQkFBRyxFQUFFTixDQUFDLENBQUNPLE1BQVo7QUFBb0IsaUJBQUcsRUFBQztBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFSRjtBQUFBLFdBQ09QLENBQUMsQ0FBQ0csRUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURTO0FBQUEsT0FBVjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxnQkFrQkM7QUFBQSw2QkFDRTtBQUNFLFdBQUcsRUFBQyxnSUFETjtBQUVFLFdBQUcsRUFBQztBQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBbkJKLG1CQURGO0FBNkJEOztHQS9CdUJULEs7O0tBQUFBLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWU5N2U3ZTMwY2M3NGVhZjE2NWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2Vycyh7IHVzZXJzIH0pIHtcclxuICBjb25zdCBbbG9hZGluZywgc3RhdGVMb2FkaW5nXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7IWxvYWRpbmcgPyAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIHt1c2Vycy5tYXAoKHUpID0+IChcclxuICAgICAgICAgICAgPGZpZWxkc2V0XHJcbiAgICAgICAgICAgICAga2V5PXt1LmlkfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKFwiL3VzZXJzL1tpZF1cIiwgYC91c2Vycy8ke3UuaWR9YCl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7YCR7dS5maXJzdF9uYW1lfSAke3UubGFzdF9uYW1lfWB9XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPHNtYWxsPnt1LmVtYWlsfTwvc21hbGw+XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBkaXI9XCJydGxcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt1LmF2YXRhcn0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vbWVkaWExLmdpcGh5LmNvbS9tZWRpYS8xN21OQ2NLVTFtSmxyYlhvZG8vMjAwdy53ZWJwP2NpZD1lY2YwNWU0N2ltZjVvOTVpdjYzYmVxNHhuY2kyM3lneXN0dWp6ZXdqZXVkc24zZ2wmcmlkPTIwMHcud2VicFwiXHJcbiAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9