let calculateSupply = function (age, amountPerday) {

    const remyears = 80 - age;
    let days = remyears * 365;
    let result = days * amountPerday;

    return result;
}

console.log("you will need " + calculateSupply(35, 2) + " number of shit to last you till 80");