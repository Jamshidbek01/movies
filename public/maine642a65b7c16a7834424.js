/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://movies/./src/css/main.css?");

/***/ }),

/***/ "./src/js/bookmark.js":
/*!****************************!*\
  !*** ./src/js/bookmark.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction bookmark() {\r\nconst card = document.querySelectorAll('.card')\r\nconst place = document.querySelector('.bookmark-place')\r\nlet cardItem = Array.from(card)\r\n    cardItem.forEach((e) => {\r\n        let btn = e.children[9]\r\n        btn.addEventListener('click', () => {\r\n            place.innerHTML += `\r\n            <a target=\"_blank\" class=\"bookmark-item\" href=\"${e.children[0].children[1].getAttribute(\"href\")}\">${e.children[1].textContent}</a>\r\n        `\r\n            document.querySelector('.bookmarks').classList.add('active')\r\n            console.log(e.children[1].textContent);\r\n            console.log(e.children[0].children[1].getAttribute(\"href\"));\r\n            btn.disabled = true\r\n        })\r\n    });\r\n    document.querySelector('.bookmark').addEventListener('click', () => {\r\n        document.querySelector('.bookmarks').classList.toggle('active')\r\n    })\r\n    let remove = document.querySelector('.remove')\r\n    remove.addEventListener('click', () => {\r\n        let btn = document.querySelectorAll('.bookmark-btn')\r\n        for (let i = 0; i < btn.length; i++) {\r\n            const element = btn[i];\r\n            element.disabled = false\r\n        }\r\n        document.querySelector('.bookmarks').classList.remove('active')\r\n        place.innerHTML = ''\r\n    })\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bookmark);\n\n//# sourceURL=webpack://movies/./src/js/bookmark.js?");

/***/ }),

/***/ "./src/js/filter.js":
/*!**************************!*\
  !*** ./src/js/filter.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uptadeUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uptadeUI */ \"./src/js/uptadeUI.js\");\n\r\nlet sorting = document.querySelector('.sorting')\r\nsorting.addEventListener('change', () => {\r\n    let val = Number(sorting.value)\r\n    ;(0,_uptadeUI__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(val)\r\n})\n\n//# sourceURL=webpack://movies/./src/js/filter.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/main.css */ \"./src/css/main.css\");\n/* harmony import */ var _bookmark__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bookmark */ \"./src/js/bookmark.js\");\n/* harmony import */ var _uptadeUI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uptadeUI */ \"./src/js/uptadeUI.js\");\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter */ \"./src/js/filter.js\");\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal */ \"./src/js/modal.js\");\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://movies/./src/js/main.js?");

/***/ }),

/***/ "./src/js/modal.js":
/*!*************************!*\
  !*** ./src/js/modal.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction modalfunc() {\r\nconst card = document.querySelectorAll('.card')\r\nconst modalInfo = document.querySelector('.modal-info')\r\nconst modal = document.querySelector('.modal')\r\nlet cardItem = Array.from(card)\r\n    cardItem.forEach((el) => {\r\n        let btn = el.children[8]\r\n        btn.addEventListener('click', () => {\r\n            modal.classList.toggle('active')\r\n            modalInfo.innerHTML = `\r\n            <a href=\"${el.children[0].children[1].getAttribute(\"href\")}\"><img src=\"${el.children[0].children[0].getAttribute(\"src\")}\" alt=\"image\"></a>\r\n            <div class=\"modal-name\">${el.children[1].textContent}</div>\r\n            <div class=\"modal-genre\"><span>Genre: </span><p>${el.children[5].textContent}</p></div>\r\n            <div class=\"modal-year\"><span>Year: </span><p>${el.children[6].textContent}</p></div>\r\n            <div class=\"modal-language\"><span>Language: </span><p>${el.children[3].textContent}</p></div>\r\n        <div class=\"modal-runtime\"><span>Runtime: </span><p>${el.children[4].textContent}</p></div>\r\n        <div class=\"modal-summary\"><span>Summary: </span>${el.children[2].textContent}</div>\r\n        `\r\n        })\r\n    });\r\n    let closeBtn = document.querySelector('.closeBtn')\r\n    closeBtn.addEventListener('click', () => {\r\n        modal.classList.remove('active')\r\n    })\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalfunc);\n\n//# sourceURL=webpack://movies/./src/js/modal.js?");

/***/ }),

/***/ "./src/js/movies.js":
/*!**************************!*\
  !*** ./src/js/movies.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


/***/ }),

/***/ "./src/js/uptadeUI.js":
/*!****************************!*\
  !*** ./src/js/uptadeUI.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _movies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movies */ \"./src/js/movies.js\");\n/* harmony import */ var _bookmark__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bookmark */ \"./src/js/bookmark.js\");\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal */ \"./src/js/modal.js\");\n\r\n\r\n\r\nconst cards = document.querySelector('.cards')\r\nconst movie = _movies__WEBPACK_IMPORTED_MODULE_0__[\"default\"].slice(0, 30)\r\nlet categories = new Set()\r\nlet array\r\nlet genre\r\nfunction uptadeUI(val = 1) {\r\n    if (val === 1) {\r\n        movie.sort((a, b) =>\r\n            a.title > b.title ? 1 : b.title > a.title ? -1 : 0\r\n        )\r\n    } else if (val === 2) {\r\n        movie.sort((a, b) =>\r\n            a.title < b.title ? 1 : b.title < a.title ? -1 : 0\r\n        )\r\n    } else if (val === 3) {\r\n        movie.sort((a, b) =>\r\n            a.year < b.year ? 1 : b.year < a.year ? -1 : 0\r\n        )\r\n    } else if (val === 4) {\r\n        movie.sort((a, b) =>\r\n            a.imdbRating < b.imdbRating ? 1 : b.imdbRating < a.imdbRating ? -1 : 0\r\n        )\r\n    }\r\n    cards.innerHTML = ''\r\n    movie.forEach((item) => {\r\n        cards.innerHTML += ` \r\n        <div class=\"card\">\r\n        <div class=\"pooster\">\r\n        <img src=\"${item.smallPoster}\">\r\n        <a target=\"_blank\" href=\"${item.trailer}\">${item.title}</a>\r\n        </div>\r\n        <div class=\"min-title\">${item.title}</div>\r\n        <div class=\"summary\">${item.summary}</div>\r\n        <div class=\"language\">${item.language}</div>\r\n        <div class=\"runtime\">${item.runtime}</div>\r\n        <div class=\"genre\">${item.categories}</div>\r\n        <div class=\"year\">${item.year}</div>\r\n        <div class=\"rating\"><ion-icon name=\"star\"></ion-icon><span>${item.imdbRating}</span></div>\r\n        <button class=\"see-btn\">See More</button>\r\n        <button class=\"bookmark-btn\">Bookmark</button>\r\n        </div>\r\n        `\r\n        genre = document.querySelector('.filter .genre')\r\n        let janr\r\n        item.categories.forEach((e) => {\r\n            janr = e\r\n        });\r\n        categories.add(janr)\r\n        array = Array.from(categories);\r\n\r\n        const input = document.querySelector('.search')\r\n        input.addEventListener('input', () => {\r\n            const inputValue = input.value\r\n            const name = document.querySelectorAll('.min-title')\r\n            name.forEach((item) => {\r\n                if (item.textContent.toLowerCase().includes(inputValue)) {\r\n                    item.parentElement.classList.remove('hidden')\r\n                } else {\r\n                    item.parentElement.classList.add('hidden')\r\n                }\r\n            });\r\n        })\r\n    });\r\n    array.forEach((b) => {\r\n        genre.innerHTML += `\r\n        <option value=\"${b}\">${b}</option>\r\n        `\r\n    });\r\n    let select = document.querySelector('.genre')\r\n    let j = document.querySelectorAll('.card .genre')\r\n    select.addEventListener('change', () => {\r\n        j.forEach((e) => {\r\n            if (e.textContent.includes(select.value)) {\r\n                e.parentElement.classList.remove('hidden')\r\n            } else if (select.value == 'All') {\r\n                e.parentElement.classList.remove('hidden')\r\n            } else {\r\n                e.parentElement.classList.add('hidden')\r\n            }\r\n        });\r\n    })\r\n    ;(0,_bookmark__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n    ;(0,_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n}\r\nuptadeUI(1)\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (uptadeUI);\n\n//# sourceURL=webpack://movies/./src/js/uptadeUI.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;