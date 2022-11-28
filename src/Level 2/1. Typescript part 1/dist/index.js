"use strict";
/* 1.

function getFirstWord(a) {
  return a.split(/ +/)[0].length;
}

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
// // SOLUTION:
// function getFirstWord(a : string) {
// 	return a.split(/ +/)[0].length;
// }
/* 2.

function getUserNamings(a) {
  return {
    fullname: a.name + " " + a.surname,
    initials: a.name[0] + "." + a.surname[0]
  };
}

*/
// // SOLUTION:
// function getUserNamings(a: {name : string, surname : string}) {
//   return { 
// 		fullname: a.name + " " + a.surname, 
// 		initials: a.name[0] + "." + a.surname[0] 
// 	};
// }
/* 3.

// <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining>

function getAllProductNames(a) {
  return a?.products?.map(prod => prod?.name) || [];
}

*/
// // SOLUTION:
// function getAllProductNames(a?: {products?: Array<{name?: string}>}) {
//   return a?.products?.map(prod => prod?.name) || [];
// }
/* 4.1

// easy way is using 'as' keyword
// hard way is ?...

function hey(a) {
    return "hey! i'm " + a.name();
}
hey({name: () => "roma", cuteness: 100})
hey({name: () => "vasya", coolness: 100})

*/
// // SOLUTION:
// // strict version: [a: string]: () => string | number
// // but... not sure we need to be strict here.
// // so let's use unknown
// function hey(a: {name: () => string, [a: string]: unknown} ) {
//     return "hey! i'm " + a.name();
// }
// hey({name: () => "roma", cuteness: 100})
// hey({name: () => "vasya", coolness: 100})
/* 4.2

function hey(abstractPet) {
    return "hey! i'm " + abstractPet.name();
}
let a = new Cat("myavchik", true)
let b = new Dog("gavchik", 333)
hey(a)
hey(b)

*/
// // SOLUTION
// class AbstractPet {
//   _name: string
//   some : boolean | number
//   constructor (name :string, some : boolean | number) {
//     this._name = name;
//     this.some = some;
//   }
//   name = () : string => {
//     return this._name;
//   }
// }
// class Cat extends AbstractPet{}
// class Dog extends AbstractPet{}
// function hey( abstractPet : {name: () => string}) {
//     return "hey! i'm " + abstractPet.name();
// }
// let a = new Cat("myavchik", true)
// let b = new Dog("gavchik", 333)
// hey(a)
// hey(b)
/*4.3

function hey(a) {
    return "hey! i'm " + a.name()
     + (a.type === "cat" ? ("cuteness: "+a.cuteness) : ("coolness: "+a.coolness))
}
hey({name: () => "roma", type: "cat", cuteness: 100})
hey({name: () => "vasya", type: "dog", coolness: 100})

*/
// //SOLUTION:
// type MyType = {
//   name: () => string,
//   type: string,
//   cuteness?: number,
//   coolness?: number
// }
// function hey(a: MyType) {
//   return "hey! i'm " + a.name()
//     + (a.type === "cat" ? ("cuteness: " + a.cuteness) : ("coolness: " + a.coolness))
// }
// hey({ name: () => "roma", type: "cat", cuteness: 100 })
// hey({ name: () => "vasya", type: "dog", coolness: 100 })
/* 5.
// google for Record type

function stringEntries(a) {
  return Array.isArray(a) ? a : Object.keys(a)
}

*/
// SOLUTION
function stringEntries(a) {
    return Array.isArray(a) ? a : Object.keys(a);
}
/*6.

// you don't know Promises and async/await yet. Or do you?
// ....can be hard, don't worry and SKIP if you do not know how to do it

async function world(a) {
    return "*".repeat(a)
}
const hello = async () => {
   return await world(10)
}
hello().then(r => console.log(r)).catch(e => console.log("fail"))

*/
// SOLUTION
function world(a) {
    return __awaiter(this, void 0, void 0, function* () {
        return "*".repeat(a);
    });
}
const hello = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield world(10);
});
hello().then(r => console.log(r)).catch(e => console.log("fail"));
let abcdefg = "last string compiled";
console.log(abcdefg);
