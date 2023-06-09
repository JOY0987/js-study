var NOT_FOUND = -1;

// 배열의 특정 데이터의 인덱스를 구하는 함수
function myIndexOf(arr, element) { // arr배열 내 element의 index를 알려줄게

    for (var i = 0; i < arr.length; i++) {
        if (element === arr[i]) {
            return i;
        }
    }
    return NOT_FOUND;
}


function myIncludes(arr, element) {

    // for (var i = 0; i < arr.length; i++) {
    //     if (element === arr[i]) {
    //         return true;
    //     }
    // }
    // return false;

    return myIndexOf(arr, element) !== NOT_FOUND;
}



var foodList = ['짜장면', '탕수육', '고추잡채', '족발'];

var idx = myIndexOf(foodList, '탕수육'); // idx : 1
console.log(`idx: ${idx}`);

var flag = myIncludes(foodList, '족발');
console.log(`flag: ${flag}`);