////////////////////////
// NOT FINISHED YET ! //
////////////////////////

// todo fix any type

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


let uri = 'random-data-api.com/api/v2/users?size=1&response_type=json'

const baseURI = "random-data-api.com"
const usersPath = "/api/v2/users"
const options = {
    size: 3, // max 100
    // is_xml: true,
    // response_type: "json"
}

type User = {
    gender: string;
}

function getUsers() {
    return new Promise((resolve) => {
        const https = require('https');
        let data = '';
        https.request({
            host: baseURI,
            path: usersPath + "?size=3&response_type=json",
        }, (res: any) => {

            res.on('data', (chunk: string) => {
                data += chunk;
            });

            res.on('end', () => {
                console.log(data)
            });
        }).end();
        resolve(data)
    })
}



function getUsersArray() : Promise<User[]> {
    return new Promise<User[]>((resolve) => {
        const https = require('https');
        let data = '';
        https.request({
            host: baseURI,
            path: usersPath + "?size=100&response_type=json",
        }, (res: any) => {
            res.on('data', (chunk: string) => {
                data += chunk;
            });

            res.on('end', () => {
                resolve(JSON.parse(data))
            });
        }).end();
    })
}

// function getFemaleUser() : Promise <User>{
//     let femalePromise :Promise <User>;
    
//     femalePromise = getUsersArray().then(usersArr => {
//         let fem : = searchFemale(usersArr);
//         while(fem === undefined || fem?.gender !== "Female") {
//             fem = getFemaleUser();
//         }
//         return fem;
//     });

//     return femalePromise;
// }

// function searchFemale(users: User[]) : User | undefined {
//     let femaleUser;
//     for (let user of users) {
//         if (user.gender === "Female") {
//             femaleUser = user;
//             break;
//         }
//     }
//     return femaleUser;
// }

// getFemaleUser().then(e => console.log(e))
getUsersArray().then(e => console.log(e))

export { }