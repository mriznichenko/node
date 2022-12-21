"use strict";
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
    constructor(name, some) {
        this.name = () => {
            return this._name;
        };
        this._name = name;
        this.some = some;
    }
}
class Cat extends AbstractPet {
}
class Dog extends AbstractPet {
}
function hey(abstractPet) {
    return "hey! i'm " + abstractPet.name();
}
let a = new Cat("myavchik", true);
let b = new Dog("gavchik", 333);
hey(a);
hey(b);
