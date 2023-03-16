// 4 ~ 7 까지의 누적합

var total = 0;
var n = 4;

while (n <= 7) {
    total += n;
    n++;
}

console.log(`4 ~ 7까지의 누적합: ${total}`);



// x ~ y 까지의 누적합

var x = +prompt('첫번째 숫자를 입력!');
var y = +prompt('두번째 숫자를 입력!');

var total = 0;
var n = x;

while (n <= y) {
    total += n;
    n++;
}

console.log(`${x} ~ ${y}까지의 누적합: ${total}`);