/*
    Q. n개의 정수를 전달하면 해당 정수들의 총합과 평균을 
       반환하는 함수 calcNumbersTotalAndAverage를 작성하세요.
*/
var result = calcNumbersTotalAndAverage(90, 80, 100, 90); //360과 90이 리턴되어야 함
console.log(`총합: ${result.total}, 평균: ${result.avg}`);

// 총합과 평균을 반환하는 함수
function calcNumbersTotalAndAverage(...inputNums) {

    // 총합, 평균 프로퍼티를 가진 result 객체 선언
    var result = {
        total: 0,
        avg: 0
    }

    // 총합 계산용 변수 선언
    var tot = 0;
    
    // for of 반복문으로 총합 구하고 result에 입력
    for (var n of inputNums) {
        tot += n;
    }
    result.total = tot;
    // console.log(total); 360 확인

    // 총합을 배열길이로 나눠서 평균 구하기
    result.avg = tot/inputNums.length;
    // console.log(result.avg); 90 확인

    // result 객체 리턴
    return result;
}