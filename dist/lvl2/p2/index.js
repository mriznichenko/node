"use strict";
/* 1.

Використовуйте node-fetch щоб зробити запит
    await fetch("https://api.ipify.org?format=json")
отримати відповідь та вивести на екран свій айпі

*/
// // SOLUTION
// import fetch from 'node-fetch';
// const getIP = async () => await (await fetch("https://api.ipify.org?format=json")).json();
// getIP().then(ipObj => console.log(ipObj));
/* 2.
Напишіть функцію за мотивами п.1., яка повертає ваш айпі.
*/
// // SOLUTION
// import fetch from 'node-fetch';
// async function getIpPromise() {
//     let responce = await fetch("https://api.ipify.org?format=json")
//     let data = await responce.json();
//     return data;
// }
// async function doSomething() {
//     let result = await getIpPromise();
//     return result;
// }
// let myIP = doSomething()
// console.log(myIP);
// var http = require('http');
// let result = -1
// http.get({'host': 'api.ipify.org', 'port': 80, 'path': '/'}, function(resp: any) {
//   resp.on('data', function(ip: any) {
//     console.log("My public IP address is: " + ip);
//     result = ip;
//   });
// });
// console.log("result:", result)
var xhr = new XMLHttpRequest();
let result = "default value";
xhr.open("GET", "https://api.ipify.org?format=json", true);
xhr.onload = function (e) {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            result = xhr.responseText;
            console.log(xhr.responseText);
        }
        else {
            result = xhr.statusText;
            console.error(xhr.statusText);
        }
    }
};
xhr.onerror = function (e) {
    console.error(xhr.statusText);
};
xhr.send(null);
console.log(result);
