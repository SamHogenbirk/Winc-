
let fortuneTeller = function (numc, parname, loc, job) {

    let fortune = "you will be a " + job + " in " + loc + ", and married to "
        + parname + " with " + numc + " kids.";

    return fortune

}

console.log(fortuneTeller(2, "anne", "anywhere", "programmer"));