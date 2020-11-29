function assignGrade(score) {
    if (score > 90) {
        return 'A';
    } else if (score > 80) {
        return 'B';
    } else if (score > 70) {
        return 'C';
    } else if (score > 65) {
        return 'D';
    } else {
        return 'F';
    }
}

for (index = 60; index <= 100; index++) {

    let grade = assignGrade(index)
    console.log("voor " + index + " krijg je " + grade);
}