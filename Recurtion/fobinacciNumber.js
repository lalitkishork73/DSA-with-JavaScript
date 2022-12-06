/* 
fobinacci number;
*/

function fobi(n) {
    if (n == 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    }

    return fobi(n - 1) + fobi(n - 2);
}

let res = fobi(6);
console.log(res);

//Output: [ 0, 1,  1,  2,  3,5, 8, 13, 21, 34, 55]