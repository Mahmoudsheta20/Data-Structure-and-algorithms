const Marge = (arr, l, m, r) => {
    let i, j, k;

    let n1 = m - l + 1;
    let n2 = r - m

    let L = new Array(n1)
    let R = new Array(n2)

    // print mid left arr to L 
    for (i = 0; i < n1; i++) {
        L[i] = arr[l + i]
    }
    // print mid rigth arr to R 
    for (j = 0; j < n2; j++) {
        R[j] = arr[m + 1 + j]
    }

    i = j = 0
    k = l

    while (i < n1 && j < n2) {

        if (L[i] <= R[j]) {
            arr[k] = L[i]
            i++;
        } else {
            arr[k] = R[j]
            j++
        }

        k++



    }

    // if still element in R or L 
    while (i < n1) {
        arr[k] = L[i]
        i++;
        k++;

    }

    while (j < n2) {
        arr[k] = R[j]
        j++
        k++
    }

}


const MargeSort = (arr, l, r) => {

    if (l < r) {
        let mid = l + parseInt((r - l) / 2)
        MargeSort(arr, l, mid)
        MargeSort(arr, mid + 1, r)
        Marge(arr, l, mid, r)

    }

    return arr

}
let arr = [5, 6, 8, 7, 9]
console.log(MargeSort(arr, 0, arr.length - 1))