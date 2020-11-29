let movies = {

    title: "puff puff the dragon",
    dur: 30,
    stars: [" puff", " jackie", " living sneezes"]
};

let moviedb = function (movies) {

    let result = movies.title + " lasts for " + movies.dur + " minutes. stars: " + movies.stars + ".";
    return result;
}

console.log(moviedb(movies));