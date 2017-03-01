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
    test('visitor becomes a bit more drunk Vodka and Tomato', function () {
        let visitor = new Visitor();
        let cocktail = new CocktailBuilder()
            .withName("Vodka & Tomato")
            .withAlcoholLevel(6)
            .withVolume(200)
            .please();

        visitor.drink(cocktail);

        assert.equal(visitor.alcoholLevel, 0 + 6);
    });
    test('visitor becomes a bit more drunk Soft drink', function () {
        let visitor = new Visitor();
        let cocktail = new CocktailBuilder()
            .withName("Apple juice")
            .withAlcoholLevel(0)
            .withVolume(200)
            .please();

        visitor.drink(cocktail);

        assert.equal(visitor.alcoholLevel, 0 + 0);
    });
    test('visitor becomes a bit more drunk Soft drink Mineral Watter', function () {
        let visitor = new Visitor();
        let cocktail = new CocktailBuilder()
            .withName("Minneral Watter")
            .withAlcoholLevel(0)
            .withVolume(250)
            .please();

        visitor.drink(cocktail);

        assert.equal(visitor.alcoholLevel, 0 + 0);
    });


});