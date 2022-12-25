/**
 * 2.2.6
 * 
 * Існує функція №1, яку можна евейтити, яка поверне рядок == ваш поточний айпі.
 * Створіть функцію №2, яка повинна використовувати функцію №1 
 * для отримання вашого поточного айпі, і яка приймає на вхід один 
 * параметр - функцію-коллбек, яка буде викликана, 
 * коли айпі буде отримано, з першим параметром, що дорівнює цьому айпі.
 * 
 * Так, ми старались писати заплутано, але тут все чьотко.
 */

import fetch from "node-fetch"

fun2(funCallback).then(e => console.log(e));

async function funCallback(ip: string): Promise<string> {
    return "funCallback output: inpit ip === " + ip;
}

async function fun1(): Promise<string> {
    let resp = await fetch('https://api.ipify.org?format=json');
    const { ip } = await resp.json();
    return ip;
}

async function fun2(param: CallableFunction): Promise<void> {
    let ip = await fun1();
    return param(ip);
}

export { }