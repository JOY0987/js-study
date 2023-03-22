const emp = {
    empName: '빡빡이',
    age : 29,
    hireDate: '2014-01-01',
    birthDay: '1995-12-31'
};

/*
const empName = emp.empName;
const age = emp.age;
const birthDay = emp.birthDay;
*/

// {key 나열}, 객체라서 순서 상관 없음
/*
const {empName, birthDay, age} = emp;
console.log(`${emp.empName}님의 나이는 ${emp.age}살이고 생일은 ${emp.birthDay}입니다`);
*/

// 키의 별칭을 정해줄 수 있음
const {empName: en, birthDay: bd, age: a} = emp;
console.log(`${en}님의 나이는 ${a}살이고 생일은 ${bd}입니다`);

console.log('=======================');

const {birthDay, age, ...rest} = emp;

console.log(birthDay);
console.log(age);
console.log(rest);


// 객체 안전 복사 : 스프레드 사용
const copyEmp = {
    ...emp,
    // 프로퍼티 추가도 가능
    address: '서울시',
    hobbies: ['놀고먹기', '낮잠'],
    empName: '망둥어' // 기존의 empName 수정
};

console.log(copyEmp);