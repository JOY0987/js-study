/*
- Quiz. 
아래 요구사항에 맞는 코드를 작성하고 
브라우저에서 실행하여 테스트하세요.
- 요구사항
1. prompt 창을 띄워 사용자에게 숫자를 입력해 달라고 요청한 후, 
   입력받은 값들을 배열에 순차적으로 저장합니다.
   
2. '그만'이라고 입력하면 질문을 멈추고
   입력했던 숫자배열과 숫자의 총합(배열 요소의 합)을 계산하여 출력하세요.
*/

// 숫자를 저장할 배열
var numbers = [];
var total = 0;

while (1) {
    var inputData = prompt('숫자를 입력하세요\n그만하려면 \'그만\'이라고 입력하세요!');

    // 그만 입력시 반복문 탈출, 아무것도 입력 안 할시 입력창 루프
    if (inputData === '그만') {
        break;
    } else if (inputData === '') {
        continue;
    }
    // 배열에 요소 추가
    numbers.push(+inputData); // parseInt 보다 간결하게 숫자로 변환!
    // 입력한 숫자의 총합에 더하기
    total += inputData;
}
alert(
    `입력한 숫자 목록 [${numbers}]
입력한 숫자 총합: ${total}`
);

console.log(numbers);