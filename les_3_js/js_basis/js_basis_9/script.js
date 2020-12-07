const colors = ["yellow,", "blue", 'reg', 'orange'];
let i = 0;

while (i < colors.length) {

    console.log(colors[i] + " 1");
    i++
};



for (let index = 0; index < colors.length; index++) {

    console.log(colors[index] + " 2");
}

colors.forEach(Element => console.log(Element + " 3"))

// Hoeveel regels neemt mijn for loop en mijn while loop in beslag? = 4
// Hoeveel regels neemt mijn forEach method in beslag? = 1
// Welke voordelen heeft het gebruiken van een array method nog meer t.o.v. een for of een while loop? Welke methode vind je bijvoorbeeld makkelijker leesbaar? Waarom? = 
//*minder text dus minder kans op spelfouten */
// Kun je een array method gebruiken op een object? Het antwoord is nee.
// Stel je hebt een object met 45 properties. Probeer eens uit te zoeken (gebruik Google) hoe je tóch die 45 properties kunt console.loggen met een loop: Looping through the properties of an object.
// Probeer dit stukje code uit en gebruik hier een object met 5 properties voor. Ben je nu aan het itereren?

const obj = {

    naam: "sam",
    leeftijd: 10,
    postcode: 1211,
    huisnummer: 52
}

for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
        console.log(obj[key]);

    }
}

