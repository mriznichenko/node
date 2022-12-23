////////////////////////
// NOT FINISHED YET ! //
////////////////////////

// TODO todo fix any type

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

function getFemaleUser(): Promise<User> {
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
            console.log("request")
            res.on('end', () => {
                
                 // FIXME what if all of 100 users array does not contains any female?
                let femUser : User = JSON.parse(data).find((e: User) => e.gender === "Female")
                if (femUser.gender === "Female") {
                    resolve(femUser)
                } else {
                   
                    getFemaleUser().then(e => resolve(e))
                }
                
            });
        }).end();
    })
}

// getFemaleUser().then(e => console.log(e))
getFemaleUser().then(e => {
    console.log(e)
})


export { }