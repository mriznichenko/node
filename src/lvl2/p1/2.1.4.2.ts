/**
 * 2.1.4.2
 * 
 * Напишіть типи для цих функцій, щоб все нормально компілювалося.
 * Не забудьте увімкнути строгий режим компіляції
 */

/*
function hey(abstractPet) {
    return "hey! i'm " + abstractPet.name();
}
let a = new Cat("myavchik", true)
let b = new Dog("gavchik", 333)
hey(a)
hey(b)
*/

class AbstractPet {
    _name: string
    some: boolean | number
    constructor(name: string, some: boolean | number) {
        this._name = name;
        this.some = some;
    }
    name = (): string => {
        return this._name;
    }
}

class Cat extends AbstractPet { }
class Dog extends AbstractPet { }

function hey(abstractPet: { name: () => string }) {
    return "hey! i'm " + abstractPet.name();
}
let a = new Cat("myavchik", true)
let b = new Dog("gavchik", 333)
hey(a)
hey(b)
