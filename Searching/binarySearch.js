
let arr = [6, 7, 8, 9, 10, 1, 2, 3, 4, 5];
let k = 5;

function bin(arr, k) {


    let low = 0, high = arr.length;

    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2)
        if (arr[mid] == k) {
            return 1
        } else if (arr[mid] > k) {
            high = mid - 1
            // console.log(mid,high)
        }
        else {
            low = mid + 1
            // console.log(mid,low)
        }

    }
    return -1

}


console.log(bin(arr, k))