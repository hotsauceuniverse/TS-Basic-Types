// 어떠한 타입도 가지지 않는 빈 상태
// 값은 없고 타입만 있다.

function returnVoid(message: string): void {
  console.log(message)

  return undefined;
}

returnVoid('리턴이 없다.')

