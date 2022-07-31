const Insertion = (arr, len) => {
    let key, j, i;
    for (i = 1; i < len; i++) { //80 | 90 60 30 50 70 40

        key = arr[i] //90
        j = i - 1 //0

        while (j >= 0 && arr[j] > key) { // if Check condition

            arr[j + 1] = arr[j] 
            j = j - 1

        }
        arr[j + 1] = key // if dont condition   arr[1] = 90

    }
    return arr



}

let arr = [80, 90, 60, 9, 21, 4, 6, 3]
console.log(Insertion(arr, arr.length))