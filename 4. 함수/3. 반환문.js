function add(n1, n2) {
    return n1 + n2; // 탈출문

    console.log('ㅋㅋ'); // return 시 바로 함수를 빠져나가서 접근 불가
}

// 반환값 : 함수 호출 이후에 함수 밖으로 전달되는 값
var r1 = add(5, 7);

add(r1, r1 * 2); // add(12, 24)

// 안쪽으로 쭉 가서 실행, 같은 레벨끼리는 왼쪽부터 실행
var r2 = add(add(2, 3), add(add(3, 4), add(6, 2)));
console.log(`r2 : ${r2}`);


// 리턴이 없는 함수 (void 함수)
// 안 쓸거니까 값 들고오지마라
function multi(n1, n2) { // 소비함수 (consumer 함수)
    var result = n1 * n2;
    console.log(`${n1} x ${n2} = ${result}`);
}

// 리턴이 없는 함수는 변수에 담지말고, 다른 함수에 인수로 전달 X
var r3 = multi(10, 3); // 리턴이 없어서 r3에 저장 불가

console.log(`r3 : ${r3}`); // undefined

multi(add(4,3), add(5,5));

var r4 = add(multi(3,2), 40);
console.log(`r4 : ${r4}`); // NaN

// return 탈출문
function callName(nickName) {

    var prohibits = ['멍청이', '돌아이', '홍길동'];

    if(prohibits.includes(nickName)) {
        console.log('잘못된 닉네임임');
        return; // break 효과
    }
    console.log(`${nickName}님 안녕하세요!`);
}

callName('돌아이');


// break 와 return 의 차이
function stopLoop(flag) {

    while (true) {
        var flag = prompt('명령어를 입력하세요!');
        if (flag === '멈춰') {
            break;
        }
        alert(flag);
    }

    alert('수고용!~~');
    // break => 반복문만 끝내기 때문에 나옴
    // return => 함수 자체를 끝내기 때문에 안나옴, 좀 더 강력!
}

stopLoop();