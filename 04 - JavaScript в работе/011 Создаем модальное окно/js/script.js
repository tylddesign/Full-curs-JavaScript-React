window.addEventListener('DOMContentLoaded', () => {

    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

    // tabsParent.addEventListener('click', (event) => {
    //     console.log('EVENT');
    //     if (event.target && event.target.classList.contains('tabheader__item')) {
    //         tabs.forEach(item => {
    //             if (item.classList.contains('tabheader__item_active')) {
    //                 item.classList.remove('tabheader__item_active');
    //             }
    //         });
    //         console.log('EVENT TARGET');
    //         // console.log(tabsParent);
    //         console.log(event);
    //         event.target.classList.toggle('tabheader__item_active');
    //         // console.log('FOREACH');
    //         // item.classList.toggle('tabheader__item_active');

    //     }
    // });

    // Табы
    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent(0);

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                // console.log(event);
                // console.log(target);
                // console.log(item);
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    // Timer
    const deadline = "2020-02-20";

    function getTimeRemaning(endtime) {
        let days, hours, minutes, seconds;

        const t = Date.parse(endtime) - Date.parse(new Date());

        if (t <= 0) {
            days = 00;
            hours = 0;
            minutes = 0;
            seconds = 0;
        } else {
            days = Math.floor(t / (24 * 3600 * 1000));
            hours = Math.floor((t / (60 * 60 * 1000) % 24));
            minutes = Math.floor((t / (60 * 1000)) % 60);
            seconds = Math.floor((t / 1000 % 60));
        }

        return {
            't': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        }
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return num = `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);
        updateClock();


        function updateClock() {
            const t = getTimeRemaning(endtime);



            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);

    // Modal

    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modalCloseBtn = document.querySelector('[data-close]'),
        modal = document.querySelector('.modal');

    modalTrigger.forEach(element => {

        element.addEventListener('click', (event) => {
            // возможет вариант с toggle
            // modal.classList.toggle('show');
            modal.classList.remove('hide');
            modal.classList.add('show');
            document.body.style.overflow = 'hidden';

        });

    });

    function closeModal() {
        modal.classList.remove('show');
        modal.classList.add('hide');
        document.body.style.overflow = '';
    }

    // Тут не оптимизированный вызов функции через колбэк, можно просто добавить функцию после 'click'
    // modalCloseBtn.addEventListener('click', (event) => {
    //     // возможет вариант с toggle
    //     // modal.classList.toggle('show');
    //     closeModal();
    // });

    modalCloseBtn.addEventListener('click', closeModal); // выполняем функцию после события. НЕ ЗАБЫВАЕМ УЬРАТЬ КРУГЛЫЕ СКОБКИ, потому что функцию мы не вызываем.

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) {
            closeModal();
        }
    });


});