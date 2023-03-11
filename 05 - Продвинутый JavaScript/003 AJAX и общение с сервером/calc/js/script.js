'use strict'

const inputRub = document.querySelector('#rub'),
    inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current.json'); // собирает настройки, которые в будущем помогут сделать запрос
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('load', () => { // readystatechange - отслеживает статус готовности нашего запроса в текущий момент. Конкретно слежит за readyState
        if (request.status == 200) { // если статус Done (операция полностью завершена) и если код состояния 200 OK(хорошо), то можем выполнять действия на странице
            console.log(request.response);
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = "Что-то пошло не так";
        }
    });

    // status - номер состояния
    // statusText - текст статуса
    // response - ответ
    // readyState - текущее состояние запроса

});