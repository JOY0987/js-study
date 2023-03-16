outer: for (var i = 0; i < 3; i++) {
    inner: for (var j = 0; j < 2; j++) {
        if ( i === j ) {
            break inner; // outer를 적어 밖에 있는 for문을 멈출 수도 있습니다.
                         // 기본적으로 break는 자기가 있는 if문이 포함된 반복문만 종료합니다.
        }
        console.log(`[ ${i}, ${j} ]`);
    }
}
console.log('========================');


// 50000번의 루프 중 1~10사이의 랜덤숫자중 3이
// 나오면 반복을 중간에 멈추고 싶다.

for (var i = 0; i < 50000; i++) {
    var rn = Math.floor(Math.random() * 10) + 1;
    console.log(rn);
    if (rn === 3) {
        console.log(`반복문 종료 : ${i}`);
        break;
    }

    console.log('메롱'); // rn이 3이 되어 break가 실행되면, 밑에 있는 메롱도 출력되지 않습니다.

}