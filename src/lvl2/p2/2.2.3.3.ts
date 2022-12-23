/**
 * 2.2.3.3
 * 
 * Напишіть функцію, яка повертає три імені, зробивши ПАРАЛЕЛЬНО 
 * три запити на https://random-data-api.com/api/name/random_name
 * 
 * скористайтесь чисто промісами: без async/await, без Promise.all
 * .... це може бути складно
 */

import fetch from 'node-fetch';

const namesURL = "https://random-data-api.com/api/name/random_name";

function getThreeRandomNames(): Promise<String[]> {
    let threeNames: string[] = [];
    return new Promise<String[]>((resolve, reject) => {
        fetch(namesURL)
            .then((response) => response.json())
            .then((data) => {
                threeNames.push(data.name);
                fetch(namesURL)
                    .then((response) => response.json())
                    .then((data) => {
                        threeNames.push(data.name);
                        fetch(namesURL)
                            .then((response) => response.json())
                            .then((data) => {
                                threeNames.push(data.name);
                                resolve(threeNames)
                            }
                            );
                    }
                    );
            }
            );
    }
    );
}

getThreeRandomNames().then(e => console.log(e))

export { }