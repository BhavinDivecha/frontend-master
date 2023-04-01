(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6004:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6764);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_assets_fonts_fontawesome_fontawesome_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1753);
/* harmony import */ var _public_assets_fonts_fontawesome_fontawesome_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_assets_fonts_fontawesome_fontawesome_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9090);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_assets_libs_fancyapps_fancybox_dist_jquery_fancybox_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1041);
/* harmony import */ var _public_assets_libs_fancyapps_fancybox_dist_jquery_fancybox_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_assets_libs_fancyapps_fancybox_dist_jquery_fancybox_min_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_assets_libs_aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5783);
/* harmony import */ var _public_assets_libs_aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_assets_libs_aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_assets_libs_choices_js_public_assets_styles_choices_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9186);
/* harmony import */ var _public_assets_libs_choices_js_public_assets_styles_choices_min_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_assets_libs_choices_js_public_assets_styles_choices_min_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_assets_libs_flickity_fade_flickity_fade_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(783);
/* harmony import */ var _public_assets_libs_flickity_fade_flickity_fade_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_assets_libs_flickity_fade_flickity_fade_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_assets_libs_flickity_dist_flickity_min_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4277);
/* harmony import */ var _public_assets_libs_flickity_dist_flickity_min_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_assets_libs_flickity_dist_flickity_min_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_assets_libs_highlightjs_styles_vs2015_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8232);
/* harmony import */ var _public_assets_libs_highlightjs_styles_vs2015_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_assets_libs_highlightjs_styles_vs2015_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _public_assets_libs_jarallax_dist_jarallax_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4198);
/* harmony import */ var _public_assets_libs_jarallax_dist_jarallax_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_assets_libs_jarallax_dist_jarallax_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _public_assets_libs_quill_dist_quill_core_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8813);
/* harmony import */ var _public_assets_libs_quill_dist_quill_core_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_public_assets_libs_quill_dist_quill_core_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _public_assets_css_theme_min_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2436);
/* harmony import */ var _public_assets_css_theme_min_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_public_assets_css_theme_min_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3590);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(4298);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_16__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_14__]);
react_toastify__WEBPACK_IMPORTED_MODULE_14__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


















function App({ Component , pageProps  }) {
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 7064, 23));
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_14__.ToastContainer, {
                position: "top-right",
                autoClose: 8000,
                hideProgressBar: false,
                newestOnTop: false,
                draggable: false,
                pauseOnVisibilityChange: true,
                closeOnClick: true,
                pauseOnHover: true
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2436:
/***/ (() => {



/***/ }),

/***/ 1753:
/***/ (() => {



/***/ }),

/***/ 1041:
/***/ (() => {



/***/ }),

/***/ 5783:
/***/ (() => {



/***/ }),

/***/ 9186:
/***/ (() => {



/***/ }),

/***/ 783:
/***/ (() => {



/***/ }),

/***/ 4277:
/***/ (() => {



/***/ }),

/***/ 8232:
/***/ (() => {



/***/ }),

/***/ 4198:
/***/ (() => {



/***/ }),

/***/ 8813:
/***/ (() => {



/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 7064:
/***/ ((module) => {

"use strict";
module.exports = require("bootstrap/dist/js/bootstrap");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3590:
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [219,170,315], () => (__webpack_exec__(6004)));
module.exports = __webpack_exports__;

})();