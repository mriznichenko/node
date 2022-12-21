/**
 * 2.1.3
 * 
 * Напишіть типи для цих функцій, щоб все нормально компілювалося.
 * Не забудьте увімкнути строгий режим компіляції
 */

/* 
// <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining>
function getAllProductNames(a) {
  return a?.products?.map(prod => prod?.name) || [];
}
*/


function getAllProductNames(a?: { products?: Array<{ name?: string }> }) {
  return a?.products?.map(prod => prod?.name) || [];
}

