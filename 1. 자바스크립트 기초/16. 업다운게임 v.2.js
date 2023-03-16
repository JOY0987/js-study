alert('~ 재미있는 UP&DOWN 게임 ~');
alert('[ 1 ~ 50 사이의 무작위 숫자를 5번 안에 맞춰보세요!! ]');

var an = Math.floor(Math.random() * 50 + 1);
var boo = true;

while (true) {
    for (var i = 5; i >= 0; i--) {
        if (boo === false) {
            break;
        }
        if(i === 0) {
            alert('기회를 모두 소진했습니다. GAME OVER!!');
            break;
        }
        var n = +prompt('숫자를 입력!');
        if (n >= 1 && n <= 50) {
            if (n < an) {
                alert('UP!!');
                alert(`기회가 ${i-1}번 남았습니다.`);
                continue;
            } else if (n > an) {
                alert('DOWN!!');
                alert(`기회가 ${i-1}번 남았습니다.`);
                continue;
            } else {
                alert('딩동댕~~~!!');
                boo = false;
                break;
            }
        } else {
            alert(`기회가 ${i-1}번 남았습니다.`);
            continue;
        }
    }   
    break;
}