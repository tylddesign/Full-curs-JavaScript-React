// let num = 20;

function showFirstMessage(text) {
    console.log(text);
    // let num = 10;
    console.log(num);
}

showFirstMessage(22);

console.log(num);

function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 5));
console.log(calc(5, 6));
console.log(calc(10, 6));

function ret() {
    let num = 50;
    return num;
}

let func = ret();

console.log();


const usdCurr = 28;
const discount = 0.9;

function convert(amount, curr) {
    return curr * amount;
}

function promotion(result) {
    console.log(result * discount);
}

const res = convert(500, usdCurr);
promotion(res);

function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) return;
    }
    console.log('Done!');
}

test();

function doNothing() { };
console.log(doNothing() === undefined);

const logg = "Hello world";
console.log(logg.slice(8)); //world
console.log(logg.substr(6, 5)); //world

console.log();

const fruit = "Some fruit";
console.log(fruit.indexOf("fr")); //5

const num = 12.2;
console.log(Math.round(num)); // 12 Округлить

const test = "12.2px";
console.log(parseInt(test)); // 12 пекреводит число в другую систему исчисления
console.log(parseFloat(test)); // 12.2