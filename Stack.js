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
        this.prev = null
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



class Queue {

    constructor() {

        this.first = null
        this.last = null
        this.lenght = 0

    }

    enqueue(value) {

        const newnode = new Node(value)
        if (!this.first) {
            this.first = newnode
            this.last = newnode

        }
        this.last.next = newnode
        this.last = newnode
        return this.lenght++
    }

    dnqueue() {
        if (!this.first) return null

        let temp = this.first
        if (this.first == this.last) {
            this.last = null
        }

        this.first = this.first.next
        this.lenght--
            return temp.data


    }
    getall() {
        return this.lenght
    }
    isEmpty() {
        return this.lenght == 0
    }

    print() {
        var item = this.first
        for (let i = 0; i < this.lenght - 1; i++) {
            item = item.next
            return item
        }
    }
}

class SinglyLinkedList {

    constructor() {
        this.head = null
        this.tail = null
        this.lenght = 0

    }

    Push(value) {
        const newnode = new Node(value)

        if (!this.head) {
            this.head = newnode
            this.tail = newnode
            this.lenght++

        }


        this.tail.next = newnode
        this.tail = newnode
        this.lenght++




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
        return pre
    }

    unshift(value) {
        const newnode = new Node(value)
        if (!this.head) {
            this.head = newnode
            this.tail = newnode
        }
        let temp = this.head
        this.head = newnode
        this.head.next = temp

    }
    getcount() {
        return this.lenght
    }

    print() {
        let temp = this.head
        while (temp !== null) {

            console.log(temp.data)
            temp = temp.next
        }

    }
    get(index) {
        if (index < 0 || index >= this.length) return null
        let counter = 0
        let current = this.head
        while (counter < index) {
            current = current.next
            counter++
        }
        return current
    }

    insert(index, value) {
        if (!this.head) return undefined
        if (index < 0 || index > this.length) return false
        if (index === this.length) return !!this.push(val)
        if (index === 0) return !!this.unshift(val)
        const newnode = new Node(value)
        let prev = this.get(index - 1)
        let temp = prev.next

        prev.next = newnode
        newnode.next = temp
        this.lenght++

            return true


    }
    revers() {

        let curr = this.head
        let prev = null
        let next = curr.next

        while (next !== null) {
            next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }
    search(value) {
        let temp = this.head
        let pos = 0
        while (temp) {
            if (temp.data == value) {
                return pos
            }
            temp = temp.next
            pos++
        }
    }


}


class DoublyLinkedlits {

    constructor() {
        this.head = null
        this.tail = null
        this.lenght = 0

    }
    push(val) {
        const newnode = new Node(val)
        if (this.lenght == 0) {
            this.head = newnode
            this.tail = newnode
        }
        this.tail.next = newnode
        newnode.prev = this.tail
        this.tail = newnode
        this.lenght++
            return this

    }
    get(index) {
        if (index < 0 || index >= this.length) return null
        let counter = 0
        let current = this.head
        while (counter < index) {
            current = current.next
            counter++
        }
        return current
    }



    insert(index, value) {
        if (index < 0 || index > this.length) return false
        if (index === 0) return !!this.push(value)
        if (index === this.length) return this.push(value)

        const newnode = new Node(value)
        let curr = this.head
        let counter = 1
        for (counter; counter < index; counter++) {
            curr = curr.next

        }
        newnode.next = curr.next
        newnode.prev = curr
        curr.next.prev = newnode

        curr.next = newnode

        this.lenght++
    }
    delete() {
        if (this.lenght == 0) { return undefined }
        if (this.lenght == 1) { this.tail = this.head == null } else {

            this.head = this.head.next
            this.head.prev = null
        }

        this.lenght--


    }
    pop() {
        if (this.lenght == 0) { return null }
        if (this.lenght == 1) { this.tail = this.head == null }
        this.tail = this.tail.prev
        this.tail.next = null
        this.lenght--

    }


    d(index) {

        let head = this.head
        let curr = head.next
        while (curr !== null) {
            if (curr.data == index) { break; }
            curr = curr.next

        }
        curr.prev.next = curr.next
        curr.next.prev = curr.prev


    }



}


class NodeTree {
    // Each node has three properties, its value, a pointer that indicates the node to its left and a pointer that indicates the node to its right
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class Tree {

    constructor() {
        this.root = null
    }
    insert(value) {
        const newnode = new NodeTree(value)
        if (this.root == null) {
            this.root = newnode
            return this
        }
        let current = this.root

        while (true) {
            if (value == current.value) return undefined
            if (value < current.value) {
                if (current.left == null) {
                    current.left = newnode
                    return this
                }
                current = current.left
            } else {
                if (current.right == null) {
                    current.right = newnode
                    return this
                }
                current = current.right
            }



        }

    }

    find(value) {
        if (this.root === null) return false
        let current = this.root,
            found = true
        while (current && found) {
            if (value < current.value) {
                current = current.left
            } else if (value > current.value) {
                current = current.right
            } else {
                found = false
            }
        }
        if (found) return undefined
        return current
    }



}

