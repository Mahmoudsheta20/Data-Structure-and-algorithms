const Insertion = (arr, len) => {
    let key, j, i;
    for (i = 1; i < len; i++) {

        key = arr[i]
        j = i - 1

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]
            j = j - 1

        }
        arr[j + 1] = key

    }
    return arr



}

let arr = [5, 6, 8, 9, 21, 4, 6, 3]
console.log(Insertion(arr, arr.length))