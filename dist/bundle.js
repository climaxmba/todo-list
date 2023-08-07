/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/WorkSans-VariableFont_wght.ttf */ "./src/fonts/WorkSans-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* General */
@font-face {
    font-family: 'WorkSans';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('truetype');
}

html {
    --largepad: 15px;
    --mediumpad: 8px;
    --smallpad: 3px;
    --smallrad: 3px;
    --mediumrad: 8px;
    --largerad: 15px;
    --shadow: 0px 1px 5px 0px #00000080;
    --bgdark: royalblue;
    --bglight: white;
    --fglight: white;
    --fgdark: black;
    --dangerbgcolor: #c54949;
    --prty-high: #ffcdc1;
    --prty-medium: #fff19f;
    --prty-low: #cbffce;
}
* {
    box-sizing: border-box;
}
body {
    font-family: 'WorkSans', 'Open Sans', sans-serif;
    display: grid;
    grid-template: auto minmax(120vh, 250%) / 70vw 1fr;
    gap: 1em;
    margin: 0;
    padding-left: 1rem;
}
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--largepad) 0;
}
header h1 {
    margin: 0;
}
#menu-icon {
    display: none;
}
button {
    cursor: pointer;
    padding: calc(var(--mediumpad) + 3px);
    border-radius: var(--mediumrad);
    border: none;
    color: var(--fglight);
    background-color: var(--bgdark);
}
button:active {
    color: var(--bgdark);
    background-color: transparent;
}
#newbtn {
    padding: 0.5rem 1.5rem;
    border-radius: var(--largerad);
    cursor: pointer;
    background: var(--bgdark);
    color: var(--fglight);
    border: none;
    font-weight: bold;
    box-shadow: var(--shadow);
}
#newbtn:active {
    box-shadow: none;
}
#main > div:not(.active-page) {
    display: none;
}
#menu-icon {
    display: none;
}
#sidebar {
    background: var(--bgdark);
    color: var(--fglight);
    grid-row: 1 / -1;
    grid-column: 2 / -1;
}
#sidebar ul {
    list-style: none;
    padding-left: 0;
    margin: var(--largepad);
    font-size: large;
    display: flex;
    flex-direction: column;
    gap: 16px;
}
.tabs {
    cursor: pointer;
}
.tabs.active {
    font-weight: bold;
}

/* home */
#home-page h2:first-child {
    color: var(--bgdark);
}
#home-page ul {
    list-style: none;
    padding-left: 0;
    display: flex;
    flex-direction: column;
    gap: 5px;
}
.empty-content {
    font-style: italic;
    padding-left: var(--largepad);
    font-size: large;
}
.project-name {
    font-size: large;
    font-weight: bold;
}
.projects-contr {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 8px;
}
.projects-contr > div:not(.empty-content) {
    border-radius: var(--mediumrad);
    padding: var(--mediumpad);
    box-shadow: var(--shadow);
    display: grid;
    grid-template-rows: auto 1fr auto;
}
.project-name-contr {
    display: flex;
    justify-content: space-between;
}
.flex-list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--mediumpad);
    border-radius: var(--mediumrad);
}
.projects-contr li:not(:first-child) {
    border-top: 1px solid;
}
.flex-list-elem {
    display: flex;
    gap: 5px;
    align-items: center;
}
#this-week-contr .flex-list-item {
    border: none;
    box-shadow: var(--shadow);
}
.task-name {
    max-width: 110px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.task-lbl-l,
.task-lbl-m,
.task-lbl-h {
    text-transform: uppercase;
    font-size: x-small;
    letter-spacing: 1px;
    padding: var(--smallpad);
    color: var(--fgdark);
    border-radius: var(--smallrad);
    border: 1px solid;
}
svg.actions {
    height: 1.5rem;
    width: 1.5rem;
    cursor: pointer;
}
#this-week-contr ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 8px;
}

/* projects */
#projects-page {
    margin: 1.2rem 0;
}
#projects-page ul {
    padding-left: 0;
    list-style: none;
}
#projects-page .flex-list-item {
    border-radius: 0;
}

/* notes */
#notes-contr {
    display: grid;
    gap: 8px;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    margin: 1.5rem 0;
}
#notes-contr > div {
    box-shadow: var(--shadow);
    padding: var(--mediumpad);
    border-radius: var(--mediumrad);
}
.note-title-contr {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.note-title {
    font-weight: bold;
}
.notecontent {
    padding: var(--mediumpad);
    margin: 1rem 0;
    white-space: pre-wrap;
    word-break: break-word;
}

/* About & Settings (More) page */
#more-page {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
#more-page h2 {
    color: var(--bgdark);
}
#more-page a {
    text-decoration: none;
    color: var(--bgdark);
    font-weight: 600;
    cursor: pointer;
}
#reset-btn {
    background-color: var(--dangerbgcolor);
}
#reset-btn:active {
    color: var(--dangerbgcolor);
    background-color: transparent;
}

/* modal */
#modal.active {
    display: flex !important;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #00000030;
    z-index: 10;
}
#modal-box {
    box-shadow: 0 0 5px 3px #00000020;
    background-color: var(--bglight);
    padding: var(--largepad);
    border-radius: var(--mediumrad);
    flex: 1 0 280px;
    margin: 0 35%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
#modal-box > div:first-child {
    display: flex;
    justify-content: space-between;
}
#modal-title {
    font-size: 1.25rem;
    font-weight: bold;
    text-transform: lowercase;
}
#modal-title::first-letter {
    text-transform: uppercase;
}
#close-modal {
    cursor: pointer;
}
#modal-content form,
#modal-content > div {
    border: none;
    display: flex;
    gap: 1rem;
    flex-direction: column;
}
#modal-content .field {
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
}
#modal-content input,
#modal-content textarea {
    cursor: pointer;
    font-family: 'WorkSans';
    padding: var(--smallpad) var(--mediumpad);
    margin: 0 0.2rem;
    border: none;
    border-bottom: 1px solid;
}
#modal-content textarea {
    border: 1px solid;
    border-radius: var(--smallrad);
}
#modal-content input:active,
#modal-content textarea:active,
#modal-content input:focus,
#modal-content textarea:focus {
    outline: none;
}
#modal-content input[type="radio"] {
    display: none;
}
#modal-content label[for|="task-priority"] {
    cursor: pointer;
    text-transform: uppercase;
    font-size: x-small;
    letter-spacing: 1px;
    padding: var(--smallpad);
    color: var(--fgdark);
    border-radius: var(--smallrad);
    border: 1px solid;
}
.task-lbl-h,
#modal-content input[type="radio"]:checked ~ label[for="task-priority-h"] {
    background-color: var(--prty-high);
}
.task-lbl-m,
#modal-content input[type="radio"]:checked ~ label[for="task-priority-m"] {
    background-color: var(--prty-medium);
}
.task-lbl-l,
#modal-content input[type="radio"]:checked ~ label[for="task-priority-l"] {
    background-color: var(--prty-low);
}
#radio-btns-cntr {
    display: flex;
    gap: 0.5rem;
}
#details .field > div:first-child {
    letter-spacing: 1px;
}
#details .field > div:last-child {
    font-weight: 500;
}
#details .task-lbl-h,
#details .task-lbl-l,
#details .task-lbl-m {
    align-self: flex-start;
}
div#confirm {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
}
#delete-btn {
    background-color: var(--dangerbgcolor);
}
#delete-btn:active {
    color: var(--dangerbgcolor);
    background-color: transparent;
}

/* Media query */
@media (max-width: 680px) {
    body {
        display: flex;
        flex-direction: column;
        margin: 1rem;
        gap: 2rem;
        padding: 0;
    }
    #menu-icon {
        display: unset;
    }
    header[data-menu-active] #menu-icon {
        background-color: var(--bgdark);
        fill: var(--fglight);
        border-radius: 50%;
        padding: var(--smallpad);
    }
    .projects-contr {
        gap: 1rem;
    }
    #sidebar {
        display: none;
    }
    header[data-menu-active] ~ #sidebar {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 -1px 5px 0px #00000080;
    }
    #sidebar > ul {
        flex-direction: row;
        font-size: small;
        margin: 1.5rem 0;
    }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,YAAY;AACZ;IACI,uBAAuB;IACvB,+DAAqE;AACzE;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,eAAe;IACf,eAAe;IACf,gBAAgB;IAChB,gBAAgB;IAChB,mCAAmC;IACnC,mBAAmB;IACnB,gBAAgB;IAChB,gBAAgB;IAChB,eAAe;IACf,wBAAwB;IACxB,oBAAoB;IACpB,sBAAsB;IACtB,mBAAmB;AACvB;AACA;IACI,sBAAsB;AAC1B;AACA;IACI,gDAAgD;IAChD,aAAa;IACb,kDAAkD;IAClD,QAAQ;IACR,SAAS;IACT,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,0BAA0B;AAC9B;AACA;IACI,SAAS;AACb;AACA;IACI,aAAa;AACjB;AACA;IACI,eAAe;IACf,qCAAqC;IACrC,+BAA+B;IAC/B,YAAY;IACZ,qBAAqB;IACrB,+BAA+B;AACnC;AACA;IACI,oBAAoB;IACpB,6BAA6B;AACjC;AACA;IACI,sBAAsB;IACtB,8BAA8B;IAC9B,eAAe;IACf,yBAAyB;IACzB,qBAAqB;IACrB,YAAY;IACZ,iBAAiB;IACjB,yBAAyB;AAC7B;AACA;IACI,gBAAgB;AACpB;AACA;IACI,aAAa;AACjB;AACA;IACI,aAAa;AACjB;AACA;IACI,yBAAyB;IACzB,qBAAqB;IACrB,gBAAgB;IAChB,mBAAmB;AACvB;AACA;IACI,gBAAgB;IAChB,eAAe;IACf,uBAAuB;IACvB,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;AACA;IACI,eAAe;AACnB;AACA;IACI,iBAAiB;AACrB;;AAEA,SAAS;AACT;IACI,oBAAoB;AACxB;AACA;IACI,gBAAgB;IAChB,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;AACA;IACI,kBAAkB;IAClB,6BAA6B;IAC7B,gBAAgB;AACpB;AACA;IACI,gBAAgB;IAChB,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,2DAA2D;IAC3D,QAAQ;AACZ;AACA;IACI,+BAA+B;IAC/B,yBAAyB;IACzB,yBAAyB;IACzB,aAAa;IACb,iCAAiC;AACrC;AACA;IACI,aAAa;IACb,8BAA8B;AAClC;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,yBAAyB;IACzB,+BAA+B;AACnC;AACA;IACI,qBAAqB;AACzB;AACA;IACI,aAAa;IACb,QAAQ;IACR,mBAAmB;AACvB;AACA;IACI,YAAY;IACZ,yBAAyB;AAC7B;AACA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,uBAAuB;IACvB,mBAAmB;AACvB;AACA;;;IAGI,yBAAyB;IACzB,kBAAkB;IAClB,mBAAmB;IACnB,wBAAwB;IACxB,oBAAoB;IACpB,8BAA8B;IAC9B,iBAAiB;AACrB;AACA;IACI,cAAc;IACd,aAAa;IACb,eAAe;AACnB;AACA;IACI,aAAa;IACb,2DAA2D;IAC3D,QAAQ;AACZ;;AAEA,aAAa;AACb;IACI,gBAAgB;AACpB;AACA;IACI,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,gBAAgB;AACpB;;AAEA,UAAU;AACV;IACI,aAAa;IACb,QAAQ;IACR,2DAA2D;IAC3D,gBAAgB;AACpB;AACA;IACI,yBAAyB;IACzB,yBAAyB;IACzB,+BAA+B;AACnC;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,yBAAyB;IACzB,cAAc;IACd,qBAAqB;IACrB,sBAAsB;AAC1B;;AAEA,iCAAiC;AACjC;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;AACA;IACI,oBAAoB;AACxB;AACA;IACI,qBAAqB;IACrB,oBAAoB;IACpB,gBAAgB;IAChB,eAAe;AACnB;AACA;IACI,sCAAsC;AAC1C;AACA;IACI,2BAA2B;IAC3B,6BAA6B;AACjC;;AAEA,UAAU;AACV;IACI,wBAAwB;IACxB,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,2BAA2B;IAC3B,WAAW;AACf;AACA;IACI,iCAAiC;IACjC,gCAAgC;IAChC,wBAAwB;IACxB,+BAA+B;IAC/B,eAAe;IACf,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;AACA;IACI,aAAa;IACb,8BAA8B;AAClC;AACA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,yBAAyB;AAC7B;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,eAAe;AACnB;AACA;;IAEI,YAAY;IACZ,aAAa;IACb,SAAS;IACT,sBAAsB;AAC1B;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;AACf;AACA;;IAEI,eAAe;IACf,uBAAuB;IACvB,yCAAyC;IACzC,gBAAgB;IAChB,YAAY;IACZ,wBAAwB;AAC5B;AACA;IACI,iBAAiB;IACjB,8BAA8B;AAClC;AACA;;;;IAII,aAAa;AACjB;AACA;IACI,aAAa;AACjB;AACA;IACI,eAAe;IACf,yBAAyB;IACzB,kBAAkB;IAClB,mBAAmB;IACnB,wBAAwB;IACxB,oBAAoB;IACpB,8BAA8B;IAC9B,iBAAiB;AACrB;AACA;;IAEI,kCAAkC;AACtC;AACA;;IAEI,oCAAoC;AACxC;AACA;;IAEI,iCAAiC;AACrC;AACA;IACI,aAAa;IACb,WAAW;AACf;AACA;IACI,mBAAmB;AACvB;AACA;IACI,gBAAgB;AACpB;AACA;;;IAGI,sBAAsB;AAC1B;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,SAAS;AACb;AACA;IACI,sCAAsC;AAC1C;AACA;IACI,2BAA2B;IAC3B,6BAA6B;AACjC;;AAEA,gBAAgB;AAChB;IACI;QACI,aAAa;QACb,sBAAsB;QACtB,YAAY;QACZ,SAAS;QACT,UAAU;IACd;IACA;QACI,cAAc;IAClB;IACA;QACI,+BAA+B;QAC/B,oBAAoB;QACpB,kBAAkB;QAClB,wBAAwB;IAC5B;IACA;QACI,SAAS;IACb;IACA;QACI,aAAa;IACjB;IACA;QACI,eAAe;QACf,SAAS;QACT,OAAO;QACP,QAAQ;QACR,aAAa;QACb,uBAAuB;QACvB,mBAAmB;QACnB,oCAAoC;IACxC;IACA;QACI,mBAAmB;QACnB,gBAAgB;QAChB,gBAAgB;IACpB;AACJ","sourcesContent":["/* General */\r\n@font-face {\r\n    font-family: 'WorkSans';\r\n    src: url('./fonts/WorkSans-VariableFont_wght.ttf') format('truetype');\r\n}\r\n\r\nhtml {\r\n    --largepad: 15px;\r\n    --mediumpad: 8px;\r\n    --smallpad: 3px;\r\n    --smallrad: 3px;\r\n    --mediumrad: 8px;\r\n    --largerad: 15px;\r\n    --shadow: 0px 1px 5px 0px #00000080;\r\n    --bgdark: royalblue;\r\n    --bglight: white;\r\n    --fglight: white;\r\n    --fgdark: black;\r\n    --dangerbgcolor: #c54949;\r\n    --prty-high: #ffcdc1;\r\n    --prty-medium: #fff19f;\r\n    --prty-low: #cbffce;\r\n}\r\n* {\r\n    box-sizing: border-box;\r\n}\r\nbody {\r\n    font-family: 'WorkSans', 'Open Sans', sans-serif;\r\n    display: grid;\r\n    grid-template: auto minmax(120vh, 250%) / 70vw 1fr;\r\n    gap: 1em;\r\n    margin: 0;\r\n    padding-left: 1rem;\r\n}\r\nheader {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: var(--largepad) 0;\r\n}\r\nheader h1 {\r\n    margin: 0;\r\n}\r\n#menu-icon {\r\n    display: none;\r\n}\r\nbutton {\r\n    cursor: pointer;\r\n    padding: calc(var(--mediumpad) + 3px);\r\n    border-radius: var(--mediumrad);\r\n    border: none;\r\n    color: var(--fglight);\r\n    background-color: var(--bgdark);\r\n}\r\nbutton:active {\r\n    color: var(--bgdark);\r\n    background-color: transparent;\r\n}\r\n#newbtn {\r\n    padding: 0.5rem 1.5rem;\r\n    border-radius: var(--largerad);\r\n    cursor: pointer;\r\n    background: var(--bgdark);\r\n    color: var(--fglight);\r\n    border: none;\r\n    font-weight: bold;\r\n    box-shadow: var(--shadow);\r\n}\r\n#newbtn:active {\r\n    box-shadow: none;\r\n}\r\n#main > div:not(.active-page) {\r\n    display: none;\r\n}\r\n#menu-icon {\r\n    display: none;\r\n}\r\n#sidebar {\r\n    background: var(--bgdark);\r\n    color: var(--fglight);\r\n    grid-row: 1 / -1;\r\n    grid-column: 2 / -1;\r\n}\r\n#sidebar ul {\r\n    list-style: none;\r\n    padding-left: 0;\r\n    margin: var(--largepad);\r\n    font-size: large;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 16px;\r\n}\r\n.tabs {\r\n    cursor: pointer;\r\n}\r\n.tabs.active {\r\n    font-weight: bold;\r\n}\r\n\r\n/* home */\r\n#home-page h2:first-child {\r\n    color: var(--bgdark);\r\n}\r\n#home-page ul {\r\n    list-style: none;\r\n    padding-left: 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 5px;\r\n}\r\n.empty-content {\r\n    font-style: italic;\r\n    padding-left: var(--largepad);\r\n    font-size: large;\r\n}\r\n.project-name {\r\n    font-size: large;\r\n    font-weight: bold;\r\n}\r\n.projects-contr {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\r\n    gap: 8px;\r\n}\r\n.projects-contr > div:not(.empty-content) {\r\n    border-radius: var(--mediumrad);\r\n    padding: var(--mediumpad);\r\n    box-shadow: var(--shadow);\r\n    display: grid;\r\n    grid-template-rows: auto 1fr auto;\r\n}\r\n.project-name-contr {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n.flex-list-item {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: var(--mediumpad);\r\n    border-radius: var(--mediumrad);\r\n}\r\n.projects-contr li:not(:first-child) {\r\n    border-top: 1px solid;\r\n}\r\n.flex-list-elem {\r\n    display: flex;\r\n    gap: 5px;\r\n    align-items: center;\r\n}\r\n#this-week-contr .flex-list-item {\r\n    border: none;\r\n    box-shadow: var(--shadow);\r\n}\r\n.task-name {\r\n    max-width: 110px;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n}\r\n.task-lbl-l,\r\n.task-lbl-m,\r\n.task-lbl-h {\r\n    text-transform: uppercase;\r\n    font-size: x-small;\r\n    letter-spacing: 1px;\r\n    padding: var(--smallpad);\r\n    color: var(--fgdark);\r\n    border-radius: var(--smallrad);\r\n    border: 1px solid;\r\n}\r\nsvg.actions {\r\n    height: 1.5rem;\r\n    width: 1.5rem;\r\n    cursor: pointer;\r\n}\r\n#this-week-contr ul {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\r\n    gap: 8px;\r\n}\r\n\r\n/* projects */\r\n#projects-page {\r\n    margin: 1.2rem 0;\r\n}\r\n#projects-page ul {\r\n    padding-left: 0;\r\n    list-style: none;\r\n}\r\n#projects-page .flex-list-item {\r\n    border-radius: 0;\r\n}\r\n\r\n/* notes */\r\n#notes-contr {\r\n    display: grid;\r\n    gap: 8px;\r\n    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\r\n    margin: 1.5rem 0;\r\n}\r\n#notes-contr > div {\r\n    box-shadow: var(--shadow);\r\n    padding: var(--mediumpad);\r\n    border-radius: var(--mediumrad);\r\n}\r\n.note-title-contr {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n.note-title {\r\n    font-weight: bold;\r\n}\r\n.notecontent {\r\n    padding: var(--mediumpad);\r\n    margin: 1rem 0;\r\n    white-space: pre-wrap;\r\n    word-break: break-word;\r\n}\r\n\r\n/* About & Settings (More) page */\r\n#more-page {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n}\r\n#more-page h2 {\r\n    color: var(--bgdark);\r\n}\r\n#more-page a {\r\n    text-decoration: none;\r\n    color: var(--bgdark);\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n}\r\n#reset-btn {\r\n    background-color: var(--dangerbgcolor);\r\n}\r\n#reset-btn:active {\r\n    color: var(--dangerbgcolor);\r\n    background-color: transparent;\r\n}\r\n\r\n/* modal */\r\n#modal.active {\r\n    display: flex !important;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: #00000030;\r\n    z-index: 10;\r\n}\r\n#modal-box {\r\n    box-shadow: 0 0 5px 3px #00000020;\r\n    background-color: var(--bglight);\r\n    padding: var(--largepad);\r\n    border-radius: var(--mediumrad);\r\n    flex: 1 0 280px;\r\n    margin: 0 35%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n}\r\n#modal-box > div:first-child {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n#modal-title {\r\n    font-size: 1.25rem;\r\n    font-weight: bold;\r\n    text-transform: lowercase;\r\n}\r\n#modal-title::first-letter {\r\n    text-transform: uppercase;\r\n}\r\n#close-modal {\r\n    cursor: pointer;\r\n}\r\n#modal-content form,\r\n#modal-content > div {\r\n    border: none;\r\n    display: flex;\r\n    gap: 1rem;\r\n    flex-direction: column;\r\n}\r\n#modal-content .field {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.1rem;\r\n}\r\n#modal-content input,\r\n#modal-content textarea {\r\n    cursor: pointer;\r\n    font-family: 'WorkSans';\r\n    padding: var(--smallpad) var(--mediumpad);\r\n    margin: 0 0.2rem;\r\n    border: none;\r\n    border-bottom: 1px solid;\r\n}\r\n#modal-content textarea {\r\n    border: 1px solid;\r\n    border-radius: var(--smallrad);\r\n}\r\n#modal-content input:active,\r\n#modal-content textarea:active,\r\n#modal-content input:focus,\r\n#modal-content textarea:focus {\r\n    outline: none;\r\n}\r\n#modal-content input[type=\"radio\"] {\r\n    display: none;\r\n}\r\n#modal-content label[for|=\"task-priority\"] {\r\n    cursor: pointer;\r\n    text-transform: uppercase;\r\n    font-size: x-small;\r\n    letter-spacing: 1px;\r\n    padding: var(--smallpad);\r\n    color: var(--fgdark);\r\n    border-radius: var(--smallrad);\r\n    border: 1px solid;\r\n}\r\n.task-lbl-h,\r\n#modal-content input[type=\"radio\"]:checked ~ label[for=\"task-priority-h\"] {\r\n    background-color: var(--prty-high);\r\n}\r\n.task-lbl-m,\r\n#modal-content input[type=\"radio\"]:checked ~ label[for=\"task-priority-m\"] {\r\n    background-color: var(--prty-medium);\r\n}\r\n.task-lbl-l,\r\n#modal-content input[type=\"radio\"]:checked ~ label[for=\"task-priority-l\"] {\r\n    background-color: var(--prty-low);\r\n}\r\n#radio-btns-cntr {\r\n    display: flex;\r\n    gap: 0.5rem;\r\n}\r\n#details .field > div:first-child {\r\n    letter-spacing: 1px;\r\n}\r\n#details .field > div:last-child {\r\n    font-weight: 500;\r\n}\r\n#details .task-lbl-h,\r\n#details .task-lbl-l,\r\n#details .task-lbl-m {\r\n    align-self: flex-start;\r\n}\r\ndiv#confirm {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    gap: 1rem;\r\n}\r\n#delete-btn {\r\n    background-color: var(--dangerbgcolor);\r\n}\r\n#delete-btn:active {\r\n    color: var(--dangerbgcolor);\r\n    background-color: transparent;\r\n}\r\n\r\n/* Media query */\r\n@media (max-width: 680px) {\r\n    body {\r\n        display: flex;\r\n        flex-direction: column;\r\n        margin: 1rem;\r\n        gap: 2rem;\r\n        padding: 0;\r\n    }\r\n    #menu-icon {\r\n        display: unset;\r\n    }\r\n    header[data-menu-active] #menu-icon {\r\n        background-color: var(--bgdark);\r\n        fill: var(--fglight);\r\n        border-radius: 50%;\r\n        padding: var(--smallpad);\r\n    }\r\n    .projects-contr {\r\n        gap: 1rem;\r\n    }\r\n    #sidebar {\r\n        display: none;\r\n    }\r\n    header[data-menu-active] ~ #sidebar {\r\n        position: fixed;\r\n        bottom: 0;\r\n        left: 0;\r\n        right: 0;\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        box-shadow: 0 -1px 5px 0px #00000080;\r\n    }\r\n    #sidebar > ul {\r\n        flex-direction: row;\r\n        font-size: small;\r\n        margin: 1.5rem 0;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();
  while (output.length < targetLength) {
    output = '0' + output;
  }
  return sign + output;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions),
/* harmony export */   setDefaultOptions: () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */
var formatters = {
  // Year
  y: function y(date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |

    var signedYear = date.getUTCFullYear();
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function M(date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(month + 1, 2);
  },
  // Day of the month
  d: function d(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function a(date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';
    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();
      case 'aaa':
        return dayPeriodEnumValue;
      case 'aaaaa':
        return dayPeriodEnumValue[0];
      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function h(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function H(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours(), token.length);
  },
  // Minute
  m: function m(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function s(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function S(date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(fractionalSeconds, token.length);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number = Number(dirtyNumber);
  if (isNaN(number)) {
    return number;
  }
  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addDays/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/addDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addDays)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} - the new date with the days added
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */
function addDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  if (isNaN(amount)) {
    return new Date(NaN);
  }
  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }
  date.setDate(date.getDate() + amount);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */
function addMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var timestamp = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime();
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  return new Date(timestamp + amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/constants/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/constants/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   daysInWeek: () => (/* binding */ daysInWeek),
/* harmony export */   daysInYear: () => (/* binding */ daysInYear),
/* harmony export */   maxTime: () => (/* binding */ maxTime),
/* harmony export */   millisecondsInHour: () => (/* binding */ millisecondsInHour),
/* harmony export */   millisecondsInMinute: () => (/* binding */ millisecondsInMinute),
/* harmony export */   millisecondsInSecond: () => (/* binding */ millisecondsInSecond),
/* harmony export */   minTime: () => (/* binding */ minTime),
/* harmony export */   minutesInHour: () => (/* binding */ minutesInHour),
/* harmony export */   monthsInQuarter: () => (/* binding */ monthsInQuarter),
/* harmony export */   monthsInYear: () => (/* binding */ monthsInYear),
/* harmony export */   quartersInYear: () => (/* binding */ quartersInYear),
/* harmony export */   secondsInDay: () => (/* binding */ secondsInDay),
/* harmony export */   secondsInHour: () => (/* binding */ secondsInHour),
/* harmony export */   secondsInMinute: () => (/* binding */ secondsInMinute),
/* harmony export */   secondsInMonth: () => (/* binding */ secondsInMonth),
/* harmony export */   secondsInQuarter: () => (/* binding */ secondsInQuarter),
/* harmony export */   secondsInWeek: () => (/* binding */ secondsInWeek),
/* harmony export */   secondsInYear: () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * Days in 1 week.
 *
 * @name daysInWeek
 * @constant
 * @type {number}
 * @default
 */
var daysInWeek = 7;

/**
 * Days in 1 year
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 *
 * @name daysInYear
 * @constant
 * @type {number}
 * @default
 */
var daysInYear = 365.2425;

/**
 * Maximum allowed time.
 *
 * @name maxTime
 * @constant
 * @type {number}
 * @default
 */
var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;

/**
 * Milliseconds in 1 minute
 *
 * @name millisecondsInMinute
 * @constant
 * @type {number}
 * @default
 */
var millisecondsInMinute = 60000;

/**
 * Milliseconds in 1 hour
 *
 * @name millisecondsInHour
 * @constant
 * @type {number}
 * @default
 */
var millisecondsInHour = 3600000;

/**
 * Milliseconds in 1 second
 *
 * @name millisecondsInSecond
 * @constant
 * @type {number}
 * @default
 */
var millisecondsInSecond = 1000;

/**
 * Minimum allowed time.
 *
 * @name minTime
 * @constant
 * @type {number}
 * @default
 */
var minTime = -maxTime;

/**
 * Minutes in 1 hour
 *
 * @name minutesInHour
 * @constant
 * @type {number}
 * @default
 */
var minutesInHour = 60;

/**
 * Months in 1 quarter
 *
 * @name monthsInQuarter
 * @constant
 * @type {number}
 * @default
 */
var monthsInQuarter = 3;

/**
 * Months in 1 year
 *
 * @name monthsInYear
 * @constant
 * @type {number}
 * @default
 */
var monthsInYear = 12;

/**
 * Quarters in 1 year
 *
 * @name quartersInYear
 * @constant
 * @type {number}
 * @default
 */
var quartersInYear = 4;

/**
 * Seconds in 1 hour
 *
 * @name secondsInHour
 * @constant
 * @type {number}
 * @default
 */
var secondsInHour = 3600;

/**
 * Seconds in 1 minute
 *
 * @name secondsInMinute
 * @constant
 * @type {number}
 * @default
 */
var secondsInMinute = 60;

/**
 * Seconds in 1 day
 *
 * @name secondsInDay
 * @constant
 * @type {number}
 * @default
 */
var secondsInDay = secondsInHour * 24;

/**
 * Seconds in 1 week
 *
 * @name secondsInWeek
 * @constant
 * @type {number}
 * @default
 */
var secondsInWeek = secondsInDay * 7;

/**
 * Seconds in 1 year
 *
 * @name secondsInYear
 * @constant
 * @type {number}
 * @default
 */
var secondsInYear = secondsInDay * daysInYear;

/**
 * Seconds in 1 month
 *
 * @name secondsInMonth
 * @constant
 * @type {number}
 * @default
 */
var secondsInMonth = secondsInYear / 12;

/**
 * Seconds in 1 quarter
 *
 * @name secondsInQuarter
 * @constant
 * @type {number}
 * @default
 */
var secondsInQuarter = secondsInMonth * 3;

/***/ }),

/***/ "./node_modules/date-fns/esm/isDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */
function isDate(value) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  return value instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(value) === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */
function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeek/index.js */ "./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week (and month and year)?
 *
 * @description
 * Are the given dates in the same week (and month and year)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the dates are in the same week (and month and year)
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
 *   weekStartsOn: 1
 * })
 * //=> false
 *
 * @example
 * // Are 1 January 2014 and 1 January 2015 in the same week?
 * const result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))
 * //=> false
 */
function isSameWeek(dirtyDateLeft, dirtyDateRight, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft, options);
  var dateRightStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight, options);
  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isThisWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isThisWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isThisWeek)
/* harmony export */ });
/* harmony import */ var _isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameWeek/index.js */ "./node_modules/date-fns/esm/isSameWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isThisWeek
 * @category Week Helpers
 * @summary Is the given date in the same week as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same week as the current date?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @param {Object} [options] - the object with options
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the date is in this week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // If today is 25 September 2014, is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21))
 * //=> true
 *
 * @example
 * // If today is 25 September 2014 and week starts with Monday
 * // is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21), { weekStartsOn: 1 })
 * //=> false
 */

function isThisWeek(dirtyDate, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now(), options);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */
function isToday(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isTomorrow/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isTomorrow/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isTomorrow)
/* harmony export */ });
/* harmony import */ var _addDays_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addDays/index.js */ "./node_modules/date-fns/esm/addDays/index.js");
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isTomorrow
 * @category Day Helpers
 * @summary Is the given date tomorrow?
 * @pure false
 *
 * @description
 * Is the given date tomorrow?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is tomorrow
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 7 October 14:00:00 tomorrow?
 * const result = isTomorrow(new Date(2014, 9, 7, 14, 0))
 * //=> true
 */
function isTomorrow(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, (0,_addDays_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Date.now(), 1));
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isValid/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isDate/index.js */ "./node_modules/date-fns/esm/isDate/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */
function isValid(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  if (!(0,_isDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate) && typeof dirtyDate !== 'number') {
    return false;
  }
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  return !isNaN(Number(date));
}

/***/ }),

/***/ "./node_modules/date-fns/esm/lightFormat/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/lightFormat/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ lightFormat)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_format_lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_lib/format/lightFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../isValid/index.js */ "./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../subMilliseconds/index.js */ "./node_modules/date-fns/esm/subMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");





 // This RegExp consists of three parts separated by `|`:
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
var formattingTokensRegExp = /(\w)\1*|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;

/**
 * @name lightFormat
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. Unlike `format`,
 * `lightFormat` doesn't use locales and outputs date using the most popular tokens.
 *
 * > ⚠️ Please note that the `lightFormat` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   |
 * |---------------------------------|---------|-----------------------------------|
 * | AM, PM                          | a..aaa  | AM, PM                            |
 * |                                 | aaaa    | a.m., p.m.                        |
 * |                                 | aaaaa   | a, p                              |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 |
 * |                                 | yy      | 44, 01, 00, 17                    |
 * |                                 | yyy     | 044, 001, 000, 017                |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |
 * |                                 | MM      | 01, 02, ..., 12                   |
 * | Day of month                    | d       | 1, 2, ..., 31                     |
 * |                                 | dd      | 01, 02, ..., 31                   |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |
 * |                                 | hh      | 01, 02, ..., 11, 12               |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |
 * |                                 | HH      | 00, 01, 02, ..., 23               |
 * | Minute                          | m       | 0, 1, ..., 59                     |
 * |                                 | mm      | 00, 01, ..., 59                   |
 * | Second                          | s       | 0, 1, ..., 59                     |
 * |                                 | ss      | 00, 01, ..., 59                   |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |
 * |                                 | SS      | 00, 01, ..., 99                   |
 * |                                 | SSS     | 000, 001, ..., 999                |
 * |                                 | SSSS    | ...                               |
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * const result = lightFormat(new Date(2014, 1, 11), 'yyyy-MM-dd')
 * //=> '2014-02-11'
 */

function lightFormat(dirtyDate, formatStr) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var originalDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  if (!(0,_isValid_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(originalDate)) {
    throw new RangeError('Invalid time value');
  }

  // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376
  var timezoneOffset = (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(originalDate);
  var utcDate = (0,_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(originalDate, timezoneOffset);
  var tokens = formatStr.match(formattingTokensRegExp);

  // The only case when formattingTokensRegExp doesn't match the string is when it's empty
  if (!tokens) return '';
  var result = tokens.map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }
    var firstCharacter = substring[0];
    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }
    var formatter = _lib_format_lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_5__["default"][firstCharacter];
    if (formatter) {
      return formatter(utcDate, substring);
    }
    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }
    return substring;
  }).join('');
  return result;
}
function cleanEscapedString(input) {
  var matches = input.match(escapedStringRegExp);
  if (!matches) {
    return input;
  }
  return matches[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ "./node_modules/date-fns/esm/parseISO/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseISO)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ "./node_modules/date-fns/esm/constants/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */
function parseISO(argument, options) {
  var _options$additionalDi;
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var additionalDigits = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])((_options$additionalDi = options === null || options === void 0 ? void 0 : options.additionalDigits) !== null && _options$additionalDi !== void 0 ? _options$additionalDi : 2);
  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }
  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }
  var dateStrings = splitDateString(argument);
  var date;
  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }
  if (!date || isNaN(date.getTime())) {
    return new Date(NaN);
  }
  var timestamp = date.getTime();
  var time = 0;
  var offset;
  if (dateStrings.time) {
    time = parseTime(dateStrings.time);
    if (isNaN(time)) {
      return new Date(NaN);
    }
  }
  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);
    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time);
    // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.
    var result = new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }
  return new Date(timestamp + time + offset);
}
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString;

  // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].
  if (array.length > 2) {
    return dateStrings;
  }
  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];
    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }
  if (timeString) {
    var token = patterns.timezone.exec(timeString);
    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }
  return dateStrings;
}
function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex);
  // Invalid ISO-formatted year
  if (!captures) return {
    year: NaN,
    restDateString: ''
  };
  var year = captures[1] ? parseInt(captures[1]) : null;
  var century = captures[2] ? parseInt(captures[2]) : null;

  // either year or century is null, not both
  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}
function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return new Date(NaN);
  var captures = dateString.match(dateRegex);
  // Invalid ISO-formatted string
  if (!captures) return new Date(NaN);
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;
  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }
    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);
    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }
    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}
function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}
function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return NaN; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);
  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }
  return hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute + seconds * 1000;
}
function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}
function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;
  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }
  return sign * (hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute);
}
function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

// Validation functions

// February is null to handle the leap year (using ||)
var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}
function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}
function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}
function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }
  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}
function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/subMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/subMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subMilliseconds)
/* harmony export */ });
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ "./node_modules/date-fns/esm/addMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */
function subMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      // eslint-disable-next-line no-console
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeModal: () => (/* binding */ closeModal),
/* harmony export */   createBtn: () => (/* binding */ createBtn),
/* harmony export */   invokeAction: () => (/* binding */ invokeAction),
/* harmony export */   menuIcon: () => (/* binding */ menuIcon),
/* harmony export */   modal: () => (/* binding */ modal),
/* harmony export */   openConfirmDialogue: () => (/* binding */ openConfirmDialogue),
/* harmony export */   openDialogue: () => (/* binding */ openDialogue),
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   renderData: () => (/* binding */ renderData),
/* harmony export */   swithTab: () => (/* binding */ swithTab),
/* harmony export */   tabs: () => (/* binding */ tabs)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isTomorrow/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/lightFormat/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var _pubSub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubSub.js */ "./src/modules/pubSub.js");



const homePage = document.getElementById("home-page"),
  menuIcon = document.getElementById("menu-icon"),
  tabs = document.querySelectorAll(".tabs"),
  createBtn = document.getElementById("newbtn"),
  projectsPage = document.getElementById("projects-page"),
  notesPage = document.getElementById("notes-page"),
  morePage = document.getElementById("more-page"),
  pages = [homePage, projectsPage, notesPage, morePage],
  modal = document.getElementById("modal"),
  modalTitle = document.getElementById("modal-title"),
  modalContent = document.getElementById("modal-content");

const modalForms = {
  "new-project": `<form data-action-type="new-project">
      <div class="field">
          <label for="project-title">Title</label>
          <input id="project-title" name="title" type="text" maxlength="40" placeholder="Enter project's title" required>
      </div>
      <button type="submit">Save</button>
    </form>`,
  "new-note": `<form data-action-type="new-note">
    <div class="field">
        <label for="note-title">Title</label>
        <input id="note-title" name="title" type="text" maxlength="40" placeholder="Enter note title" required>
    </div>
    <div class="field">
        <label for="note-content">Note</label>
        <textarea name="note" id="note-content" placeholder="Your note goes here"></textarea>
    </div>
    <button type="submit">Save</button>
    </form>`,
  "new-task": `<form data-action-type="new-task">
    <div class="field">
        <label for="task-title">Title</label>
        <input id="task-title" name="title" type="text" maxlength="35" placeholder="e.g: Sumbit feedback form" required>
    </div>
    <div class="field">
        <label for="task-description">Description</label>
        <textarea name="description" id="task-description" placeholder="Give a brief descripltion of the task"></textarea>
    </div>
    <div class="field">
        <label for="task-duedate">Due date</label>
        <input id="task-duedate" name="dueDate" type="date" required>
    </div>
    <div class="field">
        <label>Priority</label>
        <div id="radio-btns-cntr">
            <span>
                <input id="task-priority-h" name="priority" type="radio" value="high" required>
                <label for="task-priority-h">High</label>
            </span>
            <span>
                <input id="task-priority-m" name="priority" type="radio" value="medium" required>
                <label for="task-priority-m">Medium</label>
            </span>
            <span>
                <input id="task-priority-l" name="priority" type="radio" value="low" required>
                <label for="task-priority-l">Low</label>
            </span>
        </div>
    </div>
    <button type="submit">Save</button>
</form>`,
};

function swithTab(e) {
  // Do nothing if user clicks an active tab
  if (e.target.classList.contains("active")) return;

  // Remove the class, 'active-page' and 'active'
  pages.forEach((page) => {
    if (page.classList.contains("active-page")) {
      page.classList.remove("active-page");
    }
  });
  tabs.forEach((tab) => {
    if (tab.classList.contains("active")) {
      tab.classList.remove("active");
    }
  });

  // Add the class, 'active-page' & 'active'and change createBtn text
  e.target.classList.add("active");
  const target = e.target.getAttribute("data-target-value");
  switch (target) {
    case "home":
      homePage.classList.add("active-page");
      createBtn.textContent = "New Project";
      createBtn.setAttribute("data-dialogue", "project");
      break;
    case "projects":
      projectsPage.classList.add("active-page");
      createBtn.textContent = "New Project";
      createBtn.setAttribute("data-dialogue", "project");
      break;
    case "notes":
      notesPage.classList.add("active-page");
      createBtn.textContent = "New Note";
      createBtn.setAttribute("data-dialogue", "note");
      break;
    case "more":
      morePage.classList.add("active-page");
  }

  document.title = "TodoList - " + target[0].toUpperCase() + target.slice(1);
  toggleMenu();
}

function invokeAction(e, elem) {
  if (e.target !== e.currentTarget) {
    if (elem.id === "close-modal") {
      closeModal();
    } else if (elem.id === "reset-btn") {
      openConfirmDialogue({ action: "reset" });
    } else if (elem.id === "cancel-btn") {
      closeModal();
    } else if (elem.getAttribute("data-action-type") === "new-task") {
      const action = elem.getAttribute("data-action-type");
      const pindex = parseInt(elem.getAttribute("data-project"));
      openDialogue({ action, pindex });
    }
  } else if (elem === createBtn) {
    const action = `new-${createBtn.getAttribute("data-dialogue")}`;
    openDialogue({ action });
  } else if (elem === modal) {
    closeModal();
  }
  if (elem === menuIcon) {
    toggleMenu();
  }

  e.stopPropagation();
}

function openDialogue(dialogue) {
  modalContent.innerHTML = modalForms[dialogue.action] || "";
  modalTitle.textContent = dialogue.action.split("-").join(" ");

  if (dialogue.action === "new-task") {
    modalContent
      .querySelector("button[type='submit']")
      .setAttribute("data-project", dialogue.pindex);
  } else if (dialogue.action === "view-task") {
    modalContent.innerHTML = `<div id="details">
          <div class="field">
              <div>Title</div>
              <div></div>
          </div>
          <div class="field">
              <div>Description</div>
              <div></div>
          </div>
          <div class="field">
              <div>Due date</div>
              <div>${
                (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(new Date(dialogue.dueDate))
                  ? "Today"
                  : (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(dialogue.dueDate))
                  ? "Tomorrow"
                  : (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date(dialogue.dueDate).toISOString().slice(0, 10)), "dd/MM/yyyy")
              }</div>
          </div>
          <div class="field">
              <div>Priority</div>
              <div class="task-lbl-${dialogue.priority[0]}">${dialogue.priority}</div>
          </div>
      </div>`;
    modalContent.querySelector(
      ".field:first-child > div:last-child"
    ).textContent = dialogue.title;
    modalContent.querySelector(
      ".field:nth-child(2) > div:last-child"
    ).textContent = dialogue.description ? dialogue.description : "None";
  } else if (dialogue.action === "edit-project") {
    modalContent.innerHTML = `<form data-action-type="edit-project" data-project="${dialogue.index}">
        <div class="field">
            <label for="project-title">Title</label>
            <input id="project-title" name="title" type="text" maxlength="40" value="${dialogue.title}" required>
        </div>
        <button type="submit">Save</button>
      </form>`;
  } else if (dialogue.action === "edit-task") {
    modalContent.innerHTML = `<form data-action-type="edit-task" data-project="${dialogue.pindex}" data-task="${dialogue.tindex}">
          <div class="field">
              <label for="task-title">Title</label>
              <input id="task-title" name="title" type="text" maxlength="35" value="${dialogue.title}" required>
          </div>
          <div class="field">
              <label for="task-description">Description</label>
              <textarea name="description" id="task-description">${dialogue.description}</textarea>
          </div>
          <div class="field">
              <label for="task-duedate">Due date</label>
              <input id="task-duedate" name="dueDate" type="date" value="${dialogue.dueDate.toISOString().slice(0, 10)}" required>
          </div>
          <div class="field">
              <label>Priority</label>
              <div id="radio-btns-cntr">
                  <span>
                      <input id="task-priority-h" name="priority" type="radio" value="high" required>
                      <label for="task-priority-h">High</label>
                  </span>
                  <span>
                      <input id="task-priority-m" name="priority" type="radio" value="medium" required>
                      <label for="task-priority-m">Medium</label>
                  </span>
                  <span>
                      <input id="task-priority-l" name="priority" type="radio" value="low" required>
                      <label for="task-priority-l">Low</label>
                  </span>
              </div>
          </div>
          <button type="submit">Save</button>
      </form>`;
    modalContent.querySelector(`#task-priority-${dialogue.priority.toLowerCase()[0]}`).checked = true;
  } else if (dialogue.action === "edit-note") {
    modalContent.innerHTML = `<form data-action-type="edit-note" data-note="${dialogue.index}">
        <div class="field">
            <label for="note-title">Title</label>
            <input id="note-title" name="title" type="text" maxlength="40" value="${dialogue.title}" required>
        </div>
        <div class="field">
            <label for="note-content">Note</label>
            <textarea name="note" id="note-content">${dialogue.note}</textarea>
        </div>
        <button type="submit">Save</button>
      </form>`;
  }
  openModal();
}
function openConfirmDialogue(dialogue) {
  if (dialogue.action === "reset") {
    modalTitle.textContent = "Are you sure you want to reset?";
    modalContent.innerHTML = `<div id="confirm">
          <button id="delete-btn" type="button" data-action-type="reset-data">Reset</button>
          <button id="cancel-btn" type="button">Cancel</button>
      </div>`;
  } else if (dialogue.action.includes("delete")) {
    modalTitle.textContent = "Are you sure you want to delete?"
    modalContent.innerHTML = `<div id="confirm">
          <button id="delete-btn" data-confirm-delete data-action-type="${dialogue.action}" type="button">Delete</button>
          <button id="cancel-btn" type="button">Cancel</button>
      </div>`;
    const parent = modalContent.querySelector("#confirm");

    if (dialogue.action === "delete-task") {
      parent.setAttribute("data-project", dialogue.pindex);
      parent.setAttribute("data-task", dialogue.tindex);
    } else {
      parent.setAttribute(`data${dialogue.action.slice(6)}`, dialogue.index);
    }
  }

  openModal();
}

function openModal() {
  modal.classList.add("active");
}
function closeModal() {
  modalContent.innerHTML = "";
  modal.classList.remove("active");
}

function toggleMenu() {
  menuIcon.parentElement.toggleAttribute("data-menu-active");
}

function renderData(data) {
  const projects = data.projects,
    notes = data.notes,
    projectsContainer = projectsPage.querySelector(".projects-contr"),
    notesContainer = notesPage.querySelector("#notes-contr"),
    todaysTaskContr = homePage.querySelector(".projects-contr"),
    thisWeeksTasksContr = document
      .getElementById("this-week-contr")
      .querySelector(".projects-contr");

  projectsContainer.innerHTML = "";
  notesContainer.innerHTML = "";
  todaysTaskContr.innerHTML = "";
  thisWeeksTasksContr.innerHTML = "";

  for (let i = 0; i < projects.length; i++) {
    // Today's tasks
    if (projects[i].getTodaysTasks()[0]) {
      const elem = document.createElement("div"),
        tasks = projects[i].sortedTasks;
      elem.innerHTML = `<div class="project-name-contr" data-project="${i}">
                            <span class="project-name"></span><svg data-action-type="delete-project" class="actions" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Delete</title><path d="M14.12,10.47L12,12.59L9.87,10.47L8.46,11.88L10.59,14L8.47,16.12L9.88,17.53L12,15.41L14.12,17.53L15.53,16.12L13.41,14L15.53,11.88L14.12,10.47M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9Z" /></svg>
                        </div>
                        <ul></ul>`;
      elem.querySelector(".project-name").textContent = projects[i].title;
      for (let j = 0; j < tasks.length; j++) {
        if ((0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(tasks[j].dueDate)) {
          const listElem = document.createElement("li");
          listElem.innerHTML = `<span class="flex-list-item">
                                  <span class="flex-list-elem"><span class="task-name"></span><span class="task-lbl-${tasks[j].priority[0]}">${tasks[j].priority}</span></span>
                                  <span class="flex-list-elem" data-project="${i}" data-task="${j}">
                                    <svg data-action-type="view-task" class="actions" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>View info</title><path d="M13 9H11V7H13V9M13 17H11V11H13V17M5 3H19C20.1 3 21 3.89 21 5V19C21 19.53 20.79 20.04 20.41 20.41C20.04 20.79 19.53 21 19 21H5C4.47 21 3.96 20.79 3.59 20.41C3.21 20.04 3 19.53 3 19V5C3 3.89 3.89 3 5 3M19 19V5H5V19H19Z" /></svg>
                                    <svg data-action-type="edit-task" class="actions" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Edit</title><path d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z" /></svg>
                                    <svg data-action-type="delete-task" class="actions" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Delete</title><path d="M14.12,10.47L12,12.59L9.87,10.47L8.46,11.88L10.59,14L8.47,16.12L9.88,17.53L12,15.41L14.12,17.53L15.53,16.12L13.41,14L15.53,11.88L14.12,10.47M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9Z" /></svg>
                                  </span>
                                </span>`;
          listElem.querySelector(".task-name").textContent = tasks[j].title;
          elem.querySelector("ul").appendChild(listElem);
        }
      }
      todaysTaskContr.appendChild(elem);
    }

    // This week's tasks
    if (projects[i].getThisWeeksTasks()[0]) {
      const elem = document.createElement("li");
      elem.className = "flex-list-item";
      elem.setAttribute("data-project", i.toString());

      elem.innerHTML = `<span class="project-name"></span>
        <svg data-action-type="delete-project" class="actions" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Delete</title><path d="M14.12,10.47L12,12.59L9.87,10.47L8.46,11.88L10.59,14L8.47,16.12L9.88,17.53L12,15.41L14.12,17.53L15.53,16.12L13.41,14L15.53,11.88L14.12,10.47M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9Z" /></svg>`;

      elem.querySelector(".project-name").textContent = projects[i].title;
      thisWeeksTasksContr.appendChild(elem);
    }

    // Projects page
    const projectNode = document.createElement("div");
    const tasks = projects[i].sortedTasks;
    projectNode.innerHTML = `<div class="project-name-contr">
        <span class="project-name"></span>
        <span class="actns-contr" data-project="${i}">
            <svg data-action-type="edit-project" class="actions" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>Edit</title>
              <path d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z" />
            </svg>
            <svg data-action-type="delete-project" class="actions" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>Delete</title>
              <path d="M14.12,10.47L12,12.59L9.87,10.47L8.46,11.88L10.59,14L8.47,16.12L9.88,17.53L12,15.41L14.12,17.53L15.53,16.12L13.41,14L15.53,11.88L14.12,10.47M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9Z" />
            </svg>
        </span>
    </div>
    <ul></ul>
    <button data-action-type="new-task" data-project="${i}">Add Task</button>`;
    projectNode.querySelector(".project-name").textContent = projects[i].title;

    for (let j = 0; j < tasks.length; j++) {
      const taskNode = document.createElement("li");
      taskNode.className = "flex-list-item"
      taskNode.innerHTML = `<span class="flex-list-elem"><span class="task-name"></span><span class="task-lbl-${tasks[j].priority[0]}">${tasks[j].priority}</span></span>
        <span data-project="${i}" data-task="${j}" class="flex-list-elem">
            <svg data-action-type="view-task" class="actions" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>View info</title>
              <path d="M13 9H11V7H13V9M13 17H11V11H13V17M5 3H19C20.1 3 21 3.89 21 5V19C21 19.53 20.79 20.04 20.41 20.41C20.04 20.79 19.53 21 19 21H5C4.47 21 3.96 20.79 3.59 20.41C3.21 20.04 3 19.53 3 19V5C3 3.89 3.89 3 5 3M19 19V5H5V19H19Z" />
            </svg>
            <svg data-action-type="edit-task" class="actions" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>Edit</title>
              <path d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z" />
            </svg>
            <svg data-action-type="delete-task" class="actions" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>Delete</title>
              <path d="M14.12,10.47L12,12.59L9.87,10.47L8.46,11.88L10.59,14L8.47,16.12L9.88,17.53L12,15.41L14.12,17.53L15.53,16.12L13.41,14L15.53,11.88L14.12,10.47M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9Z" />
            </svg>
        </span>`;
      taskNode.querySelector(".task-name").textContent = tasks[j].title;
      projectNode.querySelector("ul").appendChild(taskNode);
    }

    // Empty project
    if (!projectNode.querySelector("ul").innerHTML) projectNode.querySelector("ul").innerHTML = "<li class='empty-content'>This project is empty, click 'Add Task' to add a new task</li>";
    projectsContainer.appendChild(projectNode);
  }
  // If no tasks for today and this week
  if (!todaysTaskContr.innerHTML) todaysTaskContr.innerHTML = "<div class='empty-content'>No tasks for today!</div>";
  if (!thisWeeksTasksContr.innerHTML) thisWeeksTasksContr.innerHTML = "<div class='empty-content'>You are good to go for this week!</div>";

  for (let i = 0; i < notes.length; i++) {
    const node = document.createElement("div");

    node.innerHTML = `<div class="note-title-contr">
                        <span class="note-title"></span>
                        <span class="actns-contr" data-note="${i}">
                            <svg data-action-type="edit-note" class="actions" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <title>Edit</title>
                                <path d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z" />
                            </svg>
                            <svg data-action-type="delete-note" class="actions" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <title>Delete</title>
                                <path d="M14.12,10.47L12,12.59L9.87,10.47L8.46,11.88L10.59,14L8.47,16.12L9.88,17.53L12,15.41L14.12,17.53L15.53,16.12L13.41,14L15.53,11.88L14.12,10.47M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9Z" />
                            </svg>
                        </span>
                    </div>
                    <div class="notecontent"></div>`;
    node.querySelector(".note-title").textContent = notes[i].title;
    node.querySelector(".notecontent").textContent = notes[i].note;

    notesContainer.appendChild(node);
  }
}




/***/ }),

/***/ "./src/modules/projectsTasks.js":
/*!**************************************!*\
  !*** ./src/modules/projectsTasks.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheckList: () => (/* binding */ CheckList),
/* harmony export */   Note: () => (/* binding */ Note),
/* harmony export */   Project: () => (/* binding */ Project),
/* harmony export */   Task: () => (/* binding */ Task)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isThisWeek/index.js");


class Project {
  constructor(title, tasks) {
    this.title = title;
    this.tasks = tasks;
  }
  get sortedTasks() {
    return this.tasks.sort((a, b) => a.dueDate - b.dueDate);
  }
  addTask(task) {
    this.tasks.push(task);
  }
  removeTask(index) {
    this.tasks.splice(index, 1);
  }
  getTodaysTasks() {
    const todaysTask = [];
    this.tasks.forEach(task => {
      if ((0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(task.dueDate)) todaysTask.push(task);
    });
    return todaysTask;
  }
  getThisWeeksTasks() {
    const thisWeeksTask = [];
    this.tasks.forEach(task => {
      if ((0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(task.dueDate)) {
        thisWeeksTask.push(task);
      }
    });
    return thisWeeksTask;
  }
}

class Task {
  constructor(title, description, dueDate, priority, pindex) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.pindex = (pindex !== undefined)? pindex : 0;
  }
}

class Note {
  constructor(title, note) {
    this.title = title;
    this.note = note;
  }
}

class CheckList {
  constructor(listTxt) {
    this.listTxt = listTxt;
  }
}



/***/ }),

/***/ "./src/modules/pubSub.js":
/*!*******************************!*\
  !*** ./src/modules/pubSub.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const pubSub = (function () {
    let events = {};
  
    function subscribe(event, fn) {
      events[event] ? events[event].push(fn) : (events[event] = [fn]);
    }
    function unSubscribe(event, fn) {
      if (events[event]) {
        events[event] = events[event].filter((func) => func !== fn);
      }
    }
    function publish(event, data) {
      if (events[event]) events[event].forEach((fn) => fn(data));
    }
  
    return { subscribe, unSubscribe, publish };
  })();

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pubSub);

/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _projectsTasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectsTasks.js */ "./src/modules/projectsTasks.js");
/* harmony import */ var _pubSub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pubSub.js */ "./src/modules/pubSub.js");



const Storage = (function () {
  let savedData = JSON.parse(localStorage.getItem("savedData")) || {
    projects: [
      {
        title: "Inbox",
        tasks: [
          {
            title: "Try out this application",
            description: "Read 'Welcome to TodoList' in the notes page",
            dueDate: new Date().toISOString(),
            priority: "medium",
          },
        ],
      },
    ],
    notes: [
      {
        title: "Welcome to TodoList",
        note: "On this page, you can write notes.\nThe homepage shows projects and tasks due for today and projects due for the week, you can view and manipulate projects in projects page.\nIn 'More' you can view the 'About' section and 'Settings'.",
      },
    ],
  };
  
  _pubSub_js__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe("dataChanged", saveChanges);
  _pubSub_js__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe("resetDataActionConfirmed", clearData);

  if (!localStorage.getItem("hasVisitedSiteBefore")) {
    localStorage.setItem("hasVisitedSiteBefore", "true");

    // Welcome user
    console.log("Welcome!");
  }

  function saveChanges(data) {
    // Reset arrays
    savedData.projects = [];
    savedData.notes = [];

    // Save projects
    for (let i = 0; i < data.projects.length; i++) {
      const project = data.projects[i];
      savedData.projects.push({
        title: project.title,
        tasks: [],
      });
      // Save tasks to project
      for (let j = 0; j < project.tasks.length; j++) {
        const task = project.tasks[j];
        savedData.projects[i].tasks.push({
          title: task.title,
          description: task.description,
          dueDate: new Date(task.dueDate).toISOString(),
          priority: task.priority,
        });
      }
    }

    // Save notes
    for (let i = 0; i < data.notes.length; i++) {
      const note = data.notes[i];
      savedData.notes.push({
        title: note.title,
        note: note.note,
      });
    }

    localStorage.setItem("savedData", JSON.stringify(savedData));
  }
  
  function clearData() {
    localStorage.clear();
    location.reload();
  }

  function getData() {
    let projects = [],
      notes = [];

    // Projects & Tasks
    for (let i = 0; i < savedData.projects.length; i++) {
      const project = new _projectsTasks_js__WEBPACK_IMPORTED_MODULE_0__.Project(savedData.projects[i].title, []);
      for (let j = 0; j < savedData.projects[i].tasks.length; j++) {
        project.tasks[j] = new _projectsTasks_js__WEBPACK_IMPORTED_MODULE_0__.Task(
          savedData.projects[i].tasks[j].title,
          savedData.projects[i].tasks[j].description,
          new Date(savedData.projects[i].tasks[j].dueDate),
          savedData.projects[i].tasks[j].priority
        );
      }

      projects.push(project);
    }
    // Notes
    for (let i = 0; i < savedData.notes.length; i++) {
      notes.push(new _projectsTasks_js__WEBPACK_IMPORTED_MODULE_0__.Note(savedData.notes[i].title, savedData.notes[i].note));
    }

    return { projects, notes };
  }

  return { getData };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Storage);


/***/ }),

/***/ "./src/fonts/WorkSans-VariableFont_wght.ttf":
/*!**************************************************!*\
  !*** ./src/fonts/WorkSans-VariableFont_wght.ttf ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a334cdd18c435a867b49.ttf";

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_pubSub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/pubSub.js */ "./src/modules/pubSub.js");
/* harmony import */ var _modules_projectsTasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/projectsTasks.js */ "./src/modules/projectsTasks.js");
/* harmony import */ var _modules_display_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/display.js */ "./src/modules/display.js");
/* harmony import */ var _modules_storage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/storage.js */ "./src/modules/storage.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");






(function() {
  _init();
  
  function _init() {
    addEventsToStaticElements();
  }

  function addEventsToStaticElements() {
    _modules_display_js__WEBPACK_IMPORTED_MODULE_2__.tabs.forEach((elem) => elem.addEventListener("click", _modules_display_js__WEBPACK_IMPORTED_MODULE_2__.swithTab));
    _modules_display_js__WEBPACK_IMPORTED_MODULE_2__.menuIcon.addEventListener("click", invokeActions);
    _modules_display_js__WEBPACK_IMPORTED_MODULE_2__.createBtn.addEventListener('click', invokeActions);
    _modules_display_js__WEBPACK_IMPORTED_MODULE_2__.modal.addEventListener('click', invokeActions);
    _modules_display_js__WEBPACK_IMPORTED_MODULE_2__.pages.forEach(page => {
      page.addEventListener('click', invokeActions);
    });
  }

  function invokeActions(e) {
    // Move up to <svg> if target element is <path>
    const elem =
      e.target.tagName.toLowerCase() === "path"
        ? e.target.parentElement
        : e.target;
    (0,_modules_display_js__WEBPACK_IMPORTED_MODULE_2__.invokeAction)(e, elem);
    invokeDataAction(e, elem);
  }
  function invokeDataAction(e, elem) {
    if (elem.getAttribute("type") === "submit") {
      e.preventDefault();

      const form = elem.parentElement;
      const data = Object.fromEntries(new FormData(form));
      let isValid = Object.values(data).every((entry) => entry);

      if (isValid) {
        const action = form.getAttribute("data-action-type");
        let entry;
        if (action === "new-project") {
          entry = new _modules_projectsTasks_js__WEBPACK_IMPORTED_MODULE_1__.Project(data.title, []);
        } else if (action === "new-note") {
          entry = new _modules_projectsTasks_js__WEBPACK_IMPORTED_MODULE_1__.Note(data.title, data.note);
        } else if (action === "new-task") {
          entry = new _modules_projectsTasks_js__WEBPACK_IMPORTED_MODULE_1__.Task(
            data.title,
            data.description,
            new Date(data.dueDate),
            data.priority ? data.priority : "medium",
            parseInt(elem.getAttribute("data-project"))
          );
        } else if (action === "edit-project") {
          entry = {
            action,
            title: data.title,
            index: parseInt(form.getAttribute("data-project")),
          };
        } else if (action === "edit-task") {
          entry = {
            action,
            pindex: parseInt(form.getAttribute("data-project")),
            tindex: parseInt(form.getAttribute("data-task")),
            task: new _modules_projectsTasks_js__WEBPACK_IMPORTED_MODULE_1__.Task(
              data.title,
              data.description,
              new Date(data.dueDate),
              data.priority ? data.priority : "medium",
              parseInt(form.getAttribute("data-project")),
            ),
          };
        } else if (action === "edit-note") {
          entry = {
            action,
            index: parseInt(form.getAttribute("data-note")),
            note: new _modules_projectsTasks_js__WEBPACK_IMPORTED_MODULE_1__.Note(data.title, data.note),
          };
        }

        (0,_modules_display_js__WEBPACK_IMPORTED_MODULE_2__.closeModal)();
        _modules_pubSub_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish("formSubmitted", entry);
      }
    } else if (elem.getAttribute("data-action-type")) {
      // Data read manipulation actions
      const action = elem.getAttribute("data-action-type");

      if (action.includes("delete") && elem.hasAttribute("data-confirm-delete")) {
        // Delete action confirmed
        if (action === "delete-task") {
          const pindex = parseInt(elem.parentElement.getAttribute("data-project"));
          const tindex = parseInt(elem.parentElement.getAttribute("data-task"));
          _modules_pubSub_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish("deleteEntity", { action, pindex, tindex });
          (0,_modules_display_js__WEBPACK_IMPORTED_MODULE_2__.closeModal)();
        } else {
          const index =
            parseInt(elem.parentElement.getAttribute("data-project")) ||
            parseInt(elem.parentElement.getAttribute("data-note"));
          _modules_pubSub_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish("deleteEntity", { action, index });
          (0,_modules_display_js__WEBPACK_IMPORTED_MODULE_2__.closeModal)();
        }
      } else if (action.includes("delete")) {
        // Open confirm dialogue for delete icons
        if (action === "delete-task") {
          const pindex = parseInt(elem.parentElement.getAttribute("data-project"));
          const tindex = parseInt(elem.parentElement.getAttribute("data-task"));
          (0,_modules_display_js__WEBPACK_IMPORTED_MODULE_2__.openConfirmDialogue)({ action, pindex, tindex });
        } else {
          const index =
            parseInt(elem.parentElement.getAttribute("data-project")) ||
            parseInt(elem.parentElement.getAttribute("data-note"));
            (0,_modules_display_js__WEBPACK_IMPORTED_MODULE_2__.openConfirmDialogue)({ action, index });
        }
      } else if (action.includes("view")) {
        if (action === "view-task") {
          // Open view task modal
          const task = projectsHandler.getTask(
            parseInt(elem.parentElement.getAttribute("data-project")),
            parseInt(elem.parentElement.getAttribute("data-task"))
          );
          (0,_modules_display_js__WEBPACK_IMPORTED_MODULE_2__.openDialogue)({
            action,
            title: task.title,
            description: task.description,
            dueDate: task.dueDate,
            priority: task.priority,
          });
        }
      } else if (action.includes("edit")) {
        if (action === "edit-project") {
          // Open edit project modal
          const index = parseInt(
            elem.parentElement.getAttribute("data-project")
          );
          const project = projectsHandler.getProject(index);
          (0,_modules_display_js__WEBPACK_IMPORTED_MODULE_2__.openDialogue)({
            action,
            index,
            title: project.title,
          });
        } else if (action === "edit-task") {
          // Open edit task modal
          const pindex = parseInt(
              elem.parentElement.getAttribute("data-project")
            ),
            tindex = parseInt(elem.parentElement.getAttribute("data-task")),
            task = projectsHandler.getTask(pindex, tindex);
          (0,_modules_display_js__WEBPACK_IMPORTED_MODULE_2__.openDialogue)({
            action,
            pindex,
            tindex,
            title: task.title,
            description: task.description,
            dueDate: task.dueDate,
            priority: task.priority,
          });
        } else if (action === "edit-note") {
          const index = parseInt(elem.parentElement.getAttribute("data-note"));
          (0,_modules_display_js__WEBPACK_IMPORTED_MODULE_2__.openDialogue)({
            action,
            index,
            title: projectsHandler.getNote(index).title,
            note: projectsHandler.getNote(index).note,
          })
        }
      } else if (action === "reset-data") {
        _modules_pubSub_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish("resetDataActionConfirmed");
      }
    }
  }

  _modules_pubSub_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("dataChanged", _modules_display_js__WEBPACK_IMPORTED_MODULE_2__.renderData);
})()

const projectsHandler = (function () {
  let projects = [],
    notes = [];

  _init();

  function _init() {
    projects = _modules_storage_js__WEBPACK_IMPORTED_MODULE_3__["default"].getData().projects;
    notes = _modules_storage_js__WEBPACK_IMPORTED_MODULE_3__["default"].getData().notes;

    _modules_pubSub_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('dataChanged', { projects, notes });
  }

  function addProject(project) {
    projects.push(project);
    _modules_pubSub_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('dataChanged', { projects, notes });
  }
  function addTaskToProject(index, task) {
    projects[index].addTask(task);
    _modules_pubSub_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('dataChanged', { projects, notes });
  }
  function addNote(note) {
    notes.push(note);
    _modules_pubSub_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('dataChanged', { projects, notes });
  }
  function removeProject(index) {
    projects.splice(index, 1);
    _modules_pubSub_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('dataChanged', { projects, notes });
  }
  function removeTaskFromProject(pindex, tindex) {
    projects[pindex].removeTask(tindex);
    _modules_pubSub_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('dataChanged', { projects, notes });
  }
  function removeNote(index) {
    notes.splice(index, 1);
    _modules_pubSub_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('dataChanged', { projects, notes });
  }
  function getTask(pindex, tindex) {
    return projects[pindex].tasks[tindex];
  }
  function getProject(index) {
    return projects[index];
  }
  function getNote(index) {
    return notes[index];
  }
  function addEntry(entry) {
    if (entry instanceof _modules_projectsTasks_js__WEBPACK_IMPORTED_MODULE_1__.Project) {
      addProject(entry);
    } else if (entry instanceof _modules_projectsTasks_js__WEBPACK_IMPORTED_MODULE_1__.Task) {
      addTaskToProject(entry.pindex, entry);
    } else if (entry instanceof _modules_projectsTasks_js__WEBPACK_IMPORTED_MODULE_1__.Note) {
      addNote(entry);
    }
  }
  function updateEntry(data) {
    if (data.action === "edit-project") {
      projects[data.index].title = data.title;
    } else if (data.action === "edit-task") {
      projects[data.pindex].tasks[data.tindex] = data.task;
    } else if (data.action === "edit-note") {
      notes[data.index] = data.note;
    }
    _modules_pubSub_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('dataChanged', { projects, notes });
  }
  function deleteObj(entity) {
    if (entity.action === "delete-task") {
      removeTaskFromProject(entity.pindex, entity.tindex);
    } else if (entity.action === "delete-project") {
      removeProject(entity.index);
    } else if (entity.action === "delete-note") {
      removeNote(entity.index);
    }
  }

  _modules_pubSub_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("formSubmitted", addEntry);
  _modules_pubSub_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("formSubmitted", updateEntry);
  _modules_pubSub_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("deleteEntity", deleteObj);

  return { getTask, getProject, getNote };
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMseUpBQXlEO0FBQ3JHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxxRkFBcUYsS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sVUFBVSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxPQUFPLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLFVBQVUsS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxVQUFVLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxVQUFVLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxN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QUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPOzs7Ozs7Ozs7Ozs7Ozs7O0FDdExpRDtBQUNDO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdB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QUFDQTtBQUNBLEVBQUUsMERBQU07QUFDUixFQUFFLDBEQUFNO0FBQ1IsRUFBRSwwREFBTTtBQUNSO0FBQ0EsV0FBVztBQUNYLENBQUMsSSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvbGlnaHRGb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2FkZERheXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGRNaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9jb25zdGFudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUaGlzV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVG9kYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RvbW9ycm93L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNWYWxpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xpZ2h0Rm9ybWF0L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2VJU08vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZldlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdWJNaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0c1Rhc2tzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3B1YlN1Yi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvV29ya1NhbnMtVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBHZW5lcmFsICovXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdXb3JrU2Fucyc7XHJcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcbn1cclxuXHJcbmh0bWwge1xyXG4gICAgLS1sYXJnZXBhZDogMTVweDtcclxuICAgIC0tbWVkaXVtcGFkOiA4cHg7XHJcbiAgICAtLXNtYWxscGFkOiAzcHg7XHJcbiAgICAtLXNtYWxscmFkOiAzcHg7XHJcbiAgICAtLW1lZGl1bXJhZDogOHB4O1xyXG4gICAgLS1sYXJnZXJhZDogMTVweDtcclxuICAgIC0tc2hhZG93OiAwcHggMXB4IDVweCAwcHggIzAwMDAwMDgwO1xyXG4gICAgLS1iZ2Rhcms6IHJveWFsYmx1ZTtcclxuICAgIC0tYmdsaWdodDogd2hpdGU7XHJcbiAgICAtLWZnbGlnaHQ6IHdoaXRlO1xyXG4gICAgLS1mZ2Rhcms6IGJsYWNrO1xyXG4gICAgLS1kYW5nZXJiZ2NvbG9yOiAjYzU0OTQ5O1xyXG4gICAgLS1wcnR5LWhpZ2g6ICNmZmNkYzE7XHJcbiAgICAtLXBydHktbWVkaXVtOiAjZmZmMTlmO1xyXG4gICAgLS1wcnR5LWxvdzogI2NiZmZjZTtcclxufVxyXG4qIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogJ1dvcmtTYW5zJywgJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZTogYXV0byBtaW5tYXgoMTIwdmgsIDI1MCUpIC8gNzB2dyAxZnI7XHJcbiAgICBnYXA6IDFlbTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxufVxyXG5oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiB2YXIoLS1sYXJnZXBhZCkgMDtcclxufVxyXG5oZWFkZXIgaDEge1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbiNtZW51LWljb24ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5idXR0b24ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZzogY2FsYyh2YXIoLS1tZWRpdW1wYWQpICsgM3B4KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLW1lZGl1bXJhZCk7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogdmFyKC0tZmdsaWdodCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ2RhcmspO1xyXG59XHJcbmJ1dHRvbjphY3RpdmUge1xyXG4gICAgY29sb3I6IHZhcigtLWJnZGFyayk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG4jbmV3YnRuIHtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1sYXJnZXJhZCk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZ2RhcmspO1xyXG4gICAgY29sb3I6IHZhcigtLWZnbGlnaHQpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xyXG59XHJcbiNuZXdidG46YWN0aXZlIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuI21haW4gPiBkaXY6bm90KC5hY3RpdmUtcGFnZSkge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4jbWVudS1pY29uIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuI3NpZGViYXIge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmdkYXJrKTtcclxuICAgIGNvbG9yOiB2YXIoLS1mZ2xpZ2h0KTtcclxuICAgIGdyaWQtcm93OiAxIC8gLTE7XHJcbiAgICBncmlkLWNvbHVtbjogMiAvIC0xO1xyXG59XHJcbiNzaWRlYmFyIHVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICBtYXJnaW46IHZhcigtLWxhcmdlcGFkKTtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMTZweDtcclxufVxyXG4udGFicyB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnRhYnMuYWN0aXZlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4vKiBob21lICovXHJcbiNob21lLXBhZ2UgaDI6Zmlyc3QtY2hpbGQge1xyXG4gICAgY29sb3I6IHZhcigtLWJnZGFyayk7XHJcbn1cclxuI2hvbWUtcGFnZSB1bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDVweDtcclxufVxyXG4uZW1wdHktY29udGVudCB7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLWxhcmdlcGFkKTtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbn1cclxuLnByb2plY3QtbmFtZSB7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLnByb2plY3RzLWNvbnRyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI4MHB4LCAxZnIpKTtcclxuICAgIGdhcDogOHB4O1xyXG59XHJcbi5wcm9qZWN0cy1jb250ciA+IGRpdjpub3QoLmVtcHR5LWNvbnRlbnQpIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLW1lZGl1bXJhZCk7XHJcbiAgICBwYWRkaW5nOiB2YXIoLS1tZWRpdW1wYWQpO1xyXG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XHJcbn1cclxuLnByb2plY3QtbmFtZS1jb250ciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi5mbGV4LWxpc3QtaXRlbSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IHZhcigtLW1lZGl1bXBhZCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1tZWRpdW1yYWQpO1xyXG59XHJcbi5wcm9qZWN0cy1jb250ciBsaTpub3QoOmZpcnN0LWNoaWxkKSB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQ7XHJcbn1cclxuLmZsZXgtbGlzdC1lbGVtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDVweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuI3RoaXMtd2Vlay1jb250ciAuZmxleC1saXN0LWl0ZW0ge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcclxufVxyXG4udGFzay1uYW1lIHtcclxuICAgIG1heC13aWR0aDogMTEwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcbi50YXNrLWxibC1sLFxyXG4udGFzay1sYmwtbSxcclxuLnRhc2stbGJsLWgge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBwYWRkaW5nOiB2YXIoLS1zbWFsbHBhZCk7XHJcbiAgICBjb2xvcjogdmFyKC0tZmdkYXJrKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXNtYWxscmFkKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG59XHJcbnN2Zy5hY3Rpb25zIHtcclxuICAgIGhlaWdodDogMS41cmVtO1xyXG4gICAgd2lkdGg6IDEuNXJlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4jdGhpcy13ZWVrLWNvbnRyIHVsIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIyMHB4LCAxZnIpKTtcclxuICAgIGdhcDogOHB4O1xyXG59XHJcblxyXG4vKiBwcm9qZWN0cyAqL1xyXG4jcHJvamVjdHMtcGFnZSB7XHJcbiAgICBtYXJnaW46IDEuMnJlbSAwO1xyXG59XHJcbiNwcm9qZWN0cy1wYWdlIHVsIHtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuI3Byb2plY3RzLXBhZ2UgLmZsZXgtbGlzdC1pdGVtIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbn1cclxuXHJcbi8qIG5vdGVzICovXHJcbiNub3Rlcy1jb250ciB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ2FwOiA4cHg7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIyMHB4LCAxZnIpKTtcclxuICAgIG1hcmdpbjogMS41cmVtIDA7XHJcbn1cclxuI25vdGVzLWNvbnRyID4gZGl2IHtcclxuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XHJcbiAgICBwYWRkaW5nOiB2YXIoLS1tZWRpdW1wYWQpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tbWVkaXVtcmFkKTtcclxufVxyXG4ubm90ZS10aXRsZS1jb250ciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4ubm90ZS10aXRsZSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ubm90ZWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogdmFyKC0tbWVkaXVtcGFkKTtcclxuICAgIG1hcmdpbjogMXJlbSAwO1xyXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxufVxyXG5cclxuLyogQWJvdXQgJiBTZXR0aW5ncyAoTW9yZSkgcGFnZSAqL1xyXG4jbW9yZS1wYWdlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG59XHJcbiNtb3JlLXBhZ2UgaDIge1xyXG4gICAgY29sb3I6IHZhcigtLWJnZGFyayk7XHJcbn1cclxuI21vcmUtcGFnZSBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiB2YXIoLS1iZ2RhcmspO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4jcmVzZXQtYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhbmdlcmJnY29sb3IpO1xyXG59XHJcbiNyZXNldC1idG46YWN0aXZlIHtcclxuICAgIGNvbG9yOiB2YXIoLS1kYW5nZXJiZ2NvbG9yKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4vKiBtb2RhbCAqL1xyXG4jbW9kYWwuYWN0aXZlIHtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAzMDtcclxuICAgIHotaW5kZXg6IDEwO1xyXG59XHJcbiNtb2RhbC1ib3gge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAzcHggIzAwMDAwMDIwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdsaWdodCk7XHJcbiAgICBwYWRkaW5nOiB2YXIoLS1sYXJnZXBhZCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1tZWRpdW1yYWQpO1xyXG4gICAgZmxleDogMSAwIDI4MHB4O1xyXG4gICAgbWFyZ2luOiAwIDM1JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG59XHJcbiNtb2RhbC1ib3ggPiBkaXY6Zmlyc3QtY2hpbGQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4jbW9kYWwtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xyXG59XHJcbiNtb2RhbC10aXRsZTo6Zmlyc3QtbGV0dGVyIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuI2Nsb3NlLW1vZGFsIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4jbW9kYWwtY29udGVudCBmb3JtLFxyXG4jbW9kYWwtY29udGVudCA+IGRpdiB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4jbW9kYWwtY29udGVudCAuZmllbGQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDAuMXJlbTtcclxufVxyXG4jbW9kYWwtY29udGVudCBpbnB1dCxcclxuI21vZGFsLWNvbnRlbnQgdGV4dGFyZWEge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdXb3JrU2Fucyc7XHJcbiAgICBwYWRkaW5nOiB2YXIoLS1zbWFsbHBhZCkgdmFyKC0tbWVkaXVtcGFkKTtcclxuICAgIG1hcmdpbjogMCAwLjJyZW07XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XHJcbn1cclxuI21vZGFsLWNvbnRlbnQgdGV4dGFyZWEge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1zbWFsbHJhZCk7XHJcbn1cclxuI21vZGFsLWNvbnRlbnQgaW5wdXQ6YWN0aXZlLFxyXG4jbW9kYWwtY29udGVudCB0ZXh0YXJlYTphY3RpdmUsXHJcbiNtb2RhbC1jb250ZW50IGlucHV0OmZvY3VzLFxyXG4jbW9kYWwtY29udGVudCB0ZXh0YXJlYTpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcbiNtb2RhbC1jb250ZW50IGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbiNtb2RhbC1jb250ZW50IGxhYmVsW2Zvcnw9XCJ0YXNrLXByaW9yaXR5XCJdIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IHgtc21hbGw7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgcGFkZGluZzogdmFyKC0tc21hbGxwYWQpO1xyXG4gICAgY29sb3I6IHZhcigtLWZnZGFyayk7XHJcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1zbWFsbHJhZCk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxufVxyXG4udGFzay1sYmwtaCxcclxuI21vZGFsLWNvbnRlbnQgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgfiBsYWJlbFtmb3I9XCJ0YXNrLXByaW9yaXR5LWhcIl0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJ0eS1oaWdoKTtcclxufVxyXG4udGFzay1sYmwtbSxcclxuI21vZGFsLWNvbnRlbnQgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgfiBsYWJlbFtmb3I9XCJ0YXNrLXByaW9yaXR5LW1cIl0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJ0eS1tZWRpdW0pO1xyXG59XHJcbi50YXNrLWxibC1sLFxyXG4jbW9kYWwtY29udGVudCBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCB+IGxhYmVsW2Zvcj1cInRhc2stcHJpb3JpdHktbFwiXSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcnR5LWxvdyk7XHJcbn1cclxuI3JhZGlvLWJ0bnMtY250ciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAwLjVyZW07XHJcbn1cclxuI2RldGFpbHMgLmZpZWxkID4gZGl2OmZpcnN0LWNoaWxkIHtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbn1cclxuI2RldGFpbHMgLmZpZWxkID4gZGl2Omxhc3QtY2hpbGQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4jZGV0YWlscyAudGFzay1sYmwtaCxcclxuI2RldGFpbHMgLnRhc2stbGJsLWwsXHJcbiNkZXRhaWxzIC50YXNrLWxibC1tIHtcclxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbn1cclxuZGl2I2NvbmZpcm0ge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICAgIGdhcDogMXJlbTtcclxufVxyXG4jZGVsZXRlLWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYW5nZXJiZ2NvbG9yKTtcclxufVxyXG4jZGVsZXRlLWJ0bjphY3RpdmUge1xyXG4gICAgY29sb3I6IHZhcigtLWRhbmdlcmJnY29sb3IpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi8qIE1lZGlhIHF1ZXJ5ICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2ODBweCkge1xyXG4gICAgYm9keSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIG1hcmdpbjogMXJlbTtcclxuICAgICAgICBnYXA6IDJyZW07XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICAgICNtZW51LWljb24ge1xyXG4gICAgICAgIGRpc3BsYXk6IHVuc2V0O1xyXG4gICAgfVxyXG4gICAgaGVhZGVyW2RhdGEtbWVudS1hY3RpdmVdICNtZW51LWljb24ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnZGFyayk7XHJcbiAgICAgICAgZmlsbDogdmFyKC0tZmdsaWdodCk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIHBhZGRpbmc6IHZhcigtLXNtYWxscGFkKTtcclxuICAgIH1cclxuICAgIC5wcm9qZWN0cy1jb250ciB7XHJcbiAgICAgICAgZ2FwOiAxcmVtO1xyXG4gICAgfVxyXG4gICAgI3NpZGViYXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICBoZWFkZXJbZGF0YS1tZW51LWFjdGl2ZV0gfiAjc2lkZWJhciB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBib3gtc2hhZG93OiAwIC0xcHggNXB4IDBweCAjMDAwMDAwODA7XHJcbiAgICB9XHJcbiAgICAjc2lkZWJhciA+IHVsIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICAgICAgbWFyZ2luOiAxLjVyZW0gMDtcclxuICAgIH1cclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxZQUFZO0FBQ1o7SUFDSSx1QkFBdUI7SUFDdkIsK0RBQXFFO0FBQ3pFOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsbUNBQW1DO0lBQ25DLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksZ0RBQWdEO0lBQ2hELGFBQWE7SUFDYixrREFBa0Q7SUFDbEQsUUFBUTtJQUNSLFNBQVM7SUFDVCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksU0FBUztBQUNiO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YscUNBQXFDO0lBQ3JDLCtCQUErQjtJQUMvQixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLCtCQUErQjtBQUNuQztBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNo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QUNQLFFBQVE7UUFDUixhQUFhO1FBQ2IsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtRQUNuQixvQ0FBb0M7SUFDeEM7SUFDQTtRQUNJLG1CQUFtQjtRQUNuQixnQkFBZ0I7UUFDaEIsZ0JBQWdCO0lBQ3BCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogR2VuZXJhbCAqL1xcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ1dvcmtTYW5zJztcXHJcXG4gICAgc3JjOiB1cmwoJy4vZm9udHMvV29ya1NhbnMtVmFyaWFibGVGb250X3dnaHQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gICAgLS1sYXJnZXBhZDogMTVweDtcXHJcXG4gICAgLS1tZWRpdW1wYWQ6IDhweDtcXHJcXG4gICAgLS1zbWFsbHBhZDogM3B4O1xcclxcbiAgICAtLXNtYWxscmFkOiAzcHg7XFxyXFxuICAgIC0tbWVkaXVtcmFkOiA4cHg7XFxyXFxuICAgIC0tbGFyZ2VyYWQ6IDE1cHg7XFxyXFxuICAgIC0tc2hhZG93OiAwcHggMXB4IDVweCAwcHggIzAwMDAwMDgwO1xcclxcbiAgICAtLWJnZGFyazogcm95YWxibHVlO1xcclxcbiAgICAtLWJnbGlnaHQ6IHdoaXRlO1xcclxcbiAgICAtLWZnbGlnaHQ6IHdoaXRlO1xcclxcbiAgICAtLWZnZGFyazogYmxhY2s7XFxyXFxuICAgIC0tZGFuZ2VyYmdjb2xvcjogI2M1NDk0OTtcXHJcXG4gICAgLS1wcnR5LWhpZ2g6ICNmZmNkYzE7XFxyXFxuICAgIC0tcHJ0eS1tZWRpdW06ICNmZmYxOWY7XFxyXFxuICAgIC0tcHJ0eS1sb3c6ICNjYmZmY2U7XFxyXFxufVxcclxcbioge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdXb3JrU2FucycsICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiBhdXRvIG1pbm1heCgxMjB2aCwgMjUwJSkgLyA3MHZ3IDFmcjtcXHJcXG4gICAgZ2FwOiAxZW07XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcclxcbn1cXHJcXG5oZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IHZhcigtLWxhcmdlcGFkKSAwO1xcclxcbn1cXHJcXG5oZWFkZXIgaDEge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcbiNtZW51LWljb24ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5idXR0b24ge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IGNhbGModmFyKC0tbWVkaXVtcGFkKSArIDNweCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLW1lZGl1bXJhZCk7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWZnbGlnaHQpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ2RhcmspO1xcclxcbn1cXHJcXG5idXR0b246YWN0aXZlIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWJnZGFyayk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG4jbmV3YnRuIHtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtIDEuNXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tbGFyZ2VyYWQpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnZGFyayk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1mZ2xpZ2h0KTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcXHJcXG59XFxyXFxuI25ld2J0bjphY3RpdmUge1xcclxcbiAgICBib3gtc2hhZG93OiBub25lO1xcclxcbn1cXHJcXG4jbWFpbiA+IGRpdjpub3QoLmFjdGl2ZS1wYWdlKSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbiNtZW51LWljb24ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG4jc2lkZWJhciB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnZGFyayk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1mZ2xpZ2h0KTtcXHJcXG4gICAgZ3JpZC1yb3c6IDEgLyAtMTtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAtMTtcXHJcXG59XFxyXFxuI3NpZGViYXIgdWwge1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XFxyXFxuICAgIG1hcmdpbjogdmFyKC0tbGFyZ2VwYWQpO1xcclxcbiAgICBmb250LXNpemU6IGxhcmdlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDE2cHg7XFxyXFxufVxcclxcbi50YWJzIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4udGFicy5hY3RpdmUge1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLyogaG9tZSAqL1xcclxcbiNob21lLXBhZ2UgaDI6Zmlyc3QtY2hpbGQge1xcclxcbiAgICBjb2xvcjogdmFyKC0tYmdkYXJrKTtcXHJcXG59XFxyXFxuI2hvbWUtcGFnZSB1bCB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiA1cHg7XFxyXFxufVxcclxcbi5lbXB0eS1jb250ZW50IHtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLWxhcmdlcGFkKTtcXHJcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXHJcXG59XFxyXFxuLnByb2plY3QtbmFtZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG4ucHJvamVjdHMtY29udHIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI4MHB4LCAxZnIpKTtcXHJcXG4gICAgZ2FwOiA4cHg7XFxyXFxufVxcclxcbi5wcm9qZWN0cy1jb250ciA+IGRpdjpub3QoLmVtcHR5LWNvbnRlbnQpIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tbWVkaXVtcmFkKTtcXHJcXG4gICAgcGFkZGluZzogdmFyKC0tbWVkaXVtcGFkKTtcXHJcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xcclxcbn1cXHJcXG4ucHJvamVjdC1uYW1lLWNvbnRyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG4uZmxleC1saXN0LWl0ZW0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IHZhcigtLW1lZGl1bXBhZCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLW1lZGl1bXJhZCk7XFxyXFxufVxcclxcbi5wcm9qZWN0cy1jb250ciBsaTpub3QoOmZpcnN0LWNoaWxkKSB7XFxyXFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZDtcXHJcXG59XFxyXFxuLmZsZXgtbGlzdC1lbGVtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiA1cHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbiN0aGlzLXdlZWstY29udHIgLmZsZXgtbGlzdC1pdGVtIHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xcclxcbn1cXHJcXG4udGFzay1uYW1lIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMTBweDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxufVxcclxcbi50YXNrLWxibC1sLFxcclxcbi50YXNrLWxibC1tLFxcclxcbi50YXNrLWxibC1oIHtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcclxcbiAgICBwYWRkaW5nOiB2YXIoLS1zbWFsbHBhZCk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1mZ2RhcmspO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1zbWFsbHJhZCk7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xcclxcbn1cXHJcXG5zdmcuYWN0aW9ucyB7XFxyXFxuICAgIGhlaWdodDogMS41cmVtO1xcclxcbiAgICB3aWR0aDogMS41cmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbiN0aGlzLXdlZWstY29udHIgdWwge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIyMHB4LCAxZnIpKTtcXHJcXG4gICAgZ2FwOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi8qIHByb2plY3RzICovXFxyXFxuI3Byb2plY3RzLXBhZ2Uge1xcclxcbiAgICBtYXJnaW46IDEuMnJlbSAwO1xcclxcbn1cXHJcXG4jcHJvamVjdHMtcGFnZSB1bCB7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMDtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuI3Byb2plY3RzLXBhZ2UgLmZsZXgtbGlzdC1pdGVtIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogbm90ZXMgKi9cXHJcXG4jbm90ZXMtY29udHIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBnYXA6IDhweDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMjBweCwgMWZyKSk7XFxyXFxuICAgIG1hcmdpbjogMS41cmVtIDA7XFxyXFxufVxcclxcbiNub3Rlcy1jb250ciA+IGRpdiB7XFxyXFxuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XFxyXFxuICAgIHBhZGRpbmc6IHZhcigtLW1lZGl1bXBhZCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLW1lZGl1bXJhZCk7XFxyXFxufVxcclxcbi5ub3RlLXRpdGxlLWNvbnRyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4ubm90ZS10aXRsZSB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG4ubm90ZWNvbnRlbnQge1xcclxcbiAgICBwYWRkaW5nOiB2YXIoLS1tZWRpdW1wYWQpO1xcclxcbiAgICBtYXJnaW46IDFyZW0gMDtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcclxcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBBYm91dCAmIFNldHRpbmdzIChNb3JlKSBwYWdlICovXFxyXFxuI21vcmUtcGFnZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuI21vcmUtcGFnZSBoMiB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1iZ2RhcmspO1xcclxcbn1cXHJcXG4jbW9yZS1wYWdlIGEge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1iZ2RhcmspO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbiNyZXNldC1idG4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYW5nZXJiZ2NvbG9yKTtcXHJcXG59XFxyXFxuI3Jlc2V0LWJ0bjphY3RpdmUge1xcclxcbiAgICBjb2xvcjogdmFyKC0tZGFuZ2VyYmdjb2xvcik7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBtb2RhbCAqL1xcclxcbiNtb2RhbC5hY3RpdmUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDMwO1xcclxcbiAgICB6LWluZGV4OiAxMDtcXHJcXG59XFxyXFxuI21vZGFsLWJveCB7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggM3B4ICMwMDAwMDAyMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdsaWdodCk7XFxyXFxuICAgIHBhZGRpbmc6IHZhcigtLWxhcmdlcGFkKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tbWVkaXVtcmFkKTtcXHJcXG4gICAgZmxleDogMSAwIDI4MHB4O1xcclxcbiAgICBtYXJnaW46IDAgMzUlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcbiNtb2RhbC1ib3ggPiBkaXY6Zmlyc3QtY2hpbGQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcbiNtb2RhbC10aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XFxyXFxufVxcclxcbiNtb2RhbC10aXRsZTo6Zmlyc3QtbGV0dGVyIHtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG59XFxyXFxuI2Nsb3NlLW1vZGFsIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4jbW9kYWwtY29udGVudCBmb3JtLFxcclxcbiNtb2RhbC1jb250ZW50ID4gZGl2IHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcbiNtb2RhbC1jb250ZW50IC5maWVsZCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMC4xcmVtO1xcclxcbn1cXHJcXG4jbW9kYWwtY29udGVudCBpbnB1dCxcXHJcXG4jbW9kYWwtY29udGVudCB0ZXh0YXJlYSB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdXb3JrU2Fucyc7XFxyXFxuICAgIHBhZGRpbmc6IHZhcigtLXNtYWxscGFkKSB2YXIoLS1tZWRpdW1wYWQpO1xcclxcbiAgICBtYXJnaW46IDAgMC4ycmVtO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcXHJcXG59XFxyXFxuI21vZGFsLWNvbnRlbnQgdGV4dGFyZWEge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tc21hbGxyYWQpO1xcclxcbn1cXHJcXG4jbW9kYWwtY29udGVudCBpbnB1dDphY3RpdmUsXFxyXFxuI21vZGFsLWNvbnRlbnQgdGV4dGFyZWE6YWN0aXZlLFxcclxcbiNtb2RhbC1jb250ZW50IGlucHV0OmZvY3VzLFxcclxcbiNtb2RhbC1jb250ZW50IHRleHRhcmVhOmZvY3VzIHtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuI21vZGFsLWNvbnRlbnQgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbiNtb2RhbC1jb250ZW50IGxhYmVsW2Zvcnw9XFxcInRhc2stcHJpb3JpdHlcXFwiXSB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcclxcbiAgICBwYWRkaW5nOiB2YXIoLS1zbWFsbHBhZCk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1mZ2RhcmspO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1zbWFsbHJhZCk7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xcclxcbn1cXHJcXG4udGFzay1sYmwtaCxcXHJcXG4jbW9kYWwtY29udGVudCBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdOmNoZWNrZWQgfiBsYWJlbFtmb3I9XFxcInRhc2stcHJpb3JpdHktaFxcXCJdIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJ0eS1oaWdoKTtcXHJcXG59XFxyXFxuLnRhc2stbGJsLW0sXFxyXFxuI21vZGFsLWNvbnRlbnQgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXTpjaGVja2VkIH4gbGFiZWxbZm9yPVxcXCJ0YXNrLXByaW9yaXR5LW1cXFwiXSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBydHktbWVkaXVtKTtcXHJcXG59XFxyXFxuLnRhc2stbGJsLWwsXFxyXFxuI21vZGFsLWNvbnRlbnQgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXTpjaGVja2VkIH4gbGFiZWxbZm9yPVxcXCJ0YXNrLXByaW9yaXR5LWxcXFwiXSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBydHktbG93KTtcXHJcXG59XFxyXFxuI3JhZGlvLWJ0bnMtY250ciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMC41cmVtO1xcclxcbn1cXHJcXG4jZGV0YWlscyAuZmllbGQgPiBkaXY6Zmlyc3QtY2hpbGQge1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcclxcbn1cXHJcXG4jZGV0YWlscyAuZmllbGQgPiBkaXY6bGFzdC1jaGlsZCB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcbiNkZXRhaWxzIC50YXNrLWxibC1oLFxcclxcbiNkZXRhaWxzIC50YXNrLWxibC1sLFxcclxcbiNkZXRhaWxzIC50YXNrLWxibC1tIHtcXHJcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuZGl2I2NvbmZpcm0ge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuI2RlbGV0ZS1idG4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYW5nZXJiZ2NvbG9yKTtcXHJcXG59XFxyXFxuI2RlbGV0ZS1idG46YWN0aXZlIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWRhbmdlcmJnY29sb3IpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLyogTWVkaWEgcXVlcnkgKi9cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNjgwcHgpIHtcXHJcXG4gICAgYm9keSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIG1hcmdpbjogMXJlbTtcXHJcXG4gICAgICAgIGdhcDogMnJlbTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIH1cXHJcXG4gICAgI21lbnUtaWNvbiB7XFxyXFxuICAgICAgICBkaXNwbGF5OiB1bnNldDtcXHJcXG4gICAgfVxcclxcbiAgICBoZWFkZXJbZGF0YS1tZW51LWFjdGl2ZV0gI21lbnUtaWNvbiB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ2RhcmspO1xcclxcbiAgICAgICAgZmlsbDogdmFyKC0tZmdsaWdodCk7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgICAgICBwYWRkaW5nOiB2YXIoLS1zbWFsbHBhZCk7XFxyXFxuICAgIH1cXHJcXG4gICAgLnByb2plY3RzLWNvbnRyIHtcXHJcXG4gICAgICAgIGdhcDogMXJlbTtcXHJcXG4gICAgfVxcclxcbiAgICAjc2lkZWJhciB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxuICAgIGhlYWRlcltkYXRhLW1lbnUtYWN0aXZlXSB+ICNzaWRlYmFyIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgICAgIGJvdHRvbTogMDtcXHJcXG4gICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgICByaWdodDogMDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiAwIC0xcHggNXB4IDBweCAjMDAwMDAwODA7XFxyXFxuICAgIH1cXHJcXG4gICAgI3NpZGViYXIgPiB1bCB7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICAgICAgZm9udC1zaXplOiBzbWFsbDtcXHJcXG4gICAgICAgIG1hcmdpbjogMS41cmVtIDA7XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTGVhZGluZ1plcm9zKG51bWJlciwgdGFyZ2V0TGVuZ3RoKSB7XG4gIHZhciBzaWduID0gbnVtYmVyIDwgMCA/ICctJyA6ICcnO1xuICB2YXIgb3V0cHV0ID0gTWF0aC5hYnMobnVtYmVyKS50b1N0cmluZygpO1xuICB3aGlsZSAob3V0cHV0Lmxlbmd0aCA8IHRhcmdldExlbmd0aCkge1xuICAgIG91dHB1dCA9ICcwJyArIG91dHB1dDtcbiAgfVxuICByZXR1cm4gc2lnbiArIG91dHB1dDtcbn0iLCJ2YXIgZGVmYXVsdE9wdGlvbnMgPSB7fTtcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0T3B0aW9ucygpIHtcbiAgcmV0dXJuIGRlZmF1bHRPcHRpb25zO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG5ld09wdGlvbnMpIHtcbiAgZGVmYXVsdE9wdGlvbnMgPSBuZXdPcHRpb25zO1xufSIsImltcG9ydCBhZGRMZWFkaW5nWmVyb3MgZnJvbSBcIi4uLy4uL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qc1wiO1xuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKi9cbnZhciBmb3JtYXR0ZXJzID0ge1xuICAvLyBZZWFyXG4gIHk6IGZ1bmN0aW9uIHkoZGF0ZSwgdG9rZW4pIHtcbiAgICAvLyBGcm9tIGh0dHA6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtMzEvdHIzNS1kYXRlcy5odG1sI0RhdGVfRm9ybWF0X3Rva2Vuc1xuICAgIC8vIHwgWWVhciAgICAgfCAgICAgeSB8IHl5IHwgICB5eXkgfCAgeXl5eSB8IHl5eXl5IHxcbiAgICAvLyB8LS0tLS0tLS0tLXwtLS0tLS0tfC0tLS18LS0tLS0tLXwtLS0tLS0tfC0tLS0tLS18XG4gICAgLy8gfCBBRCAxICAgICB8ICAgICAxIHwgMDEgfCAgIDAwMSB8ICAwMDAxIHwgMDAwMDEgfFxuICAgIC8vIHwgQUQgMTIgICAgfCAgICAxMiB8IDEyIHwgICAwMTIgfCAgMDAxMiB8IDAwMDEyIHxcbiAgICAvLyB8IEFEIDEyMyAgIHwgICAxMjMgfCAyMyB8ICAgMTIzIHwgIDAxMjMgfCAwMDEyMyB8XG4gICAgLy8gfCBBRCAxMjM0ICB8ICAxMjM0IHwgMzQgfCAgMTIzNCB8ICAxMjM0IHwgMDEyMzQgfFxuICAgIC8vIHwgQUQgMTIzNDUgfCAxMjM0NSB8IDQ1IHwgMTIzNDUgfCAxMjM0NSB8IDEyMzQ1IHxcblxuICAgIHZhciBzaWduZWRZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgIC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG4gICAgdmFyIHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRva2VuID09PSAneXknID8geWVhciAlIDEwMCA6IHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1vbnRoXG4gIE06IGZ1bmN0aW9uIE0oZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG4gICAgcmV0dXJuIHRva2VuID09PSAnTScgPyBTdHJpbmcobW9udGggKyAxKSA6IGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICB9LFxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIGQoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDRGF0ZSgpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiBhKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRhdGUuZ2V0VVRDSG91cnMoKSAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdhJzpcbiAgICAgIGNhc2UgJ2FhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgY2FzZSAnYWFhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZTtcbiAgICAgIGNhc2UgJ2FhYWFhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZVswXTtcbiAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZSA9PT0gJ2FtJyA/ICdhLm0uJyA6ICdwLm0uJztcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIGgoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyIHx8IDEyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiBIKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0hvdXJzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbnV0ZVxuICBtOiBmdW5jdGlvbiBtKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ01pbnV0ZXMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIHMoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDU2Vjb25kcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUzogZnVuY3Rpb24gUyhkYXRlLCB0b2tlbikge1xuICAgIHZhciBudW1iZXJPZkRpZ2l0cyA9IHRva2VuLmxlbmd0aDtcbiAgICB2YXIgbWlsbGlzZWNvbmRzID0gZGF0ZS5nZXRVVENNaWxsaXNlY29uZHMoKTtcbiAgICB2YXIgZnJhY3Rpb25hbFNlY29uZHMgPSBNYXRoLmZsb29yKG1pbGxpc2Vjb25kcyAqIE1hdGgucG93KDEwLCBudW1iZXJPZkRpZ2l0cyAtIDMpKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGZyYWN0aW9uYWxTZWNvbmRzLCB0b2tlbi5sZW5ndGgpO1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0dGVyczsiLCIvKipcbiAqIEdvb2dsZSBDaHJvbWUgYXMgb2YgNjcuMC4zMzk2Ljg3IGludHJvZHVjZWQgdGltZXpvbmVzIHdpdGggb2Zmc2V0IHRoYXQgaW5jbHVkZXMgc2Vjb25kcy5cbiAqIFRoZXkgdXN1YWxseSBhcHBlYXIgZm9yIGRhdGVzIHRoYXQgZGVub3RlIHRpbWUgYmVmb3JlIHRoZSB0aW1lem9uZXMgd2VyZSBpbnRyb2R1Y2VkXG4gKiAoZS5nLiBmb3IgJ0V1cm9wZS9QcmFndWUnIHRpbWV6b25lIHRoZSBvZmZzZXQgaXMgR01UKzAwOjU3OjQ0IGJlZm9yZSAxIE9jdG9iZXIgMTg5MVxuICogYW5kIEdNVCswMTowMDowMCBhZnRlciB0aGF0IGRhdGUpXG4gKlxuICogRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIHRoZSBvZmZzZXQgaW4gbWludXRlcyBhbmQgd291bGQgcmV0dXJuIDU3IGZvciB0aGUgZXhhbXBsZSBhYm92ZSxcbiAqIHdoaWNoIHdvdWxkIGxlYWQgdG8gaW5jb3JyZWN0IGNhbGN1bGF0aW9ucy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRpbWV6b25lIG9mZnNldCBpbiBtaWxsaXNlY29uZHMgdGhhdCB0YWtlcyBzZWNvbmRzIGluIGFjY291bnQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkge1xuICB2YXIgdXRjRGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSwgZGF0ZS5nZXRIb3VycygpLCBkYXRlLmdldE1pbnV0ZXMoKSwgZGF0ZS5nZXRTZWNvbmRzKCksIGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkpKTtcbiAgdXRjRGF0ZS5zZXRVVENGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgLSB1dGNEYXRlLmdldFRpbWUoKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGFkZERheXNcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgZGF5cyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IC0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIGRheXMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gLSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgMTAgZGF5cyB0byAxIFNlcHRlbWJlciAyMDE0OlxuICogY29uc3QgcmVzdWx0ID0gYWRkRGF5cyhuZXcgRGF0ZSgyMDE0LCA4LCAxKSwgMTApXG4gKiAvLz0+IFRodSBTZXAgMTEgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGREYXlzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICBpZiAoaXNOYU4oYW1vdW50KSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG4gIGlmICghYW1vdW50KSB7XG4gICAgLy8gSWYgMCBkYXlzLCBuby1vcCB0byBhdm9pZCBjaGFuZ2luZyB0aW1lcyBpbiB0aGUgaG91ciBiZWZvcmUgZW5kIG9mIERTVFxuICAgIHJldHVybiBkYXRlO1xuICB9XG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIGFtb3VudCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGFkZE1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gYmUgYWRkZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbWlsbGlzZWNvbmRzIGFkZGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCA3NTAgbWlsbGlzZWNvbmRzIHRvIDEwIEp1bHkgMjAxNCAxMjo0NTozMC4wMDA6XG4gKiBjb25zdCByZXN1bHQgPSBhZGRNaWxsaXNlY29uZHMobmV3IERhdGUoMjAxNCwgNiwgMTAsIDEyLCA0NSwgMzAsIDApLCA3NTApXG4gKiAvLz0+IFRodSBKdWwgMTAgMjAxNCAxMjo0NTozMC43NTBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciB0aW1lc3RhbXAgPSB0b0RhdGUoZGlydHlEYXRlKS5nZXRUaW1lKCk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICByZXR1cm4gbmV3IERhdGUodGltZXN0YW1wICsgYW1vdW50KTtcbn0iLCIvKipcbiAqIERheXMgaW4gMSB3ZWVrLlxuICpcbiAqIEBuYW1lIGRheXNJbldlZWtcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgZGF5c0luV2VlayA9IDc7XG5cbi8qKlxuICogRGF5cyBpbiAxIHllYXJcbiAqIE9uZSB5ZWFycyBlcXVhbHMgMzY1LjI0MjUgZGF5cyBhY2NvcmRpbmcgdG8gdGhlIGZvcm11bGE6XG4gKlxuICogPiBMZWFwIHllYXIgb2NjdXJlcyBldmVyeSA0IHllYXJzLCBleGNlcHQgZm9yIHllYXJzIHRoYXQgYXJlIGRpdmlzYWJsZSBieSAxMDAgYW5kIG5vdCBkaXZpc2FibGUgYnkgNDAwLlxuICogPiAxIG1lYW4geWVhciA9ICgzNjUrMS80LTEvMTAwKzEvNDAwKSBkYXlzID0gMzY1LjI0MjUgZGF5c1xuICpcbiAqIEBuYW1lIGRheXNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgZGF5c0luWWVhciA9IDM2NS4yNDI1O1xuXG4vKipcbiAqIE1heGltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBuYW1lIG1heFRpbWVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgbWF4VGltZSA9IE1hdGgucG93KDEwLCA4KSAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG5cbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgbWludXRlXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5NaW51dGVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5NaW51dGUgPSA2MDAwMDtcblxuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luSG91ciA9IDM2MDAwMDA7XG5cbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgc2Vjb25kXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5TZWNvbmRcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5TZWNvbmQgPSAxMDAwO1xuXG4vKipcbiAqIE1pbmltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBuYW1lIG1pblRpbWVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgbWluVGltZSA9IC1tYXhUaW1lO1xuXG4vKipcbiAqIE1pbnV0ZXMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgbWludXRlc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBtaW51dGVzSW5Ib3VyID0gNjA7XG5cbi8qKlxuICogTW9udGhzIGluIDEgcXVhcnRlclxuICpcbiAqIEBuYW1lIG1vbnRoc0luUXVhcnRlclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBtb250aHNJblF1YXJ0ZXIgPSAzO1xuXG4vKipcbiAqIE1vbnRocyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBtb250aHNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgbW9udGhzSW5ZZWFyID0gMTI7XG5cbi8qKlxuICogUXVhcnRlcnMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgcXVhcnRlcnNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgcXVhcnRlcnNJblllYXIgPSA0O1xuXG4vKipcbiAqIFNlY29uZHMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBzZWNvbmRzSW5Ib3VyID0gMzYwMDtcblxuLyoqXG4gKiBTZWNvbmRzIGluIDEgbWludXRlXG4gKlxuICogQG5hbWUgc2Vjb25kc0luTWludXRlXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIHNlY29uZHNJbk1pbnV0ZSA9IDYwO1xuXG4vKipcbiAqIFNlY29uZHMgaW4gMSBkYXlcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5EYXlcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgc2Vjb25kc0luRGF5ID0gc2Vjb25kc0luSG91ciAqIDI0O1xuXG4vKipcbiAqIFNlY29uZHMgaW4gMSB3ZWVrXG4gKlxuICogQG5hbWUgc2Vjb25kc0luV2Vla1xuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBzZWNvbmRzSW5XZWVrID0gc2Vjb25kc0luRGF5ICogNztcblxuLyoqXG4gKiBTZWNvbmRzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIHNlY29uZHNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgc2Vjb25kc0luWWVhciA9IHNlY29uZHNJbkRheSAqIGRheXNJblllYXI7XG5cbi8qKlxuICogU2Vjb25kcyBpbiAxIG1vbnRoXG4gKlxuICogQG5hbWUgc2Vjb25kc0luTW9udGhcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgc2Vjb25kc0luTW9udGggPSBzZWNvbmRzSW5ZZWFyIC8gMTI7XG5cbi8qKlxuICogU2Vjb25kcyBpbiAxIHF1YXJ0ZXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5RdWFydGVyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIHNlY29uZHNJblF1YXJ0ZXIgPSBzZWNvbmRzSW5Nb250aCAqIDM7IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZlwiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNEYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiB2YWx1ZSBhIGRhdGU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGFuIGluc3RhbmNlIG9mIERhdGUuIFRoZSBmdW5jdGlvbiB3b3JrcyBmb3IgZGF0ZXMgdHJhbnNmZXJyZWQgYWNyb3NzIGlmcmFtZXMuXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIHRoZSB2YWx1ZSB0byBjaGVja1xuICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgZGF0ZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYSB2YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGFuIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZShOYU4pKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBzb21lIHZhbHVlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKCcyMDE0LTAyLTMxJylcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGFuIG9iamVjdDpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSh7fSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNEYXRlKHZhbHVlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YodmFsdWUpID09PSAnb2JqZWN0JyAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBEYXRlXSc7XG59IiwiaW1wb3J0IHN0YXJ0T2ZEYXkgZnJvbSBcIi4uL3N0YXJ0T2ZEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzU2FtZURheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciAwNjowMDowMCBhbmQgNCBTZXB0ZW1iZXIgMTg6MDA6MDAgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQsIDYsIDApLCBuZXcgRGF0ZSgyMDE0LCA4LCA0LCAxOCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIGFuZCA0IE9jdG9iZXIgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE0LCA5LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyLCAyMDE0IGFuZCA0IFNlcHRlbWJlciwgMjAxNSBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTUsIDgsIDQpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVEYXkoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlUmlnaHQpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mRGF5LmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZkRheS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHN0YXJ0T2ZXZWVrIGZyb20gXCIuLi9zdGFydE9mV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNTYW1lV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAzMSBBdWd1c3QgMjAxNCBhbmQgNCBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCA3LCAzMSksIG5ldyBEYXRlKDIwMTQsIDgsIDQpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHdlZWsgc3RhcnRzIHdpdGggTW9uZGF5LFxuICogLy8gYXJlIDMxIEF1Z3VzdCAyMDE0IGFuZCA0IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDcsIDMxKSwgbmV3IERhdGUoMjAxNCwgOCwgNCksIHtcbiAqICAgd2Vla1N0YXJ0c09uOiAxXG4gKiB9KVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMSBKYW51YXJ5IDIwMTQgYW5kIDEgSmFudWFyeSAyMDE1IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDAsIDEpLCBuZXcgRGF0ZSgyMDE1LCAwLCAxKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lV2VlayhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZldlZWsgPSBzdGFydE9mV2VlayhkaXJ0eURhdGVMZWZ0LCBvcHRpb25zKTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZXZWVrID0gc3RhcnRPZldlZWsoZGlydHlEYXRlUmlnaHQsIG9wdGlvbnMpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mV2Vlay5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZXZWVrLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgaXNTYW1lV2VlayBmcm9tIFwiLi4vaXNTYW1lV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNUaGlzV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgd2VlayBhcyB0aGUgY3VycmVudCBkYXRlP1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIHdlZWsgYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gdGhlIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyBpbiB0aGlzIHdlZWtcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAyNSBTZXB0ZW1iZXIgMjAxNCwgaXMgMjEgU2VwdGVtYmVyIDIwMTQgaW4gdGhpcyB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNUaGlzV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyMSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMjUgU2VwdGVtYmVyIDIwMTQgYW5kIHdlZWsgc3RhcnRzIHdpdGggTW9uZGF5XG4gKiAvLyBpcyAyMSBTZXB0ZW1iZXIgMjAxNCBpbiB0aGlzIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RoaXNXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIxKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RoaXNXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGlzU2FtZVdlZWsoZGlydHlEYXRlLCBEYXRlLm5vdygpLCBvcHRpb25zKTtcbn0iLCJpbXBvcnQgaXNTYW1lRGF5IGZyb20gXCIuLi9pc1NhbWVEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVG9kYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHRvZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDYgT2N0b2JlciAxNDowMDowMCB0b2RheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVG9kYXkobmV3IERhdGUoMjAxNCwgOSwgNiwgMTQsIDApKVxuICogLy89PiB0cnVlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVG9kYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lRGF5KGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSk7XG59IiwiaW1wb3J0IGFkZERheXMgZnJvbSBcIi4uL2FkZERheXMvaW5kZXguanNcIjtcbmltcG9ydCBpc1NhbWVEYXkgZnJvbSBcIi4uL2lzU2FtZURheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNUb21vcnJvd1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b21vcnJvdz9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b21vcnJvdz9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdG9tb3Jyb3dcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgNyBPY3RvYmVyIDE0OjAwOjAwIHRvbW9ycm93P1xuICogY29uc3QgcmVzdWx0ID0gaXNUb21vcnJvdyhuZXcgRGF0ZSgyMDE0LCA5LCA3LCAxNCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUb21vcnJvdyhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVEYXkoZGlydHlEYXRlLCBhZGREYXlzKERhdGUubm93KCksIDEpKTtcbn0iLCJpbXBvcnQgaXNEYXRlIGZyb20gXCIuLi9pc0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNWYWxpZFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB2YWxpZD9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgZmFsc2UgaWYgYXJndW1lbnQgaXMgSW52YWxpZCBEYXRlIGFuZCB0cnVlIG90aGVyd2lzZS5cbiAqIEFyZ3VtZW50IGlzIGNvbnZlcnRlZCB0byBEYXRlIHVzaW5nIGB0b0RhdGVgLiBTZWUgW3RvRGF0ZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy90b0RhdGV9XG4gKiBJbnZhbGlkIERhdGUgaXMgYSBEYXRlLCB3aG9zZSB0aW1lIHZhbHVlIGlzIE5hTi5cbiAqXG4gKiBUaW1lIHZhbHVlIG9mIERhdGU6IGh0dHA6Ly9lczUuZ2l0aHViLmlvLyN4MTUuOS4xLjFcbiAqXG4gKiBAcGFyYW0geyp9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHZhbGlkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgyMDE0LCAxLCAzMSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWx1ZSwgY29udmVydGFibGUgaW50byBhIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKDEzOTM4MDQ4MDAwMDApXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKCcnKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNWYWxpZChkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIGlmICghaXNEYXRlKGRpcnR5RGF0ZSkgJiYgdHlwZW9mIGRpcnR5RGF0ZSAhPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgcmV0dXJuICFpc05hTihOdW1iZXIoZGF0ZSkpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdHRlcnMgZnJvbSBcIi4uL19saWIvZm9ybWF0L2xpZ2h0Rm9ybWF0dGVycy9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IGlzVmFsaWQgZnJvbSBcIi4uL2lzVmFsaWQvaW5kZXguanNcIjtcbmltcG9ydCBzdWJNaWxsaXNlY29uZHMgZnJvbSBcIi4uL3N1Yk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjsgLy8gVGhpcyBSZWdFeHAgY29uc2lzdHMgb2YgdGhyZWUgcGFydHMgc2VwYXJhdGVkIGJ5IGB8YDpcbi8vIC0gKFxcdylcXDEqIG1hdGNoZXMgYW55IHNlcXVlbmNlcyBvZiB0aGUgc2FtZSBsZXR0ZXJcbi8vIC0gJycgbWF0Y2hlcyB0d28gcXVvdGUgY2hhcmFjdGVycyBpbiBhIHJvd1xuLy8gLSAnKCcnfFteJ10pKygnfCQpIG1hdGNoZXMgYW55dGhpbmcgc3Vycm91bmRlZCBieSB0d28gcXVvdGUgY2hhcmFjdGVycyAoJyksXG4vLyAgIGV4Y2VwdCBhIHNpbmdsZSBxdW90ZSBzeW1ib2wsIHdoaWNoIGVuZHMgdGhlIHNlcXVlbmNlLlxuLy8gICBUd28gcXVvdGUgY2hhcmFjdGVycyBkbyBub3QgZW5kIHRoZSBzZXF1ZW5jZS5cbi8vICAgSWYgdGhlcmUgaXMgbm8gbWF0Y2hpbmcgc2luZ2xlIHF1b3RlXG4vLyAgIHRoZW4gdGhlIHNlcXVlbmNlIHdpbGwgY29udGludWUgdW50aWwgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLlxuLy8gLSAuIG1hdGNoZXMgYW55IHNpbmdsZSBjaGFyYWN0ZXIgdW5tYXRjaGVkIGJ5IHByZXZpb3VzIHBhcnRzIG9mIHRoZSBSZWdFeHBzXG52YXIgZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC8oXFx3KVxcMSp8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XG52YXIgZXNjYXBlZFN0cmluZ1JlZ0V4cCA9IC9eJyhbXl0qPyknPyQvO1xudmFyIGRvdWJsZVF1b3RlUmVnRXhwID0gLycnL2c7XG52YXIgdW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHAgPSAvW2EtekEtWl0vO1xuXG4vKipcbiAqIEBuYW1lIGxpZ2h0Rm9ybWF0XG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEZvcm1hdCB0aGUgZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nIGluIHRoZSBnaXZlbiBmb3JtYXQuIFVubGlrZSBgZm9ybWF0YCxcbiAqIGBsaWdodEZvcm1hdGAgZG9lc24ndCB1c2UgbG9jYWxlcyBhbmQgb3V0cHV0cyBkYXRlIHVzaW5nIHRoZSBtb3N0IHBvcHVsYXIgdG9rZW5zLlxuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhlIGBsaWdodEZvcm1hdGAgdG9rZW5zIGRpZmZlciBmcm9tIE1vbWVudC5qcyBhbmQgb3RoZXIgbGlicmFyaWVzLlxuICogPiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiBUaGUgY2hhcmFjdGVycyB3cmFwcGVkIGJldHdlZW4gdHdvIHNpbmdsZSBxdW90ZXMgY2hhcmFjdGVycyAoJykgYXJlIGVzY2FwZWQuXG4gKiBUd28gc2luZ2xlIHF1b3RlcyBpbiBhIHJvdywgd2hldGhlciBpbnNpZGUgb3Igb3V0c2lkZSBhIHF1b3RlZCBzZXF1ZW5jZSwgcmVwcmVzZW50IGEgJ3JlYWwnIHNpbmdsZSBxdW90ZS5cbiAqXG4gKiBGb3JtYXQgb2YgdGhlIHN0cmluZyBpcyBiYXNlZCBvbiBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiBodHRwczovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS1kYXRlcy5odG1sI0RhdGVfRmllbGRfU3ltYm9sX1RhYmxlXG4gKlxuICogQWNjZXB0ZWQgcGF0dGVybnM6XG4gKiB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQYXR0ZXJuIHwgUmVzdWx0IGV4YW1wbGVzICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgYS4uYWFhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhICAgIHwgYS5tLiwgcC5tLiAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWFhICAgfCBhLCBwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCBDYWxlbmRhciB5ZWFyICAgICAgICAgICAgICAgICAgIHwgeSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eSAgICAgfCAwNDQsIDAwMSwgMDAwLCAwMTcgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8XG4gKiB8IE1vbnRoIChmb3JtYXR0aW5nKSAgICAgICAgICAgICAgfCBNICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfFxuICogfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgIHwgZCAgICAgICB8IDEsIDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkZCAgICAgIHwgMDEsIDAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgICB8IGggICAgICAgfCAxLCAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaGggICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICB8XG4gKiB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICAgfCBIICAgICAgIHwgMCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhIICAgICAgfCAwMCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfFxuICogfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbSAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbSAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgICB8IHMgICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc3MgICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8XG4gKiB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICAgfCBTICAgICAgIHwgMCwgMSwgLi4uLCA5ICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTICAgICAgfCAwMCwgMDEsIC4uLiwgOTkgICAgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTICAgICB8IDAwMCwgMDAxLCAuLi4sIDk5OSAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1NTICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBmb3JtYXQgLSB0aGUgc3RyaW5nIG9mIHRva2Vuc1xuICogQHJldHVybnMge1N0cmluZ30gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZ1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gZm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyXG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IHJlc3VsdCA9IGxpZ2h0Rm9ybWF0KG5ldyBEYXRlKDIwMTQsIDEsIDExKSwgJ3l5eXktTU0tZGQnKVxuICogLy89PiAnMjAxNC0wMi0xMSdcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsaWdodEZvcm1hdChkaXJ0eURhdGUsIGZvcm1hdFN0cikge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIG9yaWdpbmFsRGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBpZiAoIWlzVmFsaWQob3JpZ2luYWxEYXRlKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHRpbWUgdmFsdWUnKTtcbiAgfVxuXG4gIC8vIENvbnZlcnQgdGhlIGRhdGUgaW4gc3lzdGVtIHRpbWV6b25lIHRvIHRoZSBzYW1lIGRhdGUgaW4gVVRDKzAwOjAwIHRpbWV6b25lLlxuICAvLyBUaGlzIGVuc3VyZXMgdGhhdCB3aGVuIFVUQyBmdW5jdGlvbnMgd2lsbCBiZSBpbXBsZW1lbnRlZCwgbG9jYWxlcyB3aWxsIGJlIGNvbXBhdGlibGUgd2l0aCB0aGVtLlxuICAvLyBTZWUgYW4gaXNzdWUgYWJvdXQgVVRDIGZ1bmN0aW9uczogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcbiAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhvcmlnaW5hbERhdGUpO1xuICB2YXIgdXRjRGF0ZSA9IHN1Yk1pbGxpc2Vjb25kcyhvcmlnaW5hbERhdGUsIHRpbWV6b25lT2Zmc2V0KTtcbiAgdmFyIHRva2VucyA9IGZvcm1hdFN0ci5tYXRjaChmb3JtYXR0aW5nVG9rZW5zUmVnRXhwKTtcblxuICAvLyBUaGUgb25seSBjYXNlIHdoZW4gZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCBkb2Vzbid0IG1hdGNoIHRoZSBzdHJpbmcgaXMgd2hlbiBpdCdzIGVtcHR5XG4gIGlmICghdG9rZW5zKSByZXR1cm4gJyc7XG4gIHZhciByZXN1bHQgPSB0b2tlbnMubWFwKGZ1bmN0aW9uIChzdWJzdHJpbmcpIHtcbiAgICAvLyBSZXBsYWNlIHR3byBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyB3aXRoIG9uZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyXG4gICAgaWYgKHN1YnN0cmluZyA9PT0gXCInJ1wiKSB7XG4gICAgICByZXR1cm4gXCInXCI7XG4gICAgfVxuICAgIHZhciBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09IFwiJ1wiKSB7XG4gICAgICByZXR1cm4gY2xlYW5Fc2NhcGVkU3RyaW5nKHN1YnN0cmluZyk7XG4gICAgfVxuICAgIHZhciBmb3JtYXR0ZXIgPSBmb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcbiAgICBpZiAoZm9ybWF0dGVyKSB7XG4gICAgICByZXR1cm4gZm9ybWF0dGVyKHV0Y0RhdGUsIHN1YnN0cmluZyk7XG4gICAgfVxuICAgIGlmIChmaXJzdENoYXJhY3Rlci5tYXRjaCh1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCkpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdGb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXIgYCcgKyBmaXJzdENoYXJhY3RlciArICdgJyk7XG4gICAgfVxuICAgIHJldHVybiBzdWJzdHJpbmc7XG4gIH0pLmpvaW4oJycpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gY2xlYW5Fc2NhcGVkU3RyaW5nKGlucHV0KSB7XG4gIHZhciBtYXRjaGVzID0gaW5wdXQubWF0Y2goZXNjYXBlZFN0cmluZ1JlZ0V4cCk7XG4gIGlmICghbWF0Y2hlcykge1xuICAgIHJldHVybiBpbnB1dDtcbiAgfVxuICByZXR1cm4gbWF0Y2hlc1sxXS5yZXBsYWNlKGRvdWJsZVF1b3RlUmVnRXhwLCBcIidcIik7XG59IiwiaW1wb3J0IHsgbWlsbGlzZWNvbmRzSW5Ib3VyLCBtaWxsaXNlY29uZHNJbk1pbnV0ZSB9IGZyb20gXCIuLi9jb25zdGFudHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBwYXJzZUlTT1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBQYXJzZSBJU08gc3RyaW5nXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gc3RyaW5nIGluIElTTyA4NjAxIGZvcm1hdCBhbmQgcmV0dXJuIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogRnVuY3Rpb24gYWNjZXB0cyBjb21wbGV0ZSBJU08gODYwMSBmb3JtYXRzIGFzIHdlbGwgYXMgcGFydGlhbCBpbXBsZW1lbnRhdGlvbnMuXG4gKiBJU08gODYwMTogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMVxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpc24ndCBhIHN0cmluZywgdGhlIGZ1bmN0aW9uIGNhbm5vdCBwYXJzZSB0aGUgc3RyaW5nIG9yXG4gKiB0aGUgdmFsdWVzIGFyZSBpbnZhbGlkLCBpdCByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0gezB8MXwyfSBbb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzPTJdIC0gdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzYCBtdXN0IGJlIDAsIDEgb3IgMlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnMjAxNC0wMi0xMVQxMTozMDozMCcgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHBhcnNlSVNPKCcyMDE0LTAyLTExVDExOjMwOjMwJylcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgc3RyaW5nICcrMDIwMTQxMDEnIHRvIGRhdGUsXG4gKiAvLyBpZiB0aGUgYWRkaXRpb25hbCBudW1iZXIgb2YgZGlnaXRzIGluIHRoZSBleHRlbmRlZCB5ZWFyIGZvcm1hdCBpcyAxOlxuICogY29uc3QgcmVzdWx0ID0gcGFyc2VJU08oJyswMjAxNDEwMScsIHsgYWRkaXRpb25hbERpZ2l0czogMSB9KVxuICogLy89PiBGcmkgQXByIDExIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyc2VJU08oYXJndW1lbnQsIG9wdGlvbnMpIHtcbiAgdmFyIF9vcHRpb25zJGFkZGl0aW9uYWxEaTtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhZGRpdGlvbmFsRGlnaXRzID0gdG9JbnRlZ2VyKChfb3B0aW9ucyRhZGRpdGlvbmFsRGkgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0cykgIT09IG51bGwgJiYgX29wdGlvbnMkYWRkaXRpb25hbERpICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRhZGRpdGlvbmFsRGkgOiAyKTtcbiAgaWYgKGFkZGl0aW9uYWxEaWdpdHMgIT09IDIgJiYgYWRkaXRpb25hbERpZ2l0cyAhPT0gMSAmJiBhZGRpdGlvbmFsRGlnaXRzICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2FkZGl0aW9uYWxEaWdpdHMgbXVzdCBiZSAwLCAxIG9yIDInKTtcbiAgfVxuICBpZiAoISh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCkgPT09ICdbb2JqZWN0IFN0cmluZ10nKSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG4gIHZhciBkYXRlU3RyaW5ncyA9IHNwbGl0RGF0ZVN0cmluZyhhcmd1bWVudCk7XG4gIHZhciBkYXRlO1xuICBpZiAoZGF0ZVN0cmluZ3MuZGF0ZSkge1xuICAgIHZhciBwYXJzZVllYXJSZXN1bHQgPSBwYXJzZVllYXIoZGF0ZVN0cmluZ3MuZGF0ZSwgYWRkaXRpb25hbERpZ2l0cyk7XG4gICAgZGF0ZSA9IHBhcnNlRGF0ZShwYXJzZVllYXJSZXN1bHQucmVzdERhdGVTdHJpbmcsIHBhcnNlWWVhclJlc3VsdC55ZWFyKTtcbiAgfVxuICBpZiAoIWRhdGUgfHwgaXNOYU4oZGF0ZS5nZXRUaW1lKCkpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbiAgdmFyIHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICB2YXIgdGltZSA9IDA7XG4gIHZhciBvZmZzZXQ7XG4gIGlmIChkYXRlU3RyaW5ncy50aW1lKSB7XG4gICAgdGltZSA9IHBhcnNlVGltZShkYXRlU3RyaW5ncy50aW1lKTtcbiAgICBpZiAoaXNOYU4odGltZSkpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgfVxuICBpZiAoZGF0ZVN0cmluZ3MudGltZXpvbmUpIHtcbiAgICBvZmZzZXQgPSBwYXJzZVRpbWV6b25lKGRhdGVTdHJpbmdzLnRpbWV6b25lKTtcbiAgICBpZiAoaXNOYU4ob2Zmc2V0KSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBkaXJ0eURhdGUgPSBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lKTtcbiAgICAvLyBqcyBwYXJzZWQgc3RyaW5nIGFzc3VtaW5nIGl0J3MgaW4gVVRDIHRpbWV6b25lXG4gICAgLy8gYnV0IHdlIG5lZWQgaXQgdG8gYmUgcGFyc2VkIGluIG91ciB0aW1lem9uZVxuICAgIC8vIHNvIHdlIHVzZSB1dGMgdmFsdWVzIHRvIGJ1aWxkIGRhdGUgaW4gb3VyIHRpbWV6b25lLlxuICAgIC8vIFllYXIgdmFsdWVzIGZyb20gMCB0byA5OSBtYXAgdG8gdGhlIHllYXJzIDE5MDAgdG8gMTk5OVxuICAgIC8vIHNvIHNldCB5ZWFyIGV4cGxpY2l0bHkgd2l0aCBzZXRGdWxsWWVhci5cbiAgICB2YXIgcmVzdWx0ID0gbmV3IERhdGUoMCk7XG4gICAgcmVzdWx0LnNldEZ1bGxZZWFyKGRpcnR5RGF0ZS5nZXRVVENGdWxsWWVhcigpLCBkaXJ0eURhdGUuZ2V0VVRDTW9udGgoKSwgZGlydHlEYXRlLmdldFVUQ0RhdGUoKSk7XG4gICAgcmVzdWx0LnNldEhvdXJzKGRpcnR5RGF0ZS5nZXRVVENIb3VycygpLCBkaXJ0eURhdGUuZ2V0VVRDTWludXRlcygpLCBkaXJ0eURhdGUuZ2V0VVRDU2Vjb25kcygpLCBkaXJ0eURhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCkpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgcmV0dXJuIG5ldyBEYXRlKHRpbWVzdGFtcCArIHRpbWUgKyBvZmZzZXQpO1xufVxudmFyIHBhdHRlcm5zID0ge1xuICBkYXRlVGltZURlbGltaXRlcjogL1tUIF0vLFxuICB0aW1lWm9uZURlbGltaXRlcjogL1taIF0vaSxcbiAgdGltZXpvbmU6IC8oW1orLV0uKikkL1xufTtcbnZhciBkYXRlUmVnZXggPSAvXi0/KD86KFxcZHszfSl8KFxcZHsyfSkoPzotPyhcXGR7Mn0pKT98VyhcXGR7Mn0pKD86LT8oXFxkezF9KSk/fCkkLztcbnZhciB0aW1lUmVnZXggPSAvXihcXGR7Mn0oPzpbLixdXFxkKik/KSg/Ojo/KFxcZHsyfSg/OlsuLF1cXGQqKT8pKT8oPzo6PyhcXGR7Mn0oPzpbLixdXFxkKik/KSk/JC87XG52YXIgdGltZXpvbmVSZWdleCA9IC9eKFsrLV0pKFxcZHsyfSkoPzo6PyhcXGR7Mn0pKT8kLztcbmZ1bmN0aW9uIHNwbGl0RGF0ZVN0cmluZyhkYXRlU3RyaW5nKSB7XG4gIHZhciBkYXRlU3RyaW5ncyA9IHt9O1xuICB2YXIgYXJyYXkgPSBkYXRlU3RyaW5nLnNwbGl0KHBhdHRlcm5zLmRhdGVUaW1lRGVsaW1pdGVyKTtcbiAgdmFyIHRpbWVTdHJpbmc7XG5cbiAgLy8gVGhlIHJlZ2V4IG1hdGNoIHNob3VsZCBvbmx5IHJldHVybiBhdCBtYXhpbXVtIHR3byBhcnJheSBlbGVtZW50cy5cbiAgLy8gW2RhdGVdLCBbdGltZV0sIG9yIFtkYXRlLCB0aW1lXS5cbiAgaWYgKGFycmF5Lmxlbmd0aCA+IDIpIHtcbiAgICByZXR1cm4gZGF0ZVN0cmluZ3M7XG4gIH1cbiAgaWYgKC86Ly50ZXN0KGFycmF5WzBdKSkge1xuICAgIHRpbWVTdHJpbmcgPSBhcnJheVswXTtcbiAgfSBlbHNlIHtcbiAgICBkYXRlU3RyaW5ncy5kYXRlID0gYXJyYXlbMF07XG4gICAgdGltZVN0cmluZyA9IGFycmF5WzFdO1xuICAgIGlmIChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlci50ZXN0KGRhdGVTdHJpbmdzLmRhdGUpKSB7XG4gICAgICBkYXRlU3RyaW5ncy5kYXRlID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlcilbMF07XG4gICAgICB0aW1lU3RyaW5nID0gZGF0ZVN0cmluZy5zdWJzdHIoZGF0ZVN0cmluZ3MuZGF0ZS5sZW5ndGgsIGRhdGVTdHJpbmcubGVuZ3RoKTtcbiAgICB9XG4gIH1cbiAgaWYgKHRpbWVTdHJpbmcpIHtcbiAgICB2YXIgdG9rZW4gPSBwYXR0ZXJucy50aW1lem9uZS5leGVjKHRpbWVTdHJpbmcpO1xuICAgIGlmICh0b2tlbikge1xuICAgICAgZGF0ZVN0cmluZ3MudGltZSA9IHRpbWVTdHJpbmcucmVwbGFjZSh0b2tlblsxXSwgJycpO1xuICAgICAgZGF0ZVN0cmluZ3MudGltZXpvbmUgPSB0b2tlblsxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0ZVN0cmluZ3MudGltZSA9IHRpbWVTdHJpbmc7XG4gICAgfVxuICB9XG4gIHJldHVybiBkYXRlU3RyaW5ncztcbn1cbmZ1bmN0aW9uIHBhcnNlWWVhcihkYXRlU3RyaW5nLCBhZGRpdGlvbmFsRGlnaXRzKSB7XG4gIHZhciByZWdleCA9IG5ldyBSZWdFeHAoJ14oPzooXFxcXGR7NH18WystXVxcXFxkeycgKyAoNCArIGFkZGl0aW9uYWxEaWdpdHMpICsgJ30pfChcXFxcZHsyfXxbKy1dXFxcXGR7JyArICgyICsgYWRkaXRpb25hbERpZ2l0cykgKyAnfSkkKScpO1xuICB2YXIgY2FwdHVyZXMgPSBkYXRlU3RyaW5nLm1hdGNoKHJlZ2V4KTtcbiAgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHllYXJcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIHtcbiAgICB5ZWFyOiBOYU4sXG4gICAgcmVzdERhdGVTdHJpbmc6ICcnXG4gIH07XG4gIHZhciB5ZWFyID0gY2FwdHVyZXNbMV0gPyBwYXJzZUludChjYXB0dXJlc1sxXSkgOiBudWxsO1xuICB2YXIgY2VudHVyeSA9IGNhcHR1cmVzWzJdID8gcGFyc2VJbnQoY2FwdHVyZXNbMl0pIDogbnVsbDtcblxuICAvLyBlaXRoZXIgeWVhciBvciBjZW50dXJ5IGlzIG51bGwsIG5vdCBib3RoXG4gIHJldHVybiB7XG4gICAgeWVhcjogY2VudHVyeSA9PT0gbnVsbCA/IHllYXIgOiBjZW50dXJ5ICogMTAwLFxuICAgIHJlc3REYXRlU3RyaW5nOiBkYXRlU3RyaW5nLnNsaWNlKChjYXB0dXJlc1sxXSB8fCBjYXB0dXJlc1syXSkubGVuZ3RoKVxuICB9O1xufVxuZnVuY3Rpb24gcGFyc2VEYXRlKGRhdGVTdHJpbmcsIHllYXIpIHtcbiAgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHllYXJcbiAgaWYgKHllYXIgPT09IG51bGwpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB2YXIgY2FwdHVyZXMgPSBkYXRlU3RyaW5nLm1hdGNoKGRhdGVSZWdleCk7XG4gIC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCBzdHJpbmdcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIHZhciBpc1dlZWtEYXRlID0gISFjYXB0dXJlc1s0XTtcbiAgdmFyIGRheU9mWWVhciA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbMV0pO1xuICB2YXIgbW9udGggPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzJdKSAtIDE7XG4gIHZhciBkYXkgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzNdKTtcbiAgdmFyIHdlZWsgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzRdKTtcbiAgdmFyIGRheU9mV2VlayA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbNV0pIC0gMTtcbiAgaWYgKGlzV2Vla0RhdGUpIHtcbiAgICBpZiAoIXZhbGlkYXRlV2Vla0RhdGUoeWVhciwgd2VlaywgZGF5T2ZXZWVrKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICAgIHJldHVybiBkYXlPZklTT1dlZWtZZWFyKHllYXIsIHdlZWssIGRheU9mV2Vlayk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgwKTtcbiAgICBpZiAoIXZhbGlkYXRlRGF0ZSh5ZWFyLCBtb250aCwgZGF5KSB8fCAhdmFsaWRhdGVEYXlPZlllYXJEYXRlKHllYXIsIGRheU9mWWVhcikpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKHllYXIsIG1vbnRoLCBNYXRoLm1heChkYXlPZlllYXIsIGRheSkpO1xuICAgIHJldHVybiBkYXRlO1xuICB9XG59XG5mdW5jdGlvbiBwYXJzZURhdGVVbml0KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA/IHBhcnNlSW50KHZhbHVlKSA6IDE7XG59XG5mdW5jdGlvbiBwYXJzZVRpbWUodGltZVN0cmluZykge1xuICB2YXIgY2FwdHVyZXMgPSB0aW1lU3RyaW5nLm1hdGNoKHRpbWVSZWdleCk7XG4gIGlmICghY2FwdHVyZXMpIHJldHVybiBOYU47IC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB0aW1lXG5cbiAgdmFyIGhvdXJzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1sxXSk7XG4gIHZhciBtaW51dGVzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1syXSk7XG4gIHZhciBzZWNvbmRzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1szXSk7XG4gIGlmICghdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cbiAgcmV0dXJuIGhvdXJzICogbWlsbGlzZWNvbmRzSW5Ib3VyICsgbWludXRlcyAqIG1pbGxpc2Vjb25kc0luTWludXRlICsgc2Vjb25kcyAqIDEwMDA7XG59XG5mdW5jdGlvbiBwYXJzZVRpbWVVbml0KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAmJiBwYXJzZUZsb2F0KHZhbHVlLnJlcGxhY2UoJywnLCAnLicpKSB8fCAwO1xufVxuZnVuY3Rpb24gcGFyc2VUaW1lem9uZSh0aW1lem9uZVN0cmluZykge1xuICBpZiAodGltZXpvbmVTdHJpbmcgPT09ICdaJykgcmV0dXJuIDA7XG4gIHZhciBjYXB0dXJlcyA9IHRpbWV6b25lU3RyaW5nLm1hdGNoKHRpbWV6b25lUmVnZXgpO1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gMDtcbiAgdmFyIHNpZ24gPSBjYXB0dXJlc1sxXSA9PT0gJysnID8gLTEgOiAxO1xuICB2YXIgaG91cnMgPSBwYXJzZUludChjYXB0dXJlc1syXSk7XG4gIHZhciBtaW51dGVzID0gY2FwdHVyZXNbM10gJiYgcGFyc2VJbnQoY2FwdHVyZXNbM10pIHx8IDA7XG4gIGlmICghdmFsaWRhdGVUaW1lem9uZShob3VycywgbWludXRlcykpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG4gIHJldHVybiBzaWduICogKGhvdXJzICogbWlsbGlzZWNvbmRzSW5Ib3VyICsgbWludXRlcyAqIG1pbGxpc2Vjb25kc0luTWludXRlKTtcbn1cbmZ1bmN0aW9uIGRheU9mSVNPV2Vla1llYXIoaXNvV2Vla1llYXIsIHdlZWssIGRheSkge1xuICB2YXIgZGF0ZSA9IG5ldyBEYXRlKDApO1xuICBkYXRlLnNldFVUQ0Z1bGxZZWFyKGlzb1dlZWtZZWFyLCAwLCA0KTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeURheSA9IGRhdGUuZ2V0VVRDRGF5KCkgfHwgNztcbiAgdmFyIGRpZmYgPSAod2VlayAtIDEpICogNyArIGRheSArIDEgLSBmb3VydGhPZkphbnVhcnlEYXk7XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSArIGRpZmYpO1xuICByZXR1cm4gZGF0ZTtcbn1cblxuLy8gVmFsaWRhdGlvbiBmdW5jdGlvbnNcblxuLy8gRmVicnVhcnkgaXMgbnVsbCB0byBoYW5kbGUgdGhlIGxlYXAgeWVhciAodXNpbmcgfHwpXG52YXIgZGF5c0luTW9udGhzID0gWzMxLCBudWxsLCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV07XG5mdW5jdGlvbiBpc0xlYXBZZWFySW5kZXgoeWVhcikge1xuICByZXR1cm4geWVhciAlIDQwMCA9PT0gMCB8fCB5ZWFyICUgNCA9PT0gMCAmJiB5ZWFyICUgMTAwICE9PSAwO1xufVxuZnVuY3Rpb24gdmFsaWRhdGVEYXRlKHllYXIsIG1vbnRoLCBkYXRlKSB7XG4gIHJldHVybiBtb250aCA+PSAwICYmIG1vbnRoIDw9IDExICYmIGRhdGUgPj0gMSAmJiBkYXRlIDw9IChkYXlzSW5Nb250aHNbbW9udGhdIHx8IChpc0xlYXBZZWFySW5kZXgoeWVhcikgPyAyOSA6IDI4KSk7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZURheU9mWWVhckRhdGUoeWVhciwgZGF5T2ZZZWFyKSB7XG4gIHJldHVybiBkYXlPZlllYXIgPj0gMSAmJiBkYXlPZlllYXIgPD0gKGlzTGVhcFllYXJJbmRleCh5ZWFyKSA/IDM2NiA6IDM2NSk7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZVdlZWtEYXRlKF95ZWFyLCB3ZWVrLCBkYXkpIHtcbiAgcmV0dXJuIHdlZWsgPj0gMSAmJiB3ZWVrIDw9IDUzICYmIGRheSA+PSAwICYmIGRheSA8PSA2O1xufVxuZnVuY3Rpb24gdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSB7XG4gIGlmIChob3VycyA9PT0gMjQpIHtcbiAgICByZXR1cm4gbWludXRlcyA9PT0gMCAmJiBzZWNvbmRzID09PSAwO1xuICB9XG4gIHJldHVybiBzZWNvbmRzID49IDAgJiYgc2Vjb25kcyA8IDYwICYmIG1pbnV0ZXMgPj0gMCAmJiBtaW51dGVzIDwgNjAgJiYgaG91cnMgPj0gMCAmJiBob3VycyA8IDI1O1xufVxuZnVuY3Rpb24gdmFsaWRhdGVUaW1lem9uZShfaG91cnMsIG1pbnV0ZXMpIHtcbiAgcmV0dXJuIG1pbnV0ZXMgPj0gMCAmJiBtaW51dGVzIDw9IDU5O1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mRGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZldlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFN1biBBdWcgMzEgMjAxNCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0aGUgd2VlayBzdGFydHMgb24gTW9uZGF5LCB0aGUgc3RhcnQgb2YgdGhlIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZldlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMCk7XG5cbiAgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldERheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgYWRkTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9hZGRNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdWJNaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gYmUgc3VidHJhY3RlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaWxsaXNlY29uZHMgc3VidHJhY3RlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdWJ0cmFjdCA3NTAgbWlsbGlzZWNvbmRzIGZyb20gMTAgSnVseSAyMDE0IDEyOjQ1OjMwLjAwMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN1Yk1pbGxpc2Vjb25kcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDQ1LCAzMCwgMCksIDc1MClcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDEyOjQ1OjI5LjI1MFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdWJNaWxsaXNlY29uZHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBhZGRNaWxsaXNlY29uZHMoZGlydHlEYXRlLCAtYW1vdW50KTtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7XG5cbiAgLy8gQ2xvbmUgdGhlIGRhdGVcbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGlzVG9kYXksIGlzVG9tb3Jyb3csIHBhcnNlSVNPLCBsaWdodEZvcm1hdCB9IGZyb20gXCJkYXRlLWZuc1wiO1xyXG5pbXBvcnQgcHViU3ViIGZyb20gXCIuL3B1YlN1Yi5qc1wiO1xyXG5cclxuY29uc3QgaG9tZVBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWUtcGFnZVwiKSxcclxuICBtZW51SWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudS1pY29uXCIpLFxyXG4gIHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYnNcIiksXHJcbiAgY3JlYXRlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdidG5cIiksXHJcbiAgcHJvamVjdHNQYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0cy1wYWdlXCIpLFxyXG4gIG5vdGVzUGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm90ZXMtcGFnZVwiKSxcclxuICBtb3JlUGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9yZS1wYWdlXCIpLFxyXG4gIHBhZ2VzID0gW2hvbWVQYWdlLCBwcm9qZWN0c1BhZ2UsIG5vdGVzUGFnZSwgbW9yZVBhZ2VdLFxyXG4gIG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbFwiKSxcclxuICBtb2RhbFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbC10aXRsZVwiKSxcclxuICBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsLWNvbnRlbnRcIik7XHJcblxyXG5jb25zdCBtb2RhbEZvcm1zID0ge1xyXG4gIFwibmV3LXByb2plY3RcIjogYDxmb3JtIGRhdGEtYWN0aW9uLXR5cGU9XCJuZXctcHJvamVjdFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cclxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcm9qZWN0LXRpdGxlXCI+VGl0bGU8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0IGlkPVwicHJvamVjdC10aXRsZVwiIG5hbWU9XCJ0aXRsZVwiIHR5cGU9XCJ0ZXh0XCIgbWF4bGVuZ3RoPVwiNDBcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHByb2plY3QncyB0aXRsZVwiIHJlcXVpcmVkPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2F2ZTwvYnV0dG9uPlxyXG4gICAgPC9mb3JtPmAsXHJcbiAgXCJuZXctbm90ZVwiOiBgPGZvcm0gZGF0YS1hY3Rpb24tdHlwZT1cIm5ldy1ub3RlXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cclxuICAgICAgICA8bGFiZWwgZm9yPVwibm90ZS10aXRsZVwiPlRpdGxlPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgaWQ9XCJub3RlLXRpdGxlXCIgbmFtZT1cInRpdGxlXCIgdHlwZT1cInRleHRcIiBtYXhsZW5ndGg9XCI0MFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgbm90ZSB0aXRsZVwiIHJlcXVpcmVkPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cclxuICAgICAgICA8bGFiZWwgZm9yPVwibm90ZS1jb250ZW50XCI+Tm90ZTwvbGFiZWw+XHJcbiAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJub3RlXCIgaWQ9XCJub3RlLWNvbnRlbnRcIiBwbGFjZWhvbGRlcj1cIllvdXIgbm90ZSBnb2VzIGhlcmVcIj48L3RleHRhcmVhPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TYXZlPC9idXR0b24+XHJcbiAgICA8L2Zvcm0+YCxcclxuICBcIm5ldy10YXNrXCI6IGA8Zm9ybSBkYXRhLWFjdGlvbi10eXBlPVwibmV3LXRhc2tcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJ0YXNrLXRpdGxlXCI+VGl0bGU8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCBpZD1cInRhc2stdGl0bGVcIiBuYW1lPVwidGl0bGVcIiB0eXBlPVwidGV4dFwiIG1heGxlbmd0aD1cIjM1XCIgcGxhY2Vob2xkZXI9XCJlLmc6IFN1bWJpdCBmZWVkYmFjayBmb3JtXCIgcmVxdWlyZWQ+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJ0YXNrLWRlc2NyaXB0aW9uXCI+RGVzY3JpcHRpb248L2xhYmVsPlxyXG4gICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwiZGVzY3JpcHRpb25cIiBpZD1cInRhc2stZGVzY3JpcHRpb25cIiBwbGFjZWhvbGRlcj1cIkdpdmUgYSBicmllZiBkZXNjcmlwbHRpb24gb2YgdGhlIHRhc2tcIj48L3RleHRhcmVhPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cclxuICAgICAgICA8bGFiZWwgZm9yPVwidGFzay1kdWVkYXRlXCI+RHVlIGRhdGU8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCBpZD1cInRhc2stZHVlZGF0ZVwiIG5hbWU9XCJkdWVEYXRlXCIgdHlwZT1cImRhdGVcIiByZXF1aXJlZD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XHJcbiAgICAgICAgPGxhYmVsPlByaW9yaXR5PC9sYWJlbD5cclxuICAgICAgICA8ZGl2IGlkPVwicmFkaW8tYnRucy1jbnRyXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGlkPVwidGFzay1wcmlvcml0eS1oXCIgbmFtZT1cInByaW9yaXR5XCIgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCJoaWdoXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidGFzay1wcmlvcml0eS1oXCI+SGlnaDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJ0YXNrLXByaW9yaXR5LW1cIiBuYW1lPVwicHJpb3JpdHlcIiB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cIm1lZGl1bVwiIHJlcXVpcmVkPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRhc2stcHJpb3JpdHktbVwiPk1lZGl1bTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJ0YXNrLXByaW9yaXR5LWxcIiBuYW1lPVwicHJpb3JpdHlcIiB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cImxvd1wiIHJlcXVpcmVkPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRhc2stcHJpb3JpdHktbFwiPkxvdzwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2F2ZTwvYnV0dG9uPlxyXG48L2Zvcm0+YCxcclxufTtcclxuXHJcbmZ1bmN0aW9uIHN3aXRoVGFiKGUpIHtcclxuICAvLyBEbyBub3RoaW5nIGlmIHVzZXIgY2xpY2tzIGFuIGFjdGl2ZSB0YWJcclxuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSByZXR1cm47XHJcblxyXG4gIC8vIFJlbW92ZSB0aGUgY2xhc3MsICdhY3RpdmUtcGFnZScgYW5kICdhY3RpdmUnXHJcbiAgcGFnZXMuZm9yRWFjaCgocGFnZSkgPT4ge1xyXG4gICAgaWYgKHBhZ2UuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlLXBhZ2VcIikpIHtcclxuICAgICAgcGFnZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLXBhZ2VcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgdGFicy5mb3JFYWNoKCh0YWIpID0+IHtcclxuICAgIGlmICh0YWIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XHJcbiAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAvLyBBZGQgdGhlIGNsYXNzLCAnYWN0aXZlLXBhZ2UnICYgJ2FjdGl2ZSdhbmQgY2hhbmdlIGNyZWF0ZUJ0biB0ZXh0XHJcbiAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRhcmdldC12YWx1ZVwiKTtcclxuICBzd2l0Y2ggKHRhcmdldCkge1xyXG4gICAgY2FzZSBcImhvbWVcIjpcclxuICAgICAgaG9tZVBhZ2UuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1wYWdlXCIpO1xyXG4gICAgICBjcmVhdGVCdG4udGV4dENvbnRlbnQgPSBcIk5ldyBQcm9qZWN0XCI7XHJcbiAgICAgIGNyZWF0ZUJ0bi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWRpYWxvZ3VlXCIsIFwicHJvamVjdFwiKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwicHJvamVjdHNcIjpcclxuICAgICAgcHJvamVjdHNQYWdlLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtcGFnZVwiKTtcclxuICAgICAgY3JlYXRlQnRuLnRleHRDb250ZW50ID0gXCJOZXcgUHJvamVjdFwiO1xyXG4gICAgICBjcmVhdGVCdG4uc2V0QXR0cmlidXRlKFwiZGF0YS1kaWFsb2d1ZVwiLCBcInByb2plY3RcIik7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcIm5vdGVzXCI6XHJcbiAgICAgIG5vdGVzUGFnZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLXBhZ2VcIik7XHJcbiAgICAgIGNyZWF0ZUJ0bi50ZXh0Q29udGVudCA9IFwiTmV3IE5vdGVcIjtcclxuICAgICAgY3JlYXRlQnRuLnNldEF0dHJpYnV0ZShcImRhdGEtZGlhbG9ndWVcIiwgXCJub3RlXCIpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCJtb3JlXCI6XHJcbiAgICAgIG1vcmVQYWdlLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtcGFnZVwiKTtcclxuICB9XHJcblxyXG4gIGRvY3VtZW50LnRpdGxlID0gXCJUb2RvTGlzdCAtIFwiICsgdGFyZ2V0WzBdLnRvVXBwZXJDYXNlKCkgKyB0YXJnZXQuc2xpY2UoMSk7XHJcbiAgdG9nZ2xlTWVudSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnZva2VBY3Rpb24oZSwgZWxlbSkge1xyXG4gIGlmIChlLnRhcmdldCAhPT0gZS5jdXJyZW50VGFyZ2V0KSB7XHJcbiAgICBpZiAoZWxlbS5pZCA9PT0gXCJjbG9zZS1tb2RhbFwiKSB7XHJcbiAgICAgIGNsb3NlTW9kYWwoKTtcclxuICAgIH0gZWxzZSBpZiAoZWxlbS5pZCA9PT0gXCJyZXNldC1idG5cIikge1xyXG4gICAgICBvcGVuQ29uZmlybURpYWxvZ3VlKHsgYWN0aW9uOiBcInJlc2V0XCIgfSk7XHJcbiAgICB9IGVsc2UgaWYgKGVsZW0uaWQgPT09IFwiY2FuY2VsLWJ0blwiKSB7XHJcbiAgICAgIGNsb3NlTW9kYWwoKTtcclxuICAgIH0gZWxzZSBpZiAoZWxlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFjdGlvbi10eXBlXCIpID09PSBcIm5ldy10YXNrXCIpIHtcclxuICAgICAgY29uc3QgYWN0aW9uID0gZWxlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFjdGlvbi10eXBlXCIpO1xyXG4gICAgICBjb25zdCBwaW5kZXggPSBwYXJzZUludChlbGVtLmdldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdFwiKSk7XHJcbiAgICAgIG9wZW5EaWFsb2d1ZSh7IGFjdGlvbiwgcGluZGV4IH0pO1xyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAoZWxlbSA9PT0gY3JlYXRlQnRuKSB7XHJcbiAgICBjb25zdCBhY3Rpb24gPSBgbmV3LSR7Y3JlYXRlQnRuLmdldEF0dHJpYnV0ZShcImRhdGEtZGlhbG9ndWVcIil9YDtcclxuICAgIG9wZW5EaWFsb2d1ZSh7IGFjdGlvbiB9KTtcclxuICB9IGVsc2UgaWYgKGVsZW0gPT09IG1vZGFsKSB7XHJcbiAgICBjbG9zZU1vZGFsKCk7XHJcbiAgfVxyXG4gIGlmIChlbGVtID09PSBtZW51SWNvbikge1xyXG4gICAgdG9nZ2xlTWVudSgpO1xyXG4gIH1cclxuXHJcbiAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxufVxyXG5cclxuZnVuY3Rpb24gb3BlbkRpYWxvZ3VlKGRpYWxvZ3VlKSB7XHJcbiAgbW9kYWxDb250ZW50LmlubmVySFRNTCA9IG1vZGFsRm9ybXNbZGlhbG9ndWUuYWN0aW9uXSB8fCBcIlwiO1xyXG4gIG1vZGFsVGl0bGUudGV4dENvbnRlbnQgPSBkaWFsb2d1ZS5hY3Rpb24uc3BsaXQoXCItXCIpLmpvaW4oXCIgXCIpO1xyXG5cclxuICBpZiAoZGlhbG9ndWUuYWN0aW9uID09PSBcIm5ldy10YXNrXCIpIHtcclxuICAgIG1vZGFsQ29udGVudFxyXG4gICAgICAucXVlcnlTZWxlY3RvcihcImJ1dHRvblt0eXBlPSdzdWJtaXQnXVwiKVxyXG4gICAgICAuc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0XCIsIGRpYWxvZ3VlLnBpbmRleCk7XHJcbiAgfSBlbHNlIGlmIChkaWFsb2d1ZS5hY3Rpb24gPT09IFwidmlldy10YXNrXCIpIHtcclxuICAgIG1vZGFsQ29udGVudC5pbm5lckhUTUwgPSBgPGRpdiBpZD1cImRldGFpbHNcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICAgIDxkaXY+VGl0bGU8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICA8ZGl2PkRlc2NyaXB0aW9uPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgPGRpdj5EdWUgZGF0ZTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+JHtcclxuICAgICAgICAgICAgICAgIGlzVG9kYXkobmV3IERhdGUoZGlhbG9ndWUuZHVlRGF0ZSkpXHJcbiAgICAgICAgICAgICAgICAgID8gXCJUb2RheVwiXHJcbiAgICAgICAgICAgICAgICAgIDogaXNUb21vcnJvdyhuZXcgRGF0ZShkaWFsb2d1ZS5kdWVEYXRlKSlcclxuICAgICAgICAgICAgICAgICAgPyBcIlRvbW9ycm93XCJcclxuICAgICAgICAgICAgICAgICAgOiBsaWdodEZvcm1hdChwYXJzZUlTTyhuZXcgRGF0ZShkaWFsb2d1ZS5kdWVEYXRlKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKSksIFwiZGQvTU0veXl5eVwiKVxyXG4gICAgICAgICAgICAgIH08L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgPGRpdj5Qcmlvcml0eTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWxibC0ke2RpYWxvZ3VlLnByaW9yaXR5WzBdfVwiPiR7ZGlhbG9ndWUucHJpb3JpdHl9PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+YDtcclxuICAgIG1vZGFsQ29udGVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBcIi5maWVsZDpmaXJzdC1jaGlsZCA+IGRpdjpsYXN0LWNoaWxkXCJcclxuICAgICkudGV4dENvbnRlbnQgPSBkaWFsb2d1ZS50aXRsZTtcclxuICAgIG1vZGFsQ29udGVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBcIi5maWVsZDpudGgtY2hpbGQoMikgPiBkaXY6bGFzdC1jaGlsZFwiXHJcbiAgICApLnRleHRDb250ZW50ID0gZGlhbG9ndWUuZGVzY3JpcHRpb24gPyBkaWFsb2d1ZS5kZXNjcmlwdGlvbiA6IFwiTm9uZVwiO1xyXG4gIH0gZWxzZSBpZiAoZGlhbG9ndWUuYWN0aW9uID09PSBcImVkaXQtcHJvamVjdFwiKSB7XHJcbiAgICBtb2RhbENvbnRlbnQuaW5uZXJIVE1MID0gYDxmb3JtIGRhdGEtYWN0aW9uLXR5cGU9XCJlZGl0LXByb2plY3RcIiBkYXRhLXByb2plY3Q9XCIke2RpYWxvZ3VlLmluZGV4fVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwicHJvamVjdC10aXRsZVwiPlRpdGxlPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IGlkPVwicHJvamVjdC10aXRsZVwiIG5hbWU9XCJ0aXRsZVwiIHR5cGU9XCJ0ZXh0XCIgbWF4bGVuZ3RoPVwiNDBcIiB2YWx1ZT1cIiR7ZGlhbG9ndWUudGl0bGV9XCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2F2ZTwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+YDtcclxuICB9IGVsc2UgaWYgKGRpYWxvZ3VlLmFjdGlvbiA9PT0gXCJlZGl0LXRhc2tcIikge1xyXG4gICAgbW9kYWxDb250ZW50LmlubmVySFRNTCA9IGA8Zm9ybSBkYXRhLWFjdGlvbi10eXBlPVwiZWRpdC10YXNrXCIgZGF0YS1wcm9qZWN0PVwiJHtkaWFsb2d1ZS5waW5kZXh9XCIgZGF0YS10YXNrPVwiJHtkaWFsb2d1ZS50aW5kZXh9XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidGFzay10aXRsZVwiPlRpdGxlPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJ0YXNrLXRpdGxlXCIgbmFtZT1cInRpdGxlXCIgdHlwZT1cInRleHRcIiBtYXhsZW5ndGg9XCIzNVwiIHZhbHVlPVwiJHtkaWFsb2d1ZS50aXRsZX1cIiByZXF1aXJlZD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRhc2stZGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGlkPVwidGFzay1kZXNjcmlwdGlvblwiPiR7ZGlhbG9ndWUuZGVzY3JpcHRpb259PC90ZXh0YXJlYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRhc2stZHVlZGF0ZVwiPkR1ZSBkYXRlPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJ0YXNrLWR1ZWRhdGVcIiBuYW1lPVwiZHVlRGF0ZVwiIHR5cGU9XCJkYXRlXCIgdmFsdWU9XCIke2RpYWxvZ3VlLmR1ZURhdGUudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCl9XCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbD5Qcmlvcml0eTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGRpdiBpZD1cInJhZGlvLWJ0bnMtY250clwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInRhc2stcHJpb3JpdHktaFwiIG5hbWU9XCJwcmlvcml0eVwiIHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiaGlnaFwiIHJlcXVpcmVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRhc2stcHJpb3JpdHktaFwiPkhpZ2g8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwidGFzay1wcmlvcml0eS1tXCIgbmFtZT1cInByaW9yaXR5XCIgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCJtZWRpdW1cIiByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0YXNrLXByaW9yaXR5LW1cIj5NZWRpdW08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwidGFzay1wcmlvcml0eS1sXCIgbmFtZT1cInByaW9yaXR5XCIgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCJsb3dcIiByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0YXNrLXByaW9yaXR5LWxcIj5Mb3c8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlNhdmU8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPmA7XHJcbiAgICBtb2RhbENvbnRlbnQucXVlcnlTZWxlY3RvcihgI3Rhc2stcHJpb3JpdHktJHtkaWFsb2d1ZS5wcmlvcml0eS50b0xvd2VyQ2FzZSgpWzBdfWApLmNoZWNrZWQgPSB0cnVlO1xyXG4gIH0gZWxzZSBpZiAoZGlhbG9ndWUuYWN0aW9uID09PSBcImVkaXQtbm90ZVwiKSB7XHJcbiAgICBtb2RhbENvbnRlbnQuaW5uZXJIVE1MID0gYDxmb3JtIGRhdGEtYWN0aW9uLXR5cGU9XCJlZGl0LW5vdGVcIiBkYXRhLW5vdGU9XCIke2RpYWxvZ3VlLmluZGV4fVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwibm90ZS10aXRsZVwiPlRpdGxlPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IGlkPVwibm90ZS10aXRsZVwiIG5hbWU9XCJ0aXRsZVwiIHR5cGU9XCJ0ZXh0XCIgbWF4bGVuZ3RoPVwiNDBcIiB2YWx1ZT1cIiR7ZGlhbG9ndWUudGl0bGV9XCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJub3RlLWNvbnRlbnRcIj5Ob3RlPC9sYWJlbD5cclxuICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJub3RlXCIgaWQ9XCJub3RlLWNvbnRlbnRcIj4ke2RpYWxvZ3VlLm5vdGV9PC90ZXh0YXJlYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TYXZlPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5gO1xyXG4gIH1cclxuICBvcGVuTW9kYWwoKTtcclxufVxyXG5mdW5jdGlvbiBvcGVuQ29uZmlybURpYWxvZ3VlKGRpYWxvZ3VlKSB7XHJcbiAgaWYgKGRpYWxvZ3VlLmFjdGlvbiA9PT0gXCJyZXNldFwiKSB7XHJcbiAgICBtb2RhbFRpdGxlLnRleHRDb250ZW50ID0gXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gcmVzZXQ/XCI7XHJcbiAgICBtb2RhbENvbnRlbnQuaW5uZXJIVE1MID0gYDxkaXYgaWQ9XCJjb25maXJtXCI+XHJcbiAgICAgICAgICA8YnV0dG9uIGlkPVwiZGVsZXRlLWJ0blwiIHR5cGU9XCJidXR0b25cIiBkYXRhLWFjdGlvbi10eXBlPVwicmVzZXQtZGF0YVwiPlJlc2V0PC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIGlkPVwiY2FuY2VsLWJ0blwiIHR5cGU9XCJidXR0b25cIj5DYW5jZWw8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+YDtcclxuICB9IGVsc2UgaWYgKGRpYWxvZ3VlLmFjdGlvbi5pbmNsdWRlcyhcImRlbGV0ZVwiKSkge1xyXG4gICAgbW9kYWxUaXRsZS50ZXh0Q29udGVudCA9IFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZT9cIlxyXG4gICAgbW9kYWxDb250ZW50LmlubmVySFRNTCA9IGA8ZGl2IGlkPVwiY29uZmlybVwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBpZD1cImRlbGV0ZS1idG5cIiBkYXRhLWNvbmZpcm0tZGVsZXRlIGRhdGEtYWN0aW9uLXR5cGU9XCIke2RpYWxvZ3VlLmFjdGlvbn1cIiB0eXBlPVwiYnV0dG9uXCI+RGVsZXRlPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIGlkPVwiY2FuY2VsLWJ0blwiIHR5cGU9XCJidXR0b25cIj5DYW5jZWw8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+YDtcclxuICAgIGNvbnN0IHBhcmVudCA9IG1vZGFsQ29udGVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbmZpcm1cIik7XHJcblxyXG4gICAgaWYgKGRpYWxvZ3VlLmFjdGlvbiA9PT0gXCJkZWxldGUtdGFza1wiKSB7XHJcbiAgICAgIHBhcmVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3RcIiwgZGlhbG9ndWUucGluZGV4KTtcclxuICAgICAgcGFyZW50LnNldEF0dHJpYnV0ZShcImRhdGEtdGFza1wiLCBkaWFsb2d1ZS50aW5kZXgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcGFyZW50LnNldEF0dHJpYnV0ZShgZGF0YSR7ZGlhbG9ndWUuYWN0aW9uLnNsaWNlKDYpfWAsIGRpYWxvZ3VlLmluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9wZW5Nb2RhbCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvcGVuTW9kYWwoKSB7XHJcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxufVxyXG5mdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xyXG4gIG1vZGFsQ29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZU1lbnUoKSB7XHJcbiAgbWVudUljb24ucGFyZW50RWxlbWVudC50b2dnbGVBdHRyaWJ1dGUoXCJkYXRhLW1lbnUtYWN0aXZlXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJEYXRhKGRhdGEpIHtcclxuICBjb25zdCBwcm9qZWN0cyA9IGRhdGEucHJvamVjdHMsXHJcbiAgICBub3RlcyA9IGRhdGEubm90ZXMsXHJcbiAgICBwcm9qZWN0c0NvbnRhaW5lciA9IHByb2plY3RzUGFnZS5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzLWNvbnRyXCIpLFxyXG4gICAgbm90ZXNDb250YWluZXIgPSBub3Rlc1BhZ2UucXVlcnlTZWxlY3RvcihcIiNub3Rlcy1jb250clwiKSxcclxuICAgIHRvZGF5c1Rhc2tDb250ciA9IGhvbWVQYWdlLnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMtY29udHJcIiksXHJcbiAgICB0aGlzV2Vla3NUYXNrc0NvbnRyID0gZG9jdW1lbnRcclxuICAgICAgLmdldEVsZW1lbnRCeUlkKFwidGhpcy13ZWVrLWNvbnRyXCIpXHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzLWNvbnRyXCIpO1xyXG5cclxuICBwcm9qZWN0c0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIG5vdGVzQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgdG9kYXlzVGFza0NvbnRyLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgdGhpc1dlZWtzVGFza3NDb250ci5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyBUb2RheSdzIHRhc2tzXHJcbiAgICBpZiAocHJvamVjdHNbaV0uZ2V0VG9kYXlzVGFza3MoKVswXSkge1xyXG4gICAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxcclxuICAgICAgICB0YXNrcyA9IHByb2plY3RzW2ldLnNvcnRlZFRhc2tzO1xyXG4gICAgICBlbGVtLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwicHJvamVjdC1uYW1lLWNvbnRyXCIgZGF0YS1wcm9qZWN0PVwiJHtpfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcm9qZWN0LW5hbWVcIj48L3NwYW4+PHN2ZyBkYXRhLWFjdGlvbi10eXBlPVwiZGVsZXRlLXByb2plY3RcIiBjbGFzcz1cImFjdGlvbnNcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT5EZWxldGU8L3RpdGxlPjxwYXRoIGQ9XCJNMTQuMTIsMTAuNDdMMTIsMTIuNTlMOS44NywxMC40N0w4LjQ2LDExLjg4TDEwLjU5LDE0TDguNDcsMTYuMTJMOS44OCwxNy41M0wxMiwxNS40MUwxNC4xMiwxNy41M0wxNS41MywxNi4xMkwxMy40MSwxNEwxNS41MywxMS44OEwxNC4xMiwxMC40N00xNS41LDRMMTQuNSwzSDkuNUw4LjUsNEg1VjZIMTlWNEgxNS41TTYsMTlBMiwyIDAgMCwwIDgsMjFIMTZBMiwyIDAgMCwwIDE4LDE5VjdINlYxOU04LDlIMTZWMTlIOFY5WlwiIC8+PC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+PC91bD5gO1xyXG4gICAgICBlbGVtLnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1uYW1lXCIpLnRleHRDb250ZW50ID0gcHJvamVjdHNbaV0udGl0bGU7XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGFza3MubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICBpZiAoaXNUb2RheSh0YXNrc1tqXS5kdWVEYXRlKSkge1xyXG4gICAgICAgICAgY29uc3QgbGlzdEVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgICBsaXN0RWxlbS5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJmbGV4LWxpc3QtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmbGV4LWxpc3QtZWxlbVwiPjxzcGFuIGNsYXNzPVwidGFzay1uYW1lXCI+PC9zcGFuPjxzcGFuIGNsYXNzPVwidGFzay1sYmwtJHt0YXNrc1tqXS5wcmlvcml0eVswXX1cIj4ke3Rhc2tzW2pdLnByaW9yaXR5fTwvc3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZsZXgtbGlzdC1lbGVtXCIgZGF0YS1wcm9qZWN0PVwiJHtpfVwiIGRhdGEtdGFzaz1cIiR7an1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBkYXRhLWFjdGlvbi10eXBlPVwidmlldy10YXNrXCIgY2xhc3M9XCJhY3Rpb25zXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+VmlldyBpbmZvPC90aXRsZT48cGF0aCBkPVwiTTEzIDlIMTFWN0gxM1Y5TTEzIDE3SDExVjExSDEzVjE3TTUgM0gxOUMyMC4xIDMgMjEgMy44OSAyMSA1VjE5QzIxIDE5LjUzIDIwLjc5IDIwLjA0IDIwLjQxIDIwLjQxQzIwLjA0IDIwLjc5IDE5LjUzIDIxIDE5IDIxSDVDNC40NyAyMSAzLjk2IDIwLjc5IDMuNTkgMjAuNDFDMy4yMSAyMC4wNCAzIDE5LjUzIDMgMTlWNUMzIDMuODkgMy44OSAzIDUgM00xOSAxOVY1SDVWMTlIMTlaXCIgLz48L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBkYXRhLWFjdGlvbi10eXBlPVwiZWRpdC10YXNrXCIgY2xhc3M9XCJhY3Rpb25zXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+RWRpdDwvdGl0bGU+PHBhdGggZD1cIk01LDNDMy44OSwzIDMsMy44OSAzLDVWMTlBMiwyIDAgMCwwIDUsMjFIMTlBMiwyIDAgMCwwIDIxLDE5VjEySDE5VjE5SDVWNUgxMlYzSDVNMTcuNzgsNEMxNy42MSw0IDE3LjQzLDQuMDcgMTcuMyw0LjJMMTYuMDgsNS40MUwxOC41OCw3LjkxTDE5LjgsNi43QzIwLjA2LDYuNDQgMjAuMDYsNiAxOS44LDUuNzVMMTguMjUsNC4yQzE4LjEyLDQuMDcgMTcuOTUsNCAxNy43OCw0TTE1LjM3LDYuMTJMOCwxMy41VjE2SDEwLjVMMTcuODcsOC42MkwxNS4zNyw2LjEyWlwiIC8+PC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgZGF0YS1hY3Rpb24tdHlwZT1cImRlbGV0ZS10YXNrXCIgY2xhc3M9XCJhY3Rpb25zXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+RGVsZXRlPC90aXRsZT48cGF0aCBkPVwiTTE0LjEyLDEwLjQ3TDEyLDEyLjU5TDkuODcsMTAuNDdMOC40NiwxMS44OEwxMC41OSwxNEw4LjQ3LDE2LjEyTDkuODgsMTcuNTNMMTIsMTUuNDFMMTQuMTIsMTcuNTNMMTUuNTMsMTYuMTJMMTMuNDEsMTRMMTUuNTMsMTEuODhMMTQuMTIsMTAuNDdNMTUuNSw0TDE0LjUsM0g5LjVMOC41LDRINVY2SDE5VjRIMTUuNU02LDE5QTIsMiAwIDAsMCA4LDIxSDE2QTIsMiAwIDAsMCAxOCwxOVY3SDZWMTlNOCw5SDE2VjE5SDhWOVpcIiAvPjwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5gO1xyXG4gICAgICAgICAgbGlzdEVsZW0ucXVlcnlTZWxlY3RvcihcIi50YXNrLW5hbWVcIikudGV4dENvbnRlbnQgPSB0YXNrc1tqXS50aXRsZTtcclxuICAgICAgICAgIGVsZW0ucXVlcnlTZWxlY3RvcihcInVsXCIpLmFwcGVuZENoaWxkKGxpc3RFbGVtKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdG9kYXlzVGFza0NvbnRyLmFwcGVuZENoaWxkKGVsZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRoaXMgd2VlaydzIHRhc2tzXHJcbiAgICBpZiAocHJvamVjdHNbaV0uZ2V0VGhpc1dlZWtzVGFza3MoKVswXSkge1xyXG4gICAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICBlbGVtLmNsYXNzTmFtZSA9IFwiZmxleC1saXN0LWl0ZW1cIjtcclxuICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3RcIiwgaS50b1N0cmluZygpKTtcclxuXHJcbiAgICAgIGVsZW0uaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwicHJvamVjdC1uYW1lXCI+PC9zcGFuPlxyXG4gICAgICAgIDxzdmcgZGF0YS1hY3Rpb24tdHlwZT1cImRlbGV0ZS1wcm9qZWN0XCIgY2xhc3M9XCJhY3Rpb25zXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+RGVsZXRlPC90aXRsZT48cGF0aCBkPVwiTTE0LjEyLDEwLjQ3TDEyLDEyLjU5TDkuODcsMTAuNDdMOC40NiwxMS44OEwxMC41OSwxNEw4LjQ3LDE2LjEyTDkuODgsMTcuNTNMMTIsMTUuNDFMMTQuMTIsMTcuNTNMMTUuNTMsMTYuMTJMMTMuNDEsMTRMMTUuNTMsMTEuODhMMTQuMTIsMTAuNDdNMTUuNSw0TDE0LjUsM0g5LjVMOC41LDRINVY2SDE5VjRIMTUuNU02LDE5QTIsMiAwIDAsMCA4LDIxSDE2QTIsMiAwIDAsMCAxOCwxOVY3SDZWMTlNOCw5SDE2VjE5SDhWOVpcIiAvPjwvc3ZnPmA7XHJcblxyXG4gICAgICBlbGVtLnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1uYW1lXCIpLnRleHRDb250ZW50ID0gcHJvamVjdHNbaV0udGl0bGU7XHJcbiAgICAgIHRoaXNXZWVrc1Rhc2tzQ29udHIuYXBwZW5kQ2hpbGQoZWxlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHJvamVjdHMgcGFnZVxyXG4gICAgY29uc3QgcHJvamVjdE5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgdGFza3MgPSBwcm9qZWN0c1tpXS5zb3J0ZWRUYXNrcztcclxuICAgIHByb2plY3ROb2RlLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwicHJvamVjdC1uYW1lLWNvbnRyXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJwcm9qZWN0LW5hbWVcIj48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJhY3Rucy1jb250clwiIGRhdGEtcHJvamVjdD1cIiR7aX1cIj5cclxuICAgICAgICAgICAgPHN2ZyBkYXRhLWFjdGlvbi10eXBlPVwiZWRpdC1wcm9qZWN0XCIgY2xhc3M9XCJhY3Rpb25zXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cclxuICAgICAgICAgICAgICA8dGl0bGU+RWRpdDwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgPHBhdGggZD1cIk01LDNDMy44OSwzIDMsMy44OSAzLDVWMTlBMiwyIDAgMCwwIDUsMjFIMTlBMiwyIDAgMCwwIDIxLDE5VjEySDE5VjE5SDVWNUgxMlYzSDVNMTcuNzgsNEMxNy42MSw0IDE3LjQzLDQuMDcgMTcuMyw0LjJMMTYuMDgsNS40MUwxOC41OCw3LjkxTDE5LjgsNi43QzIwLjA2LDYuNDQgMjAuMDYsNiAxOS44LDUuNzVMMTguMjUsNC4yQzE4LjEyLDQuMDcgMTcuOTUsNCAxNy43OCw0TTE1LjM3LDYuMTJMOCwxMy41VjE2SDEwLjVMMTcuODcsOC42MkwxNS4zNyw2LjEyWlwiIC8+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8c3ZnIGRhdGEtYWN0aW9uLXR5cGU9XCJkZWxldGUtcHJvamVjdFwiIGNsYXNzPVwiYWN0aW9uc1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XHJcbiAgICAgICAgICAgICAgPHRpdGxlPkRlbGV0ZTwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNC4xMiwxMC40N0wxMiwxMi41OUw5Ljg3LDEwLjQ3TDguNDYsMTEuODhMMTAuNTksMTRMOC40NywxNi4xMkw5Ljg4LDE3LjUzTDEyLDE1LjQxTDE0LjEyLDE3LjUzTDE1LjUzLDE2LjEyTDEzLjQxLDE0TDE1LjUzLDExLjg4TDE0LjEyLDEwLjQ3TTE1LjUsNEwxNC41LDNIOS41TDguNSw0SDVWNkgxOVY0SDE1LjVNNiwxOUEyLDIgMCAwLDAgOCwyMUgxNkEyLDIgMCAwLDAgMTgsMTlWN0g2VjE5TTgsOUgxNlYxOUg4VjlaXCIgLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8dWw+PC91bD5cclxuICAgIDxidXR0b24gZGF0YS1hY3Rpb24tdHlwZT1cIm5ldy10YXNrXCIgZGF0YS1wcm9qZWN0PVwiJHtpfVwiPkFkZCBUYXNrPC9idXR0b24+YDtcclxuICAgIHByb2plY3ROb2RlLnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1uYW1lXCIpLnRleHRDb250ZW50ID0gcHJvamVjdHNbaV0udGl0bGU7XHJcblxyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCB0YXNrcy5sZW5ndGg7IGorKykge1xyXG4gICAgICBjb25zdCB0YXNrTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgdGFza05vZGUuY2xhc3NOYW1lID0gXCJmbGV4LWxpc3QtaXRlbVwiXHJcbiAgICAgIHRhc2tOb2RlLmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cImZsZXgtbGlzdC1lbGVtXCI+PHNwYW4gY2xhc3M9XCJ0YXNrLW5hbWVcIj48L3NwYW4+PHNwYW4gY2xhc3M9XCJ0YXNrLWxibC0ke3Rhc2tzW2pdLnByaW9yaXR5WzBdfVwiPiR7dGFza3Nbal0ucHJpb3JpdHl9PC9zcGFuPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBkYXRhLXByb2plY3Q9XCIke2l9XCIgZGF0YS10YXNrPVwiJHtqfVwiIGNsYXNzPVwiZmxleC1saXN0LWVsZW1cIj5cclxuICAgICAgICAgICAgPHN2ZyBkYXRhLWFjdGlvbi10eXBlPVwidmlldy10YXNrXCIgY2xhc3M9XCJhY3Rpb25zXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cclxuICAgICAgICAgICAgICA8dGl0bGU+VmlldyBpbmZvPC90aXRsZT5cclxuICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEzIDlIMTFWN0gxM1Y5TTEzIDE3SDExVjExSDEzVjE3TTUgM0gxOUMyMC4xIDMgMjEgMy44OSAyMSA1VjE5QzIxIDE5LjUzIDIwLjc5IDIwLjA0IDIwLjQxIDIwLjQxQzIwLjA0IDIwLjc5IDE5LjUzIDIxIDE5IDIxSDVDNC40NyAyMSAzLjk2IDIwLjc5IDMuNTkgMjAuNDFDMy4yMSAyMC4wNCAzIDE5LjUzIDMgMTlWNUMzIDMuODkgMy44OSAzIDUgM00xOSAxOVY1SDVWMTlIMTlaXCIgLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDxzdmcgZGF0YS1hY3Rpb24tdHlwZT1cImVkaXQtdGFza1wiIGNsYXNzPVwiYWN0aW9uc1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XHJcbiAgICAgICAgICAgICAgPHRpdGxlPkVkaXQ8L3RpdGxlPlxyXG4gICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNSwzQzMuODksMyAzLDMuODkgMyw1VjE5QTIsMiAwIDAsMCA1LDIxSDE5QTIsMiAwIDAsMCAyMSwxOVYxMkgxOVYxOUg1VjVIMTJWM0g1TTE3Ljc4LDRDMTcuNjEsNCAxNy40Myw0LjA3IDE3LjMsNC4yTDE2LjA4LDUuNDFMMTguNTgsNy45MUwxOS44LDYuN0MyMC4wNiw2LjQ0IDIwLjA2LDYgMTkuOCw1Ljc1TDE4LjI1LDQuMkMxOC4xMiw0LjA3IDE3Ljk1LDQgMTcuNzgsNE0xNS4zNyw2LjEyTDgsMTMuNVYxNkgxMC41TDE3Ljg3LDguNjJMMTUuMzcsNi4xMlpcIiAvPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPHN2ZyBkYXRhLWFjdGlvbi10eXBlPVwiZGVsZXRlLXRhc2tcIiBjbGFzcz1cImFjdGlvbnNcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG4gICAgICAgICAgICAgIDx0aXRsZT5EZWxldGU8L3RpdGxlPlxyXG4gICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTQuMTIsMTAuNDdMMTIsMTIuNTlMOS44NywxMC40N0w4LjQ2LDExLjg4TDEwLjU5LDE0TDguNDcsMTYuMTJMOS44OCwxNy41M0wxMiwxNS40MUwxNC4xMiwxNy41M0wxNS41MywxNi4xMkwxMy40MSwxNEwxNS41MywxMS44OEwxNC4xMiwxMC40N00xNS41LDRMMTQuNSwzSDkuNUw4LjUsNEg1VjZIMTlWNEgxNS41TTYsMTlBMiwyIDAgMCwwIDgsMjFIMTZBMiwyIDAgMCwwIDE4LDE5VjdINlYxOU04LDlIMTZWMTlIOFY5WlwiIC8+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDwvc3Bhbj5gO1xyXG4gICAgICB0YXNrTm9kZS5xdWVyeVNlbGVjdG9yKFwiLnRhc2stbmFtZVwiKS50ZXh0Q29udGVudCA9IHRhc2tzW2pdLnRpdGxlO1xyXG4gICAgICBwcm9qZWN0Tm9kZS5xdWVyeVNlbGVjdG9yKFwidWxcIikuYXBwZW5kQ2hpbGQodGFza05vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEVtcHR5IHByb2plY3RcclxuICAgIGlmICghcHJvamVjdE5vZGUucXVlcnlTZWxlY3RvcihcInVsXCIpLmlubmVySFRNTCkgcHJvamVjdE5vZGUucXVlcnlTZWxlY3RvcihcInVsXCIpLmlubmVySFRNTCA9IFwiPGxpIGNsYXNzPSdlbXB0eS1jb250ZW50Jz5UaGlzIHByb2plY3QgaXMgZW1wdHksIGNsaWNrICdBZGQgVGFzaycgdG8gYWRkIGEgbmV3IHRhc2s8L2xpPlwiO1xyXG4gICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdE5vZGUpO1xyXG4gIH1cclxuICAvLyBJZiBubyB0YXNrcyBmb3IgdG9kYXkgYW5kIHRoaXMgd2Vla1xyXG4gIGlmICghdG9kYXlzVGFza0NvbnRyLmlubmVySFRNTCkgdG9kYXlzVGFza0NvbnRyLmlubmVySFRNTCA9IFwiPGRpdiBjbGFzcz0nZW1wdHktY29udGVudCc+Tm8gdGFza3MgZm9yIHRvZGF5ITwvZGl2PlwiO1xyXG4gIGlmICghdGhpc1dlZWtzVGFza3NDb250ci5pbm5lckhUTUwpIHRoaXNXZWVrc1Rhc2tzQ29udHIuaW5uZXJIVE1MID0gXCI8ZGl2IGNsYXNzPSdlbXB0eS1jb250ZW50Jz5Zb3UgYXJlIGdvb2QgdG8gZ28gZm9yIHRoaXMgd2VlayE8L2Rpdj5cIjtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBub3Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gICAgbm9kZS5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cIm5vdGUtdGl0bGUtY29udHJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJub3RlLXRpdGxlXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFjdG5zLWNvbnRyXCIgZGF0YS1ub3RlPVwiJHtpfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBkYXRhLWFjdGlvbi10eXBlPVwiZWRpdC1ub3RlXCIgY2xhc3M9XCJhY3Rpb25zXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGl0bGU+RWRpdDwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk01LDNDMy44OSwzIDMsMy44OSAzLDVWMTlBMiwyIDAgMCwwIDUsMjFIMTlBMiwyIDAgMCwwIDIxLDE5VjEySDE5VjE5SDVWNUgxMlYzSDVNMTcuNzgsNEMxNy42MSw0IDE3LjQzLDQuMDcgMTcuMyw0LjJMMTYuMDgsNS40MUwxOC41OCw3LjkxTDE5LjgsNi43QzIwLjA2LDYuNDQgMjAuMDYsNiAxOS44LDUuNzVMMTguMjUsNC4yQzE4LjEyLDQuMDcgMTcuOTUsNCAxNy43OCw0TTE1LjM3LDYuMTJMOCwxMy41VjE2SDEwLjVMMTcuODcsOC42MkwxNS4zNyw2LjEyWlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgZGF0YS1hY3Rpb24tdHlwZT1cImRlbGV0ZS1ub3RlXCIgY2xhc3M9XCJhY3Rpb25zXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGl0bGU+RGVsZXRlPC90aXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE0LjEyLDEwLjQ3TDEyLDEyLjU5TDkuODcsMTAuNDdMOC40NiwxMS44OEwxMC41OSwxNEw4LjQ3LDE2LjEyTDkuODgsMTcuNTNMMTIsMTUuNDFMMTQuMTIsMTcuNTNMMTUuNTMsMTYuMTJMMTMuNDEsMTRMMTUuNTMsMTEuODhMMTQuMTIsMTAuNDdNMTUuNSw0TDE0LjUsM0g5LjVMOC41LDRINVY2SDE5VjRIMTUuNU02LDE5QTIsMiAwIDAsMCA4LDIxSDE2QTIsMiAwIDAsMCAxOCwxOVY3SDZWMTlNOCw5SDE2VjE5SDhWOVpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm90ZWNvbnRlbnRcIj48L2Rpdj5gO1xyXG4gICAgbm9kZS5xdWVyeVNlbGVjdG9yKFwiLm5vdGUtdGl0bGVcIikudGV4dENvbnRlbnQgPSBub3Rlc1tpXS50aXRsZTtcclxuICAgIG5vZGUucXVlcnlTZWxlY3RvcihcIi5ub3RlY29udGVudFwiKS50ZXh0Q29udGVudCA9IG5vdGVzW2ldLm5vdGU7XHJcblxyXG4gICAgbm90ZXNDb250YWluZXIuYXBwZW5kQ2hpbGQobm9kZSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyB0YWJzLCBtZW51SWNvbiwgY3JlYXRlQnRuLCBtb2RhbCwgcGFnZXMsIHN3aXRoVGFiLCBpbnZva2VBY3Rpb24sIHJlbmRlckRhdGEsIG9wZW5EaWFsb2d1ZSwgb3BlbkNvbmZpcm1EaWFsb2d1ZSwgY2xvc2VNb2RhbCB9O1xyXG4iLCJpbXBvcnQgeyBpc1RoaXNXZWVrLCBpc1RvZGF5IH0gZnJvbSBcImRhdGUtZm5zXCI7XHJcblxyXG5jbGFzcyBQcm9qZWN0IHtcclxuICBjb25zdHJ1Y3Rvcih0aXRsZSwgdGFza3MpIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMudGFza3MgPSB0YXNrcztcclxuICB9XHJcbiAgZ2V0IHNvcnRlZFRhc2tzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudGFza3Muc29ydCgoYSwgYikgPT4gYS5kdWVEYXRlIC0gYi5kdWVEYXRlKTtcclxuICB9XHJcbiAgYWRkVGFzayh0YXNrKSB7XHJcbiAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XHJcbiAgfVxyXG4gIHJlbW92ZVRhc2soaW5kZXgpIHtcclxuICAgIHRoaXMudGFza3Muc3BsaWNlKGluZGV4LCAxKTtcclxuICB9XHJcbiAgZ2V0VG9kYXlzVGFza3MoKSB7XHJcbiAgICBjb25zdCB0b2RheXNUYXNrID0gW107XHJcbiAgICB0aGlzLnRhc2tzLmZvckVhY2godGFzayA9PiB7XHJcbiAgICAgIGlmIChpc1RvZGF5KHRhc2suZHVlRGF0ZSkpIHRvZGF5c1Rhc2sucHVzaCh0YXNrKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRvZGF5c1Rhc2s7XHJcbiAgfVxyXG4gIGdldFRoaXNXZWVrc1Rhc2tzKCkge1xyXG4gICAgY29uc3QgdGhpc1dlZWtzVGFzayA9IFtdO1xyXG4gICAgdGhpcy50YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xyXG4gICAgICBpZiAoaXNUaGlzV2Vlayh0YXNrLmR1ZURhdGUpKSB7XHJcbiAgICAgICAgdGhpc1dlZWtzVGFzay5wdXNoKHRhc2spO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB0aGlzV2Vla3NUYXNrO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgVGFzayB7XHJcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcGluZGV4KSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgdGhpcy5waW5kZXggPSAocGluZGV4ICE9PSB1bmRlZmluZWQpPyBwaW5kZXggOiAwO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgTm90ZSB7XHJcbiAgY29uc3RydWN0b3IodGl0bGUsIG5vdGUpIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMubm90ZSA9IG5vdGU7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBDaGVja0xpc3Qge1xyXG4gIGNvbnN0cnVjdG9yKGxpc3RUeHQpIHtcclxuICAgIHRoaXMubGlzdFR4dCA9IGxpc3RUeHQ7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBQcm9qZWN0LCBUYXNrLCBOb3RlLCBDaGVja0xpc3QgfTsiLCJjb25zdCBwdWJTdWIgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IGV2ZW50cyA9IHt9O1xyXG4gIFxyXG4gICAgZnVuY3Rpb24gc3Vic2NyaWJlKGV2ZW50LCBmbikge1xyXG4gICAgICBldmVudHNbZXZlbnRdID8gZXZlbnRzW2V2ZW50XS5wdXNoKGZuKSA6IChldmVudHNbZXZlbnRdID0gW2ZuXSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB1blN1YnNjcmliZShldmVudCwgZm4pIHtcclxuICAgICAgaWYgKGV2ZW50c1tldmVudF0pIHtcclxuICAgICAgICBldmVudHNbZXZlbnRdID0gZXZlbnRzW2V2ZW50XS5maWx0ZXIoKGZ1bmMpID0+IGZ1bmMgIT09IGZuKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcHVibGlzaChldmVudCwgZGF0YSkge1xyXG4gICAgICBpZiAoZXZlbnRzW2V2ZW50XSkgZXZlbnRzW2V2ZW50XS5mb3JFYWNoKChmbikgPT4gZm4oZGF0YSkpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgcmV0dXJuIHsgc3Vic2NyaWJlLCB1blN1YnNjcmliZSwgcHVibGlzaCB9O1xyXG4gIH0pKCk7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHB1YlN1YjsiLCJpbXBvcnQgeyBQcm9qZWN0LCBUYXNrLCBOb3RlIH0gZnJvbSBcIi4vcHJvamVjdHNUYXNrcy5qc1wiO1xyXG5pbXBvcnQgcHViU3ViIGZyb20gXCIuL3B1YlN1Yi5qc1wiO1xyXG5cclxuY29uc3QgU3RvcmFnZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgbGV0IHNhdmVkRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzYXZlZERhdGFcIikpIHx8IHtcclxuICAgIHByb2plY3RzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogXCJJbmJveFwiLFxyXG4gICAgICAgIHRhc2tzOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIlRyeSBvdXQgdGhpcyBhcHBsaWNhdGlvblwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJSZWFkICdXZWxjb21lIHRvIFRvZG9MaXN0JyBpbiB0aGUgbm90ZXMgcGFnZVwiLFxyXG4gICAgICAgICAgICBkdWVEYXRlOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgIHByaW9yaXR5OiBcIm1lZGl1bVwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICAgIG5vdGVzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogXCJXZWxjb21lIHRvIFRvZG9MaXN0XCIsXHJcbiAgICAgICAgbm90ZTogXCJPbiB0aGlzIHBhZ2UsIHlvdSBjYW4gd3JpdGUgbm90ZXMuXFxuVGhlIGhvbWVwYWdlIHNob3dzIHByb2plY3RzIGFuZCB0YXNrcyBkdWUgZm9yIHRvZGF5IGFuZCBwcm9qZWN0cyBkdWUgZm9yIHRoZSB3ZWVrLCB5b3UgY2FuIHZpZXcgYW5kIG1hbmlwdWxhdGUgcHJvamVjdHMgaW4gcHJvamVjdHMgcGFnZS5cXG5JbiAnTW9yZScgeW91IGNhbiB2aWV3IHRoZSAnQWJvdXQnIHNlY3Rpb24gYW5kICdTZXR0aW5ncycuXCIsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH07XHJcbiAgXHJcbiAgcHViU3ViLnN1YnNjcmliZShcImRhdGFDaGFuZ2VkXCIsIHNhdmVDaGFuZ2VzKTtcclxuICBwdWJTdWIuc3Vic2NyaWJlKFwicmVzZXREYXRhQWN0aW9uQ29uZmlybWVkXCIsIGNsZWFyRGF0YSk7XHJcblxyXG4gIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJoYXNWaXNpdGVkU2l0ZUJlZm9yZVwiKSkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJoYXNWaXNpdGVkU2l0ZUJlZm9yZVwiLCBcInRydWVcIik7XHJcblxyXG4gICAgLy8gV2VsY29tZSB1c2VyXHJcbiAgICBjb25zb2xlLmxvZyhcIldlbGNvbWUhXCIpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2F2ZUNoYW5nZXMoZGF0YSkge1xyXG4gICAgLy8gUmVzZXQgYXJyYXlzXHJcbiAgICBzYXZlZERhdGEucHJvamVjdHMgPSBbXTtcclxuICAgIHNhdmVkRGF0YS5ub3RlcyA9IFtdO1xyXG5cclxuICAgIC8vIFNhdmUgcHJvamVjdHNcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5wcm9qZWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBwcm9qZWN0ID0gZGF0YS5wcm9qZWN0c1tpXTtcclxuICAgICAgc2F2ZWREYXRhLnByb2plY3RzLnB1c2goe1xyXG4gICAgICAgIHRpdGxlOiBwcm9qZWN0LnRpdGxlLFxyXG4gICAgICAgIHRhc2tzOiBbXSxcclxuICAgICAgfSk7XHJcbiAgICAgIC8vIFNhdmUgdGFza3MgdG8gcHJvamVjdFxyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHByb2plY3QudGFza3MubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICBjb25zdCB0YXNrID0gcHJvamVjdC50YXNrc1tqXTtcclxuICAgICAgICBzYXZlZERhdGEucHJvamVjdHNbaV0udGFza3MucHVzaCh7XHJcbiAgICAgICAgICB0aXRsZTogdGFzay50aXRsZSxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiB0YXNrLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgZHVlRGF0ZTogbmV3IERhdGUodGFzay5kdWVEYXRlKS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgcHJpb3JpdHk6IHRhc2sucHJpb3JpdHksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBTYXZlIG5vdGVzXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubm90ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3Qgbm90ZSA9IGRhdGEubm90ZXNbaV07XHJcbiAgICAgIHNhdmVkRGF0YS5ub3Rlcy5wdXNoKHtcclxuICAgICAgICB0aXRsZTogbm90ZS50aXRsZSxcclxuICAgICAgICBub3RlOiBub3RlLm5vdGUsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic2F2ZWREYXRhXCIsIEpTT04uc3RyaW5naWZ5KHNhdmVkRGF0YSkpO1xyXG4gIH1cclxuICBcclxuICBmdW5jdGlvbiBjbGVhckRhdGEoKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0RGF0YSgpIHtcclxuICAgIGxldCBwcm9qZWN0cyA9IFtdLFxyXG4gICAgICBub3RlcyA9IFtdO1xyXG5cclxuICAgIC8vIFByb2plY3RzICYgVGFza3NcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2F2ZWREYXRhLnByb2plY3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdChzYXZlZERhdGEucHJvamVjdHNbaV0udGl0bGUsIFtdKTtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzYXZlZERhdGEucHJvamVjdHNbaV0udGFza3MubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICBwcm9qZWN0LnRhc2tzW2pdID0gbmV3IFRhc2soXHJcbiAgICAgICAgICBzYXZlZERhdGEucHJvamVjdHNbaV0udGFza3Nbal0udGl0bGUsXHJcbiAgICAgICAgICBzYXZlZERhdGEucHJvamVjdHNbaV0udGFza3Nbal0uZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICBuZXcgRGF0ZShzYXZlZERhdGEucHJvamVjdHNbaV0udGFza3Nbal0uZHVlRGF0ZSksXHJcbiAgICAgICAgICBzYXZlZERhdGEucHJvamVjdHNbaV0udGFza3Nbal0ucHJpb3JpdHlcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xyXG4gICAgfVxyXG4gICAgLy8gTm90ZXNcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2F2ZWREYXRhLm5vdGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIG5vdGVzLnB1c2gobmV3IE5vdGUoc2F2ZWREYXRhLm5vdGVzW2ldLnRpdGxlLCBzYXZlZERhdGEubm90ZXNbaV0ubm90ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHByb2plY3RzLCBub3RlcyB9O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsgZ2V0RGF0YSB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RvcmFnZTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gIH0sIF90eXBlb2Yob2JqKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBwdWJTdWIgZnJvbSBcIi4vbW9kdWxlcy9wdWJTdWIuanNcIjtcclxuaW1wb3J0IHsgUHJvamVjdCwgVGFzaywgTm90ZSB9IGZyb20gXCIuL21vZHVsZXMvcHJvamVjdHNUYXNrcy5qc1wiO1xyXG5pbXBvcnQgeyB0YWJzLCBtZW51SWNvbiwgY3JlYXRlQnRuLCBtb2RhbCwgcGFnZXMsIHN3aXRoVGFiLCBpbnZva2VBY3Rpb24sIHJlbmRlckRhdGEsIG9wZW5EaWFsb2d1ZSwgb3BlbkNvbmZpcm1EaWFsb2d1ZSwgY2xvc2VNb2RhbCB9IGZyb20gXCIuL21vZHVsZXMvZGlzcGxheS5qc1wiO1xyXG5pbXBvcnQgU3RvcmFnZSBmcm9tIFwiLi9tb2R1bGVzL3N0b3JhZ2UuanNcIjtcclxuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuXHJcbihmdW5jdGlvbigpIHtcclxuICBfaW5pdCgpO1xyXG4gIFxyXG4gIGZ1bmN0aW9uIF9pbml0KCkge1xyXG4gICAgYWRkRXZlbnRzVG9TdGF0aWNFbGVtZW50cygpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYWRkRXZlbnRzVG9TdGF0aWNFbGVtZW50cygpIHtcclxuICAgIHRhYnMuZm9yRWFjaCgoZWxlbSkgPT4gZWxlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3dpdGhUYWIpKTtcclxuICAgIG1lbnVJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBpbnZva2VBY3Rpb25zKTtcclxuICAgIGNyZWF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGludm9rZUFjdGlvbnMpO1xyXG4gICAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBpbnZva2VBY3Rpb25zKTtcclxuICAgIHBhZ2VzLmZvckVhY2gocGFnZSA9PiB7XHJcbiAgICAgIHBhZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBpbnZva2VBY3Rpb25zKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaW52b2tlQWN0aW9ucyhlKSB7XHJcbiAgICAvLyBNb3ZlIHVwIHRvIDxzdmc+IGlmIHRhcmdldCBlbGVtZW50IGlzIDxwYXRoPlxyXG4gICAgY29uc3QgZWxlbSA9XHJcbiAgICAgIGUudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJwYXRoXCJcclxuICAgICAgICA/IGUudGFyZ2V0LnBhcmVudEVsZW1lbnRcclxuICAgICAgICA6IGUudGFyZ2V0O1xyXG4gICAgaW52b2tlQWN0aW9uKGUsIGVsZW0pO1xyXG4gICAgaW52b2tlRGF0YUFjdGlvbihlLCBlbGVtKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gaW52b2tlRGF0YUFjdGlvbihlLCBlbGVtKSB7XHJcbiAgICBpZiAoZWxlbS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpID09PSBcInN1Ym1pdFwiKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIGNvbnN0IGZvcm0gPSBlbGVtLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBPYmplY3QuZnJvbUVudHJpZXMobmV3IEZvcm1EYXRhKGZvcm0pKTtcclxuICAgICAgbGV0IGlzVmFsaWQgPSBPYmplY3QudmFsdWVzKGRhdGEpLmV2ZXJ5KChlbnRyeSkgPT4gZW50cnkpO1xyXG5cclxuICAgICAgaWYgKGlzVmFsaWQpIHtcclxuICAgICAgICBjb25zdCBhY3Rpb24gPSBmb3JtLmdldEF0dHJpYnV0ZShcImRhdGEtYWN0aW9uLXR5cGVcIik7XHJcbiAgICAgICAgbGV0IGVudHJ5O1xyXG4gICAgICAgIGlmIChhY3Rpb24gPT09IFwibmV3LXByb2plY3RcIikge1xyXG4gICAgICAgICAgZW50cnkgPSBuZXcgUHJvamVjdChkYXRhLnRpdGxlLCBbXSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChhY3Rpb24gPT09IFwibmV3LW5vdGVcIikge1xyXG4gICAgICAgICAgZW50cnkgPSBuZXcgTm90ZShkYXRhLnRpdGxlLCBkYXRhLm5vdGUpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYWN0aW9uID09PSBcIm5ldy10YXNrXCIpIHtcclxuICAgICAgICAgIGVudHJ5ID0gbmV3IFRhc2soXHJcbiAgICAgICAgICAgIGRhdGEudGl0bGUsXHJcbiAgICAgICAgICAgIGRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIG5ldyBEYXRlKGRhdGEuZHVlRGF0ZSksXHJcbiAgICAgICAgICAgIGRhdGEucHJpb3JpdHkgPyBkYXRhLnByaW9yaXR5IDogXCJtZWRpdW1cIixcclxuICAgICAgICAgICAgcGFyc2VJbnQoZWxlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3RcIikpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYWN0aW9uID09PSBcImVkaXQtcHJvamVjdFwiKSB7XHJcbiAgICAgICAgICBlbnRyeSA9IHtcclxuICAgICAgICAgICAgYWN0aW9uLFxyXG4gICAgICAgICAgICB0aXRsZTogZGF0YS50aXRsZSxcclxuICAgICAgICAgICAgaW5kZXg6IHBhcnNlSW50KGZvcm0uZ2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0XCIpKSxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfSBlbHNlIGlmIChhY3Rpb24gPT09IFwiZWRpdC10YXNrXCIpIHtcclxuICAgICAgICAgIGVudHJ5ID0ge1xyXG4gICAgICAgICAgICBhY3Rpb24sXHJcbiAgICAgICAgICAgIHBpbmRleDogcGFyc2VJbnQoZm9ybS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3RcIikpLFxyXG4gICAgICAgICAgICB0aW5kZXg6IHBhcnNlSW50KGZvcm0uZ2V0QXR0cmlidXRlKFwiZGF0YS10YXNrXCIpKSxcclxuICAgICAgICAgICAgdGFzazogbmV3IFRhc2soXHJcbiAgICAgICAgICAgICAgZGF0YS50aXRsZSxcclxuICAgICAgICAgICAgICBkYXRhLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgIG5ldyBEYXRlKGRhdGEuZHVlRGF0ZSksXHJcbiAgICAgICAgICAgICAgZGF0YS5wcmlvcml0eSA/IGRhdGEucHJpb3JpdHkgOiBcIm1lZGl1bVwiLFxyXG4gICAgICAgICAgICAgIHBhcnNlSW50KGZvcm0uZ2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0XCIpKSxcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfSBlbHNlIGlmIChhY3Rpb24gPT09IFwiZWRpdC1ub3RlXCIpIHtcclxuICAgICAgICAgIGVudHJ5ID0ge1xyXG4gICAgICAgICAgICBhY3Rpb24sXHJcbiAgICAgICAgICAgIGluZGV4OiBwYXJzZUludChmb3JtLmdldEF0dHJpYnV0ZShcImRhdGEtbm90ZVwiKSksXHJcbiAgICAgICAgICAgIG5vdGU6IG5ldyBOb3RlKGRhdGEudGl0bGUsIGRhdGEubm90ZSksXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2xvc2VNb2RhbCgpO1xyXG4gICAgICAgIHB1YlN1Yi5wdWJsaXNoKFwiZm9ybVN1Ym1pdHRlZFwiLCBlbnRyeSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoZWxlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFjdGlvbi10eXBlXCIpKSB7XHJcbiAgICAgIC8vIERhdGEgcmVhZCBtYW5pcHVsYXRpb24gYWN0aW9uc1xyXG4gICAgICBjb25zdCBhY3Rpb24gPSBlbGVtLmdldEF0dHJpYnV0ZShcImRhdGEtYWN0aW9uLXR5cGVcIik7XHJcblxyXG4gICAgICBpZiAoYWN0aW9uLmluY2x1ZGVzKFwiZGVsZXRlXCIpICYmIGVsZW0uaGFzQXR0cmlidXRlKFwiZGF0YS1jb25maXJtLWRlbGV0ZVwiKSkge1xyXG4gICAgICAgIC8vIERlbGV0ZSBhY3Rpb24gY29uZmlybWVkXHJcbiAgICAgICAgaWYgKGFjdGlvbiA9PT0gXCJkZWxldGUtdGFza1wiKSB7XHJcbiAgICAgICAgICBjb25zdCBwaW5kZXggPSBwYXJzZUludChlbGVtLnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0XCIpKTtcclxuICAgICAgICAgIGNvbnN0IHRpbmRleCA9IHBhcnNlSW50KGVsZW0ucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRhc2tcIikpO1xyXG4gICAgICAgICAgcHViU3ViLnB1Ymxpc2goXCJkZWxldGVFbnRpdHlcIiwgeyBhY3Rpb24sIHBpbmRleCwgdGluZGV4IH0pO1xyXG4gICAgICAgICAgY2xvc2VNb2RhbCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zdCBpbmRleCA9XHJcbiAgICAgICAgICAgIHBhcnNlSW50KGVsZW0ucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3RcIikpIHx8XHJcbiAgICAgICAgICAgIHBhcnNlSW50KGVsZW0ucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLW5vdGVcIikpO1xyXG4gICAgICAgICAgcHViU3ViLnB1Ymxpc2goXCJkZWxldGVFbnRpdHlcIiwgeyBhY3Rpb24sIGluZGV4IH0pO1xyXG4gICAgICAgICAgY2xvc2VNb2RhbCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChhY3Rpb24uaW5jbHVkZXMoXCJkZWxldGVcIikpIHtcclxuICAgICAgICAvLyBPcGVuIGNvbmZpcm0gZGlhbG9ndWUgZm9yIGRlbGV0ZSBpY29uc1xyXG4gICAgICAgIGlmIChhY3Rpb24gPT09IFwiZGVsZXRlLXRhc2tcIikge1xyXG4gICAgICAgICAgY29uc3QgcGluZGV4ID0gcGFyc2VJbnQoZWxlbS5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdFwiKSk7XHJcbiAgICAgICAgICBjb25zdCB0aW5kZXggPSBwYXJzZUludChlbGVtLnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS10YXNrXCIpKTtcclxuICAgICAgICAgIG9wZW5Db25maXJtRGlhbG9ndWUoeyBhY3Rpb24sIHBpbmRleCwgdGluZGV4IH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zdCBpbmRleCA9XHJcbiAgICAgICAgICAgIHBhcnNlSW50KGVsZW0ucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3RcIikpIHx8XHJcbiAgICAgICAgICAgIHBhcnNlSW50KGVsZW0ucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLW5vdGVcIikpO1xyXG4gICAgICAgICAgICBvcGVuQ29uZmlybURpYWxvZ3VlKHsgYWN0aW9uLCBpbmRleCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAoYWN0aW9uLmluY2x1ZGVzKFwidmlld1wiKSkge1xyXG4gICAgICAgIGlmIChhY3Rpb24gPT09IFwidmlldy10YXNrXCIpIHtcclxuICAgICAgICAgIC8vIE9wZW4gdmlldyB0YXNrIG1vZGFsXHJcbiAgICAgICAgICBjb25zdCB0YXNrID0gcHJvamVjdHNIYW5kbGVyLmdldFRhc2soXHJcbiAgICAgICAgICAgIHBhcnNlSW50KGVsZW0ucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3RcIikpLFxyXG4gICAgICAgICAgICBwYXJzZUludChlbGVtLnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS10YXNrXCIpKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIG9wZW5EaWFsb2d1ZSh7XHJcbiAgICAgICAgICAgIGFjdGlvbixcclxuICAgICAgICAgICAgdGl0bGU6IHRhc2sudGl0bGUsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0YXNrLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICBkdWVEYXRlOiB0YXNrLmR1ZURhdGUsXHJcbiAgICAgICAgICAgIHByaW9yaXR5OiB0YXNrLnByaW9yaXR5LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKGFjdGlvbi5pbmNsdWRlcyhcImVkaXRcIikpIHtcclxuICAgICAgICBpZiAoYWN0aW9uID09PSBcImVkaXQtcHJvamVjdFwiKSB7XHJcbiAgICAgICAgICAvLyBPcGVuIGVkaXQgcHJvamVjdCBtb2RhbFxyXG4gICAgICAgICAgY29uc3QgaW5kZXggPSBwYXJzZUludChcclxuICAgICAgICAgICAgZWxlbS5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdFwiKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0c0hhbmRsZXIuZ2V0UHJvamVjdChpbmRleCk7XHJcbiAgICAgICAgICBvcGVuRGlhbG9ndWUoe1xyXG4gICAgICAgICAgICBhY3Rpb24sXHJcbiAgICAgICAgICAgIGluZGV4LFxyXG4gICAgICAgICAgICB0aXRsZTogcHJvamVjdC50aXRsZSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYWN0aW9uID09PSBcImVkaXQtdGFza1wiKSB7XHJcbiAgICAgICAgICAvLyBPcGVuIGVkaXQgdGFzayBtb2RhbFxyXG4gICAgICAgICAgY29uc3QgcGluZGV4ID0gcGFyc2VJbnQoXHJcbiAgICAgICAgICAgICAgZWxlbS5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdFwiKVxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICB0aW5kZXggPSBwYXJzZUludChlbGVtLnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS10YXNrXCIpKSxcclxuICAgICAgICAgICAgdGFzayA9IHByb2plY3RzSGFuZGxlci5nZXRUYXNrKHBpbmRleCwgdGluZGV4KTtcclxuICAgICAgICAgIG9wZW5EaWFsb2d1ZSh7XHJcbiAgICAgICAgICAgIGFjdGlvbixcclxuICAgICAgICAgICAgcGluZGV4LFxyXG4gICAgICAgICAgICB0aW5kZXgsXHJcbiAgICAgICAgICAgIHRpdGxlOiB0YXNrLnRpdGxlLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGFzay5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgZHVlRGF0ZTogdGFzay5kdWVEYXRlLFxyXG4gICAgICAgICAgICBwcmlvcml0eTogdGFzay5wcmlvcml0eSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYWN0aW9uID09PSBcImVkaXQtbm90ZVwiKSB7XHJcbiAgICAgICAgICBjb25zdCBpbmRleCA9IHBhcnNlSW50KGVsZW0ucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLW5vdGVcIikpO1xyXG4gICAgICAgICAgb3BlbkRpYWxvZ3VlKHtcclxuICAgICAgICAgICAgYWN0aW9uLFxyXG4gICAgICAgICAgICBpbmRleCxcclxuICAgICAgICAgICAgdGl0bGU6IHByb2plY3RzSGFuZGxlci5nZXROb3RlKGluZGV4KS50aXRsZSxcclxuICAgICAgICAgICAgbm90ZTogcHJvamVjdHNIYW5kbGVyLmdldE5vdGUoaW5kZXgpLm5vdGUsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChhY3Rpb24gPT09IFwicmVzZXQtZGF0YVwiKSB7XHJcbiAgICAgICAgcHViU3ViLnB1Ymxpc2goXCJyZXNldERhdGFBY3Rpb25Db25maXJtZWRcIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YlN1Yi5zdWJzY3JpYmUoXCJkYXRhQ2hhbmdlZFwiLCByZW5kZXJEYXRhKTtcclxufSkoKVxyXG5cclxuY29uc3QgcHJvamVjdHNIYW5kbGVyID0gKGZ1bmN0aW9uICgpIHtcclxuICBsZXQgcHJvamVjdHMgPSBbXSxcclxuICAgIG5vdGVzID0gW107XHJcblxyXG4gIF9pbml0KCk7XHJcblxyXG4gIGZ1bmN0aW9uIF9pbml0KCkge1xyXG4gICAgcHJvamVjdHMgPSBTdG9yYWdlLmdldERhdGEoKS5wcm9qZWN0cztcclxuICAgIG5vdGVzID0gU3RvcmFnZS5nZXREYXRhKCkubm90ZXM7XHJcblxyXG4gICAgcHViU3ViLnB1Ymxpc2goJ2RhdGFDaGFuZ2VkJywgeyBwcm9qZWN0cywgbm90ZXMgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBhZGRQcm9qZWN0KHByb2plY3QpIHtcclxuICAgIHByb2plY3RzLnB1c2gocHJvamVjdCk7XHJcbiAgICBwdWJTdWIucHVibGlzaCgnZGF0YUNoYW5nZWQnLCB7IHByb2plY3RzLCBub3RlcyB9KTtcclxuICB9XHJcbiAgZnVuY3Rpb24gYWRkVGFza1RvUHJvamVjdChpbmRleCwgdGFzaykge1xyXG4gICAgcHJvamVjdHNbaW5kZXhdLmFkZFRhc2sodGFzayk7XHJcbiAgICBwdWJTdWIucHVibGlzaCgnZGF0YUNoYW5nZWQnLCB7IHByb2plY3RzLCBub3RlcyB9KTtcclxuICB9XHJcbiAgZnVuY3Rpb24gYWRkTm90ZShub3RlKSB7XHJcbiAgICBub3Rlcy5wdXNoKG5vdGUpO1xyXG4gICAgcHViU3ViLnB1Ymxpc2goJ2RhdGFDaGFuZ2VkJywgeyBwcm9qZWN0cywgbm90ZXMgfSk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHJlbW92ZVByb2plY3QoaW5kZXgpIHtcclxuICAgIHByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICBwdWJTdWIucHVibGlzaCgnZGF0YUNoYW5nZWQnLCB7IHByb2plY3RzLCBub3RlcyB9KTtcclxuICB9XHJcbiAgZnVuY3Rpb24gcmVtb3ZlVGFza0Zyb21Qcm9qZWN0KHBpbmRleCwgdGluZGV4KSB7XHJcbiAgICBwcm9qZWN0c1twaW5kZXhdLnJlbW92ZVRhc2sodGluZGV4KTtcclxuICAgIHB1YlN1Yi5wdWJsaXNoKCdkYXRhQ2hhbmdlZCcsIHsgcHJvamVjdHMsIG5vdGVzIH0pO1xyXG4gIH1cclxuICBmdW5jdGlvbiByZW1vdmVOb3RlKGluZGV4KSB7XHJcbiAgICBub3Rlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgcHViU3ViLnB1Ymxpc2goJ2RhdGFDaGFuZ2VkJywgeyBwcm9qZWN0cywgbm90ZXMgfSk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGdldFRhc2socGluZGV4LCB0aW5kZXgpIHtcclxuICAgIHJldHVybiBwcm9qZWN0c1twaW5kZXhdLnRhc2tzW3RpbmRleF07XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGdldFByb2plY3QoaW5kZXgpIHtcclxuICAgIHJldHVybiBwcm9qZWN0c1tpbmRleF07XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGdldE5vdGUoaW5kZXgpIHtcclxuICAgIHJldHVybiBub3Rlc1tpbmRleF07XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGFkZEVudHJ5KGVudHJ5KSB7XHJcbiAgICBpZiAoZW50cnkgaW5zdGFuY2VvZiBQcm9qZWN0KSB7XHJcbiAgICAgIGFkZFByb2plY3QoZW50cnkpO1xyXG4gICAgfSBlbHNlIGlmIChlbnRyeSBpbnN0YW5jZW9mIFRhc2spIHtcclxuICAgICAgYWRkVGFza1RvUHJvamVjdChlbnRyeS5waW5kZXgsIGVudHJ5KTtcclxuICAgIH0gZWxzZSBpZiAoZW50cnkgaW5zdGFuY2VvZiBOb3RlKSB7XHJcbiAgICAgIGFkZE5vdGUoZW50cnkpO1xyXG4gICAgfVxyXG4gIH1cclxuICBmdW5jdGlvbiB1cGRhdGVFbnRyeShkYXRhKSB7XHJcbiAgICBpZiAoZGF0YS5hY3Rpb24gPT09IFwiZWRpdC1wcm9qZWN0XCIpIHtcclxuICAgICAgcHJvamVjdHNbZGF0YS5pbmRleF0udGl0bGUgPSBkYXRhLnRpdGxlO1xyXG4gICAgfSBlbHNlIGlmIChkYXRhLmFjdGlvbiA9PT0gXCJlZGl0LXRhc2tcIikge1xyXG4gICAgICBwcm9qZWN0c1tkYXRhLnBpbmRleF0udGFza3NbZGF0YS50aW5kZXhdID0gZGF0YS50YXNrO1xyXG4gICAgfSBlbHNlIGlmIChkYXRhLmFjdGlvbiA9PT0gXCJlZGl0LW5vdGVcIikge1xyXG4gICAgICBub3Rlc1tkYXRhLmluZGV4XSA9IGRhdGEubm90ZTtcclxuICAgIH1cclxuICAgIHB1YlN1Yi5wdWJsaXNoKCdkYXRhQ2hhbmdlZCcsIHsgcHJvamVjdHMsIG5vdGVzIH0pO1xyXG4gIH1cclxuICBmdW5jdGlvbiBkZWxldGVPYmooZW50aXR5KSB7XHJcbiAgICBpZiAoZW50aXR5LmFjdGlvbiA9PT0gXCJkZWxldGUtdGFza1wiKSB7XHJcbiAgICAgIHJlbW92ZVRhc2tGcm9tUHJvamVjdChlbnRpdHkucGluZGV4LCBlbnRpdHkudGluZGV4KTtcclxuICAgIH0gZWxzZSBpZiAoZW50aXR5LmFjdGlvbiA9PT0gXCJkZWxldGUtcHJvamVjdFwiKSB7XHJcbiAgICAgIHJlbW92ZVByb2plY3QoZW50aXR5LmluZGV4KTtcclxuICAgIH0gZWxzZSBpZiAoZW50aXR5LmFjdGlvbiA9PT0gXCJkZWxldGUtbm90ZVwiKSB7XHJcbiAgICAgIHJlbW92ZU5vdGUoZW50aXR5LmluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YlN1Yi5zdWJzY3JpYmUoXCJmb3JtU3VibWl0dGVkXCIsIGFkZEVudHJ5KTtcclxuICBwdWJTdWIuc3Vic2NyaWJlKFwiZm9ybVN1Ym1pdHRlZFwiLCB1cGRhdGVFbnRyeSk7XHJcbiAgcHViU3ViLnN1YnNjcmliZShcImRlbGV0ZUVudGl0eVwiLCBkZWxldGVPYmopO1xyXG5cclxuICByZXR1cm4geyBnZXRUYXNrLCBnZXRQcm9qZWN0LCBnZXROb3RlIH07XHJcbn0pKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9