const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]]

}

const heapify = (arr, n, i) => {
    let l, r, max
    l = 2 * i + 1
    r = 2 * i + 2
    max = i
    if (l < n && arr[l] > arr[max]) {
        max = l
    }
    if (r < n && arr[r] > arr[max]) {
        max = r
    }
    if (max != i) {
        swap(arr, max, i)
        heapify(arr, n, max)
    }


}

const buildHeab = (arr, n) => {
    for (let i = n / 2 - 1; i >= 0; i--) {
        heapify(arr, n, i)
    }
}

const heapSort = (arr, n) => {
    buildHeab(arr, n)
    for (let i = n - 1; i >= 0; i--) {
        swap(arr, 0, i)
        heapify(arr, i, 0)

    }

}
let arr = [1, 6, 8, 7, 6, 2, 4, 6]

console.log(heapSort(arr, arr.length))
console.log(arr)