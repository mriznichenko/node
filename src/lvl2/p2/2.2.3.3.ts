////////////////////////
// NOT FINISHED YET ! //
////////////////////////

/**
 * 2.2.3.3
 * 
 * Напишіть функцію, яка повертає три імені, зробивши ПАРАЛЕЛЬНО 
 * три запити на https://random-data-api.com/api/name/random_name
 * 
 * скористайтесь чисто промісами: без async/await, без Promise.all
 * .... це може бути складно
 */

import fetch from 'node-fetch';

const namesURL = "https://random-data-api.com/api/name/random_name";



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