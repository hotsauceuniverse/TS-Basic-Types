"use strict";
let x;
x = ['hello', 27];
x = [10, 'sam']; //순서가 달라 Error발생
x[0] = 'world';
const person = ['Mark', 30];
const [first, second, third] = person;
// Array는 항상 공통요소일수 밖에 없는 모임
// tuple은 길이가 정해져있고 앞뒤에 타입이 정확한, 다른 자료형
