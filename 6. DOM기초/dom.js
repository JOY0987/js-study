// js가 html에서 태그를 발견하면
// 태그를 까서
// js 객체로 만든다

// <div id = 'box'>
//     <input id='abc' class='zzz xxx vvv' type='text'></input>
// </div>
let box, input;

box = {
    tagName: 'div',
    attributes: {
        id: 'box'
    },
    children: [input],
    // parentNode: document.body
};

input = {
    tagName: 'input',
    attributes: {
        id: 'abc',
        classList: ['zzz', 'xxx', 'vvv'],
        type: 'text'
    },
    parentNode: box
};

console.log(input.parentNode);