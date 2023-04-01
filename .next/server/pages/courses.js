"use strict";
(() => {
var exports = {};
exports.id = 520;
exports.ids = [520];
exports.modules = {

/***/ 3033:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Courses)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5259);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7957);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Components_Layout__WEBPACK_IMPORTED_MODULE_1__, _api__WEBPACK_IMPORTED_MODULE_2__]);
([_Components_Layout__WEBPACK_IMPORTED_MODULE_1__, _api__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function Courses() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const [courses, setCourses] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    const [department, setDepartment] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    const [categories, setCategory] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    const fetchData = async (dept = null, catg = [])=>{
        await (0,_api__WEBPACK_IMPORTED_MODULE_2__/* .GetDepartmentById */ .OJ)(dept).then(function(res) {
            if (res && res.status == 200) {
                setDepartment(res.data.details);
                console.log(res.data.details);
            } else {}
        });
        await (0,_api__WEBPACK_IMPORTED_MODULE_2__/* .GetCoursesPublic */ .o)(dept, catg).then(function(res) {
            if (res && res.status == 200) {
                setCourses(res.data.details);
                console.log(res.data.details);
            } else {}
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        fetchData(router.query.id);
    }, [
        router.query
    ]);
    function handleChange(e) {
        let array = categories;
        console.log("categories", categories);
        if (e.target.checked) {
            console.log("array", array);
            array.push(e.target.name);
        } else {
            array = array.filter(function(item) {
                return item !== e.target.name;
            });
        }
        array = [
            ...new Set(array)
        ];
        setCategory(array);
        console.log(categories);
    }
    const handleOnClick = async ()=>{
        if (router.query.id) {
            fetchData(router.query.id, categories);
        } else {
            fetchData(null, categories);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Components_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container mb-6 mb-xl-8 z-index-2",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "d-lg-flex align-items-center mb-6 mb-xl-0",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "mb-lg-0",
                        children: [
                            "We found ",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: "text-dark",
                                children: [
                                    courses && courses.length,
                                    " courses"
                                ]
                            }),
                            " available for you"
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row",
                    children: [
                        department && department.categories && department.categories.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-xl-4 mb-5 mb-xl-0",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: " vertical-scroll",
                                id: "courseSidebar",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "border rounded mb-6 ",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                id: "coursefilter1",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                    className: "mb-0",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                        className: "p-6 text-dark fw-medium d-flex align-items-center collapse-accordion-toggle line-height-one",
                                                        type: "button",
                                                        "data-bs-toggle": "collapse",
                                                        "data-bs-target": "#coursefiltercollapse1",
                                                        "aria-expanded": "true",
                                                        "aria-controls": "coursefiltercollapse1",
                                                        children: [
                                                            "Category",
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                className: "ms-auto text-dark d-flex",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                        width: "15",
                                                                        height: "2",
                                                                        viewBox: "0 0 15 2",
                                                                        fill: "none",
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                            width: "15",
                                                                            height: "2",
                                                                            fill: "currentColor"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                                        width: "15",
                                                                        height: "16",
                                                                        viewBox: "0 0 15 16",
                                                                        fill: "none",
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                d: "M0 7H15V9H0V7Z",
                                                                                fill: "currentColor"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                d: "M6 16L6 8.74228e-08L8 0L8 16H6Z",
                                                                                fill: "currentColor"
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                id: "coursefiltercollapse1",
                                                className: "collapse show mt-n2 px-6 pb-6",
                                                "aria-labelledby": "coursefilter1",
                                                "data-parent": "#courseSidebar",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                    className: "list-unstyled list-group list-checkbox",
                                                    children: department && department.categories && department.categories.length > 0 && department.categories.map((cat, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                            className: "custom-control custom-checkbox",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                    type: "checkbox",
                                                                    name: cat.name,
                                                                    className: "custom-control-input",
                                                                    id: `category${i}`,
                                                                    onChange: handleChange
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                    className: "custom-control-label font-size-base",
                                                                    for: `category${i}`,
                                                                    children: cat.name
                                                                })
                                                            ]
                                                        }))
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        onClick: handleOnClick,
                                        className: "btn btn-primary btn-block mb-10",
                                        children: "FILTER RESULTS"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: department && department.categories && department.categories.length > 0 ? "col-xl-8" : "col-xl-12",
                            children: courses && courses.length > 0 && courses.map((course)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "card border shadow p-2 lift sk-fade mb-6 flex-md-row align-items-center row gx-0",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-md-4 card-zoom position-relative",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: `course/?id=${course._id}`,
                                                className: "card-img sk-thumbnail img-ratio-2 d-block",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    className: "rounded shadow-light-lg",
                                                    src: `${"http://"}${"localhost:3001/"}uploads/${course.logo}`,
                                                    alt: "..."
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "col-md-8 card-footer px-2 px-md-5 py-4 py-md-0 position-relative",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: `course/?id=${course._id}`,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "mb-1 d-inline-block text-gray-800",
                                                        children: course.name
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "position-relative",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: `course/?id=${course._id}`,
                                                        className: "d-block stretched-link",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                            className: "line-clamp-2 me-md-6 me-lg-10 me-xl-4 mb-3",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                dangerouslySetInnerHTML: {
                                                                    __html: course.shortDescription
                                                                }
                                                            })
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }))
                        })
                    ]
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 358:
/***/ ((module) => {

module.exports = require("react-bootstrap");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [219,664,259], () => (__webpack_exec__(3033)));
module.exports = __webpack_exports__;

})();