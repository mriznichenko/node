"use strict";
/**
 * 2.2.1.
 * Використовуйте node-fetch щоб зробити запит
 * await fetch("https://api.ipify.org?format=json")
 * отримати відповідь та вивести на екран свій айпі
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
const getIP = () => __awaiter(void 0, void 0, void 0, function* () { return yield (yield (0, node_fetch_1.default)("https://api.ipify.org?format=json")).json(); });
getIP().then(ipObj => console.log(ipObj));
