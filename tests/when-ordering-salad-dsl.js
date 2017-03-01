/**
 * Created by oleg on 27/02/2017.
 */
"use strict";

var assert = require('chai').assert;
var SaladBuilder = require('../tests/dsl/salad-builder');
var SaladPrice = require('../src/salad-price');

suite('when ordering salad witch chicken', function () {


    test('customer ordered a salad all include', function () {

        let salad = new SaladBuilder()
            .withName("Witch chicken")
            .withChicken(200)
            .withCucumbers(20)
            .withTomato(20)
            .withOnion(10)
            .withOliveOil(10)
            .withVegetableOil(10)
            .withSalt(5)
            .withPepper(5)
            .please();

        SaladPrice.price(Salad);
        assert.equal(SaladPrice.priceList, 0 + 280);
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



        SaladPrice.price(Salad);
        assert.equal(SaladPrice.priceList, 0 + 280);
    });

    test('customer ordered a salad with chicken, cucumbers, tomato,onion,VegetableOil,Salt,Pepper ', function () {

        let salad = new SaladBuilder()
            .withName("Witch Chicken witch Cucumbers and Tomato and Onion and VegetableOil and Salt and Pepper")
            .withChicken()
            .withCucumbers()
            .withTomato()
            .withOnion()
            .withVegetableOil()
            .withSalt()
            .withPepper()
            .please();



        SaladPrice.price(Salad);
        assert.equal(SaladPrice.priceList, 0 + 280);
    });
});
suite('when ordering salad', function () {
    test('customer ordered a salad all include', function () {

        let salad = new SaladBuilder()
            .withName("Salad")
            .withCucumbers()
            .withTomato()
            .withOnion()
            .withOliveOil()
            .withVegetableOil()
            .withSalt()
            .withPepper()
            .please();



        SaladPrice.price(Salad);
        assert.equal(SaladPrice.priceList, 0 + 280);
    });
    test('customer ordered a salad with cucumbers,onion,OliveOil,Salt,Pepper ', function () {

        let salad = new SaladBuilder()
            .withName("Witch  Cucumbers and Onion and OliveOil and Salt and Pepper")
            .withCucumbers()
            .withOnion()
            .withOliveOil()
            .withSalt()
            .withPepper()
            .please();



        SaladPrice.price(Salad);
        assert.equal(SaladPrice.priceList, 0 + 280);
    });

    test('customer ordered a salad with cucumbers, tomato,onion,VegetableOil,Salt,Pepper ', function () {

        let salad = new SaladBuilder()
            .withName("Witch Cucumbers and Tomato and Onion and VegetableOil and Salt and Pepper")
            .withCucumbers()
            .withTomato()
            .withOnion()
            .withVegetableOil()
            .withSalt()
            .withPepper()
            .please();



        SaladPrice.price(Salad);
        assert.equal(SaladPrice.priceList, 0 + 280);
    });
});