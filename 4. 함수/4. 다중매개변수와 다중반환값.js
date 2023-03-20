// multi parameter : 매개변수가 n개인 경우

// 집합 자료구조를 매개변수로 사용
// [배열, 객체]

// n개의 정수를 전달하면 해당 정수의 총합을 구해주는 함수

// 스프레드 (ES6)
function addAll(...numbers) { // push(), splice() 도 같은 방식!
    // 네가 원하는 거 다 담아서 박스로 줘
    var total = 0;

    for (var n of numbers) {
        total += n;
    }
    return total;
}

// 박스 = 배열
var r1 = addAll(1, 3, 5, 10, 20);
console.log(`r1 : ${r1}`);


// function bar(...arr1, ...arr2) {
//     // 배열을 여러개 전달할 때에는 ... 사용 금지
// }

// bar(10, 20, 500, 1000, 1500);


console.log('=========================');

// 함수의 리턴값은 언제나 하나!
// 2개의 정수를 전달하면 덧셈, 뺄셈, 곱셈, 나눗셈의 결과를 다 리턴받고싶어
// => 집합 자료구조에 담아서 리턴하면 됨

function operateAll(n1, n2) {
    // var addResult = n1 + n2;
    // var subResult = n1 - n2;
    // var multiResult = n1 * n2;
    // var divideResult = Math.floor(n1 / n2);
    // 한 번 쓰고 마는 변수들이기 때문에 인라인으로 작성하는게 좋음
    // 두 번 이상 쓰면 변수에 담아서 쓰기
    
    // var resultSet = [
    //     n1 + n2, 
    //     n1 - n2, 
    //     n1 * n2, 
    //     Math.floor(n1 / n2)
    // ];

    // 위의 코드들을 단축!
    // 배열의 주소값 하나를 리턴
    return {
        // 순서를 바꿔도 수정할 필요없도록 배열 말고 객체를 사용
        plus: addAll(n1, n2), 
        minus: n1 - n2, 
        multiply: n1 * n2, 
        divide: Math.floor(n1 / n2)
    }; 
}

var result = operateAll(10, 5); // 두번 이상 재활용되니까 변수에 담기
console.log(`덧셈 결과: ${result.plus}`);
console.log(`뺄셈 결과: ${result.minus}`);
console.log(`곱셈 결과: ${result.multiply}`);
console.log(`나눗셈 결과: ${result.divide}`);

// 배열일때
// console.log(`덧셈 결과: ${result[0]}`);
// console.log(`뺄셈 결과: ${result[1]}`);
// console.log(`곱셈 결과: ${result[2]}`);
// console.log(`나눗셈 결과: ${result[3]}`);

// result.push('메롱'); // 가능
// result.pop(); // 가능
// result[0].push('메롱'); // 불가능
// result[0] * 3; // 가능