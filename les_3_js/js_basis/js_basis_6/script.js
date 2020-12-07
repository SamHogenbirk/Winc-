/* Broodjes zaak:

ingredieneten van het brood
samenvoegen in een broodje

*/


//function declaration
let broodje = function (brood, beleg) {

    let result = brood + beleg;

    return result;
}

//function call
let broodjeKaas = broodje("witbroodje met", " kaas");

//functoin call 2
let broodjeHam = broodje("Bolletje met", " ham");

console.log("Alstubliet, een " + broodjeKaas + " en een " + broodjeHam);

//------------------------------

//altijd korting
let calculateDiscountedPrice = function (total, discount) {

    let price = total - discount;

    return Math.round(price);
}

var kassaBedrag = calculateDiscountedPrice(25, 3.70);

console.log(kassaBedrag);


//Alleen 10% korting bij minimaal besteding
let calculateDiscounted = function (amount) {

    if (amount >= 25) {

        let total = amount / 100 * 90;

        return Math.round(total)

    } else {

        return amount
    }

}

var totaalBedrag = calculateDiscounted(35);

console.log(totaalBedrag);










