const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]]

}


function partition(arr, low, high) {

    // pivot
    let pivot = arr[high];

    // Index of smaller element and
    // indicates the right position
    // of pivot found so far
    let i = (low - 1);

    for (let j = low; j <= high - 1; j++) {

        // If current element is smaller 
        // than the pivot
        if (arr[j] < pivot) {

            // Increment index of 
            // smaller element
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, high);
    return (i + 1);
}


const partition2 = (arr, l, h) => {
    let p, i, j
    p = arr[l]
    i = l
    j = h
    while (i < j) {




        while (arr[i] <= p); {
            i++
        }
        while (arr[i] > p) {
            j++
        }

        if (i < j) {
            swap(arr, i, j)
        }
        swap(arr, i, j)
        return j
    }



}


const quickSort = (arr, l, h) => {

    if (l < h) {
        let piv = partition(arr, l, h)
        quickSort(arr, l, piv - 1)
        quickSort(arr, piv + 1, h)
    }
}
let arr = [5, 6, 8, 7, 9, 3]
console.log(quickSort(arr, 0, arr.length - 1))
console.log(arr)