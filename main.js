/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeModal: () => (/* binding */ closeModal),
/* harmony export */   createBtn: () => (/* binding */ createBtn),
/* harmony export */   invokeAction: () => (/* binding */ invokeAction),
/* harmony export */   modal: () => (/* binding */ modal),
/* harmony export */   openDialogue: () => (/* binding */ openDialogue),
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   renderData: () => (/* binding */ renderData),
/* harmony export */   swithTab: () => (/* binding */ swithTab),
/* harmony export */   tabs: () => (/* binding */ tabs)
/* harmony export */ });
/* harmony import */ var date_fns_isToday__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns/isToday */ "./node_modules/date-fns/esm/isToday/index.js");


const homePage = document.getElementById("home-page"),
  tabs = document.querySelectorAll(".tabs"),
  createBtn = document.getElementById("newbtn"),
  projectsPage = document.getElementById("projects-page"),
  notesPage = document.getElementById("notes-page"),
  checkListPage = document.getElementById("checklist-page"),
  pages = [homePage, projectsPage, notesPage, checkListPage],
  modal = document.getElementById("modal"),
  modalTitle = document.getElementById("modal-title"),
  modalContent = document.getElementById("modal-content");

const modalForms = {
  "new-project": `<form data-action-type="new-project">
      <div class="field">
          <label for="project-title">Title</label>
          <input id="project-title" name="title" type="text" maxlength="40" required>
      </div>
      <button type="submit">Save</button>
    </form>`,
  "new-note": `<form data-action-type="new-note">
    <div class="field">
        <label for="note-title">Title</label>
        <input id="note-title" name="title" type="text" maxlength="40" required>
    </div>
    <div class="field">
        <label for="note-content">Note</label>
        <textarea name="content" id="note-content"></textarea>
    </div>
    <button type="submit">Save</button>
    </form>`,
  "new-task": `<form data-action-type="new-task">
    <div class="field">
        <label for="task-title">Title</label>
        <input id="task-title" name="title" type="text" maxlength="35" required>
    </div>
    <div class="field">
        <label for="task-description">Description</label>
        <textarea name="description" id="task-description"></textarea>
    </div>
    <div class="field">
        <label for="task-duedate">Due date</label>
        <input id="task-duedate" name="duedate" type="date" required>
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
    case "checklists":
      checkListPage.classList.add("active-page");
      createBtn.textContent = "New Item";
      createBtn.setAttribute("data-dialogue", "item");
      break;
  }

  document.title = "TodoList - " + target[0].toUpperCase() + target.slice(1);
}

function invokeAction(e, elem) {
  if (e.target !== e.currentTarget) {
    // UI icons
    if (elem.classList.contains("actions")) {
      // <svg.actions>
      const action = elem.getAttribute("data-action-type");
      if (action === "view-task" || action === "edit-task") {
        const pindex = parseInt(
          elem.parentElement.getAttribute("data-project")
        );
        const tindex = parseInt(elem.parentElement.getAttribute("data-task"));
        openDialogue({ action, pindex, tindex });
      } else if (action === "view-project" || action === "edit-project") {
        const index = parseInt(elem.parentElement.getAttribute("data-project"));
        openDialogue({ action, index });
      } else if (action === "view-note" || action === "edit-note") {
        const index = parseInt(elem.parentElement.getAttribute("data-note"));
        openDialogue({ action, index });
      } else if (action.includes("delete")) {
        // delete action
      }
    } else if (elem.id === "close-modal") {
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

  e.stopPropagation();
}

function openDialogue(dialogue) {
  if (dialogue.action) {
    modalContent.innerHTML = modalForms[dialogue.action] || "";
    modalTitle.textContent = dialogue.action.split("-").join(" ");

    if (dialogue.action === "new-task") {
      modalContent.querySelector("button[type='submit']").setAttribute("data-project", dialogue.pindex)
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

function renderData(data) {
  const projects = data.projects,
    notes = data.notes,
    checkLists = data.checkLists,
    projectsContainer = projectsPage.querySelector(".projects-contr"),
    notesContainer = notesPage.querySelector("#notes-contr"),
    checkListContainer = checkListPage.querySelector("#checklist-page-contr"),
    todaysTaskContr = homePage.querySelector(".projects-contr"),
    thisWeeksTasksContr = document
      .getElementById("this-week-contr")
      .querySelector(".projects-contr");

  projectsContainer.innerHTML = "";
  notesContainer.innerHTML = "";
  checkListContainer.innerHTML = "";
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
        if ((0,date_fns_isToday__WEBPACK_IMPORTED_MODULE_0__["default"])(tasks[j].dueDate)) {
          const listElem = document.createElement("li");
          listElem.innerHTML = `<span class="flex-list-item">
                                  <span class="flex-list-elem"><span class="task-name"></span><span class="task-lbl"></span></span>
                                  <span class="flex-list-elem" data-project="${j}" data-task="${j}">
                                    <svg data-action-type="view-task" class="actions" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>View info</title><path d="M13 9H11V7H13V9M13 17H11V11H13V17M5 3H19C20.1 3 21 3.89 21 5V19C21 19.53 20.79 20.04 20.41 20.41C20.04 20.79 19.53 21 19 21H5C4.47 21 3.96 20.79 3.59 20.41C3.21 20.04 3 19.53 3 19V5C3 3.89 3.89 3 5 3M19 19V5H5V19H19Z" /></svg>
                                    <svg data-action-type="edit-task" class="actions" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Edit</title><path d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z" /></svg>
                                    <svg data-action-type="delete-task" class="actions" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Delete</title><path d="M14.12,10.47L12,12.59L9.87,10.47L8.46,11.88L10.59,14L8.47,16.12L9.88,17.53L12,15.41L14.12,17.53L15.53,16.12L13.41,14L15.53,11.88L14.12,10.47M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9Z" /></svg>
                                  </span>
                                </span>`;
          listElem.querySelector(".task-name").textContent = tasks[j].title;
          listElem.querySelector(".task-lbl").textContent = tasks[j].priority;
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
      taskNode.innerHTML = `<li class="flex-list-item">
        <span class="flex-list-elem"><span class="task-name"></span><span class="task-lbl"></span></span>
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
        </span>
      </li>`;
      taskNode.querySelector(".task-name").textContent = tasks[j].title;
      taskNode.querySelector(".task-lbl").textContent = tasks[j].priority;
      projectNode.querySelector("ul").appendChild(taskNode);
    }

    projectsContainer.appendChild(projectNode);
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
  for (let i = 0; i < checkLists.length; i++) {
    const node = document.createElement("li");
    node.setAttribute("data-item", i.toString());

    node.innerHTML = `<span>
        <input data-action-type="check-item" type="checkbox" id="list${i}" class="actions">
        <label for="list${i}"></label>
    </span>
    <svg data-action-type="delete-item" class="actions" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>Delete</title>
        <path d="M14.12,10.47L12,12.59L9.87,10.47L8.46,11.88L10.59,14L8.47,16.12L9.88,17.53L12,15.41L14.12,17.53L15.53,16.12L13.41,14L15.53,11.88L14.12,10.47M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9Z" />
    </svg>`;
    node.querySelector(`label[for="list${i}"]`).textContent =
      checkLists[i].listTxt;

    checkListContainer.appendChild(node);
  }
}




/***/ }),

/***/ "./src/projectsTasks.js":
/*!******************************!*\
  !*** ./src/projectsTasks.js ***!
  \******************************/
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
  static get default() {
    return {
      title: "TodoList tutorial",
      task: [
        new Task("Try out this application", "", new Date(), "medium"),
      ],
    };
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
  get info() {
    return `${this.title}:\n${this.description}\n${this.priority}`;
  }
}

class Note {
  constructor(title, note) {
    this.title = title;
    this.note = note;
  }
  // Manual
  static get default() {
    return { title: "How to use this TodoList", note: "Click the new project button and add new project" };
  }
}

class CheckList {
  constructor(listTxt) {
    this.listTxt = listTxt;
  }
  static get default() {
    return { listTxt: "Read 'How to use this TodoList'" };
  }
}



/***/ }),

/***/ "./src/pubSub.js":
/*!***********************!*\
  !*** ./src/pubSub.js ***!
  \***********************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pubSub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubSub.js */ "./src/pubSub.js");
/* harmony import */ var _projectsTasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectsTasks.js */ "./src/projectsTasks.js");
/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display.js */ "./src/display.js");




const displayController = (function() {
  init();
  
  function init() {
    addEventsToStaticElements();
  }
  function addEventsToStaticElements() {
    _display_js__WEBPACK_IMPORTED_MODULE_2__.tabs.forEach((elem) => elem.addEventListener("click", _display_js__WEBPACK_IMPORTED_MODULE_2__.swithTab));
    _display_js__WEBPACK_IMPORTED_MODULE_2__.createBtn.addEventListener('click', invokeActions);
    _display_js__WEBPACK_IMPORTED_MODULE_2__.modal.addEventListener('click', invokeActions);
    _display_js__WEBPACK_IMPORTED_MODULE_2__.pages.forEach(page => {
      page.addEventListener('click', invokeActions);
    });
  }
  function invokeActions(e) {
    // Move up to <svg> if target element is <path>
    const elem =
      e.target.tagName.toLowerCase() === "path"
        ? e.target.parentElement
        : e.target;
    (0,_display_js__WEBPACK_IMPORTED_MODULE_2__.invokeAction)(e, elem);
    invokeDataAction(e, elem);
  }
  function invokeDataAction(e, elem) {
    if (elem.getAttribute('type') === "submit") {
      e.preventDefault();

      const form = elem.parentElement;
      const data = Object.fromEntries(new FormData(form));
      let isValid = Object.values(data).every(entry => entry);
 
      if (isValid) {
        const action = form.getAttribute("data-action-type");
        let entry;
        if (action === "new-project") {
          entry = new _projectsTasks_js__WEBPACK_IMPORTED_MODULE_1__.Project(data.title, []);
        } else if (action === "new-note") {
          entry = new _projectsTasks_js__WEBPACK_IMPORTED_MODULE_1__.Note(data.title, data.note);
        } else if (action === "new-task") {
          entry = new _projectsTasks_js__WEBPACK_IMPORTED_MODULE_1__.Task(
            data.title,
            data.description,
            new Date(data.duedate),
            data.priority ? data.priority : "medium",
            parseInt(elem.getAttribute("data-project"))
          );
        }

        (0,_display_js__WEBPACK_IMPORTED_MODULE_2__.closeModal)();
        _pubSub_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish("formSubmitted", entry);
      }
    }
  }

  _pubSub_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("dataChanged", _display_js__WEBPACK_IMPORTED_MODULE_2__.renderData);
})()

const projectsHandler = (function () {
  let projects = [],
    notes = [],
    checkLists = [];

  initDefaults(true);

  function initDefaults(reset) {
    if (reset) {
      projects = [];
      notes = [];
      checkLists = [];
    }
    addProject(
      new _projectsTasks_js__WEBPACK_IMPORTED_MODULE_1__.Project(_projectsTasks_js__WEBPACK_IMPORTED_MODULE_1__.Project.default.title, _projectsTasks_js__WEBPACK_IMPORTED_MODULE_1__.Project.default.task)
    );
    addNote(new _projectsTasks_js__WEBPACK_IMPORTED_MODULE_1__.Note(_projectsTasks_js__WEBPACK_IMPORTED_MODULE_1__.Note.default.title, _projectsTasks_js__WEBPACK_IMPORTED_MODULE_1__.Note.default.note));
    addCheckList(
      new _projectsTasks_js__WEBPACK_IMPORTED_MODULE_1__.CheckList(
        _projectsTasks_js__WEBPACK_IMPORTED_MODULE_1__.CheckList.default.listTxt
      )
    );
    _pubSub_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('dataChanged', { projects, notes, checkLists });
  }

  function addProject(project) {
    projects.push(project);
    _pubSub_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('dataChanged', { projects, notes, checkLists });
  }
  function addTaskToProject(index, task) {
    projects[index].addTask(task);
    _pubSub_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('dataChanged', { projects, notes, checkLists });
  }
  function addNote(note) {
    notes.push(note);
    _pubSub_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('dataChanged', { projects, notes, checkLists });
  }
  function addCheckList(checkList) {
    checkLists.push(checkList);
  }
  function removeProject(index) {
    projects.splice(index, 1);
  }
  function removeTaskFromProject(pindex, tindex) {
    projects[pindex].removeTask(tindex);
  }
  function removeNote(index) {
    notes.splice(index, 1);
  }
  function removeCheckList(index) {
    checkLists.splice(index, 1);
  }
  function addEntry(entry) {
    if (entry instanceof _projectsTasks_js__WEBPACK_IMPORTED_MODULE_1__.Project) {
      addProject(entry);
    } else if (entry instanceof _projectsTasks_js__WEBPACK_IMPORTED_MODULE_1__.Task) {
      addTaskToProject(entry.pindex, entry);
    } else if (entry instanceof _projectsTasks_js__WEBPACK_IMPORTED_MODULE_1__.Note) {
      addNote(entry);
    }
  }

  _pubSub_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("formSubmitted", addEntry);
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVGhpc1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RvZGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZkRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0c1Rhc2tzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wdWJTdWIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGRlZmF1bHRPcHRpb25zID0ge307XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gIHJldHVybiBkZWZhdWx0T3B0aW9ucztcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhuZXdPcHRpb25zKSB7XG4gIGRlZmF1bHRPcHRpb25zID0gbmV3T3B0aW9ucztcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCBzdGFydE9mRGF5IGZyb20gXCIuLi9zdGFydE9mRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1NhbWVEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgMDY6MDA6MDAgYW5kIDQgU2VwdGVtYmVyIDE4OjAwOjAwIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0LCA2LCAwKSwgbmV3IERhdGUoMjAxNCwgOCwgNCwgMTgsIDApKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciBhbmQgNCBPY3RvYmVyIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNCwgOSwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciwgMjAxNCBhbmQgNCBTZXB0ZW1iZXIsIDIwMTUgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE1LCA4LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lRGF5KGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZVJpZ2h0KTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZkRheS5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZEYXkuZ2V0VGltZSgpO1xufSIsImltcG9ydCBzdGFydE9mV2VlayBmcm9tIFwiLi4vc3RhcnRPZldlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzU2FtZVdlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMzEgQXVndXN0IDIwMTQgYW5kIDQgU2VwdGVtYmVyIDIwMTQgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgNywgMzEpLCBuZXcgRGF0ZSgyMDE0LCA4LCA0KSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB3ZWVrIHN0YXJ0cyB3aXRoIE1vbmRheSxcbiAqIC8vIGFyZSAzMSBBdWd1c3QgMjAxNCBhbmQgNCBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCA3LCAzMSksIG5ldyBEYXRlKDIwMTQsIDgsIDQpLCB7XG4gKiAgIHdlZWtTdGFydHNPbjogMVxuICogfSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDEgSmFudWFyeSAyMDE0IGFuZCAxIEphbnVhcnkgMjAxNSBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCAwLCAxKSwgbmV3IERhdGUoMjAxNSwgMCwgMSkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZVdlZWsoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZXZWVrID0gc3RhcnRPZldlZWsoZGlydHlEYXRlTGVmdCwgb3B0aW9ucyk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mV2VlayA9IHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZVJpZ2h0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZldlZWsuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mV2Vlay5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IGlzU2FtZVdlZWsgZnJvbSBcIi4uL2lzU2FtZVdlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVGhpc1dlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIHdlZWsgYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSB3ZWVrIGFzIHRoZSBjdXJyZW50IGRhdGU/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIHRoZSBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgaW4gdGhpcyB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMjUgU2VwdGVtYmVyIDIwMTQsIGlzIDIxIFNlcHRlbWJlciAyMDE0IGluIHRoaXMgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVGhpc1dlZWsobmV3IERhdGUoMjAxNCwgOCwgMjEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDI1IFNlcHRlbWJlciAyMDE0IGFuZCB3ZWVrIHN0YXJ0cyB3aXRoIE1vbmRheVxuICogLy8gaXMgMjEgU2VwdGVtYmVyIDIwMTQgaW4gdGhpcyB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNUaGlzV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyMSksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUaGlzV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVXZWVrKGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSwgb3B0aW9ucyk7XG59IiwiaW1wb3J0IGlzU2FtZURheSBmcm9tIFwiLi4vaXNTYW1lRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1RvZGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB0b2RheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyA2IE9jdG9iZXIgMTQ6MDA6MDAgdG9kYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RvZGF5KG5ldyBEYXRlKDIwMTQsIDksIDYsIDE0LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RvZGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGlzU2FtZURheShkaXJ0eURhdGUsIERhdGUubm93KCkpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mRGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZldlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFN1biBBdWcgMzEgMjAxNCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0aGUgd2VlayBzdGFydHMgb24gTW9uZGF5LCB0aGUgc3RhcnQgb2YgdGhlIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZldlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMCk7XG5cbiAgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldERheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7XG5cbiAgLy8gQ2xvbmUgdGhlIGRhdGVcbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJpbXBvcnQgaXNUb2RheSBmcm9tIFwiZGF0ZS1mbnMvaXNUb2RheVwiO1xyXG5cclxuY29uc3QgaG9tZVBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWUtcGFnZVwiKSxcclxuICB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YWJzXCIpLFxyXG4gIGNyZWF0ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3YnRuXCIpLFxyXG4gIHByb2plY3RzUGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHMtcGFnZVwiKSxcclxuICBub3Rlc1BhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vdGVzLXBhZ2VcIiksXHJcbiAgY2hlY2tMaXN0UGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hlY2tsaXN0LXBhZ2VcIiksXHJcbiAgcGFnZXMgPSBbaG9tZVBhZ2UsIHByb2plY3RzUGFnZSwgbm90ZXNQYWdlLCBjaGVja0xpc3RQYWdlXSxcclxuICBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxcIiksXHJcbiAgbW9kYWxUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWwtdGl0bGVcIiksXHJcbiAgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbC1jb250ZW50XCIpO1xyXG5cclxuY29uc3QgbW9kYWxGb3JtcyA9IHtcclxuICBcIm5ldy1wcm9qZWN0XCI6IGA8Zm9ybSBkYXRhLWFjdGlvbi10eXBlPVwibmV3LXByb2plY3RcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XHJcbiAgICAgICAgICA8bGFiZWwgZm9yPVwicHJvamVjdC10aXRsZVwiPlRpdGxlPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dCBpZD1cInByb2plY3QtdGl0bGVcIiBuYW1lPVwidGl0bGVcIiB0eXBlPVwidGV4dFwiIG1heGxlbmd0aD1cIjQwXCIgcmVxdWlyZWQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TYXZlPC9idXR0b24+XHJcbiAgICA8L2Zvcm0+YCxcclxuICBcIm5ldy1ub3RlXCI6IGA8Zm9ybSBkYXRhLWFjdGlvbi10eXBlPVwibmV3LW5vdGVcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJub3RlLXRpdGxlXCI+VGl0bGU8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCBpZD1cIm5vdGUtdGl0bGVcIiBuYW1lPVwidGl0bGVcIiB0eXBlPVwidGV4dFwiIG1heGxlbmd0aD1cIjQwXCIgcmVxdWlyZWQ+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJub3RlLWNvbnRlbnRcIj5Ob3RlPC9sYWJlbD5cclxuICAgICAgICA8dGV4dGFyZWEgbmFtZT1cImNvbnRlbnRcIiBpZD1cIm5vdGUtY29udGVudFwiPjwvdGV4dGFyZWE+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlNhdmU8L2J1dHRvbj5cclxuICAgIDwvZm9ybT5gLFxyXG4gIFwibmV3LXRhc2tcIjogYDxmb3JtIGRhdGEtYWN0aW9uLXR5cGU9XCJuZXctdGFza1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XHJcbiAgICAgICAgPGxhYmVsIGZvcj1cInRhc2stdGl0bGVcIj5UaXRsZTwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IGlkPVwidGFzay10aXRsZVwiIG5hbWU9XCJ0aXRsZVwiIHR5cGU9XCJ0ZXh0XCIgbWF4bGVuZ3RoPVwiMzVcIiByZXF1aXJlZD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XHJcbiAgICAgICAgPGxhYmVsIGZvcj1cInRhc2stZGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGlkPVwidGFzay1kZXNjcmlwdGlvblwiPjwvdGV4dGFyZWE+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJ0YXNrLWR1ZWRhdGVcIj5EdWUgZGF0ZTwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IGlkPVwidGFzay1kdWVkYXRlXCIgbmFtZT1cImR1ZWRhdGVcIiB0eXBlPVwiZGF0ZVwiIHJlcXVpcmVkPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cclxuICAgICAgICA8bGFiZWw+UHJpb3JpdHk8L2xhYmVsPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJyYWRpby1idG5zLWNudHJcIj5cclxuICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJ0YXNrLXByaW9yaXR5LWhcIiBuYW1lPVwicHJpb3JpdHlcIiB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cImhpZ2hcIiByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0YXNrLXByaW9yaXR5LWhcIj5IaWdoPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInRhc2stcHJpb3JpdHktbVwiIG5hbWU9XCJwcmlvcml0eVwiIHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwibWVkaXVtXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidGFzay1wcmlvcml0eS1tXCI+TWVkaXVtPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInRhc2stcHJpb3JpdHktbFwiIG5hbWU9XCJwcmlvcml0eVwiIHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwibG93XCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidGFzay1wcmlvcml0eS1sXCI+TG93PC9sYWJlbD5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TYXZlPC9idXR0b24+XHJcbjwvZm9ybT5gLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gc3dpdGhUYWIoZSkge1xyXG4gIC8vIERvIG5vdGhpbmcgaWYgdXNlciBjbGlja3MgYW4gYWN0aXZlIHRhYlxyXG4gIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHJldHVybjtcclxuXHJcbiAgLy8gUmVtb3ZlIHRoZSBjbGFzcywgJ2FjdGl2ZS1wYWdlJyBhbmQgJ2FjdGl2ZSdcclxuICBwYWdlcy5mb3JFYWNoKChwYWdlKSA9PiB7XHJcbiAgICBpZiAocGFnZS5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmUtcGFnZVwiKSkge1xyXG4gICAgICBwYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtcGFnZVwiKTtcclxuICAgIH1cclxuICB9KTtcclxuICB0YWJzLmZvckVhY2goKHRhYikgPT4ge1xyXG4gICAgaWYgKHRhYi5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcclxuICAgICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8vIEFkZCB0aGUgY2xhc3MsICdhY3RpdmUtcGFnZScgJiAnYWN0aXZlJ2FuZCBjaGFuZ2UgY3JlYXRlQnRuIHRleHRcclxuICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtdGFyZ2V0LXZhbHVlXCIpO1xyXG4gIHN3aXRjaCAodGFyZ2V0KSB7XHJcbiAgICBjYXNlIFwiaG9tZVwiOlxyXG4gICAgICBob21lUGFnZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLXBhZ2VcIik7XHJcbiAgICAgIGNyZWF0ZUJ0bi50ZXh0Q29udGVudCA9IFwiTmV3IFByb2plY3RcIjtcclxuICAgICAgY3JlYXRlQnRuLnNldEF0dHJpYnV0ZShcImRhdGEtZGlhbG9ndWVcIiwgXCJwcm9qZWN0XCIpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCJwcm9qZWN0c1wiOlxyXG4gICAgICBwcm9qZWN0c1BhZ2UuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1wYWdlXCIpO1xyXG4gICAgICBjcmVhdGVCdG4udGV4dENvbnRlbnQgPSBcIk5ldyBQcm9qZWN0XCI7XHJcbiAgICAgIGNyZWF0ZUJ0bi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWRpYWxvZ3VlXCIsIFwicHJvamVjdFwiKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwibm90ZXNcIjpcclxuICAgICAgbm90ZXNQYWdlLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtcGFnZVwiKTtcclxuICAgICAgY3JlYXRlQnRuLnRleHRDb250ZW50ID0gXCJOZXcgTm90ZVwiO1xyXG4gICAgICBjcmVhdGVCdG4uc2V0QXR0cmlidXRlKFwiZGF0YS1kaWFsb2d1ZVwiLCBcIm5vdGVcIik7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcImNoZWNrbGlzdHNcIjpcclxuICAgICAgY2hlY2tMaXN0UGFnZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLXBhZ2VcIik7XHJcbiAgICAgIGNyZWF0ZUJ0bi50ZXh0Q29udGVudCA9IFwiTmV3IEl0ZW1cIjtcclxuICAgICAgY3JlYXRlQnRuLnNldEF0dHJpYnV0ZShcImRhdGEtZGlhbG9ndWVcIiwgXCJpdGVtXCIpO1xyXG4gICAgICBicmVhaztcclxuICB9XHJcblxyXG4gIGRvY3VtZW50LnRpdGxlID0gXCJUb2RvTGlzdCAtIFwiICsgdGFyZ2V0WzBdLnRvVXBwZXJDYXNlKCkgKyB0YXJnZXQuc2xpY2UoMSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGludm9rZUFjdGlvbihlLCBlbGVtKSB7XHJcbiAgaWYgKGUudGFyZ2V0ICE9PSBlLmN1cnJlbnRUYXJnZXQpIHtcclxuICAgIC8vIFVJIGljb25zXHJcbiAgICBpZiAoZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3Rpb25zXCIpKSB7XHJcbiAgICAgIC8vIDxzdmcuYWN0aW9ucz5cclxuICAgICAgY29uc3QgYWN0aW9uID0gZWxlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFjdGlvbi10eXBlXCIpO1xyXG4gICAgICBpZiAoYWN0aW9uID09PSBcInZpZXctdGFza1wiIHx8IGFjdGlvbiA9PT0gXCJlZGl0LXRhc2tcIikge1xyXG4gICAgICAgIGNvbnN0IHBpbmRleCA9IHBhcnNlSW50KFxyXG4gICAgICAgICAgZWxlbS5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdFwiKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgdGluZGV4ID0gcGFyc2VJbnQoZWxlbS5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtdGFza1wiKSk7XHJcbiAgICAgICAgb3BlbkRpYWxvZ3VlKHsgYWN0aW9uLCBwaW5kZXgsIHRpbmRleCB9KTtcclxuICAgICAgfSBlbHNlIGlmIChhY3Rpb24gPT09IFwidmlldy1wcm9qZWN0XCIgfHwgYWN0aW9uID09PSBcImVkaXQtcHJvamVjdFwiKSB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBwYXJzZUludChlbGVtLnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0XCIpKTtcclxuICAgICAgICBvcGVuRGlhbG9ndWUoeyBhY3Rpb24sIGluZGV4IH0pO1xyXG4gICAgICB9IGVsc2UgaWYgKGFjdGlvbiA9PT0gXCJ2aWV3LW5vdGVcIiB8fCBhY3Rpb24gPT09IFwiZWRpdC1ub3RlXCIpIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHBhcnNlSW50KGVsZW0ucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLW5vdGVcIikpO1xyXG4gICAgICAgIG9wZW5EaWFsb2d1ZSh7IGFjdGlvbiwgaW5kZXggfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoYWN0aW9uLmluY2x1ZGVzKFwiZGVsZXRlXCIpKSB7XHJcbiAgICAgICAgLy8gZGVsZXRlIGFjdGlvblxyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGVsZW0uaWQgPT09IFwiY2xvc2UtbW9kYWxcIikge1xyXG4gICAgICBjbG9zZU1vZGFsKCk7XHJcbiAgICB9IGVsc2UgaWYgKGVsZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS1hY3Rpb24tdHlwZVwiKSA9PT0gXCJuZXctdGFza1wiKSB7XHJcbiAgICAgIGNvbnN0IGFjdGlvbiA9IGVsZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS1hY3Rpb24tdHlwZVwiKTtcclxuICAgICAgY29uc3QgcGluZGV4ID0gcGFyc2VJbnQoZWxlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3RcIikpO1xyXG4gICAgICBvcGVuRGlhbG9ndWUoeyBhY3Rpb24sIHBpbmRleCB9KTtcclxuICAgIH1cclxuICB9IGVsc2UgaWYgKGVsZW0gPT09IGNyZWF0ZUJ0bikge1xyXG4gICAgY29uc3QgYWN0aW9uID0gYG5ldy0ke2NyZWF0ZUJ0bi5nZXRBdHRyaWJ1dGUoXCJkYXRhLWRpYWxvZ3VlXCIpfWA7XHJcbiAgICBvcGVuRGlhbG9ndWUoeyBhY3Rpb24gfSk7XHJcbiAgfSBlbHNlIGlmIChlbGVtID09PSBtb2RhbCkge1xyXG4gICAgY2xvc2VNb2RhbCgpO1xyXG4gIH1cclxuXHJcbiAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxufVxyXG5cclxuZnVuY3Rpb24gb3BlbkRpYWxvZ3VlKGRpYWxvZ3VlKSB7XHJcbiAgaWYgKGRpYWxvZ3VlLmFjdGlvbikge1xyXG4gICAgbW9kYWxDb250ZW50LmlubmVySFRNTCA9IG1vZGFsRm9ybXNbZGlhbG9ndWUuYWN0aW9uXSB8fCBcIlwiO1xyXG4gICAgbW9kYWxUaXRsZS50ZXh0Q29udGVudCA9IGRpYWxvZ3VlLmFjdGlvbi5zcGxpdChcIi1cIikuam9pbihcIiBcIik7XHJcblxyXG4gICAgaWYgKGRpYWxvZ3VlLmFjdGlvbiA9PT0gXCJuZXctdGFza1wiKSB7XHJcbiAgICAgIG1vZGFsQ29udGVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uW3R5cGU9J3N1Ym1pdCddXCIpLnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdFwiLCBkaWFsb2d1ZS5waW5kZXgpXHJcbiAgICB9XHJcbiAgfVxyXG4gIG9wZW5Nb2RhbCgpO1xyXG59XHJcbmZ1bmN0aW9uIG9wZW5Nb2RhbCgpIHtcclxuICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG59XHJcbmZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XHJcbiAgbW9kYWxDb250ZW50LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyRGF0YShkYXRhKSB7XHJcbiAgY29uc3QgcHJvamVjdHMgPSBkYXRhLnByb2plY3RzLFxyXG4gICAgbm90ZXMgPSBkYXRhLm5vdGVzLFxyXG4gICAgY2hlY2tMaXN0cyA9IGRhdGEuY2hlY2tMaXN0cyxcclxuICAgIHByb2plY3RzQ29udGFpbmVyID0gcHJvamVjdHNQYWdlLnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMtY29udHJcIiksXHJcbiAgICBub3Rlc0NvbnRhaW5lciA9IG5vdGVzUGFnZS5xdWVyeVNlbGVjdG9yKFwiI25vdGVzLWNvbnRyXCIpLFxyXG4gICAgY2hlY2tMaXN0Q29udGFpbmVyID0gY2hlY2tMaXN0UGFnZS5xdWVyeVNlbGVjdG9yKFwiI2NoZWNrbGlzdC1wYWdlLWNvbnRyXCIpLFxyXG4gICAgdG9kYXlzVGFza0NvbnRyID0gaG9tZVBhZ2UucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy1jb250clwiKSxcclxuICAgIHRoaXNXZWVrc1Rhc2tzQ29udHIgPSBkb2N1bWVudFxyXG4gICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJ0aGlzLXdlZWstY29udHJcIilcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMtY29udHJcIik7XHJcblxyXG4gIHByb2plY3RzQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgbm90ZXNDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuICBjaGVja0xpc3RDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuICB0b2RheXNUYXNrQ29udHIuaW5uZXJIVE1MID0gXCJcIjtcclxuICB0aGlzV2Vla3NUYXNrc0NvbnRyLmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vIFRvZGF5J3MgdGFza3NcclxuICAgIGlmIChwcm9qZWN0c1tpXS5nZXRUb2RheXNUYXNrcygpWzBdKSB7XHJcbiAgICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxyXG4gICAgICAgIHRhc2tzID0gcHJvamVjdHNbaV0uc29ydGVkVGFza3M7XHJcbiAgICAgIGVsZW0uaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJwcm9qZWN0LW5hbWUtY29udHJcIiBkYXRhLXByb2plY3Q9XCIke2l9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByb2plY3QtbmFtZVwiPjwvc3Bhbj48c3ZnIGRhdGEtYWN0aW9uLXR5cGU9XCJkZWxldGUtcHJvamVjdFwiIGNsYXNzPVwiYWN0aW9uc1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPkRlbGV0ZTwvdGl0bGU+PHBhdGggZD1cIk0xNC4xMiwxMC40N0wxMiwxMi41OUw5Ljg3LDEwLjQ3TDguNDYsMTEuODhMMTAuNTksMTRMOC40NywxNi4xMkw5Ljg4LDE3LjUzTDEyLDE1LjQxTDE0LjEyLDE3LjUzTDE1LjUzLDE2LjEyTDEzLjQxLDE0TDE1LjUzLDExLjg4TDE0LjEyLDEwLjQ3TTE1LjUsNEwxNC41LDNIOS41TDguNSw0SDVWNkgxOVY0SDE1LjVNNiwxOUEyLDIgMCAwLDAgOCwyMUgxNkEyLDIgMCAwLDAgMTgsMTlWN0g2VjE5TTgsOUgxNlYxOUg4VjlaXCIgLz48L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD48L3VsPmA7XHJcbiAgICAgIGVsZW0ucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LW5hbWVcIikudGV4dENvbnRlbnQgPSBwcm9qZWN0c1tpXS50aXRsZTtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0YXNrcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgIGlmIChpc1RvZGF5KHRhc2tzW2pdLmR1ZURhdGUpKSB7XHJcbiAgICAgICAgICBjb25zdCBsaXN0RWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICAgIGxpc3RFbGVtLmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cImZsZXgtbGlzdC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZsZXgtbGlzdC1lbGVtXCI+PHNwYW4gY2xhc3M9XCJ0YXNrLW5hbWVcIj48L3NwYW4+PHNwYW4gY2xhc3M9XCJ0YXNrLWxibFwiPjwvc3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZsZXgtbGlzdC1lbGVtXCIgZGF0YS1wcm9qZWN0PVwiJHtqfVwiIGRhdGEtdGFzaz1cIiR7an1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBkYXRhLWFjdGlvbi10eXBlPVwidmlldy10YXNrXCIgY2xhc3M9XCJhY3Rpb25zXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+VmlldyBpbmZvPC90aXRsZT48cGF0aCBkPVwiTTEzIDlIMTFWN0gxM1Y5TTEzIDE3SDExVjExSDEzVjE3TTUgM0gxOUMyMC4xIDMgMjEgMy44OSAyMSA1VjE5QzIxIDE5LjUzIDIwLjc5IDIwLjA0IDIwLjQxIDIwLjQxQzIwLjA0IDIwLjc5IDE5LjUzIDIxIDE5IDIxSDVDNC40NyAyMSAzLjk2IDIwLjc5IDMuNTkgMjAuNDFDMy4yMSAyMC4wNCAzIDE5LjUzIDMgMTlWNUMzIDMuODkgMy44OSAzIDUgM00xOSAxOVY1SDVWMTlIMTlaXCIgLz48L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBkYXRhLWFjdGlvbi10eXBlPVwiZWRpdC10YXNrXCIgY2xhc3M9XCJhY3Rpb25zXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+RWRpdDwvdGl0bGU+PHBhdGggZD1cIk01LDNDMy44OSwzIDMsMy44OSAzLDVWMTlBMiwyIDAgMCwwIDUsMjFIMTlBMiwyIDAgMCwwIDIxLDE5VjEySDE5VjE5SDVWNUgxMlYzSDVNMTcuNzgsNEMxNy42MSw0IDE3LjQzLDQuMDcgMTcuMyw0LjJMMTYuMDgsNS40MUwxOC41OCw3LjkxTDE5LjgsNi43QzIwLjA2LDYuNDQgMjAuMDYsNiAxOS44LDUuNzVMMTguMjUsNC4yQzE4LjEyLDQuMDcgMTcuOTUsNCAxNy43OCw0TTE1LjM3LDYuMTJMOCwxMy41VjE2SDEwLjVMMTcuODcsOC42MkwxNS4zNyw2LjEyWlwiIC8+PC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgZGF0YS1hY3Rpb24tdHlwZT1cImRlbGV0ZS10YXNrXCIgY2xhc3M9XCJhY3Rpb25zXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+RGVsZXRlPC90aXRsZT48cGF0aCBkPVwiTTE0LjEyLDEwLjQ3TDEyLDEyLjU5TDkuODcsMTAuNDdMOC40NiwxMS44OEwxMC41OSwxNEw4LjQ3LDE2LjEyTDkuODgsMTcuNTNMMTIsMTUuNDFMMTQuMTIsMTcuNTNMMTUuNTMsMTYuMTJMMTMuNDEsMTRMMTUuNTMsMTEuODhMMTQuMTIsMTAuNDdNMTUuNSw0TDE0LjUsM0g5LjVMOC41LDRINVY2SDE5VjRIMTUuNU02LDE5QTIsMiAwIDAsMCA4LDIxSDE2QTIsMiAwIDAsMCAxOCwxOVY3SDZWMTlNOCw5SDE2VjE5SDhWOVpcIiAvPjwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5gO1xyXG4gICAgICAgICAgbGlzdEVsZW0ucXVlcnlTZWxlY3RvcihcIi50YXNrLW5hbWVcIikudGV4dENvbnRlbnQgPSB0YXNrc1tqXS50aXRsZTtcclxuICAgICAgICAgIGxpc3RFbGVtLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1sYmxcIikudGV4dENvbnRlbnQgPSB0YXNrc1tqXS5wcmlvcml0eTtcclxuICAgICAgICAgIGVsZW0ucXVlcnlTZWxlY3RvcihcInVsXCIpLmFwcGVuZENoaWxkKGxpc3RFbGVtKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdG9kYXlzVGFza0NvbnRyLmFwcGVuZENoaWxkKGVsZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRoaXMgd2VlaydzIHRhc2tzXHJcbiAgICBpZiAocHJvamVjdHNbaV0uZ2V0VGhpc1dlZWtzVGFza3MoKVswXSkge1xyXG4gICAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICBlbGVtLmNsYXNzTmFtZSA9IFwiZmxleC1saXN0LWl0ZW1cIjtcclxuICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3RcIiwgaS50b1N0cmluZygpKTtcclxuXHJcbiAgICAgIGVsZW0uaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwicHJvamVjdC1uYW1lXCI+PC9zcGFuPlxyXG4gICAgICAgIDxzdmcgZGF0YS1hY3Rpb24tdHlwZT1cImRlbGV0ZS1wcm9qZWN0XCIgY2xhc3M9XCJhY3Rpb25zXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+RGVsZXRlPC90aXRsZT48cGF0aCBkPVwiTTE0LjEyLDEwLjQ3TDEyLDEyLjU5TDkuODcsMTAuNDdMOC40NiwxMS44OEwxMC41OSwxNEw4LjQ3LDE2LjEyTDkuODgsMTcuNTNMMTIsMTUuNDFMMTQuMTIsMTcuNTNMMTUuNTMsMTYuMTJMMTMuNDEsMTRMMTUuNTMsMTEuODhMMTQuMTIsMTAuNDdNMTUuNSw0TDE0LjUsM0g5LjVMOC41LDRINVY2SDE5VjRIMTUuNU02LDE5QTIsMiAwIDAsMCA4LDIxSDE2QTIsMiAwIDAsMCAxOCwxOVY3SDZWMTlNOCw5SDE2VjE5SDhWOVpcIiAvPjwvc3ZnPmA7XHJcblxyXG4gICAgICBlbGVtLnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1uYW1lXCIpLnRleHRDb250ZW50ID0gcHJvamVjdHNbaV0udGl0bGU7XHJcbiAgICAgIHRoaXNXZWVrc1Rhc2tzQ29udHIuYXBwZW5kQ2hpbGQoZWxlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHJvamVjdHMgcGFnZVxyXG4gICAgY29uc3QgcHJvamVjdE5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgdGFza3MgPSBwcm9qZWN0c1tpXS5zb3J0ZWRUYXNrcztcclxuICAgIHByb2plY3ROb2RlLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwicHJvamVjdC1uYW1lLWNvbnRyXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJwcm9qZWN0LW5hbWVcIj48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJhY3Rucy1jb250clwiIGRhdGEtcHJvamVjdD1cIiR7aX1cIj5cclxuICAgICAgICAgICAgPHN2ZyBkYXRhLWFjdGlvbi10eXBlPVwiZWRpdC1wcm9qZWN0XCIgY2xhc3M9XCJhY3Rpb25zXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cclxuICAgICAgICAgICAgICA8dGl0bGU+RWRpdDwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgPHBhdGggZD1cIk01LDNDMy44OSwzIDMsMy44OSAzLDVWMTlBMiwyIDAgMCwwIDUsMjFIMTlBMiwyIDAgMCwwIDIxLDE5VjEySDE5VjE5SDVWNUgxMlYzSDVNMTcuNzgsNEMxNy42MSw0IDE3LjQzLDQuMDcgMTcuMyw0LjJMMTYuMDgsNS40MUwxOC41OCw3LjkxTDE5LjgsNi43QzIwLjA2LDYuNDQgMjAuMDYsNiAxOS44LDUuNzVMMTguMjUsNC4yQzE4LjEyLDQuMDcgMTcuOTUsNCAxNy43OCw0TTE1LjM3LDYuMTJMOCwxMy41VjE2SDEwLjVMMTcuODcsOC42MkwxNS4zNyw2LjEyWlwiIC8+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8c3ZnIGRhdGEtYWN0aW9uLXR5cGU9XCJkZWxldGUtcHJvamVjdFwiIGNsYXNzPVwiYWN0aW9uc1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XHJcbiAgICAgICAgICAgICAgPHRpdGxlPkRlbGV0ZTwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNC4xMiwxMC40N0wxMiwxMi41OUw5Ljg3LDEwLjQ3TDguNDYsMTEuODhMMTAuNTksMTRMOC40NywxNi4xMkw5Ljg4LDE3LjUzTDEyLDE1LjQxTDE0LjEyLDE3LjUzTDE1LjUzLDE2LjEyTDEzLjQxLDE0TDE1LjUzLDExLjg4TDE0LjEyLDEwLjQ3TTE1LjUsNEwxNC41LDNIOS41TDguNSw0SDVWNkgxOVY0SDE1LjVNNiwxOUEyLDIgMCAwLDAgOCwyMUgxNkEyLDIgMCAwLDAgMTgsMTlWN0g2VjE5TTgsOUgxNlYxOUg4VjlaXCIgLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8dWw+PC91bD5cclxuICAgIDxidXR0b24gZGF0YS1hY3Rpb24tdHlwZT1cIm5ldy10YXNrXCIgZGF0YS1wcm9qZWN0PVwiJHtpfVwiPkFkZCBUYXNrPC9idXR0b24+YDtcclxuICAgIHByb2plY3ROb2RlLnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1uYW1lXCIpLnRleHRDb250ZW50ID0gcHJvamVjdHNbaV0udGl0bGU7XHJcblxyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCB0YXNrcy5sZW5ndGg7IGorKykge1xyXG4gICAgICBjb25zdCB0YXNrTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgdGFza05vZGUuaW5uZXJIVE1MID0gYDxsaSBjbGFzcz1cImZsZXgtbGlzdC1pdGVtXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJmbGV4LWxpc3QtZWxlbVwiPjxzcGFuIGNsYXNzPVwidGFzay1uYW1lXCI+PC9zcGFuPjxzcGFuIGNsYXNzPVwidGFzay1sYmxcIj48L3NwYW4+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGRhdGEtcHJvamVjdD1cIiR7aX1cIiBkYXRhLXRhc2s9XCIke2p9XCIgY2xhc3M9XCJmbGV4LWxpc3QtZWxlbVwiPlxyXG4gICAgICAgICAgICA8c3ZnIGRhdGEtYWN0aW9uLXR5cGU9XCJ2aWV3LXRhc2tcIiBjbGFzcz1cImFjdGlvbnNcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG4gICAgICAgICAgICAgIDx0aXRsZT5WaWV3IGluZm88L3RpdGxlPlxyXG4gICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTMgOUgxMVY3SDEzVjlNMTMgMTdIMTFWMTFIMTNWMTdNNSAzSDE5QzIwLjEgMyAyMSAzLjg5IDIxIDVWMTlDMjEgMTkuNTMgMjAuNzkgMjAuMDQgMjAuNDEgMjAuNDFDMjAuMDQgMjAuNzkgMTkuNTMgMjEgMTkgMjFINUM0LjQ3IDIxIDMuOTYgMjAuNzkgMy41OSAyMC40MUMzLjIxIDIwLjA0IDMgMTkuNTMgMyAxOVY1QzMgMy44OSAzLjg5IDMgNSAzTTE5IDE5VjVINVYxOUgxOVpcIiAvPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPHN2ZyBkYXRhLWFjdGlvbi10eXBlPVwiZWRpdC10YXNrXCIgY2xhc3M9XCJhY3Rpb25zXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cclxuICAgICAgICAgICAgICA8dGl0bGU+RWRpdDwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgPHBhdGggZD1cIk01LDNDMy44OSwzIDMsMy44OSAzLDVWMTlBMiwyIDAgMCwwIDUsMjFIMTlBMiwyIDAgMCwwIDIxLDE5VjEySDE5VjE5SDVWNUgxMlYzSDVNMTcuNzgsNEMxNy42MSw0IDE3LjQzLDQuMDcgMTcuMyw0LjJMMTYuMDgsNS40MUwxOC41OCw3LjkxTDE5LjgsNi43QzIwLjA2LDYuNDQgMjAuMDYsNiAxOS44LDUuNzVMMTguMjUsNC4yQzE4LjEyLDQuMDcgMTcuOTUsNCAxNy43OCw0TTE1LjM3LDYuMTJMOCwxMy41VjE2SDEwLjVMMTcuODcsOC42MkwxNS4zNyw2LjEyWlwiIC8+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8c3ZnIGRhdGEtYWN0aW9uLXR5cGU9XCJkZWxldGUtdGFza1wiIGNsYXNzPVwiYWN0aW9uc1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XHJcbiAgICAgICAgICAgICAgPHRpdGxlPkRlbGV0ZTwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNC4xMiwxMC40N0wxMiwxMi41OUw5Ljg3LDEwLjQ3TDguNDYsMTEuODhMMTAuNTksMTRMOC40NywxNi4xMkw5Ljg4LDE3LjUzTDEyLDE1LjQxTDE0LjEyLDE3LjUzTDE1LjUzLDE2LjEyTDEzLjQxLDE0TDE1LjUzLDExLjg4TDE0LjEyLDEwLjQ3TTE1LjUsNEwxNC41LDNIOS41TDguNSw0SDVWNkgxOVY0SDE1LjVNNiwxOUEyLDIgMCAwLDAgOCwyMUgxNkEyLDIgMCAwLDAgMTgsMTlWN0g2VjE5TTgsOUgxNlYxOUg4VjlaXCIgLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2xpPmA7XHJcbiAgICAgIHRhc2tOb2RlLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1uYW1lXCIpLnRleHRDb250ZW50ID0gdGFza3Nbal0udGl0bGU7XHJcbiAgICAgIHRhc2tOb2RlLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1sYmxcIikudGV4dENvbnRlbnQgPSB0YXNrc1tqXS5wcmlvcml0eTtcclxuICAgICAgcHJvamVjdE5vZGUucXVlcnlTZWxlY3RvcihcInVsXCIpLmFwcGVuZENoaWxkKHRhc2tOb2RlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0Tm9kZSk7XHJcbiAgfVxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbm90ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICAgIG5vZGUuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJub3RlLXRpdGxlLWNvbnRyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibm90ZS10aXRsZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJhY3Rucy1jb250clwiIGRhdGEtbm90ZT1cIiR7aX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgZGF0YS1hY3Rpb24tdHlwZT1cImVkaXQtbm90ZVwiIGNsYXNzPVwiYWN0aW9uc1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRpdGxlPkVkaXQ8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNSwzQzMuODksMyAzLDMuODkgMyw1VjE5QTIsMiAwIDAsMCA1LDIxSDE5QTIsMiAwIDAsMCAyMSwxOVYxMkgxOVYxOUg1VjVIMTJWM0g1TTE3Ljc4LDRDMTcuNjEsNCAxNy40Myw0LjA3IDE3LjMsNC4yTDE2LjA4LDUuNDFMMTguNTgsNy45MUwxOS44LDYuN0MyMC4wNiw2LjQ0IDIwLjA2LDYgMTkuOCw1Ljc1TDE4LjI1LDQuMkMxOC4xMiw0LjA3IDE3Ljk1LDQgMTcuNzgsNE0xNS4zNyw2LjEyTDgsMTMuNVYxNkgxMC41TDE3Ljg3LDguNjJMMTUuMzcsNi4xMlpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGRhdGEtYWN0aW9uLXR5cGU9XCJkZWxldGUtbm90ZVwiIGNsYXNzPVwiYWN0aW9uc1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRpdGxlPkRlbGV0ZTwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNC4xMiwxMC40N0wxMiwxMi41OUw5Ljg3LDEwLjQ3TDguNDYsMTEuODhMMTAuNTksMTRMOC40NywxNi4xMkw5Ljg4LDE3LjUzTDEyLDE1LjQxTDE0LjEyLDE3LjUzTDE1LjUzLDE2LjEyTDEzLjQxLDE0TDE1LjUzLDExLjg4TDE0LjEyLDEwLjQ3TTE1LjUsNEwxNC41LDNIOS41TDguNSw0SDVWNkgxOVY0SDE1LjVNNiwxOUEyLDIgMCAwLDAgOCwyMUgxNkEyLDIgMCAwLDAgMTgsMTlWN0g2VjE5TTgsOUgxNlYxOUg4VjlaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdGVjb250ZW50XCI+PC9kaXY+YDtcclxuICAgIG5vZGUucXVlcnlTZWxlY3RvcihcIi5ub3RlLXRpdGxlXCIpLnRleHRDb250ZW50ID0gbm90ZXNbaV0udGl0bGU7XHJcbiAgICBub2RlLnF1ZXJ5U2VsZWN0b3IoXCIubm90ZWNvbnRlbnRcIikudGV4dENvbnRlbnQgPSBub3Rlc1tpXS5ub3RlO1xyXG5cclxuICAgIG5vdGVzQ29udGFpbmVyLmFwcGVuZENoaWxkKG5vZGUpO1xyXG4gIH1cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNoZWNrTGlzdHMubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBub2RlLnNldEF0dHJpYnV0ZShcImRhdGEtaXRlbVwiLCBpLnRvU3RyaW5nKCkpO1xyXG5cclxuICAgIG5vZGUuaW5uZXJIVE1MID0gYDxzcGFuPlxyXG4gICAgICAgIDxpbnB1dCBkYXRhLWFjdGlvbi10eXBlPVwiY2hlY2staXRlbVwiIHR5cGU9XCJjaGVja2JveFwiIGlkPVwibGlzdCR7aX1cIiBjbGFzcz1cImFjdGlvbnNcIj5cclxuICAgICAgICA8bGFiZWwgZm9yPVwibGlzdCR7aX1cIj48L2xhYmVsPlxyXG4gICAgPC9zcGFuPlxyXG4gICAgPHN2ZyBkYXRhLWFjdGlvbi10eXBlPVwiZGVsZXRlLWl0ZW1cIiBjbGFzcz1cImFjdGlvbnNcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG4gICAgICAgIDx0aXRsZT5EZWxldGU8L3RpdGxlPlxyXG4gICAgICAgIDxwYXRoIGQ9XCJNMTQuMTIsMTAuNDdMMTIsMTIuNTlMOS44NywxMC40N0w4LjQ2LDExLjg4TDEwLjU5LDE0TDguNDcsMTYuMTJMOS44OCwxNy41M0wxMiwxNS40MUwxNC4xMiwxNy41M0wxNS41MywxNi4xMkwxMy40MSwxNEwxNS41MywxMS44OEwxNC4xMiwxMC40N00xNS41LDRMMTQuNSwzSDkuNUw4LjUsNEg1VjZIMTlWNEgxNS41TTYsMTlBMiwyIDAgMCwwIDgsMjFIMTZBMiwyIDAgMCwwIDE4LDE5VjdINlYxOU04LDlIMTZWMTlIOFY5WlwiIC8+XHJcbiAgICA8L3N2Zz5gO1xyXG4gICAgbm9kZS5xdWVyeVNlbGVjdG9yKGBsYWJlbFtmb3I9XCJsaXN0JHtpfVwiXWApLnRleHRDb250ZW50ID1cclxuICAgICAgY2hlY2tMaXN0c1tpXS5saXN0VHh0O1xyXG5cclxuICAgIGNoZWNrTGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChub2RlKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IHRhYnMsIGNyZWF0ZUJ0biwgbW9kYWwsIHBhZ2VzLCBzd2l0aFRhYiwgaW52b2tlQWN0aW9uLCByZW5kZXJEYXRhLCBvcGVuRGlhbG9ndWUsIGNsb3NlTW9kYWwgfTtcclxuIiwiaW1wb3J0IHtpc1RoaXNXZWVrLCBpc1RvZGF5fSBmcm9tIFwiZGF0ZS1mbnNcIjtcclxuXHJcbmNsYXNzIFByb2plY3Qge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCB0YXNrcykge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy50YXNrcyA9IHRhc2tzO1xyXG4gIH1cclxuICBzdGF0aWMgZ2V0IGRlZmF1bHQoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0aXRsZTogXCJUb2RvTGlzdCB0dXRvcmlhbFwiLFxyXG4gICAgICB0YXNrOiBbXHJcbiAgICAgICAgbmV3IFRhc2soXCJUcnkgb3V0IHRoaXMgYXBwbGljYXRpb25cIiwgXCJcIiwgbmV3IERhdGUoKSwgXCJtZWRpdW1cIiksXHJcbiAgICAgIF0sXHJcbiAgICB9O1xyXG4gIH1cclxuICBnZXQgc29ydGVkVGFza3MoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50YXNrcy5zb3J0KChhLCBiKSA9PiBhLmR1ZURhdGUgLSBiLmR1ZURhdGUpO1xyXG4gIH1cclxuICBhZGRUYXNrKHRhc2spIHtcclxuICAgIHRoaXMudGFza3MucHVzaCh0YXNrKTtcclxuICB9XHJcbiAgcmVtb3ZlVGFzayhpbmRleCkge1xyXG4gICAgdGhpcy50YXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gIH1cclxuICBnZXRUb2RheXNUYXNrcygpIHtcclxuICAgIGNvbnN0IHRvZGF5c1Rhc2sgPSBbXTtcclxuICAgIHRoaXMudGFza3MuZm9yRWFjaCh0YXNrID0+IHtcclxuICAgICAgaWYgKGlzVG9kYXkodGFzay5kdWVEYXRlKSkgdG9kYXlzVGFzay5wdXNoKHRhc2spO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdG9kYXlzVGFzaztcclxuICB9XHJcbiAgZ2V0VGhpc1dlZWtzVGFza3MoKSB7XHJcbiAgICBjb25zdCB0aGlzV2Vla3NUYXNrID0gW107XHJcbiAgICB0aGlzLnRhc2tzLmZvckVhY2godGFzayA9PiB7XHJcbiAgICAgIGlmIChpc1RoaXNXZWVrKHRhc2suZHVlRGF0ZSkpIHtcclxuICAgICAgICB0aGlzV2Vla3NUYXNrLnB1c2godGFzayk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRoaXNXZWVrc1Rhc2s7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBUYXNrIHtcclxuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwaW5kZXgpIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICB0aGlzLnBpbmRleCA9IChwaW5kZXggIT09IHVuZGVmaW5lZCk/IHBpbmRleCA6IDA7XHJcbiAgfVxyXG4gIGdldCBpbmZvKCkge1xyXG4gICAgcmV0dXJuIGAke3RoaXMudGl0bGV9OlxcbiR7dGhpcy5kZXNjcmlwdGlvbn1cXG4ke3RoaXMucHJpb3JpdHl9YDtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIE5vdGUge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBub3RlKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLm5vdGUgPSBub3RlO1xyXG4gIH1cclxuICAvLyBNYW51YWxcclxuICBzdGF0aWMgZ2V0IGRlZmF1bHQoKSB7XHJcbiAgICByZXR1cm4geyB0aXRsZTogXCJIb3cgdG8gdXNlIHRoaXMgVG9kb0xpc3RcIiwgbm90ZTogXCJDbGljayB0aGUgbmV3IHByb2plY3QgYnV0dG9uIGFuZCBhZGQgbmV3IHByb2plY3RcIiB9O1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgQ2hlY2tMaXN0IHtcclxuICBjb25zdHJ1Y3RvcihsaXN0VHh0KSB7XHJcbiAgICB0aGlzLmxpc3RUeHQgPSBsaXN0VHh0O1xyXG4gIH1cclxuICBzdGF0aWMgZ2V0IGRlZmF1bHQoKSB7XHJcbiAgICByZXR1cm4geyBsaXN0VHh0OiBcIlJlYWQgJ0hvdyB0byB1c2UgdGhpcyBUb2RvTGlzdCdcIiB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgUHJvamVjdCwgVGFzaywgTm90ZSwgQ2hlY2tMaXN0IH07IiwiY29uc3QgcHViU3ViID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBldmVudHMgPSB7fTtcclxuICBcclxuICAgIGZ1bmN0aW9uIHN1YnNjcmliZShldmVudCwgZm4pIHtcclxuICAgICAgZXZlbnRzW2V2ZW50XSA/IGV2ZW50c1tldmVudF0ucHVzaChmbikgOiAoZXZlbnRzW2V2ZW50XSA9IFtmbl0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdW5TdWJzY3JpYmUoZXZlbnQsIGZuKSB7XHJcbiAgICAgIGlmIChldmVudHNbZXZlbnRdKSB7XHJcbiAgICAgICAgZXZlbnRzW2V2ZW50XSA9IGV2ZW50c1tldmVudF0uZmlsdGVyKChmdW5jKSA9PiBmdW5jICE9PSBmbik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHB1Ymxpc2goZXZlbnQsIGRhdGEpIHtcclxuICAgICAgaWYgKGV2ZW50c1tldmVudF0pIGV2ZW50c1tldmVudF0uZm9yRWFjaCgoZm4pID0+IGZuKGRhdGEpKTtcclxuICAgIH1cclxuICBcclxuICAgIHJldHVybiB7IHN1YnNjcmliZSwgdW5TdWJzY3JpYmUsIHB1Ymxpc2ggfTtcclxuICB9KSgpO1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBwdWJTdWI7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gIH0sIF90eXBlb2Yob2JqKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBwdWJTdWIgZnJvbSBcIi4vcHViU3ViLmpzXCI7XHJcbmltcG9ydCB7IFByb2plY3QsIFRhc2ssIE5vdGUsIENoZWNrTGlzdCB9IGZyb20gXCIuL3Byb2plY3RzVGFza3MuanNcIjtcclxuaW1wb3J0IHsgdGFicywgY3JlYXRlQnRuLCBtb2RhbCwgcGFnZXMsIHN3aXRoVGFiLCBpbnZva2VBY3Rpb24sIHJlbmRlckRhdGEsIG9wZW5EaWFsb2d1ZSwgY2xvc2VNb2RhbCB9IGZyb20gXCIuL2Rpc3BsYXkuanNcIjtcclxuXHJcbmNvbnN0IGRpc3BsYXlDb250cm9sbGVyID0gKGZ1bmN0aW9uKCkge1xyXG4gIGluaXQoKTtcclxuICBcclxuICBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgYWRkRXZlbnRzVG9TdGF0aWNFbGVtZW50cygpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBhZGRFdmVudHNUb1N0YXRpY0VsZW1lbnRzKCkge1xyXG4gICAgdGFicy5mb3JFYWNoKChlbGVtKSA9PiBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzd2l0aFRhYikpO1xyXG4gICAgY3JlYXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaW52b2tlQWN0aW9ucyk7XHJcbiAgICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGludm9rZUFjdGlvbnMpO1xyXG4gICAgcGFnZXMuZm9yRWFjaChwYWdlID0+IHtcclxuICAgICAgcGFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGludm9rZUFjdGlvbnMpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGludm9rZUFjdGlvbnMoZSkge1xyXG4gICAgLy8gTW92ZSB1cCB0byA8c3ZnPiBpZiB0YXJnZXQgZWxlbWVudCBpcyA8cGF0aD5cclxuICAgIGNvbnN0IGVsZW0gPVxyXG4gICAgICBlLnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwicGF0aFwiXHJcbiAgICAgICAgPyBlLnRhcmdldC5wYXJlbnRFbGVtZW50XHJcbiAgICAgICAgOiBlLnRhcmdldDtcclxuICAgIGludm9rZUFjdGlvbihlLCBlbGVtKTtcclxuICAgIGludm9rZURhdGFBY3Rpb24oZSwgZWxlbSk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGludm9rZURhdGFBY3Rpb24oZSwgZWxlbSkge1xyXG4gICAgaWYgKGVsZW0uZ2V0QXR0cmlidXRlKCd0eXBlJykgPT09IFwic3VibWl0XCIpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgY29uc3QgZm9ybSA9IGVsZW0ucGFyZW50RWxlbWVudDtcclxuICAgICAgY29uc3QgZGF0YSA9IE9iamVjdC5mcm9tRW50cmllcyhuZXcgRm9ybURhdGEoZm9ybSkpO1xyXG4gICAgICBsZXQgaXNWYWxpZCA9IE9iamVjdC52YWx1ZXMoZGF0YSkuZXZlcnkoZW50cnkgPT4gZW50cnkpO1xyXG4gXHJcbiAgICAgIGlmIChpc1ZhbGlkKSB7XHJcbiAgICAgICAgY29uc3QgYWN0aW9uID0gZm9ybS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFjdGlvbi10eXBlXCIpO1xyXG4gICAgICAgIGxldCBlbnRyeTtcclxuICAgICAgICBpZiAoYWN0aW9uID09PSBcIm5ldy1wcm9qZWN0XCIpIHtcclxuICAgICAgICAgIGVudHJ5ID0gbmV3IFByb2plY3QoZGF0YS50aXRsZSwgW10pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYWN0aW9uID09PSBcIm5ldy1ub3RlXCIpIHtcclxuICAgICAgICAgIGVudHJ5ID0gbmV3IE5vdGUoZGF0YS50aXRsZSwgZGF0YS5ub3RlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGFjdGlvbiA9PT0gXCJuZXctdGFza1wiKSB7XHJcbiAgICAgICAgICBlbnRyeSA9IG5ldyBUYXNrKFxyXG4gICAgICAgICAgICBkYXRhLnRpdGxlLFxyXG4gICAgICAgICAgICBkYXRhLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICBuZXcgRGF0ZShkYXRhLmR1ZWRhdGUpLFxyXG4gICAgICAgICAgICBkYXRhLnByaW9yaXR5ID8gZGF0YS5wcmlvcml0eSA6IFwibWVkaXVtXCIsXHJcbiAgICAgICAgICAgIHBhcnNlSW50KGVsZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0XCIpKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNsb3NlTW9kYWwoKTtcclxuICAgICAgICBwdWJTdWIucHVibGlzaChcImZvcm1TdWJtaXR0ZWRcIiwgZW50cnkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJTdWIuc3Vic2NyaWJlKFwiZGF0YUNoYW5nZWRcIiwgcmVuZGVyRGF0YSk7XHJcbn0pKClcclxuXHJcbmNvbnN0IHByb2plY3RzSGFuZGxlciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgbGV0IHByb2plY3RzID0gW10sXHJcbiAgICBub3RlcyA9IFtdLFxyXG4gICAgY2hlY2tMaXN0cyA9IFtdO1xyXG5cclxuICBpbml0RGVmYXVsdHModHJ1ZSk7XHJcblxyXG4gIGZ1bmN0aW9uIGluaXREZWZhdWx0cyhyZXNldCkge1xyXG4gICAgaWYgKHJlc2V0KSB7XHJcbiAgICAgIHByb2plY3RzID0gW107XHJcbiAgICAgIG5vdGVzID0gW107XHJcbiAgICAgIGNoZWNrTGlzdHMgPSBbXTtcclxuICAgIH1cclxuICAgIGFkZFByb2plY3QoXHJcbiAgICAgIG5ldyBQcm9qZWN0KFByb2plY3QuZGVmYXVsdC50aXRsZSwgUHJvamVjdC5kZWZhdWx0LnRhc2spXHJcbiAgICApO1xyXG4gICAgYWRkTm90ZShuZXcgTm90ZShOb3RlLmRlZmF1bHQudGl0bGUsIE5vdGUuZGVmYXVsdC5ub3RlKSk7XHJcbiAgICBhZGRDaGVja0xpc3QoXHJcbiAgICAgIG5ldyBDaGVja0xpc3QoXHJcbiAgICAgICAgQ2hlY2tMaXN0LmRlZmF1bHQubGlzdFR4dFxyXG4gICAgICApXHJcbiAgICApO1xyXG4gICAgcHViU3ViLnB1Ymxpc2goJ2RhdGFDaGFuZ2VkJywgeyBwcm9qZWN0cywgbm90ZXMsIGNoZWNrTGlzdHMgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBhZGRQcm9qZWN0KHByb2plY3QpIHtcclxuICAgIHByb2plY3RzLnB1c2gocHJvamVjdCk7XHJcbiAgICBwdWJTdWIucHVibGlzaCgnZGF0YUNoYW5nZWQnLCB7IHByb2plY3RzLCBub3RlcywgY2hlY2tMaXN0cyB9KTtcclxuICB9XHJcbiAgZnVuY3Rpb24gYWRkVGFza1RvUHJvamVjdChpbmRleCwgdGFzaykge1xyXG4gICAgcHJvamVjdHNbaW5kZXhdLmFkZFRhc2sodGFzayk7XHJcbiAgICBwdWJTdWIucHVibGlzaCgnZGF0YUNoYW5nZWQnLCB7IHByb2plY3RzLCBub3RlcywgY2hlY2tMaXN0cyB9KTtcclxuICB9XHJcbiAgZnVuY3Rpb24gYWRkTm90ZShub3RlKSB7XHJcbiAgICBub3Rlcy5wdXNoKG5vdGUpO1xyXG4gICAgcHViU3ViLnB1Ymxpc2goJ2RhdGFDaGFuZ2VkJywgeyBwcm9qZWN0cywgbm90ZXMsIGNoZWNrTGlzdHMgfSk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGFkZENoZWNrTGlzdChjaGVja0xpc3QpIHtcclxuICAgIGNoZWNrTGlzdHMucHVzaChjaGVja0xpc3QpO1xyXG4gIH1cclxuICBmdW5jdGlvbiByZW1vdmVQcm9qZWN0KGluZGV4KSB7XHJcbiAgICBwcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gIH1cclxuICBmdW5jdGlvbiByZW1vdmVUYXNrRnJvbVByb2plY3QocGluZGV4LCB0aW5kZXgpIHtcclxuICAgIHByb2plY3RzW3BpbmRleF0ucmVtb3ZlVGFzayh0aW5kZXgpO1xyXG4gIH1cclxuICBmdW5jdGlvbiByZW1vdmVOb3RlKGluZGV4KSB7XHJcbiAgICBub3Rlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gIH1cclxuICBmdW5jdGlvbiByZW1vdmVDaGVja0xpc3QoaW5kZXgpIHtcclxuICAgIGNoZWNrTGlzdHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gYWRkRW50cnkoZW50cnkpIHtcclxuICAgIGlmIChlbnRyeSBpbnN0YW5jZW9mIFByb2plY3QpIHtcclxuICAgICAgYWRkUHJvamVjdChlbnRyeSk7XHJcbiAgICB9IGVsc2UgaWYgKGVudHJ5IGluc3RhbmNlb2YgVGFzaykge1xyXG4gICAgICBhZGRUYXNrVG9Qcm9qZWN0KGVudHJ5LnBpbmRleCwgZW50cnkpO1xyXG4gICAgfSBlbHNlIGlmIChlbnRyeSBpbnN0YW5jZW9mIE5vdGUpIHtcclxuICAgICAgYWRkTm90ZShlbnRyeSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJTdWIuc3Vic2NyaWJlKFwiZm9ybVN1Ym1pdHRlZFwiLCBhZGRFbnRyeSk7XHJcbn0pKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9