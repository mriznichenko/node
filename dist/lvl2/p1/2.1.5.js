"use strict";
/**
 * 2.1.5
 *
 * Напишіть типи для цих функцій, щоб все нормально компілювалося.
 * Не забудьте увімкнути строгий режим компіляції
 */
/*
// google for Record type
function stringEntries(a) {
  return Array.isArray(a) ? a : Object.keys(a)
}
*/
function stringEntries(a) {
    return Array.isArray(a) ? a : Object.keys(a);
}
