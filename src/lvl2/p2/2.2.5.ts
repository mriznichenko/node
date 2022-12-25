/**
 * 2.2.5
 * 
 * Існує функція №1, яка приймає коллбек, який буде викликаний з параметром == ваш поточний айпі.
 * Створіть функцію №2, яку можна евейтити, яка користуватиметься функцією №1
 */

import fetch from "node-fetch"

fun2().then(e => console.log(e));

// fun2 output on the next line:
// fun1 output on the next line:
// someCallback output on the next line:
// 23.196.88.59

async function someCallback(arg: string) {
    return "someCallback output on the next line:\n" + arg;
}

async function fun1(callback: (myIP: string) => Promise<string>): Promise<string> {
    return new Promise<string>(async (res) => {
        res("fun1 output on the next line:\n" + await callback(await getIp()));
    });
}

async function fun2(): Promise<string> {
    return new Promise<string>(async (res) => {
        res("fun2 output on the next line:\n" + await fun1(someCallback))
    });
}

async function getIp(): Promise<string> {
    const { ip } = await (await fetch('https://api.ipify.org?format=json')).json();
    return ip;
}

export { }