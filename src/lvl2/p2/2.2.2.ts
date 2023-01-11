/**
 * 2.2.2.
 * Напишіть функцію за мотивами п.1., яка повертає ваш айпі.
 */

// наче 2.2.1 - це якраз те саме, що треба було зробити тут.
import fetch from 'node-fetch';
const getIP = async () => await (await fetch("https://api.ipify.org?format=json")).json();
getIP().then(ipObj => console.log(ipObj));
export{}