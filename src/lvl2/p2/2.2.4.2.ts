/**
 * 2.2.4.2
 * Напишіть функцію , яка повинна за мінімальну кількість запитів 
 * отримати користувача жінку:
 * 
 * https://random-data-api.com/api/users/random_user
 * 
 * з async/await
 */

import fetch from 'node-fetch';

const baseURI = "https://random-data-api.com/api/v2/"
const usersPath = "users"
const options = {
    /** users quantity; maximum allowed size is 100 */
    size: 100,
    is_xml: true,
    response_type: "json"
}

type User = {
    gender: string;
}

function buildGetURI(baseURI: string, usersPath: string, options: object) {
    const optionsInGetSyntax = Object.entries(options).map(entry => entry.join("="));
    return baseURI + usersPath + "?" + optionsInGetSyntax.join("&")
}

async function getUsers() {
    let responce = await fetch(buildGetURI(baseURI, usersPath, options));
    let data = await responce.json();
    return await data;
}

function searchFemale(users: User[]) {
    let femaleUser;
    for (let user of users) {
        if (user.gender === "Female") {
            femaleUser = user;
            break;
        }
    }
    return femaleUser;
}

async function getFemaleUser() {
    let requestsCounter = 0; // infinite-protection
    let female, data;

    while (female === undefined && requestsCounter < 100) {
        data = await getUsers();
        female = searchFemale(data);
        requestsCounter++;
    }

    return female;
}

getFemaleUser().then(e => console.log(e))

