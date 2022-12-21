"use strict";
////////////////////////
// NOT FINISHED YET ! //
////////////////////////
/**
 * 2.2.4.1
 * Напишіть функцію , яка повинна за мінімальну кількість запитів
 * отримати користувача жінку:
 *
 * https://random-data-api.com/api/users/random_user
 *
 * без async/await
 */
const https = require('https');
const baseURI = "https://random-data-api.com/api/v2/";
const usersPath = "users";
const options = {
    /** users quantity; maximum allowed size is 100 */
    size: 3,
    is_xml: true,
    response_type: "json"
};
function buildGetURI(baseURI, usersPath, options) {
    const optionsInGetSyntax = Object.entries(options).map(entry => entry.join("="));
    return baseURI + usersPath + "?" + optionsInGetSyntax.join("&");
}
function getUsers() {
    let responce = https.get(buildGetURI(baseURI, usersPath, options));
    console.log(responce);
    // let data = responce.json();
    // return data;
}
getUsers();
function searchFemale(users) {
    let femaleUser;
    for (let user of users) {
        if (user.gender === "Female") {
            femaleUser = user;
            break;
        }
    }
    return femaleUser;
}
// async function getFemaleUser() {
//     let requestsCounter = 0; // infinite-protection
//     let female, data;
//     while (female === undefined && requestsCounter < 100) {
//         data = getUsers();
//         female = searchFemale(data);
//         requestsCounter++;
//     }
//     return female;
// }
// getFemaleUser().then(e => console.log(e))
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
