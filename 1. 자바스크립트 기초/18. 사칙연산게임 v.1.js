// 난수 범위 : 1 ~ 20
// + 연산만

alert('~ 재미있는 사칙연산 게임 ~');
alert('[즐겁게 문제를 푸시다가 지겨우면 0을 누르세요~]');


while(true) {
    var x = Math.floor(Math.random *20 + 1);
    var y = Math.floor(Math.random *20 + 1);
    var an;
    var n = 0;
    n++;

    if(x === y) {
        continue;
    } else if (x > y) {
        // x가 y보다 클 때
        alert(`Q${n}. ${x} + ${y} = ??`);
    } else {
        // y가 x보다 클 때
        alert(`Q${n}. ${y} + ${x} = ??`);
    }

    an = +prompt('정답은?');
    
    if(an === (x+y)) {
        alert('정답입니다!');
        continue;
    } if(an === 0) {
        alert('게임을 종료합니다!');
        break;
    } else {
        alert('틀렸어요~');
        continue;
    }
}