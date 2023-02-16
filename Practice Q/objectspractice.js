const func = function (candles) {


    let search = {}
    let i = 0;
    while (i < candles.length) {
        search[candles[i]] = search[candles[i]] + 1 || 1;
        i++;
    }

    let newKeys=Object.values(search)
    let maxcan=Math.max(...newKeys)
    console.log(maxcan)
}

let arr = [3, 2, 1, 3, 3, 3]

func(arr);