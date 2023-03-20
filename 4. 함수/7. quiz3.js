/*
 1. 키(cm)와 몸무게(kg)을 인수로 전달받아 
 2. bmi지수를 계산하여 반환함과 동시에 
 3. bmi가 25.0이상이면 "당신은 과체중입니다." 
    18.5이하면 "당신은 저체중입니다." 
    나머지는 "당신은 정상체중입니다."를 출력하는 
    CalcBMI라는 함수를 정의하고 호출하세요. 
 # bmi 계산식 : 몸무게(kg) / (키(m) * 키(m)) 
 # 출력 예시: 
 "키 -> 178.4cm, 체중-> 78.2kg의 체질량지수는: 24.57입니다"
 */
 
 var h = 178.4, w = 78.2;
 var myBmi = calcBMI(h, w);

 console.log(myBmi);
 
 console.log(`키 -> ${h}cm, 체중 -> ${w}kg의 체질량지수는 ${round(myBmi, 2)}입니다.`);

// round 함수 : 소수점 둘째자리까지 잘라서 리턴
function round(number, digit) {
    // 자른 값 리턴
    return number.toFixed(digit);
}


// bmi 출력 함수
function calcBMI(height, weight) {

    // 입력받은 키를 m로 치환
    meterHeight = height / 100;
    // console.log(meterHeight);

    // bmi 계산
    calcMyBmi = weight / (meterHeight * meterHeight);

    // 과체중, 저체중, 정상제충 출력
    if (calcMyBmi >= 25.0) {
        console.log('당신은 과체중입니다.');
    } else if (calcMyBmi <= 18.5) {
        console.log('당신은 저체중입니다.');
    } else {
        console.log('당신은 정상체중입니다.');
    }

    // bmi 결과 리턴
    return calcMyBmi;
}