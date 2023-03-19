var a = 10;
var b = a;
a = 15;

console.log(b);

var arr1 = [1, 2, 3, 4];
var arr2 = arr1;

arr1[1] = 999;

arr2[0] = 77;

console.log('arr1:', arr1);
console.log('arr2:', arr2);
// arr1, arr2 는 [1,2,3,4] 배열의 주소값을 공유합니다. 
// 실제 배열의 데이터가 들어있는 게 아닙니다.

console.log('=========================');

// 배열의 생성
// 배열 변수 이름 관례: 복수형(이름만 봐도 여러개 있겠거니 하도록)
//                     list어미
var fruits = [
    '오렌지',
    '라임',
    '레몬'
]; // 배열 리터럴

console.log(typeof fruits); // 배열의 타입 : object
console.log(fruits); // 배열 전체 내부 확인, 브라우저에서는 -> [[Prototype]] : Array(0)    
console.log(`배열의 데이터 수: ${fruits.length}`);
// 배열들은 데이터가 딱붙어있기 때문에 길이라고 표현한다.

// 배열 데이터 참조(reference)
console.log(`첫번째 데이터: ${fruits[0]}`);
console.log(`마지막 데이터: ${fruits[fruits.length-1]}`);

// 배열 요소 수정
fruits[1] = '파인애플';

console.log(fruits);

// 수정 시 주의사항
// 해당 index 에 값이 있는지 확인하고 수정해야합니다.

// fruits[4] = '초콜릿';
// console.log(fruits);

// 배열 내부데이터 전체 참조 (순회 : travis)
// 선형 탐색 : 순차적으로 확인해보면서 찾기
var target = '바나나';
// 찾았는지에 대한 여부
var findFlag = false;
for (var i = 0; i < fruits.length; i++) { 
    // console.log(fruits[i]);

    if(fruits[i] === target) {
        console.log(`${target} 과일은 존재함!`);
        findFlag = true;
        break;
    }
}

if(!findFlag) console.log(`${target} 과일은 존재하지않음!`);


// for ~ of 반복문 ( 배열 전용 반복문 )
var weekDays = ['월', '화', '수', '목', '금', '토', '일']; 

console.log('=========================');

// 특정 부분을 찾기 위해 순회할 때는 일반 for 가 좋습니다.
// for (var i = 0; i < weekDays.length; i++) {
//     console.log(`${weekDays[i]}요일!`);
// }

// 전체적으로 순회할 때는 for of 가 좋습니다.
// 배열의 길이만큼 반복횟수가 정해집니다.
for (var day of weekDays) {
    console.log(`${day}요일!`);
}