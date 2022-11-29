/* 1.

Використовуйте node-fetch щоб зробити запит
    await fetch("https://api.ipify.org?format=json")
отримати відповідь та вивести на екран свій айпі

*/

// // SOLUTION
// import fetch from 'node-fetch';
// const getIP = async () => await (await fetch("https://api.ipify.org?format=json")).json();
// getIP().then(ipObj => console.log(ipObj));




/* 2.
Напишіть функцію за мотивами п.1., яка повертає ваш айпі.
*/

// SOLUTION
// наче 2.2.1 - це якраз те саме, що треба було зробити тут.



/* 3.
Напишіть функцію, яка повертає три імені, зробивши ПАРАЛЕЛЬНО 
три запити на https://random-data-api.com/api/name/random_name
    скористайтесь async/await + Promise.all
    скористайтесь async/await але без Promise.all
    скористайтесь чисто промісами, без async/await, без Promise.all.... це може бути складно
*/

// SOLUTION

// 3.1 - скористайтесь async/await + Promise.all
import fetch from 'node-fetch';
async function getNamesA () {
    let result = [];
    const url = "https://random-data-api.com/api/name/random_name";

    for (let i = 0; i < 3; i++) {
        let responce = await fetch(url);
        let data = await responce.json();
        let name = await data.name;
        result.push( name);
    }
    return result;
}


function printNames(input : Promise <string []>) :void{
    input.then(names => console.log(names));
}

printNames(getNamesA())


