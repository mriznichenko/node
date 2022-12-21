/**
 * 2.1.2
 * 
 * Напишіть типи для цих функцій, щоб все нормально компілювалося.
 * Не забудьте увімкнути строгий режим компіляції
 */

/*
function getUserNamings(a) {
  return { 
    fullname: a.name + " " + a.surname, 
    initials: a.name[0] + "." + a.surname[0] 
  };
}
*/

function getUserNamings(a: { name: string, surname: string }) {
    return {
        fullname: a.name + " " + a.surname,
        initials: a.name[0] + "." + a.surname[0]
    };
}