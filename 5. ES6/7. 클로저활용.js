// const increase = (function(a, b) {})(1, 2);
//                    정의            호출

/*
const increase = (() => {
    let count  = 0; // increase 클로저의 카운트 변수
    return () => ++count;
})();
const decrease = (() => {
    let count  = 0; // decrease 클로저의 카운트 변수
    return () => --count;
})();

console.log(increase()); // 1
console.log(increase()); // 2
console.log(decrease()); // -1
*/

// 한 클로저 안에 increase와 decrease를 모두 넣어주어야함

/*
function counterClosure() {
    let count = 0;
    function increase() {
        return ++count;
    }
    function decrease() {
        return --count;
    }

    return {
        increase, //: increase, 키 밸루 이름 같으니 생략 (ES6)
        decrease //: decrease
    }; // 객체를 리턴
}

const counter  = counterClosure();

const increase = counter.increase;
const decrease = counter.decrease;

console.log(increase()); // 1
console.log(increase()); // 2
console.log(decrease()); // 1
*/

/*
// 화살표 함수로
const counter = (() => {
    
    let count = 0;
    
    return {
        increase: () => ++count,
        decrease: () => --count
    };
})();

const {increase, decrease} = counter;

console.log(increase()); // 1
console.log(increase()); // 2
console.log(decrease()); // 1
*/


/*
// 콜백 클로저
function counterWithCbClosure() {
    let count = 0;

    function process(callback) {
        return count = callback(count);
    }

    return process; // 헬퍼 함수 전체가 리턴
}

const counter_ = counterWithCbClosure(); // counter_ 는 process 함수

console.log(counter_(c => ++c)); // 1
console.log(counter_(c => c +=3)); // 4
console.log(counter_(c => c **=2)); // 16
*/



// 콜백 클로저 화살표 함수로
const counter_ = (() => {
    let count = 0;

    return callback => count = callback(count);

})();

console.log(counter_(c => ++c)); // 1
console.log(counter_(c => c +=3)); // 4
console.log(counter_(c => c **=2)); // 16
