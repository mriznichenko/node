"use strict";
/**
 * 2.2.3.2
 *
 * Напишіть функцію, яка повертає три імені, зробивши ПАРАЛЕЛЬНО
 * три запити на https://random-data-api.com/api/name/random_name
 *
 * скористайтесь async/await, але без Promise.all
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
const node_fetch_1 = __importDefault(require("node-fetch"));
const namesURL = "https://random-data-api.com/api/name/random_name";
function getName() {
    return __awaiter(this, void 0, void 0, function* () {
        let responce = yield (0, node_fetch_1.default)(namesURL);
        let data = yield responce.json();
        return yield data.name;
    });
}
function getNames() {
    return new Promise(resolve => {
        let array = [];
        getName()
            .then(e => array.push(e))
            .then(() => {
            getName()
                .then(e => array.push(e))
                .then(() => {
                getName()
                    .then(e => array.push(e))
                    .then(() => resolve(array));
            });
        });
    });
}
getNames().then(e => console.log(e));
