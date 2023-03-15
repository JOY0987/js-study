// const a = 10;
// const b = 30;
// console.log(a * b);

// a = 20;


// 브라우저에서 js 실행하기 예제 ============================
// a 태그를 가져와서 스타일을 조작
// const $link = document.querySelector('a');
// console.log($link);
// $link.style.background = 'orange';


const arr = [1, 2, 3].map(n => n **2);
console.log(arr);

// 브라우저 전용 함수
// node.js 에서는 쓸 수 없는 함수가 몇 가지 있습니다. (ReferenceError: alert is not defined)
alert('알림~~설정~~'); 
prompt('당신의 이름은?');
confirm('집에 가고싶습니까?');