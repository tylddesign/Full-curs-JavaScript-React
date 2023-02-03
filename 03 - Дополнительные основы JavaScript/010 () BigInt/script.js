'use strict'


// console.log(Number.MAX_SAFE_INTEGER);

// const bigint = 123131313131231231323123313131313132312312313n;

// const sameBigint = BigInt(123131313131231231323123313131313132312312313);


// console.log(typeof (sameBigint));
// console.log(typeof (bigint));

// console.log(5n + 1);
// console.log(Math.round(5n));
// console.log(5n / 2n);
// console.log(5n > 2n);
// console.log(5n > 2);
// console.log(5n == 5);
// console.log(5n === 5);

let bigint = 1n;
let number = 2;

// console.log(bigint + BigInt(number));
console.log(Number(bigint) + number);