var n = 1;
while (true) {
    console.log(n++);
    if(n === 10) break; // 무한루프에는 꼭 break(탈출 조건)이 있어야 합니다.
}

console.log('안녕하세요'); // 탈출 조건이 없으면 접근할 수 없는 코드로 뜹니다.