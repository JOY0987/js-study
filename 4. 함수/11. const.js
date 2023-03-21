// const : 선언시 지정된 값을 변경할 수 없는 상수
const TODAY_SALE_RATE = 0.2;

const PI = 3.14159265;

// PI = 5.5; // 값 변경 불가

console.log(PI);
// let PI; 출력 => undefined
// const PI; 출력 => SyntaxError: Missing initializer in const declaration


const kim = {
    name: '김철수',
    age: 25
};

// TypeError: Assignment to constant variable.
kim.name = '김칠리';

kim = {
    name: '김철수',
    age: 25
};


const a = 10;
const b = 20;

for (let i = 0; i < 5; i++) {
    
}