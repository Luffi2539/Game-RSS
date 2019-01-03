/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/add-score.js":
/*!**************************!*\
  !*** ./src/add-score.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function addScore(playerName, playerScore) {
  const resultScore = {};
  const totalScore = JSON.parse(localStorage.getItem('gameStorage'));
  totalScore[playerScore] = playerName;
  const scores = Object.keys(totalScore);
  scores.reverse();
  if (scores.length > 10) {
    scores.length = 10;
  }
  scores.forEach((elem) => {
    resultScore[elem] = totalScore[elem];
  });
  localStorage.setItem('gameStorage', JSON.stringify(resultScore));
}

/* harmony default export */ __webpack_exports__["default"] = (addScore);


/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init */ "./src/init.js");
/* harmony import */ var _start_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./start-game */ "./src/start-game.js");
/* harmony import */ var _choose_spell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./choose-spell */ "./src/choose-spell.js");




const battleButton = document.querySelector('.to-battle');
const attack = document.querySelector('.attack-button');
attack.addEventListener('click', _choose_spell__WEBPACK_IMPORTED_MODULE_2__["default"]);
battleButton.addEventListener('click', _start_game__WEBPACK_IMPORTED_MODULE_1__["default"]);
Object(_init__WEBPACK_IMPORTED_MODULE_0__["default"])();


/***/ }),

/***/ "./src/calculate.js":
/*!**************************!*\
  !*** ./src/calculate.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function calculate(num1, sign, num2) {
  let result = 0;
  switch (sign) {
    case ' + ':
      result = num1 + num2;
      break;
    case ' - ':
      result = num1 - num2;
      break;
    case ' * ':
      result = num1 * num2;
      break;
    default:
      break;
  }
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (calculate);


/***/ }),

/***/ "./src/choose-spell.js":
/*!*****************************!*\
  !*** ./src/choose-spell.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _spellcast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spellcast */ "./src/spellcast.js");


function chooseSpell() {
  const spells = document.querySelector('.spells');
  spells.style.visibility = 'visible';
  spells.addEventListener('click', _spellcast__WEBPACK_IMPORTED_MODULE_0__["default"]);
}

/* harmony default export */ __webpack_exports__["default"] = (chooseSpell);


/***/ }),

/***/ "./src/failed-cast.js":
/*!****************************!*\
  !*** ./src/failed-cast.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gameover__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameover */ "./src/gameover.js");


function failedCast(damage) {
  const spells = document.querySelector('.spells');
  const questScreen = document.querySelector('.quest-screen');
  const ph = document.querySelector('.player-health');
  const plHealthbar = document.getElementById('p-healthbar');
  let playerHealth = ph.innerHTML.split(' ')[0];
  spells.style.visibility = 'hidden';
  questScreen.style.visibility = 'hidden';
  playerHealth -= damage;
  if (playerHealth <= 0) {
    Object(_gameover__WEBPACK_IMPORTED_MODULE_0__["default"])('lose');
  }
  ph.innerHTML = `${playerHealth} HP`;
  plHealthbar.style.background = `linear-gradient(to right, red ${100 - playerHealth}%, lightgreen ${100 - playerHealth + 5}%)`;
}

/* harmony default export */ __webpack_exports__["default"] = (failedCast);


/***/ }),

/***/ "./src/gameover.js":
/*!*************************!*\
  !*** ./src/gameover.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_score__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-score */ "./src/add-score.js");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init */ "./src/init.js");
/* harmony import */ var _showScore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./showScore */ "./src/showScore.js");
/* eslint-disable no-restricted-globals */




let finalScore = 0;

function gameover(result) {
  const winLoseScreen = document.querySelector('.win-lose-screen');
  const winLoseMessage = document.querySelector('.win-lose-message');
  const newGame = document.querySelector('.new-game');
  const endgame = document.querySelector('.end-game');
  const plName = document.querySelector('.player-name').innerHTML;
  const mHealth = document.querySelector('.monster-health').innerHTML.split(' ')[0];
  finalScore += 100 - mHealth;

  function goToScoreboard() {
    Object(_add_score__WEBPACK_IMPORTED_MODULE_0__["default"])(plName, finalScore);
    Object(_showScore__WEBPACK_IMPORTED_MODULE_2__["default"])();
  }
  function continueGame() {
    Object(_init__WEBPACK_IMPORTED_MODULE_1__["default"])();
    newGame.removeEventListener('click', continueGame);
    endgame.removeEventListener('click', goToScoreboard);
  }

  if (result === 'lose') {
    winLoseMessage.innerHTML = 'You lost, Do you want to start new Game?';
    newGame.innerHTML = 'New Game';
    endgame.innerHTML = 'Game Over';
    newGame.addEventListener('click', goToScoreboard);
    endgame.addEventListener('click', goToScoreboard);
  } else {
    winLoseMessage.innerHTML = 'You Won! Do you want to fight another monster?';
    newGame.innerHTML = 'Let\'s fight';
    endgame.innerHTML = 'Game Over';
    newGame.addEventListener('click', continueGame);
    endgame.addEventListener('click', goToScoreboard);
  }
  winLoseScreen.style.visibility = 'visible';
}

/* harmony default export */ __webpack_exports__["default"] = (gameover);


/***/ }),

/***/ "./src/init.js":
/*!*********************!*\
  !*** ./src/init.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _monster_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./monster-constructor */ "./src/monster-constructor.js");
/* harmony import */ var _monster_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./monster-name */ "./src/monster-name.js");



function init() {
  const playerStatus = 100;
  const monsterStatus = 100;
  const winLoseScreen = document.querySelector('.win-lose-screen');
  winLoseScreen.style.visibility = 'hidden';
  if (!(localStorage.getItem('gameStorage'))) {
    const scoreboard = {};
    localStorage.setItem('gameStorage', JSON.stringify(scoreboard));
  }
  const monsterparts = Object(_monster_constructor__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const monster = document.querySelectorAll('.monster-part');
  monster.forEach((elem, index) => {
    const el = elem;
    el.src = monsterparts[index];
  });
  const monName = document.querySelector('.monster-name');
  monName.innerHTML = Object(_monster_name__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const monHp = document.querySelector('.monster-health');
  monHp.innerHTML = `${monsterStatus} HP`;
  const plHp = document.querySelector('.player-health');
  plHp.innerHTML = `${playerStatus} HP`;

  const plHealthbar = document.getElementById('p-healthbar');
  const monHealthbar = document.getElementById('m-healthbar');
  plHealthbar.style.background = `linear-gradient(to right, red ${100 - playerStatus}%, lightgreen ${100 - playerStatus}%)`;
  monHealthbar.style.background = `linear-gradient(to left, red ${100 - monsterStatus}%, lightgreen ${100 - monsterStatus}%)`;
}

/* harmony default export */ __webpack_exports__["default"] = (init);


/***/ }),

/***/ "./src/monster-constructor.js":
/*!************************************!*\
  !*** ./src/monster-constructor.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _randomizer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./randomizer */ "./src/randomizer.js");


function monsterConstruct() {
  const heads = ['img/head-1.png', 'img/head-2.png', 'img/head-3.png'];
  const bodies = ['img/body-1.png', 'img/body-2.png', 'img/body-3.png'];
  const legs = ['img/legs-1.png', 'img/legs-2.png', 'img/legs-3.png'];
  const result = [];
  const max = heads.length - 1;
  result.push(heads[Object(_randomizer__WEBPACK_IMPORTED_MODULE_0__["default"])(0, max)]);
  result.push(bodies[Object(_randomizer__WEBPACK_IMPORTED_MODULE_0__["default"])(0, max)]);
  result.push(legs[Object(_randomizer__WEBPACK_IMPORTED_MODULE_0__["default"])(0, max)]);
  return result;
}
/* harmony default export */ __webpack_exports__["default"] = (monsterConstruct);


/***/ }),

/***/ "./src/monster-name.js":
/*!*****************************!*\
  !*** ./src/monster-name.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _randomizer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./randomizer */ "./src/randomizer.js");


function mNameConstruct() {
  const firstPart = ['Жуткий', 'Страшный', 'Злой', 'Ужасный', 'Вонючий', 'Голодный', 'Зверский'];
  const secondPart = ['пожиратель', 'людоед', 'зомби', 'зверь', 'гуль', 'поедатель', 'призрак'];
  const thirdPart = ['Майкл', 'Фредди', 'Джонни', 'Бубба', 'Джейсон', 'Штип', 'Абатур'];
  const max = firstPart.length - 1;
  const result = `${firstPart[Object(_randomizer__WEBPACK_IMPORTED_MODULE_0__["default"])(0, max)]} ${secondPart[Object(_randomizer__WEBPACK_IMPORTED_MODULE_0__["default"])(0, max)]} ${thirdPart[Object(_randomizer__WEBPACK_IMPORTED_MODULE_0__["default"])(0, max)]}`;
  return result;
}
/* harmony default export */ __webpack_exports__["default"] = (mNameConstruct);


/***/ }),

/***/ "./src/questmaker.js":
/*!***************************!*\
  !*** ./src/questmaker.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _randomizer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./randomizer */ "./src/randomizer.js");
/* harmony import */ var _calculate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculate */ "./src/calculate.js");



function makeQuest(min, max) {
  const quest = {};
  const signs = [' + ', ' - ', ' * ', ' + ', ' - ', ' * '];
  const firstNumber = Object(_randomizer__WEBPACK_IMPORTED_MODULE_0__["default"])(min, max);
  const secondNumber = Object(_randomizer__WEBPACK_IMPORTED_MODULE_0__["default"])(min, max);
  const sign = signs[Object(_randomizer__WEBPACK_IMPORTED_MODULE_0__["default"])(0, signs.length - 1)];
  quest.task = firstNumber + sign + secondNumber;
  quest.result = Object(_calculate__WEBPACK_IMPORTED_MODULE_1__["default"])(firstNumber, sign, secondNumber).toString();
  return quest;
}

/* harmony default export */ __webpack_exports__["default"] = (makeQuest);


/***/ }),

/***/ "./src/randomizer.js":
/*!***************************!*\
  !*** ./src/randomizer.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function randomnumber(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
}

/* harmony default export */ __webpack_exports__["default"] = (randomnumber);


/***/ }),

/***/ "./src/showScore.js":
/*!**************************!*\
  !*** ./src/showScore.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-globals */
function showScore() {
  const scoreBoard = document.querySelector('.scoreboard');
  const goToMenu = document.querySelector('.go-to-menu');
  const totalScore = JSON.parse(localStorage.getItem('gameStorage'));
  const scores = Object.keys(totalScore);
  const players = document.querySelectorAll('.played');
  const results = document.querySelectorAll('.scored');
  scores.reverse();
  results.forEach((elem, index) => {
    if (scores[index]) {
      elem.innerHTML = scores[index];
      elem.style.borderBottom = '1px solid black';
    }
  });
  players.forEach((elem, index) => {
    if (totalScore[scores[index]]) {
      elem.innerHTML = totalScore[scores[index]];
      elem.style.borderBottom = '1px solid black';
    }
  });
  scoreBoard.style.visibility = 'visible';
  goToMenu.addEventListener('click', () => location.reload());
}

/* harmony default export */ __webpack_exports__["default"] = (showScore);


/***/ }),

/***/ "./src/spellcast.js":
/*!**************************!*\
  !*** ./src/spellcast.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _spellmaker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spellmaker */ "./src/spellmaker.js");


function spellcast(event) {
  switch (event.target.id) {
    case 'spell-1':
      Object(_spellmaker__WEBPACK_IMPORTED_MODULE_0__["default"])('Заклинание 1', 0, 10, 10);
      break;
    case 'spell-2':
      Object(_spellmaker__WEBPACK_IMPORTED_MODULE_0__["default"])('Заклинание 2', 10, 50, 20);
      break;
    case 'spell-3':
      Object(_spellmaker__WEBPACK_IMPORTED_MODULE_0__["default"])('Заклинание 3', 10, 100, 30);
      break;
    case 'spell-4':
      Object(_spellmaker__WEBPACK_IMPORTED_MODULE_0__["default"])('Заклинание 4', 0, 1000, 50);
      break;
    case 'close-spells': {
      const spells = document.querySelector('.spells');
      spells.style.visibility = 'hidden';
      break;
    }
    default:
      break;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (spellcast);


/***/ }),

/***/ "./src/spellmaker.js":
/*!***************************!*\
  !*** ./src/spellmaker.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _questmaker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./questmaker */ "./src/questmaker.js");
/* harmony import */ var _success_cast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./success-cast */ "./src/success-cast.js");
/* harmony import */ var _failed_cast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./failed-cast */ "./src/failed-cast.js");




function spellMaker(spellname, min, max, damage) {
  const quest = Object(_questmaker__WEBPACK_IMPORTED_MODULE_0__["default"])(min, max);
  const spellName = document.querySelector('.spell-name');
  spellName.innerHTML = spellname;

  const spellQuest = document.querySelector('.spell-quest');
  spellQuest.innerHTML = quest.task;

  const questScreen = document.querySelector('.quest-screen');
  questScreen.style.visibility = 'visible';

  const submitButton = document.getElementById('submit-cast');
  submitButton.onclick = function checkCast() {
    const playerAnswer = document.getElementById('quest-answer').value;
    if (playerAnswer === quest.result) {
      Object(_success_cast__WEBPACK_IMPORTED_MODULE_1__["default"])(damage);
    } else {
      Object(_failed_cast__WEBPACK_IMPORTED_MODULE_2__["default"])(damage);
    }
    document.getElementById('quest-answer').value = '';
  };
}

/* harmony default export */ __webpack_exports__["default"] = (spellMaker);


/***/ }),

/***/ "./src/start-game.js":
/*!***************************!*\
  !*** ./src/start-game.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function startGame() {
  const pName = document.querySelector('.p-name').value;
  const fPage = document.querySelector('.background-f-page');
  const playerName = document.querySelector('.player-name');
  playerName.innerHTML = pName;
  fPage.style.visibility = 'hidden';
}

/* harmony default export */ __webpack_exports__["default"] = (startGame);


/***/ }),

/***/ "./src/success-cast.js":
/*!*****************************!*\
  !*** ./src/success-cast.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gameover__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameover */ "./src/gameover.js");


function successCast(damage) {
  const spells = document.querySelector('.spells');
  const questScreen = document.querySelector('.quest-screen');
  const mH = document.querySelector('.monster-health');
  const monHealthbar = document.getElementById('m-healthbar');
  let monsterHealth = mH.innerHTML.split(' ')[0];
  spells.style.visibility = 'hidden';
  questScreen.style.visibility = 'hidden';
  monsterHealth -= damage;
  mH.innerHTML = `${monsterHealth} HP`;
  if (monsterHealth <= 0) {
    Object(_gameover__WEBPACK_IMPORTED_MODULE_0__["default"])('win');
  }
  monHealthbar.style.background = `linear-gradient(to left, red ${100 - monsterHealth}%, lightgreen ${100 - monsterHealth + 5}%)`;
}

/* harmony default export */ __webpack_exports__["default"] = (successCast);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkZC1zY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9jYWxjdWxhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nob29zZS1zcGVsbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZmFpbGVkLWNhc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVvdmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbml0LmpzIiwid2VicGFjazovLy8uL3NyYy9tb25zdGVyLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9tb25zdGVyLW5hbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3F1ZXN0bWFrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JhbmRvbWl6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nob3dTY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3BlbGxjYXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zcGVsbG1ha2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGFydC1nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9zdWNjZXNzLWNhc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFZSx1RUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDZnhCO0FBQUE7QUFBQTtBQUFBO0FBQTBCO0FBQ1c7QUFDSTs7QUFFekM7QUFDQTtBQUNBLGlDQUFpQyxxREFBVztBQUM1Qyx1Q0FBdUMsbURBQVM7QUFDaEQscURBQUk7Ozs7Ozs7Ozs7Ozs7QUNSSjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsd0VBQVMsRUFBQzs7Ozs7Ozs7Ozs7OztBQ2xCekI7QUFBQTtBQUFvQzs7QUFFcEM7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGtEQUFTO0FBQzVDOztBQUVlLDBFQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNSM0I7QUFBQTtBQUFrQzs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHlEQUFRO0FBQ1o7QUFDQSxvQkFBb0IsYUFBYTtBQUNqQyxrRUFBa0UsbUJBQW1CLGdCQUFnQix1QkFBdUI7QUFDNUg7O0FBRWUseUVBQVUsRUFBQzs7Ozs7Ozs7Ozs7OztBQ2xCMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNtQztBQUNUO0FBQ1U7O0FBRXBDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLDBEQUFRO0FBQ1osSUFBSSwwREFBUztBQUNiO0FBQ0E7QUFDQSxJQUFJLHFEQUFJO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLHVFQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUMxQ3hCO0FBQUE7QUFBQTtBQUFxRDtBQUNIOztBQUVsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixvRUFBZ0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxzQkFBc0IsNkRBQW9CO0FBQzFDO0FBQ0EsdUJBQXVCLGNBQWM7QUFDckM7QUFDQSxzQkFBc0IsYUFBYTs7QUFFbkM7QUFDQTtBQUNBLGtFQUFrRSxtQkFBbUIsZ0JBQWdCLG1CQUFtQjtBQUN4SCxrRUFBa0Usb0JBQW9CLGdCQUFnQixvQkFBb0I7QUFDMUg7O0FBRWUsbUVBQUksRUFBQzs7Ozs7Ozs7Ozs7OztBQ2hDcEI7QUFBQTtBQUFrQzs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDJEQUFNO0FBQzFCLHFCQUFxQiwyREFBTTtBQUMzQixtQkFBbUIsMkRBQU07QUFDekI7QUFDQTtBQUNlLCtFQUFnQixFQUFDOzs7Ozs7Ozs7Ozs7O0FDYmhDO0FBQUE7QUFBa0M7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsVUFBVSwyREFBTSxVQUFVLEdBQUcsV0FBVywyREFBTSxVQUFVLEdBQUcsVUFBVSwyREFBTSxVQUFVO0FBQ3pHO0FBQ0E7QUFDZSw2RUFBYyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDVjlCO0FBQUE7QUFBQTtBQUFzQztBQUNGOztBQUVwQztBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsMkRBQVU7QUFDaEMsdUJBQXVCLDJEQUFVO0FBQ2pDLHFCQUFxQiwyREFBVTtBQUMvQjtBQUNBLGlCQUFpQiwwREFBUztBQUMxQjtBQUNBOztBQUVlLHdFQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNkekI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLDJFQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNONUI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRWUsd0VBQVMsRUFBQzs7Ozs7Ozs7Ozs7OztBQzFCekI7QUFBQTtBQUFzQzs7QUFFdEM7QUFDQTtBQUNBO0FBQ0EsTUFBTSwyREFBVTtBQUNoQjtBQUNBO0FBQ0EsTUFBTSwyREFBVTtBQUNoQjtBQUNBO0FBQ0EsTUFBTSwyREFBVTtBQUNoQjtBQUNBO0FBQ0EsTUFBTSwyREFBVTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSx3RUFBUyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDMUJ6QjtBQUFBO0FBQUE7QUFBQTtBQUFxQztBQUNDO0FBQ0k7O0FBRTFDO0FBQ0EsZ0JBQWdCLDJEQUFTO0FBQ3pCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSw2REFBUTtBQUNkLEtBQUs7QUFDTCxNQUFNLDREQUFhO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVlLHlFQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUMzQjFCO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsd0VBQVMsRUFBQzs7Ozs7Ozs7Ozs7OztBQ1J6QjtBQUFBO0FBQWtDOztBQUVsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsY0FBYztBQUNsQztBQUNBLElBQUkseURBQVE7QUFDWjtBQUNBLGtFQUFrRSxvQkFBb0IsZ0JBQWdCLHdCQUF3QjtBQUM5SDs7QUFFZSwwRUFBVyxFQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9hcHAuanNcIik7XG4iLCJmdW5jdGlvbiBhZGRTY29yZShwbGF5ZXJOYW1lLCBwbGF5ZXJTY29yZSkge1xuICBjb25zdCByZXN1bHRTY29yZSA9IHt9O1xuICBjb25zdCB0b3RhbFNjb3JlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ2FtZVN0b3JhZ2UnKSk7XG4gIHRvdGFsU2NvcmVbcGxheWVyU2NvcmVdID0gcGxheWVyTmFtZTtcbiAgY29uc3Qgc2NvcmVzID0gT2JqZWN0LmtleXModG90YWxTY29yZSk7XG4gIHNjb3Jlcy5yZXZlcnNlKCk7XG4gIGlmIChzY29yZXMubGVuZ3RoID4gMTApIHtcbiAgICBzY29yZXMubGVuZ3RoID0gMTA7XG4gIH1cbiAgc2NvcmVzLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICByZXN1bHRTY29yZVtlbGVtXSA9IHRvdGFsU2NvcmVbZWxlbV07XG4gIH0pO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZ2FtZVN0b3JhZ2UnLCBKU09OLnN0cmluZ2lmeShyZXN1bHRTY29yZSkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhZGRTY29yZTtcbiIsImltcG9ydCBpbml0IGZyb20gJy4vaW5pdCc7XG5pbXBvcnQgc3RhcnRHYW1lIGZyb20gJy4vc3RhcnQtZ2FtZSc7XG5pbXBvcnQgY2hvb3NlU3BlbGwgZnJvbSAnLi9jaG9vc2Utc3BlbGwnO1xuXG5jb25zdCBiYXR0bGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG8tYmF0dGxlJyk7XG5jb25zdCBhdHRhY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXR0YWNrLWJ1dHRvbicpO1xuYXR0YWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hvb3NlU3BlbGwpO1xuYmF0dGxlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RhcnRHYW1lKTtcbmluaXQoKTtcbiIsImZ1bmN0aW9uIGNhbGN1bGF0ZShudW0xLCBzaWduLCBudW0yKSB7XG4gIGxldCByZXN1bHQgPSAwO1xuICBzd2l0Y2ggKHNpZ24pIHtcbiAgICBjYXNlICcgKyAnOlxuICAgICAgcmVzdWx0ID0gbnVtMSArIG51bTI7XG4gICAgICBicmVhaztcbiAgICBjYXNlICcgLSAnOlxuICAgICAgcmVzdWx0ID0gbnVtMSAtIG51bTI7XG4gICAgICBicmVhaztcbiAgICBjYXNlICcgKiAnOlxuICAgICAgcmVzdWx0ID0gbnVtMSAqIG51bTI7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWs7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2FsY3VsYXRlO1xuIiwiaW1wb3J0IHNwZWxsY2FzdCBmcm9tICcuL3NwZWxsY2FzdCc7XG5cbmZ1bmN0aW9uIGNob29zZVNwZWxsKCkge1xuICBjb25zdCBzcGVsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3BlbGxzJyk7XG4gIHNwZWxscy5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICBzcGVsbHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzcGVsbGNhc3QpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjaG9vc2VTcGVsbDtcbiIsImltcG9ydCBnYW1lb3ZlciBmcm9tICcuL2dhbWVvdmVyJztcblxuZnVuY3Rpb24gZmFpbGVkQ2FzdChkYW1hZ2UpIHtcbiAgY29uc3Qgc3BlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwZWxscycpO1xuICBjb25zdCBxdWVzdFNjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5xdWVzdC1zY3JlZW4nKTtcbiAgY29uc3QgcGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLWhlYWx0aCcpO1xuICBjb25zdCBwbEhlYWx0aGJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwLWhlYWx0aGJhcicpO1xuICBsZXQgcGxheWVySGVhbHRoID0gcGguaW5uZXJIVE1MLnNwbGl0KCcgJylbMF07XG4gIHNwZWxscy5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gIHF1ZXN0U2NyZWVuLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgcGxheWVySGVhbHRoIC09IGRhbWFnZTtcbiAgaWYgKHBsYXllckhlYWx0aCA8PSAwKSB7XG4gICAgZ2FtZW92ZXIoJ2xvc2UnKTtcbiAgfVxuICBwaC5pbm5lckhUTUwgPSBgJHtwbGF5ZXJIZWFsdGh9IEhQYDtcbiAgcGxIZWFsdGhiYXIuc3R5bGUuYmFja2dyb3VuZCA9IGBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJlZCAkezEwMCAtIHBsYXllckhlYWx0aH0lLCBsaWdodGdyZWVuICR7MTAwIC0gcGxheWVySGVhbHRoICsgNX0lKWA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZhaWxlZENhc3Q7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLWdsb2JhbHMgKi9cbmltcG9ydCBhZGRTY29yZSBmcm9tICcuL2FkZC1zY29yZSc7XG5pbXBvcnQgaW5pdCBmcm9tICcuL2luaXQnO1xuaW1wb3J0IHNob3dTY29yZSBmcm9tICcuL3Nob3dTY29yZSc7XG5cbmxldCBmaW5hbFNjb3JlID0gMDtcblxuZnVuY3Rpb24gZ2FtZW92ZXIocmVzdWx0KSB7XG4gIGNvbnN0IHdpbkxvc2VTY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luLWxvc2Utc2NyZWVuJyk7XG4gIGNvbnN0IHdpbkxvc2VNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbi1sb3NlLW1lc3NhZ2UnKTtcbiAgY29uc3QgbmV3R2FtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctZ2FtZScpO1xuICBjb25zdCBlbmRnYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVuZC1nYW1lJyk7XG4gIGNvbnN0IHBsTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItbmFtZScpLmlubmVySFRNTDtcbiAgY29uc3QgbUhlYWx0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb25zdGVyLWhlYWx0aCcpLmlubmVySFRNTC5zcGxpdCgnICcpWzBdO1xuICBmaW5hbFNjb3JlICs9IDEwMCAtIG1IZWFsdGg7XG5cbiAgZnVuY3Rpb24gZ29Ub1Njb3JlYm9hcmQoKSB7XG4gICAgYWRkU2NvcmUocGxOYW1lLCBmaW5hbFNjb3JlKTtcbiAgICBzaG93U2NvcmUoKTtcbiAgfVxuICBmdW5jdGlvbiBjb250aW51ZUdhbWUoKSB7XG4gICAgaW5pdCgpO1xuICAgIG5ld0dhbWUucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb250aW51ZUdhbWUpO1xuICAgIGVuZGdhbWUucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnb1RvU2NvcmVib2FyZCk7XG4gIH1cblxuICBpZiAocmVzdWx0ID09PSAnbG9zZScpIHtcbiAgICB3aW5Mb3NlTWVzc2FnZS5pbm5lckhUTUwgPSAnWW91IGxvc3QsIERvIHlvdSB3YW50IHRvIHN0YXJ0IG5ldyBHYW1lPyc7XG4gICAgbmV3R2FtZS5pbm5lckhUTUwgPSAnTmV3IEdhbWUnO1xuICAgIGVuZGdhbWUuaW5uZXJIVE1MID0gJ0dhbWUgT3Zlcic7XG4gICAgbmV3R2FtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdvVG9TY29yZWJvYXJkKTtcbiAgICBlbmRnYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ29Ub1Njb3JlYm9hcmQpO1xuICB9IGVsc2Uge1xuICAgIHdpbkxvc2VNZXNzYWdlLmlubmVySFRNTCA9ICdZb3UgV29uISBEbyB5b3Ugd2FudCB0byBmaWdodCBhbm90aGVyIG1vbnN0ZXI/JztcbiAgICBuZXdHYW1lLmlubmVySFRNTCA9ICdMZXRcXCdzIGZpZ2h0JztcbiAgICBlbmRnYW1lLmlubmVySFRNTCA9ICdHYW1lIE92ZXInO1xuICAgIG5ld0dhbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb250aW51ZUdhbWUpO1xuICAgIGVuZGdhbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnb1RvU2NvcmVib2FyZCk7XG4gIH1cbiAgd2luTG9zZVNjcmVlbi5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnYW1lb3ZlcjtcbiIsImltcG9ydCBtb25zdGVyQ29uc3RydWN0IGZyb20gJy4vbW9uc3Rlci1jb25zdHJ1Y3Rvcic7XG5pbXBvcnQgbW9uc3Rlck5hbWVDb25zdHJ1Y3QgZnJvbSAnLi9tb25zdGVyLW5hbWUnO1xuXG5mdW5jdGlvbiBpbml0KCkge1xuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnZ2FtZVN0b3JhZ2UnKTtcbiAgY29uc3QgcGxheWVyU3RhdHVzID0gMTAwO1xuICBjb25zdCBtb25zdGVyU3RhdHVzID0gMTAwO1xuICBjb25zdCB3aW5Mb3NlU2NyZWVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbi1sb3NlLXNjcmVlbicpO1xuICB3aW5Mb3NlU2NyZWVuLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgaWYgKCEobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dhbWVTdG9yYWdlJykpKSB7XG4gICAgY29uc3Qgc2NvcmVib2FyZCA9IHt9O1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdnYW1lU3RvcmFnZScsIEpTT04uc3RyaW5naWZ5KHNjb3JlYm9hcmQpKTtcbiAgfVxuICBjb25zdCBtb25zdGVycGFydHMgPSBtb25zdGVyQ29uc3RydWN0KCk7XG4gIGNvbnN0IG1vbnN0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9uc3Rlci1wYXJ0Jyk7XG4gIG1vbnN0ZXIuZm9yRWFjaCgoZWxlbSwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBlbCA9IGVsZW07XG4gICAgZWwuc3JjID0gbW9uc3RlcnBhcnRzW2luZGV4XTtcbiAgfSk7XG4gIGNvbnN0IG1vbk5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9uc3Rlci1uYW1lJyk7XG4gIG1vbk5hbWUuaW5uZXJIVE1MID0gbW9uc3Rlck5hbWVDb25zdHJ1Y3QoKTtcbiAgY29uc3QgbW9uSHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9uc3Rlci1oZWFsdGgnKTtcbiAgbW9uSHAuaW5uZXJIVE1MID0gYCR7bW9uc3RlclN0YXR1c30gSFBgO1xuICBjb25zdCBwbEhwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1oZWFsdGgnKTtcbiAgcGxIcC5pbm5lckhUTUwgPSBgJHtwbGF5ZXJTdGF0dXN9IEhQYDtcblxuICBjb25zdCBwbEhlYWx0aGJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwLWhlYWx0aGJhcicpO1xuICBjb25zdCBtb25IZWFsdGhiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbS1oZWFsdGhiYXInKTtcbiAgcGxIZWFsdGhiYXIuc3R5bGUuYmFja2dyb3VuZCA9IGBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJlZCAkezEwMCAtIHBsYXllclN0YXR1c30lLCBsaWdodGdyZWVuICR7MTAwIC0gcGxheWVyU3RhdHVzfSUpYDtcbiAgbW9uSGVhbHRoYmFyLnN0eWxlLmJhY2tncm91bmQgPSBgbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJlZCAkezEwMCAtIG1vbnN0ZXJTdGF0dXN9JSwgbGlnaHRncmVlbiAkezEwMCAtIG1vbnN0ZXJTdGF0dXN9JSlgO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0O1xuIiwiaW1wb3J0IHJhbmRvbSBmcm9tICcuL3JhbmRvbWl6ZXInO1xuXG5mdW5jdGlvbiBtb25zdGVyQ29uc3RydWN0KCkge1xuICBjb25zdCBoZWFkcyA9IFsnaW1nL2hlYWQtMS5wbmcnLCAnaW1nL2hlYWQtMi5wbmcnLCAnaW1nL2hlYWQtMy5wbmcnXTtcbiAgY29uc3QgYm9kaWVzID0gWydpbWcvYm9keS0xLnBuZycsICdpbWcvYm9keS0yLnBuZycsICdpbWcvYm9keS0zLnBuZyddO1xuICBjb25zdCBsZWdzID0gWydpbWcvbGVncy0xLnBuZycsICdpbWcvbGVncy0yLnBuZycsICdpbWcvbGVncy0zLnBuZyddO1xuICBjb25zdCByZXN1bHQgPSBbXTtcbiAgY29uc3QgbWF4ID0gaGVhZHMubGVuZ3RoIC0gMTtcbiAgcmVzdWx0LnB1c2goaGVhZHNbcmFuZG9tKDAsIG1heCldKTtcbiAgcmVzdWx0LnB1c2goYm9kaWVzW3JhbmRvbSgwLCBtYXgpXSk7XG4gIHJlc3VsdC5wdXNoKGxlZ3NbcmFuZG9tKDAsIG1heCldKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydCBkZWZhdWx0IG1vbnN0ZXJDb25zdHJ1Y3Q7XG4iLCJpbXBvcnQgcmFuZG9tIGZyb20gJy4vcmFuZG9taXplcic7XG5cbmZ1bmN0aW9uIG1OYW1lQ29uc3RydWN0KCkge1xuICBjb25zdCBmaXJzdFBhcnQgPSBbJ9CW0YPRgtC60LjQuScsICfQodGC0YDQsNGI0L3Ri9C5JywgJ9CX0LvQvtC5JywgJ9Cj0LbQsNGB0L3Ri9C5JywgJ9CS0L7QvdGO0YfQuNC5JywgJ9CT0L7Qu9C+0LTQvdGL0LknLCAn0JfQstC10YDRgdC60LjQuSddO1xuICBjb25zdCBzZWNvbmRQYXJ0ID0gWyfQv9C+0LbQuNGA0LDRgtC10LvRjCcsICfQu9GO0LTQvtC10LQnLCAn0LfQvtC80LHQuCcsICfQt9Cy0LXRgNGMJywgJ9Cz0YPQu9GMJywgJ9C/0L7QtdC00LDRgtC10LvRjCcsICfQv9GA0LjQt9GA0LDQuiddO1xuICBjb25zdCB0aGlyZFBhcnQgPSBbJ9Cc0LDQudC60LsnLCAn0KTRgNC10LTQtNC4JywgJ9CU0LbQvtC90L3QuCcsICfQkdGD0LHQsdCwJywgJ9CU0LbQtdC50YHQvtC9JywgJ9Co0YLQuNC/JywgJ9CQ0LHQsNGC0YPRgCddO1xuICBjb25zdCBtYXggPSBmaXJzdFBhcnQubGVuZ3RoIC0gMTtcbiAgY29uc3QgcmVzdWx0ID0gYCR7Zmlyc3RQYXJ0W3JhbmRvbSgwLCBtYXgpXX0gJHtzZWNvbmRQYXJ0W3JhbmRvbSgwLCBtYXgpXX0gJHt0aGlyZFBhcnRbcmFuZG9tKDAsIG1heCldfWA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnQgZGVmYXVsdCBtTmFtZUNvbnN0cnVjdDtcbiIsImltcG9ydCByYW5kb21pemVyIGZyb20gJy4vcmFuZG9taXplcic7XG5pbXBvcnQgY2FsY3VsYXRlIGZyb20gJy4vY2FsY3VsYXRlJztcblxuZnVuY3Rpb24gbWFrZVF1ZXN0KG1pbiwgbWF4KSB7XG4gIGNvbnN0IHF1ZXN0ID0ge307XG4gIGNvbnN0IHNpZ25zID0gWycgKyAnLCAnIC0gJywgJyAqICcsICcgKyAnLCAnIC0gJywgJyAqICddO1xuICBjb25zdCBmaXJzdE51bWJlciA9IHJhbmRvbWl6ZXIobWluLCBtYXgpO1xuICBjb25zdCBzZWNvbmROdW1iZXIgPSByYW5kb21pemVyKG1pbiwgbWF4KTtcbiAgY29uc3Qgc2lnbiA9IHNpZ25zW3JhbmRvbWl6ZXIoMCwgc2lnbnMubGVuZ3RoIC0gMSldO1xuICBxdWVzdC50YXNrID0gZmlyc3ROdW1iZXIgKyBzaWduICsgc2Vjb25kTnVtYmVyO1xuICBxdWVzdC5yZXN1bHQgPSBjYWxjdWxhdGUoZmlyc3ROdW1iZXIsIHNpZ24sIHNlY29uZE51bWJlcikudG9TdHJpbmcoKTtcbiAgcmV0dXJuIHF1ZXN0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBtYWtlUXVlc3Q7XG4iLCJmdW5jdGlvbiByYW5kb21udW1iZXIobWluLCBtYXgpIHtcbiAgbGV0IHJhbmQgPSBtaW4gKyBNYXRoLnJhbmRvbSgpICogKG1heCArIDEgLSBtaW4pO1xuICByYW5kID0gTWF0aC5mbG9vcihyYW5kKTtcbiAgcmV0dXJuIHJhbmQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJhbmRvbW51bWJlcjtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLWdsb2JhbHMgKi9cbmZ1bmN0aW9uIHNob3dTY29yZSgpIHtcbiAgY29uc3Qgc2NvcmVCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY29yZWJvYXJkJyk7XG4gIGNvbnN0IGdvVG9NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdvLXRvLW1lbnUnKTtcbiAgY29uc3QgdG90YWxTY29yZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dhbWVTdG9yYWdlJykpO1xuICBjb25zdCBzY29yZXMgPSBPYmplY3Qua2V5cyh0b3RhbFNjb3JlKTtcbiAgY29uc3QgcGxheWVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5ZWQnKTtcbiAgY29uc3QgcmVzdWx0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zY29yZWQnKTtcbiAgc2NvcmVzLnJldmVyc2UoKTtcbiAgcmVzdWx0cy5mb3JFYWNoKChlbGVtLCBpbmRleCkgPT4ge1xuICAgIGlmIChzY29yZXNbaW5kZXhdKSB7XG4gICAgICBlbGVtLmlubmVySFRNTCA9IHNjb3Jlc1tpbmRleF07XG4gICAgICBlbGVtLnN0eWxlLmJvcmRlckJvdHRvbSA9ICcxcHggc29saWQgYmxhY2snO1xuICAgIH1cbiAgfSk7XG4gIHBsYXllcnMuZm9yRWFjaCgoZWxlbSwgaW5kZXgpID0+IHtcbiAgICBpZiAodG90YWxTY29yZVtzY29yZXNbaW5kZXhdXSkge1xuICAgICAgZWxlbS5pbm5lckhUTUwgPSB0b3RhbFNjb3JlW3Njb3Jlc1tpbmRleF1dO1xuICAgICAgZWxlbS5zdHlsZS5ib3JkZXJCb3R0b20gPSAnMXB4IHNvbGlkIGJsYWNrJztcbiAgICB9XG4gIH0pO1xuICBzY29yZUJvYXJkLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gIGdvVG9NZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbG9jYXRpb24ucmVsb2FkKCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzaG93U2NvcmU7XG4iLCJpbXBvcnQgc3BlbGxNYWtlciBmcm9tICcuL3NwZWxsbWFrZXInO1xuXG5mdW5jdGlvbiBzcGVsbGNhc3QoZXZlbnQpIHtcbiAgc3dpdGNoIChldmVudC50YXJnZXQuaWQpIHtcbiAgICBjYXNlICdzcGVsbC0xJzpcbiAgICAgIHNwZWxsTWFrZXIoJ9CX0LDQutC70LjQvdCw0L3QuNC1IDEnLCAwLCAxMCwgMTApO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnc3BlbGwtMic6XG4gICAgICBzcGVsbE1ha2VyKCfQl9Cw0LrQu9C40L3QsNC90LjQtSAyJywgMTAsIDUwLCAyMCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzcGVsbC0zJzpcbiAgICAgIHNwZWxsTWFrZXIoJ9CX0LDQutC70LjQvdCw0L3QuNC1IDMnLCAxMCwgMTAwLCAzMCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzcGVsbC00JzpcbiAgICAgIHNwZWxsTWFrZXIoJ9CX0LDQutC70LjQvdCw0L3QuNC1IDQnLCAwLCAxMDAwLCA1MCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdjbG9zZS1zcGVsbHMnOiB7XG4gICAgICBjb25zdCBzcGVsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3BlbGxzJyk7XG4gICAgICBzcGVsbHMuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBzcGVsbGNhc3Q7XG4iLCJpbXBvcnQgbWFrZVF1ZXN0IGZyb20gJy4vcXVlc3RtYWtlcic7XG5pbXBvcnQgZG9EYW1hZ2UgZnJvbSAnLi9zdWNjZXNzLWNhc3QnO1xuaW1wb3J0IHJlY2VpdmVEYW1hZ2UgZnJvbSAnLi9mYWlsZWQtY2FzdCc7XG5cbmZ1bmN0aW9uIHNwZWxsTWFrZXIoc3BlbGxuYW1lLCBtaW4sIG1heCwgZGFtYWdlKSB7XG4gIGNvbnN0IHF1ZXN0ID0gbWFrZVF1ZXN0KG1pbiwgbWF4KTtcbiAgY29uc3Qgc3BlbGxOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwZWxsLW5hbWUnKTtcbiAgc3BlbGxOYW1lLmlubmVySFRNTCA9IHNwZWxsbmFtZTtcblxuICBjb25zdCBzcGVsbFF1ZXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwZWxsLXF1ZXN0Jyk7XG4gIHNwZWxsUXVlc3QuaW5uZXJIVE1MID0gcXVlc3QudGFzaztcblxuICBjb25zdCBxdWVzdFNjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5xdWVzdC1zY3JlZW4nKTtcbiAgcXVlc3RTY3JlZW4uc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcblxuICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0LWNhc3QnKTtcbiAgc3VibWl0QnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbiBjaGVja0Nhc3QoKSB7XG4gICAgY29uc3QgcGxheWVyQW5zd2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1ZXN0LWFuc3dlcicpLnZhbHVlO1xuICAgIGlmIChwbGF5ZXJBbnN3ZXIgPT09IHF1ZXN0LnJlc3VsdCkge1xuICAgICAgZG9EYW1hZ2UoZGFtYWdlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVjZWl2ZURhbWFnZShkYW1hZ2UpO1xuICAgIH1cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVlc3QtYW5zd2VyJykudmFsdWUgPSAnJztcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3BlbGxNYWtlcjtcbiIsImZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcbiAgY29uc3QgcE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucC1uYW1lJykudmFsdWU7XG4gIGNvbnN0IGZQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhY2tncm91bmQtZi1wYWdlJyk7XG4gIGNvbnN0IHBsYXllck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLW5hbWUnKTtcbiAgcGxheWVyTmFtZS5pbm5lckhUTUwgPSBwTmFtZTtcbiAgZlBhZ2Uuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdGFydEdhbWU7XG4iLCJpbXBvcnQgZ2FtZW92ZXIgZnJvbSAnLi9nYW1lb3Zlcic7XG5cbmZ1bmN0aW9uIHN1Y2Nlc3NDYXN0KGRhbWFnZSkge1xuICBjb25zdCBzcGVsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3BlbGxzJyk7XG4gIGNvbnN0IHF1ZXN0U2NyZWVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnF1ZXN0LXNjcmVlbicpO1xuICBjb25zdCBtSCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb25zdGVyLWhlYWx0aCcpO1xuICBjb25zdCBtb25IZWFsdGhiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbS1oZWFsdGhiYXInKTtcbiAgbGV0IG1vbnN0ZXJIZWFsdGggPSBtSC5pbm5lckhUTUwuc3BsaXQoJyAnKVswXTtcbiAgc3BlbGxzLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgcXVlc3RTY3JlZW4uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICBtb25zdGVySGVhbHRoIC09IGRhbWFnZTtcbiAgbUguaW5uZXJIVE1MID0gYCR7bW9uc3RlckhlYWx0aH0gSFBgO1xuICBpZiAobW9uc3RlckhlYWx0aCA8PSAwKSB7XG4gICAgZ2FtZW92ZXIoJ3dpbicpO1xuICB9XG4gIG1vbkhlYWx0aGJhci5zdHlsZS5iYWNrZ3JvdW5kID0gYGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZWQgJHsxMDAgLSBtb25zdGVySGVhbHRofSUsIGxpZ2h0Z3JlZW4gJHsxMDAgLSBtb25zdGVySGVhbHRoICsgNX0lKWA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN1Y2Nlc3NDYXN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
