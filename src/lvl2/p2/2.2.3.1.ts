/**
 * 2.2.3.1
 * 
 * Напишіть функцію, яка повертає три імені, зробивши ПАРАЛЕЛЬНО 
 * три запити на https://random-data-api.com/api/name/random_name
 * 
 * скористайтесь async/await + Promise.all 
 */

import fetch from 'node-fetch';

const namesURL = "https://random-data-api.com/api/name/random_name";

async function getName(): Promise<string> {
    let responce = await fetch(namesURL);
    let data = await responce.json();
    return await data.name;
}

async function getNames() : Promise<string[]> {
    return Promise.all([getName(), getName(), getName()]);
}

getNames().then(names => console.log(names));

export {}