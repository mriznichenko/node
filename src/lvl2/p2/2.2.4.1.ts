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


import https from 'https';

const baseURI = "random-data-api.com"
const usersPath = "/api/v2/users"

type User = {
    gender: string;
}

function getFemaleUser(): Promise<User> {
    return new Promise<User>((resolve) => {
        let data = '';
        https.request({
            host: baseURI,
            path: usersPath + "?size=100&response_type=json",
        }, (response: any) => { // fixme any
            response.on('data', (chunk: string) => {
                data += chunk;
            });
            response.on('end', () => {
                let femUser: User = JSON.parse(data).find((e: User) => e.gender === "Female");
                femUser?.gender === "Female"
                    ? resolve(femUser)
                    : getFemaleUser().then(e => resolve(e));
            });
        }).end();
    })
}

getFemaleUser().then(e => {
    console.log(e)
})


export { }