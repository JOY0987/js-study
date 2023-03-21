// 1. 변수의 중복선언 허용
// var x = 10;
// var x = '김철수';

// console.log(`x: ${x}`); // 기존의 x가 김철수로 자동 수정


let x = 10;
// let x = '김철수';
console.log(`x: ${x}`);
// SyntaxError: Identifier 'x' has already been declared


// 2. 블록레벨 스코프 지원 X
// var i = '안녕';

// for (var i = 0; i < 3; i++) {
//     console.log(i);
// }
// console.log(`i: ${i}`); // i: 3, 안녕으로 돌아오지 않음

// let 으로 처리했을 경우
let i = '안녕';

for (let i = 0; i < 3; i++) {
    console.log(`for문 내부 i: ${i}`); // 0, 1, 2
    // for문이 끝나면 메모리에서 내부 i 삭제
}

console.log(`for문 바깥쪽 i: ${i}`); // 안녕



// 3. 변수 호이스팅 : 변수선언문을 자동으로 맨위로 올림
z = 100;
console.log(z);

var z; // 실행시 자동으로 z = 100; 위로 올라감
       // 심지어 선언하지 않아도 자동으로 선언해줌

// let 으로 처리했을 경우
z = 100;
console.log(z);

let z; // ReferenceError: Cannot access 'z' before initialization

