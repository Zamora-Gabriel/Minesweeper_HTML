//Copyright (C) 2021 Gabriel Zamora
'use strict';

export default class Score {
    constructor() {

        this.overclicked = false;
    }

    runscore() {
        //After game stops hide game page and show score page
        document.querySelector("#minesw-game").hidden = true;
        document.querySelector("#board").classList.remove("fixing-pos");
        document.querySelector("#score-page").hidden = false;
        document.querySelector("#score-show").classList.add("fixing-pos");
    }

    checkover() {
        //Provisional transition from game to score by pressing a button 
        let overElement = document.querySelector("#over-btn");

        overElement.addEventListener('click', event => {
            this.runscore();
        });
    }
}