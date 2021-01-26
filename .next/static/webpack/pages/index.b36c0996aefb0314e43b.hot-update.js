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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      loading = _useState[0],
      stateLoading = _useState[1];

  var estado = function estado() {};

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: !loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: users.map(function (u) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("fieldset", {
          children: ["".concat(u.first_name, " ").concat(u.last_name), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
            children: u.email
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            dir: "rtl",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: u.avatar,
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 15
          }, _this)]
        }, u.id, true, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "https://media1.giphy.com/media/17mNCcKU1mJlrbXodo/200w.webp?cid=ecf05e47imf5o95iv63beq4xnci23ygystujzewjeudsn3gl&rid=200w.webp",
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }, this)
  }, void 0, false);
}

_s(Users, "sCDdxvMsRyHiWzNopr1HASZBenY=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvVXNlcnMuanMiXSwibmFtZXMiOlsiVXNlcnMiLCJ1c2VycyIsInVzZVN0YXRlIiwibG9hZGluZyIsInN0YXRlTG9hZGluZyIsImVzdGFkbyIsIm1hcCIsInUiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwiZW1haWwiLCJhdmF0YXIiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLEtBQVQsT0FBMEI7QUFBQTs7QUFBQTs7QUFBQSxNQUFUQyxLQUFTLFFBQVRBLEtBQVM7O0FBQUEsa0JBQ1BDLHNEQUFRLENBQUMsS0FBRCxDQUREO0FBQUEsTUFDaENDLE9BRGdDO0FBQUEsTUFDdkJDLFlBRHVCOztBQUd2QyxNQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFJLENBRWxCLENBRkQ7O0FBS0Esc0JBQ0U7QUFBQSxjQUNHLENBQUNGLE9BQUQsZ0JBQ0M7QUFBQSxnQkFDR0YsS0FBSyxDQUFDSyxHQUFOLENBQVUsVUFBQ0MsQ0FBRDtBQUFBLDRCQUNUO0FBQUEsK0JBT01BLENBQUMsQ0FBQ0MsVUFQUixjQU9zQkQsQ0FBQyxDQUFDRSxTQVB4QixnQkFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJGLGVBU0U7QUFBQSxzQkFBUUYsQ0FBQyxDQUFDRztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVEYsZUFVRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVZGLGVBV0U7QUFBSyxlQUFHLEVBQUMsS0FBVDtBQUFBLG1DQUNFO0FBQUssaUJBQUcsRUFBRUgsQ0FBQyxDQUFDSSxNQUFaO0FBQW9CLGlCQUFHLEVBQUM7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBWEY7QUFBQSxXQUNPSixDQUFDLENBQUNLLEVBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEUztBQUFBLE9BQVY7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZ0JBcUJDO0FBQUEsNkJBQ0U7QUFDRSxXQUFHLEVBQUMsZ0lBRE47QUFFRSxXQUFHLEVBQUM7QUFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXRCSixtQkFERjtBQWdDRDs7R0F4Q3VCWixLOztLQUFBQSxLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmIzNmMwOTk2YWVmYjAzMTRlNDNiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlcnMoeyB1c2VycyB9KSB7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHN0YXRlTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGVzdGFkbyA9ICgpPT57XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7IWxvYWRpbmcgPyAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIHt1c2Vycy5tYXAoKHUpID0+IChcclxuICAgICAgICAgICAgPGZpZWxkc2V0XHJcbiAgICAgICAgICAgICAga2V5PXt1LmlkfVxyXG4gICAgICAgICAgICAvLyAgIG9uQ2xpY2s9e1xyXG4gICAgICAgICAgICAvLyAgICAgKCgpID0+IHN0YXRlTG9hZGluZyh0cnVlKSxcclxuICAgICAgICAgICAgLy8gICAgICgpID0+IFJvdXRlci5wdXNoKFwiL3VzZXJzL1tpZF1cIiwgYC91c2Vycy8ke3UuaWR9YCkpXHJcbiAgICAgICAgICAgIC8vICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2Ake3UuZmlyc3RfbmFtZX0gJHt1Lmxhc3RfbmFtZX1gfVxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDxzbWFsbD57dS5lbWFpbH08L3NtYWxsPlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgZGlyPVwicnRsXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17dS5hdmF0YXJ9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL21lZGlhMS5naXBoeS5jb20vbWVkaWEvMTdtTkNjS1UxbUpscmJYb2RvLzIwMHcud2VicD9jaWQ9ZWNmMDVlNDdpbWY1bzk1aXY2M2JlcTR4bmNpMjN5Z3lzdHVqemV3amV1ZHNuM2dsJnJpZD0yMDB3LndlYnBcIlxyXG4gICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==