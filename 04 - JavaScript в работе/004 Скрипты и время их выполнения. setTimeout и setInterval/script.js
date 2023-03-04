const btn = document.querySelector('.btn');
let timerId;

function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);

    function frame() {
        if (pos == 300) {
            clearInterval();
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);



// const timerId = setTimeout(function () {
//     console.log('Hello');
// }, 2000);

// const timerId = setTimeout(function (text) {
//     console.log(text);
// }, 2000, 'Hello!');



// btn.addEventListener('click', (event) => {
//     timerId = setInterval(logger, 500);
// });


// function logger() {
//     if (i === 3) {
//         clearInterval(timerId);
//     }
//     console.log('Hello');
//     i++;
// }

// let id = setTimeout(function log() {
//     console.log('Hello');
//     id = setTimeout(log, 500);
// }, 500);
