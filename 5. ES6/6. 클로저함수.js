const zzz = calculator(5, 7);
console.log(typeof zzz); // function

const n = zzz();
console.log(`n: ${n}`); // 30
// ===> calculator 부모함수의 호출이 끝났는데도 zzz()에 매개변수나 값이 살아있음!



// 자바스크립트의 함수는 함수를 리턴할 수 있음 (일급객체)
/*
function calculator(n1, n2) {

    function add() {
        return n1 + n2;
    }

    return add; // 내부의 헬퍼함수를 리턴
    // return add(); => n1 + n2 값 리턴
}

// 화살표 함수로 만들기
const calculator = (n1, n2) => () => n1 + n2;
*/


// let count = 0; // 카운팅 변수 (전역 변수)

// // 카운트를 올리는 함수
// const increase = () => ++count;

// console.log(increase());
// console.log(increase());

// count = 999;

// console.log(increase()); // 3??



// const increase = () => {
//     let count = 0; // 지역 변수
//     return ++count;
// }
// console.log(increase());
// console.log(increase());
// console.log(increase()); // 3??



// const increaseClosure = () => {
//     let count = 0; // 지역 변수

//     // 헬퍼함수
//     const increase = () => ++count;
    
//     return increase;
// }

// const increase = increaseClosure();

// console.log(increase());
// console.log(increase());
// count = 999;
// console.log(increase()); // 3







// 즉시 실행 함수 : 정의와 동시에 호출
// 재활용 불가능
const result = (function(n1, n2) {
    return n1 + n2;
})(5, 8);
console.log(result); 



const increase = (() => {
    let count = 0; // 지역변수
    return () => ++count;
})();

console.log(increase());
console.log(increase());
console.log(increase()); // 3