// Copyright (C) 2021 Gabriel Zamora
'use strict';

import Game from './Game.js';
import Splash from './Splash.js';
import Score from './Score.js';

//Main Application
let game = new Game();
let splash = new Splash();
let score = new Score();


let bttnElement = document.querySelector("#play-btn");

document.querySelector("#score-page").hidden = true;
document.querySelector("#minesw-game").hidden = true;


//Check buttons
game.checkbttn();
score.checkover();
splash.retbttn();
game.resbttn();