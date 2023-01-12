
function first() {
    // Do something
    setTimeout(() => {
        console.log(1);
    }, 500);
}

function second() {
    // Do something
    console.log(2);

}

first();
second();

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

learnJS('JavaScript', done);

function done() {
    console.log('Я прошёл этот урок');

}