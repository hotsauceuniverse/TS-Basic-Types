//new Symbol로 사용할수 없다.
//Symbol을 함수로 사용해서 symbol타입을 만들어 낼수 있다.

console.log(Symbol('foo') === Symbol('foo')); //false

//프리미티브 타입의 값을 담아서 사용한다.
//고유하고 수정불가능한 값으로 만들어준다.
//주로 접근을 제어하는데 쓰는 경우가 많다.

const sym = Symbol();

const obj = {
  [sym] : "value",
}

obj[sym]