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
const usersQuantity = 100; // max allowed 100
const requestsLimit = 10;

const requestOptions = {
    host: baseURI,
    path: usersPath + `?size=${usersQuantity}`
}

type User = {
    gender: string;
}

function getFemaleUser(requestsSent: number = 1): Promise<User> {
    console.log("requests sent", requestsSent);

    return new Promise<User>((resolve, reject) => {
        let data = '';
        request(requestOptions, (response: IncomingMessage) => {
            response.on('data', (chunk: string) => {
                data += chunk;
            });
            response.on('end', () => {
                let parsedDataJSON = data[0] === '[' ? JSON.parse(data) : [JSON.parse(data)];
                let femaleUser: User = parsedDataJSON.find((e: User) => e.gender === "Female");
                
                femaleUser?.gender === "Female"
                    ? resolve(femaleUser)
                    : requestsSent > requestsLimit
                        ? reject()
                        : getFemaleUser(++requestsSent).then(e => resolve(e));
            });
        }).end();
    })
}

getFemaleUser().then(e => {
    console.log(e)
})

export { }