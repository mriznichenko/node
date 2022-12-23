/**
 * 2.1.4.3
 * 
 * Напишіть типи для цих функцій, щоб все нормально компілювалося.
 * Не забудьте увімкнути строгий режим компіляції
 */

/*
function hey(a) {
    return "hey! i'm " + a.name()
     + (a.type === "cat" ? ("cuteness: "+a.cuteness) : ("coolness: "+a.coolness))
}
hey({name: () => "roma", type: "cat", cuteness: 100})
hey({name: () => "vasya", type: "dog", coolness: 100})
*/

type MyType = {
  name: () => string,
  type: string,
  cuteness?: number,
  coolness?: number
}

export function hey(a: MyType) {
  return "hey! i'm " + a.name()
    + (a.type === "cat" ? ("cuteness: " + a.cuteness) : ("coolness: " + a.coolness))
}

hey({ name: () => "roma", type: "cat", cuteness: 100 })
hey({ name: () => "vasya", type: "dog", coolness: 100 })