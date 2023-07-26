'use strict'

// filter

// const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

// const shortNames = names.filter(function(name) {
//     return name.length < 5;
// });

// console.log(shortNames);

// map

// const answers = ['iVan', 'AnnA', 'HellO'];

// const result = answers.map(item => item.toLocaleLowerCase());

// console.log(result);

// every/some

// const arr = [4, 'qwe', 'sadasd'];

// console.log(arr.some(item => typeof (item) === 'number'));

// const arr = [4, '5', 7];

// console.log(arr.every(item => typeof (item) === 'number'));

// reduce

// const arr = [4, 5, 1, 3, 2, 6];

// const res = arr.reduce((sum, current) => sum + current);

// console.log(res);


// const arr = ['apple', 'pear', 'plum'];

// const res = arr.reduce((sum, current) => `${sum}, ${current}`);

// console.log(res);

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)
    .filter(item => item[1] === 'persone')
    .map(item => item[0]);

console.log(newArr);

