// BigO(n) 

// function LoginItem(n) {

//     for (let i = 0; i < n; i++) {
//         console.log(i)
//     }
//     for (let j = 0; i < n; i++) {
//         console.log(j)
//     }
// }

// LoginItem(10)

// BigO(n2)
// function LoginItem(n) {
//     for (let i = 0; i < n; i++) {
//         console.log(i)
//         for (let j = i; j < i; j++) {
//             console.log(i, j)
//         }

//     }
// }

// LoginItem(5)
// Bigo(1)
// function LoginItem(n) {
//     return console.log(n + n)
// }

// LoginItem(10)
// for (let i = 0; i <= 10; i++) {
//     for (let j = i; j <= i; j++) {
//         console.log("*\n")

//     }

// }


// Linked List

// class Nodes {
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }

// }

// class LinkedList {
//     constructor(value) {
//         const Newnode = new Nodes(value)
//         this.head = Newnode
//         this.tail = this.head
//         this.lenght = 1
//         t
//     }

//     push(value) {
//         const Newnode = new Nodes(value)
//         if (!this.head) {
//             this.tail = Newnode
//             this.head = Newnode

//         } else {
//             this.tail.next = Newnode
//             this.tail = Newnode

//         }
//         this.lenght++
//             return this
//     }

//     pop() {
//         if (!this.head) return undefined
//         let temp = this.head
//         let pre = temp

//         while (temp.next) {
//             pre = temp
//             temp = temp.next

//         }
//         this.tail = pre
//         this.tail.next = null
//         this.lenght--
//             if (this.lenght === 0) {
//                 this.head = null
//                 this.tail = null
//             }
//         return temp
//     }

//     unshift(value) {
//         const Newnode = new Nodes(value)
//             // if we dont have any node
//         if (!this.head) {
//             this.head = Newnode
//             this.tail = Newnode

//         } else {
//             Newnode.next = this.head
//             this.head = Newnode
//         }
//         this.lenght++

//     }

//     shift() {
//         if (!this.head) return undefined



//         let temp = this.head
//         this.head = this.head.next
//         this.lenght--
//             if (this.lenght === 0) {
//                 this.tail = null
//             }

//         temp.next = null
//         return temp




//     }


// }

// let mylist = new LinkedList(50)
// mylist.push(80)
//     // mylist.push(50)
//     // mylist.pop()
// mylist.unshift(960)
// mylist.shift()
// mylist.shift()
// mylist.shift()
// console.log(mylist.shift())
// console.log(mylist)


// Driver Code
// function o(n) {
//     if (n <= 1) {

//         return n
//     } else {
//         return o(n - 1) + o(n - 2)
//     }

// }


// function fib(n) {

//     let f = new Array(n)
//     f[0] = 0
//     f[1] = 1
//     for (let i = 2; i <= n; i++) {
//         f[i] = f[i - 1] + f[i - 2]

//         // console.log(f)
//     }
//     return f[n]

// }
// console.log(fib(100))
// console.log(o(100))

// function fibs(n) {
//     let x;
//     if (n <= 1) {
//         return n
//     } else {
//         while (n <= 2) {
//             x = (n - 1) + (n - 2)


//             n++
//             return x
//         }

//     }
// }
// console.log(fibs(100))
// function gcd(a, b) {
//     if (b == 0)
//         return a;
//     else
//         return gcd(b, (a % b));
// }

// console.log(gcd(357, 234))

// function Romaine() {
//     let n = 'IVX'
//     let x = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
//     let char = 0;

//     for (let i = n.length - 1; ~i; i--) {

//         let num = n[i]
//         if (2 * num < char) char -= num
//         else char += num
//     }
//     return char


// }
// let n = 'IVX'
// console.log(Romaine())
// var mergeTwoLists = function(list1, list2) {

//     let list3 = []
//     for (let i = 0; i < list1.length; i++) {

//         list3.push(list1[i])
//     }
//     for (let i = 0; i < list2.length; i++) {

//         list3.push(list2[i])
//     }
//     return list3

// };
// let list1 = [1, 2, 3]
// let list2 = [1, 8, 9, 6, 4]
// let list3 = []
// for (let i = 0; i < list1.length; i++) {
//     list3.push(list1[i])

// }

// console.log(list3)
// console.log(mergeTwoLists(list1, list2))
let x = [1, 2, 3, 4, 5, 6]

let index = x.length - 1
let num = 4

// const binary = (x, l, index, num) => {
//     if (index) {
//         let mid = Math.floor((index + l) / 2)
//             // console.log(mid)

//         if (num == x[mid]) {
//             return num
//         }

//         if (num < x[mid]) {
//             // for (let i = 0; i <= mid - 1; i++) {
//             //     if (num == x[i]) {
//             //         // console.log(true)
//             //         return true

//             //     }


//             // }

//             return binary(x, l, mid - 1, num)

//         }

//         return binary(x, mid + 1, index, num)



//     }
//     return -1
// }
// console.log(binary(x, 0, index, 4))

// console.log(Math.floor(1 / 2))



function binarySearch(arr, l, h, num) {



    // if used while loop
    while (l <= h) {
        let mid = Math.floor((l + h) / 2)
        if (arr[mid] == num) {
            return num
        }

        if (arr[mid] > num) {

            h = mid - 1
                // return binarySearch(arr, l, mid - 1, num)

        } else {
            l = mid + 1
                // return binarySearch(arr, mid + 1, h, num)
        }



    }


    return -1;
}


// console.log(binarySearch(x, 0, index, 4))


var searchRange = function(nums, target) {

    let start = 0
    let end = nums.length

    while (start <= end) {
        let mid = Math.floor((start + end) / 2)

        if (nums[mid] == target) {
            return mid
        }
        if (nums[mid] > target) {

            end = mid - 1

        } else {

            start = mid + 1
        }


    }



};
console.log(searchRange(x, 4))


// let arr = [9, 0, 8, 4, 7, 8, 9, 6]

// for (let i = 0; i < arr.length; i++) {
//     let min_idx = i
//     for (let j = i + 1; j < arr.length; j++) {

//         if (arr[j] < arr[min_idx]) {

//             min_idx = j

//         }


//     }
//     if (min_idx !== i) {
//         const temp = arr[min_idx]
//         arr[min_idx] = arr[i]

//         arr[i] = temp

//     }

// }
// console.log(arr)
// console.log(4 < 3)

// let arr = [1, 6, 98, 74, 23, 14, 5, 6, 3]
// let len = arr.length
// const swap = (arr, idx1, idx2) => ([arr[idx2], arr[idx1]] = [arr[idx1], arr[idx2]])

// const selectioSort = (arr, len) => {

//     for (let i = 0; i < len; i++) {
//         let min_index = i
//         for (let j = i + 1; j < len; j++) {

//             if (arr[j] < arr[min_index]) min_index = j


//         }
//         if (min_index !== i) {
//             swap(arr, min_index, i)

//         }

//     }


//     return arr
// }


// const bubbleSort = (arr, len) => {
//     let i, j;
//     for (i = 0; i < len; i++) {
//         console.log(i)
//         for (j = 0; j < len - 1; j++) {
//             if (arr[j] > arr[j + 1]) {

//                 const temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp

//             }
//         }


//     }

//     return arr
// }
// console.log(bubbleSort(arr, len))
// console.log(2 > 1)


// for (let i = 0; i < 5; i++) {

//     for (let j = 0; j < i + 1; j++) {
//         console.log("#")
//     }
//     console.log('')

// }
// function x(n) {
//     if (n <= 0) {
//         return;
//     }
//     x(n - 1)
//     for (let i = 0; i < n; i++) {
//         console.log("#")
//     }
//     console.log("\n")

// }
// console.log(x(5))

// var x = 1;

// function addTwo() {
//     x = x + 2
// }
// addTwo()
// x = x + 1
// console.log(x)
// var arr = ['glazed', 'chocolate frosted', 'boston', ' glazed crulle']
// arr.splice(1, 1, 'mo', 'so')
// console.log(arr)


// console.log(Math.sqrt(-20))
// console.log("Yaso" != "YaSo")
// var x, z;/

// x = 1
// z = "mahmoud"
// if (x == true) {
//     z -= 1
// }
// console.log(z)
// var object = { name: "mahoud" }

// console.log(object.name)
// console.log(object['name'])
// x = [1, 2, 3]
// z = [3]
// console.log(x * z)
// console.log("1" === 1)

// async function e() {
//     setTimeout('l()', 1000)
//     console.log(y)
// }

// function l() {
//     console.log(10)
// }
// e()
// console.log(1)
// e()
// console.log((true && true) && !(false || true))

// setTimeout(dispay, 4000, 'welcom')

// function dispay(value) {
//     console.log(value)

// }

// let arr = [
//     [5, 4, 2],
//     [4, 4, 1],
//     [8, 9, 0], 3
// ]
// console.log(arr[0][1] + arr[1][1])
// console.log(arr[0][0] + arr[-1])