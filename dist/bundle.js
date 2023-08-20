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

* {
    box-sizing: border-box;
}
html {
    --largepad: 15px;
    --mediumpad: 8px;
    --smallpad: 3px;
    --smallrad: 3px;
    --mediumrad: 8px;
    --largerad: 15px;
    --shadow: 0px 1px 5px 0px #00000080;
    --dangerbgcolor: #c54949;
    --prty-high: #ffcdc1;
    --prty-medium: #fff19f;
    --prty-low: #cbffce;
    --bgdark: royalblue;
    --bglight: white;
    --fglight: white;
    --fgdark: black;
}
body {
    font-family: 'WorkSans', 'Open Sans', sans-serif;
    display: grid;
    grid-template: auto minmax(120vh, 250%) / 70vw 1fr;
    gap: 1em;
    margin: 0;
    padding-left: 1rem;
    background-color: var(--bglight);
    color: var(--fgdark);
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
    padding-left: var(--largepad);
    font-size: large;
}
.empty-content img {
    display: block;
    max-width: 50%;
}
li.empty-content {
    margin: 1rem 0;
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
svg {
    height: 1.5rem;
    width: 1.5rem;
    cursor: pointer;
    fill: var(--fgdark);
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
#modal-message {
    display: none;
}
#modal-message.active {
    display: block;
    background-color: #ffb9b9;
    padding: var(--mediumpad);
    border-radius: var(--smallrad);
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
    color: var(--fgdark);
    background-color: transparent;
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
button:disabled {
    opacity: 0.5;
}

/* Dark theme */
body[data-theme-dark="true"] {
    --bglight: #3d3d3d;
    --fglight: black;
    --fgdark: #e6e6e6;
    --shadow: 0px 1px 5px 0px #0000009f;
}
body[data-theme-dark="true"] #home-page h2:first-child,
body[data-theme-dark="true"] #more-page h2 {
    color: var(--fgdark);
}
body[data-theme-dark="true"] button {
    color: var(--fgdark);
}
body[data-theme-dark="true"] #modal-content input[type="radio"]:checked~label[for|="task-priority"],
body[data-theme-dark="true"] .task-lbl-h,
body[data-theme-dark="true"] .task-lbl-l,
body[data-theme-dark="true"] .task-lbl-m {
    color: var(--fglight);
}
body[data-theme-dark="true"] #modal-message.active {
    background-color: var(--dangerbgcolor);
}
body[data-theme-dark="true"] #sidebar {
    color: var(--fgdark);
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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AACf;AACA;IACI,aAAa;AACjB;AACA;IACI,cAAc;IACd,yBAAyB;IACzB,yBAAyB;IACzB,8BAA8B;AAClC;AACA;IACI,iCAAiC;IACjC,gCAAgC;IAChC,wBAAwB;IACxB,+BAA+B;IAC/B,eAAe;IACf,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;AACA;IACI,aAAa;IACb,8BAA8B;AAClC;AACA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,yBAAyB;AAC7B;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,eAAe;AACnB;AACA;;IAEI,YAAY;IACZ,aAAa;IACb,SAAS;IACT,sBAAsB;AAC1B;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;AACf;AACA;;IAEI,eAAe;IACf,uBAAuB;IACvB,yCAAyC;IACzC,gBAAgB;IAChB,YAAY;IACZ,wBAAwB;IACxB,oBAAoB;IACpB,6BAA6B;AACjC;AACA;IACI,iBAAiB;IACjB,8BAA8B;AAClC;AACA;;;;IAII,aAAa;AACjB;AACA;IACI,aAAa;AACjB;AACA;IACI,eAAe;IACf,yBAAyB;IACzB,kBAAkB;IAClB,mBAAmB;IACnB,wBAAwB;IACxB,oBAAoB;IACpB,8BAA8B;IAC9B,iBAAiB;AACrB;AACA;;IAEI,kCAAkC;AACtC;AACA;;IAEI,oCAAoC;AACxC;AACA;;IAEI,iCAAiC;AACrC;AACA;IACI,aAAa;IACb,WAAW;AACf;AACA;IACI,mBAAmB;AACvB;AACA;IACI,gBAAgB;AACpB;AACA;;;IAGI,sBAAsB;AAC1B;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,SAAS;AACb;AACA;IACI,sCAAsC;AAC1C;AACA;IACI,2BAA2B;IAC3B,6BAA6B;AACjC;AACA;IACI,YAAY;AAChB;;AAEA,eAAe;AACf;IACI,kBAAkB;IAClB,gBAAgB;IAChB,iBAAiB;IACjB,mCAAmC;AACvC;AACA;;IAEI,oBAAoB;AACxB;AACA;IACI,oBAAoB;AACxB;AACA;;;;IAII,qBAAqB;AACzB;AACA;IACI,sCAAsC;AAC1C;AACA;IACI,oBAAoB;AACxB;;AAEA,gBAAgB;AAChB;IACI;QACI,aAAa;QACb,sBAAsB;QACtB,YAAY;QACZ,SAAS;QACT,UAAU;IACd;IACA;QACI,cAAc;IAClB;IACA;QACI,+BAA+B;QAC/B,oBAAoB;QACpB,kBAAkB;QAClB,wBAAwB;IAC5B;IACA;QACI,SAAS;IACb;IACA;QACI,aAAa;IACjB;IACA;QACI,eAAe;QACf,SAAS;QACT,OAAO;QACP,QAAQ;QACR,aAAa;QACb,uBAAuB;QACvB,mBAAmB;QACnB,oCAAoC;IACxC;IACA;QACI,mBAAmB;QACnB,gBAAgB;QAChB,gBAAgB;IACpB;AACJ","sourcesContent":["/* General */\r\n@font-face {\r\n    font-family: 'WorkSans';\r\n    src: url('./fonts/WorkSans-VariableFont_wght.ttf') format('truetype');\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n}\r\nhtml {\r\n    --largepad: 15px;\r\n    --mediumpad: 8px;\r\n    --smallpad: 3px;\r\n    --smallrad: 3px;\r\n    --mediumrad: 8px;\r\n    --largerad: 15px;\r\n    --shadow: 0px 1px 5px 0px #00000080;\r\n    --dangerbgcolor: #c54949;\r\n    --prty-high: #ffcdc1;\r\n    --prty-medium: #fff19f;\r\n    --prty-low: #cbffce;\r\n    --bgdark: royalblue;\r\n    --bglight: white;\r\n    --fglight: white;\r\n    --fgdark: black;\r\n}\r\nbody {\r\n    font-family: 'WorkSans', 'Open Sans', sans-serif;\r\n    display: grid;\r\n    grid-template: auto minmax(120vh, 250%) / 70vw 1fr;\r\n    gap: 1em;\r\n    margin: 0;\r\n    padding-left: 1rem;\r\n    background-color: var(--bglight);\r\n    color: var(--fgdark);\r\n}\r\nheader {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: var(--largepad) 0;\r\n}\r\nheader h1 {\r\n    margin: 0;\r\n}\r\n#menu-icon {\r\n    display: none;\r\n}\r\nbutton {\r\n    cursor: pointer;\r\n    padding: calc(var(--mediumpad) + 3px);\r\n    border-radius: var(--mediumrad);\r\n    border: none;\r\n    color: var(--fglight);\r\n    background-color: var(--bgdark);\r\n}\r\nbutton:active {\r\n    color: var(--bgdark);\r\n    background-color: transparent;\r\n}\r\n#newbtn {\r\n    padding: 0.5rem 1.5rem;\r\n    border-radius: var(--largerad);\r\n    cursor: pointer;\r\n    border: none;\r\n    font-weight: bold;\r\n    box-shadow: var(--shadow);\r\n}\r\n#newbtn:active {\r\n    box-shadow: none;\r\n}\r\n#main > div:not(.active-page) {\r\n    display: none;\r\n}\r\n#menu-icon {\r\n    display: none;\r\n}\r\n#sidebar {\r\n    background: var(--bgdark);\r\n    color: var(--fglight);\r\n    grid-row: 1 / -1;\r\n    grid-column: 2 / -1;\r\n}\r\n#sidebar ul {\r\n    list-style: none;\r\n    padding-left: 0;\r\n    margin: var(--largepad);\r\n    font-size: large;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 16px;\r\n}\r\n.tabs {\r\n    cursor: pointer;\r\n}\r\n.tabs.active {\r\n    font-weight: bold;\r\n}\r\n\r\n/* home */\r\n#home-page h2:first-child {\r\n    color: var(--bgdark);\r\n}\r\n#home-page ul {\r\n    list-style: none;\r\n    padding-left: 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 5px;\r\n}\r\n.empty-content {\r\n    padding-left: var(--largepad);\r\n    font-size: large;\r\n}\r\n.empty-content img {\r\n    display: block;\r\n    max-width: 50%;\r\n}\r\nli.empty-content {\r\n    margin: 1rem 0;\r\n}\r\n.project-name {\r\n    font-size: large;\r\n    font-weight: bold;\r\n}\r\n.projects-contr {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\r\n    gap: 8px;\r\n}\r\n.projects-contr > div:not(.empty-content) {\r\n    border-radius: var(--mediumrad);\r\n    padding: var(--mediumpad);\r\n    box-shadow: var(--shadow);\r\n    display: grid;\r\n    grid-template-rows: auto 1fr auto;\r\n}\r\n.project-name-contr {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n.flex-list-item {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: var(--mediumpad);\r\n    border-radius: var(--mediumrad);\r\n}\r\n.projects-contr li:not(:first-child) {\r\n    border-top: 1px solid;\r\n}\r\n.flex-list-elem {\r\n    display: flex;\r\n    gap: 5px;\r\n    align-items: center;\r\n}\r\n#this-week-contr .flex-list-item {\r\n    border: none;\r\n    box-shadow: var(--shadow);\r\n}\r\n.task-name {\r\n    max-width: 110px;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n}\r\n.task-lbl-l,\r\n.task-lbl-m,\r\n.task-lbl-h {\r\n    text-transform: uppercase;\r\n    font-size: x-small;\r\n    letter-spacing: 1px;\r\n    padding: var(--smallpad);\r\n    color: var(--fgdark);\r\n    border-radius: var(--smallrad);\r\n    border: 1px solid;\r\n}\r\nsvg {\r\n    height: 1.5rem;\r\n    width: 1.5rem;\r\n    cursor: pointer;\r\n    fill: var(--fgdark);\r\n}\r\n#this-week-contr ul {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\r\n    gap: 8px;\r\n}\r\n\r\n/* projects */\r\n#projects-page {\r\n    margin: 1.2rem 0;\r\n}\r\n#projects-page ul {\r\n    padding-left: 0;\r\n    list-style: none;\r\n}\r\n#projects-page .flex-list-item {\r\n    border-radius: 0;\r\n}\r\n\r\n/* notes */\r\n#notes-contr {\r\n    display: grid;\r\n    gap: 8px;\r\n    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\r\n    margin: 1.5rem 0;\r\n}\r\n#notes-contr > div {\r\n    box-shadow: var(--shadow);\r\n    padding: var(--mediumpad);\r\n    border-radius: var(--mediumrad);\r\n}\r\n.note-title-contr {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n.note-title {\r\n    font-weight: bold;\r\n}\r\n.notecontent {\r\n    padding: var(--mediumpad);\r\n    margin: 1rem 0;\r\n    white-space: pre-wrap;\r\n    word-break: break-word;\r\n}\r\n\r\n/* About & Settings (More) page */\r\n#more-page {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n}\r\n#more-page h2 {\r\n    color: var(--bgdark);\r\n}\r\n#more-page a {\r\n    text-decoration: none;\r\n    color: var(--bgdark);\r\n    font-weight: 600;\r\n    cursor: pointer;\r\n}\r\n#reset-btn {\r\n    background-color: var(--dangerbgcolor);\r\n}\r\n#reset-btn:active {\r\n    color: var(--dangerbgcolor);\r\n    background-color: transparent;\r\n}\r\n\r\n/* modal */\r\n#modal.active {\r\n    display: flex !important;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: #00000030;\r\n    z-index: 10;\r\n}\r\n#modal-message {\r\n    display: none;\r\n}\r\n#modal-message.active {\r\n    display: block;\r\n    background-color: #ffb9b9;\r\n    padding: var(--mediumpad);\r\n    border-radius: var(--smallrad);\r\n}\r\n#modal-box {\r\n    box-shadow: 0 0 5px 3px #00000020;\r\n    background-color: var(--bglight);\r\n    padding: var(--largepad);\r\n    border-radius: var(--mediumrad);\r\n    flex: 1 0 280px;\r\n    margin: 0 35%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n}\r\n#modal-box > div:first-child {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n#modal-title {\r\n    font-size: 1.25rem;\r\n    font-weight: bold;\r\n    text-transform: lowercase;\r\n}\r\n#modal-title::first-letter {\r\n    text-transform: uppercase;\r\n}\r\n#close-modal {\r\n    cursor: pointer;\r\n}\r\n#modal-content form,\r\n#modal-content > div {\r\n    border: none;\r\n    display: flex;\r\n    gap: 1rem;\r\n    flex-direction: column;\r\n}\r\n#modal-content .field {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.1rem;\r\n}\r\n#modal-content input,\r\n#modal-content textarea {\r\n    cursor: pointer;\r\n    font-family: 'WorkSans';\r\n    padding: var(--smallpad) var(--mediumpad);\r\n    margin: 0 0.2rem;\r\n    border: none;\r\n    border-bottom: 1px solid;\r\n    color: var(--fgdark);\r\n    background-color: transparent;\r\n}\r\n#modal-content textarea {\r\n    border: 1px solid;\r\n    border-radius: var(--smallrad);\r\n}\r\n#modal-content input:active,\r\n#modal-content textarea:active,\r\n#modal-content input:focus,\r\n#modal-content textarea:focus {\r\n    outline: none;\r\n}\r\n#modal-content input[type=\"radio\"] {\r\n    display: none;\r\n}\r\n#modal-content label[for|=\"task-priority\"] {\r\n    cursor: pointer;\r\n    text-transform: uppercase;\r\n    font-size: x-small;\r\n    letter-spacing: 1px;\r\n    padding: var(--smallpad);\r\n    color: var(--fgdark);\r\n    border-radius: var(--smallrad);\r\n    border: 1px solid;\r\n}\r\n.task-lbl-h,\r\n#modal-content input[type=\"radio\"]:checked ~ label[for=\"task-priority-h\"] {\r\n    background-color: var(--prty-high);\r\n}\r\n.task-lbl-m,\r\n#modal-content input[type=\"radio\"]:checked ~ label[for=\"task-priority-m\"] {\r\n    background-color: var(--prty-medium);\r\n}\r\n.task-lbl-l,\r\n#modal-content input[type=\"radio\"]:checked ~ label[for=\"task-priority-l\"] {\r\n    background-color: var(--prty-low);\r\n}\r\n#radio-btns-cntr {\r\n    display: flex;\r\n    gap: 0.5rem;\r\n}\r\n#details .field > div:first-child {\r\n    letter-spacing: 1px;\r\n}\r\n#details .field > div:last-child {\r\n    font-weight: 500;\r\n}\r\n#details .task-lbl-h,\r\n#details .task-lbl-l,\r\n#details .task-lbl-m {\r\n    align-self: flex-start;\r\n}\r\ndiv#confirm {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    gap: 1rem;\r\n}\r\n#delete-btn {\r\n    background-color: var(--dangerbgcolor);\r\n}\r\n#delete-btn:active {\r\n    color: var(--dangerbgcolor);\r\n    background-color: transparent;\r\n}\r\nbutton:disabled {\r\n    opacity: 0.5;\r\n}\r\n\r\n/* Dark theme */\r\nbody[data-theme-dark=\"true\"] {\r\n    --bglight: #3d3d3d;\r\n    --fglight: black;\r\n    --fgdark: #e6e6e6;\r\n    --shadow: 0px 1px 5px 0px #0000009f;\r\n}\r\nbody[data-theme-dark=\"true\"] #home-page h2:first-child,\r\nbody[data-theme-dark=\"true\"] #more-page h2 {\r\n    color: var(--fgdark);\r\n}\r\nbody[data-theme-dark=\"true\"] button {\r\n    color: var(--fgdark);\r\n}\r\nbody[data-theme-dark=\"true\"] #modal-content input[type=\"radio\"]:checked~label[for|=\"task-priority\"],\r\nbody[data-theme-dark=\"true\"] .task-lbl-h,\r\nbody[data-theme-dark=\"true\"] .task-lbl-l,\r\nbody[data-theme-dark=\"true\"] .task-lbl-m {\r\n    color: var(--fglight);\r\n}\r\nbody[data-theme-dark=\"true\"] #modal-message.active {\r\n    background-color: var(--dangerbgcolor);\r\n}\r\nbody[data-theme-dark=\"true\"] #sidebar {\r\n    color: var(--fgdark);\r\n}\r\n\r\n/* Media query */\r\n@media (max-width: 680px) {\r\n    body {\r\n        display: flex;\r\n        flex-direction: column;\r\n        margin: 1rem;\r\n        gap: 2rem;\r\n        padding: 0;\r\n    }\r\n    #menu-icon {\r\n        display: unset;\r\n    }\r\n    header[data-menu-active] #menu-icon {\r\n        background-color: var(--bgdark);\r\n        fill: var(--fglight);\r\n        border-radius: 50%;\r\n        padding: var(--smallpad);\r\n    }\r\n    .projects-contr {\r\n        gap: 1rem;\r\n    }\r\n    #sidebar {\r\n        display: none;\r\n    }\r\n    header[data-menu-active] ~ #sidebar {\r\n        position: fixed;\r\n        bottom: 0;\r\n        left: 0;\r\n        right: 0;\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        box-shadow: 0 -1px 5px 0px #00000080;\r\n    }\r\n    #sidebar > ul {\r\n        flex-direction: row;\r\n        font-size: small;\r\n        margin: 1.5rem 0;\r\n    }\r\n}"],"sourceRoot":""}]);
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

/***/ "./node_modules/date-fns/esm/isPast/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isPast/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isPast)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isPast
 * @category Common Helpers
 * @summary Is the given date in the past?
 * @pure false
 *
 * @description
 * Is the given date in the past?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is in the past
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 2 July 2014 in the past?
 * const result = isPast(new Date(2014, 6, 2))
 * //=> true
 */
function isPast(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime() < Date.now();
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
/* harmony export */   swithTab: () => (/* binding */ swithTab),
/* harmony export */   tabs: () => (/* binding */ tabs)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isPast/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isTomorrow/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/lightFormat/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var _pubSub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubSub.js */ "./src/modules/pubSub.js");
/* harmony import */ var _img_noprojects_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/noprojects.png */ "./src/img/noprojects.png");




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
  modalMessage = document.getElementById("modal-message"),
  modalContent = document.getElementById("modal-content"),
  img = new Image();

(function() {
  _init();

  function _init() {
    _pubSub_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("dataChanged", renderData);
    img.src = _img_noprojects_png__WEBPACK_IMPORTED_MODULE_1__;
    modal.addEventListener("keyup", validateForm);
    modal.addEventListener("change", validateForm);
  }

  function validateForm() {
    const data = Object.fromEntries(new FormData(modalContent.children[0]));
    let isValid = Object.values(data).every((entry) => entry);
  
    if (data) {
      if (!isValid) {
        openModalMessage("All inputs must be filled appropriately");
        return;
      } else if (data.dueDate && ((0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(data.dueDate)) && !(0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(new Date(data.dueDate)))) {
        // Reject past dates
        openModalMessage("Past dates are not allowed!");
        return;
      }
      closeModalMessage();
    }
  }
  function openModalMessage(message) {
    modalMessage.textContent = message;
    modalMessage.classList.add("active");
    modalContent.querySelector("button[type='submit']").disabled = true;
  }
  function closeModalMessage() {
    modalMessage.innerHTML = "";
    modalMessage.classList.remove("active");
    modalContent.querySelector("button[type='submit']").disabled = false;
  }
})()



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
                <input id="task-priority-m" name="priority" type="radio" value="medium" checked required>
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
  } else if (elem === createBtn) {
    const action = `new-${createBtn.getAttribute("data-dialogue")}`;
    openDialogue({ action });
  } else if (elem === modal) {
    closeModal();
  } else if (elem === menuIcon) {
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
                (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(new Date(dialogue.dueDate))
                  ? "Today"
                  : (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date(dialogue.dueDate))
                  ? "Tomorrow"
                  : (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(new Date(dialogue.dueDate).toISOString().slice(0, 10)), "dd/MM/yyyy")
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
    if (projects[i].getTodaysTasks().length) {
      const elem = document.createElement("div"),
        tasks = projects[i].sortedTasks;
      elem.innerHTML = `<div class="project-name-contr" data-project="${i}">
                            <span class="project-name"></span><svg data-action-type="delete-project" class="actions" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Delete</title><path d="M14.12,10.47L12,12.59L9.87,10.47L8.46,11.88L10.59,14L8.47,16.12L9.88,17.53L12,15.41L14.12,17.53L15.53,16.12L13.41,14L15.53,11.88L14.12,10.47M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9Z" /></svg>
                        </div>
                        <ul></ul>`;
      elem.querySelector(".project-name").textContent = projects[i].title;
      for (let j = 0; j < tasks.length; j++) {
        if ((0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(tasks[j].dueDate)) {
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
    if (projects[i].getThisWeeksTasks().length) {
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
  if (!todaysTaskContr.innerHTML) todaysTaskContr.innerHTML = "<div class='empty-content'>🎉 No tasks for today!</div>";
  if (!thisWeeksTasksContr.innerHTML) {
    thisWeeksTasksContr.innerHTML = "<div class='empty-content'>You are good to go for this week!</div>";
    thisWeeksTasksContr.querySelector(".empty-content").appendChild(img);
  } 

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
  let darkThemeOn = JSON.parse(localStorage.getItem("darkThemeOn"));
  
  _pubSub_js__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe("dataChanged", saveChanges);
  _pubSub_js__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe("resetDataActionConfirmed", clearData);
  _pubSub_js__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe("themeChoiceChanged", saveThemeChoice)

  if (!localStorage.getItem("hasVisitedSiteBefore")) {
    localStorage.setItem("hasVisitedSiteBefore", "true");

    // Welcome user
    console.log("Welcome!");
  }

  function userThemeDark() {
    return darkThemeOn;
  }

  function saveThemeChoice(isDarkTheme) {
    darkThemeOn = isDarkTheme;
    localStorage.setItem("darkThemeOn", JSON.stringify(darkThemeOn));
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

  return { getData, userThemeDark };
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

/***/ "./src/img/noprojects.png":
/*!********************************!*\
  !*** ./src/img/noprojects.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "334dac05ecc374197f1c.png";

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






(function () {
  let darkTheme;
  _init();

  function _init() {
    addEventsToStaticElements();

    const userThemeDark = _modules_storage_js__WEBPACK_IMPORTED_MODULE_3__["default"].userThemeDark();
    if (userThemeDark !== null) {
      darkTheme = userThemeDark;
    } else {
      darkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    changeTheme(darkTheme);
  }

  function addEventsToStaticElements() {
    _modules_display_js__WEBPACK_IMPORTED_MODULE_2__.tabs.forEach((elem) => elem.addEventListener("click", _modules_display_js__WEBPACK_IMPORTED_MODULE_2__.swithTab));
    _modules_display_js__WEBPACK_IMPORTED_MODULE_2__.menuIcon.addEventListener("click", invokeActions);
    _modules_display_js__WEBPACK_IMPORTED_MODULE_2__.createBtn.addEventListener("click", invokeActions);
    _modules_display_js__WEBPACK_IMPORTED_MODULE_2__.modal.addEventListener("click", invokeActions);
    _modules_display_js__WEBPACK_IMPORTED_MODULE_2__.pages.forEach((page) => {
      page.addEventListener("click", invokeActions);
    });
  }
  function changeTheme(isDark) {
    if (isDark !== undefined) {
      darkTheme = isDark;
    } else {
      darkTheme = !darkTheme;
    }
    document.body.setAttribute("data-theme-dark", darkTheme);
    _modules_pubSub_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish("themeChoiceChanged", darkTheme);
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
              parseInt(form.getAttribute("data-project"))
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
    } else if (elem.id === "theme-btn") {
      changeTheme();
    } else if (elem.getAttribute("data-action-type")) {
      // Data read manipulation actions
      const action = elem.getAttribute("data-action-type");

      if (
        action.includes("delete") &&
        elem.hasAttribute("data-confirm-delete")
      ) {
        // Delete action confirmed
        if (action === "delete-task") {
          const pindex = parseInt(
            elem.parentElement.getAttribute("data-project")
          );
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
          const pindex = parseInt(
            elem.parentElement.getAttribute("data-project")
          );
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
          });
        }
      } else if (action === "reset-data") {
        _modules_pubSub_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish("resetDataActionConfirmed");
      }
    }
  }
})();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMseUpBQXlEO0FBQ3JHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxxRkFBcUYsS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sVUFBVSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxPQUFPLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sVUFBVSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLFVBQVUsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLFVBQVUsS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sUUFBUSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE9BQU8sWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxPQUFPLFVBQVUsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sUUFBUSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxh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Q0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087Ozs7Ozs7Ozs7Ozs7Ozs7QUN0TGlEO0FBQ0M7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLGFBQWEsU0FBUztBQUN0QixZQUFZLFdBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDZTtBQUNmLEVBQUUsc0VBQVk7QUFDZCxr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Q0EsSUFBSSwwREFBTSwwQkFBMEIsaUJBQWlCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLElBQUksMERBQU0sMEJBQTBCLGlCQUFpQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQSxJQUFJLDBEQUFNLDBCQUEwQixpQkFBaUI7QUFDckQ7QUFDQTtBQUNBO0FBQ0EsSUFBSSwwREFBTSwwQkFBMEIsaUJBQWlCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLElBQUksMERBQU0sMEJBQTBCLGlCQUFpQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDhEQUFPO0FBQ2hDO0FBQ0EsTUFBTSwwQkFBMEIsMkRBQUk7QUFDcEM7QUFDQSxNQUFNLDBCQUEwQiwyREFBSTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLElBQUksMERBQU0sMEJBQTBCLGlCQUFpQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMERBQU07QUFDUixFQUFFLDBEQUFNO0FBQ1IsRUFBRSwwREFBTTtBQUNSO0FBQ0EsV0FBVztBQUNYLENBQUMsSSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvbGlnaHRGb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2FkZERheXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGRNaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9jb25zdGFudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1Bhc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUaGlzV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVG9kYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RvbW9ycm93L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNWYWxpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xpZ2h0Rm9ybWF0L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2VJU08vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZldlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdWJNaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0c1Rhc2tzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3B1YlN1Yi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvV29ya1NhbnMtVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBHZW5lcmFsICovXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdXb3JrU2Fucyc7XHJcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcbn1cclxuXHJcbioge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5odG1sIHtcclxuICAgIC0tbGFyZ2VwYWQ6IDE1cHg7XHJcbiAgICAtLW1lZGl1bXBhZDogOHB4O1xyXG4gICAgLS1zbWFsbHBhZDogM3B4O1xyXG4gICAgLS1zbWFsbHJhZDogM3B4O1xyXG4gICAgLS1tZWRpdW1yYWQ6IDhweDtcclxuICAgIC0tbGFyZ2VyYWQ6IDE1cHg7XHJcbiAgICAtLXNoYWRvdzogMHB4IDFweCA1cHggMHB4ICMwMDAwMDA4MDtcclxuICAgIC0tZGFuZ2VyYmdjb2xvcjogI2M1NDk0OTtcclxuICAgIC0tcHJ0eS1oaWdoOiAjZmZjZGMxO1xyXG4gICAgLS1wcnR5LW1lZGl1bTogI2ZmZjE5ZjtcclxuICAgIC0tcHJ0eS1sb3c6ICNjYmZmY2U7XHJcbiAgICAtLWJnZGFyazogcm95YWxibHVlO1xyXG4gICAgLS1iZ2xpZ2h0OiB3aGl0ZTtcclxuICAgIC0tZmdsaWdodDogd2hpdGU7XHJcbiAgICAtLWZnZGFyazogYmxhY2s7XHJcbn1cclxuYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogJ1dvcmtTYW5zJywgJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZTogYXV0byBtaW5tYXgoMTIwdmgsIDI1MCUpIC8gNzB2dyAxZnI7XHJcbiAgICBnYXA6IDFlbTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnbGlnaHQpO1xyXG4gICAgY29sb3I6IHZhcigtLWZnZGFyayk7XHJcbn1cclxuaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogdmFyKC0tbGFyZ2VwYWQpIDA7XHJcbn1cclxuaGVhZGVyIGgxIHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG4jbWVudS1pY29uIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuYnV0dG9uIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmc6IGNhbGModmFyKC0tbWVkaXVtcGFkKSArIDNweCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1tZWRpdW1yYWQpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IHZhcigtLWZnbGlnaHQpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdkYXJrKTtcclxufVxyXG5idXR0b246YWN0aXZlIHtcclxuICAgIGNvbG9yOiB2YXIoLS1iZ2RhcmspO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuI25ld2J0biB7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tbGFyZ2VyYWQpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xyXG59XHJcbiNuZXdidG46YWN0aXZlIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuI21haW4gPiBkaXY6bm90KC5hY3RpdmUtcGFnZSkge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4jbWVudS1pY29uIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuI3NpZGViYXIge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmdkYXJrKTtcclxuICAgIGNvbG9yOiB2YXIoLS1mZ2xpZ2h0KTtcclxuICAgIGdyaWQtcm93OiAxIC8gLTE7XHJcbiAgICBncmlkLWNvbHVtbjogMiAvIC0xO1xyXG59XHJcbiNzaWRlYmFyIHVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICBtYXJnaW46IHZhcigtLWxhcmdlcGFkKTtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMTZweDtcclxufVxyXG4udGFicyB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnRhYnMuYWN0aXZlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4vKiBob21lICovXHJcbiNob21lLXBhZ2UgaDI6Zmlyc3QtY2hpbGQge1xyXG4gICAgY29sb3I6IHZhcigtLWJnZGFyayk7XHJcbn1cclxuI2hvbWUtcGFnZSB1bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDVweDtcclxufVxyXG4uZW1wdHktY29udGVudCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLWxhcmdlcGFkKTtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbn1cclxuLmVtcHR5LWNvbnRlbnQgaW1nIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWF4LXdpZHRoOiA1MCU7XHJcbn1cclxubGkuZW1wdHktY29udGVudCB7XHJcbiAgICBtYXJnaW46IDFyZW0gMDtcclxufVxyXG4ucHJvamVjdC1uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ucHJvamVjdHMtY29udHIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjgwcHgsIDFmcikpO1xyXG4gICAgZ2FwOiA4cHg7XHJcbn1cclxuLnByb2plY3RzLWNvbnRyID4gZGl2Om5vdCguZW1wdHktY29udGVudCkge1xyXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tbWVkaXVtcmFkKTtcclxuICAgIHBhZGRpbmc6IHZhcigtLW1lZGl1bXBhZCk7XHJcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcclxufVxyXG4ucHJvamVjdC1uYW1lLWNvbnRyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLmZsZXgtbGlzdC1pdGVtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogdmFyKC0tbWVkaXVtcGFkKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLW1lZGl1bXJhZCk7XHJcbn1cclxuLnByb2plY3RzLWNvbnRyIGxpOm5vdCg6Zmlyc3QtY2hpbGQpIHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZDtcclxufVxyXG4uZmxleC1saXN0LWVsZW0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogNXB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4jdGhpcy13ZWVrLWNvbnRyIC5mbGV4LWxpc3QtaXRlbSB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xyXG59XHJcbi50YXNrLW5hbWUge1xyXG4gICAgbWF4LXdpZHRoOiAxMTBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuLnRhc2stbGJsLWwsXHJcbi50YXNrLWxibC1tLFxyXG4udGFzay1sYmwtaCB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIHBhZGRpbmc6IHZhcigtLXNtYWxscGFkKTtcclxuICAgIGNvbG9yOiB2YXIoLS1mZ2RhcmspO1xyXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tc21hbGxyYWQpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbn1cclxuc3ZnIHtcclxuICAgIGhlaWdodDogMS41cmVtO1xyXG4gICAgd2lkdGg6IDEuNXJlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZpbGw6IHZhcigtLWZnZGFyayk7XHJcbn1cclxuI3RoaXMtd2Vlay1jb250ciB1bCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMjBweCwgMWZyKSk7XHJcbiAgICBnYXA6IDhweDtcclxufVxyXG5cclxuLyogcHJvamVjdHMgKi9cclxuI3Byb2plY3RzLXBhZ2Uge1xyXG4gICAgbWFyZ2luOiAxLjJyZW0gMDtcclxufVxyXG4jcHJvamVjdHMtcGFnZSB1bCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbiNwcm9qZWN0cy1wYWdlIC5mbGV4LWxpc3QtaXRlbSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG59XHJcblxyXG4vKiBub3RlcyAqL1xyXG4jbm90ZXMtY29udHIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdhcDogOHB4O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMjBweCwgMWZyKSk7XHJcbiAgICBtYXJnaW46IDEuNXJlbSAwO1xyXG59XHJcbiNub3Rlcy1jb250ciA+IGRpdiB7XHJcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xyXG4gICAgcGFkZGluZzogdmFyKC0tbWVkaXVtcGFkKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLW1lZGl1bXJhZCk7XHJcbn1cclxuLm5vdGUtdGl0bGUtY29udHIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLm5vdGUtdGl0bGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLm5vdGVjb250ZW50IHtcclxuICAgIHBhZGRpbmc6IHZhcigtLW1lZGl1bXBhZCk7XHJcbiAgICBtYXJnaW46IDFyZW0gMDtcclxuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbn1cclxuXHJcbi8qIEFib3V0ICYgU2V0dGluZ3MgKE1vcmUpIHBhZ2UgKi9cclxuI21vcmUtcGFnZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMXJlbTtcclxufVxyXG4jbW9yZS1wYWdlIGgyIHtcclxuICAgIGNvbG9yOiB2YXIoLS1iZ2RhcmspO1xyXG59XHJcbiNtb3JlLXBhZ2UgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogdmFyKC0tYmdkYXJrKTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuI3Jlc2V0LWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYW5nZXJiZ2NvbG9yKTtcclxufVxyXG4jcmVzZXQtYnRuOmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogdmFyKC0tZGFuZ2VyYmdjb2xvcik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLyogbW9kYWwgKi9cclxuI21vZGFsLmFjdGl2ZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMzA7XHJcbiAgICB6LWluZGV4OiAxMDtcclxufVxyXG4jbW9kYWwtbWVzc2FnZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbiNtb2RhbC1tZXNzYWdlLmFjdGl2ZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmI5Yjk7XHJcbiAgICBwYWRkaW5nOiB2YXIoLS1tZWRpdW1wYWQpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tc21hbGxyYWQpO1xyXG59XHJcbiNtb2RhbC1ib3gge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAzcHggIzAwMDAwMDIwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdsaWdodCk7XHJcbiAgICBwYWRkaW5nOiB2YXIoLS1sYXJnZXBhZCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1tZWRpdW1yYWQpO1xyXG4gICAgZmxleDogMSAwIDI4MHB4O1xyXG4gICAgbWFyZ2luOiAwIDM1JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG59XHJcbiNtb2RhbC1ib3ggPiBkaXY6Zmlyc3QtY2hpbGQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4jbW9kYWwtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xyXG59XHJcbiNtb2RhbC10aXRsZTo6Zmlyc3QtbGV0dGVyIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuI2Nsb3NlLW1vZGFsIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4jbW9kYWwtY29udGVudCBmb3JtLFxyXG4jbW9kYWwtY29udGVudCA+IGRpdiB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4jbW9kYWwtY29udGVudCAuZmllbGQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDAuMXJlbTtcclxufVxyXG4jbW9kYWwtY29udGVudCBpbnB1dCxcclxuI21vZGFsLWNvbnRlbnQgdGV4dGFyZWEge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdXb3JrU2Fucyc7XHJcbiAgICBwYWRkaW5nOiB2YXIoLS1zbWFsbHBhZCkgdmFyKC0tbWVkaXVtcGFkKTtcclxuICAgIG1hcmdpbjogMCAwLjJyZW07XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XHJcbiAgICBjb2xvcjogdmFyKC0tZmdkYXJrKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbiNtb2RhbC1jb250ZW50IHRleHRhcmVhIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tc21hbGxyYWQpO1xyXG59XHJcbiNtb2RhbC1jb250ZW50IGlucHV0OmFjdGl2ZSxcclxuI21vZGFsLWNvbnRlbnQgdGV4dGFyZWE6YWN0aXZlLFxyXG4jbW9kYWwtY29udGVudCBpbnB1dDpmb2N1cyxcclxuI21vZGFsLWNvbnRlbnQgdGV4dGFyZWE6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG4jbW9kYWwtY29udGVudCBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4jbW9kYWwtY29udGVudCBsYWJlbFtmb3J8PVwidGFzay1wcmlvcml0eVwiXSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIHBhZGRpbmc6IHZhcigtLXNtYWxscGFkKTtcclxuICAgIGNvbG9yOiB2YXIoLS1mZ2RhcmspO1xyXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tc21hbGxyYWQpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbn1cclxuLnRhc2stbGJsLWgsXHJcbiNtb2RhbC1jb250ZW50IGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkIH4gbGFiZWxbZm9yPVwidGFzay1wcmlvcml0eS1oXCJdIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBydHktaGlnaCk7XHJcbn1cclxuLnRhc2stbGJsLW0sXHJcbiNtb2RhbC1jb250ZW50IGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkIH4gbGFiZWxbZm9yPVwidGFzay1wcmlvcml0eS1tXCJdIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBydHktbWVkaXVtKTtcclxufVxyXG4udGFzay1sYmwtbCxcclxuI21vZGFsLWNvbnRlbnQgaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgfiBsYWJlbFtmb3I9XCJ0YXNrLXByaW9yaXR5LWxcIl0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJ0eS1sb3cpO1xyXG59XHJcbiNyYWRpby1idG5zLWNudHIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMC41cmVtO1xyXG59XHJcbiNkZXRhaWxzIC5maWVsZCA+IGRpdjpmaXJzdC1jaGlsZCB7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcbiNkZXRhaWxzIC5maWVsZCA+IGRpdjpsYXN0LWNoaWxkIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuI2RldGFpbHMgLnRhc2stbGJsLWgsXHJcbiNkZXRhaWxzIC50YXNrLWxibC1sLFxyXG4jZGV0YWlscyAudGFzay1sYmwtbSB7XHJcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG59XHJcbmRpdiNjb25maXJtIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgICBnYXA6IDFyZW07XHJcbn1cclxuI2RlbGV0ZS1idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFuZ2VyYmdjb2xvcik7XHJcbn1cclxuI2RlbGV0ZS1idG46YWN0aXZlIHtcclxuICAgIGNvbG9yOiB2YXIoLS1kYW5nZXJiZ2NvbG9yKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbmJ1dHRvbjpkaXNhYmxlZCB7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuXHJcbi8qIERhcmsgdGhlbWUgKi9cclxuYm9keVtkYXRhLXRoZW1lLWRhcms9XCJ0cnVlXCJdIHtcclxuICAgIC0tYmdsaWdodDogIzNkM2QzZDtcclxuICAgIC0tZmdsaWdodDogYmxhY2s7XHJcbiAgICAtLWZnZGFyazogI2U2ZTZlNjtcclxuICAgIC0tc2hhZG93OiAwcHggMXB4IDVweCAwcHggIzAwMDAwMDlmO1xyXG59XHJcbmJvZHlbZGF0YS10aGVtZS1kYXJrPVwidHJ1ZVwiXSAjaG9tZS1wYWdlIGgyOmZpcnN0LWNoaWxkLFxyXG5ib2R5W2RhdGEtdGhlbWUtZGFyaz1cInRydWVcIl0gI21vcmUtcGFnZSBoMiB7XHJcbiAgICBjb2xvcjogdmFyKC0tZmdkYXJrKTtcclxufVxyXG5ib2R5W2RhdGEtdGhlbWUtZGFyaz1cInRydWVcIl0gYnV0dG9uIHtcclxuICAgIGNvbG9yOiB2YXIoLS1mZ2RhcmspO1xyXG59XHJcbmJvZHlbZGF0YS10aGVtZS1kYXJrPVwidHJ1ZVwiXSAjbW9kYWwtY29udGVudCBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZH5sYWJlbFtmb3J8PVwidGFzay1wcmlvcml0eVwiXSxcclxuYm9keVtkYXRhLXRoZW1lLWRhcms9XCJ0cnVlXCJdIC50YXNrLWxibC1oLFxyXG5ib2R5W2RhdGEtdGhlbWUtZGFyaz1cInRydWVcIl0gLnRhc2stbGJsLWwsXHJcbmJvZHlbZGF0YS10aGVtZS1kYXJrPVwidHJ1ZVwiXSAudGFzay1sYmwtbSB7XHJcbiAgICBjb2xvcjogdmFyKC0tZmdsaWdodCk7XHJcbn1cclxuYm9keVtkYXRhLXRoZW1lLWRhcms9XCJ0cnVlXCJdICNtb2RhbC1tZXNzYWdlLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYW5nZXJiZ2NvbG9yKTtcclxufVxyXG5ib2R5W2RhdGEtdGhlbWUtZGFyaz1cInRydWVcIl0gI3NpZGViYXIge1xyXG4gICAgY29sb3I6IHZhcigtLWZnZGFyayk7XHJcbn1cclxuXHJcbi8qIE1lZGlhIHF1ZXJ5ICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2ODBweCkge1xyXG4gICAgYm9keSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIG1hcmdpbjogMXJlbTtcclxuICAgICAgICBnYXA6IDJyZW07XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICAgICNtZW51LWljb24ge1xyXG4gICAgICAgIGRpc3BsYXk6IHVuc2V0O1xyXG4gICAgfVxyXG4gICAgaGVhZGVyW2RhdGEtbWVudS1hY3RpdmVdICNtZW51LWljb24ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnZGFyayk7XHJcbiAgICAgICAgZmlsbDogdmFyKC0tZmdsaWdodCk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIHBhZGRpbmc6IHZhcigtLXNtYWxscGFkKTtcclxuICAgIH1cclxuICAgIC5wcm9qZWN0cy1jb250ciB7XHJcbiAgICAgICAgZ2FwOiAxcmVtO1xyXG4gICAgfVxyXG4gICAgI3NpZGViYXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICBoZWFkZXJbZGF0YS1tZW51LWFjdGl2ZV0gfiAjc2lkZWJhciB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBib3gtc2hhZG93OiAwIC0xcHggNXB4IDBweCAjMDAwMDAwODA7XHJcbiAgICB9XHJcbiAgICAjc2lkZWJhciA+IHVsIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICAgICAgbWFyZ2luOiAxLjVyZW0gMDtcclxuICAgIH1cclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxZQUFZO0FBQ1o7SUFDSSx1QkFBdUI7SUFDdkIsK0RBQXFFO0FBQ3pFOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixtQ0FBbUM7SUFDbkMsd0JBQXdCO0lBQ3hCLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGdEQUFnRDtJQUNoRCxhQUFhO0lBQ2Isa0RBQWtEO0lBQ2xELFFBQVE7SUFDUixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQyxvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksU0FBUztBQUNiO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YscUNBQXFDO0lBQ3JDLCtCQUErQjtJQUMvQixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLCtCQUErQjtBQUNuQztBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixlQUFlO0lBQ2YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGdC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Qiw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUEsZUFBZTtBQUNmO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsbUNBQW1DO0FBQ3ZDO0FBQ0E7O0lBRUksb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxvQkFBb0I7QUFDeEI7QUFDQTs7OztJQUlJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksc0NBQXNDO0FBQzFDO0FBQ0E7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUEsZ0JBQWdCO0FBQ2hCO0lBQ0k7UUFDSSxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLFlBQVk7UUFDWixTQUFTO1FBQ1QsVUFBVTtJQUNkO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSwrQkFBK0I7UUFDL0Isb0JBQW9CO1FBQ3BCLGtCQUFrQjtRQUNsQix3QkFBd0I7SUFDNUI7SUFDQTtRQUNJLFNBQVM7SUFDYjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksZUFBZTtRQUNmLFNBQVM7UUFDVCxPQUFPO1FBQ1AsUUFBUTtRQUNSLGFBQWE7UUFDYix1QkFBdUI7UUFDdkIsbUJBQW1CO1FBQ25CLG9DQUFvQztJQUN4QztJQUNBO1FBQ0ksbUJBQW1CO1FBQ25CLGdCQUFnQjtRQUNoQixnQkFBZ0I7SUFDcEI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBHZW5lcmFsICovXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnV29ya1NhbnMnO1xcclxcbiAgICBzcmM6IHVybCgnLi9mb250cy9Xb3JrU2Fucy1WYXJpYWJsZUZvbnRfd2dodC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5odG1sIHtcXHJcXG4gICAgLS1sYXJnZXBhZDogMTVweDtcXHJcXG4gICAgLS1tZWRpdW1wYWQ6IDhweDtcXHJcXG4gICAgLS1zbWFsbHBhZDogM3B4O1xcclxcbiAgICAtLXNtYWxscmFkOiAzcHg7XFxyXFxuICAgIC0tbWVkaXVtcmFkOiA4cHg7XFxyXFxuICAgIC0tbGFyZ2VyYWQ6IDE1cHg7XFxyXFxuICAgIC0tc2hhZG93OiAwcHggMXB4IDVweCAwcHggIzAwMDAwMDgwO1xcclxcbiAgICAtLWRhbmdlcmJnY29sb3I6ICNjNTQ5NDk7XFxyXFxuICAgIC0tcHJ0eS1oaWdoOiAjZmZjZGMxO1xcclxcbiAgICAtLXBydHktbWVkaXVtOiAjZmZmMTlmO1xcclxcbiAgICAtLXBydHktbG93OiAjY2JmZmNlO1xcclxcbiAgICAtLWJnZGFyazogcm95YWxibHVlO1xcclxcbiAgICAtLWJnbGlnaHQ6IHdoaXRlO1xcclxcbiAgICAtLWZnbGlnaHQ6IHdoaXRlO1xcclxcbiAgICAtLWZnZGFyazogYmxhY2s7XFxyXFxufVxcclxcbmJvZHkge1xcclxcbiAgICBmb250LWZhbWlseTogJ1dvcmtTYW5zJywgJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IGF1dG8gbWlubWF4KDEyMHZoLCAyNTAlKSAvIDcwdncgMWZyO1xcclxcbiAgICBnYXA6IDFlbTtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnbGlnaHQpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tZmdkYXJrKTtcXHJcXG59XFxyXFxuaGVhZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiB2YXIoLS1sYXJnZXBhZCkgMDtcXHJcXG59XFxyXFxuaGVhZGVyIGgxIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG4jbWVudS1pY29uIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuYnV0dG9uIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBwYWRkaW5nOiBjYWxjKHZhcigtLW1lZGl1bXBhZCkgKyAzcHgpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1tZWRpdW1yYWQpO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1mZ2xpZ2h0KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdkYXJrKTtcXHJcXG59XFxyXFxuYnV0dG9uOmFjdGl2ZSB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1iZ2RhcmspO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuI25ld2J0biB7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWxhcmdlcmFkKTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xcclxcbn1cXHJcXG4jbmV3YnRuOmFjdGl2ZSB7XFxyXFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxufVxcclxcbiNtYWluID4gZGl2Om5vdCguYWN0aXZlLXBhZ2UpIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuI21lbnUtaWNvbiB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbiNzaWRlYmFyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmdkYXJrKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWZnbGlnaHQpO1xcclxcbiAgICBncmlkLXJvdzogMSAvIC0xO1xcclxcbiAgICBncmlkLWNvbHVtbjogMiAvIC0xO1xcclxcbn1cXHJcXG4jc2lkZWJhciB1bCB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMDtcXHJcXG4gICAgbWFyZ2luOiB2YXIoLS1sYXJnZXBhZCk7XFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMTZweDtcXHJcXG59XFxyXFxuLnRhYnMge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi50YWJzLmFjdGl2ZSB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBob21lICovXFxyXFxuI2hvbWUtcGFnZSBoMjpmaXJzdC1jaGlsZCB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1iZ2RhcmspO1xcclxcbn1cXHJcXG4jaG9tZS1wYWdlIHVsIHtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG59XFxyXFxuLmVtcHR5LWNvbnRlbnQge1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLWxhcmdlcGFkKTtcXHJcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXHJcXG59XFxyXFxuLmVtcHR5LWNvbnRlbnQgaW1nIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIG1heC13aWR0aDogNTAlO1xcclxcbn1cXHJcXG5saS5lbXB0eS1jb250ZW50IHtcXHJcXG4gICAgbWFyZ2luOiAxcmVtIDA7XFxyXFxufVxcclxcbi5wcm9qZWN0LW5hbWUge1xcclxcbiAgICBmb250LXNpemU6IGxhcmdlO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuLnByb2plY3RzLWNvbnRyIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyODBweCwgMWZyKSk7XFxyXFxuICAgIGdhcDogOHB4O1xcclxcbn1cXHJcXG4ucHJvamVjdHMtY29udHIgPiBkaXY6bm90KC5lbXB0eS1jb250ZW50KSB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLW1lZGl1bXJhZCk7XFxyXFxuICAgIHBhZGRpbmc6IHZhcigtLW1lZGl1bXBhZCk7XFxyXFxuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcXHJcXG59XFxyXFxuLnByb2plY3QtbmFtZS1jb250ciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuLmZsZXgtbGlzdC1pdGVtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiB2YXIoLS1tZWRpdW1wYWQpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1tZWRpdW1yYWQpO1xcclxcbn1cXHJcXG4ucHJvamVjdHMtY29udHIgbGk6bm90KDpmaXJzdC1jaGlsZCkge1xcclxcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQ7XFxyXFxufVxcclxcbi5mbGV4LWxpc3QtZWxlbSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4jdGhpcy13ZWVrLWNvbnRyIC5mbGV4LWxpc3QtaXRlbSB7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcXHJcXG59XFxyXFxuLnRhc2stbmFtZSB7XFxyXFxuICAgIG1heC13aWR0aDogMTEwcHg7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbn1cXHJcXG4udGFzay1sYmwtbCxcXHJcXG4udGFzay1sYmwtbSxcXHJcXG4udGFzay1sYmwtaCB7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXHJcXG4gICAgcGFkZGluZzogdmFyKC0tc21hbGxwYWQpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tZmdkYXJrKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tc21hbGxyYWQpO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcXHJcXG59XFxyXFxuc3ZnIHtcXHJcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxyXFxuICAgIHdpZHRoOiAxLjVyZW07XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZmlsbDogdmFyKC0tZmdkYXJrKTtcXHJcXG59XFxyXFxuI3RoaXMtd2Vlay1jb250ciB1bCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjIwcHgsIDFmcikpO1xcclxcbiAgICBnYXA6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogcHJvamVjdHMgKi9cXHJcXG4jcHJvamVjdHMtcGFnZSB7XFxyXFxuICAgIG1hcmdpbjogMS4ycmVtIDA7XFxyXFxufVxcclxcbiNwcm9qZWN0cy1wYWdlIHVsIHtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG4jcHJvamVjdHMtcGFnZSAuZmxleC1saXN0LWl0ZW0ge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBub3RlcyAqL1xcclxcbiNub3Rlcy1jb250ciB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdhcDogOHB4O1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIyMHB4LCAxZnIpKTtcXHJcXG4gICAgbWFyZ2luOiAxLjVyZW0gMDtcXHJcXG59XFxyXFxuI25vdGVzLWNvbnRyID4gZGl2IHtcXHJcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcXHJcXG4gICAgcGFkZGluZzogdmFyKC0tbWVkaXVtcGFkKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tbWVkaXVtcmFkKTtcXHJcXG59XFxyXFxuLm5vdGUtdGl0bGUtY29udHIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5ub3RlLXRpdGxlIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcbi5ub3RlY29udGVudCB7XFxyXFxuICAgIHBhZGRpbmc6IHZhcigtLW1lZGl1bXBhZCk7XFxyXFxuICAgIG1hcmdpbjogMXJlbSAwO1xcclxcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XFxyXFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XFxyXFxufVxcclxcblxcclxcbi8qIEFib3V0ICYgU2V0dGluZ3MgKE1vcmUpIHBhZ2UgKi9cXHJcXG4jbW9yZS1wYWdlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG4jbW9yZS1wYWdlIGgyIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWJnZGFyayk7XFxyXFxufVxcclxcbiNtb3JlLXBhZ2UgYSB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWJnZGFyayk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuI3Jlc2V0LWJ0biB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhbmdlcmJnY29sb3IpO1xcclxcbn1cXHJcXG4jcmVzZXQtYnRuOmFjdGl2ZSB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1kYW5nZXJiZ2NvbG9yKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi8qIG1vZGFsICovXFxyXFxuI21vZGFsLmFjdGl2ZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMzA7XFxyXFxuICAgIHotaW5kZXg6IDEwO1xcclxcbn1cXHJcXG4jbW9kYWwtbWVzc2FnZSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbiNtb2RhbC1tZXNzYWdlLmFjdGl2ZSB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiOWI5O1xcclxcbiAgICBwYWRkaW5nOiB2YXIoLS1tZWRpdW1wYWQpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1zbWFsbHJhZCk7XFxyXFxufVxcclxcbiNtb2RhbC1ib3gge1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IDNweCAjMDAwMDAwMjA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnbGlnaHQpO1xcclxcbiAgICBwYWRkaW5nOiB2YXIoLS1sYXJnZXBhZCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLW1lZGl1bXJhZCk7XFxyXFxuICAgIGZsZXg6IDEgMCAyODBweDtcXHJcXG4gICAgbWFyZ2luOiAwIDM1JTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG4jbW9kYWwtYm94ID4gZGl2OmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG4jbW9kYWwtdGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xcclxcbn1cXHJcXG4jbW9kYWwtdGl0bGU6OmZpcnN0LWxldHRlciB7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxufVxcclxcbiNjbG9zZS1tb2RhbCB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuI21vZGFsLWNvbnRlbnQgZm9ybSxcXHJcXG4jbW9kYWwtY29udGVudCA+IGRpdiB7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG4jbW9kYWwtY29udGVudCAuZmllbGQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDAuMXJlbTtcXHJcXG59XFxyXFxuI21vZGFsLWNvbnRlbnQgaW5wdXQsXFxyXFxuI21vZGFsLWNvbnRlbnQgdGV4dGFyZWEge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnV29ya1NhbnMnO1xcclxcbiAgICBwYWRkaW5nOiB2YXIoLS1zbWFsbHBhZCkgdmFyKC0tbWVkaXVtcGFkKTtcXHJcXG4gICAgbWFyZ2luOiAwIDAuMnJlbTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1mZ2RhcmspO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuI21vZGFsLWNvbnRlbnQgdGV4dGFyZWEge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tc21hbGxyYWQpO1xcclxcbn1cXHJcXG4jbW9kYWwtY29udGVudCBpbnB1dDphY3RpdmUsXFxyXFxuI21vZGFsLWNvbnRlbnQgdGV4dGFyZWE6YWN0aXZlLFxcclxcbiNtb2RhbC1jb250ZW50IGlucHV0OmZvY3VzLFxcclxcbiNtb2RhbC1jb250ZW50IHRleHRhcmVhOmZvY3VzIHtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuI21vZGFsLWNvbnRlbnQgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbiNtb2RhbC1jb250ZW50IGxhYmVsW2Zvcnw9XFxcInRhc2stcHJpb3JpdHlcXFwiXSB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcclxcbiAgICBwYWRkaW5nOiB2YXIoLS1zbWFsbHBhZCk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1mZ2RhcmspO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1zbWFsbHJhZCk7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xcclxcbn1cXHJcXG4udGFzay1sYmwtaCxcXHJcXG4jbW9kYWwtY29udGVudCBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdOmNoZWNrZWQgfiBsYWJlbFtmb3I9XFxcInRhc2stcHJpb3JpdHktaFxcXCJdIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJ0eS1oaWdoKTtcXHJcXG59XFxyXFxuLnRhc2stbGJsLW0sXFxyXFxuI21vZGFsLWNvbnRlbnQgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXTpjaGVja2VkIH4gbGFiZWxbZm9yPVxcXCJ0YXNrLXByaW9yaXR5LW1cXFwiXSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBydHktbWVkaXVtKTtcXHJcXG59XFxyXFxuLnRhc2stbGJsLWwsXFxyXFxuI21vZGFsLWNvbnRlbnQgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXTpjaGVja2VkIH4gbGFiZWxbZm9yPVxcXCJ0YXNrLXByaW9yaXR5LWxcXFwiXSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBydHktbG93KTtcXHJcXG59XFxyXFxuI3JhZGlvLWJ0bnMtY250ciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMC41cmVtO1xcclxcbn1cXHJcXG4jZGV0YWlscyAuZmllbGQgPiBkaXY6Zmlyc3QtY2hpbGQge1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcclxcbn1cXHJcXG4jZGV0YWlscyAuZmllbGQgPiBkaXY6bGFzdC1jaGlsZCB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcbiNkZXRhaWxzIC50YXNrLWxibC1oLFxcclxcbiNkZXRhaWxzIC50YXNrLWxibC1sLFxcclxcbiNkZXRhaWxzIC50YXNrLWxibC1tIHtcXHJcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuZGl2I2NvbmZpcm0ge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuI2RlbGV0ZS1idG4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYW5nZXJiZ2NvbG9yKTtcXHJcXG59XFxyXFxuI2RlbGV0ZS1idG46YWN0aXZlIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWRhbmdlcmJnY29sb3IpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuYnV0dG9uOmRpc2FibGVkIHtcXHJcXG4gICAgb3BhY2l0eTogMC41O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBEYXJrIHRoZW1lICovXFxyXFxuYm9keVtkYXRhLXRoZW1lLWRhcms9XFxcInRydWVcXFwiXSB7XFxyXFxuICAgIC0tYmdsaWdodDogIzNkM2QzZDtcXHJcXG4gICAgLS1mZ2xpZ2h0OiBibGFjaztcXHJcXG4gICAgLS1mZ2Rhcms6ICNlNmU2ZTY7XFxyXFxuICAgIC0tc2hhZG93OiAwcHggMXB4IDVweCAwcHggIzAwMDAwMDlmO1xcclxcbn1cXHJcXG5ib2R5W2RhdGEtdGhlbWUtZGFyaz1cXFwidHJ1ZVxcXCJdICNob21lLXBhZ2UgaDI6Zmlyc3QtY2hpbGQsXFxyXFxuYm9keVtkYXRhLXRoZW1lLWRhcms9XFxcInRydWVcXFwiXSAjbW9yZS1wYWdlIGgyIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWZnZGFyayk7XFxyXFxufVxcclxcbmJvZHlbZGF0YS10aGVtZS1kYXJrPVxcXCJ0cnVlXFxcIl0gYnV0dG9uIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWZnZGFyayk7XFxyXFxufVxcclxcbmJvZHlbZGF0YS10aGVtZS1kYXJrPVxcXCJ0cnVlXFxcIl0gI21vZGFsLWNvbnRlbnQgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXTpjaGVja2VkfmxhYmVsW2Zvcnw9XFxcInRhc2stcHJpb3JpdHlcXFwiXSxcXHJcXG5ib2R5W2RhdGEtdGhlbWUtZGFyaz1cXFwidHJ1ZVxcXCJdIC50YXNrLWxibC1oLFxcclxcbmJvZHlbZGF0YS10aGVtZS1kYXJrPVxcXCJ0cnVlXFxcIl0gLnRhc2stbGJsLWwsXFxyXFxuYm9keVtkYXRhLXRoZW1lLWRhcms9XFxcInRydWVcXFwiXSAudGFzay1sYmwtbSB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1mZ2xpZ2h0KTtcXHJcXG59XFxyXFxuYm9keVtkYXRhLXRoZW1lLWRhcms9XFxcInRydWVcXFwiXSAjbW9kYWwtbWVzc2FnZS5hY3RpdmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYW5nZXJiZ2NvbG9yKTtcXHJcXG59XFxyXFxuYm9keVtkYXRhLXRoZW1lLWRhcms9XFxcInRydWVcXFwiXSAjc2lkZWJhciB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1mZ2RhcmspO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNZWRpYSBxdWVyeSAqL1xcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA2ODBweCkge1xcclxcbiAgICBib2R5IHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgbWFyZ2luOiAxcmVtO1xcclxcbiAgICAgICAgZ2FwOiAycmVtO1xcclxcbiAgICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgfVxcclxcbiAgICAjbWVudS1pY29uIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IHVuc2V0O1xcclxcbiAgICB9XFxyXFxuICAgIGhlYWRlcltkYXRhLW1lbnUtYWN0aXZlXSAjbWVudS1pY29uIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnZGFyayk7XFxyXFxuICAgICAgICBmaWxsOiB2YXIoLS1mZ2xpZ2h0KTtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IHZhcigtLXNtYWxscGFkKTtcXHJcXG4gICAgfVxcclxcbiAgICAucHJvamVjdHMtY29udHIge1xcclxcbiAgICAgICAgZ2FwOiAxcmVtO1xcclxcbiAgICB9XFxyXFxuICAgICNzaWRlYmFyIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gICAgaGVhZGVyW2RhdGEtbWVudS1hY3RpdmVdIH4gI3NpZGViYXIge1xcclxcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICAgICAgYm90dG9tOiAwO1xcclxcbiAgICAgICAgbGVmdDogMDtcXHJcXG4gICAgICAgIHJpZ2h0OiAwO1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IDAgLTFweCA1cHggMHB4ICMwMDAwMDA4MDtcXHJcXG4gICAgfVxcclxcbiAgICAjc2lkZWJhciA+IHVsIHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgICAgICBmb250LXNpemU6IHNtYWxsO1xcclxcbiAgICAgICAgbWFyZ2luOiAxLjVyZW0gMDtcXHJcXG4gICAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRMZWFkaW5nWmVyb3MobnVtYmVyLCB0YXJnZXRMZW5ndGgpIHtcbiAgdmFyIHNpZ24gPSBudW1iZXIgPCAwID8gJy0nIDogJyc7XG4gIHZhciBvdXRwdXQgPSBNYXRoLmFicyhudW1iZXIpLnRvU3RyaW5nKCk7XG4gIHdoaWxlIChvdXRwdXQubGVuZ3RoIDwgdGFyZ2V0TGVuZ3RoKSB7XG4gICAgb3V0cHV0ID0gJzAnICsgb3V0cHV0O1xuICB9XG4gIHJldHVybiBzaWduICsgb3V0cHV0O1xufSIsInZhciBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRPcHRpb25zKCkge1xuICByZXR1cm4gZGVmYXVsdE9wdGlvbnM7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdE9wdGlvbnMobmV3T3B0aW9ucykge1xuICBkZWZhdWx0T3B0aW9ucyA9IG5ld09wdGlvbnM7XG59IiwiaW1wb3J0IGFkZExlYWRpbmdaZXJvcyBmcm9tIFwiLi4vLi4vYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzXCI7XG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqL1xudmFyIGZvcm1hdHRlcnMgPSB7XG4gIC8vIFllYXJcbiAgeTogZnVuY3Rpb24geShkYXRlLCB0b2tlbikge1xuICAgIC8vIEZyb20gaHR0cDovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS0zMS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9Gb3JtYXRfdG9rZW5zXG4gICAgLy8gfCBZZWFyICAgICB8ICAgICB5IHwgeXkgfCAgIHl5eSB8ICB5eXl5IHwgeXl5eXkgfFxuICAgIC8vIHwtLS0tLS0tLS0tfC0tLS0tLS18LS0tLXwtLS0tLS0tfC0tLS0tLS18LS0tLS0tLXxcbiAgICAvLyB8IEFEIDEgICAgIHwgICAgIDEgfCAwMSB8ICAgMDAxIHwgIDAwMDEgfCAwMDAwMSB8XG4gICAgLy8gfCBBRCAxMiAgICB8ICAgIDEyIHwgMTIgfCAgIDAxMiB8ICAwMDEyIHwgMDAwMTIgfFxuICAgIC8vIHwgQUQgMTIzICAgfCAgIDEyMyB8IDIzIHwgICAxMjMgfCAgMDEyMyB8IDAwMTIzIHxcbiAgICAvLyB8IEFEIDEyMzQgIHwgIDEyMzQgfCAzNCB8ICAxMjM0IHwgIDEyMzQgfCAwMTIzNCB8XG4gICAgLy8gfCBBRCAxMjM0NSB8IDEyMzQ1IHwgNDUgfCAxMjM0NSB8IDEyMzQ1IHwgMTIzNDUgfFxuXG4gICAgdmFyIHNpZ25lZFllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gICAgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcbiAgICB2YXIgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModG9rZW4gPT09ICd5eScgPyB5ZWFyICUgMTAwIDogeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTW9udGhcbiAgTTogZnVuY3Rpb24gTShkYXRlLCB0b2tlbikge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcbiAgICByZXR1cm4gdG9rZW4gPT09ICdNJyA/IFN0cmluZyhtb250aCArIDEpIDogYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XG4gIH0sXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZDogZnVuY3Rpb24gZChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENEYXRlKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEFNIG9yIFBNXG4gIGE6IGZ1bmN0aW9uIGEoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF0ZS5nZXRVVENIb3VycygpIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2EnOlxuICAgICAgY2FzZSAnYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlLnRvVXBwZXJDYXNlKCk7XG4gICAgICBjYXNlICdhYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlO1xuICAgICAgY2FzZSAnYWFhYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlWzBdO1xuICAgICAgY2FzZSAnYWFhYSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlID09PSAnYW0nID8gJ2EubS4nIDogJ3AubS4nO1xuICAgIH1cbiAgfSxcbiAgLy8gSG91ciBbMS0xMl1cbiAgaDogZnVuY3Rpb24gaChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENIb3VycygpICUgMTIgfHwgMTIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIEgoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDSG91cnMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWludXRlXG4gIG06IGZ1bmN0aW9uIG0oZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDTWludXRlcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gcyhkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENTZWNvbmRzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiBTKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIG51bWJlck9mRGlnaXRzID0gdG9rZW4ubGVuZ3RoO1xuICAgIHZhciBtaWxsaXNlY29uZHMgPSBkYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpO1xuICAgIHZhciBmcmFjdGlvbmFsU2Vjb25kcyA9IE1hdGguZmxvb3IobWlsbGlzZWNvbmRzICogTWF0aC5wb3coMTAsIG51bWJlck9mRGlnaXRzIC0gMykpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZnJhY3Rpb25hbFNlY29uZHMsIHRva2VuLmxlbmd0aCk7XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXR0ZXJzOyIsIi8qKlxuICogR29vZ2xlIENocm9tZSBhcyBvZiA2Ny4wLjMzOTYuODcgaW50cm9kdWNlZCB0aW1lem9uZXMgd2l0aCBvZmZzZXQgdGhhdCBpbmNsdWRlcyBzZWNvbmRzLlxuICogVGhleSB1c3VhbGx5IGFwcGVhciBmb3IgZGF0ZXMgdGhhdCBkZW5vdGUgdGltZSBiZWZvcmUgdGhlIHRpbWV6b25lcyB3ZXJlIGludHJvZHVjZWRcbiAqIChlLmcuIGZvciAnRXVyb3BlL1ByYWd1ZScgdGltZXpvbmUgdGhlIG9mZnNldCBpcyBHTVQrMDA6NTc6NDQgYmVmb3JlIDEgT2N0b2JlciAxODkxXG4gKiBhbmQgR01UKzAxOjAwOjAwIGFmdGVyIHRoYXQgZGF0ZSlcbiAqXG4gKiBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgdGhlIG9mZnNldCBpbiBtaW51dGVzIGFuZCB3b3VsZCByZXR1cm4gNTcgZm9yIHRoZSBleGFtcGxlIGFib3ZlLFxuICogd2hpY2ggd291bGQgbGVhZCB0byBpbmNvcnJlY3QgY2FsY3VsYXRpb25zLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdGltZXpvbmUgb2Zmc2V0IGluIG1pbGxpc2Vjb25kcyB0aGF0IHRha2VzIHNlY29uZHMgaW4gYWNjb3VudC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlKSB7XG4gIHZhciB1dGNEYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpLCBkYXRlLmdldEhvdXJzKCksIGRhdGUuZ2V0TWludXRlcygpLCBkYXRlLmdldFNlY29uZHMoKSwgZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSkpO1xuICB1dGNEYXRlLnNldFVUQ0Z1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSAtIHV0Y0RhdGUuZ2V0VGltZSgpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkRGF5c1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBkYXlzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gLSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgZGF5cyBhZGRlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAtIDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCAxMCBkYXlzIHRvIDEgU2VwdGVtYmVyIDIwMTQ6XG4gKiBjb25zdCByZXN1bHQgPSBhZGREYXlzKG5ldyBEYXRlKDIwMTQsIDgsIDEpLCAxMClcbiAqIC8vPT4gVGh1IFNlcCAxMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZERheXMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIGlmIChpc05hTihhbW91bnQpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbiAgaWYgKCFhbW91bnQpIHtcbiAgICAvLyBJZiAwIGRheXMsIG5vLW9wIHRvIGF2b2lkIGNoYW5naW5nIHRpbWVzIGluIHRoZSBob3VyIGJlZm9yZSBlbmQgb2YgRFNUXG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgYW1vdW50KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaWxsaXNlY29uZHMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDc1MCBtaWxsaXNlY29uZHMgdG8gMTAgSnVseSAyMDE0IDEyOjQ1OjMwLjAwMDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZE1pbGxpc2Vjb25kcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDQ1LCAzMCwgMCksIDc1MClcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDEyOjQ1OjMwLjc1MFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRNaWxsaXNlY29uZHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIHRpbWVzdGFtcCA9IHRvRGF0ZShkaXJ0eURhdGUpLmdldFRpbWUoKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKyBhbW91bnQpO1xufSIsIi8qKlxuICogRGF5cyBpbiAxIHdlZWsuXG4gKlxuICogQG5hbWUgZGF5c0luV2Vla1xuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBkYXlzSW5XZWVrID0gNztcblxuLyoqXG4gKiBEYXlzIGluIDEgeWVhclxuICogT25lIHllYXJzIGVxdWFscyAzNjUuMjQyNSBkYXlzIGFjY29yZGluZyB0byB0aGUgZm9ybXVsYTpcbiAqXG4gKiA+IExlYXAgeWVhciBvY2N1cmVzIGV2ZXJ5IDQgeWVhcnMsIGV4Y2VwdCBmb3IgeWVhcnMgdGhhdCBhcmUgZGl2aXNhYmxlIGJ5IDEwMCBhbmQgbm90IGRpdmlzYWJsZSBieSA0MDAuXG4gKiA+IDEgbWVhbiB5ZWFyID0gKDM2NSsxLzQtMS8xMDArMS80MDApIGRheXMgPSAzNjUuMjQyNSBkYXlzXG4gKlxuICogQG5hbWUgZGF5c0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBkYXlzSW5ZZWFyID0gMzY1LjI0MjU7XG5cbi8qKlxuICogTWF4aW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQG5hbWUgbWF4VGltZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBtYXhUaW1lID0gTWF0aC5wb3coMTAsIDgpICogMjQgKiA2MCAqIDYwICogMTAwMDtcblxuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBtaW51dGVcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbk1pbnV0ZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJbk1pbnV0ZSA9IDYwMDAwO1xuXG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5Ib3VyID0gMzYwMDAwMDtcblxuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBzZWNvbmRcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJblNlY29uZFxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJblNlY29uZCA9IDEwMDA7XG5cbi8qKlxuICogTWluaW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQG5hbWUgbWluVGltZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBtaW5UaW1lID0gLW1heFRpbWU7XG5cbi8qKlxuICogTWludXRlcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBtaW51dGVzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIG1pbnV0ZXNJbkhvdXIgPSA2MDtcblxuLyoqXG4gKiBNb250aHMgaW4gMSBxdWFydGVyXG4gKlxuICogQG5hbWUgbW9udGhzSW5RdWFydGVyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIG1vbnRoc0luUXVhcnRlciA9IDM7XG5cbi8qKlxuICogTW9udGhzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIG1vbnRoc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBtb250aHNJblllYXIgPSAxMjtcblxuLyoqXG4gKiBRdWFydGVycyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBxdWFydGVyc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBxdWFydGVyc0luWWVhciA9IDQ7XG5cbi8qKlxuICogU2Vjb25kcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIHNlY29uZHNJbkhvdXIgPSAzNjAwO1xuXG4vKipcbiAqIFNlY29uZHMgaW4gMSBtaW51dGVcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5NaW51dGVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgc2Vjb25kc0luTWludXRlID0gNjA7XG5cbi8qKlxuICogU2Vjb25kcyBpbiAxIGRheVxuICpcbiAqIEBuYW1lIHNlY29uZHNJbkRheVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBzZWNvbmRzSW5EYXkgPSBzZWNvbmRzSW5Ib3VyICogMjQ7XG5cbi8qKlxuICogU2Vjb25kcyBpbiAxIHdlZWtcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5XZWVrXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIHNlY29uZHNJbldlZWsgPSBzZWNvbmRzSW5EYXkgKiA3O1xuXG4vKipcbiAqIFNlY29uZHMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBzZWNvbmRzSW5ZZWFyID0gc2Vjb25kc0luRGF5ICogZGF5c0luWWVhcjtcblxuLyoqXG4gKiBTZWNvbmRzIGluIDEgbW9udGhcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5Nb250aFxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBzZWNvbmRzSW5Nb250aCA9IHNlY29uZHNJblllYXIgLyAxMjtcblxuLyoqXG4gKiBTZWNvbmRzIGluIDEgcXVhcnRlclxuICpcbiAqIEBuYW1lIHNlY29uZHNJblF1YXJ0ZXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgc2Vjb25kc0luUXVhcnRlciA9IHNlY29uZHNJbk1vbnRoICogMzsiLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIHZhbHVlIGEgZGF0ZT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZS4gVGhlIGZ1bmN0aW9uIHdvcmtzIGZvciBkYXRlcyB0cmFuc2ZlcnJlZCBhY3Jvc3MgaWZyYW1lcy5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gdGhlIHZhbHVlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBkYXRlXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKE5hTikpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHNvbWUgdmFsdWU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoJzIwMTQtMDItMzEnKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gb2JqZWN0OlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKHt9KVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0RhdGUodmFsdWUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZih2YWx1ZSkgPT09ICdvYmplY3QnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IERhdGVdJztcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzUGFzdFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgcGFzdD9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgcGFzdD9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgaW4gdGhlIHBhc3RcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgMiBKdWx5IDIwMTQgaW4gdGhlIHBhc3Q/XG4gKiBjb25zdCByZXN1bHQgPSBpc1Bhc3QobmV3IERhdGUoMjAxNCwgNiwgMikpXG4gKiAvLz0+IHRydWVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNQYXN0KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIHRvRGF0ZShkaXJ0eURhdGUpLmdldFRpbWUoKSA8IERhdGUubm93KCk7XG59IiwiaW1wb3J0IHN0YXJ0T2ZEYXkgZnJvbSBcIi4uL3N0YXJ0T2ZEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzU2FtZURheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciAwNjowMDowMCBhbmQgNCBTZXB0ZW1iZXIgMTg6MDA6MDAgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQsIDYsIDApLCBuZXcgRGF0ZSgyMDE0LCA4LCA0LCAxOCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIGFuZCA0IE9jdG9iZXIgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE0LCA5LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyLCAyMDE0IGFuZCA0IFNlcHRlbWJlciwgMjAxNSBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTUsIDgsIDQpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVEYXkoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlUmlnaHQpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mRGF5LmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZkRheS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHN0YXJ0T2ZXZWVrIGZyb20gXCIuLi9zdGFydE9mV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNTYW1lV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAzMSBBdWd1c3QgMjAxNCBhbmQgNCBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCA3LCAzMSksIG5ldyBEYXRlKDIwMTQsIDgsIDQpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHdlZWsgc3RhcnRzIHdpdGggTW9uZGF5LFxuICogLy8gYXJlIDMxIEF1Z3VzdCAyMDE0IGFuZCA0IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDcsIDMxKSwgbmV3IERhdGUoMjAxNCwgOCwgNCksIHtcbiAqICAgd2Vla1N0YXJ0c09uOiAxXG4gKiB9KVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMSBKYW51YXJ5IDIwMTQgYW5kIDEgSmFudWFyeSAyMDE1IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDAsIDEpLCBuZXcgRGF0ZSgyMDE1LCAwLCAxKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lV2VlayhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZldlZWsgPSBzdGFydE9mV2VlayhkaXJ0eURhdGVMZWZ0LCBvcHRpb25zKTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZXZWVrID0gc3RhcnRPZldlZWsoZGlydHlEYXRlUmlnaHQsIG9wdGlvbnMpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mV2Vlay5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZXZWVrLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgaXNTYW1lV2VlayBmcm9tIFwiLi4vaXNTYW1lV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNUaGlzV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgd2VlayBhcyB0aGUgY3VycmVudCBkYXRlP1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIHdlZWsgYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gdGhlIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyBpbiB0aGlzIHdlZWtcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAyNSBTZXB0ZW1iZXIgMjAxNCwgaXMgMjEgU2VwdGVtYmVyIDIwMTQgaW4gdGhpcyB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNUaGlzV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyMSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMjUgU2VwdGVtYmVyIDIwMTQgYW5kIHdlZWsgc3RhcnRzIHdpdGggTW9uZGF5XG4gKiAvLyBpcyAyMSBTZXB0ZW1iZXIgMjAxNCBpbiB0aGlzIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RoaXNXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIxKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RoaXNXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGlzU2FtZVdlZWsoZGlydHlEYXRlLCBEYXRlLm5vdygpLCBvcHRpb25zKTtcbn0iLCJpbXBvcnQgaXNTYW1lRGF5IGZyb20gXCIuLi9pc1NhbWVEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVG9kYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHRvZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDYgT2N0b2JlciAxNDowMDowMCB0b2RheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVG9kYXkobmV3IERhdGUoMjAxNCwgOSwgNiwgMTQsIDApKVxuICogLy89PiB0cnVlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVG9kYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lRGF5KGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSk7XG59IiwiaW1wb3J0IGFkZERheXMgZnJvbSBcIi4uL2FkZERheXMvaW5kZXguanNcIjtcbmltcG9ydCBpc1NhbWVEYXkgZnJvbSBcIi4uL2lzU2FtZURheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNUb21vcnJvd1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b21vcnJvdz9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b21vcnJvdz9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdG9tb3Jyb3dcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgNyBPY3RvYmVyIDE0OjAwOjAwIHRvbW9ycm93P1xuICogY29uc3QgcmVzdWx0ID0gaXNUb21vcnJvdyhuZXcgRGF0ZSgyMDE0LCA5LCA3LCAxNCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUb21vcnJvdyhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVEYXkoZGlydHlEYXRlLCBhZGREYXlzKERhdGUubm93KCksIDEpKTtcbn0iLCJpbXBvcnQgaXNEYXRlIGZyb20gXCIuLi9pc0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNWYWxpZFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB2YWxpZD9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgZmFsc2UgaWYgYXJndW1lbnQgaXMgSW52YWxpZCBEYXRlIGFuZCB0cnVlIG90aGVyd2lzZS5cbiAqIEFyZ3VtZW50IGlzIGNvbnZlcnRlZCB0byBEYXRlIHVzaW5nIGB0b0RhdGVgLiBTZWUgW3RvRGF0ZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy90b0RhdGV9XG4gKiBJbnZhbGlkIERhdGUgaXMgYSBEYXRlLCB3aG9zZSB0aW1lIHZhbHVlIGlzIE5hTi5cbiAqXG4gKiBUaW1lIHZhbHVlIG9mIERhdGU6IGh0dHA6Ly9lczUuZ2l0aHViLmlvLyN4MTUuOS4xLjFcbiAqXG4gKiBAcGFyYW0geyp9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHZhbGlkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgyMDE0LCAxLCAzMSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWx1ZSwgY29udmVydGFibGUgaW50byBhIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKDEzOTM4MDQ4MDAwMDApXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKCcnKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNWYWxpZChkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIGlmICghaXNEYXRlKGRpcnR5RGF0ZSkgJiYgdHlwZW9mIGRpcnR5RGF0ZSAhPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgcmV0dXJuICFpc05hTihOdW1iZXIoZGF0ZSkpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdHRlcnMgZnJvbSBcIi4uL19saWIvZm9ybWF0L2xpZ2h0Rm9ybWF0dGVycy9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IGlzVmFsaWQgZnJvbSBcIi4uL2lzVmFsaWQvaW5kZXguanNcIjtcbmltcG9ydCBzdWJNaWxsaXNlY29uZHMgZnJvbSBcIi4uL3N1Yk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjsgLy8gVGhpcyBSZWdFeHAgY29uc2lzdHMgb2YgdGhyZWUgcGFydHMgc2VwYXJhdGVkIGJ5IGB8YDpcbi8vIC0gKFxcdylcXDEqIG1hdGNoZXMgYW55IHNlcXVlbmNlcyBvZiB0aGUgc2FtZSBsZXR0ZXJcbi8vIC0gJycgbWF0Y2hlcyB0d28gcXVvdGUgY2hhcmFjdGVycyBpbiBhIHJvd1xuLy8gLSAnKCcnfFteJ10pKygnfCQpIG1hdGNoZXMgYW55dGhpbmcgc3Vycm91bmRlZCBieSB0d28gcXVvdGUgY2hhcmFjdGVycyAoJyksXG4vLyAgIGV4Y2VwdCBhIHNpbmdsZSBxdW90ZSBzeW1ib2wsIHdoaWNoIGVuZHMgdGhlIHNlcXVlbmNlLlxuLy8gICBUd28gcXVvdGUgY2hhcmFjdGVycyBkbyBub3QgZW5kIHRoZSBzZXF1ZW5jZS5cbi8vICAgSWYgdGhlcmUgaXMgbm8gbWF0Y2hpbmcgc2luZ2xlIHF1b3RlXG4vLyAgIHRoZW4gdGhlIHNlcXVlbmNlIHdpbGwgY29udGludWUgdW50aWwgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLlxuLy8gLSAuIG1hdGNoZXMgYW55IHNpbmdsZSBjaGFyYWN0ZXIgdW5tYXRjaGVkIGJ5IHByZXZpb3VzIHBhcnRzIG9mIHRoZSBSZWdFeHBzXG52YXIgZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC8oXFx3KVxcMSp8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XG52YXIgZXNjYXBlZFN0cmluZ1JlZ0V4cCA9IC9eJyhbXl0qPyknPyQvO1xudmFyIGRvdWJsZVF1b3RlUmVnRXhwID0gLycnL2c7XG52YXIgdW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHAgPSAvW2EtekEtWl0vO1xuXG4vKipcbiAqIEBuYW1lIGxpZ2h0Rm9ybWF0XG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEZvcm1hdCB0aGUgZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nIGluIHRoZSBnaXZlbiBmb3JtYXQuIFVubGlrZSBgZm9ybWF0YCxcbiAqIGBsaWdodEZvcm1hdGAgZG9lc24ndCB1c2UgbG9jYWxlcyBhbmQgb3V0cHV0cyBkYXRlIHVzaW5nIHRoZSBtb3N0IHBvcHVsYXIgdG9rZW5zLlxuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhlIGBsaWdodEZvcm1hdGAgdG9rZW5zIGRpZmZlciBmcm9tIE1vbWVudC5qcyBhbmQgb3RoZXIgbGlicmFyaWVzLlxuICogPiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiBUaGUgY2hhcmFjdGVycyB3cmFwcGVkIGJldHdlZW4gdHdvIHNpbmdsZSBxdW90ZXMgY2hhcmFjdGVycyAoJykgYXJlIGVzY2FwZWQuXG4gKiBUd28gc2luZ2xlIHF1b3RlcyBpbiBhIHJvdywgd2hldGhlciBpbnNpZGUgb3Igb3V0c2lkZSBhIHF1b3RlZCBzZXF1ZW5jZSwgcmVwcmVzZW50IGEgJ3JlYWwnIHNpbmdsZSBxdW90ZS5cbiAqXG4gKiBGb3JtYXQgb2YgdGhlIHN0cmluZyBpcyBiYXNlZCBvbiBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiBodHRwczovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS1kYXRlcy5odG1sI0RhdGVfRmllbGRfU3ltYm9sX1RhYmxlXG4gKlxuICogQWNjZXB0ZWQgcGF0dGVybnM6XG4gKiB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQYXR0ZXJuIHwgUmVzdWx0IGV4YW1wbGVzICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgYS4uYWFhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhICAgIHwgYS5tLiwgcC5tLiAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWFhICAgfCBhLCBwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCBDYWxlbmRhciB5ZWFyICAgICAgICAgICAgICAgICAgIHwgeSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eSAgICAgfCAwNDQsIDAwMSwgMDAwLCAwMTcgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8XG4gKiB8IE1vbnRoIChmb3JtYXR0aW5nKSAgICAgICAgICAgICAgfCBNICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfFxuICogfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgIHwgZCAgICAgICB8IDEsIDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkZCAgICAgIHwgMDEsIDAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgICB8IGggICAgICAgfCAxLCAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaGggICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICB8XG4gKiB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICAgfCBIICAgICAgIHwgMCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhIICAgICAgfCAwMCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfFxuICogfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbSAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbSAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgICB8IHMgICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc3MgICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8XG4gKiB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICAgfCBTICAgICAgIHwgMCwgMSwgLi4uLCA5ICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTICAgICAgfCAwMCwgMDEsIC4uLiwgOTkgICAgICAgICAgICAgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTICAgICB8IDAwMCwgMDAxLCAuLi4sIDk5OSAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1NTICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBmb3JtYXQgLSB0aGUgc3RyaW5nIG9mIHRva2Vuc1xuICogQHJldHVybnMge1N0cmluZ30gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZ1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gZm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyXG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IHJlc3VsdCA9IGxpZ2h0Rm9ybWF0KG5ldyBEYXRlKDIwMTQsIDEsIDExKSwgJ3l5eXktTU0tZGQnKVxuICogLy89PiAnMjAxNC0wMi0xMSdcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsaWdodEZvcm1hdChkaXJ0eURhdGUsIGZvcm1hdFN0cikge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIG9yaWdpbmFsRGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBpZiAoIWlzVmFsaWQob3JpZ2luYWxEYXRlKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHRpbWUgdmFsdWUnKTtcbiAgfVxuXG4gIC8vIENvbnZlcnQgdGhlIGRhdGUgaW4gc3lzdGVtIHRpbWV6b25lIHRvIHRoZSBzYW1lIGRhdGUgaW4gVVRDKzAwOjAwIHRpbWV6b25lLlxuICAvLyBUaGlzIGVuc3VyZXMgdGhhdCB3aGVuIFVUQyBmdW5jdGlvbnMgd2lsbCBiZSBpbXBsZW1lbnRlZCwgbG9jYWxlcyB3aWxsIGJlIGNvbXBhdGlibGUgd2l0aCB0aGVtLlxuICAvLyBTZWUgYW4gaXNzdWUgYWJvdXQgVVRDIGZ1bmN0aW9uczogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcbiAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhvcmlnaW5hbERhdGUpO1xuICB2YXIgdXRjRGF0ZSA9IHN1Yk1pbGxpc2Vjb25kcyhvcmlnaW5hbERhdGUsIHRpbWV6b25lT2Zmc2V0KTtcbiAgdmFyIHRva2VucyA9IGZvcm1hdFN0ci5tYXRjaChmb3JtYXR0aW5nVG9rZW5zUmVnRXhwKTtcblxuICAvLyBUaGUgb25seSBjYXNlIHdoZW4gZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCBkb2Vzbid0IG1hdGNoIHRoZSBzdHJpbmcgaXMgd2hlbiBpdCdzIGVtcHR5XG4gIGlmICghdG9rZW5zKSByZXR1cm4gJyc7XG4gIHZhciByZXN1bHQgPSB0b2tlbnMubWFwKGZ1bmN0aW9uIChzdWJzdHJpbmcpIHtcbiAgICAvLyBSZXBsYWNlIHR3byBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyB3aXRoIG9uZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyXG4gICAgaWYgKHN1YnN0cmluZyA9PT0gXCInJ1wiKSB7XG4gICAgICByZXR1cm4gXCInXCI7XG4gICAgfVxuICAgIHZhciBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09IFwiJ1wiKSB7XG4gICAgICByZXR1cm4gY2xlYW5Fc2NhcGVkU3RyaW5nKHN1YnN0cmluZyk7XG4gICAgfVxuICAgIHZhciBmb3JtYXR0ZXIgPSBmb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcbiAgICBpZiAoZm9ybWF0dGVyKSB7XG4gICAgICByZXR1cm4gZm9ybWF0dGVyKHV0Y0RhdGUsIHN1YnN0cmluZyk7XG4gICAgfVxuICAgIGlmIChmaXJzdENoYXJhY3Rlci5tYXRjaCh1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCkpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdGb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXIgYCcgKyBmaXJzdENoYXJhY3RlciArICdgJyk7XG4gICAgfVxuICAgIHJldHVybiBzdWJzdHJpbmc7XG4gIH0pLmpvaW4oJycpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gY2xlYW5Fc2NhcGVkU3RyaW5nKGlucHV0KSB7XG4gIHZhciBtYXRjaGVzID0gaW5wdXQubWF0Y2goZXNjYXBlZFN0cmluZ1JlZ0V4cCk7XG4gIGlmICghbWF0Y2hlcykge1xuICAgIHJldHVybiBpbnB1dDtcbiAgfVxuICByZXR1cm4gbWF0Y2hlc1sxXS5yZXBsYWNlKGRvdWJsZVF1b3RlUmVnRXhwLCBcIidcIik7XG59IiwiaW1wb3J0IHsgbWlsbGlzZWNvbmRzSW5Ib3VyLCBtaWxsaXNlY29uZHNJbk1pbnV0ZSB9IGZyb20gXCIuLi9jb25zdGFudHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBwYXJzZUlTT1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBQYXJzZSBJU08gc3RyaW5nXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gc3RyaW5nIGluIElTTyA4NjAxIGZvcm1hdCBhbmQgcmV0dXJuIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogRnVuY3Rpb24gYWNjZXB0cyBjb21wbGV0ZSBJU08gODYwMSBmb3JtYXRzIGFzIHdlbGwgYXMgcGFydGlhbCBpbXBsZW1lbnRhdGlvbnMuXG4gKiBJU08gODYwMTogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMVxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpc24ndCBhIHN0cmluZywgdGhlIGZ1bmN0aW9uIGNhbm5vdCBwYXJzZSB0aGUgc3RyaW5nIG9yXG4gKiB0aGUgdmFsdWVzIGFyZSBpbnZhbGlkLCBpdCByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0gezB8MXwyfSBbb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzPTJdIC0gdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzYCBtdXN0IGJlIDAsIDEgb3IgMlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnMjAxNC0wMi0xMVQxMTozMDozMCcgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHBhcnNlSVNPKCcyMDE0LTAyLTExVDExOjMwOjMwJylcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgc3RyaW5nICcrMDIwMTQxMDEnIHRvIGRhdGUsXG4gKiAvLyBpZiB0aGUgYWRkaXRpb25hbCBudW1iZXIgb2YgZGlnaXRzIGluIHRoZSBleHRlbmRlZCB5ZWFyIGZvcm1hdCBpcyAxOlxuICogY29uc3QgcmVzdWx0ID0gcGFyc2VJU08oJyswMjAxNDEwMScsIHsgYWRkaXRpb25hbERpZ2l0czogMSB9KVxuICogLy89PiBGcmkgQXByIDExIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyc2VJU08oYXJndW1lbnQsIG9wdGlvbnMpIHtcbiAgdmFyIF9vcHRpb25zJGFkZGl0aW9uYWxEaTtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhZGRpdGlvbmFsRGlnaXRzID0gdG9JbnRlZ2VyKChfb3B0aW9ucyRhZGRpdGlvbmFsRGkgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0cykgIT09IG51bGwgJiYgX29wdGlvbnMkYWRkaXRpb25hbERpICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRhZGRpdGlvbmFsRGkgOiAyKTtcbiAgaWYgKGFkZGl0aW9uYWxEaWdpdHMgIT09IDIgJiYgYWRkaXRpb25hbERpZ2l0cyAhPT0gMSAmJiBhZGRpdGlvbmFsRGlnaXRzICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2FkZGl0aW9uYWxEaWdpdHMgbXVzdCBiZSAwLCAxIG9yIDInKTtcbiAgfVxuICBpZiAoISh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCkgPT09ICdbb2JqZWN0IFN0cmluZ10nKSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG4gIHZhciBkYXRlU3RyaW5ncyA9IHNwbGl0RGF0ZVN0cmluZyhhcmd1bWVudCk7XG4gIHZhciBkYXRlO1xuICBpZiAoZGF0ZVN0cmluZ3MuZGF0ZSkge1xuICAgIHZhciBwYXJzZVllYXJSZXN1bHQgPSBwYXJzZVllYXIoZGF0ZVN0cmluZ3MuZGF0ZSwgYWRkaXRpb25hbERpZ2l0cyk7XG4gICAgZGF0ZSA9IHBhcnNlRGF0ZShwYXJzZVllYXJSZXN1bHQucmVzdERhdGVTdHJpbmcsIHBhcnNlWWVhclJlc3VsdC55ZWFyKTtcbiAgfVxuICBpZiAoIWRhdGUgfHwgaXNOYU4oZGF0ZS5nZXRUaW1lKCkpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbiAgdmFyIHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICB2YXIgdGltZSA9IDA7XG4gIHZhciBvZmZzZXQ7XG4gIGlmIChkYXRlU3RyaW5ncy50aW1lKSB7XG4gICAgdGltZSA9IHBhcnNlVGltZShkYXRlU3RyaW5ncy50aW1lKTtcbiAgICBpZiAoaXNOYU4odGltZSkpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgfVxuICBpZiAoZGF0ZVN0cmluZ3MudGltZXpvbmUpIHtcbiAgICBvZmZzZXQgPSBwYXJzZVRpbWV6b25lKGRhdGVTdHJpbmdzLnRpbWV6b25lKTtcbiAgICBpZiAoaXNOYU4ob2Zmc2V0KSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBkaXJ0eURhdGUgPSBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lKTtcbiAgICAvLyBqcyBwYXJzZWQgc3RyaW5nIGFzc3VtaW5nIGl0J3MgaW4gVVRDIHRpbWV6b25lXG4gICAgLy8gYnV0IHdlIG5lZWQgaXQgdG8gYmUgcGFyc2VkIGluIG91ciB0aW1lem9uZVxuICAgIC8vIHNvIHdlIHVzZSB1dGMgdmFsdWVzIHRvIGJ1aWxkIGRhdGUgaW4gb3VyIHRpbWV6b25lLlxuICAgIC8vIFllYXIgdmFsdWVzIGZyb20gMCB0byA5OSBtYXAgdG8gdGhlIHllYXJzIDE5MDAgdG8gMTk5OVxuICAgIC8vIHNvIHNldCB5ZWFyIGV4cGxpY2l0bHkgd2l0aCBzZXRGdWxsWWVhci5cbiAgICB2YXIgcmVzdWx0ID0gbmV3IERhdGUoMCk7XG4gICAgcmVzdWx0LnNldEZ1bGxZZWFyKGRpcnR5RGF0ZS5nZXRVVENGdWxsWWVhcigpLCBkaXJ0eURhdGUuZ2V0VVRDTW9udGgoKSwgZGlydHlEYXRlLmdldFVUQ0RhdGUoKSk7XG4gICAgcmVzdWx0LnNldEhvdXJzKGRpcnR5RGF0ZS5nZXRVVENIb3VycygpLCBkaXJ0eURhdGUuZ2V0VVRDTWludXRlcygpLCBkaXJ0eURhdGUuZ2V0VVRDU2Vjb25kcygpLCBkaXJ0eURhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCkpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgcmV0dXJuIG5ldyBEYXRlKHRpbWVzdGFtcCArIHRpbWUgKyBvZmZzZXQpO1xufVxudmFyIHBhdHRlcm5zID0ge1xuICBkYXRlVGltZURlbGltaXRlcjogL1tUIF0vLFxuICB0aW1lWm9uZURlbGltaXRlcjogL1taIF0vaSxcbiAgdGltZXpvbmU6IC8oW1orLV0uKikkL1xufTtcbnZhciBkYXRlUmVnZXggPSAvXi0/KD86KFxcZHszfSl8KFxcZHsyfSkoPzotPyhcXGR7Mn0pKT98VyhcXGR7Mn0pKD86LT8oXFxkezF9KSk/fCkkLztcbnZhciB0aW1lUmVnZXggPSAvXihcXGR7Mn0oPzpbLixdXFxkKik/KSg/Ojo/KFxcZHsyfSg/OlsuLF1cXGQqKT8pKT8oPzo6PyhcXGR7Mn0oPzpbLixdXFxkKik/KSk/JC87XG52YXIgdGltZXpvbmVSZWdleCA9IC9eKFsrLV0pKFxcZHsyfSkoPzo6PyhcXGR7Mn0pKT8kLztcbmZ1bmN0aW9uIHNwbGl0RGF0ZVN0cmluZyhkYXRlU3RyaW5nKSB7XG4gIHZhciBkYXRlU3RyaW5ncyA9IHt9O1xuICB2YXIgYXJyYXkgPSBkYXRlU3RyaW5nLnNwbGl0KHBhdHRlcm5zLmRhdGVUaW1lRGVsaW1pdGVyKTtcbiAgdmFyIHRpbWVTdHJpbmc7XG5cbiAgLy8gVGhlIHJlZ2V4IG1hdGNoIHNob3VsZCBvbmx5IHJldHVybiBhdCBtYXhpbXVtIHR3byBhcnJheSBlbGVtZW50cy5cbiAgLy8gW2RhdGVdLCBbdGltZV0sIG9yIFtkYXRlLCB0aW1lXS5cbiAgaWYgKGFycmF5Lmxlbmd0aCA+IDIpIHtcbiAgICByZXR1cm4gZGF0ZVN0cmluZ3M7XG4gIH1cbiAgaWYgKC86Ly50ZXN0KGFycmF5WzBdKSkge1xuICAgIHRpbWVTdHJpbmcgPSBhcnJheVswXTtcbiAgfSBlbHNlIHtcbiAgICBkYXRlU3RyaW5ncy5kYXRlID0gYXJyYXlbMF07XG4gICAgdGltZVN0cmluZyA9IGFycmF5WzFdO1xuICAgIGlmIChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlci50ZXN0KGRhdGVTdHJpbmdzLmRhdGUpKSB7XG4gICAgICBkYXRlU3RyaW5ncy5kYXRlID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlcilbMF07XG4gICAgICB0aW1lU3RyaW5nID0gZGF0ZVN0cmluZy5zdWJzdHIoZGF0ZVN0cmluZ3MuZGF0ZS5sZW5ndGgsIGRhdGVTdHJpbmcubGVuZ3RoKTtcbiAgICB9XG4gIH1cbiAgaWYgKHRpbWVTdHJpbmcpIHtcbiAgICB2YXIgdG9rZW4gPSBwYXR0ZXJucy50aW1lem9uZS5leGVjKHRpbWVTdHJpbmcpO1xuICAgIGlmICh0b2tlbikge1xuICAgICAgZGF0ZVN0cmluZ3MudGltZSA9IHRpbWVTdHJpbmcucmVwbGFjZSh0b2tlblsxXSwgJycpO1xuICAgICAgZGF0ZVN0cmluZ3MudGltZXpvbmUgPSB0b2tlblsxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0ZVN0cmluZ3MudGltZSA9IHRpbWVTdHJpbmc7XG4gICAgfVxuICB9XG4gIHJldHVybiBkYXRlU3RyaW5ncztcbn1cbmZ1bmN0aW9uIHBhcnNlWWVhcihkYXRlU3RyaW5nLCBhZGRpdGlvbmFsRGlnaXRzKSB7XG4gIHZhciByZWdleCA9IG5ldyBSZWdFeHAoJ14oPzooXFxcXGR7NH18WystXVxcXFxkeycgKyAoNCArIGFkZGl0aW9uYWxEaWdpdHMpICsgJ30pfChcXFxcZHsyfXxbKy1dXFxcXGR7JyArICgyICsgYWRkaXRpb25hbERpZ2l0cykgKyAnfSkkKScpO1xuICB2YXIgY2FwdHVyZXMgPSBkYXRlU3RyaW5nLm1hdGNoKHJlZ2V4KTtcbiAgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHllYXJcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIHtcbiAgICB5ZWFyOiBOYU4sXG4gICAgcmVzdERhdGVTdHJpbmc6ICcnXG4gIH07XG4gIHZhciB5ZWFyID0gY2FwdHVyZXNbMV0gPyBwYXJzZUludChjYXB0dXJlc1sxXSkgOiBudWxsO1xuICB2YXIgY2VudHVyeSA9IGNhcHR1cmVzWzJdID8gcGFyc2VJbnQoY2FwdHVyZXNbMl0pIDogbnVsbDtcblxuICAvLyBlaXRoZXIgeWVhciBvciBjZW50dXJ5IGlzIG51bGwsIG5vdCBib3RoXG4gIHJldHVybiB7XG4gICAgeWVhcjogY2VudHVyeSA9PT0gbnVsbCA/IHllYXIgOiBjZW50dXJ5ICogMTAwLFxuICAgIHJlc3REYXRlU3RyaW5nOiBkYXRlU3RyaW5nLnNsaWNlKChjYXB0dXJlc1sxXSB8fCBjYXB0dXJlc1syXSkubGVuZ3RoKVxuICB9O1xufVxuZnVuY3Rpb24gcGFyc2VEYXRlKGRhdGVTdHJpbmcsIHllYXIpIHtcbiAgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHllYXJcbiAgaWYgKHllYXIgPT09IG51bGwpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB2YXIgY2FwdHVyZXMgPSBkYXRlU3RyaW5nLm1hdGNoKGRhdGVSZWdleCk7XG4gIC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCBzdHJpbmdcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIHZhciBpc1dlZWtEYXRlID0gISFjYXB0dXJlc1s0XTtcbiAgdmFyIGRheU9mWWVhciA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbMV0pO1xuICB2YXIgbW9udGggPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzJdKSAtIDE7XG4gIHZhciBkYXkgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzNdKTtcbiAgdmFyIHdlZWsgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzRdKTtcbiAgdmFyIGRheU9mV2VlayA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbNV0pIC0gMTtcbiAgaWYgKGlzV2Vla0RhdGUpIHtcbiAgICBpZiAoIXZhbGlkYXRlV2Vla0RhdGUoeWVhciwgd2VlaywgZGF5T2ZXZWVrKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICAgIHJldHVybiBkYXlPZklTT1dlZWtZZWFyKHllYXIsIHdlZWssIGRheU9mV2Vlayk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgwKTtcbiAgICBpZiAoIXZhbGlkYXRlRGF0ZSh5ZWFyLCBtb250aCwgZGF5KSB8fCAhdmFsaWRhdGVEYXlPZlllYXJEYXRlKHllYXIsIGRheU9mWWVhcikpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKHllYXIsIG1vbnRoLCBNYXRoLm1heChkYXlPZlllYXIsIGRheSkpO1xuICAgIHJldHVybiBkYXRlO1xuICB9XG59XG5mdW5jdGlvbiBwYXJzZURhdGVVbml0KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA/IHBhcnNlSW50KHZhbHVlKSA6IDE7XG59XG5mdW5jdGlvbiBwYXJzZVRpbWUodGltZVN0cmluZykge1xuICB2YXIgY2FwdHVyZXMgPSB0aW1lU3RyaW5nLm1hdGNoKHRpbWVSZWdleCk7XG4gIGlmICghY2FwdHVyZXMpIHJldHVybiBOYU47IC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB0aW1lXG5cbiAgdmFyIGhvdXJzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1sxXSk7XG4gIHZhciBtaW51dGVzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1syXSk7XG4gIHZhciBzZWNvbmRzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1szXSk7XG4gIGlmICghdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cbiAgcmV0dXJuIGhvdXJzICogbWlsbGlzZWNvbmRzSW5Ib3VyICsgbWludXRlcyAqIG1pbGxpc2Vjb25kc0luTWludXRlICsgc2Vjb25kcyAqIDEwMDA7XG59XG5mdW5jdGlvbiBwYXJzZVRpbWVVbml0KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAmJiBwYXJzZUZsb2F0KHZhbHVlLnJlcGxhY2UoJywnLCAnLicpKSB8fCAwO1xufVxuZnVuY3Rpb24gcGFyc2VUaW1lem9uZSh0aW1lem9uZVN0cmluZykge1xuICBpZiAodGltZXpvbmVTdHJpbmcgPT09ICdaJykgcmV0dXJuIDA7XG4gIHZhciBjYXB0dXJlcyA9IHRpbWV6b25lU3RyaW5nLm1hdGNoKHRpbWV6b25lUmVnZXgpO1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gMDtcbiAgdmFyIHNpZ24gPSBjYXB0dXJlc1sxXSA9PT0gJysnID8gLTEgOiAxO1xuICB2YXIgaG91cnMgPSBwYXJzZUludChjYXB0dXJlc1syXSk7XG4gIHZhciBtaW51dGVzID0gY2FwdHVyZXNbM10gJiYgcGFyc2VJbnQoY2FwdHVyZXNbM10pIHx8IDA7XG4gIGlmICghdmFsaWRhdGVUaW1lem9uZShob3VycywgbWludXRlcykpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG4gIHJldHVybiBzaWduICogKGhvdXJzICogbWlsbGlzZWNvbmRzSW5Ib3VyICsgbWludXRlcyAqIG1pbGxpc2Vjb25kc0luTWludXRlKTtcbn1cbmZ1bmN0aW9uIGRheU9mSVNPV2Vla1llYXIoaXNvV2Vla1llYXIsIHdlZWssIGRheSkge1xuICB2YXIgZGF0ZSA9IG5ldyBEYXRlKDApO1xuICBkYXRlLnNldFVUQ0Z1bGxZZWFyKGlzb1dlZWtZZWFyLCAwLCA0KTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeURheSA9IGRhdGUuZ2V0VVRDRGF5KCkgfHwgNztcbiAgdmFyIGRpZmYgPSAod2VlayAtIDEpICogNyArIGRheSArIDEgLSBmb3VydGhPZkphbnVhcnlEYXk7XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSArIGRpZmYpO1xuICByZXR1cm4gZGF0ZTtcbn1cblxuLy8gVmFsaWRhdGlvbiBmdW5jdGlvbnNcblxuLy8gRmVicnVhcnkgaXMgbnVsbCB0byBoYW5kbGUgdGhlIGxlYXAgeWVhciAodXNpbmcgfHwpXG52YXIgZGF5c0luTW9udGhzID0gWzMxLCBudWxsLCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV07XG5mdW5jdGlvbiBpc0xlYXBZZWFySW5kZXgoeWVhcikge1xuICByZXR1cm4geWVhciAlIDQwMCA9PT0gMCB8fCB5ZWFyICUgNCA9PT0gMCAmJiB5ZWFyICUgMTAwICE9PSAwO1xufVxuZnVuY3Rpb24gdmFsaWRhdGVEYXRlKHllYXIsIG1vbnRoLCBkYXRlKSB7XG4gIHJldHVybiBtb250aCA+PSAwICYmIG1vbnRoIDw9IDExICYmIGRhdGUgPj0gMSAmJiBkYXRlIDw9IChkYXlzSW5Nb250aHNbbW9udGhdIHx8IChpc0xlYXBZZWFySW5kZXgoeWVhcikgPyAyOSA6IDI4KSk7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZURheU9mWWVhckRhdGUoeWVhciwgZGF5T2ZZZWFyKSB7XG4gIHJldHVybiBkYXlPZlllYXIgPj0gMSAmJiBkYXlPZlllYXIgPD0gKGlzTGVhcFllYXJJbmRleCh5ZWFyKSA/IDM2NiA6IDM2NSk7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZVdlZWtEYXRlKF95ZWFyLCB3ZWVrLCBkYXkpIHtcbiAgcmV0dXJuIHdlZWsgPj0gMSAmJiB3ZWVrIDw9IDUzICYmIGRheSA+PSAwICYmIGRheSA8PSA2O1xufVxuZnVuY3Rpb24gdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSB7XG4gIGlmIChob3VycyA9PT0gMjQpIHtcbiAgICByZXR1cm4gbWludXRlcyA9PT0gMCAmJiBzZWNvbmRzID09PSAwO1xuICB9XG4gIHJldHVybiBzZWNvbmRzID49IDAgJiYgc2Vjb25kcyA8IDYwICYmIG1pbnV0ZXMgPj0gMCAmJiBtaW51dGVzIDwgNjAgJiYgaG91cnMgPj0gMCAmJiBob3VycyA8IDI1O1xufVxuZnVuY3Rpb24gdmFsaWRhdGVUaW1lem9uZShfaG91cnMsIG1pbnV0ZXMpIHtcbiAgcmV0dXJuIG1pbnV0ZXMgPj0gMCAmJiBtaW51dGVzIDw9IDU5O1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mRGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZldlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFN1biBBdWcgMzEgMjAxNCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0aGUgd2VlayBzdGFydHMgb24gTW9uZGF5LCB0aGUgc3RhcnQgb2YgdGhlIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZldlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMCk7XG5cbiAgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldERheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgYWRkTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9hZGRNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdWJNaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gYmUgc3VidHJhY3RlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaWxsaXNlY29uZHMgc3VidHJhY3RlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdWJ0cmFjdCA3NTAgbWlsbGlzZWNvbmRzIGZyb20gMTAgSnVseSAyMDE0IDEyOjQ1OjMwLjAwMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN1Yk1pbGxpc2Vjb25kcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDQ1LCAzMCwgMCksIDc1MClcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDEyOjQ1OjI5LjI1MFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdWJNaWxsaXNlY29uZHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBhZGRNaWxsaXNlY29uZHMoZGlydHlEYXRlLCAtYW1vdW50KTtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7XG5cbiAgLy8gQ2xvbmUgdGhlIGRhdGVcbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGlzVG9kYXksIGlzUGFzdCwgaXNUb21vcnJvdywgcGFyc2VJU08sIGxpZ2h0Rm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XHJcbmltcG9ydCBwdWJTdWIgZnJvbSBcIi4vcHViU3ViLmpzXCI7XHJcbmltcG9ydCBub1Byb2plY3RzSW1nIGZyb20gXCIuLi9pbWcvbm9wcm9qZWN0cy5wbmdcIjtcclxuXHJcbmNvbnN0IGhvbWVQYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lLXBhZ2VcIiksXHJcbiAgbWVudUljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnUtaWNvblwiKSxcclxuICB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YWJzXCIpLFxyXG4gIGNyZWF0ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3YnRuXCIpLFxyXG4gIHByb2plY3RzUGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHMtcGFnZVwiKSxcclxuICBub3Rlc1BhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vdGVzLXBhZ2VcIiksXHJcbiAgbW9yZVBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vcmUtcGFnZVwiKSxcclxuICBwYWdlcyA9IFtob21lUGFnZSwgcHJvamVjdHNQYWdlLCBub3Rlc1BhZ2UsIG1vcmVQYWdlXSxcclxuICBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxcIiksXHJcbiAgbW9kYWxUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWwtdGl0bGVcIiksXHJcbiAgbW9kYWxNZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbC1tZXNzYWdlXCIpLFxyXG4gIG1vZGFsQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWwtY29udGVudFwiKSxcclxuICBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuXHJcbihmdW5jdGlvbigpIHtcclxuICBfaW5pdCgpO1xyXG5cclxuICBmdW5jdGlvbiBfaW5pdCgpIHtcclxuICAgIHB1YlN1Yi5zdWJzY3JpYmUoXCJkYXRhQ2hhbmdlZFwiLCByZW5kZXJEYXRhKTtcclxuICAgIGltZy5zcmMgPSBub1Byb2plY3RzSW1nO1xyXG4gICAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHZhbGlkYXRlRm9ybSk7XHJcbiAgICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHZhbGlkYXRlRm9ybSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB2YWxpZGF0ZUZvcm0oKSB7XHJcbiAgICBjb25zdCBkYXRhID0gT2JqZWN0LmZyb21FbnRyaWVzKG5ldyBGb3JtRGF0YShtb2RhbENvbnRlbnQuY2hpbGRyZW5bMF0pKTtcclxuICAgIGxldCBpc1ZhbGlkID0gT2JqZWN0LnZhbHVlcyhkYXRhKS5ldmVyeSgoZW50cnkpID0+IGVudHJ5KTtcclxuICBcclxuICAgIGlmIChkYXRhKSB7XHJcbiAgICAgIGlmICghaXNWYWxpZCkge1xyXG4gICAgICAgIG9wZW5Nb2RhbE1lc3NhZ2UoXCJBbGwgaW5wdXRzIG11c3QgYmUgZmlsbGVkIGFwcHJvcHJpYXRlbHlcIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9IGVsc2UgaWYgKGRhdGEuZHVlRGF0ZSAmJiAoaXNQYXN0KG5ldyBEYXRlKGRhdGEuZHVlRGF0ZSkpICYmICFpc1RvZGF5KG5ldyBEYXRlKGRhdGEuZHVlRGF0ZSkpKSkge1xyXG4gICAgICAgIC8vIFJlamVjdCBwYXN0IGRhdGVzXHJcbiAgICAgICAgb3Blbk1vZGFsTWVzc2FnZShcIlBhc3QgZGF0ZXMgYXJlIG5vdCBhbGxvd2VkIVwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgY2xvc2VNb2RhbE1lc3NhZ2UoKTtcclxuICAgIH1cclxuICB9XHJcbiAgZnVuY3Rpb24gb3Blbk1vZGFsTWVzc2FnZShtZXNzYWdlKSB7XHJcbiAgICBtb2RhbE1lc3NhZ2UudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xyXG4gICAgbW9kYWxNZXNzYWdlLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICBtb2RhbENvbnRlbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvblt0eXBlPSdzdWJtaXQnXVwiKS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGNsb3NlTW9kYWxNZXNzYWdlKCkge1xyXG4gICAgbW9kYWxNZXNzYWdlLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBtb2RhbE1lc3NhZ2UuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgIG1vZGFsQ29udGVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uW3R5cGU9J3N1Ym1pdCddXCIpLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgfVxyXG59KSgpXHJcblxyXG5cclxuXHJcbmNvbnN0IG1vZGFsRm9ybXMgPSB7XHJcbiAgXCJuZXctcHJvamVjdFwiOiBgPGZvcm0gZGF0YS1hY3Rpb24tdHlwZT1cIm5ldy1wcm9qZWN0XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgPGxhYmVsIGZvcj1cInByb2plY3QtdGl0bGVcIj5UaXRsZTwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXQgaWQ9XCJwcm9qZWN0LXRpdGxlXCIgbmFtZT1cInRpdGxlXCIgdHlwZT1cInRleHRcIiBtYXhsZW5ndGg9XCI0MFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgcHJvamVjdCdzIHRpdGxlXCIgcmVxdWlyZWQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TYXZlPC9idXR0b24+XHJcbiAgICA8L2Zvcm0+YCxcclxuICBcIm5ldy1ub3RlXCI6IGA8Zm9ybSBkYXRhLWFjdGlvbi10eXBlPVwibmV3LW5vdGVcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJub3RlLXRpdGxlXCI+VGl0bGU8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCBpZD1cIm5vdGUtdGl0bGVcIiBuYW1lPVwidGl0bGVcIiB0eXBlPVwidGV4dFwiIG1heGxlbmd0aD1cIjQwXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBub3RlIHRpdGxlXCIgcmVxdWlyZWQ+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJub3RlLWNvbnRlbnRcIj5Ob3RlPC9sYWJlbD5cclxuICAgICAgICA8dGV4dGFyZWEgbmFtZT1cIm5vdGVcIiBpZD1cIm5vdGUtY29udGVudFwiIHBsYWNlaG9sZGVyPVwiWW91ciBub3RlIGdvZXMgaGVyZVwiPjwvdGV4dGFyZWE+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlNhdmU8L2J1dHRvbj5cclxuICAgIDwvZm9ybT5gLFxyXG4gIFwibmV3LXRhc2tcIjogYDxmb3JtIGRhdGEtYWN0aW9uLXR5cGU9XCJuZXctdGFza1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XHJcbiAgICAgICAgPGxhYmVsIGZvcj1cInRhc2stdGl0bGVcIj5UaXRsZTwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IGlkPVwidGFzay10aXRsZVwiIG5hbWU9XCJ0aXRsZVwiIHR5cGU9XCJ0ZXh0XCIgbWF4bGVuZ3RoPVwiMzVcIiBwbGFjZWhvbGRlcj1cImUuZzogU3VtYml0IGZlZWRiYWNrIGZvcm1cIiByZXF1aXJlZD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XHJcbiAgICAgICAgPGxhYmVsIGZvcj1cInRhc2stZGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGlkPVwidGFzay1kZXNjcmlwdGlvblwiIHBsYWNlaG9sZGVyPVwiR2l2ZSBhIGJyaWVmIGRlc2NyaXBsdGlvbiBvZiB0aGUgdGFza1wiPjwvdGV4dGFyZWE+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJ0YXNrLWR1ZWRhdGVcIj5EdWUgZGF0ZTwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IGlkPVwidGFzay1kdWVkYXRlXCIgbmFtZT1cImR1ZURhdGVcIiB0eXBlPVwiZGF0ZVwiIHJlcXVpcmVkPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cclxuICAgICAgICA8bGFiZWw+UHJpb3JpdHk8L2xhYmVsPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJyYWRpby1idG5zLWNudHJcIj5cclxuICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJ0YXNrLXByaW9yaXR5LWhcIiBuYW1lPVwicHJpb3JpdHlcIiB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cImhpZ2hcIiByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0YXNrLXByaW9yaXR5LWhcIj5IaWdoPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInRhc2stcHJpb3JpdHktbVwiIG5hbWU9XCJwcmlvcml0eVwiIHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwibWVkaXVtXCIgY2hlY2tlZCByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0YXNrLXByaW9yaXR5LW1cIj5NZWRpdW08L2xhYmVsPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGlkPVwidGFzay1wcmlvcml0eS1sXCIgbmFtZT1cInByaW9yaXR5XCIgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCJsb3dcIiByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0YXNrLXByaW9yaXR5LWxcIj5Mb3c8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlNhdmU8L2J1dHRvbj5cclxuPC9mb3JtPmAsXHJcbn07XHJcblxyXG5mdW5jdGlvbiBzd2l0aFRhYihlKSB7XHJcbiAgLy8gRG8gbm90aGluZyBpZiB1c2VyIGNsaWNrcyBhbiBhY3RpdmUgdGFiXHJcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkgcmV0dXJuO1xyXG5cclxuICAvLyBSZW1vdmUgdGhlIGNsYXNzLCAnYWN0aXZlLXBhZ2UnIGFuZCAnYWN0aXZlJ1xyXG4gIHBhZ2VzLmZvckVhY2goKHBhZ2UpID0+IHtcclxuICAgIGlmIChwYWdlLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZS1wYWdlXCIpKSB7XHJcbiAgICAgIHBhZ2UuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1wYWdlXCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHRhYnMuZm9yRWFjaCgodGFiKSA9PiB7XHJcbiAgICBpZiAodGFiLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xyXG4gICAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy8gQWRkIHRoZSBjbGFzcywgJ2FjdGl2ZS1wYWdlJyAmICdhY3RpdmUnYW5kIGNoYW5nZSBjcmVhdGVCdG4gdGV4dFxyXG4gIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS10YXJnZXQtdmFsdWVcIik7XHJcbiAgc3dpdGNoICh0YXJnZXQpIHtcclxuICAgIGNhc2UgXCJob21lXCI6XHJcbiAgICAgIGhvbWVQYWdlLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtcGFnZVwiKTtcclxuICAgICAgY3JlYXRlQnRuLnRleHRDb250ZW50ID0gXCJOZXcgUHJvamVjdFwiO1xyXG4gICAgICBjcmVhdGVCdG4uc2V0QXR0cmlidXRlKFwiZGF0YS1kaWFsb2d1ZVwiLCBcInByb2plY3RcIik7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcInByb2plY3RzXCI6XHJcbiAgICAgIHByb2plY3RzUGFnZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLXBhZ2VcIik7XHJcbiAgICAgIGNyZWF0ZUJ0bi50ZXh0Q29udGVudCA9IFwiTmV3IFByb2plY3RcIjtcclxuICAgICAgY3JlYXRlQnRuLnNldEF0dHJpYnV0ZShcImRhdGEtZGlhbG9ndWVcIiwgXCJwcm9qZWN0XCIpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCJub3Rlc1wiOlxyXG4gICAgICBub3Rlc1BhZ2UuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1wYWdlXCIpO1xyXG4gICAgICBjcmVhdGVCdG4udGV4dENvbnRlbnQgPSBcIk5ldyBOb3RlXCI7XHJcbiAgICAgIGNyZWF0ZUJ0bi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWRpYWxvZ3VlXCIsIFwibm90ZVwiKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwibW9yZVwiOlxyXG4gICAgICBtb3JlUGFnZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLXBhZ2VcIik7XHJcbiAgfVxyXG5cclxuICBkb2N1bWVudC50aXRsZSA9IFwiVG9kb0xpc3QgLSBcIiArIHRhcmdldFswXS50b1VwcGVyQ2FzZSgpICsgdGFyZ2V0LnNsaWNlKDEpO1xyXG4gIHRvZ2dsZU1lbnUoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW52b2tlQWN0aW9uKGUsIGVsZW0pIHtcclxuICBpZiAoZWxlbS5pZCA9PT0gXCJjbG9zZS1tb2RhbFwiKSB7XHJcbiAgICBjbG9zZU1vZGFsKCk7XHJcbiAgfSBlbHNlIGlmIChlbGVtLmlkID09PSBcInJlc2V0LWJ0blwiKSB7XHJcbiAgICBvcGVuQ29uZmlybURpYWxvZ3VlKHsgYWN0aW9uOiBcInJlc2V0XCIgfSk7XHJcbiAgfSBlbHNlIGlmIChlbGVtLmlkID09PSBcImNhbmNlbC1idG5cIikge1xyXG4gICAgY2xvc2VNb2RhbCgpO1xyXG4gIH0gZWxzZSBpZiAoZWxlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFjdGlvbi10eXBlXCIpID09PSBcIm5ldy10YXNrXCIpIHtcclxuICAgIGNvbnN0IGFjdGlvbiA9IGVsZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS1hY3Rpb24tdHlwZVwiKTtcclxuICAgIGNvbnN0IHBpbmRleCA9IHBhcnNlSW50KGVsZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0XCIpKTtcclxuICAgIG9wZW5EaWFsb2d1ZSh7IGFjdGlvbiwgcGluZGV4IH0pO1xyXG4gIH0gZWxzZSBpZiAoZWxlbSA9PT0gY3JlYXRlQnRuKSB7XHJcbiAgICBjb25zdCBhY3Rpb24gPSBgbmV3LSR7Y3JlYXRlQnRuLmdldEF0dHJpYnV0ZShcImRhdGEtZGlhbG9ndWVcIil9YDtcclxuICAgIG9wZW5EaWFsb2d1ZSh7IGFjdGlvbiB9KTtcclxuICB9IGVsc2UgaWYgKGVsZW0gPT09IG1vZGFsKSB7XHJcbiAgICBjbG9zZU1vZGFsKCk7XHJcbiAgfSBlbHNlIGlmIChlbGVtID09PSBtZW51SWNvbikge1xyXG4gICAgdG9nZ2xlTWVudSgpO1xyXG4gIH1cclxuXHJcbiAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxufVxyXG5cclxuZnVuY3Rpb24gb3BlbkRpYWxvZ3VlKGRpYWxvZ3VlKSB7XHJcbiAgbW9kYWxDb250ZW50LmlubmVySFRNTCA9IG1vZGFsRm9ybXNbZGlhbG9ndWUuYWN0aW9uXSB8fCBcIlwiO1xyXG4gIG1vZGFsVGl0bGUudGV4dENvbnRlbnQgPSBkaWFsb2d1ZS5hY3Rpb24uc3BsaXQoXCItXCIpLmpvaW4oXCIgXCIpO1xyXG5cclxuICBpZiAoZGlhbG9ndWUuYWN0aW9uID09PSBcIm5ldy10YXNrXCIpIHtcclxuICAgIG1vZGFsQ29udGVudFxyXG4gICAgICAucXVlcnlTZWxlY3RvcihcImJ1dHRvblt0eXBlPSdzdWJtaXQnXVwiKVxyXG4gICAgICAuc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0XCIsIGRpYWxvZ3VlLnBpbmRleCk7XHJcbiAgfSBlbHNlIGlmIChkaWFsb2d1ZS5hY3Rpb24gPT09IFwidmlldy10YXNrXCIpIHtcclxuICAgIG1vZGFsQ29udGVudC5pbm5lckhUTUwgPSBgPGRpdiBpZD1cImRldGFpbHNcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICAgIDxkaXY+VGl0bGU8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICA8ZGl2PkRlc2NyaXB0aW9uPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgPGRpdj5EdWUgZGF0ZTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+JHtcclxuICAgICAgICAgICAgICAgIGlzVG9kYXkobmV3IERhdGUoZGlhbG9ndWUuZHVlRGF0ZSkpXHJcbiAgICAgICAgICAgICAgICAgID8gXCJUb2RheVwiXHJcbiAgICAgICAgICAgICAgICAgIDogaXNUb21vcnJvdyhuZXcgRGF0ZShkaWFsb2d1ZS5kdWVEYXRlKSlcclxuICAgICAgICAgICAgICAgICAgPyBcIlRvbW9ycm93XCJcclxuICAgICAgICAgICAgICAgICAgOiBsaWdodEZvcm1hdChwYXJzZUlTTyhuZXcgRGF0ZShkaWFsb2d1ZS5kdWVEYXRlKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKSksIFwiZGQvTU0veXl5eVwiKVxyXG4gICAgICAgICAgICAgIH08L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgPGRpdj5Qcmlvcml0eTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWxibC0ke2RpYWxvZ3VlLnByaW9yaXR5WzBdfVwiPiR7ZGlhbG9ndWUucHJpb3JpdHl9PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+YDtcclxuICAgIG1vZGFsQ29udGVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBcIi5maWVsZDpmaXJzdC1jaGlsZCA+IGRpdjpsYXN0LWNoaWxkXCJcclxuICAgICkudGV4dENvbnRlbnQgPSBkaWFsb2d1ZS50aXRsZTtcclxuICAgIG1vZGFsQ29udGVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBcIi5maWVsZDpudGgtY2hpbGQoMikgPiBkaXY6bGFzdC1jaGlsZFwiXHJcbiAgICApLnRleHRDb250ZW50ID0gZGlhbG9ndWUuZGVzY3JpcHRpb24gPyBkaWFsb2d1ZS5kZXNjcmlwdGlvbiA6IFwiTm9uZVwiO1xyXG4gIH0gZWxzZSBpZiAoZGlhbG9ndWUuYWN0aW9uID09PSBcImVkaXQtcHJvamVjdFwiKSB7XHJcbiAgICBtb2RhbENvbnRlbnQuaW5uZXJIVE1MID0gYDxmb3JtIGRhdGEtYWN0aW9uLXR5cGU9XCJlZGl0LXByb2plY3RcIiBkYXRhLXByb2plY3Q9XCIke2RpYWxvZ3VlLmluZGV4fVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwicHJvamVjdC10aXRsZVwiPlRpdGxlPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IGlkPVwicHJvamVjdC10aXRsZVwiIG5hbWU9XCJ0aXRsZVwiIHR5cGU9XCJ0ZXh0XCIgbWF4bGVuZ3RoPVwiNDBcIiB2YWx1ZT1cIiR7ZGlhbG9ndWUudGl0bGV9XCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2F2ZTwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+YDtcclxuICB9IGVsc2UgaWYgKGRpYWxvZ3VlLmFjdGlvbiA9PT0gXCJlZGl0LXRhc2tcIikge1xyXG4gICAgbW9kYWxDb250ZW50LmlubmVySFRNTCA9IGA8Zm9ybSBkYXRhLWFjdGlvbi10eXBlPVwiZWRpdC10YXNrXCIgZGF0YS1wcm9qZWN0PVwiJHtkaWFsb2d1ZS5waW5kZXh9XCIgZGF0YS10YXNrPVwiJHtkaWFsb2d1ZS50aW5kZXh9XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidGFzay10aXRsZVwiPlRpdGxlPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJ0YXNrLXRpdGxlXCIgbmFtZT1cInRpdGxlXCIgdHlwZT1cInRleHRcIiBtYXhsZW5ndGg9XCIzNVwiIHZhbHVlPVwiJHtkaWFsb2d1ZS50aXRsZX1cIiByZXF1aXJlZD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRhc2stZGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGlkPVwidGFzay1kZXNjcmlwdGlvblwiPiR7ZGlhbG9ndWUuZGVzY3JpcHRpb259PC90ZXh0YXJlYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRhc2stZHVlZGF0ZVwiPkR1ZSBkYXRlPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJ0YXNrLWR1ZWRhdGVcIiBuYW1lPVwiZHVlRGF0ZVwiIHR5cGU9XCJkYXRlXCIgdmFsdWU9XCIke2RpYWxvZ3VlLmR1ZURhdGUudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCl9XCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbD5Qcmlvcml0eTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGRpdiBpZD1cInJhZGlvLWJ0bnMtY250clwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInRhc2stcHJpb3JpdHktaFwiIG5hbWU9XCJwcmlvcml0eVwiIHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiaGlnaFwiIHJlcXVpcmVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRhc2stcHJpb3JpdHktaFwiPkhpZ2g8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwidGFzay1wcmlvcml0eS1tXCIgbmFtZT1cInByaW9yaXR5XCIgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCJtZWRpdW1cIiByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0YXNrLXByaW9yaXR5LW1cIj5NZWRpdW08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwidGFzay1wcmlvcml0eS1sXCIgbmFtZT1cInByaW9yaXR5XCIgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCJsb3dcIiByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0YXNrLXByaW9yaXR5LWxcIj5Mb3c8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlNhdmU8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPmA7XHJcbiAgICBtb2RhbENvbnRlbnQucXVlcnlTZWxlY3RvcihgI3Rhc2stcHJpb3JpdHktJHtkaWFsb2d1ZS5wcmlvcml0eS50b0xvd2VyQ2FzZSgpWzBdfWApLmNoZWNrZWQgPSB0cnVlO1xyXG4gIH0gZWxzZSBpZiAoZGlhbG9ndWUuYWN0aW9uID09PSBcImVkaXQtbm90ZVwiKSB7XHJcbiAgICBtb2RhbENvbnRlbnQuaW5uZXJIVE1MID0gYDxmb3JtIGRhdGEtYWN0aW9uLXR5cGU9XCJlZGl0LW5vdGVcIiBkYXRhLW5vdGU9XCIke2RpYWxvZ3VlLmluZGV4fVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwibm90ZS10aXRsZVwiPlRpdGxlPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IGlkPVwibm90ZS10aXRsZVwiIG5hbWU9XCJ0aXRsZVwiIHR5cGU9XCJ0ZXh0XCIgbWF4bGVuZ3RoPVwiNDBcIiB2YWx1ZT1cIiR7ZGlhbG9ndWUudGl0bGV9XCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJub3RlLWNvbnRlbnRcIj5Ob3RlPC9sYWJlbD5cclxuICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJub3RlXCIgaWQ9XCJub3RlLWNvbnRlbnRcIj4ke2RpYWxvZ3VlLm5vdGV9PC90ZXh0YXJlYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TYXZlPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5gO1xyXG4gIH1cclxuICBvcGVuTW9kYWwoKTtcclxufVxyXG5mdW5jdGlvbiBvcGVuQ29uZmlybURpYWxvZ3VlKGRpYWxvZ3VlKSB7XHJcbiAgaWYgKGRpYWxvZ3VlLmFjdGlvbiA9PT0gXCJyZXNldFwiKSB7XHJcbiAgICBtb2RhbFRpdGxlLnRleHRDb250ZW50ID0gXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gcmVzZXQ/XCI7XHJcbiAgICBtb2RhbENvbnRlbnQuaW5uZXJIVE1MID0gYDxkaXYgaWQ9XCJjb25maXJtXCI+XHJcbiAgICAgICAgICA8YnV0dG9uIGlkPVwiZGVsZXRlLWJ0blwiIHR5cGU9XCJidXR0b25cIiBkYXRhLWFjdGlvbi10eXBlPVwicmVzZXQtZGF0YVwiPlJlc2V0PC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIGlkPVwiY2FuY2VsLWJ0blwiIHR5cGU9XCJidXR0b25cIj5DYW5jZWw8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+YDtcclxuICB9IGVsc2UgaWYgKGRpYWxvZ3VlLmFjdGlvbi5pbmNsdWRlcyhcImRlbGV0ZVwiKSkge1xyXG4gICAgbW9kYWxUaXRsZS50ZXh0Q29udGVudCA9IFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZT9cIlxyXG4gICAgbW9kYWxDb250ZW50LmlubmVySFRNTCA9IGA8ZGl2IGlkPVwiY29uZmlybVwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBpZD1cImRlbGV0ZS1idG5cIiBkYXRhLWNvbmZpcm0tZGVsZXRlIGRhdGEtYWN0aW9uLXR5cGU9XCIke2RpYWxvZ3VlLmFjdGlvbn1cIiB0eXBlPVwiYnV0dG9uXCI+RGVsZXRlPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIGlkPVwiY2FuY2VsLWJ0blwiIHR5cGU9XCJidXR0b25cIj5DYW5jZWw8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+YDtcclxuICAgIGNvbnN0IHBhcmVudCA9IG1vZGFsQ29udGVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbmZpcm1cIik7XHJcblxyXG4gICAgaWYgKGRpYWxvZ3VlLmFjdGlvbiA9PT0gXCJkZWxldGUtdGFza1wiKSB7XHJcbiAgICAgIHBhcmVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3RcIiwgZGlhbG9ndWUucGluZGV4KTtcclxuICAgICAgcGFyZW50LnNldEF0dHJpYnV0ZShcImRhdGEtdGFza1wiLCBkaWFsb2d1ZS50aW5kZXgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcGFyZW50LnNldEF0dHJpYnV0ZShgZGF0YSR7ZGlhbG9ndWUuYWN0aW9uLnNsaWNlKDYpfWAsIGRpYWxvZ3VlLmluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9wZW5Nb2RhbCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvcGVuTW9kYWwoKSB7XHJcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxufVxyXG5mdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xyXG4gIG1vZGFsQ29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZU1lbnUoKSB7XHJcbiAgbWVudUljb24ucGFyZW50RWxlbWVudC50b2dnbGVBdHRyaWJ1dGUoXCJkYXRhLW1lbnUtYWN0aXZlXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJEYXRhKGRhdGEpIHtcclxuICBjb25zdCBwcm9qZWN0cyA9IGRhdGEucHJvamVjdHMsXHJcbiAgICBub3RlcyA9IGRhdGEubm90ZXMsXHJcbiAgICBwcm9qZWN0c0NvbnRhaW5lciA9IHByb2plY3RzUGFnZS5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzLWNvbnRyXCIpLFxyXG4gICAgbm90ZXNDb250YWluZXIgPSBub3Rlc1BhZ2UucXVlcnlTZWxlY3RvcihcIiNub3Rlcy1jb250clwiKSxcclxuICAgIHRvZGF5c1Rhc2tDb250ciA9IGhvbWVQYWdlLnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMtY29udHJcIiksXHJcbiAgICB0aGlzV2Vla3NUYXNrc0NvbnRyID0gZG9jdW1lbnRcclxuICAgICAgLmdldEVsZW1lbnRCeUlkKFwidGhpcy13ZWVrLWNvbnRyXCIpXHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzLWNvbnRyXCIpO1xyXG5cclxuICBwcm9qZWN0c0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIG5vdGVzQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgdG9kYXlzVGFza0NvbnRyLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgdGhpc1dlZWtzVGFza3NDb250ci5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyBUb2RheSdzIHRhc2tzXHJcbiAgICBpZiAocHJvamVjdHNbaV0uZ2V0VG9kYXlzVGFza3MoKS5sZW5ndGgpIHtcclxuICAgICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXHJcbiAgICAgICAgdGFza3MgPSBwcm9qZWN0c1tpXS5zb3J0ZWRUYXNrcztcclxuICAgICAgZWxlbS5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cInByb2plY3QtbmFtZS1jb250clwiIGRhdGEtcHJvamVjdD1cIiR7aX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJvamVjdC1uYW1lXCI+PC9zcGFuPjxzdmcgZGF0YS1hY3Rpb24tdHlwZT1cImRlbGV0ZS1wcm9qZWN0XCIgY2xhc3M9XCJhY3Rpb25zXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+RGVsZXRlPC90aXRsZT48cGF0aCBkPVwiTTE0LjEyLDEwLjQ3TDEyLDEyLjU5TDkuODcsMTAuNDdMOC40NiwxMS44OEwxMC41OSwxNEw4LjQ3LDE2LjEyTDkuODgsMTcuNTNMMTIsMTUuNDFMMTQuMTIsMTcuNTNMMTUuNTMsMTYuMTJMMTMuNDEsMTRMMTUuNTMsMTEuODhMMTQuMTIsMTAuNDdNMTUuNSw0TDE0LjUsM0g5LjVMOC41LDRINVY2SDE5VjRIMTUuNU02LDE5QTIsMiAwIDAsMCA4LDIxSDE2QTIsMiAwIDAsMCAxOCwxOVY3SDZWMTlNOCw5SDE2VjE5SDhWOVpcIiAvPjwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPjwvdWw+YDtcclxuICAgICAgZWxlbS5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtbmFtZVwiKS50ZXh0Q29udGVudCA9IHByb2plY3RzW2ldLnRpdGxlO1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRhc2tzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgaWYgKGlzVG9kYXkodGFza3Nbal0uZHVlRGF0ZSkpIHtcclxuICAgICAgICAgIGNvbnN0IGxpc3RFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgICAgbGlzdEVsZW0uaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwiZmxleC1saXN0LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmxleC1saXN0LWVsZW1cIj48c3BhbiBjbGFzcz1cInRhc2stbmFtZVwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cInRhc2stbGJsLSR7dGFza3Nbal0ucHJpb3JpdHlbMF19XCI+JHt0YXNrc1tqXS5wcmlvcml0eX08L3NwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmbGV4LWxpc3QtZWxlbVwiIGRhdGEtcHJvamVjdD1cIiR7aX1cIiBkYXRhLXRhc2s9XCIke2p9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgZGF0YS1hY3Rpb24tdHlwZT1cInZpZXctdGFza1wiIGNsYXNzPVwiYWN0aW9uc1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPlZpZXcgaW5mbzwvdGl0bGU+PHBhdGggZD1cIk0xMyA5SDExVjdIMTNWOU0xMyAxN0gxMVYxMUgxM1YxN001IDNIMTlDMjAuMSAzIDIxIDMuODkgMjEgNVYxOUMyMSAxOS41MyAyMC43OSAyMC4wNCAyMC40MSAyMC40MUMyMC4wNCAyMC43OSAxOS41MyAyMSAxOSAyMUg1QzQuNDcgMjEgMy45NiAyMC43OSAzLjU5IDIwLjQxQzMuMjEgMjAuMDQgMyAxOS41MyAzIDE5VjVDMyAzLjg5IDMuODkgMyA1IDNNMTkgMTlWNUg1VjE5SDE5WlwiIC8+PC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgZGF0YS1hY3Rpb24tdHlwZT1cImVkaXQtdGFza1wiIGNsYXNzPVwiYWN0aW9uc1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPkVkaXQ8L3RpdGxlPjxwYXRoIGQ9XCJNNSwzQzMuODksMyAzLDMuODkgMyw1VjE5QTIsMiAwIDAsMCA1LDIxSDE5QTIsMiAwIDAsMCAyMSwxOVYxMkgxOVYxOUg1VjVIMTJWM0g1TTE3Ljc4LDRDMTcuNjEsNCAxNy40Myw0LjA3IDE3LjMsNC4yTDE2LjA4LDUuNDFMMTguNTgsNy45MUwxOS44LDYuN0MyMC4wNiw2LjQ0IDIwLjA2LDYgMTkuOCw1Ljc1TDE4LjI1LDQuMkMxOC4xMiw0LjA3IDE3Ljk1LDQgMTcuNzgsNE0xNS4zNyw2LjEyTDgsMTMuNVYxNkgxMC41TDE3Ljg3LDguNjJMMTUuMzcsNi4xMlpcIiAvPjwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGRhdGEtYWN0aW9uLXR5cGU9XCJkZWxldGUtdGFza1wiIGNsYXNzPVwiYWN0aW9uc1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPkRlbGV0ZTwvdGl0bGU+PHBhdGggZD1cIk0xNC4xMiwxMC40N0wxMiwxMi41OUw5Ljg3LDEwLjQ3TDguNDYsMTEuODhMMTAuNTksMTRMOC40NywxNi4xMkw5Ljg4LDE3LjUzTDEyLDE1LjQxTDE0LjEyLDE3LjUzTDE1LjUzLDE2LjEyTDEzLjQxLDE0TDE1LjUzLDExLjg4TDE0LjEyLDEwLjQ3TTE1LjUsNEwxNC41LDNIOS41TDguNSw0SDVWNkgxOVY0SDE1LjVNNiwxOUEyLDIgMCAwLDAgOCwyMUgxNkEyLDIgMCAwLDAgMTgsMTlWN0g2VjE5TTgsOUgxNlYxOUg4VjlaXCIgLz48L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+YDtcclxuICAgICAgICAgIGxpc3RFbGVtLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1uYW1lXCIpLnRleHRDb250ZW50ID0gdGFza3Nbal0udGl0bGU7XHJcbiAgICAgICAgICBlbGVtLnF1ZXJ5U2VsZWN0b3IoXCJ1bFwiKS5hcHBlbmRDaGlsZChsaXN0RWxlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRvZGF5c1Rhc2tDb250ci5hcHBlbmRDaGlsZChlbGVtKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUaGlzIHdlZWsncyB0YXNrc1xyXG4gICAgaWYgKHByb2plY3RzW2ldLmdldFRoaXNXZWVrc1Rhc2tzKCkubGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgIGVsZW0uY2xhc3NOYW1lID0gXCJmbGV4LWxpc3QtaXRlbVwiO1xyXG4gICAgICBlbGVtLnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdFwiLCBpLnRvU3RyaW5nKCkpO1xyXG5cclxuICAgICAgZWxlbS5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJwcm9qZWN0LW5hbWVcIj48L3NwYW4+XHJcbiAgICAgICAgPHN2ZyBkYXRhLWFjdGlvbi10eXBlPVwiZGVsZXRlLXByb2plY3RcIiBjbGFzcz1cImFjdGlvbnNcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT5EZWxldGU8L3RpdGxlPjxwYXRoIGQ9XCJNMTQuMTIsMTAuNDdMMTIsMTIuNTlMOS44NywxMC40N0w4LjQ2LDExLjg4TDEwLjU5LDE0TDguNDcsMTYuMTJMOS44OCwxNy41M0wxMiwxNS40MUwxNC4xMiwxNy41M0wxNS41MywxNi4xMkwxMy40MSwxNEwxNS41MywxMS44OEwxNC4xMiwxMC40N00xNS41LDRMMTQuNSwzSDkuNUw4LjUsNEg1VjZIMTlWNEgxNS41TTYsMTlBMiwyIDAgMCwwIDgsMjFIMTZBMiwyIDAgMCwwIDE4LDE5VjdINlYxOU04LDlIMTZWMTlIOFY5WlwiIC8+PC9zdmc+YDtcclxuXHJcbiAgICAgIGVsZW0ucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LW5hbWVcIikudGV4dENvbnRlbnQgPSBwcm9qZWN0c1tpXS50aXRsZTtcclxuICAgICAgdGhpc1dlZWtzVGFza3NDb250ci5hcHBlbmRDaGlsZChlbGVtKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQcm9qZWN0cyBwYWdlXHJcbiAgICBjb25zdCBwcm9qZWN0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCB0YXNrcyA9IHByb2plY3RzW2ldLnNvcnRlZFRhc2tzO1xyXG4gICAgcHJvamVjdE5vZGUuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJwcm9qZWN0LW5hbWUtY29udHJcIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cInByb2plY3QtbmFtZVwiPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImFjdG5zLWNvbnRyXCIgZGF0YS1wcm9qZWN0PVwiJHtpfVwiPlxyXG4gICAgICAgICAgICA8c3ZnIGRhdGEtYWN0aW9uLXR5cGU9XCJlZGl0LXByb2plY3RcIiBjbGFzcz1cImFjdGlvbnNcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG4gICAgICAgICAgICAgIDx0aXRsZT5FZGl0PC90aXRsZT5cclxuICAgICAgICAgICAgICA8cGF0aCBkPVwiTTUsM0MzLjg5LDMgMywzLjg5IDMsNVYxOUEyLDIgMCAwLDAgNSwyMUgxOUEyLDIgMCAwLDAgMjEsMTlWMTJIMTlWMTlINVY1SDEyVjNINU0xNy43OCw0QzE3LjYxLDQgMTcuNDMsNC4wNyAxNy4zLDQuMkwxNi4wOCw1LjQxTDE4LjU4LDcuOTFMMTkuOCw2LjdDMjAuMDYsNi40NCAyMC4wNiw2IDE5LjgsNS43NUwxOC4yNSw0LjJDMTguMTIsNC4wNyAxNy45NSw0IDE3Ljc4LDRNMTUuMzcsNi4xMkw4LDEzLjVWMTZIMTAuNUwxNy44Nyw4LjYyTDE1LjM3LDYuMTJaXCIgLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDxzdmcgZGF0YS1hY3Rpb24tdHlwZT1cImRlbGV0ZS1wcm9qZWN0XCIgY2xhc3M9XCJhY3Rpb25zXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cclxuICAgICAgICAgICAgICA8dGl0bGU+RGVsZXRlPC90aXRsZT5cclxuICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE0LjEyLDEwLjQ3TDEyLDEyLjU5TDkuODcsMTAuNDdMOC40NiwxMS44OEwxMC41OSwxNEw4LjQ3LDE2LjEyTDkuODgsMTcuNTNMMTIsMTUuNDFMMTQuMTIsMTcuNTNMMTUuNTMsMTYuMTJMMTMuNDEsMTRMMTUuNTMsMTEuODhMMTQuMTIsMTAuNDdNMTUuNSw0TDE0LjUsM0g5LjVMOC41LDRINVY2SDE5VjRIMTUuNU02LDE5QTIsMiAwIDAsMCA4LDIxSDE2QTIsMiAwIDAsMCAxOCwxOVY3SDZWMTlNOCw5SDE2VjE5SDhWOVpcIiAvPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICAgIDx1bD48L3VsPlxyXG4gICAgPGJ1dHRvbiBkYXRhLWFjdGlvbi10eXBlPVwibmV3LXRhc2tcIiBkYXRhLXByb2plY3Q9XCIke2l9XCI+QWRkIFRhc2s8L2J1dHRvbj5gO1xyXG4gICAgcHJvamVjdE5vZGUucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LW5hbWVcIikudGV4dENvbnRlbnQgPSBwcm9qZWN0c1tpXS50aXRsZTtcclxuXHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRhc2tzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgIGNvbnN0IHRhc2tOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICB0YXNrTm9kZS5jbGFzc05hbWUgPSBcImZsZXgtbGlzdC1pdGVtXCJcclxuICAgICAgdGFza05vZGUuaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwiZmxleC1saXN0LWVsZW1cIj48c3BhbiBjbGFzcz1cInRhc2stbmFtZVwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cInRhc2stbGJsLSR7dGFza3Nbal0ucHJpb3JpdHlbMF19XCI+JHt0YXNrc1tqXS5wcmlvcml0eX08L3NwYW4+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGRhdGEtcHJvamVjdD1cIiR7aX1cIiBkYXRhLXRhc2s9XCIke2p9XCIgY2xhc3M9XCJmbGV4LWxpc3QtZWxlbVwiPlxyXG4gICAgICAgICAgICA8c3ZnIGRhdGEtYWN0aW9uLXR5cGU9XCJ2aWV3LXRhc2tcIiBjbGFzcz1cImFjdGlvbnNcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG4gICAgICAgICAgICAgIDx0aXRsZT5WaWV3IGluZm88L3RpdGxlPlxyXG4gICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTMgOUgxMVY3SDEzVjlNMTMgMTdIMTFWMTFIMTNWMTdNNSAzSDE5QzIwLjEgMyAyMSAzLjg5IDIxIDVWMTlDMjEgMTkuNTMgMjAuNzkgMjAuMDQgMjAuNDEgMjAuNDFDMjAuMDQgMjAuNzkgMTkuNTMgMjEgMTkgMjFINUM0LjQ3IDIxIDMuOTYgMjAuNzkgMy41OSAyMC40MUMzLjIxIDIwLjA0IDMgMTkuNTMgMyAxOVY1QzMgMy44OSAzLjg5IDMgNSAzTTE5IDE5VjVINVYxOUgxOVpcIiAvPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPHN2ZyBkYXRhLWFjdGlvbi10eXBlPVwiZWRpdC10YXNrXCIgY2xhc3M9XCJhY3Rpb25zXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cclxuICAgICAgICAgICAgICA8dGl0bGU+RWRpdDwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgPHBhdGggZD1cIk01LDNDMy44OSwzIDMsMy44OSAzLDVWMTlBMiwyIDAgMCwwIDUsMjFIMTlBMiwyIDAgMCwwIDIxLDE5VjEySDE5VjE5SDVWNUgxMlYzSDVNMTcuNzgsNEMxNy42MSw0IDE3LjQzLDQuMDcgMTcuMyw0LjJMMTYuMDgsNS40MUwxOC41OCw3LjkxTDE5LjgsNi43QzIwLjA2LDYuNDQgMjAuMDYsNiAxOS44LDUuNzVMMTguMjUsNC4yQzE4LjEyLDQuMDcgMTcuOTUsNCAxNy43OCw0TTE1LjM3LDYuMTJMOCwxMy41VjE2SDEwLjVMMTcuODcsOC42MkwxNS4zNyw2LjEyWlwiIC8+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8c3ZnIGRhdGEtYWN0aW9uLXR5cGU9XCJkZWxldGUtdGFza1wiIGNsYXNzPVwiYWN0aW9uc1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XHJcbiAgICAgICAgICAgICAgPHRpdGxlPkRlbGV0ZTwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNC4xMiwxMC40N0wxMiwxMi41OUw5Ljg3LDEwLjQ3TDguNDYsMTEuODhMMTAuNTksMTRMOC40NywxNi4xMkw5Ljg4LDE3LjUzTDEyLDE1LjQxTDE0LjEyLDE3LjUzTDE1LjUzLDE2LjEyTDEzLjQxLDE0TDE1LjUzLDExLjg4TDE0LjEyLDEwLjQ3TTE1LjUsNEwxNC41LDNIOS41TDguNSw0SDVWNkgxOVY0SDE1LjVNNiwxOUEyLDIgMCAwLDAgOCwyMUgxNkEyLDIgMCAwLDAgMTgsMTlWN0g2VjE5TTgsOUgxNlYxOUg4VjlaXCIgLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9zcGFuPmA7XHJcbiAgICAgIHRhc2tOb2RlLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1uYW1lXCIpLnRleHRDb250ZW50ID0gdGFza3Nbal0udGl0bGU7XHJcbiAgICAgIHByb2plY3ROb2RlLnF1ZXJ5U2VsZWN0b3IoXCJ1bFwiKS5hcHBlbmRDaGlsZCh0YXNrTm9kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRW1wdHkgcHJvamVjdFxyXG4gICAgaWYgKCFwcm9qZWN0Tm9kZS5xdWVyeVNlbGVjdG9yKFwidWxcIikuaW5uZXJIVE1MKSBwcm9qZWN0Tm9kZS5xdWVyeVNlbGVjdG9yKFwidWxcIikuaW5uZXJIVE1MID0gXCI8bGkgY2xhc3M9J2VtcHR5LWNvbnRlbnQnPlRoaXMgcHJvamVjdCBpcyBlbXB0eSwgY2xpY2sgJ0FkZCBUYXNrJyB0byBhZGQgYSBuZXcgdGFzazwvbGk+XCI7XHJcbiAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0Tm9kZSk7XHJcbiAgfVxyXG4gIC8vIElmIG5vIHRhc2tzIGZvciB0b2RheSBhbmQgdGhpcyB3ZWVrXHJcbiAgaWYgKCF0b2RheXNUYXNrQ29udHIuaW5uZXJIVE1MKSB0b2RheXNUYXNrQ29udHIuaW5uZXJIVE1MID0gXCI8ZGl2IGNsYXNzPSdlbXB0eS1jb250ZW50Jz7wn46JIE5vIHRhc2tzIGZvciB0b2RheSE8L2Rpdj5cIjtcclxuICBpZiAoIXRoaXNXZWVrc1Rhc2tzQ29udHIuaW5uZXJIVE1MKSB7XHJcbiAgICB0aGlzV2Vla3NUYXNrc0NvbnRyLmlubmVySFRNTCA9IFwiPGRpdiBjbGFzcz0nZW1wdHktY29udGVudCc+WW91IGFyZSBnb29kIHRvIGdvIGZvciB0aGlzIHdlZWshPC9kaXY+XCI7XHJcbiAgICB0aGlzV2Vla3NUYXNrc0NvbnRyLnF1ZXJ5U2VsZWN0b3IoXCIuZW1wdHktY29udGVudFwiKS5hcHBlbmRDaGlsZChpbWcpO1xyXG4gIH0gXHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbm90ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICAgIG5vZGUuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJub3RlLXRpdGxlLWNvbnRyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibm90ZS10aXRsZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJhY3Rucy1jb250clwiIGRhdGEtbm90ZT1cIiR7aX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgZGF0YS1hY3Rpb24tdHlwZT1cImVkaXQtbm90ZVwiIGNsYXNzPVwiYWN0aW9uc1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRpdGxlPkVkaXQ8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNSwzQzMuODksMyAzLDMuODkgMyw1VjE5QTIsMiAwIDAsMCA1LDIxSDE5QTIsMiAwIDAsMCAyMSwxOVYxMkgxOVYxOUg1VjVIMTJWM0g1TTE3Ljc4LDRDMTcuNjEsNCAxNy40Myw0LjA3IDE3LjMsNC4yTDE2LjA4LDUuNDFMMTguNTgsNy45MUwxOS44LDYuN0MyMC4wNiw2LjQ0IDIwLjA2LDYgMTkuOCw1Ljc1TDE4LjI1LDQuMkMxOC4xMiw0LjA3IDE3Ljk1LDQgMTcuNzgsNE0xNS4zNyw2LjEyTDgsMTMuNVYxNkgxMC41TDE3Ljg3LDguNjJMMTUuMzcsNi4xMlpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGRhdGEtYWN0aW9uLXR5cGU9XCJkZWxldGUtbm90ZVwiIGNsYXNzPVwiYWN0aW9uc1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRpdGxlPkRlbGV0ZTwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNC4xMiwxMC40N0wxMiwxMi41OUw5Ljg3LDEwLjQ3TDguNDYsMTEuODhMMTAuNTksMTRMOC40NywxNi4xMkw5Ljg4LDE3LjUzTDEyLDE1LjQxTDE0LjEyLDE3LjUzTDE1LjUzLDE2LjEyTDEzLjQxLDE0TDE1LjUzLDExLjg4TDE0LjEyLDEwLjQ3TTE1LjUsNEwxNC41LDNIOS41TDguNSw0SDVWNkgxOVY0SDE1LjVNNiwxOUEyLDIgMCAwLDAgOCwyMUgxNkEyLDIgMCAwLDAgMTgsMTlWN0g2VjE5TTgsOUgxNlYxOUg4VjlaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdGVjb250ZW50XCI+PC9kaXY+YDtcclxuICAgIG5vZGUucXVlcnlTZWxlY3RvcihcIi5ub3RlLXRpdGxlXCIpLnRleHRDb250ZW50ID0gbm90ZXNbaV0udGl0bGU7XHJcbiAgICBub2RlLnF1ZXJ5U2VsZWN0b3IoXCIubm90ZWNvbnRlbnRcIikudGV4dENvbnRlbnQgPSBub3Rlc1tpXS5ub3RlO1xyXG5cclxuICAgIG5vdGVzQ29udGFpbmVyLmFwcGVuZENoaWxkKG5vZGUpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgdGFicywgbWVudUljb24sIGNyZWF0ZUJ0biwgbW9kYWwsIHBhZ2VzLCBzd2l0aFRhYiwgaW52b2tlQWN0aW9uLCBvcGVuRGlhbG9ndWUsIG9wZW5Db25maXJtRGlhbG9ndWUsIGNsb3NlTW9kYWwgfTtcclxuIiwiaW1wb3J0IHsgaXNUaGlzV2VlaywgaXNUb2RheSB9IGZyb20gXCJkYXRlLWZuc1wiO1xyXG5cclxuY2xhc3MgUHJvamVjdCB7XHJcbiAgY29uc3RydWN0b3IodGl0bGUsIHRhc2tzKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLnRhc2tzID0gdGFza3M7XHJcbiAgfVxyXG4gIGdldCBzb3J0ZWRUYXNrcygpIHtcclxuICAgIHJldHVybiB0aGlzLnRhc2tzLnNvcnQoKGEsIGIpID0+IGEuZHVlRGF0ZSAtIGIuZHVlRGF0ZSk7XHJcbiAgfVxyXG4gIGFkZFRhc2sodGFzaykge1xyXG4gICAgdGhpcy50YXNrcy5wdXNoKHRhc2spO1xyXG4gIH1cclxuICByZW1vdmVUYXNrKGluZGV4KSB7XHJcbiAgICB0aGlzLnRhc2tzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgfVxyXG4gIGdldFRvZGF5c1Rhc2tzKCkge1xyXG4gICAgY29uc3QgdG9kYXlzVGFzayA9IFtdO1xyXG4gICAgdGhpcy50YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xyXG4gICAgICBpZiAoaXNUb2RheSh0YXNrLmR1ZURhdGUpKSB0b2RheXNUYXNrLnB1c2godGFzayk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB0b2RheXNUYXNrO1xyXG4gIH1cclxuICBnZXRUaGlzV2Vla3NUYXNrcygpIHtcclxuICAgIGNvbnN0IHRoaXNXZWVrc1Rhc2sgPSBbXTtcclxuICAgIHRoaXMudGFza3MuZm9yRWFjaCh0YXNrID0+IHtcclxuICAgICAgaWYgKGlzVGhpc1dlZWsodGFzay5kdWVEYXRlKSkge1xyXG4gICAgICAgIHRoaXNXZWVrc1Rhc2sucHVzaCh0YXNrKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdGhpc1dlZWtzVGFzaztcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIFRhc2sge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHBpbmRleCkge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgIHRoaXMucGluZGV4ID0gKHBpbmRleCAhPT0gdW5kZWZpbmVkKT8gcGluZGV4IDogMDtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIE5vdGUge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBub3RlKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLm5vdGUgPSBub3RlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgUHJvamVjdCwgVGFzaywgTm90ZSB9OyIsImNvbnN0IHB1YlN1YiA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgZXZlbnRzID0ge307XHJcbiAgXHJcbiAgICBmdW5jdGlvbiBzdWJzY3JpYmUoZXZlbnQsIGZuKSB7XHJcbiAgICAgIGV2ZW50c1tldmVudF0gPyBldmVudHNbZXZlbnRdLnB1c2goZm4pIDogKGV2ZW50c1tldmVudF0gPSBbZm5dKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHVuU3Vic2NyaWJlKGV2ZW50LCBmbikge1xyXG4gICAgICBpZiAoZXZlbnRzW2V2ZW50XSkge1xyXG4gICAgICAgIGV2ZW50c1tldmVudF0gPSBldmVudHNbZXZlbnRdLmZpbHRlcigoZnVuYykgPT4gZnVuYyAhPT0gZm4pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBwdWJsaXNoKGV2ZW50LCBkYXRhKSB7XHJcbiAgICAgIGlmIChldmVudHNbZXZlbnRdKSBldmVudHNbZXZlbnRdLmZvckVhY2goKGZuKSA9PiBmbihkYXRhKSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICByZXR1cm4geyBzdWJzY3JpYmUsIHVuU3Vic2NyaWJlLCBwdWJsaXNoIH07XHJcbiAgfSkoKTtcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgcHViU3ViOyIsImltcG9ydCB7IFByb2plY3QsIFRhc2ssIE5vdGUgfSBmcm9tIFwiLi9wcm9qZWN0c1Rhc2tzLmpzXCI7XHJcbmltcG9ydCBwdWJTdWIgZnJvbSBcIi4vcHViU3ViLmpzXCI7XHJcblxyXG5jb25zdCBTdG9yYWdlID0gKGZ1bmN0aW9uICgpIHtcclxuICBsZXQgc2F2ZWREYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNhdmVkRGF0YVwiKSkgfHwge1xyXG4gICAgcHJvamVjdHM6IFtcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiBcIkluYm94XCIsXHJcbiAgICAgICAgdGFza3M6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiVHJ5IG91dCB0aGlzIGFwcGxpY2F0aW9uXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlJlYWQgJ1dlbGNvbWUgdG8gVG9kb0xpc3QnIGluIHRoZSBub3RlcyBwYWdlXCIsXHJcbiAgICAgICAgICAgIGR1ZURhdGU6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgICAgICAgICAgcHJpb3JpdHk6IFwibWVkaXVtXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgbm90ZXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiBcIldlbGNvbWUgdG8gVG9kb0xpc3RcIixcclxuICAgICAgICBub3RlOiBcIk9uIHRoaXMgcGFnZSwgeW91IGNhbiB3cml0ZSBub3Rlcy5cXG5UaGUgaG9tZXBhZ2Ugc2hvd3MgcHJvamVjdHMgYW5kIHRhc2tzIGR1ZSBmb3IgdG9kYXkgYW5kIHByb2plY3RzIGR1ZSBmb3IgdGhlIHdlZWssIHlvdSBjYW4gdmlldyBhbmQgbWFuaXB1bGF0ZSBwcm9qZWN0cyBpbiBwcm9qZWN0cyBwYWdlLlxcbkluICdNb3JlJyB5b3UgY2FuIHZpZXcgdGhlICdBYm91dCcgc2VjdGlvbiBhbmQgJ1NldHRpbmdzJy5cIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfTtcclxuICBsZXQgZGFya1RoZW1lT24gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZGFya1RoZW1lT25cIikpO1xyXG4gIFxyXG4gIHB1YlN1Yi5zdWJzY3JpYmUoXCJkYXRhQ2hhbmdlZFwiLCBzYXZlQ2hhbmdlcyk7XHJcbiAgcHViU3ViLnN1YnNjcmliZShcInJlc2V0RGF0YUFjdGlvbkNvbmZpcm1lZFwiLCBjbGVhckRhdGEpO1xyXG4gIHB1YlN1Yi5zdWJzY3JpYmUoXCJ0aGVtZUNob2ljZUNoYW5nZWRcIiwgc2F2ZVRoZW1lQ2hvaWNlKVxyXG5cclxuICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaGFzVmlzaXRlZFNpdGVCZWZvcmVcIikpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaGFzVmlzaXRlZFNpdGVCZWZvcmVcIiwgXCJ0cnVlXCIpO1xyXG5cclxuICAgIC8vIFdlbGNvbWUgdXNlclxyXG4gICAgY29uc29sZS5sb2coXCJXZWxjb21lIVwiKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHVzZXJUaGVtZURhcmsoKSB7XHJcbiAgICByZXR1cm4gZGFya1RoZW1lT247XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzYXZlVGhlbWVDaG9pY2UoaXNEYXJrVGhlbWUpIHtcclxuICAgIGRhcmtUaGVtZU9uID0gaXNEYXJrVGhlbWU7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImRhcmtUaGVtZU9uXCIsIEpTT04uc3RyaW5naWZ5KGRhcmtUaGVtZU9uKSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzYXZlQ2hhbmdlcyhkYXRhKSB7XHJcbiAgICAvLyBSZXNldCBhcnJheXNcclxuICAgIHNhdmVkRGF0YS5wcm9qZWN0cyA9IFtdO1xyXG4gICAgc2F2ZWREYXRhLm5vdGVzID0gW107XHJcblxyXG4gICAgLy8gU2F2ZSBwcm9qZWN0c1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLnByb2plY3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHByb2plY3QgPSBkYXRhLnByb2plY3RzW2ldO1xyXG4gICAgICBzYXZlZERhdGEucHJvamVjdHMucHVzaCh7XHJcbiAgICAgICAgdGl0bGU6IHByb2plY3QudGl0bGUsXHJcbiAgICAgICAgdGFza3M6IFtdLFxyXG4gICAgICB9KTtcclxuICAgICAgLy8gU2F2ZSB0YXNrcyB0byBwcm9qZWN0XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcHJvamVjdC50YXNrcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgIGNvbnN0IHRhc2sgPSBwcm9qZWN0LnRhc2tzW2pdO1xyXG4gICAgICAgIHNhdmVkRGF0YS5wcm9qZWN0c1tpXS50YXNrcy5wdXNoKHtcclxuICAgICAgICAgIHRpdGxlOiB0YXNrLnRpdGxlLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IHRhc2suZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICBkdWVEYXRlOiBuZXcgRGF0ZSh0YXNrLmR1ZURhdGUpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICBwcmlvcml0eTogdGFzay5wcmlvcml0eSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFNhdmUgbm90ZXNcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5ub3Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBub3RlID0gZGF0YS5ub3Rlc1tpXTtcclxuICAgICAgc2F2ZWREYXRhLm5vdGVzLnB1c2goe1xyXG4gICAgICAgIHRpdGxlOiBub3RlLnRpdGxlLFxyXG4gICAgICAgIG5vdGU6IG5vdGUubm90ZSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzYXZlZERhdGFcIiwgSlNPTi5zdHJpbmdpZnkoc2F2ZWREYXRhKSk7XHJcbiAgfVxyXG4gIFxyXG4gIGZ1bmN0aW9uIGNsZWFyRGF0YSgpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXREYXRhKCkge1xyXG4gICAgbGV0IHByb2plY3RzID0gW10sXHJcbiAgICAgIG5vdGVzID0gW107XHJcblxyXG4gICAgLy8gUHJvamVjdHMgJiBUYXNrc1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzYXZlZERhdGEucHJvamVjdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHNhdmVkRGF0YS5wcm9qZWN0c1tpXS50aXRsZSwgW10pO1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNhdmVkRGF0YS5wcm9qZWN0c1tpXS50YXNrcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgIHByb2plY3QudGFza3Nbal0gPSBuZXcgVGFzayhcclxuICAgICAgICAgIHNhdmVkRGF0YS5wcm9qZWN0c1tpXS50YXNrc1tqXS50aXRsZSxcclxuICAgICAgICAgIHNhdmVkRGF0YS5wcm9qZWN0c1tpXS50YXNrc1tqXS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgIG5ldyBEYXRlKHNhdmVkRGF0YS5wcm9qZWN0c1tpXS50YXNrc1tqXS5kdWVEYXRlKSxcclxuICAgICAgICAgIHNhdmVkRGF0YS5wcm9qZWN0c1tpXS50YXNrc1tqXS5wcmlvcml0eVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHByb2plY3RzLnB1c2gocHJvamVjdCk7XHJcbiAgICB9XHJcbiAgICAvLyBOb3Rlc1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzYXZlZERhdGEubm90ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbm90ZXMucHVzaChuZXcgTm90ZShzYXZlZERhdGEubm90ZXNbaV0udGl0bGUsIHNhdmVkRGF0YS5ub3Rlc1tpXS5ub3RlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgcHJvamVjdHMsIG5vdGVzIH07XHJcbiAgfVxyXG5cclxuICByZXR1cm4geyBnZXREYXRhLCB1c2VyVGhlbWVEYXJrIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9yYWdlO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gIH0gOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgfSwgX3R5cGVvZihvYmopO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHB1YlN1YiBmcm9tIFwiLi9tb2R1bGVzL3B1YlN1Yi5qc1wiO1xyXG5pbXBvcnQgeyBQcm9qZWN0LCBUYXNrLCBOb3RlIH0gZnJvbSBcIi4vbW9kdWxlcy9wcm9qZWN0c1Rhc2tzLmpzXCI7XHJcbmltcG9ydCB7IHRhYnMsIG1lbnVJY29uLCBjcmVhdGVCdG4sIG1vZGFsLCBwYWdlcywgc3dpdGhUYWIsIGludm9rZUFjdGlvbiwgb3BlbkRpYWxvZ3VlLCBvcGVuQ29uZmlybURpYWxvZ3VlLCBjbG9zZU1vZGFsIH0gZnJvbSBcIi4vbW9kdWxlcy9kaXNwbGF5LmpzXCI7XHJcbmltcG9ydCBTdG9yYWdlIGZyb20gXCIuL21vZHVsZXMvc3RvcmFnZS5qc1wiO1xyXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5cclxuKGZ1bmN0aW9uICgpIHtcclxuICBsZXQgZGFya1RoZW1lO1xyXG4gIF9pbml0KCk7XHJcblxyXG4gIGZ1bmN0aW9uIF9pbml0KCkge1xyXG4gICAgYWRkRXZlbnRzVG9TdGF0aWNFbGVtZW50cygpO1xyXG5cclxuICAgIGNvbnN0IHVzZXJUaGVtZURhcmsgPSBTdG9yYWdlLnVzZXJUaGVtZURhcmsoKTtcclxuICAgIGlmICh1c2VyVGhlbWVEYXJrICE9PSBudWxsKSB7XHJcbiAgICAgIGRhcmtUaGVtZSA9IHVzZXJUaGVtZURhcms7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkYXJrVGhlbWUgPSB3aW5kb3cubWF0Y2hNZWRpYShcIihwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaylcIikubWF0Y2hlcztcclxuICAgIH1cclxuICAgIGNoYW5nZVRoZW1lKGRhcmtUaGVtZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBhZGRFdmVudHNUb1N0YXRpY0VsZW1lbnRzKCkge1xyXG4gICAgdGFicy5mb3JFYWNoKChlbGVtKSA9PiBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzd2l0aFRhYikpO1xyXG4gICAgbWVudUljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGludm9rZUFjdGlvbnMpO1xyXG4gICAgY3JlYXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBpbnZva2VBY3Rpb25zKTtcclxuICAgIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBpbnZva2VBY3Rpb25zKTtcclxuICAgIHBhZ2VzLmZvckVhY2goKHBhZ2UpID0+IHtcclxuICAgICAgcGFnZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaW52b2tlQWN0aW9ucyk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgZnVuY3Rpb24gY2hhbmdlVGhlbWUoaXNEYXJrKSB7XHJcbiAgICBpZiAoaXNEYXJrICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgZGFya1RoZW1lID0gaXNEYXJrO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGFya1RoZW1lID0gIWRhcmtUaGVtZTtcclxuICAgIH1cclxuICAgIGRvY3VtZW50LmJvZHkuc2V0QXR0cmlidXRlKFwiZGF0YS10aGVtZS1kYXJrXCIsIGRhcmtUaGVtZSk7XHJcbiAgICBwdWJTdWIucHVibGlzaChcInRoZW1lQ2hvaWNlQ2hhbmdlZFwiLCBkYXJrVGhlbWUpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaW52b2tlQWN0aW9ucyhlKSB7XHJcbiAgICAvLyBNb3ZlIHVwIHRvIDxzdmc+IGlmIHRhcmdldCBlbGVtZW50IGlzIDxwYXRoPlxyXG4gICAgY29uc3QgZWxlbSA9XHJcbiAgICAgIGUudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJwYXRoXCJcclxuICAgICAgICA/IGUudGFyZ2V0LnBhcmVudEVsZW1lbnRcclxuICAgICAgICA6IGUudGFyZ2V0O1xyXG4gICAgaW52b2tlQWN0aW9uKGUsIGVsZW0pO1xyXG4gICAgaW52b2tlRGF0YUFjdGlvbihlLCBlbGVtKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gaW52b2tlRGF0YUFjdGlvbihlLCBlbGVtKSB7XHJcbiAgICBpZiAoZWxlbS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpID09PSBcInN1Ym1pdFwiKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIGNvbnN0IGZvcm0gPSBlbGVtLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBPYmplY3QuZnJvbUVudHJpZXMobmV3IEZvcm1EYXRhKGZvcm0pKTtcclxuICAgICAgbGV0IGlzVmFsaWQgPSBPYmplY3QudmFsdWVzKGRhdGEpLmV2ZXJ5KChlbnRyeSkgPT4gZW50cnkpO1xyXG5cclxuICAgICAgaWYgKGlzVmFsaWQpIHtcclxuICAgICAgICBjb25zdCBhY3Rpb24gPSBmb3JtLmdldEF0dHJpYnV0ZShcImRhdGEtYWN0aW9uLXR5cGVcIik7XHJcbiAgICAgICAgbGV0IGVudHJ5O1xyXG4gICAgICAgIGlmIChhY3Rpb24gPT09IFwibmV3LXByb2plY3RcIikge1xyXG4gICAgICAgICAgZW50cnkgPSBuZXcgUHJvamVjdChkYXRhLnRpdGxlLCBbXSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChhY3Rpb24gPT09IFwibmV3LW5vdGVcIikge1xyXG4gICAgICAgICAgZW50cnkgPSBuZXcgTm90ZShkYXRhLnRpdGxlLCBkYXRhLm5vdGUpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYWN0aW9uID09PSBcIm5ldy10YXNrXCIpIHtcclxuICAgICAgICAgIGVudHJ5ID0gbmV3IFRhc2soXHJcbiAgICAgICAgICAgIGRhdGEudGl0bGUsXHJcbiAgICAgICAgICAgIGRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIG5ldyBEYXRlKGRhdGEuZHVlRGF0ZSksXHJcbiAgICAgICAgICAgIGRhdGEucHJpb3JpdHkgPyBkYXRhLnByaW9yaXR5IDogXCJtZWRpdW1cIixcclxuICAgICAgICAgICAgcGFyc2VJbnQoZWxlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3RcIikpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYWN0aW9uID09PSBcImVkaXQtcHJvamVjdFwiKSB7XHJcbiAgICAgICAgICBlbnRyeSA9IHtcclxuICAgICAgICAgICAgYWN0aW9uLFxyXG4gICAgICAgICAgICB0aXRsZTogZGF0YS50aXRsZSxcclxuICAgICAgICAgICAgaW5kZXg6IHBhcnNlSW50KGZvcm0uZ2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0XCIpKSxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfSBlbHNlIGlmIChhY3Rpb24gPT09IFwiZWRpdC10YXNrXCIpIHtcclxuICAgICAgICAgIGVudHJ5ID0ge1xyXG4gICAgICAgICAgICBhY3Rpb24sXHJcbiAgICAgICAgICAgIHBpbmRleDogcGFyc2VJbnQoZm9ybS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3RcIikpLFxyXG4gICAgICAgICAgICB0aW5kZXg6IHBhcnNlSW50KGZvcm0uZ2V0QXR0cmlidXRlKFwiZGF0YS10YXNrXCIpKSxcclxuICAgICAgICAgICAgdGFzazogbmV3IFRhc2soXHJcbiAgICAgICAgICAgICAgZGF0YS50aXRsZSxcclxuICAgICAgICAgICAgICBkYXRhLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgIG5ldyBEYXRlKGRhdGEuZHVlRGF0ZSksXHJcbiAgICAgICAgICAgICAgZGF0YS5wcmlvcml0eSA/IGRhdGEucHJpb3JpdHkgOiBcIm1lZGl1bVwiLFxyXG4gICAgICAgICAgICAgIHBhcnNlSW50KGZvcm0uZ2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0XCIpKVxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9IGVsc2UgaWYgKGFjdGlvbiA9PT0gXCJlZGl0LW5vdGVcIikge1xyXG4gICAgICAgICAgZW50cnkgPSB7XHJcbiAgICAgICAgICAgIGFjdGlvbixcclxuICAgICAgICAgICAgaW5kZXg6IHBhcnNlSW50KGZvcm0uZ2V0QXR0cmlidXRlKFwiZGF0YS1ub3RlXCIpKSxcclxuICAgICAgICAgICAgbm90ZTogbmV3IE5vdGUoZGF0YS50aXRsZSwgZGF0YS5ub3RlKSxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjbG9zZU1vZGFsKCk7XHJcbiAgICAgICAgcHViU3ViLnB1Ymxpc2goXCJmb3JtU3VibWl0dGVkXCIsIGVudHJ5KTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChlbGVtLmlkID09PSBcInRoZW1lLWJ0blwiKSB7XHJcbiAgICAgIGNoYW5nZVRoZW1lKCk7XHJcbiAgICB9IGVsc2UgaWYgKGVsZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS1hY3Rpb24tdHlwZVwiKSkge1xyXG4gICAgICAvLyBEYXRhIHJlYWQgbWFuaXB1bGF0aW9uIGFjdGlvbnNcclxuICAgICAgY29uc3QgYWN0aW9uID0gZWxlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFjdGlvbi10eXBlXCIpO1xyXG5cclxuICAgICAgaWYgKFxyXG4gICAgICAgIGFjdGlvbi5pbmNsdWRlcyhcImRlbGV0ZVwiKSAmJlxyXG4gICAgICAgIGVsZW0uaGFzQXR0cmlidXRlKFwiZGF0YS1jb25maXJtLWRlbGV0ZVwiKVxyXG4gICAgICApIHtcclxuICAgICAgICAvLyBEZWxldGUgYWN0aW9uIGNvbmZpcm1lZFxyXG4gICAgICAgIGlmIChhY3Rpb24gPT09IFwiZGVsZXRlLXRhc2tcIikge1xyXG4gICAgICAgICAgY29uc3QgcGluZGV4ID0gcGFyc2VJbnQoXHJcbiAgICAgICAgICAgIGVsZW0ucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3RcIilcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBjb25zdCB0aW5kZXggPSBwYXJzZUludChlbGVtLnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS10YXNrXCIpKTtcclxuICAgICAgICAgIHB1YlN1Yi5wdWJsaXNoKFwiZGVsZXRlRW50aXR5XCIsIHsgYWN0aW9uLCBwaW5kZXgsIHRpbmRleCB9KTtcclxuICAgICAgICAgIGNsb3NlTW9kYWwoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc3QgaW5kZXggPVxyXG4gICAgICAgICAgICBwYXJzZUludChlbGVtLnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0XCIpKSB8fFxyXG4gICAgICAgICAgICBwYXJzZUludChlbGVtLnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1ub3RlXCIpKTtcclxuICAgICAgICAgIHB1YlN1Yi5wdWJsaXNoKFwiZGVsZXRlRW50aXR5XCIsIHsgYWN0aW9uLCBpbmRleCB9KTtcclxuICAgICAgICAgIGNsb3NlTW9kYWwoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAoYWN0aW9uLmluY2x1ZGVzKFwiZGVsZXRlXCIpKSB7XHJcbiAgICAgICAgLy8gT3BlbiBjb25maXJtIGRpYWxvZ3VlIGZvciBkZWxldGUgaWNvbnNcclxuICAgICAgICBpZiAoYWN0aW9uID09PSBcImRlbGV0ZS10YXNrXCIpIHtcclxuICAgICAgICAgIGNvbnN0IHBpbmRleCA9IHBhcnNlSW50KFxyXG4gICAgICAgICAgICBlbGVtLnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0XCIpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgY29uc3QgdGluZGV4ID0gcGFyc2VJbnQoZWxlbS5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtdGFza1wiKSk7XHJcbiAgICAgICAgICBvcGVuQ29uZmlybURpYWxvZ3VlKHsgYWN0aW9uLCBwaW5kZXgsIHRpbmRleCB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc3QgaW5kZXggPVxyXG4gICAgICAgICAgICBwYXJzZUludChlbGVtLnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0XCIpKSB8fFxyXG4gICAgICAgICAgICBwYXJzZUludChlbGVtLnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1ub3RlXCIpKTtcclxuICAgICAgICAgIG9wZW5Db25maXJtRGlhbG9ndWUoeyBhY3Rpb24sIGluZGV4IH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChhY3Rpb24uaW5jbHVkZXMoXCJ2aWV3XCIpKSB7XHJcbiAgICAgICAgaWYgKGFjdGlvbiA9PT0gXCJ2aWV3LXRhc2tcIikge1xyXG4gICAgICAgICAgLy8gT3BlbiB2aWV3IHRhc2sgbW9kYWxcclxuICAgICAgICAgIGNvbnN0IHRhc2sgPSBwcm9qZWN0c0hhbmRsZXIuZ2V0VGFzayhcclxuICAgICAgICAgICAgcGFyc2VJbnQoZWxlbS5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdFwiKSksXHJcbiAgICAgICAgICAgIHBhcnNlSW50KGVsZW0ucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRhc2tcIikpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgb3BlbkRpYWxvZ3VlKHtcclxuICAgICAgICAgICAgYWN0aW9uLFxyXG4gICAgICAgICAgICB0aXRsZTogdGFzay50aXRsZSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRhc2suZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIGR1ZURhdGU6IHRhc2suZHVlRGF0ZSxcclxuICAgICAgICAgICAgcHJpb3JpdHk6IHRhc2sucHJpb3JpdHksXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAoYWN0aW9uLmluY2x1ZGVzKFwiZWRpdFwiKSkge1xyXG4gICAgICAgIGlmIChhY3Rpb24gPT09IFwiZWRpdC1wcm9qZWN0XCIpIHtcclxuICAgICAgICAgIC8vIE9wZW4gZWRpdCBwcm9qZWN0IG1vZGFsXHJcbiAgICAgICAgICBjb25zdCBpbmRleCA9IHBhcnNlSW50KFxyXG4gICAgICAgICAgICBlbGVtLnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0XCIpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzSGFuZGxlci5nZXRQcm9qZWN0KGluZGV4KTtcclxuICAgICAgICAgIG9wZW5EaWFsb2d1ZSh7XHJcbiAgICAgICAgICAgIGFjdGlvbixcclxuICAgICAgICAgICAgaW5kZXgsXHJcbiAgICAgICAgICAgIHRpdGxlOiBwcm9qZWN0LnRpdGxlLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChhY3Rpb24gPT09IFwiZWRpdC10YXNrXCIpIHtcclxuICAgICAgICAgIC8vIE9wZW4gZWRpdCB0YXNrIG1vZGFsXHJcbiAgICAgICAgICBjb25zdCBwaW5kZXggPSBwYXJzZUludChcclxuICAgICAgICAgICAgICBlbGVtLnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0XCIpXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIHRpbmRleCA9IHBhcnNlSW50KGVsZW0ucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRhc2tcIikpLFxyXG4gICAgICAgICAgICB0YXNrID0gcHJvamVjdHNIYW5kbGVyLmdldFRhc2socGluZGV4LCB0aW5kZXgpO1xyXG4gICAgICAgICAgb3BlbkRpYWxvZ3VlKHtcclxuICAgICAgICAgICAgYWN0aW9uLFxyXG4gICAgICAgICAgICBwaW5kZXgsXHJcbiAgICAgICAgICAgIHRpbmRleCxcclxuICAgICAgICAgICAgdGl0bGU6IHRhc2sudGl0bGUsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0YXNrLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICBkdWVEYXRlOiB0YXNrLmR1ZURhdGUsXHJcbiAgICAgICAgICAgIHByaW9yaXR5OiB0YXNrLnByaW9yaXR5LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChhY3Rpb24gPT09IFwiZWRpdC1ub3RlXCIpIHtcclxuICAgICAgICAgIGNvbnN0IGluZGV4ID0gcGFyc2VJbnQoZWxlbS5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtbm90ZVwiKSk7XHJcbiAgICAgICAgICBvcGVuRGlhbG9ndWUoe1xyXG4gICAgICAgICAgICBhY3Rpb24sXHJcbiAgICAgICAgICAgIGluZGV4LFxyXG4gICAgICAgICAgICB0aXRsZTogcHJvamVjdHNIYW5kbGVyLmdldE5vdGUoaW5kZXgpLnRpdGxlLFxyXG4gICAgICAgICAgICBub3RlOiBwcm9qZWN0c0hhbmRsZXIuZ2V0Tm90ZShpbmRleCkubm90ZSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChhY3Rpb24gPT09IFwicmVzZXQtZGF0YVwiKSB7XHJcbiAgICAgICAgcHViU3ViLnB1Ymxpc2goXCJyZXNldERhdGFBY3Rpb25Db25maXJtZWRcIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0pKCk7XHJcblxyXG5jb25zdCBwcm9qZWN0c0hhbmRsZXIgPSAoZnVuY3Rpb24gKCkge1xyXG4gIGxldCBwcm9qZWN0cyA9IFtdLFxyXG4gICAgbm90ZXMgPSBbXTtcclxuXHJcbiAgX2luaXQoKTtcclxuXHJcbiAgZnVuY3Rpb24gX2luaXQoKSB7XHJcbiAgICBwcm9qZWN0cyA9IFN0b3JhZ2UuZ2V0RGF0YSgpLnByb2plY3RzO1xyXG4gICAgbm90ZXMgPSBTdG9yYWdlLmdldERhdGEoKS5ub3RlcztcclxuXHJcbiAgICBwdWJTdWIucHVibGlzaCgnZGF0YUNoYW5nZWQnLCB7IHByb2plY3RzLCBub3RlcyB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGFkZFByb2plY3QocHJvamVjdCkge1xyXG4gICAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcclxuICAgIHB1YlN1Yi5wdWJsaXNoKCdkYXRhQ2hhbmdlZCcsIHsgcHJvamVjdHMsIG5vdGVzIH0pO1xyXG4gIH1cclxuICBmdW5jdGlvbiBhZGRUYXNrVG9Qcm9qZWN0KGluZGV4LCB0YXNrKSB7XHJcbiAgICBwcm9qZWN0c1tpbmRleF0uYWRkVGFzayh0YXNrKTtcclxuICAgIHB1YlN1Yi5wdWJsaXNoKCdkYXRhQ2hhbmdlZCcsIHsgcHJvamVjdHMsIG5vdGVzIH0pO1xyXG4gIH1cclxuICBmdW5jdGlvbiBhZGROb3RlKG5vdGUpIHtcclxuICAgIG5vdGVzLnB1c2gobm90ZSk7XHJcbiAgICBwdWJTdWIucHVibGlzaCgnZGF0YUNoYW5nZWQnLCB7IHByb2plY3RzLCBub3RlcyB9KTtcclxuICB9XHJcbiAgZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChpbmRleCkge1xyXG4gICAgcHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIHB1YlN1Yi5wdWJsaXNoKCdkYXRhQ2hhbmdlZCcsIHsgcHJvamVjdHMsIG5vdGVzIH0pO1xyXG4gIH1cclxuICBmdW5jdGlvbiByZW1vdmVUYXNrRnJvbVByb2plY3QocGluZGV4LCB0aW5kZXgpIHtcclxuICAgIHByb2plY3RzW3BpbmRleF0ucmVtb3ZlVGFzayh0aW5kZXgpO1xyXG4gICAgcHViU3ViLnB1Ymxpc2goJ2RhdGFDaGFuZ2VkJywgeyBwcm9qZWN0cywgbm90ZXMgfSk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHJlbW92ZU5vdGUoaW5kZXgpIHtcclxuICAgIG5vdGVzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICBwdWJTdWIucHVibGlzaCgnZGF0YUNoYW5nZWQnLCB7IHByb2plY3RzLCBub3RlcyB9KTtcclxuICB9XHJcbiAgZnVuY3Rpb24gZ2V0VGFzayhwaW5kZXgsIHRpbmRleCkge1xyXG4gICAgcmV0dXJuIHByb2plY3RzW3BpbmRleF0udGFza3NbdGluZGV4XTtcclxuICB9XHJcbiAgZnVuY3Rpb24gZ2V0UHJvamVjdChpbmRleCkge1xyXG4gICAgcmV0dXJuIHByb2plY3RzW2luZGV4XTtcclxuICB9XHJcbiAgZnVuY3Rpb24gZ2V0Tm90ZShpbmRleCkge1xyXG4gICAgcmV0dXJuIG5vdGVzW2luZGV4XTtcclxuICB9XHJcbiAgZnVuY3Rpb24gYWRkRW50cnkoZW50cnkpIHtcclxuICAgIGlmIChlbnRyeSBpbnN0YW5jZW9mIFByb2plY3QpIHtcclxuICAgICAgYWRkUHJvamVjdChlbnRyeSk7XHJcbiAgICB9IGVsc2UgaWYgKGVudHJ5IGluc3RhbmNlb2YgVGFzaykge1xyXG4gICAgICBhZGRUYXNrVG9Qcm9qZWN0KGVudHJ5LnBpbmRleCwgZW50cnkpO1xyXG4gICAgfSBlbHNlIGlmIChlbnRyeSBpbnN0YW5jZW9mIE5vdGUpIHtcclxuICAgICAgYWRkTm90ZShlbnRyeSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHVwZGF0ZUVudHJ5KGRhdGEpIHtcclxuICAgIGlmIChkYXRhLmFjdGlvbiA9PT0gXCJlZGl0LXByb2plY3RcIikge1xyXG4gICAgICBwcm9qZWN0c1tkYXRhLmluZGV4XS50aXRsZSA9IGRhdGEudGl0bGU7XHJcbiAgICB9IGVsc2UgaWYgKGRhdGEuYWN0aW9uID09PSBcImVkaXQtdGFza1wiKSB7XHJcbiAgICAgIHByb2plY3RzW2RhdGEucGluZGV4XS50YXNrc1tkYXRhLnRpbmRleF0gPSBkYXRhLnRhc2s7XHJcbiAgICB9IGVsc2UgaWYgKGRhdGEuYWN0aW9uID09PSBcImVkaXQtbm90ZVwiKSB7XHJcbiAgICAgIG5vdGVzW2RhdGEuaW5kZXhdID0gZGF0YS5ub3RlO1xyXG4gICAgfVxyXG4gICAgcHViU3ViLnB1Ymxpc2goJ2RhdGFDaGFuZ2VkJywgeyBwcm9qZWN0cywgbm90ZXMgfSk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGRlbGV0ZU9iaihlbnRpdHkpIHtcclxuICAgIGlmIChlbnRpdHkuYWN0aW9uID09PSBcImRlbGV0ZS10YXNrXCIpIHtcclxuICAgICAgcmVtb3ZlVGFza0Zyb21Qcm9qZWN0KGVudGl0eS5waW5kZXgsIGVudGl0eS50aW5kZXgpO1xyXG4gICAgfSBlbHNlIGlmIChlbnRpdHkuYWN0aW9uID09PSBcImRlbGV0ZS1wcm9qZWN0XCIpIHtcclxuICAgICAgcmVtb3ZlUHJvamVjdChlbnRpdHkuaW5kZXgpO1xyXG4gICAgfSBlbHNlIGlmIChlbnRpdHkuYWN0aW9uID09PSBcImRlbGV0ZS1ub3RlXCIpIHtcclxuICAgICAgcmVtb3ZlTm90ZShlbnRpdHkuaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHViU3ViLnN1YnNjcmliZShcImZvcm1TdWJtaXR0ZWRcIiwgYWRkRW50cnkpO1xyXG4gIHB1YlN1Yi5zdWJzY3JpYmUoXCJmb3JtU3VibWl0dGVkXCIsIHVwZGF0ZUVudHJ5KTtcclxuICBwdWJTdWIuc3Vic2NyaWJlKFwiZGVsZXRlRW50aXR5XCIsIGRlbGV0ZU9iaik7XHJcblxyXG4gIHJldHVybiB7IGdldFRhc2ssIGdldFByb2plY3QsIGdldE5vdGUgfTtcclxufSkoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=