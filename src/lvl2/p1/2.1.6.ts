/**
 * 2.1.6
 * 
 * Напишіть типи для цих функцій, щоб все нормально компілювалося.
 * Не забудьте увімкнути строгий режим компіляції
 */

/* 
// you don't know Promises and async/await yet. Or do you? 
// ....can be hard, don't worry and SKIP if you do not know how to do it
async function world(a) {
    return "*".repeat(a)
}
const hello = async () => {
   return await world(10)
}
hello().then(r => console.log(r)).catch(e => console.log("fail"))
*/

export function stringEntries(a : unknown[] | object) {
  return Array.isArray(a) ? a : Object.keys(a)
}

async function world(a : number) {
  return "*".repeat(a)
}
export const hello = async () => {
 return await world(10)
}
hello().then(r => console.log(r)).catch(e => console.log("fail"))

