// continue : 이번 회차의 남은 코드만 skip, 다음 회차 이어서 진행
// break : 남은 회차 모두 취소, 반복문 탈출


// for (var i = 1; i <= 10; i++) {
//     if (i % 2 === 0) continue;
//     console.log(i);
// }
// console.log('반복문 종료!'); // 1부터 10까지 다 돌고나서 출력


while (true) {

    var n = +prompt('숫자를 입력!!');

    if (n === 0) break;
    else if (n === 1) continue;

    alert('메롱메롱~~');
}
alert('끝났지롱~~');
// 0 입력 : 밑 코드들 다 씹고 끝났지롱 출력, 반복문 탈출 O
// 1 입력 : while 처음으로 다시 돌아감, 반복문 탈출 X