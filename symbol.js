const planets = ["eath","moon"]

for(let body of planets){
    console.log(body);
}

planets[Symbol.iterator] = function* (){
    yield* ["mars","venus","jupiter"]
}

for(let body of planets){
    console.log(body);
}

const ID_SYMBOL = Symbol("id");
planets[ID_SYMBOL] = 35555;

console.log("Iterate keys:");
for(let key of Object.getOwnPropertyNames(planets)){
    console.log(key);
}
console.log("Iterate symbols:");
for(let key of Object.getOwnPropertySymbols(planets))
    console.log(key)

console.log(`planets id is ${planets[ID_SYMBOL]}`)