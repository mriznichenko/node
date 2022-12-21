"use strict";
/* 2.2.1.

Використовуйте node-fetch щоб зробити запит
    await fetch("https://api.ipify.org?format=json")
отримати відповідь та вивести на екран свій айпі

*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// // SOLUTION
// import fetch from 'node-fetch';
// const getIP = async () => await (await fetch("https://api.ipify.org?format=json")).json();
// getIP().then(ipObj => console.log(ipObj));
/* 2.2.2.
Напишіть функцію за мотивами п.1., яка повертає ваш айпі.
*/
// SOLUTION
// наче 2.2.1 - це якраз те саме, що треба було зробити тут.
/* 2.2.3.
Напишіть функцію, яка повертає три імені, зробивши ПАРАЛЕЛЬНО
три запити на https://random-data-api.com/api/name/random_name
    скористайтесь async/await + Promise.all
    скористайтесь async/await але без Promise.all
    скористайтесь чисто промісами, без async/await, без Promise.all.... це може бути складно
*/
// SOLUTION
const node_fetch_1 = __importDefault(require("node-fetch"));
const namesURL = "https://random-data-api.com/api/name/random_name";
function asyncGetName() {
    return __awaiter(this, void 0, void 0, function* () {
        let responce = yield (0, node_fetch_1.default)(namesURL);
        let data = yield responce.json();
        return yield data.name;
    });
}
// 2.2.3.1 - скористайтесь async/await + Promise.all
// async function getNamesA() : Promise<string[]> {
//     return Promise.all([getName(), getName(), getName()]);
// }
// getNamesA().then(names => console.log(names));
// 2.2.3.2 - скористайтесь async/await але без Promise.all
// function getNamesB(): Promise<string[]> {
//     return new Promise(resolve => {
//         let array: string[] = [];
//         asyncGetName()
//             .then(e => array.push(e))
//             .then(() => {
//                 asyncGetName()
//                     .then(e => array.push(e))
//                     .then(() => {
//                         asyncGetName()
//                             .then(e => array.push(e))
//                             .then(() => resolve(array))
//                     })
//             })
//     })
// }
// getNamesB().then(e => console.log(e))
// 2.2.3.3 - скористайтесь чисто промісами, без async/await, без Promise.all.... це може бути складно
// function getNamesC(): Promise<string[]> {
// }
const https = require('https');
// const tempurl = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';
// function syncRequest(url: string) {
//     let out = "out plug value"
//     return typeof https.get(url, (resp: any) => {
//         let data = '';
//         // A chunk of data has been received.
//         resp.on('data', (chunk: any) => {
//             data += chunk;
//             console.log("chunk done");
//         });
//         // The whole response has been received. Print out the result.
//         resp.on('end', () => {
//             let forlog = JSON.parse(data).explanation
//             // console.log(forlog);
//             out = forlog
//             return forlog
//             console.log("end done");
//         });
//     }).on("error", (err: any) => {
//         console.log("on done")
//         console.log("Error: " + err.message);
//     });
//     return out
// }
// console.log(syncRequest(tempurl))
// asyncGetName().then( (e) => console.log("async: " + e)) // works
// let data = https.get(namesURL, (e: any) => {
//     console.log(e);
//     console.log(e.data)
// }); 
// console.log(data)// works
////////////////////////////////////////////////////////////////////////// UNDONE ABOVE
// 2.2.4
// Напишіть функцію , яка повинна за мінімальну кількість запитів отримати користувача жінку:
// https://random-data-api.com/api/users/random_user
// 1. без async/await
// 2. з async/await
const userURL = "https://random-data-api.com/api/users/random_user";
// 2.2.4.1 v.1 bruteforce
// async function foo() {
//     let responce, data;
//     let counter = 0;
//     do {
//         responce = await fetch(userURL, {headers: {gender: "Female"}});
//         data = await responce.json();
//         counter++;
//         console.log(counter + " => " + data.gender )
//     } while (counter < 200 && data.gender !== "Female"); // 200 for break indefinite loop
//     // console.log(data)
//     return await data;
// }
// foo()
const baseURI = "https://random-data-api.com/api/v2/";
const usersPath = "users";
const options = {
    size: 3,
    is_xml: true,
    response_type: "json"
};
function buildGetURI(baseURI, usersPath, options) {
    const optionsGetSyntax = Object.entries(options).map(entry => entry.join("="));
    return baseURI + usersPath + "?" + optionsGetSyntax.join("&");
}
function foo() {
    return __awaiter(this, void 0, void 0, function* () {
        let responce = yield (0, node_fetch_1.default)(buildGetURI(baseURI, usersPath, options));
        let data = yield responce.json();
        // console.log(data)
        // console.log(data.gender === "Female")
        return yield data;
    });
}
function test() {
    return __awaiter(this, void 0, void 0, function* () {
        let data = yield foo();
        console.log("---");
        console.log(options);
        console.log(buildGetURI(baseURI, usersPath, options));
        console.log("Data:");
        console.log(data);
        console.log("data.length", data.length);
    });
}
test();
