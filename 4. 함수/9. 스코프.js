// 매우 중요

var x = 10; // 전역 변수 : 프로그램의 전체영역에서 사용 가능

function foo(z) { // 매개변수도 지역 스코프를 가짐
    console.log(`지역변수 x 선언 전 : ${x}`); // undefined, 위에 가상의 선언문이 있기 때문
    var y = 20 + x; // 지역 변수 : 해당 함수 안에서만 사용 가능
    console.log(y - z); // NaN 

    var x = '홍길동';
    console.log(`지역변수 x 선언 후 : ${x}`); // 홍길동
                // 지역변수 x와 전역변수 x 중에 뭘 쓰지? => 지역변수가 우선! 더 가까운걸 우선으로 찾음
                // 지역변수 x가 없었으면 전역변수 x를 갖다씀
    // return y;
}

// console.log(y); // ReferenceError: y is not defined
// console.log(z); // ReferenceError
foo(50);

console.log(`함수호출 후 x의 값: ${x}`); // 10



// 중첩 함수 : 함수 안에 함수를 정의

function outer(m) { // 지역변수 m이 우선으로, param m이 찍히지 않음
    var n = 'outer local n';
    var v = 'outer local v';
    console.log(m);
    console.log(n);
    console.log(v);

    // 헬퍼 함수 : 호출이 함수 내부로 제한됨
    // 캡슐화
    // 함수 표현식(화살표 함수)로 쓰는게 일반적!
    function inner() {
        var m = 'inner local m';
        var v = 'inner local v';
        console.log(m);
        console.log(v);
    }

    inner();
}

var m = 'global m';

// inner(); // ReferenceError: inner is not defined, outer()를 호출하면 자동 사용
outer('outer param m');