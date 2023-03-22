const userNames = ['김철수', '강감찬', '박영희'];

const [kim, kang, park] = userNames;

console.log(kim); // 김철수
console.log(kang); // 강감찬
console.log(park); // 박영희


const [firstObj] = [{ id: 1 }, { id: 2 }, { id: 3 }]
                    .filter(obj => obj.id >= 2);
console.log(firstObj);


// 변수 교환하기
let first  = 10, second = 20;
[second, first] = [first, second];
console.log(first); // 20
console.log(second); //10


// 앞에 2개는 변수에 각각 넣고 나머지는 다시 배열로 묶고싶다
const numbers = [1, 3, 5, 7, 9, 11];

const [one, three, ...others] = numbers;

/*
const copyNumbers = numbers.slice();

const one = copyNumbers.shift(); // 배열에서 첫번째 요소를 제거하면서 리턴
const three = copyNumbers.shift();
const others = copyNumbers;
*/

console.log('==============================');
console.log(one);
console.log(three);
console.log(others);
console.log(numbers);


// 스프레드로 배열 간편복사
console.log('==============================');

const foods = ['감튀', 'DQPC', '징거버거'];

const copyFoods = [...foods]; // 스프레드로 foods 배열을 펼쳐서 실제 데이터 복사
// const copyFoods = foods; // 주소 복사 (잘못된 복사 예시)

console.log(copyFoods);