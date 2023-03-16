// 입력받은 양의 정수만큼 + - 반복 출력
// 2-2. 홀수번째 반복에는 +가 붙어야하고
//      짝수번째 반복에는 -가 붙어야함

var n = +prompt('양의 정수를 입력!');
var x = 1;

while (x <= n) {
    if(x % 2 !== 0) {
        resultMark += '+';
    } else {
        resultMark += '-';
    }

    x++;
}

alert(resultMark);