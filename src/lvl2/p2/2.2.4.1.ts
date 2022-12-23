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

const baseURI = "random-data-api.com"
const usersPath = "/api/v2/users"

type User = {
    gender: string;
}

function getFemaleUser() : Promise<User> {
    return new Promise<User>((resolve) => {
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
                resolve(JSON.parse(data).find( (e : User) => e.gender === "Female"))
            });
        }).end();
    })
}

getFemaleUser().then(e => console.log(e))

export { }