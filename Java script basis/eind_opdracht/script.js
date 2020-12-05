
//Leeg object om straks de input in op te slaan.
let userData = {};

//functie voor het verzamlen van de data
const input = function () {

    let name = prompt("Welkom bij The Numbers Game! Voer je naam in om mee te spelen...");

    //null check
    if (!name) {

        alert("Geen geldige input, we proberen het gewoon nog een keer");
        return input();
    }

    alert("All set " + name + ', feeling lucky?');

    range();

    //nested functie voor Null check
    function range() {

        let min = parseInt(prompt('Wat is het kleinste getal? Voer een nummer in...'));

        if (!min) {

            alert("Geen geldige input, we proberen het nog een keer");
            return range();
        }

        let max = parseInt(prompt('Wat is het hoogste getal? Voer een nummer in...'));

        if (!max) {

            alert("Geen geldige input, we proberen het nog een keer");
            return range();
        }

        return userData.name = name, userData.min = min, userData.max = max;
    }
}

input();

//Random nummer functie
const random = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const rand = random(userData.min, userData.max);

alert("Ok! we gaan spelen tussen de " + userData.min + " en " + userData.max + ', je krijgt 5 kansen.');

let num = parseInt(prompt("kies je eerste nummer:"));

//Test the chosen nmber against te random number
const guessResult = function (num, rand) {

    //Array met gekozen nummers
    let chosen = [num];

    //Countdown loop 
    let i = 4;
    while (num != rand && i > 0) {

        alert('Helaas! Probeer het nog een keer, nog ' + i + ' pogingen over');
        let x = prompt('Laatst gekozen nummers: ' + chosen);
        chosen.push(x);
        num = x;
        i--

        //Helaas niet helemaal DRY, maar anders rekent hij de laatste poging altijd goed
    } if (num != rand && chosen.length === 5) {
        return alert('Geen pogingen meer! Je nummers waren ' + chosen + ' Het goede nummer was ' + rand);
    }

    return alert('Number ' + rand + ' --> you got it!!')
}

//function call
guessResult(num, rand);

alert("Dankje voor het spelen " + name + "!");


