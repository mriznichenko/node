import * as methods from "./AbstractProductMethods.js";

let abstractProductConstructor = {
    get ID() {
        return this._ID;
    },
    set ID(id) {
        this._ID = id;
    }
}
function AbstractProduct() {
    let instance = Object.create(abstractProductConstructor);
    instance._ID = "default ID";
    return instance;
}

let clothesConstructor = {
    clothesFoo() {
        return "default clothes foo() result"
    }
}
function Clothes() {
    let clothesInstance = AbstractProduct();
    Object.setPrototypeOf(clothesInstance, clothesConstructor)
    return clothesInstance
}

Object.setPrototypeOf(clothesConstructor, abstractProductConstructor)
Object.setPrototypeOf(Clothes, AbstractProduct)
let aaa = new Clothes();
console.log()