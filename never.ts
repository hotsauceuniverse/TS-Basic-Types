function error(message: string): never {
  throw new Error(message);
}

function fail() {
  return error('falied');
}

function infiniteLoop(): never {
  while(true) {}
}

// never타입은 모든 타입의 subtype이며, 모든 타입에 할당 할 수 있다.
// 하지만, never에는 그 어떤것도 할당할 수 없다.
// any조차도 never에게 할당 할 수 없다.
// 잘못된 타입을 넣는 실수를 막고자 할 때 사용한다.

let e: string = 'hello';

if (typeof e !== 'string') {
  e; //=> e = never
}