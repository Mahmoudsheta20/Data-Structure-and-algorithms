const Linear = (arr, n) => {
    let i;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == n) {
            return true
        }
    }
    return false

}
let arr = [1, 5, 6, 7, 4, 1, 3]

console.log(Linear(arr, 5))