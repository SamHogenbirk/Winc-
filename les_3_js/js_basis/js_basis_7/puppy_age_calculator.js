let calculateDogAge = function (age, hum) {

    let result = "your puppy is " + age * 7 + " years old... in dog years.";
    let result2 = " and in human years " + Math.round(age / 7);

    return result + result2;
}

console.log(calculateDogAge(20, 40));
