// 객체 리터럴(값)
var dog = {
    // 프로퍼티 작성
    name: '뽀삐',
    kind: '진돗개',
    age: 3,
    'for waiting': 11,
    injection: true,
    favorite: ['산책', '간식'],
    hate: null,
    playWithChild: function() {}
};

// if 나 for의 {}블록은 값이 아니지만, 객체 리터럴은 값이기 때문에 {} 뒤에 세미콜론을 붙여줌
// 키에 예약어 사용 가능
// 문자열로 처리하면 띄어쓰기도 가능
// 위에 작성한 것처럼 모든 것이 프로퍼티가 될 수 있음
// 순서보다(배열) 데이터를 표현하는 명시적인 이름이 필요할 때 객체 리터럴을 사용함

var cat = {
    name: '콩순이',
    age: 2,
    injection: true,
    favorite: ['낮잠자기', '방어지럽히기'],
    kind: '블랙러시안'
};

console.log(typeof dog);


// 객체에 저장된 데이터 참조 (참조연산자)
console.log(dog.name); // ~. = ~의
console.log(cat.age); // cat의 age
console.log(cat.favorite);
console.log(dog.favorite[0]); // dog의 첫번째 favorite 

// 데이터 타입이 중요한 이유
dog.favorite - cat.age; // 타입 달라서 불가
dog.age - cat.age; // 연산 가능
dog.favorite.push('꼬리 흔들기'); // 가능
dog.favorite.slice(1).splice(1,1); // 가능, 사본을 가져와서 splice, 메서드체인
console.log(dog);


