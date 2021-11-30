"use strict";
// TypeScript에서, undefined와 null은 실제로 각각 undefined및 null 이라는 타입을 가진다.
// 둘다 소문자만 존재한다.
let u = undefined;
let n = null;
let v = undefined; //void는 undefined만 넣을 수 있다.
// tsconfig를 설정하지 않으면 undefined와 null은 다른 모든 타입에 서브 타입으로 존재한다.
// number에 null또는 undefined를 할당할 수 있다는 의미 
// 컴파일 옵션에서 `--strictNullChecks`를 사용하면, null과 undefined는 void나 자기 자신들에게만 할당할 수 있다.
// => 이경우, null과 undefined를 할당할 수 있게 하려면, union type을 이용해야 한다. 
let union = null;
union = 'seyoung';
