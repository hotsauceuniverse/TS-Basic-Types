"use strict";
//Template String
// 행에 걸쳐 있거나, 표현식을 넣을 수 있는 문자열
// 이 문자열은 `백틱` 기호에 둘러쌓여 있다.
// 포함된 표현식은 `${expr}` 과 같은 형태로 사용한다.
let myName = 'seyoung';
let age = 27;
let sentence = `Hello, my name is ${myName}.

I'll be ${age + 1}years old next month.`;
//template string을 사용하지 않을 경우
// let sentence: string = 'Hello, my name is' + myName + '.\n.\n'
// 'I'll be' +(age + 1) + 'years old next month.'
