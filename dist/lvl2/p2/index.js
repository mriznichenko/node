"use strict";
/* 1.

Використовуйте node-fetch щоб зробити запит
    await fetch("https://api.ipify.org?format=json")
отримати відповідь та вивести на екран свій айпі

*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const node_fetch_1 = __importDefault(require("node-fetch"));
function getNamesA() {
    return __awaiter(this, void 0, void 0, function* () {
        let result = [];
        const url = "https://random-data-api.com/api/name/random_name";
        for (let i = 0; i < 3; i++) {
            let responce = yield (0, node_fetch_1.default)(url);
            let data = yield responce.json();
            let name = yield data.name;
            result.push(name);
        }
        return result;
    });
}
function printNames(input) {
    input.then(names => console.log(names));
}
printNames(getNamesA());
