// var age = +prompt('당신의 나이는??');
// alert(`내 나이: ${age + 1}살`) ;
// prompt 는 모든 입력값을 string으로 저장합니다.
// number로 저장하고싶을 경우, +prompt 로 작성해줍니다.



if (age > 19) {
    alert('성인입니다.');
    alert('주류를 구매할 수 있습니다.');
}
// if(age <=19) if를 또 만들면 CPU가 논리판단을 2번 하기 때문에 느립니다.
else {
    alert('미성년자입니다.');
}



var age = Math.random();
// 0 이상 1 미만

alert(`age: ${age}살`);

// 1 ~ 100의 정수 난수
/*
    Math.random()       -   0.0 <= ~  < 1.0
    Math.random() * 100 -   0.0 <= ~  < 100.0
    Math.floor(Math.random() * 100)
        - 0 <= ~  < 100 (Math.floor : 실수의 소수점을 갖다버림)
    Math.floor(Math.random() * 100) + 1
        - 1 <= ~  < 101

    공식: x이상 y이하의 정수 난수 (외우기)
    랜덤으로 배경사진 띄우기 등에도 사용할 수 있습니다.
    Math.floor(Math.random() * (y - x + 1)) + x
*/
