/**
 * Created by oleg on 27/02/2017.
 */
"use strict";

var assert = require('chai').assert;
var SaladBuilder = require('../tests/dsl/salad-builder');

suite('when ordering salad', function () {
    test('customer ordered a salad with chicken', function () {

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
});
