var foodList = ['닭꼬치', '볶음밥', '짜장면', '족발'];

var count = 0;

var target = '짜장면';

// indexOf : 배열의 특정 데이터가 몇번 인덱스에 있는지 탐색

var index = foodList.indexOf(target, 10);
//                   indexOf(찾을요소, 찾기 시작할 index 번호)
//                   탐색 실패하면 -1 반환

console.log(`찾은 인덱스 : ${index}`);


// 자세하게 들여다보기... 이것도 구현할 줄 알아야합니다.
// for (var food of foodList) {
//     if (food === target) {
//         break;
//     }
//     count++; // 탈출하기 전까지 반복
// }

// console.log(`찾은 인덱스 : ${count}`);



// slice() : 배열을 일정부분 잘라냅니다. 사본배열을 반환합니다.
foodList.push('오뎅', '순대국밥');

console.log(foodList);


// 1번부터 4번 미만까지 추출
var slicedFoods = foodList.slice(1, 4);
console.log(slicedFoods);
// [ '볶음밥', '짜장면', '족발' ] => 1 이상 4 미만
console.log(foodList);

// 2번부터 끝까지 추출
var slicedFoods2 = foodList.slice(2);
console.log(slicedFoods2);

// 원본배열을 그대로 복사하여 원본에 영향없이 수정 가능
var slicedFoods3 = foodList.slice();
console.log(slicedFoods3);


// reverse() : 배열 역순으로 배치, 원본이 변합니다.
console.log('====================================');
var nums = [10, 20, 30, 40, 50];

var copyNums = nums.slice(); // 카피본을 만들어서 뒤집는게 좋습니다.
nums.reverse();

console.log(nums);


// concat() : 배열 2개를 연결
console.log('====================================');
var arr1 = [10, 20, 30];
var arr2 = [100, 900, 700, 1000];

var concatedArr = arr1.concat(arr2);

console.log(concatedArr);


// includes() : 배열에 특정 데이터가 존재하는지 확인
console.log('====================================');

var resultFlag = foodList.includes('닭꼬치'); // 있어? => true of false
console.log(resultFlag);


// splice() : 배열의 특정 요소 제거 혹은 삽입
console.log('====================================');
console.log(foodList);

// 원본에 반영, but 안전을 위해 카피본에 하세요.
foodList.splice(1, 2); // 1번 인덱스부터 2개 지워
console.log(foodList);

foodList.splice(0, 1, '보쌈'); // 0번 인덱스부터 1개 지우고 '보쌈' 넣어
console.log(foodList);

foodList.splice(1, 0, '마라탕'); // 1번에 마라탕 삽입 (아무것도 안지우고, 1번은 뒤로 밀려남)
console.log(foodList);

foodList.splice(2, 0, '아이스크림', '떡볶이'); // 2번부터 차례대로 아이스크림, 떡볶이 삽입
console.log(foodList);

// 2번 다음부터 끝까지 다 지워
foodList.splice(2);
console.log(foodList);
