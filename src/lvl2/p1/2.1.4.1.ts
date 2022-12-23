/**
 * 2.1.4.1
 * 
 * Напишіть типи для цих функцій, щоб все нормально компілювалося.
 * Не забудьте увімкнути строгий режим компіляції
 */

/*
// easy way is using 'as' keyword
// hard way is ?...
function hey(a) {
    return "hey! i'm " + a.name();
}
hey({name: () => "roma", cuteness: 100})
hey({name: () => "vasya", coolness: 100})
*/

export function hey(a: {name: () => string, [a: string]: unknown} ) {
    return "hey! i'm " + a.name();
}
hey({name: () => "roma", cuteness: 100})
hey({name: () => "vasya", coolness: 100})