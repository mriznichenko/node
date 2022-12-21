import {setProto} from "./MyFunctions.js";
import {AbstractProduct} from './AbstractProduct.js'
import {Clothes} from "./Clothes.js";
import {Electronics} from "./Electronics.js";

setProto(Clothes, AbstractProduct)
setProto(Electronics, AbstractProduct)

let wrongProduct;
try {
    wrongProduct = new AbstractProduct();
} catch (e) {
    wrongProduct = "Error caught. Message:'" + e.message + "'"
}

let shirt = new Clothes();
shirt.name = "green polo";
shirt.material = "cotton";

let teapot = new Electronics();
teapot.power = 1600;
teapot.warranty = 36;

console.log()
