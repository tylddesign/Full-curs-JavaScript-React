'use stict'

class MarvelSnapHero {
    constructor(name, power, cost, ability) {
        this._name = name;
        this._power = power;
        this._cost = cost;
        this._ability = ability;
    }

    #chanceComingIntoFirstHand = 1 / 12;

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    changeChanceComingIntoFirstHand(chance) {
        this.#chanceComingIntoFirstHand += chance;
    }

    getFullInformation() {
        return `
        Имя героя: ${this.name},
        Сила героя: ${this._power},
        Стоимость героя: ${this._cost},
        Способность героя: ${this._ability},
        Шанс попадания в стартовую руку: ${this.#chanceComingIntoFirstHand}
        ` ;
    }
}

const storm = new MarvelSnapHero('Storm', 6, 3, 'Change loacation to rain');
storm.name = 'Штормиха';
console.log(storm.getFullInformation());
storm.chanceComingIntoFirstHand = 1;
console.log(storm.getFullInformation());
storm.changeChanceComingIntoFirstHand(0.5);
console.log(storm.getFullInformation());
