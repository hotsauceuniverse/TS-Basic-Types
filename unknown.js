"use strict";
const aNumber = maybe; //unknown형식은 number 형식에 할당할 수 없다.
if (maybe === true) {
    const aBoolean = maybe;
}
if (typeof maybe === 'string') {
    const aString = maybe;
}
// 타입가드를 통해서 타입을 한정시켜야지만 쓸수있는 것이 unknown이다.
// any와 짝으로 any보다 Type-safe한 타입
// any와 같이 아무거나 할당할 수 있다.
// 컴파일러가 타입을 추론할 수 있게끔 타입의 유형을 좁히거나 타입을 확정해주지 않으면 다른 곳에 할당 할 수 없고 사용할 수 없다.
// unknown 타입을 사용하면 runtime error를 줄일 수 있다.
