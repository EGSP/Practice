let counter = 0; 
console.log("loaded");

count();

function count(){
    counter++;
    console.log("count");

    const p = document.querySelector("#counter");
    p.textContent = counter;
}

function randomNumberTitle(){
    const randomValue = getRandomIntInclusive(1,100000)
    console.log("randomValue is: " + randomValue)

    document.title = "Number " + randomValue;
}


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

vars();
function vars(){
    console.log(variable);
    var variable = 10;
    console.log(variable);
}