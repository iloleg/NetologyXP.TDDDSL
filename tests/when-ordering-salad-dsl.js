/**
 * Created by oleg on 27/02/2017.
 */
"use strict";

var assert = require('chai').assert;
var SaladBuilder = require('../tests/dsl/salad-builder');

suite('when ordering salad witch chicken', function () {
    test('customer ordered a salad all include', function () {

        let salad = new SaladBuilder()
            .withName("Witch chicken")
            .withChicken()
            .withCucumbers()
            .withTomato()
            .withOnion()
            .withOliveOil()
            .withVegetableOil()
            .withSalt()
            .withPepper()
            .please();



        assert.equal(300);
    });
    test('customer ordered a salad with chicken, cucumbers,onion,OliveOil,Salt,Pepper ', function () {

        let salad = new SaladBuilder()
            .withName("Witch Chicken witch Cucumbers and Onion and OliveOil and Salt and Pepper")
            .withChicken()
            .withCucumbers()
            .withOnion()
            .withOliveOil()
            .withSalt()
            .withPepper()
            .please();



        assert.equal(300);
    });
});
