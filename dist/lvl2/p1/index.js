"use strict";
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
// // SOLUTION
// function stringEntries(a : unknown[] | object) {
//   return Array.isArray(a) ? a : Object.keys(a)
// }
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
// // SOLUTION
// async function world(a : number) {
//   return "*".repeat(a)
// }
// const hello = async () => {
//  return await world(10)
// }
// hello().then(r => console.log(r)).catch(e => console.log("fail"))
