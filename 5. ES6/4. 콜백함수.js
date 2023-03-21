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

// 둘이 if 조건식 안의 0, 1만 다르니까 단축시키자
function showOddOrEvenNumber(n, delim) {

  for (let i = 1; i <= n; i++) {
    if (i % 2 === delim) console.log(i);
  }
}

// 배수 출력하는 것도 만들어줭
function showMultipleNumber(n, multiNumber) {

  for (let i = 1; i <= n; i++) {
    if (i % multiNumber === 0) console.log(i);
  }
}

// 6의 배수이면서 12의 배수가 아닌것도 만들어줭
// if 안에 조건식을 인수로 전달하면 될텐데 !
const code = function (n) {
  return n % 3 === 0;
};

function showNumber(n, code) {

  for (let i = 1; i <= n; i++) {
    if (code(i)) {
      console.log(i);
    }
  }
}

// showNumber(50, n % 3 === 0); // n is not defined (지역변수)
// 코드를 인수로 바로 전달할 수 없음..
// 그러니 코드를 함수로 감싸서 보내자
showNumber(50, function() {return n % 3 === 0;})


// showEvenNumber(10);
// showOddNumber(15);
showOddOrEvenNumber(10, 0); // 1부터 10까지 짝수 출력