"use strict";
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
