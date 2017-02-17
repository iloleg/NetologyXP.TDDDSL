"use strict";

var assert = require('chai').assert;
var Visitor = require('../src/visitor');
var CocktailBuilder = require('../tests/dsl/cocktail-builder');

suite('when drinking cocktail', function () {
    test('visitor becomes a bit more drunk', function () {
        let visitor = new Visitor();
        let cocktail = new CocktailBuilder()
            .withName("Rum & Cola")
            .withAlcoholLevel(5)
            .withVolume(250)
            .please();

        visitor.drink(cocktail);

        assert.equal(visitor.alcoholLevel, 0 + 5);
    });
});