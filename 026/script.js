

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     }
// };
// let counter = 0;
// for (let key in options) {
//     if (typeof options[key] === 'object') {
//         for (let obj in options[key]) {
//             console.log(`Свойство ${obj}, имеет значение ${options[key][obj]}`);
//             counter++;
//         }
//     } else {
//         console.log(`Свойство ${key}, имеет значение ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter);

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function () {
        console.log("Test");
    }
};

options.makeTest();

const { border, bg } = options.colors;
console.log(border);


// console.log(Object.keys(options).length);