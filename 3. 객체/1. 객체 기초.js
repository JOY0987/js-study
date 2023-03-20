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

// 데이터 타입
dog.favorite - cat.age; // 타입 달라서 불가
dog.age - cat.age; // 연산 가능
dog.favorite.push('꼬리 흔들기'); // 가능
dog.favorite.slice(1).splice(1,1); // 가능, 사본을 가져와서 splice, 메서드체인
console.log(dog);



// 프로퍼티 참조 2
console.log('===================================');
console.log(dog.injection);
console.log(dog['injection']); // 이건 키가 문자열이 아니라서 둘 다 가능!

// key를 변수에 저장
var fv = 'favorite';
console.log(cat.fv); // undefined
console.log(cat[fv]); // [ '낮잠자기', '방어지럽히기' ]



// 프로퍼티 값 수정
dog.age = 4;
cat.favorite[1] = '실뭉치';

dog['injection'] = false;
// dog.injection = false; // 위와 같음
// console.log(dog);


// 프로퍼티 동적 추가
cat.owner = '김철수'; // 추가
cat.owner = '박영희'; // 수정
console.log(cat);

// 프로퍼티 삭제
delete cat.owner;
console.log(cat);


// 프로퍼티 존재 유무 확인
// 수정하기 전에 있는지 확인하고 진행해야함
console.log('===================================');

// in 연산자는 key를 반드시 문자열로 표기해야함!!
var ageFlag = 'age' in cat; // true or false
console.log(ageFlag);

// master라는 프로퍼티가 없으면 추가해라 (존재 유무 확인방법)
if (!('master' in cat)) {
    cat['master'] = '김또또';
}
console.log(cat);




// 객체를 순회하는 반복문
console.log('====!!!===============================');

// key를 반복해서 추출해줌
for (var k in dog) {
    // console.log(k); // undefined
    // console.log(typeof k); // string
    console.log(dog[k]); // 문자열 키가 포함되어 있으니 대괄호 표기법 사용
}




//객체의 중첩구조
//예시 : 게시판

var articles = {
    totalCount: 25578,  //총 게시물 수
    admin: 'abc1234', //게시판 관리자 아이디
    page: 2558, //총 페이지 수
    articleList: [ // 게시물 목록
        {
            bno: 3, //글번호
            title: '가위바위보', //글제목
            writer: '김짱껨뽀',  //작성자
            content: '다덤벼 ^^', //글내용
            viewCount: 53, //조회수0
            recomm: 10, //추천수
            regDate: '21-12-07' //작성일자
        }, // 0번 index 
        {
            bno: 2, //글번호
            title: '노는게', //글제목
            writer: '뽀로로',  //작성자
            content: '제일조와~~~', //글내용
            viewCount: 253, //조회수
            recomm: 11, //추천수
            regDate: '21-12-06' //작성일자
        }, // 1번 index
        {
            bno: 1, //글번호
            title: '아멘', //글제목
            writer: '개신교신자',  //작성자
            content: '할렐루야', //글내용
            viewCount: 23, //조회수
            recomm: 5, //추천수
            regDate: '21-12-05' //작성일자
        } // 2번 index
    ]
};


console.log(articles.totalCount); 
console.log(articles.articleList[1].writer); 
    // articleList는 배열, articleList[1]은 객체!!

// 변수에 저장해서 사용도 가능
var bbs = articles.articleList;
bbs[0].writer;

// key의 개수만큼 반복
for (var x in articles) {
    // 4번 반복
}
for (var x in articles.articleList[0]) { 
    // 7번 반복
}
for (var y of bbs) {
    // 3번 반복
}