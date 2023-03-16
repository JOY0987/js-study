// 난수 범위 : 1 ~ 20
// 사칙연산 모두

alert('~ 재미있는 사칙연산 게임 ~');
alert('[즐겁게 문제를 푸시다가 지겨우면 0을 누르세요~]');
// 난이도 설정
var level = +prompt(
    `~ 난이도를 설정합니다 ~
    [ 1. 상 (1~100) | 2. 중 (1~50) | 3. 하 (1~20) ]`
    );

var MAX_NUM;

if(level === 1) {
    MAX_NUM = 100;
} else if (level === 2) {
    MAX_NUM = 50;
} else if (level === 3) {
    MAX_NUM = 20;
} else {
    MAX_NUM = 9999; // 이스터에그
}

var ca = 0;
var ia = 0;
var car;
var firNum;
var secNum;
var answer;

while (true) {

    var x = Math.floor(Math.random() * MAX_NUM) + 1;
    var y = Math.floor(Math.random() * MAX_NUM) + 1;
    var an;
    var n = 0;

    if (x === y) {
        continue;
    } else if (x > y) {
        // x가 y보다 클 때
        firNum = x;
        secNum = y;
    } else {
        // y가 x보다 클 때
        firNum = y;
        secNum = x;
    }

    var calNumber = Math.floor(Math.random() * 4) + 1; // 랜덤 부호를 결정할 정수 생성
    if (calNumber === 1) {
        cal = '+';
        answer = firNum + secNum;
    } else if (calNumber === 2) {
        cal = '-';
        answer = firNum - secNum;
    } else if (calNumber === 3) {
        cal = 'x';
        answer = firNum * secNum;
    } else if (calNumber === 4) {
        cal = '/';
        answer = Math.floor(firNum / secNum);
    }

    while (true) {
        an = prompt(`Q${n++}. ${firNum} ${cal} ${secNum} = ??`);
        
        //아무것도 입력 안하면 다시 입력
        if (an === '') {
            continue;
        } else {
            an = +an;
            break;
        }
    }

    if (an === answer) {
        alert('정답입니다!');
        ca++;
        continue;
    } else if (an === 0) {
        alert('게임을 종료합니다!');
        break;
    } else if (an !== answer) {
        alert('틀렸어요~');
        ia++;
        continue;
    } 
}
alert(`정답횟수: ${ca}회, 틀린횟수: ${ia}회`);