let x = 5;
console.log(x++); //5, декремент сработает после консоль лога

[] + false - null + true  //x3 NaN
console.log(typeof ([] + false)); // массив переводится в строку "", конкатенация + false = "false", string
console.log("false" - null); // NaN

let y = 1;
let x = y = 2;
console.log(x); // 2, по таблице операторов идет все справа налево

console.log([] + 1 + 2); // массив превратится в строку "", а конкатенация сложит символы друг с другом, и получится 12

console.log("1"[0]); // hz  мы обращаемся к строке, символу 0, получаем 1

console.log(2 && 1 && null && 0 && undefined); // false, вернет null, первое аргумент, на котором запнется

console.log(!!(1 && 2) == (1 && 2)); // разница есть, true не равно 1 и 2

false    3
console.log(null || 2 && 3 || 4); // 3

const a = [1, 2, 3];
const b = [1, 2, 3];
console.log(a == b); // true, неверно, тут false, ящики(переменные) разные, хоть и содержат одинаковые значения

console.log(+"Infinity"); // Infinity, унарный плюс привел к типу Number

console.log("Ёжик" > "яблоко"); // false, тут идет посимвольное сравнение

console.log(0 || "" || 2 || undefined || true || falsе); // 2