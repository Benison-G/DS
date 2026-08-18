function Node(val) {
    this.val = val;
    this.next = null;
}

const MyLinkedList = function () {
    this.head = null;
    this.size = 0;
}

MyLinkedList.prototype.addToHead = function (val) {
    const newNode = new Node(val);

    this.head = newNode;
    this.size++;
}

MyLinkedList.prototype.addToTail = function (val) {
    if (this.head === null) {
        let newNode = new Node(val);
        this.head = newNode
    } else {
        let newNode = new Node(val);
        let cur = this.head;
        while (cur.next !== null) {
            cur = cur.next;
        }

        cur.next = newNode;
    }

    this.size++;
}

MyLinkedList.prototype.addAtIndex = function (index, val) {

    if (this.size === index) {
        this.addToTail(val);
        return;
    } else if (index === 0) {
        this.addToHead(val);
        return;
    } else {

        let newNode = new Node(val);

        let cur = this.head;

        for (let i = 0; i < index - 1; i++) {
            cur = cur.next;
        }

        newNode = cur.next;
        cur.next = newNode;

        this.size++;
    }
}

MyLinkedList.prototype.get = function (index) {
    let cur = this.head;

    for (let i = 0; i < index; i++) {
        cur = cur.next;
    }

    return cur.val;
}

MyLinkedList.prototype.deleteAtIndex = function (index) {

    if (index < 0 || index > this.size) return -1;
    if (index === 0) {
        this.head = this.head.next.next
    } else {
        let cur = this.head;

        for (let i = 0; i < index - 1; i++) {
            cur = cur.next;
        }

        cur.next = cur.next.next;
    }
    this.size--;
}