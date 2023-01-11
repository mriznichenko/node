/**
 * 2.2.1.
 * Використовуйте node-fetch щоб зробити запит
 * await fetch("https://api.ipify.org?format=json")
 * отримати відповідь та вивести на екран свій айпі
 */

import fetch from 'node-fetch';
const getIP = async () => await (await fetch("https://api.ipify.org?format=json")).json();
getIP().then(ipObj => console.log(ipObj));
export { }