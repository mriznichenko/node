"use strict";
/**
 * 2.2.4.2
 * Напишіть функцію , яка повинна за мінімальну кількість запитів
 * отримати користувача жінку:
 *
 * https://random-data-api.com/api/users/random_user
 *
 * з async/await
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
const baseURI = "https://random-data-api.com/api/v2/";
const usersPath = "users";
const options = {
    /** users quantity; maximum allowed size is 100 */
    size: 100,
    is_xml: true,
    response_type: "json"
};
function buildGetURI(baseURI, usersPath, options) {
    const optionsInGetSyntax = Object.entries(options).map(entry => entry.join("="));
    return baseURI + usersPath + "?" + optionsInGetSyntax.join("&");
}
function getUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        let responce = yield (0, node_fetch_1.default)(buildGetURI(baseURI, usersPath, options));
        let data = yield responce.json();
        return yield data;
    });
}
function searchFemale(users) {
    let femaleUser;
    for (let user of users) {
        if (user.gender === "Female") {
            femaleUser = user;
            break;
        }
    }
    return femaleUser;
}
function getFemaleUser() {
    return __awaiter(this, void 0, void 0, function* () {
        let requestsCounter = 0; // infinite-protection
        let female, data;
        while (female === undefined && requestsCounter < 100) {
            data = yield getUsers();
            female = searchFemale(data);
            requestsCounter++;
        }
        return female;
    });
}
getFemaleUser().then(e => console.log(e));
