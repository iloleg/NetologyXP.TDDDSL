/**
 * Created by oleg on 27/02/2017.
 */
"use strict";

class Salad {
    constructor(name, chicken, cucumbers, tomato, onion, oliveOil, vegetableOil, salt, pepper ,price) {
        this._name = name;
        this._chicken = chicken;
        this._cucumbers = cucumbers;
        this._tomato = tomato;
        this._onion = onion;
        this._oliveOil = oliveOil;
        this._vegetableOil = vegetableOil;
        this._salt = salt;
        this._pepper = pepper;

    }

    get name() {
        return this._name;
    }

    get chicken() {
        return this._chicken;
    }

    get cucumbers() {
        return this._cucumbers;
    }

    get tomato() {
        return this._tomato;
    }

    get pepper() {
        return this._pepper;
    }

    get onion() {
        return this._onion;
    }

    get oliveOil() {
        return this._oliveOil;
    }

    get vegetableOil() {
        return this._vegetableOil;
    }

    get salt() {
        return this._salt;
    }

    get pepper() {
        return this._pepper;
    }


}


module.exports = Salad;