// touchstat
// touchmove
// touchend
// touchenter
// touchleave
// touchcancel

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    // box.addEventListener('touchstart', (event) => {
    //     event.preventDefault();

    //     // console.log('start');
    //     console.log(event.touches);
    //     console.log(event.targetTouches);
    // });

    box.addEventListener('touchmove', (event) => {
        event.preventDefault();

        console.log(event.targetTouches[0].pageX);
    });

    // box.addEventListener('touchend', (event) => {
    //     event.preventDefault();

    //     console.log('start');
    // });

    const script = document.createElement('script');
    script.src = "js/test.js";
    document.body.append(script); // скрипт загружаться только после этой строчки


});