"use strict";
let isDone = false;
isDone = true;
console.log(typeof isDone); //'boolean
let isOk = true;
let isNotOk = new Boolean(true);
//소문자 boolean은 primitive이지만 Boolean은 wrapper object여서 에러 발생
