// 정수 n을 전달하면 1부터 n까지의 모든 짝수를 출력하는 함수
function showEvenNumber(n) {

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) console.log(i);
  }
}

function showOddNumber(n) {

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 1) console.log(i);
  }
}

// Q : 짝수랑 홀수 둘 다 출력할 수 있게 해조
// A : 둘이 if 조건식 안의 나머지만 다르니까 나머지를 파라미터로 만들어줄게~
function showOddOrEvenNumber(n, delim) {

  for (let i = 1; i <= n; i++) {
    if (i % 2 === delim) console.log(i);
  }
}

// Q : 배수 출력하는 것도 만들어조
// A : 그럼 나누는 숫자를 파라미터로 만들어줄게~
function showMultipleNumber(n, multiNumber) {

  for (let i = 1; i <= n; i++) {
    if (i % multiNumber === 0) console.log(i);
  }
}

// Q : 6의 배수이면서 12의 배수가 아닌것도 볼 수 있게 만들어조
// A : 내가 값 출력해주는 함수는 만들어줄게...
//     대신 네가 인수에 원하는 코드를 넣어서 직접 전달해 ; ;
// ===> 파라미터에 함수가 들어올 수 있게됨!
const code = function (n) {
  return n % 3 === 0;
};

function showNumber(n, callback) {

  for (let i = 1; i <= n; i++) {
    if (callback(i)) {
      console.log(i);
    }
  }
}

// showNumber(50, n % 3 === 0); 
// 1. n is not defined (showMultipleNumber함수의 지역변수임!)
// 2. n이 전역변수라 해도, boolean 값이 전달됨
// ===> 그럼 코드를 이름이 없는 함수로 감싸서 통째로 보내자!

showNumber(20, n => n % 3 === 0);
// showNumber(20, function(n) {return n % 3 === 0;}); <== 이걸 화살표 함수로 줄인것
// 밑의 함수 표현식과도 같다...
// const callback = function(n) {
//   return n % 3 === 0;
// };

// showNumber(50, test);
// function test(n) {
//   return n % 3 === 0;
// }
// 이렇게도 가능하지만, 조건을 수정할때 test 함수를 찾아가야함


// showEvenNumber(10);
// showOddNumber(15);
showOddOrEvenNumber(10, 0); // 1부터 10까지 짝수 출력



// 함수 내에 각자 원하는 개별 기능을 추가하기 위해 사용하는 콜백함수!!
function showMessage(message, howTo) {
  // 공통기능
  document.body.style.background = 'gray';

  setTimeout(() => {
      // 개별기능 => 콜백함수로 맘대로 바꿀 수 있음!
      howTo(message);

      // 공통기능
      alert('하하호호!');

  }, 500);
}

// 함수 호출하면서 인수 function에 내가 원하는 거 넣기!
showMessage('메롱메롱', function (m) {
  const answer = prompt(m);
  if (answer === '즐')
      alert('반사!');
  else 
      alert('뭐냐~~');
  
});