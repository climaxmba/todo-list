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
/* harmony export */   addEventsToStaticElements: () => (/* binding */ addEventsToStaticElements)
/* harmony export */ });
const homePage = document.getElementById("home-page"),
  tabs = document.querySelectorAll(".tabs"),
  createBtn = document.getElementById("newbtn"),
  projectsPage = document.getElementById("projects-page"),
  notesPage = document.getElementById("notes-page"),
  checkListPage = document.getElementById("checklist-page"),
  pages = [homePage, projectsPage, notesPage, checkListPage],
  modal = document.getElementById('modal'),
  modalTitle = document.getElementById("modal-title"),
  modalContent = document.getElementById('modal-content');

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

function addEventsToStaticElements() {
  tabs.forEach((elem) => elem.addEventListener("click", swithTab));
  createBtn.addEventListener('click', invokeAction);
  modal.addEventListener('click', invokeAction);
  pages.forEach(page => {
    page.addEventListener('click', invokeAction);
  });
}

function swithTab(e) {
  // Do nothing if user clicks an active tab
  if (e.target.classList.contains("active")) return;

  // Remove the class, 'active-page' and 'active'
  pages.forEach((page) => {
    if (page.classList.contains("active-page")) {
      page.classList.remove("active-page");
    }
  });
  tabs.forEach(tab => {
    if (tab.classList.contains('active')) {
      tab.classList.remove('active');
    }
  })

  // Add the class, 'active-page' & 'active'and change createBtn text
  e.target.classList.add('active');
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
  
  document.title = 'TodoList - ' + target[0].toUpperCase() + target.slice(1);
}

function invokeAction(e) {
  // Move up to <svg> if target element is <path>
  const elem =
    e.target.tagName.toLowerCase() === "path"
      ? e.target.parentElement
      : e.target;

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
      }
    }  else if (elem.id === "close-modal") {
      closeModal();
    } else if (elem.getAttribute("data-action-type") === "new-task") {
      const action = elem.getAttribute("data-action-type");
      const pindex = parseInt(elem.getAttribute("data-project"));
      openDialogue({ action, pindex });
    }
  } else if (elem === createBtn) {
    const action = `new-${createBtn.getAttribute('data-dialogue')}`;
    openDialogue({ action });
  } else if (elem === modal) {
    closeModal();
  }

  e.stopPropagation();
}

function openDialogue(dialogue) {
  if (dialogue.action) {
    modalContent.innerHTML = modalForms[dialogue.action] || '';
  }
  modalTitle.textContent = dialogue.action.split('-').join(' ');
  openModal();
}
function openModal() {
  modal.classList.add("active");
}
function closeModal() {
  modalContent.innerHTML = '';
  modal.classList.remove("active");
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
      title: "tutorial",
      task: [
        new Task("tutorial", "Try out this application", new Date(), "medium"),
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
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
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
    return { title: "How to use this TodoList", note: "" };
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
  }

  function addProject(project) {
    projects.push(project);
  }
  function addTaskToProject(index, task) {
    projects[index].addTask(task);
  }
  function addNote(note) {
    notes.push(note);
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
})();

const displayController = (function() {
  init();
  
  function init() {
    (0,_display_js__WEBPACK_IMPORTED_MODULE_2__.addEventsToStaticElements)();
  }
})()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFTO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNFQUF5QjtBQUM3QjtBQUNBLENBQUMsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUaGlzV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVG9kYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZldlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RzVGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3B1YlN1Yi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGVmYXVsdE9wdGlvbnMgPSB7fTtcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0T3B0aW9ucygpIHtcbiAgcmV0dXJuIGRlZmF1bHRPcHRpb25zO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG5ld09wdGlvbnMpIHtcbiAgZGVmYXVsdE9wdGlvbnMgPSBuZXdPcHRpb25zO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHN0YXJ0T2ZEYXkgZnJvbSBcIi4uL3N0YXJ0T2ZEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzU2FtZURheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciAwNjowMDowMCBhbmQgNCBTZXB0ZW1iZXIgMTg6MDA6MDAgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQsIDYsIDApLCBuZXcgRGF0ZSgyMDE0LCA4LCA0LCAxOCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIGFuZCA0IE9jdG9iZXIgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE0LCA5LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyLCAyMDE0IGFuZCA0IFNlcHRlbWJlciwgMjAxNSBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTUsIDgsIDQpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVEYXkoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlUmlnaHQpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mRGF5LmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZkRheS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHN0YXJ0T2ZXZWVrIGZyb20gXCIuLi9zdGFydE9mV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNTYW1lV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAzMSBBdWd1c3QgMjAxNCBhbmQgNCBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCA3LCAzMSksIG5ldyBEYXRlKDIwMTQsIDgsIDQpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHdlZWsgc3RhcnRzIHdpdGggTW9uZGF5LFxuICogLy8gYXJlIDMxIEF1Z3VzdCAyMDE0IGFuZCA0IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDcsIDMxKSwgbmV3IERhdGUoMjAxNCwgOCwgNCksIHtcbiAqICAgd2Vla1N0YXJ0c09uOiAxXG4gKiB9KVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMSBKYW51YXJ5IDIwMTQgYW5kIDEgSmFudWFyeSAyMDE1IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDAsIDEpLCBuZXcgRGF0ZSgyMDE1LCAwLCAxKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lV2VlayhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZldlZWsgPSBzdGFydE9mV2VlayhkaXJ0eURhdGVMZWZ0LCBvcHRpb25zKTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZXZWVrID0gc3RhcnRPZldlZWsoZGlydHlEYXRlUmlnaHQsIG9wdGlvbnMpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mV2Vlay5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZXZWVrLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgaXNTYW1lV2VlayBmcm9tIFwiLi4vaXNTYW1lV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNUaGlzV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgd2VlayBhcyB0aGUgY3VycmVudCBkYXRlP1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIHdlZWsgYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gdGhlIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyBpbiB0aGlzIHdlZWtcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAyNSBTZXB0ZW1iZXIgMjAxNCwgaXMgMjEgU2VwdGVtYmVyIDIwMTQgaW4gdGhpcyB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNUaGlzV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyMSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMjUgU2VwdGVtYmVyIDIwMTQgYW5kIHdlZWsgc3RhcnRzIHdpdGggTW9uZGF5XG4gKiAvLyBpcyAyMSBTZXB0ZW1iZXIgMjAxNCBpbiB0aGlzIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RoaXNXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIxKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RoaXNXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGlzU2FtZVdlZWsoZGlydHlEYXRlLCBEYXRlLm5vdygpLCBvcHRpb25zKTtcbn0iLCJpbXBvcnQgaXNTYW1lRGF5IGZyb20gXCIuLi9pc1NhbWVEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVG9kYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHRvZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDYgT2N0b2JlciAxNDowMDowMCB0b2RheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVG9kYXkobmV3IERhdGUoMjAxNCwgOSwgNiwgMTQsIDApKVxuICogLy89PiB0cnVlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVG9kYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lRGF5KGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIHdlZWtcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gU3VuIEF1ZyAzMSAyMDE0IDAwOjAwOjAwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRoZSB3ZWVrIHN0YXJ0cyBvbiBNb25kYXksIHRoZSBzdGFydCBvZiB0aGUgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IE1vbiBTZXAgMDEgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkd2Vla1N0YXJ0c09uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyR3ZWVrU3RhcnRzT24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gIT09IHZvaWQgMCA/IF9vcHRpb25zJHdlZWtTdGFydHNPbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8ud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAwKTtcblxuICAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0RGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTtcblxuICAvLyBDbG9uZSB0aGUgZGF0ZVxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YoYXJndW1lbnQpID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsImNvbnN0IGhvbWVQYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lLXBhZ2VcIiksXHJcbiAgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFic1wiKSxcclxuICBjcmVhdGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld2J0blwiKSxcclxuICBwcm9qZWN0c1BhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzLXBhZ2VcIiksXHJcbiAgbm90ZXNQYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJub3Rlcy1wYWdlXCIpLFxyXG4gIGNoZWNrTGlzdFBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoZWNrbGlzdC1wYWdlXCIpLFxyXG4gIHBhZ2VzID0gW2hvbWVQYWdlLCBwcm9qZWN0c1BhZ2UsIG5vdGVzUGFnZSwgY2hlY2tMaXN0UGFnZV0sXHJcbiAgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwnKSxcclxuICBtb2RhbFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbC10aXRsZVwiKSxcclxuICBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtY29udGVudCcpO1xyXG5cclxuY29uc3QgbW9kYWxGb3JtcyA9IHtcclxuICBcIm5ldy1wcm9qZWN0XCI6IGA8Zm9ybSBkYXRhLWFjdGlvbi10eXBlPVwibmV3LXByb2plY3RcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XHJcbiAgICAgICAgICA8bGFiZWwgZm9yPVwicHJvamVjdC10aXRsZVwiPlRpdGxlPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dCBpZD1cInByb2plY3QtdGl0bGVcIiBuYW1lPVwidGl0bGVcIiB0eXBlPVwidGV4dFwiIG1heGxlbmd0aD1cIjQwXCIgcmVxdWlyZWQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TYXZlPC9idXR0b24+XHJcbiAgICA8L2Zvcm0+YCxcclxuICBcIm5ldy1ub3RlXCI6IGA8Zm9ybSBkYXRhLWFjdGlvbi10eXBlPVwibmV3LW5vdGVcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJub3RlLXRpdGxlXCI+VGl0bGU8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCBpZD1cIm5vdGUtdGl0bGVcIiBuYW1lPVwidGl0bGVcIiB0eXBlPVwidGV4dFwiIG1heGxlbmd0aD1cIjQwXCIgcmVxdWlyZWQ+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJub3RlLWNvbnRlbnRcIj5Ob3RlPC9sYWJlbD5cclxuICAgICAgICA8dGV4dGFyZWEgbmFtZT1cImNvbnRlbnRcIiBpZD1cIm5vdGUtY29udGVudFwiPjwvdGV4dGFyZWE+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlNhdmU8L2J1dHRvbj5cclxuICAgIDwvZm9ybT5gLFxyXG4gIFwibmV3LXRhc2tcIjogYDxmb3JtIGRhdGEtYWN0aW9uLXR5cGU9XCJuZXctdGFza1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XHJcbiAgICAgICAgPGxhYmVsIGZvcj1cInRhc2stdGl0bGVcIj5UaXRsZTwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IGlkPVwidGFzay10aXRsZVwiIG5hbWU9XCJ0aXRsZVwiIHR5cGU9XCJ0ZXh0XCIgbWF4bGVuZ3RoPVwiMzVcIiByZXF1aXJlZD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XHJcbiAgICAgICAgPGxhYmVsIGZvcj1cInRhc2stZGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGlkPVwidGFzay1kZXNjcmlwdGlvblwiPjwvdGV4dGFyZWE+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJ0YXNrLWR1ZWRhdGVcIj5EdWUgZGF0ZTwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IGlkPVwidGFzay1kdWVkYXRlXCIgbmFtZT1cImR1ZWRhdGVcIiB0eXBlPVwiZGF0ZVwiIHJlcXVpcmVkPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cclxuICAgICAgICA8bGFiZWw+UHJpb3JpdHk8L2xhYmVsPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJyYWRpby1idG5zLWNudHJcIj5cclxuICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJ0YXNrLXByaW9yaXR5LWhcIiBuYW1lPVwicHJpb3JpdHlcIiB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cImhpZ2hcIiByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0YXNrLXByaW9yaXR5LWhcIj5IaWdoPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInRhc2stcHJpb3JpdHktbVwiIG5hbWU9XCJwcmlvcml0eVwiIHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwibWVkaXVtXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidGFzay1wcmlvcml0eS1tXCI+TWVkaXVtPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInRhc2stcHJpb3JpdHktbFwiIG5hbWU9XCJwcmlvcml0eVwiIHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwibG93XCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidGFzay1wcmlvcml0eS1sXCI+TG93PC9sYWJlbD5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TYXZlPC9idXR0b24+XHJcbjwvZm9ybT5gLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gYWRkRXZlbnRzVG9TdGF0aWNFbGVtZW50cygpIHtcclxuICB0YWJzLmZvckVhY2goKGVsZW0pID0+IGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN3aXRoVGFiKSk7XHJcbiAgY3JlYXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaW52b2tlQWN0aW9uKTtcclxuICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGludm9rZUFjdGlvbik7XHJcbiAgcGFnZXMuZm9yRWFjaChwYWdlID0+IHtcclxuICAgIHBhZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBpbnZva2VBY3Rpb24pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzd2l0aFRhYihlKSB7XHJcbiAgLy8gRG8gbm90aGluZyBpZiB1c2VyIGNsaWNrcyBhbiBhY3RpdmUgdGFiXHJcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkgcmV0dXJuO1xyXG5cclxuICAvLyBSZW1vdmUgdGhlIGNsYXNzLCAnYWN0aXZlLXBhZ2UnIGFuZCAnYWN0aXZlJ1xyXG4gIHBhZ2VzLmZvckVhY2goKHBhZ2UpID0+IHtcclxuICAgIGlmIChwYWdlLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZS1wYWdlXCIpKSB7XHJcbiAgICAgIHBhZ2UuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1wYWdlXCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHRhYnMuZm9yRWFjaCh0YWIgPT4ge1xyXG4gICAgaWYgKHRhYi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XHJcbiAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgIH1cclxuICB9KVxyXG5cclxuICAvLyBBZGQgdGhlIGNsYXNzLCAnYWN0aXZlLXBhZ2UnICYgJ2FjdGl2ZSdhbmQgY2hhbmdlIGNyZWF0ZUJ0biB0ZXh0XHJcbiAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS10YXJnZXQtdmFsdWVcIik7XHJcbiAgc3dpdGNoICh0YXJnZXQpIHtcclxuICAgIGNhc2UgXCJob21lXCI6XHJcbiAgICAgIGhvbWVQYWdlLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtcGFnZVwiKTtcclxuICAgICAgY3JlYXRlQnRuLnRleHRDb250ZW50ID0gXCJOZXcgUHJvamVjdFwiO1xyXG4gICAgICBjcmVhdGVCdG4uc2V0QXR0cmlidXRlKFwiZGF0YS1kaWFsb2d1ZVwiLCBcInByb2plY3RcIik7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcInByb2plY3RzXCI6XHJcbiAgICAgIHByb2plY3RzUGFnZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLXBhZ2VcIik7XHJcbiAgICAgIGNyZWF0ZUJ0bi50ZXh0Q29udGVudCA9IFwiTmV3IFByb2plY3RcIjtcclxuICAgICAgY3JlYXRlQnRuLnNldEF0dHJpYnV0ZShcImRhdGEtZGlhbG9ndWVcIiwgXCJwcm9qZWN0XCIpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCJub3Rlc1wiOlxyXG4gICAgICBub3Rlc1BhZ2UuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1wYWdlXCIpO1xyXG4gICAgICBjcmVhdGVCdG4udGV4dENvbnRlbnQgPSBcIk5ldyBOb3RlXCI7XHJcbiAgICAgIGNyZWF0ZUJ0bi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWRpYWxvZ3VlXCIsIFwibm90ZVwiKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwiY2hlY2tsaXN0c1wiOlxyXG4gICAgICBjaGVja0xpc3RQYWdlLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtcGFnZVwiKTtcclxuICAgICAgY3JlYXRlQnRuLnRleHRDb250ZW50ID0gXCJOZXcgSXRlbVwiO1xyXG4gICAgICBjcmVhdGVCdG4uc2V0QXR0cmlidXRlKFwiZGF0YS1kaWFsb2d1ZVwiLCBcIml0ZW1cIik7XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxuICBcclxuICBkb2N1bWVudC50aXRsZSA9ICdUb2RvTGlzdCAtICcgKyB0YXJnZXRbMF0udG9VcHBlckNhc2UoKSArIHRhcmdldC5zbGljZSgxKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW52b2tlQWN0aW9uKGUpIHtcclxuICAvLyBNb3ZlIHVwIHRvIDxzdmc+IGlmIHRhcmdldCBlbGVtZW50IGlzIDxwYXRoPlxyXG4gIGNvbnN0IGVsZW0gPVxyXG4gICAgZS50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcInBhdGhcIlxyXG4gICAgICA/IGUudGFyZ2V0LnBhcmVudEVsZW1lbnRcclxuICAgICAgOiBlLnRhcmdldDtcclxuXHJcbiAgaWYgKGUudGFyZ2V0ICE9PSBlLmN1cnJlbnRUYXJnZXQpIHtcclxuICAgIC8vIFVJIGljb25zXHJcbiAgICBpZiAoZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3Rpb25zXCIpKSB7XHJcbiAgICAgIC8vIDxzdmcuYWN0aW9ucz5cclxuICAgICAgY29uc3QgYWN0aW9uID0gZWxlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFjdGlvbi10eXBlXCIpO1xyXG4gICAgICBpZiAoYWN0aW9uID09PSBcInZpZXctdGFza1wiIHx8IGFjdGlvbiA9PT0gXCJlZGl0LXRhc2tcIikge1xyXG4gICAgICAgIGNvbnN0IHBpbmRleCA9IHBhcnNlSW50KFxyXG4gICAgICAgICAgZWxlbS5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdFwiKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgdGluZGV4ID0gcGFyc2VJbnQoZWxlbS5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtdGFza1wiKSk7XHJcbiAgICAgICAgb3BlbkRpYWxvZ3VlKHsgYWN0aW9uLCBwaW5kZXgsIHRpbmRleCB9KTtcclxuICAgICAgfSBlbHNlIGlmIChhY3Rpb24gPT09IFwidmlldy1wcm9qZWN0XCIgfHwgYWN0aW9uID09PSBcImVkaXQtcHJvamVjdFwiKSB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBwYXJzZUludChlbGVtLnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0XCIpKTtcclxuICAgICAgICBvcGVuRGlhbG9ndWUoeyBhY3Rpb24sIGluZGV4IH0pO1xyXG4gICAgICB9IGVsc2UgaWYgKGFjdGlvbiA9PT0gXCJ2aWV3LW5vdGVcIiB8fCBhY3Rpb24gPT09IFwiZWRpdC1ub3RlXCIpIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHBhcnNlSW50KGVsZW0ucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLW5vdGVcIikpO1xyXG4gICAgICAgIG9wZW5EaWFsb2d1ZSh7IGFjdGlvbiwgaW5kZXggfSk7XHJcbiAgICAgIH1cclxuICAgIH0gIGVsc2UgaWYgKGVsZW0uaWQgPT09IFwiY2xvc2UtbW9kYWxcIikge1xyXG4gICAgICBjbG9zZU1vZGFsKCk7XHJcbiAgICB9IGVsc2UgaWYgKGVsZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS1hY3Rpb24tdHlwZVwiKSA9PT0gXCJuZXctdGFza1wiKSB7XHJcbiAgICAgIGNvbnN0IGFjdGlvbiA9IGVsZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS1hY3Rpb24tdHlwZVwiKTtcclxuICAgICAgY29uc3QgcGluZGV4ID0gcGFyc2VJbnQoZWxlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3RcIikpO1xyXG4gICAgICBvcGVuRGlhbG9ndWUoeyBhY3Rpb24sIHBpbmRleCB9KTtcclxuICAgIH1cclxuICB9IGVsc2UgaWYgKGVsZW0gPT09IGNyZWF0ZUJ0bikge1xyXG4gICAgY29uc3QgYWN0aW9uID0gYG5ldy0ke2NyZWF0ZUJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtZGlhbG9ndWUnKX1gO1xyXG4gICAgb3BlbkRpYWxvZ3VlKHsgYWN0aW9uIH0pO1xyXG4gIH0gZWxzZSBpZiAoZWxlbSA9PT0gbW9kYWwpIHtcclxuICAgIGNsb3NlTW9kYWwoKTtcclxuICB9XHJcblxyXG4gIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9wZW5EaWFsb2d1ZShkaWFsb2d1ZSkge1xyXG4gIGlmIChkaWFsb2d1ZS5hY3Rpb24pIHtcclxuICAgIG1vZGFsQ29udGVudC5pbm5lckhUTUwgPSBtb2RhbEZvcm1zW2RpYWxvZ3VlLmFjdGlvbl0gfHwgJyc7XHJcbiAgfVxyXG4gIG1vZGFsVGl0bGUudGV4dENvbnRlbnQgPSBkaWFsb2d1ZS5hY3Rpb24uc3BsaXQoJy0nKS5qb2luKCcgJyk7XHJcbiAgb3Blbk1vZGFsKCk7XHJcbn1cclxuZnVuY3Rpb24gb3Blbk1vZGFsKCkge1xyXG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbn1cclxuZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcclxuICBtb2RhbENvbnRlbnQuaW5uZXJIVE1MID0gJyc7XHJcbiAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxufVxyXG5cclxuZXhwb3J0IHsgYWRkRXZlbnRzVG9TdGF0aWNFbGVtZW50cyB9O1xyXG4iLCJpbXBvcnQge2lzVGhpc1dlZWssIGlzVG9kYXl9IGZyb20gXCJkYXRlLWZuc1wiO1xyXG5cclxuY2xhc3MgUHJvamVjdCB7XHJcbiAgY29uc3RydWN0b3IodGl0bGUsIHRhc2tzKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLnRhc2tzID0gdGFza3M7XHJcbiAgfVxyXG4gIHN0YXRpYyBnZXQgZGVmYXVsdCgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRpdGxlOiBcInR1dG9yaWFsXCIsXHJcbiAgICAgIHRhc2s6IFtcclxuICAgICAgICBuZXcgVGFzayhcInR1dG9yaWFsXCIsIFwiVHJ5IG91dCB0aGlzIGFwcGxpY2F0aW9uXCIsIG5ldyBEYXRlKCksIFwibWVkaXVtXCIpLFxyXG4gICAgICBdLFxyXG4gICAgfTtcclxuICB9XHJcbiAgZ2V0IHNvcnRlZFRhc2tzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudGFza3Muc29ydCgoYSwgYikgPT4gYS5kdWVEYXRlIC0gYi5kdWVEYXRlKTtcclxuICB9XHJcbiAgYWRkVGFzayh0YXNrKSB7XHJcbiAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XHJcbiAgfVxyXG4gIHJlbW92ZVRhc2soaW5kZXgpIHtcclxuICAgIHRoaXMudGFza3Muc3BsaWNlKGluZGV4LCAxKTtcclxuICB9XHJcbiAgZ2V0VG9kYXlzVGFza3MoKSB7XHJcbiAgICBjb25zdCB0b2RheXNUYXNrID0gW107XHJcbiAgICB0aGlzLnRhc2tzLmZvckVhY2godGFzayA9PiB7XHJcbiAgICAgIGlmIChpc1RvZGF5KHRhc2suZHVlRGF0ZSkpIHRvZGF5c1Rhc2sucHVzaCh0YXNrKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRvZGF5c1Rhc2s7XHJcbiAgfVxyXG4gIGdldFRoaXNXZWVrc1Rhc2tzKCkge1xyXG4gICAgY29uc3QgdGhpc1dlZWtzVGFzayA9IFtdO1xyXG4gICAgdGhpcy50YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xyXG4gICAgICBpZiAoaXNUaGlzV2Vlayh0YXNrLmR1ZURhdGUpKSB7XHJcbiAgICAgICAgdGhpc1dlZWtzVGFzay5wdXNoKHRhc2spO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB0aGlzV2Vla3NUYXNrO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgVGFzayB7XHJcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICB9XHJcbiAgZ2V0IGluZm8oKSB7XHJcbiAgICByZXR1cm4gYCR7dGhpcy50aXRsZX06XFxuJHt0aGlzLmRlc2NyaXB0aW9ufVxcbiR7dGhpcy5wcmlvcml0eX1gO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgTm90ZSB7XHJcbiAgY29uc3RydWN0b3IodGl0bGUsIG5vdGUpIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMubm90ZSA9IG5vdGU7XHJcbiAgfVxyXG4gIC8vIE1hbnVhbFxyXG4gIHN0YXRpYyBnZXQgZGVmYXVsdCgpIHtcclxuICAgIHJldHVybiB7IHRpdGxlOiBcIkhvdyB0byB1c2UgdGhpcyBUb2RvTGlzdFwiLCBub3RlOiBcIlwiIH07XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBDaGVja0xpc3Qge1xyXG4gIGNvbnN0cnVjdG9yKGxpc3RUeHQpIHtcclxuICAgIHRoaXMubGlzdFR4dCA9IGxpc3RUeHQ7XHJcbiAgfVxyXG4gIHN0YXRpYyBnZXQgZGVmYXVsdCgpIHtcclxuICAgIHJldHVybiB7IGxpc3RUeHQ6IFwiUmVhZCAnSG93IHRvIHVzZSB0aGlzIFRvZG9MaXN0J1wiIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBQcm9qZWN0LCBUYXNrLCBOb3RlLCBDaGVja0xpc3QgfTsiLCJjb25zdCBwdWJTdWIgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IGV2ZW50cyA9IHt9O1xyXG4gIFxyXG4gICAgZnVuY3Rpb24gc3Vic2NyaWJlKGV2ZW50LCBmbikge1xyXG4gICAgICBldmVudHNbZXZlbnRdID8gZXZlbnRzW2V2ZW50XS5wdXNoKGZuKSA6IChldmVudHNbZXZlbnRdID0gW2ZuXSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB1blN1YnNjcmliZShldmVudCwgZm4pIHtcclxuICAgICAgaWYgKGV2ZW50c1tldmVudF0pIHtcclxuICAgICAgICBldmVudHNbZXZlbnRdID0gZXZlbnRzW2V2ZW50XS5maWx0ZXIoKGZ1bmMpID0+IGZ1bmMgIT09IGZuKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcHVibGlzaChldmVudCwgZGF0YSkge1xyXG4gICAgICBpZiAoZXZlbnRzW2V2ZW50XSkgZXZlbnRzW2V2ZW50XS5mb3JFYWNoKChmbikgPT4gZm4oZGF0YSkpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgcmV0dXJuIHsgc3Vic2NyaWJlLCB1blN1YnNjcmliZSwgcHVibGlzaCB9O1xyXG4gIH0pKCk7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHB1YlN1YjsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gIH0gOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgfSwgX3R5cGVvZihvYmopO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHB1YlN1YiBmcm9tIFwiLi9wdWJTdWIuanNcIjtcclxuaW1wb3J0IHsgUHJvamVjdCwgVGFzaywgTm90ZSwgQ2hlY2tMaXN0IH0gZnJvbSBcIi4vcHJvamVjdHNUYXNrcy5qc1wiO1xyXG5pbXBvcnQgeyBhZGRFdmVudHNUb1N0YXRpY0VsZW1lbnRzIH0gZnJvbSBcIi4vZGlzcGxheS5qc1wiO1xyXG5cclxuY29uc3QgcHJvamVjdHNIYW5kbGVyID0gKGZ1bmN0aW9uICgpIHtcclxuICBsZXQgcHJvamVjdHMgPSBbXSxcclxuICAgIG5vdGVzID0gW10sXHJcbiAgICBjaGVja0xpc3RzID0gW107XHJcblxyXG4gIGluaXREZWZhdWx0cyh0cnVlKTtcclxuXHJcbiAgZnVuY3Rpb24gaW5pdERlZmF1bHRzKHJlc2V0KSB7XHJcbiAgICBpZiAocmVzZXQpIHtcclxuICAgICAgcHJvamVjdHMgPSBbXTtcclxuICAgICAgbm90ZXMgPSBbXTtcclxuICAgICAgY2hlY2tMaXN0cyA9IFtdO1xyXG4gICAgfVxyXG4gICAgYWRkUHJvamVjdChcclxuICAgICAgbmV3IFByb2plY3QoUHJvamVjdC5kZWZhdWx0LnRpdGxlLCBQcm9qZWN0LmRlZmF1bHQudGFzaylcclxuICAgICk7XHJcbiAgICBhZGROb3RlKG5ldyBOb3RlKE5vdGUuZGVmYXVsdC50aXRsZSwgTm90ZS5kZWZhdWx0Lm5vdGUpKTtcclxuICAgIGFkZENoZWNrTGlzdChcclxuICAgICAgbmV3IENoZWNrTGlzdChcclxuICAgICAgICBDaGVja0xpc3QuZGVmYXVsdC5saXN0VHh0XHJcbiAgICAgIClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBhZGRQcm9qZWN0KHByb2plY3QpIHtcclxuICAgIHByb2plY3RzLnB1c2gocHJvamVjdCk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGFkZFRhc2tUb1Byb2plY3QoaW5kZXgsIHRhc2spIHtcclxuICAgIHByb2plY3RzW2luZGV4XS5hZGRUYXNrKHRhc2spO1xyXG4gIH1cclxuICBmdW5jdGlvbiBhZGROb3RlKG5vdGUpIHtcclxuICAgIG5vdGVzLnB1c2gobm90ZSk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGFkZENoZWNrTGlzdChjaGVja0xpc3QpIHtcclxuICAgIGNoZWNrTGlzdHMucHVzaChjaGVja0xpc3QpO1xyXG4gIH1cclxuICBmdW5jdGlvbiByZW1vdmVQcm9qZWN0KGluZGV4KSB7XHJcbiAgICBwcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gIH1cclxuICBmdW5jdGlvbiByZW1vdmVUYXNrRnJvbVByb2plY3QocGluZGV4LCB0aW5kZXgpIHtcclxuICAgIHByb2plY3RzW3BpbmRleF0ucmVtb3ZlVGFzayh0aW5kZXgpO1xyXG4gIH1cclxuICBmdW5jdGlvbiByZW1vdmVOb3RlKGluZGV4KSB7XHJcbiAgICBub3Rlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gIH1cclxuICBmdW5jdGlvbiByZW1vdmVDaGVja0xpc3QoaW5kZXgpIHtcclxuICAgIGNoZWNrTGlzdHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICB9XHJcbn0pKCk7XHJcblxyXG5jb25zdCBkaXNwbGF5Q29udHJvbGxlciA9IChmdW5jdGlvbigpIHtcclxuICBpbml0KCk7XHJcbiAgXHJcbiAgZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgIGFkZEV2ZW50c1RvU3RhdGljRWxlbWVudHMoKTtcclxuICB9XHJcbn0pKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=