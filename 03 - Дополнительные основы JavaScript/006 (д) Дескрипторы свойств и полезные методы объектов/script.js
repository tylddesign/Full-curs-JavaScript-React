'use strict'



const user = {
    name: 'Alex',
    surname: 'Smith',
    showMyPublicData: function () {
        console.log(`${this.name} ${this.surname}`);
    }
}

// Object.defineProperty(user, 'birthday', { value: prompt('Date'), enumerable: true, configurable: true });

console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));


Object.defineProperty(user, 'showMyPublicData', { enumerable: false });
for (let key in user) console.log(key);

Object.defineProperties(user, {
    name: { writeble: false },
    surname: { writeble: false }
});

// writeable
// enumerable
// configurable





// user.name = 'wqee';
// Object.defineProperties()

// for (let key in user) console.log(key)




// Object.defineProperty(Math, 'PI');
