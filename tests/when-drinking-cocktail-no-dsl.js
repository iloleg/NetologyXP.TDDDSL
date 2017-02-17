"use strict";

var assert = require('chai').assert;
var Visitor = require('../src/visitor');
var Cocktail = require('../src/cocktail');

suite('when drinking cocktail', function () {
    test('visitor becomes a bit more drunk', function () {
        let visitor = new Visitor();
        let cocktail = new Cocktail("Rum & Cola", 5, 250);

        visitor.drink(cocktail);

        assert.equal(visitor.alcoholLevel, 5);
    });
});