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

/***/ "./src/add-new-score.js":
/*!******************************!*\
  !*** ./src/add-new-score.js ***!
  \******************************/
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
  console.log(resultScore);
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
/* harmony import */ var _add_new_score__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-new-score */ "./src/add-new-score.js");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init */ "./src/init.js");
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
    location.reload();
  }
  function startNewGame() {
    Object(_add_new_score__WEBPACK_IMPORTED_MODULE_0__["default"])(plName, finalScore);
    Object(_init__WEBPACK_IMPORTED_MODULE_1__["default"])();
    newGame.removeEventListener('click', startNewGame);
    endgame.removeEventListener('click', goToScoreboard);
  }
  function continueGame() {
    Object(_add_new_score__WEBPACK_IMPORTED_MODULE_0__["default"])(plName, finalScore);
    Object(_init__WEBPACK_IMPORTED_MODULE_1__["default"])();
    newGame.removeEventListener('click', continueGame);
    endgame.removeEventListener('click', goToScoreboard);
  }

  if (result === 'lose') {
    winLoseMessage.innerHTML = 'You lost, Do you want to start new Game?';
    newGame.innerHTML = 'New Game';
    endgame.innerHTML = 'Game Over';
    newGame.addEventListener('click', startNewGame);
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
  const winLoseScreen = document.querySelector('.win-lose-screen');
  winLoseScreen.style.visibility = 'hidden';
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
      Object(_spellmaker__WEBPACK_IMPORTED_MODULE_0__["default"])('Заклинание 4', 0, 1000, 100);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkZC1uZXctc2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsY3VsYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9jaG9vc2Utc3BlbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZhaWxlZC1jYXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lb3Zlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5pdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9uc3Rlci1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9uc3Rlci1uYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9xdWVzdG1ha2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9yYW5kb21pemVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zcGVsbGNhc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NwZWxsbWFrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXJ0LWdhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N1Y2Nlc3MtY2FzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFF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QUFDQSxpQkFBaUIsMERBQVM7QUFDMUI7QUFDQTs7QUFFZSx3RUFBUyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDZHpCO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSwyRUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDTjVCO0FBQUE7QUFBc0M7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBLE1BQU0sMkRBQVU7QUFDaEI7QUFDQTtBQUNBLE1BQU0sMkRBQVU7QUFDaEI7QUFDQTtBQUNBLE1BQU0sMkRBQVU7QUFDaEI7QUFDQTtBQUNBLE1BQU0sMkRBQVU7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsd0VBQVMsRUFBQzs7Ozs7Ozs7Ozs7OztBQzFCekI7QUFBQTtBQUFBO0FBQUE7QUFBcUM7QUFDQztBQUNJOztBQUUxQztBQUNBLGdCQUFnQiwyREFBUztBQUN6QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sNkRBQVE7QUFDZCxLQUFLO0FBQ0wsTUFBTSw0REFBYTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFZSx5RUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDM0IxQjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLHdFQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNSekI7QUFBQTtBQUFrQzs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGNBQWM7QUFDbEM7QUFDQSxJQUFJLHlEQUFRO0FBQ1o7QUFDQSxrRUFBa0Usb0JBQW9CLGdCQUFnQix3QkFBd0I7QUFDOUg7O0FBRWUsMEVBQVcsRUFBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYXBwLmpzXCIpO1xuIiwiZnVuY3Rpb24gYWRkU2NvcmUocGxheWVyTmFtZSwgcGxheWVyU2NvcmUpIHtcbiAgY29uc3QgcmVzdWx0U2NvcmUgPSB7fTtcbiAgY29uc3QgdG90YWxTY29yZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dhbWVTdG9yYWdlJykpO1xuICB0b3RhbFNjb3JlW3BsYXllclNjb3JlXSA9IHBsYXllck5hbWU7XG4gIGNvbnN0IHNjb3JlcyA9IE9iamVjdC5rZXlzKHRvdGFsU2NvcmUpO1xuICBzY29yZXMucmV2ZXJzZSgpO1xuICBpZiAoc2NvcmVzLmxlbmd0aCA+IDEwKSB7XG4gICAgc2NvcmVzLmxlbmd0aCA9IDEwO1xuICB9XG4gIHNjb3Jlcy5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgcmVzdWx0U2NvcmVbZWxlbV0gPSB0b3RhbFNjb3JlW2VsZW1dO1xuICB9KTtcbiAgY29uc29sZS5sb2cocmVzdWx0U2NvcmUpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZ2FtZVN0b3JhZ2UnLCBKU09OLnN0cmluZ2lmeShyZXN1bHRTY29yZSkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhZGRTY29yZTtcbiIsImltcG9ydCBpbml0IGZyb20gJy4vaW5pdCc7XG5pbXBvcnQgc3RhcnRHYW1lIGZyb20gJy4vc3RhcnQtZ2FtZSc7XG5pbXBvcnQgY2hvb3NlU3BlbGwgZnJvbSAnLi9jaG9vc2Utc3BlbGwnO1xuXG5jb25zdCBiYXR0bGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG8tYmF0dGxlJyk7XG5jb25zdCBhdHRhY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXR0YWNrLWJ1dHRvbicpO1xuYXR0YWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hvb3NlU3BlbGwpO1xuYmF0dGxlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RhcnRHYW1lKTtcbmluaXQoKTtcbiIsImZ1bmN0aW9uIGNhbGN1bGF0ZShudW0xLCBzaWduLCBudW0yKSB7XG4gIGxldCByZXN1bHQgPSAwO1xuICBzd2l0Y2ggKHNpZ24pIHtcbiAgICBjYXNlICcgKyAnOlxuICAgICAgcmVzdWx0ID0gbnVtMSArIG51bTI7XG4gICAgICBicmVhaztcbiAgICBjYXNlICcgLSAnOlxuICAgICAgcmVzdWx0ID0gbnVtMSAtIG51bTI7XG4gICAgICBicmVhaztcbiAgICBjYXNlICcgKiAnOlxuICAgICAgcmVzdWx0ID0gbnVtMSAqIG51bTI7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWs7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2FsY3VsYXRlO1xuIiwiaW1wb3J0IHNwZWxsY2FzdCBmcm9tICcuL3NwZWxsY2FzdCc7XG5cbmZ1bmN0aW9uIGNob29zZVNwZWxsKCkge1xuICBjb25zdCBzcGVsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3BlbGxzJyk7XG4gIHNwZWxscy5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICBzcGVsbHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzcGVsbGNhc3QpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjaG9vc2VTcGVsbDtcbiIsImltcG9ydCBnYW1lb3ZlciBmcm9tICcuL2dhbWVvdmVyJztcblxuZnVuY3Rpb24gZmFpbGVkQ2FzdChkYW1hZ2UpIHtcbiAgY29uc3Qgc3BlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwZWxscycpO1xuICBjb25zdCBxdWVzdFNjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5xdWVzdC1zY3JlZW4nKTtcbiAgY29uc3QgcGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLWhlYWx0aCcpO1xuICBjb25zdCBwbEhlYWx0aGJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwLWhlYWx0aGJhcicpO1xuICBsZXQgcGxheWVySGVhbHRoID0gcGguaW5uZXJIVE1MLnNwbGl0KCcgJylbMF07XG4gIHNwZWxscy5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gIHF1ZXN0U2NyZWVuLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgcGxheWVySGVhbHRoIC09IGRhbWFnZTtcbiAgaWYgKHBsYXllckhlYWx0aCA8PSAwKSB7XG4gICAgZ2FtZW92ZXIoJ2xvc2UnKTtcbiAgfVxuICBwaC5pbm5lckhUTUwgPSBgJHtwbGF5ZXJIZWFsdGh9IEhQYDtcbiAgcGxIZWFsdGhiYXIuc3R5bGUuYmFja2dyb3VuZCA9IGBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJlZCAkezEwMCAtIHBsYXllckhlYWx0aH0lLCBsaWdodGdyZWVuICR7MTAwIC0gcGxheWVySGVhbHRoICsgNX0lKWA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZhaWxlZENhc3Q7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLWdsb2JhbHMgKi9cbmltcG9ydCBhZGRTY29yZSBmcm9tICcuL2FkZC1uZXctc2NvcmUnO1xuaW1wb3J0IGluaXQgZnJvbSAnLi9pbml0JztcblxubGV0IGZpbmFsU2NvcmUgPSAwO1xuXG5mdW5jdGlvbiBnYW1lb3ZlcihyZXN1bHQpIHtcbiAgY29uc3Qgd2luTG9zZVNjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW4tbG9zZS1zY3JlZW4nKTtcbiAgY29uc3Qgd2luTG9zZU1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luLWxvc2UtbWVzc2FnZScpO1xuICBjb25zdCBuZXdHYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1nYW1lJyk7XG4gIGNvbnN0IGVuZGdhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW5kLWdhbWUnKTtcbiAgY29uc3QgcGxOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1uYW1lJykuaW5uZXJIVE1MO1xuICBjb25zdCBtSGVhbHRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vbnN0ZXItaGVhbHRoJykuaW5uZXJIVE1MLnNwbGl0KCcgJylbMF07XG4gIGZpbmFsU2NvcmUgKz0gMTAwIC0gbUhlYWx0aDtcblxuICBmdW5jdGlvbiBnb1RvU2NvcmVib2FyZCgpIHtcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgfVxuICBmdW5jdGlvbiBzdGFydE5ld0dhbWUoKSB7XG4gICAgYWRkU2NvcmUocGxOYW1lLCBmaW5hbFNjb3JlKTtcbiAgICBpbml0KCk7XG4gICAgbmV3R2FtZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0TmV3R2FtZSk7XG4gICAgZW5kZ2FtZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGdvVG9TY29yZWJvYXJkKTtcbiAgfVxuICBmdW5jdGlvbiBjb250aW51ZUdhbWUoKSB7XG4gICAgYWRkU2NvcmUocGxOYW1lLCBmaW5hbFNjb3JlKTtcbiAgICBpbml0KCk7XG4gICAgbmV3R2FtZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbnRpbnVlR2FtZSk7XG4gICAgZW5kZ2FtZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGdvVG9TY29yZWJvYXJkKTtcbiAgfVxuXG4gIGlmIChyZXN1bHQgPT09ICdsb3NlJykge1xuICAgIHdpbkxvc2VNZXNzYWdlLmlubmVySFRNTCA9ICdZb3UgbG9zdCwgRG8geW91IHdhbnQgdG8gc3RhcnQgbmV3IEdhbWU/JztcbiAgICBuZXdHYW1lLmlubmVySFRNTCA9ICdOZXcgR2FtZSc7XG4gICAgZW5kZ2FtZS5pbm5lckhUTUwgPSAnR2FtZSBPdmVyJztcbiAgICBuZXdHYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RhcnROZXdHYW1lKTtcbiAgICBlbmRnYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ29Ub1Njb3JlYm9hcmQpO1xuICB9IGVsc2Uge1xuICAgIHdpbkxvc2VNZXNzYWdlLmlubmVySFRNTCA9ICdZb3UgV29uISBEbyB5b3Ugd2FudCB0byBmaWdodCBhbm90aGVyIG1vbnN0ZXI/JztcbiAgICBuZXdHYW1lLmlubmVySFRNTCA9ICdMZXRcXCdzIGZpZ2h0JztcbiAgICBlbmRnYW1lLmlubmVySFRNTCA9ICdHYW1lIE92ZXInO1xuICAgIG5ld0dhbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb250aW51ZUdhbWUpO1xuICAgIGVuZGdhbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnb1RvU2NvcmVib2FyZCk7XG4gIH1cbiAgd2luTG9zZVNjcmVlbi5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnYW1lb3ZlcjtcbiIsImltcG9ydCBtb25zdGVyQ29uc3RydWN0IGZyb20gJy4vbW9uc3Rlci1jb25zdHJ1Y3Rvcic7XG5pbXBvcnQgbW9uc3Rlck5hbWVDb25zdHJ1Y3QgZnJvbSAnLi9tb25zdGVyLW5hbWUnO1xuXG5mdW5jdGlvbiBpbml0KCkge1xuICBjb25zdCBwbGF5ZXJTdGF0dXMgPSAxMDA7XG4gIGNvbnN0IG1vbnN0ZXJTdGF0dXMgPSAxMDA7XG4gIGlmICghKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnYW1lU3RvcmFnZScpKSkge1xuICAgIGNvbnN0IHNjb3JlYm9hcmQgPSB7fTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZ2FtZVN0b3JhZ2UnLCBKU09OLnN0cmluZ2lmeShzY29yZWJvYXJkKSk7XG4gIH1cbiAgY29uc3QgbW9uc3RlcnBhcnRzID0gbW9uc3RlckNvbnN0cnVjdCgpO1xuICBjb25zdCBtb25zdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vbnN0ZXItcGFydCcpO1xuICBtb25zdGVyLmZvckVhY2goKGVsZW0sIGluZGV4KSA9PiB7XG4gICAgY29uc3QgZWwgPSBlbGVtO1xuICAgIGVsLnNyYyA9IG1vbnN0ZXJwYXJ0c1tpbmRleF07XG4gIH0pO1xuICBjb25zdCBtb25OYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vbnN0ZXItbmFtZScpO1xuICBtb25OYW1lLmlubmVySFRNTCA9IG1vbnN0ZXJOYW1lQ29uc3RydWN0KCk7XG4gIGNvbnN0IG1vbkhwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vbnN0ZXItaGVhbHRoJyk7XG4gIG1vbkhwLmlubmVySFRNTCA9IGAke21vbnN0ZXJTdGF0dXN9IEhQYDtcbiAgY29uc3QgcGxIcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItaGVhbHRoJyk7XG4gIHBsSHAuaW5uZXJIVE1MID0gYCR7cGxheWVyU3RhdHVzfSBIUGA7XG5cbiAgY29uc3QgcGxIZWFsdGhiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncC1oZWFsdGhiYXInKTtcbiAgY29uc3QgbW9uSGVhbHRoYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ20taGVhbHRoYmFyJyk7XG4gIHBsSGVhbHRoYmFyLnN0eWxlLmJhY2tncm91bmQgPSBgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZWQgJHsxMDAgLSBwbGF5ZXJTdGF0dXN9JSwgbGlnaHRncmVlbiAkezEwMCAtIHBsYXllclN0YXR1c30lKWA7XG4gIG1vbkhlYWx0aGJhci5zdHlsZS5iYWNrZ3JvdW5kID0gYGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZWQgJHsxMDAgLSBtb25zdGVyU3RhdHVzfSUsIGxpZ2h0Z3JlZW4gJHsxMDAgLSBtb25zdGVyU3RhdHVzfSUpYDtcbiAgY29uc3Qgd2luTG9zZVNjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW4tbG9zZS1zY3JlZW4nKTtcbiAgd2luTG9zZVNjcmVlbi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXQ7XG4iLCJpbXBvcnQgcmFuZG9tIGZyb20gJy4vcmFuZG9taXplcic7XG5cbmZ1bmN0aW9uIG1vbnN0ZXJDb25zdHJ1Y3QoKSB7XG4gIGNvbnN0IGhlYWRzID0gWydpbWcvaGVhZC0xLnBuZycsICdpbWcvaGVhZC0yLnBuZycsICdpbWcvaGVhZC0zLnBuZyddO1xuICBjb25zdCBib2RpZXMgPSBbJ2ltZy9ib2R5LTEucG5nJywgJ2ltZy9ib2R5LTIucG5nJywgJ2ltZy9ib2R5LTMucG5nJ107XG4gIGNvbnN0IGxlZ3MgPSBbJ2ltZy9sZWdzLTEucG5nJywgJ2ltZy9sZWdzLTIucG5nJywgJ2ltZy9sZWdzLTMucG5nJ107XG4gIGNvbnN0IHJlc3VsdCA9IFtdO1xuICBjb25zdCBtYXggPSBoZWFkcy5sZW5ndGggLSAxO1xuICByZXN1bHQucHVzaChoZWFkc1tyYW5kb20oMCwgbWF4KV0pO1xuICByZXN1bHQucHVzaChib2RpZXNbcmFuZG9tKDAsIG1heCldKTtcbiAgcmVzdWx0LnB1c2gobGVnc1tyYW5kb20oMCwgbWF4KV0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0IGRlZmF1bHQgbW9uc3RlckNvbnN0cnVjdDtcbiIsImltcG9ydCByYW5kb20gZnJvbSAnLi9yYW5kb21pemVyJztcblxuZnVuY3Rpb24gbU5hbWVDb25zdHJ1Y3QoKSB7XG4gIGNvbnN0IGZpcnN0UGFydCA9IFsn0JbRg9GC0LrQuNC5JywgJ9Ch0YLRgNCw0YjQvdGL0LknLCAn0JfQu9C+0LknLCAn0KPQttCw0YHQvdGL0LknLCAn0JLQvtC90Y7Rh9C40LknLCAn0JPQvtC70L7QtNC90YvQuScsICfQl9Cy0LXRgNGB0LrQuNC5J107XG4gIGNvbnN0IHNlY29uZFBhcnQgPSBbJ9C/0L7QttC40YDQsNGC0LXQu9GMJywgJ9C70Y7QtNC+0LXQtCcsICfQt9C+0LzQsdC4JywgJ9C30LLQtdGA0YwnLCAn0LPRg9C70YwnLCAn0L/QvtC10LTQsNGC0LXQu9GMJywgJ9C/0YDQuNC30YDQsNC6J107XG4gIGNvbnN0IHRoaXJkUGFydCA9IFsn0JzQsNC50LrQuycsICfQpNGA0LXQtNC00LgnLCAn0JTQttC+0L3QvdC4JywgJ9CR0YPQsdCx0LAnLCAn0JTQttC10LnRgdC+0L0nLCAn0KjRgtC40L8nLCAn0JDQsdCw0YLRg9GAJ107XG4gIGNvbnN0IG1heCA9IGZpcnN0UGFydC5sZW5ndGggLSAxO1xuICBjb25zdCByZXN1bHQgPSBgJHtmaXJzdFBhcnRbcmFuZG9tKDAsIG1heCldfSAke3NlY29uZFBhcnRbcmFuZG9tKDAsIG1heCldfSAke3RoaXJkUGFydFtyYW5kb20oMCwgbWF4KV19YDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydCBkZWZhdWx0IG1OYW1lQ29uc3RydWN0O1xuIiwiaW1wb3J0IHJhbmRvbWl6ZXIgZnJvbSAnLi9yYW5kb21pemVyJztcbmltcG9ydCBjYWxjdWxhdGUgZnJvbSAnLi9jYWxjdWxhdGUnO1xuXG5mdW5jdGlvbiBtYWtlUXVlc3QobWluLCBtYXgpIHtcbiAgY29uc3QgcXVlc3QgPSB7fTtcbiAgY29uc3Qgc2lnbnMgPSBbJyArICcsICcgLSAnLCAnICogJywgJyArICcsICcgLSAnLCAnICogJ107XG4gIGNvbnN0IGZpcnN0TnVtYmVyID0gcmFuZG9taXplcihtaW4sIG1heCk7XG4gIGNvbnN0IHNlY29uZE51bWJlciA9IHJhbmRvbWl6ZXIobWluLCBtYXgpO1xuICBjb25zdCBzaWduID0gc2lnbnNbcmFuZG9taXplcigwLCBzaWducy5sZW5ndGggLSAxKV07XG4gIHF1ZXN0LnRhc2sgPSBmaXJzdE51bWJlciArIHNpZ24gKyBzZWNvbmROdW1iZXI7XG4gIHF1ZXN0LnJlc3VsdCA9IGNhbGN1bGF0ZShmaXJzdE51bWJlciwgc2lnbiwgc2Vjb25kTnVtYmVyKS50b1N0cmluZygpO1xuICByZXR1cm4gcXVlc3Q7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VRdWVzdDtcbiIsImZ1bmN0aW9uIHJhbmRvbW51bWJlcihtaW4sIG1heCkge1xuICBsZXQgcmFuZCA9IG1pbiArIE1hdGgucmFuZG9tKCkgKiAobWF4ICsgMSAtIG1pbik7XG4gIHJhbmQgPSBNYXRoLmZsb29yKHJhbmQpO1xuICByZXR1cm4gcmFuZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmFuZG9tbnVtYmVyO1xuIiwiaW1wb3J0IHNwZWxsTWFrZXIgZnJvbSAnLi9zcGVsbG1ha2VyJztcblxuZnVuY3Rpb24gc3BlbGxjYXN0KGV2ZW50KSB7XG4gIHN3aXRjaCAoZXZlbnQudGFyZ2V0LmlkKSB7XG4gICAgY2FzZSAnc3BlbGwtMSc6XG4gICAgICBzcGVsbE1ha2VyKCfQl9Cw0LrQu9C40L3QsNC90LjQtSAxJywgMCwgMTAsIDEwKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3NwZWxsLTInOlxuICAgICAgc3BlbGxNYWtlcign0JfQsNC60LvQuNC90LDQvdC40LUgMicsIDEwLCA1MCwgMjApO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnc3BlbGwtMyc6XG4gICAgICBzcGVsbE1ha2VyKCfQl9Cw0LrQu9C40L3QsNC90LjQtSAzJywgMTAsIDEwMCwgMzApO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnc3BlbGwtNCc6XG4gICAgICBzcGVsbE1ha2VyKCfQl9Cw0LrQu9C40L3QsNC90LjQtSA0JywgMCwgMTAwMCwgMTAwKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2Nsb3NlLXNwZWxscyc6IHtcbiAgICAgIGNvbnN0IHNwZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcGVsbHMnKTtcbiAgICAgIHNwZWxscy5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIGJyZWFrO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNwZWxsY2FzdDtcbiIsImltcG9ydCBtYWtlUXVlc3QgZnJvbSAnLi9xdWVzdG1ha2VyJztcbmltcG9ydCBkb0RhbWFnZSBmcm9tICcuL3N1Y2Nlc3MtY2FzdCc7XG5pbXBvcnQgcmVjZWl2ZURhbWFnZSBmcm9tICcuL2ZhaWxlZC1jYXN0JztcblxuZnVuY3Rpb24gc3BlbGxNYWtlcihzcGVsbG5hbWUsIG1pbiwgbWF4LCBkYW1hZ2UpIHtcbiAgY29uc3QgcXVlc3QgPSBtYWtlUXVlc3QobWluLCBtYXgpO1xuICBjb25zdCBzcGVsbE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3BlbGwtbmFtZScpO1xuICBzcGVsbE5hbWUuaW5uZXJIVE1MID0gc3BlbGxuYW1lO1xuXG4gIGNvbnN0IHNwZWxsUXVlc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3BlbGwtcXVlc3QnKTtcbiAgc3BlbGxRdWVzdC5pbm5lckhUTUwgPSBxdWVzdC50YXNrO1xuXG4gIGNvbnN0IHF1ZXN0U2NyZWVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnF1ZXN0LXNjcmVlbicpO1xuICBxdWVzdFNjcmVlbi5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuXG4gIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXQtY2FzdCcpO1xuICBzdWJtaXRCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uIGNoZWNrQ2FzdCgpIHtcbiAgICBjb25zdCBwbGF5ZXJBbnN3ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVlc3QtYW5zd2VyJykudmFsdWU7XG4gICAgaWYgKHBsYXllckFuc3dlciA9PT0gcXVlc3QucmVzdWx0KSB7XG4gICAgICBkb0RhbWFnZShkYW1hZ2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZWNlaXZlRGFtYWdlKGRhbWFnZSk7XG4gICAgfVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxdWVzdC1hbnN3ZXInKS52YWx1ZSA9ICcnO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBzcGVsbE1ha2VyO1xuIiwiZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xuICBjb25zdCBwTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wLW5hbWUnKS52YWx1ZTtcbiAgY29uc3QgZlBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFja2dyb3VuZC1mLXBhZ2UnKTtcbiAgY29uc3QgcGxheWVyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItbmFtZScpO1xuICBwbGF5ZXJOYW1lLmlubmVySFRNTCA9IHBOYW1lO1xuICBmUGFnZS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0YXJ0R2FtZTtcbiIsImltcG9ydCBnYW1lb3ZlciBmcm9tICcuL2dhbWVvdmVyJztcblxuZnVuY3Rpb24gc3VjY2Vzc0Nhc3QoZGFtYWdlKSB7XG4gIGNvbnN0IHNwZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcGVsbHMnKTtcbiAgY29uc3QgcXVlc3RTY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucXVlc3Qtc2NyZWVuJyk7XG4gIGNvbnN0IG1IID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vbnN0ZXItaGVhbHRoJyk7XG4gIGNvbnN0IG1vbkhlYWx0aGJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtLWhlYWx0aGJhcicpO1xuICBsZXQgbW9uc3RlckhlYWx0aCA9IG1ILmlubmVySFRNTC5zcGxpdCgnICcpWzBdO1xuICBzcGVsbHMuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICBxdWVzdFNjcmVlbi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gIG1vbnN0ZXJIZWFsdGggLT0gZGFtYWdlO1xuICBtSC5pbm5lckhUTUwgPSBgJHttb25zdGVySGVhbHRofSBIUGA7XG4gIGlmIChtb25zdGVySGVhbHRoIDw9IDApIHtcbiAgICBnYW1lb3Zlcignd2luJyk7XG4gIH1cbiAgbW9uSGVhbHRoYmFyLnN0eWxlLmJhY2tncm91bmQgPSBgbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJlZCAkezEwMCAtIG1vbnN0ZXJIZWFsdGh9JSwgbGlnaHRncmVlbiAkezEwMCAtIG1vbnN0ZXJIZWFsdGggKyA1fSUpYDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3VjY2Vzc0Nhc3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9