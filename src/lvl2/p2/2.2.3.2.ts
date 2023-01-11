/**
 * 2.2.3.2
 * 
 * Напишіть функцію, яка повертає три імені, зробивши ПАРАЛЕЛЬНО 
 * три запити на https://random-data-api.com/api/name/random_name
 * 
 * скористайтесь async/await, але без Promise.all
 */

import fetch from 'node-fetch';

const namesURL = "https://random-data-api.com/api/name/random_name";

async function getName(): Promise<string> {
    let responce = await fetch(namesURL);
    let data = await responce.json();
    return await data.name;
}

function getNames(): Promise<string[]> {
    return new Promise(resolve => {
        let array: string[] = [];
        getName()
            .then(e => array.push(e))
            .then(() => {
                getName()
                    .then(e => array.push(e))
                    .then(() => {
                        getName()
                            .then(e => array.push(e))
                            .then(() => resolve(array))
                    })
            })
    })
}

getNames().then(e => console.log(e))

export {}