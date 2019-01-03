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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkZC1zY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9jYWxjdWxhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nob29zZS1zcGVsbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZmFpbGVkLWNhc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVvdmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbml0LmpzIiwid2VicGFjazovLy8uL3NyYy9tb25zdGVyLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9tb25zdGVyLW5hbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3F1ZXN0bWFrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JhbmRvbWl6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nob3dTY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3BlbGxjYXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zcGVsbG1ha2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGFydC1nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9zdWNjZXNzLWNhc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFnQix3QkFBd0I7QUFDOUg7O0FBRWUsMEVBQVcsRUFBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYXBwLmpzXCIpO1xuIiwiZnVuY3Rpb24gYWRkU2NvcmUocGxheWVyTmFtZSwgcGxheWVyU2NvcmUpIHtcbiAgY29uc3QgcmVzdWx0U2NvcmUgPSB7fTtcbiAgY29uc3QgdG90YWxTY29yZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dhbWVTdG9yYWdlJykpO1xuICB0b3RhbFNjb3JlW3BsYXllclNjb3JlXSA9IHBsYXllck5hbWU7XG4gIGNvbnN0IHNjb3JlcyA9IE9iamVjdC5rZXlzKHRvdGFsU2NvcmUpO1xuICBzY29yZXMucmV2ZXJzZSgpO1xuICBpZiAoc2NvcmVzLmxlbmd0aCA+IDEwKSB7XG4gICAgc2NvcmVzLmxlbmd0aCA9IDEwO1xuICB9XG4gIHNjb3Jlcy5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgcmVzdWx0U2NvcmVbZWxlbV0gPSB0b3RhbFNjb3JlW2VsZW1dO1xuICB9KTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2dhbWVTdG9yYWdlJywgSlNPTi5zdHJpbmdpZnkocmVzdWx0U2NvcmUpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWRkU2NvcmU7XG4iLCJpbXBvcnQgaW5pdCBmcm9tICcuL2luaXQnO1xuaW1wb3J0IHN0YXJ0R2FtZSBmcm9tICcuL3N0YXJ0LWdhbWUnO1xuaW1wb3J0IGNob29zZVNwZWxsIGZyb20gJy4vY2hvb3NlLXNwZWxsJztcblxuY29uc3QgYmF0dGxlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvLWJhdHRsZScpO1xuY29uc3QgYXR0YWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF0dGFjay1idXR0b24nKTtcbmF0dGFjay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNob29zZVNwZWxsKTtcbmJhdHRsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0R2FtZSk7XG5pbml0KCk7XG4iLCJmdW5jdGlvbiBjYWxjdWxhdGUobnVtMSwgc2lnbiwgbnVtMikge1xuICBsZXQgcmVzdWx0ID0gMDtcbiAgc3dpdGNoIChzaWduKSB7XG4gICAgY2FzZSAnICsgJzpcbiAgICAgIHJlc3VsdCA9IG51bTEgKyBudW0yO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnIC0gJzpcbiAgICAgIHJlc3VsdCA9IG51bTEgLSBudW0yO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnICogJzpcbiAgICAgIHJlc3VsdCA9IG51bTEgKiBudW0yO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGJyZWFrO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNhbGN1bGF0ZTtcbiIsImltcG9ydCBzcGVsbGNhc3QgZnJvbSAnLi9zcGVsbGNhc3QnO1xuXG5mdW5jdGlvbiBjaG9vc2VTcGVsbCgpIHtcbiAgY29uc3Qgc3BlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwZWxscycpO1xuICBzcGVsbHMuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgc3BlbGxzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3BlbGxjYXN0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2hvb3NlU3BlbGw7XG4iLCJpbXBvcnQgZ2FtZW92ZXIgZnJvbSAnLi9nYW1lb3Zlcic7XG5cbmZ1bmN0aW9uIGZhaWxlZENhc3QoZGFtYWdlKSB7XG4gIGNvbnN0IHNwZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcGVsbHMnKTtcbiAgY29uc3QgcXVlc3RTY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucXVlc3Qtc2NyZWVuJyk7XG4gIGNvbnN0IHBoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1oZWFsdGgnKTtcbiAgY29uc3QgcGxIZWFsdGhiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncC1oZWFsdGhiYXInKTtcbiAgbGV0IHBsYXllckhlYWx0aCA9IHBoLmlubmVySFRNTC5zcGxpdCgnICcpWzBdO1xuICBzcGVsbHMuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICBxdWVzdFNjcmVlbi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gIHBsYXllckhlYWx0aCAtPSBkYW1hZ2U7XG4gIGlmIChwbGF5ZXJIZWFsdGggPD0gMCkge1xuICAgIGdhbWVvdmVyKCdsb3NlJyk7XG4gIH1cbiAgcGguaW5uZXJIVE1MID0gYCR7cGxheWVySGVhbHRofSBIUGA7XG4gIHBsSGVhbHRoYmFyLnN0eWxlLmJhY2tncm91bmQgPSBgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZWQgJHsxMDAgLSBwbGF5ZXJIZWFsdGh9JSwgbGlnaHRncmVlbiAkezEwMCAtIHBsYXllckhlYWx0aCArIDV9JSlgO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmYWlsZWRDYXN0O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzICovXG5pbXBvcnQgYWRkU2NvcmUgZnJvbSAnLi9hZGQtc2NvcmUnO1xuaW1wb3J0IGluaXQgZnJvbSAnLi9pbml0JztcbmltcG9ydCBzaG93U2NvcmUgZnJvbSAnLi9zaG93U2NvcmUnO1xuXG5sZXQgZmluYWxTY29yZSA9IDA7XG5cbmZ1bmN0aW9uIGdhbWVvdmVyKHJlc3VsdCkge1xuICBjb25zdCB3aW5Mb3NlU2NyZWVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbi1sb3NlLXNjcmVlbicpO1xuICBjb25zdCB3aW5Mb3NlTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW4tbG9zZS1tZXNzYWdlJyk7XG4gIGNvbnN0IG5ld0dhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LWdhbWUnKTtcbiAgY29uc3QgZW5kZ2FtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbmQtZ2FtZScpO1xuICBjb25zdCBwbE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLW5hbWUnKS5pbm5lckhUTUw7XG4gIGNvbnN0IG1IZWFsdGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9uc3Rlci1oZWFsdGgnKS5pbm5lckhUTUwuc3BsaXQoJyAnKVswXTtcbiAgZmluYWxTY29yZSArPSAxMDAgLSBtSGVhbHRoO1xuXG4gIGZ1bmN0aW9uIGdvVG9TY29yZWJvYXJkKCkge1xuICAgIGFkZFNjb3JlKHBsTmFtZSwgZmluYWxTY29yZSk7XG4gICAgc2hvd1Njb3JlKCk7XG4gIH1cbiAgZnVuY3Rpb24gY29udGludWVHYW1lKCkge1xuICAgIGluaXQoKTtcbiAgICBuZXdHYW1lLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29udGludWVHYW1lKTtcbiAgICBlbmRnYW1lLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ29Ub1Njb3JlYm9hcmQpO1xuICB9XG5cbiAgaWYgKHJlc3VsdCA9PT0gJ2xvc2UnKSB7XG4gICAgd2luTG9zZU1lc3NhZ2UuaW5uZXJIVE1MID0gJ1lvdSBsb3N0LCBEbyB5b3Ugd2FudCB0byBzdGFydCBuZXcgR2FtZT8nO1xuICAgIG5ld0dhbWUuaW5uZXJIVE1MID0gJ05ldyBHYW1lJztcbiAgICBlbmRnYW1lLmlubmVySFRNTCA9ICdHYW1lIE92ZXInO1xuICAgIG5ld0dhbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnb1RvU2NvcmVib2FyZCk7XG4gICAgZW5kZ2FtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdvVG9TY29yZWJvYXJkKTtcbiAgfSBlbHNlIHtcbiAgICB3aW5Mb3NlTWVzc2FnZS5pbm5lckhUTUwgPSAnWW91IFdvbiEgRG8geW91IHdhbnQgdG8gZmlnaHQgYW5vdGhlciBtb25zdGVyPyc7XG4gICAgbmV3R2FtZS5pbm5lckhUTUwgPSAnTGV0XFwncyBmaWdodCc7XG4gICAgZW5kZ2FtZS5pbm5lckhUTUwgPSAnR2FtZSBPdmVyJztcbiAgICBuZXdHYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29udGludWVHYW1lKTtcbiAgICBlbmRnYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ29Ub1Njb3JlYm9hcmQpO1xuICB9XG4gIHdpbkxvc2VTY3JlZW4uc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2FtZW92ZXI7XG4iLCJpbXBvcnQgbW9uc3RlckNvbnN0cnVjdCBmcm9tICcuL21vbnN0ZXItY29uc3RydWN0b3InO1xuaW1wb3J0IG1vbnN0ZXJOYW1lQ29uc3RydWN0IGZyb20gJy4vbW9uc3Rlci1uYW1lJztcblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgY29uc3QgcGxheWVyU3RhdHVzID0gMTAwO1xuICBjb25zdCBtb25zdGVyU3RhdHVzID0gMTAwO1xuICBjb25zdCB3aW5Mb3NlU2NyZWVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbi1sb3NlLXNjcmVlbicpO1xuICB3aW5Mb3NlU2NyZWVuLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgaWYgKCEobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dhbWVTdG9yYWdlJykpKSB7XG4gICAgY29uc3Qgc2NvcmVib2FyZCA9IHt9O1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdnYW1lU3RvcmFnZScsIEpTT04uc3RyaW5naWZ5KHNjb3JlYm9hcmQpKTtcbiAgfVxuICBjb25zdCBtb25zdGVycGFydHMgPSBtb25zdGVyQ29uc3RydWN0KCk7XG4gIGNvbnN0IG1vbnN0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9uc3Rlci1wYXJ0Jyk7XG4gIG1vbnN0ZXIuZm9yRWFjaCgoZWxlbSwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBlbCA9IGVsZW07XG4gICAgZWwuc3JjID0gbW9uc3RlcnBhcnRzW2luZGV4XTtcbiAgfSk7XG4gIGNvbnN0IG1vbk5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9uc3Rlci1uYW1lJyk7XG4gIG1vbk5hbWUuaW5uZXJIVE1MID0gbW9uc3Rlck5hbWVDb25zdHJ1Y3QoKTtcbiAgY29uc3QgbW9uSHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9uc3Rlci1oZWFsdGgnKTtcbiAgbW9uSHAuaW5uZXJIVE1MID0gYCR7bW9uc3RlclN0YXR1c30gSFBgO1xuICBjb25zdCBwbEhwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1oZWFsdGgnKTtcbiAgcGxIcC5pbm5lckhUTUwgPSBgJHtwbGF5ZXJTdGF0dXN9IEhQYDtcblxuICBjb25zdCBwbEhlYWx0aGJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwLWhlYWx0aGJhcicpO1xuICBjb25zdCBtb25IZWFsdGhiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbS1oZWFsdGhiYXInKTtcbiAgcGxIZWFsdGhiYXIuc3R5bGUuYmFja2dyb3VuZCA9IGBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJlZCAkezEwMCAtIHBsYXllclN0YXR1c30lLCBsaWdodGdyZWVuICR7MTAwIC0gcGxheWVyU3RhdHVzfSUpYDtcbiAgbW9uSGVhbHRoYmFyLnN0eWxlLmJhY2tncm91bmQgPSBgbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJlZCAkezEwMCAtIG1vbnN0ZXJTdGF0dXN9JSwgbGlnaHRncmVlbiAkezEwMCAtIG1vbnN0ZXJTdGF0dXN9JSlgO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0O1xuIiwiaW1wb3J0IHJhbmRvbSBmcm9tICcuL3JhbmRvbWl6ZXInO1xuXG5mdW5jdGlvbiBtb25zdGVyQ29uc3RydWN0KCkge1xuICBjb25zdCBoZWFkcyA9IFsnaW1nL2hlYWQtMS5wbmcnLCAnaW1nL2hlYWQtMi5wbmcnLCAnaW1nL2hlYWQtMy5wbmcnXTtcbiAgY29uc3QgYm9kaWVzID0gWydpbWcvYm9keS0xLnBuZycsICdpbWcvYm9keS0yLnBuZycsICdpbWcvYm9keS0zLnBuZyddO1xuICBjb25zdCBsZWdzID0gWydpbWcvbGVncy0xLnBuZycsICdpbWcvbGVncy0yLnBuZycsICdpbWcvbGVncy0zLnBuZyddO1xuICBjb25zdCByZXN1bHQgPSBbXTtcbiAgY29uc3QgbWF4ID0gaGVhZHMubGVuZ3RoIC0gMTtcbiAgcmVzdWx0LnB1c2goaGVhZHNbcmFuZG9tKDAsIG1heCldKTtcbiAgcmVzdWx0LnB1c2goYm9kaWVzW3JhbmRvbSgwLCBtYXgpXSk7XG4gIHJlc3VsdC5wdXNoKGxlZ3NbcmFuZG9tKDAsIG1heCldKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydCBkZWZhdWx0IG1vbnN0ZXJDb25zdHJ1Y3Q7XG4iLCJpbXBvcnQgcmFuZG9tIGZyb20gJy4vcmFuZG9taXplcic7XG5cbmZ1bmN0aW9uIG1OYW1lQ29uc3RydWN0KCkge1xuICBjb25zdCBmaXJzdFBhcnQgPSBbJ9CW0YPRgtC60LjQuScsICfQodGC0YDQsNGI0L3Ri9C5JywgJ9CX0LvQvtC5JywgJ9Cj0LbQsNGB0L3Ri9C5JywgJ9CS0L7QvdGO0YfQuNC5JywgJ9CT0L7Qu9C+0LTQvdGL0LknLCAn0JfQstC10YDRgdC60LjQuSddO1xuICBjb25zdCBzZWNvbmRQYXJ0ID0gWyfQv9C+0LbQuNGA0LDRgtC10LvRjCcsICfQu9GO0LTQvtC10LQnLCAn0LfQvtC80LHQuCcsICfQt9Cy0LXRgNGMJywgJ9Cz0YPQu9GMJywgJ9C/0L7QtdC00LDRgtC10LvRjCcsICfQv9GA0LjQt9GA0LDQuiddO1xuICBjb25zdCB0aGlyZFBhcnQgPSBbJ9Cc0LDQudC60LsnLCAn0KTRgNC10LTQtNC4JywgJ9CU0LbQvtC90L3QuCcsICfQkdGD0LHQsdCwJywgJ9CU0LbQtdC50YHQvtC9JywgJ9Co0YLQuNC/JywgJ9CQ0LHQsNGC0YPRgCddO1xuICBjb25zdCBtYXggPSBmaXJzdFBhcnQubGVuZ3RoIC0gMTtcbiAgY29uc3QgcmVzdWx0ID0gYCR7Zmlyc3RQYXJ0W3JhbmRvbSgwLCBtYXgpXX0gJHtzZWNvbmRQYXJ0W3JhbmRvbSgwLCBtYXgpXX0gJHt0aGlyZFBhcnRbcmFuZG9tKDAsIG1heCldfWA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnQgZGVmYXVsdCBtTmFtZUNvbnN0cnVjdDtcbiIsImltcG9ydCByYW5kb21pemVyIGZyb20gJy4vcmFuZG9taXplcic7XG5pbXBvcnQgY2FsY3VsYXRlIGZyb20gJy4vY2FsY3VsYXRlJztcblxuZnVuY3Rpb24gbWFrZVF1ZXN0KG1pbiwgbWF4KSB7XG4gIGNvbnN0IHF1ZXN0ID0ge307XG4gIGNvbnN0IHNpZ25zID0gWycgKyAnLCAnIC0gJywgJyAqICcsICcgKyAnLCAnIC0gJywgJyAqICddO1xuICBjb25zdCBmaXJzdE51bWJlciA9IHJhbmRvbWl6ZXIobWluLCBtYXgpO1xuICBjb25zdCBzZWNvbmROdW1iZXIgPSByYW5kb21pemVyKG1pbiwgbWF4KTtcbiAgY29uc3Qgc2lnbiA9IHNpZ25zW3JhbmRvbWl6ZXIoMCwgc2lnbnMubGVuZ3RoIC0gMSldO1xuICBxdWVzdC50YXNrID0gZmlyc3ROdW1iZXIgKyBzaWduICsgc2Vjb25kTnVtYmVyO1xuICBxdWVzdC5yZXN1bHQgPSBjYWxjdWxhdGUoZmlyc3ROdW1iZXIsIHNpZ24sIHNlY29uZE51bWJlcikudG9TdHJpbmcoKTtcbiAgcmV0dXJuIHF1ZXN0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBtYWtlUXVlc3Q7XG4iLCJmdW5jdGlvbiByYW5kb21udW1iZXIobWluLCBtYXgpIHtcbiAgbGV0IHJhbmQgPSBtaW4gKyBNYXRoLnJhbmRvbSgpICogKG1heCArIDEgLSBtaW4pO1xuICByYW5kID0gTWF0aC5mbG9vcihyYW5kKTtcbiAgcmV0dXJuIHJhbmQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJhbmRvbW51bWJlcjtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLWdsb2JhbHMgKi9cbmZ1bmN0aW9uIHNob3dTY29yZSgpIHtcbiAgY29uc3Qgc2NvcmVCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY29yZWJvYXJkJyk7XG4gIGNvbnN0IGdvVG9NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdvLXRvLW1lbnUnKTtcbiAgY29uc3QgdG90YWxTY29yZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dhbWVTdG9yYWdlJykpO1xuICBjb25zdCBzY29yZXMgPSBPYmplY3Qua2V5cyh0b3RhbFNjb3JlKTtcbiAgY29uc3QgcGxheWVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5ZWQnKTtcbiAgY29uc3QgcmVzdWx0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zY29yZWQnKTtcbiAgc2NvcmVzLnJldmVyc2UoKTtcbiAgcmVzdWx0cy5mb3JFYWNoKChlbGVtLCBpbmRleCkgPT4ge1xuICAgIGlmIChzY29yZXNbaW5kZXhdKSB7XG4gICAgICBlbGVtLmlubmVySFRNTCA9IHNjb3Jlc1tpbmRleF07XG4gICAgICBlbGVtLnN0eWxlLmJvcmRlckJvdHRvbSA9ICcxcHggc29saWQgYmxhY2snO1xuICAgIH1cbiAgfSk7XG4gIHBsYXllcnMuZm9yRWFjaCgoZWxlbSwgaW5kZXgpID0+IHtcbiAgICBpZiAodG90YWxTY29yZVtzY29yZXNbaW5kZXhdXSkge1xuICAgICAgZWxlbS5pbm5lckhUTUwgPSB0b3RhbFNjb3JlW3Njb3Jlc1tpbmRleF1dO1xuICAgICAgZWxlbS5zdHlsZS5ib3JkZXJCb3R0b20gPSAnMXB4IHNvbGlkIGJsYWNrJztcbiAgICB9XG4gIH0pO1xuICBzY29yZUJvYXJkLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gIGdvVG9NZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbG9jYXRpb24ucmVsb2FkKCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzaG93U2NvcmU7XG4iLCJpbXBvcnQgc3BlbGxNYWtlciBmcm9tICcuL3NwZWxsbWFrZXInO1xuXG5mdW5jdGlvbiBzcGVsbGNhc3QoZXZlbnQpIHtcbiAgc3dpdGNoIChldmVudC50YXJnZXQuaWQpIHtcbiAgICBjYXNlICdzcGVsbC0xJzpcbiAgICAgIHNwZWxsTWFrZXIoJ9CX0LDQutC70LjQvdCw0L3QuNC1IDEnLCAwLCAxMCwgMTApO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnc3BlbGwtMic6XG4gICAgICBzcGVsbE1ha2VyKCfQl9Cw0LrQu9C40L3QsNC90LjQtSAyJywgMTAsIDUwLCAyMCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzcGVsbC0zJzpcbiAgICAgIHNwZWxsTWFrZXIoJ9CX0LDQutC70LjQvdCw0L3QuNC1IDMnLCAxMCwgMTAwLCAzMCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzcGVsbC00JzpcbiAgICAgIHNwZWxsTWFrZXIoJ9CX0LDQutC70LjQvdCw0L3QuNC1IDQnLCAwLCAxMDAwLCA1MCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdjbG9zZS1zcGVsbHMnOiB7XG4gICAgICBjb25zdCBzcGVsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3BlbGxzJyk7XG4gICAgICBzcGVsbHMuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBzcGVsbGNhc3Q7XG4iLCJpbXBvcnQgbWFrZVF1ZXN0IGZyb20gJy4vcXVlc3RtYWtlcic7XG5pbXBvcnQgZG9EYW1hZ2UgZnJvbSAnLi9zdWNjZXNzLWNhc3QnO1xuaW1wb3J0IHJlY2VpdmVEYW1hZ2UgZnJvbSAnLi9mYWlsZWQtY2FzdCc7XG5cbmZ1bmN0aW9uIHNwZWxsTWFrZXIoc3BlbGxuYW1lLCBtaW4sIG1heCwgZGFtYWdlKSB7XG4gIGNvbnN0IHF1ZXN0ID0gbWFrZVF1ZXN0KG1pbiwgbWF4KTtcbiAgY29uc3Qgc3BlbGxOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwZWxsLW5hbWUnKTtcbiAgc3BlbGxOYW1lLmlubmVySFRNTCA9IHNwZWxsbmFtZTtcblxuICBjb25zdCBzcGVsbFF1ZXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwZWxsLXF1ZXN0Jyk7XG4gIHNwZWxsUXVlc3QuaW5uZXJIVE1MID0gcXVlc3QudGFzaztcblxuICBjb25zdCBxdWVzdFNjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5xdWVzdC1zY3JlZW4nKTtcbiAgcXVlc3RTY3JlZW4uc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcblxuICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0LWNhc3QnKTtcbiAgc3VibWl0QnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbiBjaGVja0Nhc3QoKSB7XG4gICAgY29uc3QgcGxheWVyQW5zd2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1ZXN0LWFuc3dlcicpLnZhbHVlO1xuICAgIGlmIChwbGF5ZXJBbnN3ZXIgPT09IHF1ZXN0LnJlc3VsdCkge1xuICAgICAgZG9EYW1hZ2UoZGFtYWdlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVjZWl2ZURhbWFnZShkYW1hZ2UpO1xuICAgIH1cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVlc3QtYW5zd2VyJykudmFsdWUgPSAnJztcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3BlbGxNYWtlcjtcbiIsImZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcbiAgY29uc3QgcE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucC1uYW1lJykudmFsdWU7XG4gIGNvbnN0IGZQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhY2tncm91bmQtZi1wYWdlJyk7XG4gIGNvbnN0IHBsYXllck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLW5hbWUnKTtcbiAgcGxheWVyTmFtZS5pbm5lckhUTUwgPSBwTmFtZTtcbiAgZlBhZ2Uuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdGFydEdhbWU7XG4iLCJpbXBvcnQgZ2FtZW92ZXIgZnJvbSAnLi9nYW1lb3Zlcic7XG5cbmZ1bmN0aW9uIHN1Y2Nlc3NDYXN0KGRhbWFnZSkge1xuICBjb25zdCBzcGVsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3BlbGxzJyk7XG4gIGNvbnN0IHF1ZXN0U2NyZWVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnF1ZXN0LXNjcmVlbicpO1xuICBjb25zdCBtSCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb25zdGVyLWhlYWx0aCcpO1xuICBjb25zdCBtb25IZWFsdGhiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbS1oZWFsdGhiYXInKTtcbiAgbGV0IG1vbnN0ZXJIZWFsdGggPSBtSC5pbm5lckhUTUwuc3BsaXQoJyAnKVswXTtcbiAgc3BlbGxzLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgcXVlc3RTY3JlZW4uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICBtb25zdGVySGVhbHRoIC09IGRhbWFnZTtcbiAgbUguaW5uZXJIVE1MID0gYCR7bW9uc3RlckhlYWx0aH0gSFBgO1xuICBpZiAobW9uc3RlckhlYWx0aCA8PSAwKSB7XG4gICAgZ2FtZW92ZXIoJ3dpbicpO1xuICB9XG4gIG1vbkhlYWx0aGJhci5zdHlsZS5iYWNrZ3JvdW5kID0gYGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZWQgJHsxMDAgLSBtb25zdGVySGVhbHRofSUsIGxpZ2h0Z3JlZW4gJHsxMDAgLSBtb25zdGVySGVhbHRoICsgNX0lKWA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN1Y2Nlc3NDYXN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==