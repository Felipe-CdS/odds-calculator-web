/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Calcs.js":
/*!**********************!*\
  !*** ./src/Calcs.js ***!
  \**********************/
/*! namespace exports */
/*! export enterInput [provided] [no usage info] [missing usage info prevents renaming] */
/*! export reset [provided] [no usage info] [missing usage info prevents renaming] */
/*! export revert [provided] [no usage info] [missing usage info prevents renaming] */
/*! export teamOne [provided] [no usage info] [missing usage info prevents renaming] */
/*! export teamTwo [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"teamOne\": () => /* binding */ teamOne,\n/* harmony export */   \"teamTwo\": () => /* binding */ teamTwo,\n/* harmony export */   \"enterInput\": () => /* binding */ enterInput,\n/* harmony export */   \"revert\": () => /* binding */ revert,\n/* harmony export */   \"reset\": () => /* binding */ reset\n/* harmony export */ });\nvar teamOne = {\n  name: \"Team One\",\n  odds: [],\n  values: [],\n  totalSpent: 0,\n  totalReturn: 0,\n  liquidIncome: 0,\n  finalResult: 0,\n  equalPoint: {\n    odd: 0,\n    value: 0\n  },\n  oddsListPath: document.getElementsByClassName(\"odds-list-container\")[0],\n  valuesListPath: document.getElementsByClassName(\"values-list-container\")[0],\n  resultsPath: document.getElementsByClassName(\"results-list-container\")[0]\n};\nvar teamTwo = {\n  name: \"Team Two\",\n  odds: [],\n  values: [],\n  totalSpent: 0,\n  totalReturn: 0,\n  liquidIncome: 0,\n  finalResult: 0,\n  equalPoint: {\n    odd: 0,\n    value: 0\n  },\n  oddsListPath: document.getElementsByClassName(\"odds-list-container\")[1],\n  valuesListPath: document.getElementsByClassName(\"values-list-container\")[1],\n  resultsPath: document.getElementsByClassName(\"results-list-container\")[1]\n};\nfunction enterInput(team, enemyTeam) {\n  function returnMethod() {\n    if (team.odds.length < 5) {\n      var teamOneOddsList = document.getElementsByClassName(\"odds-list-container\")[0];\n      var teamOneValuesList = document.getElementsByClassName(\"values-list-container\")[0];\n      var teamTwoOddsList = document.getElementsByClassName(\"odds-list-container\")[1];\n      var teamTwoValuesList = document.getElementsByClassName(\"values-list-container\")[1];\n\n      if (team.name == \"Team One\") {\n        if (teamOneOddsList.querySelector(\".odds-input-form\").value != \"\" && teamOneValuesList.querySelector(\".values-input-form\").value != \"\") {\n          teamOne.odds.push(inputTreatement(teamOneOddsList.querySelector(\".odds-input-form\").value));\n          teamOneOddsList.querySelector(\".odds-input-form\").value = \"\";\n          teamOne.values.push(inputTreatement(teamOneValuesList.querySelector(\".values-input-form\").value));\n          teamOneValuesList.querySelector(\".values-input-form\").value = \"\";\n          teamOneUpdate(teamOneOddsList, teamOneValuesList);\n        }\n      } else {\n        if (teamTwoOddsList.querySelector(\".odds-input-form\").value != \"\" && teamTwoValuesList.querySelector(\".values-input-form\").value != \"\") {\n          teamTwo.odds.push(inputTreatement(teamTwoOddsList.querySelector(\".odds-input-form\").value));\n          teamTwoOddsList.querySelector(\".odds-input-form\").value = \"\";\n          teamTwo.values.push(inputTreatement(teamTwoValuesList.querySelector(\".values-input-form\").value));\n          teamTwoValuesList.querySelector(\".values-input-form\").value = \"\";\n          teamTwoUpdate(teamTwoOddsList, teamTwoValuesList);\n        }\n      }\n\n      totalSpentCalc(team);\n      totalReturnCalc(team);\n      liquidIncome(team);\n      finalResultUpdate();\n      equalValueCalc(team, enemyTeam);\n    }\n  }\n\n  return returnMethod;\n}\nfunction revert(team, enemyTeam) {\n  function returnMethod() {\n    var teamOneOddsList = document.getElementsByClassName(\"odds-list-container\")[0];\n    var teamOneValuesList = document.getElementsByClassName(\"values-list-container\")[0];\n    var teamTwoOddsList = document.getElementsByClassName(\"odds-list-container\")[1];\n    var teamTwoValuesList = document.getElementsByClassName(\"values-list-container\")[1];\n\n    if (team.name == \"Team One\") {\n      teamOne.odds.pop();\n      teamOne.values.pop();\n      teamOneUpdate(teamOneOddsList, teamOneValuesList);\n    } else {\n      teamTwo.odds.pop();\n      teamTwo.values.pop();\n      teamTwoUpdate(teamTwoOddsList, teamTwoValuesList);\n    }\n\n    totalSpentCalc(team);\n    totalReturnCalc(team);\n    liquidIncome(team);\n    finalResultUpdate();\n    equalValueCalc(team, enemyTeam);\n  }\n\n  return returnMethod;\n}\nfunction reset(team, enemyTeam) {\n  function returnMethod() {\n    var teamOneOddsList = document.getElementsByClassName(\"odds-list-container\")[0];\n    var teamOneValuesList = document.getElementsByClassName(\"values-list-container\")[0];\n    var teamTwoOddsList = document.getElementsByClassName(\"odds-list-container\")[1];\n    var teamTwoValuesList = document.getElementsByClassName(\"values-list-container\")[1];\n\n    if (team.name == \"Team One\") {\n      teamOne.odds = [];\n      teamOne.values = [];\n      teamOneUpdate(teamOneOddsList, teamOneValuesList);\n    } else {\n      teamTwo.odds = [];\n      teamTwo.values = [];\n      teamTwoUpdate(teamTwoOddsList, teamTwoValuesList);\n    }\n\n    totalSpentCalc(team);\n    totalReturnCalc(team);\n    liquidIncome(team);\n    finalResultUpdate();\n    equalValueCalc(team, enemyTeam);\n  }\n\n  return returnMethod;\n}\n\nfunction totalSpentCalc(team) {\n  var resultsPath = \"\";\n\n  if (team.name == \"Team One\") {\n    resultsPath = document.getElementsByClassName(\"results-list-container\")[0];\n  } else {\n    resultsPath = document.getElementsByClassName(\"results-list-container\")[1];\n  }\n\n  team.totalSpent = 0;\n  team.values.forEach(function (element) {\n    team.totalSpent += parseFloat(element);\n  });\n  team.totalSpent = team.totalSpent.toFixed(2);\n  resultsPath.querySelector(\".total-spent\").innerHTML = \"\";\n  resultsPath.querySelector(\".total-spent\").innerHTML = \"R$ \".concat(team.totalSpent);\n}\n\nfunction totalReturnCalc(team) {\n  var resultsPath = \"\";\n\n  if (team.name == \"Team One\") {\n    resultsPath = document.getElementsByClassName(\"results-list-container\")[0];\n  } else {\n    resultsPath = document.getElementsByClassName(\"results-list-container\")[1];\n  }\n\n  team.totalReturn = 0;\n\n  for (var i = 0; i < team.values.length; i++) {\n    team.totalReturn += team.values[i] * team.odds[i];\n  }\n\n  team.totalReturn = team.totalReturn.toFixed(2);\n  resultsPath.querySelector(\".total-return\").innerHTML = \"\";\n  resultsPath.querySelector(\".total-return\").innerHTML = \"R$ \".concat(team.totalReturn);\n}\n\nfunction liquidIncome(team) {\n  var resultsPath = \"\";\n\n  if (team.name == \"Team One\") {\n    resultsPath = document.getElementsByClassName(\"results-list-container\")[0];\n  } else {\n    resultsPath = document.getElementsByClassName(\"results-list-container\")[1];\n  }\n\n  team.liquidIncome = team.totalReturn - team.totalSpent;\n  team.liquidIncome = team.liquidIncome.toFixed(2);\n  resultsPath.querySelector(\".liquid-income\").innerHTML = \"\";\n  resultsPath.querySelector(\".liquid-income\").innerHTML = \"R$ \".concat(team.liquidIncome);\n}\n\nfunction inputTreatement(entry) {\n  if (entry.includes(\",\")) {\n    var a = entry.replace(\",\", \".\");\n    return a;\n  } else {\n    return entry;\n  }\n}\n\nfunction teamOneUpdate(teamOneOddsList, teamOneValuesList) {\n  teamOneOddsList.querySelector(\".odds-labels\").innerHTML = \"\";\n  var teamOddsArray = teamOne.odds;\n  teamOddsArray.forEach(function (element) {\n    var input = document.createElement('span');\n    input.appendChild(document.createTextNode(element));\n    teamOneOddsList.querySelector(\".odds-labels\").appendChild(input);\n  });\n  teamOneValuesList.querySelector(\".values-labels\").innerHTML = \"\";\n  var teamValuesArray = teamOne.values;\n  teamValuesArray.forEach(function (element) {\n    var input = document.createElement('span');\n    input.appendChild(document.createTextNode(element));\n    teamOneValuesList.querySelector(\".values-labels\").appendChild(input);\n  });\n}\n\nfunction teamTwoUpdate(teamTwoOddsList, teamTwoValuesList) {\n  teamTwoOddsList.querySelector(\".odds-labels\").innerHTML = \"\";\n  var teamOddsArray = teamTwo.odds;\n  teamOddsArray.forEach(function (element) {\n    var input = document.createElement('span');\n    input.appendChild(document.createTextNode(element));\n    teamTwoOddsList.querySelector(\".odds-labels\").appendChild(input);\n  });\n  teamTwoValuesList.querySelector(\".values-labels\").innerHTML = \"\";\n  var teamValuesArray = teamTwo.values;\n  teamValuesArray.forEach(function (element) {\n    var input = document.createElement('span');\n    input.appendChild(document.createTextNode(element));\n    teamTwoValuesList.querySelector(\".values-labels\").appendChild(input);\n  });\n}\n\nfunction finalResultUpdate() {\n  var finalResultDiv = document.getElementById(\"final-result-labels\");\n  finalResultDiv.innerHTML = \"\";\n  var teamOneCalc = teamOne.liquidIncome - teamTwo.totalSpent;\n  teamOneCalc = teamOneCalc.toFixed(2);\n  var teamTwoCalc = teamTwo.liquidIncome - teamOne.totalSpent;\n  teamTwoCalc = teamTwoCalc.toFixed(2);\n  var teamOneTag = document.createElement(\"strong\");\n  teamOneTag.appendChild(document.createTextNode(\"Team One:\"));\n  var spanElement1 = document.createElement(\"span\");\n  spanElement1.appendChild(document.createTextNode(\"R$ \" + teamOneCalc));\n\n  if (teamOneCalc < 0) {\n    spanElement1.style.backgroundColor = \"red\";\n  } else if (teamOneCalc > 0) {\n    spanElement1.style.backgroundColor = \"green\";\n  }\n\n  var teamTwoTag = document.createElement(\"strong\");\n  teamTwoTag.appendChild(document.createTextNode(\"Team Two:\"));\n  var spanElement2 = document.createElement(\"span\");\n  spanElement2.appendChild(document.createTextNode(\"R$ \" + teamTwoCalc));\n\n  if (teamTwoCalc < 0) {\n    spanElement2.style.backgroundColor = \"red\";\n  } else if (teamTwoCalc > 0) {\n    spanElement2.style.backgroundColor = \"green\";\n  }\n\n  finalResultDiv.appendChild(teamOneTag);\n  finalResultDiv.appendChild(spanElement1);\n  finalResultDiv.appendChild(teamTwoTag);\n  finalResultDiv.appendChild(spanElement2);\n}\n\nfunction equalValueCalc(teamOne, teamTwo) {\n  var equalValueDiv = document.getElementById(\"equal-value-labels\");\n  equalValueDiv.innerHTML = \"\";\n  var result = 0;\n  var teamOneFinalResult = teamOne.liquidIncome - teamTwo.totalSpent;\n  var teamTwoFinalResult = teamTwo.liquidIncome - teamOne.totalSpent;\n  var teamTag, spanElement1, spanElement2;\n\n  if (teamOneFinalResult < 0) {\n    result = Math.abs(teamOneFinalResult) / teamTwoFinalResult;\n    result++;\n    result = result.toFixed(2);\n    teamTag = document.createElement(\"span\");\n    teamTag.appendChild(document.createTextNode(teamOne.name));\n    spanElement1 = document.createElement(\"span\");\n    spanElement1.appendChild(document.createTextNode(\"Value: R$ \" + teamTwoFinalResult.toFixed(2)));\n    spanElement2 = document.createElement(\"span\");\n    spanElement2.appendChild(document.createTextNode(\"odd: \" + result));\n  } else if (teamTwoFinalResult < 0) {\n    result = Math.abs(teamTwoFinalResult) / teamOneFinalResult;\n    result++;\n    result = result.toFixed(2);\n    teamTag = document.createElement(\"span\");\n    teamTag.appendChild(document.createTextNode(teamTwo.name));\n    spanElement1 = document.createElement(\"span\");\n    spanElement1.appendChild(document.createTextNode(\"Value: R$ \" + teamOneFinalResult.toFixed(2)));\n    spanElement2 = document.createElement(\"span\");\n    spanElement2.appendChild(document.createTextNode(\"odd: \" + result));\n  } else {\n    teamTag = document.createElement(\"span\");\n    teamTag.appendChild(document.createTextNode(\"-\"));\n    spanElement1 = document.createElement(\"span\");\n    spanElement1.appendChild(document.createTextNode(\"Value: R$ 0.00\"));\n    spanElement2 = document.createElement(\"span\");\n    spanElement2.appendChild(document.createTextNode(\"odd: 0.00\"));\n  }\n\n  equalValueDiv.appendChild(teamTag);\n  equalValueDiv.appendChild(spanElement1);\n  equalValueDiv.appendChild(spanElement2);\n}\n\n//# sourceURL=webpack://js-studies-app/./src/Calcs.js?");

/***/ }),

/***/ "./src/Main.js":
/*!*********************!*\
  !*** ./src/Main.js ***!
  \*********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Layout_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Layout/index */ \"./src/components/Layout/index.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\nvar Main = function Main() {\n  _classCallCheck(this, Main);\n\n  this.rootEl = document.getElementById('root');\n  var layoutEl = (0,_components_Layout_index__WEBPACK_IMPORTED_MODULE_0__.layout)();\n  this.rootEl.appendChild(layoutEl);\n};\n\nnew Main();\n\n//# sourceURL=webpack://js-studies-app/./src/Main.js?");

/***/ }),

/***/ "./src/components/CalcsContainer/index.js":
/*!************************************************!*\
  !*** ./src/components/CalcsContainer/index.js ***!
  \************************************************/
/*! namespace exports */
/*! export calcsContainer [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"calcsContainer\": () => /* binding */ calcsContainer\n/* harmony export */ });\n/* harmony import */ var _calcsComponents_FinalResult_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../calcsComponents/FinalResult/index */ \"./src/components/calcsComponents/FinalResult/index.js\");\n/* harmony import */ var _calcsComponents_EqualValue_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../calcsComponents/EqualValue/index */ \"./src/components/calcsComponents/EqualValue/index.js\");\n\n\nfunction calcsContainer() {\n  var container = document.createElement('container');\n  container.id = \"calcs-container\";\n  var h2Element = document.createElement('h2');\n  h2Element.appendChild(document.createTextNode(\"Calcs\"));\n  var divElement = document.createElement('div');\n  var finalResultElement = (0,_calcsComponents_FinalResult_index__WEBPACK_IMPORTED_MODULE_0__.finalResult)();\n  var equalValueElement = (0,_calcsComponents_EqualValue_index__WEBPACK_IMPORTED_MODULE_1__.equalValue)();\n  divElement.appendChild(finalResultElement);\n  divElement.appendChild(equalValueElement);\n  container.appendChild(h2Element);\n  container.appendChild(divElement);\n  return container;\n}\n\n//# sourceURL=webpack://js-studies-app/./src/components/CalcsContainer/index.js?");

/***/ }),

/***/ "./src/components/EntriesList/OddsList/index.js":
/*!******************************************************!*\
  !*** ./src/components/EntriesList/OddsList/index.js ***!
  \******************************************************/
/*! namespace exports */
/*! export oddsList [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"oddsList\": () => /* binding */ oddsList\n/* harmony export */ });\nfunction oddsList(oddsArray) {\n  var container = document.createElement(\"container\");\n  container.className = \"odds-list-container\";\n  var strongElement = document.createElement('strong');\n  strongElement.appendChild(document.createTextNode('Odds:'));\n  container.appendChild(strongElement);\n  var divElement = document.createElement('div');\n  divElement.className = \"odds-labels\";\n  container.appendChild(divElement);\n  var inputForm = document.createElement('input');\n  inputForm.className = \"odds-input-form\";\n  inputForm.setAttribute('type', \"text\");\n  container.appendChild(inputForm);\n  return container;\n}\n\n//# sourceURL=webpack://js-studies-app/./src/components/EntriesList/OddsList/index.js?");

/***/ }),

/***/ "./src/components/EntriesList/ResultsList/index.js":
/*!*********************************************************!*\
  !*** ./src/components/EntriesList/ResultsList/index.js ***!
  \*********************************************************/
/*! namespace exports */
/*! export resultsList [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"resultsList\": () => /* binding */ resultsList\n/* harmony export */ });\n/* harmony import */ var _Calcs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Calcs */ \"./src/Calcs.js\");\n\nfunction resultsList(team, enemyTeam) {\n  var container = document.createElement(\"container\");\n  container.className = \"results-list-container\";\n  var strongElement1 = document.createElement('strong');\n  strongElement1.appendChild(document.createTextNode('Total Spent:'));\n  container.appendChild(strongElement1);\n  var spanElement1 = document.createElement('span');\n  spanElement1.className = \"total-spent\";\n  spanElement1.appendChild(document.createTextNode('R$ 0.00'));\n  container.appendChild(spanElement1);\n  var strongElement2 = document.createElement('strong');\n  strongElement2.appendChild(document.createTextNode('Total Return:'));\n  container.appendChild(strongElement2);\n  var spanElement2 = document.createElement('span');\n  spanElement2.className = \"total-return\";\n  spanElement2.appendChild(document.createTextNode('R$ 0.00'));\n  container.appendChild(spanElement2);\n  var strongElement3 = document.createElement('strong');\n  strongElement3.appendChild(document.createTextNode('Liquid Income:'));\n  container.appendChild(strongElement3);\n  var spanElement3 = document.createElement('span');\n  spanElement3.className = \"liquid-income\";\n  spanElement3.appendChild(document.createTextNode('R$ 0.00'));\n  container.appendChild(spanElement3);\n  var divElement = document.createElement('div');\n  var enterButton = document.createElement('button');\n  enterButton.appendChild(document.createTextNode('Enter Input'));\n  enterButton.onclick = (0,_Calcs__WEBPACK_IMPORTED_MODULE_0__.enterInput)(team, enemyTeam);\n  var revertButton = document.createElement('button');\n  revertButton.appendChild(document.createTextNode('Revert'));\n  revertButton.onclick = (0,_Calcs__WEBPACK_IMPORTED_MODULE_0__.revert)(team, enemyTeam);\n  var resetButton = document.createElement('button');\n  resetButton.appendChild(document.createTextNode('Reset'));\n  resetButton.onclick = (0,_Calcs__WEBPACK_IMPORTED_MODULE_0__.reset)(team, enemyTeam);\n  divElement.appendChild(enterButton);\n  divElement.appendChild(revertButton);\n  divElement.appendChild(resetButton);\n  container.appendChild(divElement);\n  return container;\n}\n\n//# sourceURL=webpack://js-studies-app/./src/components/EntriesList/ResultsList/index.js?");

/***/ }),

/***/ "./src/components/EntriesList/ValuesList/index.js":
/*!********************************************************!*\
  !*** ./src/components/EntriesList/ValuesList/index.js ***!
  \********************************************************/
/*! namespace exports */
/*! export valuesList [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"valuesList\": () => /* binding */ valuesList\n/* harmony export */ });\nfunction valuesList(valuesArray) {\n  var container = document.createElement(\"container\");\n  container.className = \"values-list-container\";\n  var strongElement = document.createElement('strong');\n  strongElement.appendChild(document.createTextNode('Values:'));\n  container.appendChild(strongElement);\n  var divElement = document.createElement('div');\n  divElement.className = \"values-labels\";\n  container.appendChild(divElement);\n  var inputForm = document.createElement('input');\n  inputForm.className = \"values-input-form\";\n  inputForm.setAttribute('type', \"text\");\n  container.appendChild(inputForm);\n  return container;\n}\n\n//# sourceURL=webpack://js-studies-app/./src/components/EntriesList/ValuesList/index.js?");

/***/ }),

/***/ "./src/components/Layout/index.js":
/*!****************************************!*\
  !*** ./src/components/Layout/index.js ***!
  \****************************************/
/*! namespace exports */
/*! export layout [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"layout\": () => /* binding */ layout\n/* harmony export */ });\n/* harmony import */ var _TwitchViewer_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../TwitchViewer/index */ \"./src/components/TwitchViewer/index.js\");\n/* harmony import */ var _TablesArea_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../TablesArea/index */ \"./src/components/TablesArea/index.js\");\n\n\nfunction layout() {\n  var divEl = document.createElement('div');\n  divEl.id = \"Layout\";\n  divEl.appendChild((0,_TwitchViewer_index__WEBPACK_IMPORTED_MODULE_0__.twitchViewer)());\n  divEl.appendChild((0,_TablesArea_index__WEBPACK_IMPORTED_MODULE_1__.tablesArea)());\n  return divEl;\n}\n\n//# sourceURL=webpack://js-studies-app/./src/components/Layout/index.js?");

/***/ }),

/***/ "./src/components/TablesArea/index.js":
/*!********************************************!*\
  !*** ./src/components/TablesArea/index.js ***!
  \********************************************/
/*! namespace exports */
/*! export tablesArea [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"tablesArea\": () => /* binding */ tablesArea\n/* harmony export */ });\n/* harmony import */ var _TeamTable_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../TeamTable/index */ \"./src/components/TeamTable/index.js\");\n/* harmony import */ var _Calcs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Calcs */ \"./src/Calcs.js\");\n\n\nfunction tablesArea() {\n  var divEl = document.createElement('div');\n  divEl.id = \"tables-area\";\n  var teamTable1 = (0,_TeamTable_index__WEBPACK_IMPORTED_MODULE_0__.teamTable)(_Calcs__WEBPACK_IMPORTED_MODULE_1__.teamOne, _Calcs__WEBPACK_IMPORTED_MODULE_1__.teamTwo);\n  teamTable1.className = \"team-table\";\n  teamTable1.id = \"team-one-table\";\n  var teamTable2 = (0,_TeamTable_index__WEBPACK_IMPORTED_MODULE_0__.teamTable)(_Calcs__WEBPACK_IMPORTED_MODULE_1__.teamTwo, _Calcs__WEBPACK_IMPORTED_MODULE_1__.teamOne);\n  teamTable2.className = \"team-table\";\n  teamTable2.id = \"team-two-table\";\n  divEl.appendChild(teamTable1);\n  divEl.appendChild(teamTable2);\n  return divEl;\n}\n\n//# sourceURL=webpack://js-studies-app/./src/components/TablesArea/index.js?");

/***/ }),

/***/ "./src/components/TeamTable/index.js":
/*!*******************************************!*\
  !*** ./src/components/TeamTable/index.js ***!
  \*******************************************/
/*! namespace exports */
/*! export teamTable [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"teamTable\": () => /* binding */ teamTable\n/* harmony export */ });\n/* harmony import */ var _EntriesList_OddsList_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../EntriesList/OddsList/index */ \"./src/components/EntriesList/OddsList/index.js\");\n/* harmony import */ var _EntriesList_ValuesList_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../EntriesList/ValuesList/index */ \"./src/components/EntriesList/ValuesList/index.js\");\n/* harmony import */ var _EntriesList_ResultsList_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../EntriesList/ResultsList/index */ \"./src/components/EntriesList/ResultsList/index.js\");\n\n\n\nfunction teamTable(team, enemyTeam) {\n  var container = document.createElement('container');\n  container.id = \"team-table\";\n  var h2Element = document.createElement('h2');\n  h2Element.appendChild(document.createTextNode(team.name));\n  var divElement = document.createElement('div');\n  divElement.appendChild((0,_EntriesList_OddsList_index__WEBPACK_IMPORTED_MODULE_1__.oddsList)(team.odds));\n  divElement.appendChild((0,_EntriesList_ValuesList_index__WEBPACK_IMPORTED_MODULE_2__.valuesList)(team.values));\n  divElement.appendChild((0,_EntriesList_ResultsList_index__WEBPACK_IMPORTED_MODULE_0__.resultsList)(team, enemyTeam));\n  container.appendChild(h2Element);\n  container.appendChild(divElement);\n  return container;\n}\n\n//# sourceURL=webpack://js-studies-app/./src/components/TeamTable/index.js?");

/***/ }),

/***/ "./src/components/TwitchViewer/index.js":
/*!**********************************************!*\
  !*** ./src/components/TwitchViewer/index.js ***!
  \**********************************************/
/*! namespace exports */
/*! export twitchViewer [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"twitchViewer\": () => /* binding */ twitchViewer\n/* harmony export */ });\n/* harmony import */ var _CalcsContainer_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CalcsContainer/index */ \"./src/components/CalcsContainer/index.js\");\n\nfunction twitchViewer() {\n  var divEl = document.createElement(\"div\");\n  divEl.id = \"twitch-viewer\";\n  var iFrameElement = document.createElement(\"iframe\");\n  iFrameElement.setAttribute(\"src\", \"https://www.youtube.com/embed/ZlKoeJ3xlx4\");\n  var calcsElement = (0,_CalcsContainer_index__WEBPACK_IMPORTED_MODULE_0__.calcsContainer)();\n  divEl.appendChild(iFrameElement);\n  divEl.appendChild(calcsElement);\n  return divEl;\n}\n\n//# sourceURL=webpack://js-studies-app/./src/components/TwitchViewer/index.js?");

/***/ }),

/***/ "./src/components/calcsComponents/EqualValue/index.js":
/*!************************************************************!*\
  !*** ./src/components/calcsComponents/EqualValue/index.js ***!
  \************************************************************/
/*! namespace exports */
/*! export equalValue [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"equalValue\": () => /* binding */ equalValue\n/* harmony export */ });\nfunction equalValue() {\n  var container = document.createElement(\"container\");\n  container.id = \"equal-value-container\";\n  var strongElement = document.createElement('strong');\n  strongElement.appendChild(document.createTextNode('Equal Value:'));\n  container.appendChild(strongElement);\n  var divElement = document.createElement('div');\n  divElement.id = \"equal-value-labels\";\n  var teamTag = document.createElement(\"strong\");\n  teamTag.appendChild(document.createTextNode(\"Team: \"));\n  var spanElement1 = document.createElement(\"span\");\n  spanElement1.appendChild(document.createTextNode(\"Value: R$ 0.00\"));\n  var spanElement2 = document.createElement(\"span\");\n  spanElement2.appendChild(document.createTextNode(\"odd: 0.00\"));\n  divElement.appendChild(teamTag);\n  divElement.appendChild(spanElement1);\n  divElement.appendChild(spanElement2);\n  container.appendChild(divElement);\n  return container;\n}\n\n//# sourceURL=webpack://js-studies-app/./src/components/calcsComponents/EqualValue/index.js?");

/***/ }),

/***/ "./src/components/calcsComponents/FinalResult/index.js":
/*!*************************************************************!*\
  !*** ./src/components/calcsComponents/FinalResult/index.js ***!
  \*************************************************************/
/*! namespace exports */
/*! export finalResult [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"finalResult\": () => /* binding */ finalResult\n/* harmony export */ });\n/* harmony import */ var _Calcs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Calcs */ \"./src/Calcs.js\");\n\nfunction finalResult() {\n  var container = document.createElement(\"container\");\n  container.id = \"final-result-container\";\n  var strongElement = document.createElement('strong');\n  strongElement.appendChild(document.createTextNode('Final Result:'));\n  container.appendChild(strongElement);\n  var divElement = document.createElement('div');\n  divElement.id = \"final-result-labels\";\n  var teamOneTag = document.createElement(\"strong\");\n  teamOneTag.appendChild(document.createTextNode(\"Team One:\"));\n  var spanElement1 = document.createElement(\"span\");\n  spanElement1.appendChild(document.createTextNode(\"R$ 0.00\"));\n  var teamTwoTag = document.createElement(\"strong\");\n  teamTwoTag.appendChild(document.createTextNode(\"Team Two:\"));\n  var spanElement2 = document.createElement(\"span\");\n  spanElement2.appendChild(document.createTextNode(\"R$ 0.00\"));\n  divElement.appendChild(teamOneTag);\n  divElement.appendChild(spanElement1);\n  divElement.appendChild(teamTwoTag);\n  divElement.appendChild(spanElement2);\n  container.appendChild(divElement);\n  return container;\n}\n\n//# sourceURL=webpack://js-studies-app/./src/components/calcsComponents/FinalResult/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/Main.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;