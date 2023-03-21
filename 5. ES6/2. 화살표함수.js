// 모두 똑같은 결과!

// 함수 선언문 방식
// function multi(n1, n2) {
//     return n1 * n2;
// }

// 함수 표현식
// const multi = function(n1, n2) {
//     return n1 * n2;
// };

// ES6에서 더 줄인 버전
// 화살표 함수
const multi = (n1, n2) => n1 * n2;

const r1 = multi(10, 3);
console.log(`r1: ${r1}`); // r1: 30


// function sayHello() {
//     console.log('안녕하세요');
// }

// const sayHello = function() {
//     console.log('안녕하세요');
// }

const sayHello = () => console.log('안녕하세요');

sayHello(); // 안녕하세요



const kim = {
  name: '김철수', 
  age: 30, 
  // kimMulti: multi, // greeting 함수에 multi 함수 대입
  greeting: sayHello,
  dance: () => console.log('춤을 신나게 춥니다')
};

kim.dance();
kim.greeting();

// console.log(kim.kimMulti(5, 3)); // 15
// console.log(kim.kimMulti()); // NaN
// console.log(kim.multi(5, 3)); // 불가



// 정수 1개를 전달하면 해당 정수의 제곱값을 리턴하는 
// 화살표 함수 pow 작성해보세요.
const pow = number => number ** 2;



// 함수 선언문과 함수 표현식(화살표 함수)의 차이
console.log('========================');
// 함수 선언문
const r2 = sub(20, 10); // 함수 선언문 위, 밑 모두 호출 가능

function sub(n1, n2) {
  return n1 - n2;
}

console.log(`r2 : ${r2}`);


// 화살표 함수
const divide = (n1, n2) => n1 / n2;

const r3 = divide(30, 6); // 함수 표현식 밑에서만 호출 가능
console.log(`r3 : ${r3}`);