/* 2.2.1.

Використовуйте node-fetch щоб зробити запит
    await fetch("https://api.ipify.org?format=json")
отримати відповідь та вивести на екран свій айпі

*/

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
import fetch from 'node-fetch';
const namesURL = "https://random-data-api.com/api/name/random_name";

async function asyncGetName(): Promise<string> {
    let responce = await fetch(namesURL);
    let data = await responce.json();
    return await data.name;
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

