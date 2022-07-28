const swap = (arr, min, i) => {
    let temp = arr[min]
    arr[min] = arr[i]
    arr[i] = temp

}
const bubbleSort = (arr, len) => {
    let flage = true
    let i, j;
    for (i = 0; i < len - 1; i++) {
        for (j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {

                swap(arr, j, j + 1)
                flage = false
            }
        }
        if (false == true) {
            break;
        }
        return flage

    }

    return arr
}
let arr = [1, 2, 3, 4, 5, 6]
console.log(bubbleSort(arr, arr.length))