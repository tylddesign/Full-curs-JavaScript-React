// function pow (x, n) {
//     let result = 1;

//     for (let i = 0; i < n; i++) {
//         result *= x;
//     }
// }

// function pow (x, n) {
//     if (n === 1) {
//         return x;
//     } else {
//         return x * pow(x, n - 1);
//     }
// }



// console.log(pow(2, 2)); //4
// console.log(pow(2, 3)); //8
// console.log(pow(2, 4)); // 16

let students = {
    js: [{
        name: 'John',
        progress: 100
    }, {
        name: 'Ivan',
        progress: 60
    }],

    html: {
        basic: [{
            name: 'Peter',
            progress: 20
        }, {
            name: 'Ann',
            progress: 18
        }],

        pro: [{
            name: 'Sam',
            progress: 10
        }]
    }
};

// function getTotalProgressByIteration(data) {
//     let total = 0;
//     let students = 0;
//     let result = 0;

//     for (let course of Object.values(data)) {
//         if (Array.isArray(course)) {
//             students += course.length;
//             console.log('Студенты первый лог ' + students);

//             for (let i = 0; i < course.length; i++) {
//                 total += course[i].progress;
//                 console.log('Тотал первый лог ' + total);
//             }
//         } else {
//             result += getTotalProgressByIteration(course);
//         }
//     }
//     return total / students;
// };


// console.log('Результат ' + getTotalProgressByIteration(students));

function getTotalProgressByRecursion(data) {
    if (Array.isArray(data)) {
        let total = 0;

        for (let i = 0; i < data.length; i++) {
            total += data[i].progress;
        }

        return [total, data.length];
    } else {
        let total = [0, 0];

        for (let subData of Object.values(data)) {
            const subDataArr = getTotalProgressByRecursion(subData);
            total[0] += subDataArr[0];
            total[1] += subDataArr[1];
        }
        return total;
    }
}

const result = getTotalProgressByRecursion(students);

console.log(result[0] / result[1]);