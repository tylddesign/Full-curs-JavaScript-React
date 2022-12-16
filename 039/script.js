
const btn = document.querySelector('button'),
    btns = document.querySelectorAll('button'),
    overlay = document.querySelector('.overlay'),
    link = document.querySelector('a');

// btn.onclick = function() {
//     alert('click');
// };

// btn.addEventListener('click', () => {
//     alert('click');
// });
// let i = 0;
const deleteElement = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
};

// btn.addEventListener('click', (e) => {
//     console.log(e);
//     console.log(e.target);
//     e.target.remove();
// });


btn.addEventListener('click', deleteElement); // мы не пишем круглые скобки, нам это не нужно
overlay.addEventListener('click', deleteElement);
link.addEventListener('click', (event) => {
    event.preventDefault();
});
// btn.removeEventListener('click', deleteElement); // сначала назначиил, потом удалили

// btn.addEventListener('click', deleteBtn);

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log('Тут есть обработчик, кста');
    }, { once: true });
});

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, { once: true });
});
