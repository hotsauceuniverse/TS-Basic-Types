"use strict";
//create by object literal
const person1 = { name: 'seyoung', age: 27 };
//create by Object.create
const person2 = Object.create({ name: 'seyoung', age: 27 });
//object : 'primitive type이 아닌것'을  나타내고 싶을때 사용하는 타입
//non-primitive type : not number, string, boolean, bligint, symbol, null, or undefined
let object = {};
object = { name: 'sam' };
object = [{ name: 'sam' }];
object = 39; //Error
object = 'sam'; //Error
object = true; //Error
object = 100n; //Error
object = Symbol(); //Error
object = null; //Error
object = undefined; //Error
