
function test(a, b) {
    setInterval(() => {
        console.log("test set" + a + b);
    }, 3000)
    return a * b;

}
function dom(a, b) {
    return a + b;
}

async function mark() {
    setTimeout(() => {
        console.log("Settime conlog");  
        console.dir(test)
    }, 5000)
    await test(3, 3);
    await dom(15, () => {
        return 5;
    })
    console.log("four");
}


async function lalit() {

    console.log("one");
    await mark();
    console.log("two");
    console.log("three");
}


lalit();