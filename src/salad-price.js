/**
 * Created by oleg on 27/02/2017.
 */
class SaladPrice {
    constructor(name, chicken, cucumbers, tomato, onion, oliveOil, vegetableOil, salt, pepper, priceList ) {
        this._name = name;
        this._chicken = chicken;
        this._cucumbers = cucumbers;
        this._tomato = tomato;
        this._onion = onion;
        this._oliveOil = oliveOil;
        this._vegetableOil = vegetableOil;
        this._salt = salt;
        this._pepper = pepper;
        this.priceList = priceList;

        this.basePrice = 100;
        this.addChicken = 200;
        this.addCucumbers = 100;
        this.addTomato = 100;
        this.addOnion = 200;
        this.addOliveOil = 100;
        this.addVegetableOil = 200;
        this.addSalt = 100;
        this.addPepper = 100;
    };

     calcPrice()
{


    let totalPrice = totalPrice + basePrice;

    if (this._chicken)
        totalPrice = totalPrice + addChicken;

    if (!this._cucumbers)
        totalPrice = totalPrice + addCucumbers;

    if (this._tomato)
        totalPrice = totalPrice + addTomato;

    if (this._onion)
        totalPrice = totalPrice + addOnion;
    if (this._oliveOil)
        totalPrice = totalPrice + addOliveOil;
    if (this._vegetableOil)
        totalPrice = totalPrice + addVegetableOil;
    if (this._salt)
        totalPrice = totalPrice + addSalt;
    if (this._pepper)
        totalPrice = totalPrice + addPepper;

    return totalPrice;


}
module.exports = SaladPrice;


