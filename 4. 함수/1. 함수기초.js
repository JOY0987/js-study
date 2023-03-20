// 1. 함수 정의 - 만든다
// 재활용할 코드들을 뭉쳐서 창고에 넣어두는 개념

function happyGreeting(yourName) {
    console.log(`${yourName}님 안녕하세요! 방가방가!`);
    console.log('오늘도 즐거운 하루되세요~');
}



// 2. 함수 호출 - 사용한다

happyGreeting('루피');
// 중간에 1000줄 코딩해도 함수만 알면 빠르게 재사용 가능!
happyGreeting('뽀로로');



// for문으로 반복도 가능
function makeLine() {
    console.log('==============================');
}

for (var i = 0; i < 5; i++) {
    makeLine();
}



// 원의 넓이를 자주 구한다. 원주율 * 반지름 ^ 2


function calcAreaCircle(r) {
    // 원의 넓이 구할 때 필요한 것들을 모아두기 (코드의 모듈화)
    var PI = 3.14159265;
    var area = PI * r **2;
    return area; // 값을 구해서 갖다줘
}

var r1 = calcAreaCircle(5); // area 값이 r1 에 입력
// 1000줄 코딩
var r2 = calcAreaCircle(15);