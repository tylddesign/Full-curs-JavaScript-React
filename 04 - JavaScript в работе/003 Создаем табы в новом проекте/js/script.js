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


});