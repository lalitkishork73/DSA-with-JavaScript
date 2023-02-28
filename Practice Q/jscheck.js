{
    x = 2,
        y = "2";
    if ((x == y)) {
        console.log("working 1")
    }
    if (x === y) {
        console.log("working 2");
    }
}
{
    function test(welcome) {
        console.log(welcome)
    }

    let r = test("welocome lalit");
    console.log(r)

}

{
    if (function () { }) {
        console.log("run")
    }
    else {
        console.log("bun");
    }
}
{

    var aa = 212;
    function a() {
        console.log(aa)
    }
    function b() {
        // reverse();
        console.log(aa)
    }
    a()
    b()

}
{
    // const pi = 3.1495653234
    // pi = 3.14
    // pi = pi + 10;
    // console.log(pi)
}

{
    console.log(21 ^ 5)
}

{
    function longestFlatLine(A, B) {
        let maxLen = 0;
        for (let i = 0; i < A.length; i++) {
            for (let j = 0; j < B.length; j++) {
                let len = 0;
                while (i + len < A.length && j + len < B.length && A[i + len] === B[j + len]) {
                    len++;
                }
                if (len > maxLen) {
                    maxLen = len;
                }
            }
        }
        return maxLen;
    }

    // Example usage:
    const A = [1, 3, 5, 12, 3];
    const B = [1, 4, 4, 5, 3];
    const result = longestFlatLine(A, B);
    console.log(result);
}