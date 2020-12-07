const age = 5;
const isFemale = true;
const driverstatus = "drunk";
const name = "Sarah";
const amount = 10;

//agecheck

if (age >= 18 && age <= 25) {

    console.log("Kom binnen met 50% korting!");

} else if (age >= 18) {

    console.log("Kom binnen!");

} else {

    console.log("sorry te jong");
}

//gendercheck

if (isFemale) {

    console.log("Welkom Chickey")

} else {

    console.log("Sorry dude")
}

//drivercheck

if (driverstatus == "bob") {

    console.log("Hier, je auto sleutel")

} else {

    console.log("Hier, het nummer van een taxi")
}

//namecheck

if (name === "Sarah" || name === "bram") {

    console.log("Hier " + name + ", bier!")

} else {

    console.log("Jammer " + name + " geen bier voor jou")
}

//totalcheck

if (amount >= 100) {

    console.log("champagne!!");

} else if (amount > 50) {

    console.log("nachoooos!");

} else if (amount > 25) {

    console.log("gratis bitterballen!");

} else {

    console.log("gewoon betalen maat");
}
