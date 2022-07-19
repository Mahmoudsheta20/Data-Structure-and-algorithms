let top = -1
let Max = 100
let arr = Array(Max).fill(0)

function isEmpty() {
    return (top < 0)
}

function Push(e) {
    if (top > Max) { return 'Stack is Full' }
    top++
    arr[top] = e
}

function pop() {
    if (isEmpty()) return 'Stack Is Empty'
    top--
}

function peek() {
    if (isEmpty()) return 'Stack Is Empty'
    return arr[top]
}

function print() {
    for (i = top; i > -1; i--) {
        return arr[i]
    }
}
let root;
class Stack {

    constructor(data) {
        this.data = data
        this.next = null



    }

    isEmpty() {
        if (root == null) {
            return true

        }
        return false

    }

    Push(data) {
        const newstack = new Stack(data)

        if (root == null) {
            root = newstack
        }
        let temp = root
        root = newstack
        newstack.next = temp
        return root.data
    }

}

// Linked Stack 
class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }

}

class Linkedlist {
    constructor(data) {
        const newnode = new Node(data)
        this.head = newnode
        this.tail = newnode

    }

    Push(data) {
        const newnode = new Node(data)
        if (!this.head) {
            this.head = newnode
            this.tail = newnode

        }
        this.tail.next = newnode
        this.tail = newnode

    }
    pop() {
        if (!this.head) return undefined
        let temp = this.head
        let pre = temp

        while (temp.next) {
            pre = temp
            temp = temp.next

        }
        this.tail = pre
        this.tail.next = null
        this.lenght--
            if (this.lenght === 0) {
                this.head = null
                this.tail = null
            }
        return temp
    }

    unshift(value) {
        const Newnode = new Nodes(value)
            // if we dont have any node
        if (!this.head) {
            this.head = Newnode
            this.tail = Newnode

        } else {
            Newnode.next = this.head
            this.head = Newnode
        }
        this.lenght++

    }

    shift() {
        if (!this.head) return undefined



        let temp = this.head
        this.head = this.head.next
        this.lenght--
            if (this.lenght === 0) {
                this.tail = null
            }

        temp.next = null
        return temp




    }
}