function task10Execute() {
    str = document.getElementById("task10code").value;
    console.log(checkBrackets(str));
}

function checkBrackets(str) {
    let stack = [];
    let brackets = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let char of str) {
        if (char in brackets) {
            stack.push(char);
        } else if (char === ')' || char === '}' || char === ']') {
            if (stack.length === 0) {
                return false;
            } else {
                let last = stack.pop();
                if (brackets[last] !== char) {
                    return false;
                }
            }
        }
    }
    return stack.length === 0;
}
