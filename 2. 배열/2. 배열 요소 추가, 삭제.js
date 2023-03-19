var pets = ['멍멍이', '야옹이', '쩝쩝이'];

console.log(pets);

// 알고리즘적으로 좋지 않은 방법
// pets[pets.length] = '징징이';

// 배열에 한해서 push가 가능합니다.
// 배열 요소 = 배열을 이루는 데이터들
pets.push('징징이');
pets.push('어흥이');
var newLength = pets.push('거부기', '콩콩이');

console.log(pets);
console.log(newLength);


// 맨 끝 데이터 삭제
// pop 할게 없으면 undefined 반환
pets.pop();

console.log(pets);

// shift : 배열의 맨 첫번째 요소 제거
pets.shift();

console.log(pets);

// unshift(...items) : 배열의 맨 첫번째 데이터 추가
pets.unshift('짝짝이');
console.log(pets);