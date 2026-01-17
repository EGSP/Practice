let spaceAge = 10000000000000000000000000000000000n;
let earthYear = 365;

function turnYear(){
    spaceAge = spaceAge + BigInt(earthYear);
}

turnYear();

console.log(spaceAge)