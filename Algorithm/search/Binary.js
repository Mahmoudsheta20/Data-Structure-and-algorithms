var Binary = function(nums, target) {

    let start = 0
    let end = nums.length

    while (start <= end) {
        let mid = Math.floor((start + end) / 2)

        if (nums[mid] == target) {
            return true
        }
        if (nums[mid] > target) {

            end = mid - 1

        } else {

            start = mid + 1
        }


    }
    return false


};
let arr = [1, 2, 3, 4, 5, 6]
console.log(Binary(arr, 3))