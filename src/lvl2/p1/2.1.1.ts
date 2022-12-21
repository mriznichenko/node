/**
 * 2.1.1
 * 
 * Напишіть типи для цих функцій, щоб все нормально компілювалося.
 * Не забудьте увімкнути строгий режим компіляції
 */


/*
function getFirstWord(a) {
    return a.split(/ +/)[0].length;
}
*/

function getFirstWord(a : string) {
	return a.split(/ +/)[0].length;
}
