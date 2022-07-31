const swap = (arr, min, i) => {
    // sugar syntax 
    [arr[i], arr[min]] = [arr[min], arr[i]]
    // let temp = arr[min]
    // arr[min] = arr[i]
    // arr[i] = temp
}


const SelectionSort = (arr) => {
    let min, i, j;

    for (let i = 0; i < arr.length - 1; i++) {
        min = i
        for (let j = i + 1; j < arr.length; j++) {

            if (arr[j] < arr[min])
                min = j
            swap(arr, min, i)



        }

    }
    return arr
}

let arr = [1, 2, 3, 6, 8, 4, 9, 7]
console.log(SelectionSort(arr))