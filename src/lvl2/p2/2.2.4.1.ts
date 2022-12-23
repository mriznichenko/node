/**
 * 2.2.4.1
 * Напишіть функцію , яка повинна за мінімальну кількість запитів 
 * отримати користувача жінку:
 * 
 * https://random-data-api.com/api/users/random_user
 * 
 * без async/await
 */

import { IncomingMessage } from 'http'
import { request } from 'https';

const baseURI = "random-data-api.com"
const usersPath = "/api/v2/users"
const requestOptions = {
    host: baseURI,
    path: usersPath + "?size=1&response_type=json",
}

type User = {
    gender: string;
}

function getFemaleUser(deepness?: number): Promise<User> {

    return new Promise<User>((resolve, reject) => {
        let data = '';
        let r = request(requestOptions, (response: IncomingMessage) => {
            response.on('data', (chunk: string) => {
                data += chunk;
            });
            response.on('end', () => {
                let femUser: User = JSON.parse(data)
                    .find((e: User) => e.gender === "Female");
                
                femUser?.gender === "Female"
                    ? resolve(femUser)
                    : (deepness ?? 0) > 10
                        ? reject()
                        : getFemaleUser(deepness ?? 1).then(e => resolve(e));
            });
        }).end();
    })
}

getFemaleUser().then(e => {
    console.log(e)
})


export { }