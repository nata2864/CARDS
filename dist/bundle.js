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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cardsApp: () => (/* binding */ cardsApp)\n/* harmony export */ });\n/* harmony import */ var _src_modules_gamemenu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/modules/gamemenu.js */ \"./src/modules/gamemenu.js\");\n\n\nconst cardsApp = () => {\n  (0,_src_modules_gamemenu_js__WEBPACK_IMPORTED_MODULE_0__.createGameMenu)();\n};\n\ncardsApp();\n\n\n//# sourceURL=webpack://cards/./index.js?");

/***/ }),

/***/ "./src/modules/cardmix.js":
/*!********************************!*\
  !*** ./src/modules/cardmix.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createcardsArray: () => (/* binding */ createcardsArray),\n/* harmony export */   duplicateArrayAndMix: () => (/* binding */ duplicateArrayAndMix)\n/* harmony export */ });\n/* harmony import */ var _gamedesk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gamedesk.js */ \"./src/modules/gamedesk.js\");\n\r\n\r\nconst duplicateArrayAndMix = (array) => {\r\n    const duplicateCards = array.flatMap((i) => [i, i]);\r\n    for (let i = 0; i < duplicateCards.length - 1; i++) {\r\n        let j = i + Math.floor(Math.random() * (duplicateCards.length - i));\r\n        let temp = duplicateCards[j];\r\n        duplicateCards[j] = duplicateCards[i];\r\n        duplicateCards[i] = temp;\r\n    }\r\n    return duplicateCards;\r\n};\r\n\r\nconst createcardsArray = (cardsCount) => {\r\n    let desk = new _gamedesk_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n    desk.shuffle();\r\n\r\n    switch (cardsCount) {\r\n        case \"1\":\r\n            return duplicateArrayAndMix(desk.cards.slice(0, 3));\r\n        case \"2\":\r\n            return duplicateArrayAndMix(desk.cards.slice(0, 6));\r\n        case \"3\":\r\n            return duplicateArrayAndMix(desk.cards.slice(0, 9));\r\n\r\n        default:\r\n            break;\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://cards/./src/modules/cardmix.js?");

/***/ }),

/***/ "./src/modules/gamedesk.js":
/*!*********************************!*\
  !*** ./src/modules/gamedesk.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ cardsDesk)\n/* harmony export */ });\nconst SUITS = ['♠', '♣', '♥', '♦']\r\nconst VALUES = ['A', '6', '7', '8', '9', '10', 'J', 'Q', 'K']\r\n\r\nclass cardsDesk {\r\n    constructor(cards = freshDesk()) {\r\n        this.cards = cards\r\n    }\r\n\r\n    get numberOfCards() {\r\n        return this.cards.length\r\n    }\r\n\r\n    shuffle() {\r\n        for (let i = this.numberOfCards - 1; i > 0; i--) {\r\n            const newIndex = Math.floor(Math.random() * (i + 1))\r\n            const oldValue = this.cards[newIndex]\r\n            this.cards[newIndex] = this.cards[i]\r\n            this.cards[i] = oldValue\r\n        }\r\n    }\r\n}\r\n\r\nclass Card {\r\n    constructor(suit, value) {\r\n        this.suit = suit\r\n        this.value = value\r\n    }\r\n}\r\n\r\nfunction freshDesk() {\r\n    return SUITS.flatMap((suit) => {\r\n        return VALUES.map((value) => {\r\n            return new Card(suit, value)\r\n        })\r\n    })\r\n}\r\n\n\n//# sourceURL=webpack://cards/./src/modules/gamedesk.js?");

/***/ }),

/***/ "./src/modules/gamemenu.js":
/*!*********************************!*\
  !*** ./src/modules/gamemenu.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createGameMenu: () => (/* binding */ createGameMenu)\n/* harmony export */ });\n/* harmony import */ var _startgame_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startgame.js */ \"./src/modules/startgame.js\");\n\r\n\r\nconst createGameMenu = () => {\r\n  \r\n  const gameSection = document.querySelector('.game-section-start__container')\r\n\r\n    gameSection.innerHTML = `<div class=\"game-section-start__container\">\r\n        <h2 class=\"game-menu__title\">Выбери <br>сложность</h2>\r\n        <button class=\"game-menu__difficult-btn\">1</button>\r\n        <button class=\"game-menu__difficult-btn\">2</button>\r\n        <button class=\"game-menu__difficult-btn\">3</button>\r\n        <button class=\"game-menu__start-btn\">Старт</button>\r\n    </div>`\r\n  \r\n  \r\n  const chooseDifficult = document.querySelectorAll(\r\n    \".game-menu__difficult-btn\"\r\n  );\r\n  \r\n  chooseDifficult.forEach((element) =>\r\n  element.addEventListener('click', () => {\r\n      chooseDifficult.forEach((el) =>\r\n          el.classList.remove('game-menu__difficult-btn_checked')\r\n      )\r\n      element.classList.add('game-menu__difficult-btn_checked')\r\n      const buttonStart = document.querySelector('.game-menu__start-btn')\r\n\r\n      buttonStart.addEventListener('click', () => {\r\n          ;(0,_startgame_js__WEBPACK_IMPORTED_MODULE_0__.startGame)(element.textContent)\r\n      })\r\n  })\r\n)\r\n};\r\n\n\n//# sourceURL=webpack://cards/./src/modules/gamemenu.js?");

/***/ }),

/***/ "./src/modules/startgame.js":
/*!**********************************!*\
  !*** ./src/modules/startgame.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   startGame: () => (/* binding */ startGame)\n/* harmony export */ });\n/* harmony import */ var _cardmix_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cardmix.js */ \"./src/modules/cardmix.js\");\n\r\n// import { cardsApp } from \"./index.js\"\r\n\r\nconst startGame = (difficult) => {\r\n    const suitsBackground = {\r\n        \"♠\": \"spades.svg\",\r\n        \"♣\": \"clubs.svg\",\r\n        \"♥\": \"hearts.svg\",\r\n        \"♦\": \"diamonds.svg\",\r\n    };\r\n\r\n    const gameSection = document.querySelector(\r\n        \".game-section-start__container\"\r\n    );\r\n    const gameTable = document.querySelector(\".game-section-cards__container\");\r\n    gameTable.style.opacity = \"1\";\r\n    gameSection.style.display = \"none\";\r\n    let cardsIcons = (0,_cardmix_js__WEBPACK_IMPORTED_MODULE_0__.createcardsArray)(difficult);\r\n\r\n    const cardsHtml = cardsIcons\r\n        .map((card) => {\r\n            return `\r\n      \r\n      <div data-value=${card.value} data-suit=${\r\n                card.suit\r\n            } class=\"game-table__card\" >\r\n     \r\n          <div class=\"card__face\" style=\"background: url(./asset/images/${\r\n              suitsBackground[card.suit]\r\n          }) center center no-repeat, rgb(255, 255, 255);\">\r\n         \r\n              <div class=\"card__top\">    \r\n                  <div class=\"card__value\">${card.value}\r\n                  </div>\r\n                  <img class=\"card__suit\" src=\"./asset/images/${\r\n                      suitsBackground[card.suit]\r\n                  }\" alt=\"suit\">\r\n              </div>\r\n              <div class=\"card__bottom\">    \r\n                  <div class=\"card__value\">${card.value}\r\n                  </div>\r\n                  <img class=\"card__suit\" src=\"./asset/images/${\r\n                      suitsBackground[card.suit]\r\n                  }\" alt=\"suit\">\r\n              </div>   \r\n          </div>\r\n          <div class=\"card__back\"></div>    \r\n    </div>     \r\n      `;\r\n        })\r\n        .join(\"\");\r\n\r\n    gameTable.innerHTML = `\r\n    <div class=\"main__game_content\">\r\n        <div id=\"timer\">\r\n            <div class=\"timer__text\">\r\n                <span class='timer__text_item'>min</span> <span class='timer__text_item'>sek</span>\r\n            </div>\r\n            <p class='timer'>00.00</p>\r\n        </div>\r\n        <button class=\"main__game_content_button\">Начать заново</button>\r\n    </div>\r\n        <div class=\"main__game_cardsBox\">\r\n        ${cardsHtml}\r\n        </div> `;\r\n\r\n    const restartBTn = document.querySelector(\".main__game_content_button\");\r\n    restartBTn.addEventListener(\"click\", () => {\r\n        startGame(difficult);\r\n    });\r\n\r\n    function closecards() {\r\n        const cards = document.querySelectorAll(\".card__back\");\r\n        for (const card of cards) {\r\n            card.style.display = \"flex\";\r\n        }\r\n    }\r\n\r\n    const coutDownEl = document.querySelector(\".timer\");\r\n    let timer = 5;\r\n    coutDownEl.textContent = \"00.05\";\r\n    let id = setInterval(function () {\r\n        timer--;\r\n        if (timer === 0) {\r\n            clearInterval(id);\r\n            closecards();\r\n            // game();\r\n        } else {\r\n            coutDownEl.innerHTML = `00.0${timer}`;\r\n        }\r\n    }, 1000);\r\n\r\n    // setTimeout(() => closecards(), 5000)\r\n\r\n    function opencards() {\r\n    const cardsO = document.querySelectorAll(\".card__back\");\r\n\r\n        for (const card of cardsO) {\r\n            card.addEventListener(\"click\", () => {\r\n                card.style.display = \"none\";\r\n            });\r\n        }\r\n    }\r\n    opencards();\r\n};\r\n\n\n//# sourceURL=webpack://cards/./src/modules/startgame.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;