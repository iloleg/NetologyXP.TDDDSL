/**
 * Created by oleg on 27/02/2017.
 */
class SaladPrice {
    constructor(name, chicken, cucumbers, tomato, onion, oliveOil, vegetableOil, salt, pepper, priceList , price ) {
        this._name = name;
        this._priceList = priceList;
        this._volume = volume;
    }

    price(Salad) {
        this._saladPrice += Salad.price;
    }

    get priceList() {
        return this._saladPrice;
    }
}

module.exports = SaladPrice;


