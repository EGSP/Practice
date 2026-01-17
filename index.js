let counter = 0;
console.log("loaded");

count();

function count() {
    counter++;
    console.log("count");

    const p = document.querySelector("#counter");
    p.textContent = counter;
}

function randomNumberTitle() {
    const randomValue = getRandomIntInclusive(1, 100000)
    console.log("randomValue is: " + randomValue)

    document.title = "Number " + randomValue;
}


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

vars();
function vars() {
    console.log(variable);
    var variable = 10;
    console.log(variable);
}

const planetParameters = { ground: "sand", gravity: 9.81, radius:10};
// planetParameters = {}; - error
planetParameters.radius = 100;

// freezed parameters will be a new object with freezed values
// const freezedPlanetParameters = Object.freeze({...planetParameters});
// freezed parameters will be a link to planet parameters. Planet parameters will be freezed
const freezedPlanetParameters = Object.freeze(planetParameters);
freezedPlanetParameters.radius = 1000; // no error but value will not change
console.log(freezedPlanetParameters);
planetParameters.radius = 555; // no error but value will not change
console.log(planetParameters);
console.log(freezedPlanetParameters);