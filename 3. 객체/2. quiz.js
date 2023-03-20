/*
- 요구사항
1. 사용자에게 계정을 입력받으세요.
2. 입력된 계정이 존재하는 계정이 아니라면
   "존재하지 않는 회원입니다"를 출력하세요.
3. 계정이 존재한다면 비밀번호를 입력받으세요.
4. 비밀번호가 입력한 아이디에 대응해서 일치한다면
   "xxx님 환영합니다!"을 출력하고 반복문을 탈출하세요.
5. 비밀번호가 다르다면 "비밀번호가 틀렸습니다" 를 출력하세요.
6. 로그인이 성공할때까지 반복하세요.
*/
var userInfo = {
    userList: [{
            account: 'kim1234',
            password: 'kkk1234',
            username: '김두한'
        },
        {
            account: 'park9876',
            password: 'ppp9999',
            username: '박찬호'
        },
        {
            account: 'hong7766',
            password: 'hhh1234',
            username: '홍길동'
        },
    ]
};

// console.log(typeof userListCopy[0].account);

while (true) {

    // 아이디 일치 확인 플래그
    var accountFlag = false;
    
    // 배열 객체 생성
    var userListCopy = userInfo.userList;
    
    while (true) {
        // 계정 입력받기
        var inputAccount = prompt('아이디를 입력하세요');
        
        // 계정 존재유무 확인
        var accountNum = 0;
        var cnt = 0;

        for (var x of userListCopy) {
            var realAccount = userListCopy[cnt].account;
            if (inputAccount === realAccount) {
                accountFlag = true;
                accountNum = cnt;
                break;
            }
            cnt++;
        }

        if (accountFlag === true) {
            break;
        } else {
            alert('존재하지 않는 회원입니다');
            continue;
        }
    }

    // 비밀번호 일치 확인 플래그
    var passwdFlag = false;

    // 비밀번호 입력받기
    var inputPasswd = prompt('비밀번호를 입력하세요');

    var cnt = 0;
    for (var y of userListCopy) {
        var realPasswd = userListCopy[accountNum].password;
        if (inputPasswd === realPasswd) {
            passwdFlag = true;
            break;
        }
    }

    if (passwdFlag === true) {
        break;
    } else {
        alert('비밀번호가 틀렸습니다');
        continue;
    }
}
alert(`${userListCopy[accountNum].username}님 환영합니다!`);