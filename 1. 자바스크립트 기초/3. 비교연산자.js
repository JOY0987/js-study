var a = 5;
var b = '5';

console.log(a == b); // true -> js에서 쓰지마세요.
console.log(a === b); // false
console.log(a != b); // false -> js에서 쓰지마세요.
console.log(a !== b); // true

console.log('======================');

// == 비교는 결과 예측이 어려움
// === 쓰면 예상대로 all false
console.log('0' === '');
console.log(0 === '');
console.log('0' === 0);
console.log(false === 'false');
console.log(false === '0');


// 문자 대소비교
console.log('======================');
console.log('cobra' < 'cobrO');


// 논리 연산자
var money = 0;

if (!money) {
    console.log('저는 그지입니다.');
} else {
    console.log('저는 돈이 있습니다.');
}

