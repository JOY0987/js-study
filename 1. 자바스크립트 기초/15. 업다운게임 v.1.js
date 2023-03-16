alert('~ 재미있는 UP&DOWN 게임 ~');
alert('[ 1 ~ 50 사이의 무작위 숫자를 맞춰보세요!! ]');

var an = Math.floor(Math.random() * 50 + 1);

while(true) {
    var n = +prompt('숫자를 입력!');
    if(n >= 1 && n <= 50) {
        if(n < an) {
            alert('UP!!');
            continue;
        } else if(n > an) {
            alert('DOWN!!');
            continue;
        } else {
            alert('딩동댕~~~!!');
            break;
        }
    } else {
        continue;
    }
}
