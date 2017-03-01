/**
 * Created by oleg on 27/02/2017.
 */
"use strict";

var Salad = require('../../src/salad');

class SaladBuilder {
    constructor() {
        this._name = "";
        this._chicken = 0;
        this._cucumbers = 0;
        this._tomato = 0;
        this._onion = 0;
        this._oliveOil = 0;
        this._vegetableOil = 0;
        this._salt = 0;
        this._pepper = 0;


    }

    withName(name) {
        this._name = name;
        return this;
    }

    withChicken(chicken) {
        this._chicken = chicken;
        return this;
    }

    withCucumbers(cucumbers) {
        this._cucumbers = cucumbers;
        return this;
    }

    withTomato(tomato) {
        this._tomato = tomato;
        return this;
    }

    withOnion(onion) {
        this._onion = onion;
        return this;
    }

    withOliveOil(oliveOil) {
        this._oliveOil = oliveOil;
        return this;
    }

    withVegetableOil(vegetableOil) {
        this._vegetableOil = vegetableOil;
        return this;
    }
    withSalt(salt) {
        this._salt = salt;
        return this;
    }
    withPepper(pepper) {
        this._pepper = pepper;
        return this;
    }

    please() {
        return new Salad(this._name, this._chicken, this._cucumbers, this._tomato, this._onion, this._oliveOil, this._vegetableOil, this._salt, this._pepper);
    }
}

module.exports = SaladBuilder;
