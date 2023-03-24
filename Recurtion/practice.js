/* function lalit(n, t) {
    console.log(n, t)
    if (n == 1) return 1 * t
    return t + lalit(n - 1, t);
}
 */

let n = 10, t = 9;


// let res = lalit(n, t);
// console.log(res);


// for (let i = 1; i <= n; i++) {
//     console.log(i, "X", t, "=", i * t);
// }

let s = "aaabccddd"

const stack = [];
for (let c of s) {
    if (stack.length > 0 && stack[stack.length - 1] === c) {
        console.log(stack)
        stack.pop();
    } else {
        stack.push(c);
    }
}

stack.length === 0 ? console.log('Empty String') : console.log(stack.join(''));