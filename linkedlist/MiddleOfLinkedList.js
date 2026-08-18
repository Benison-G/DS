const MiddleOfLinkedList = (head) => {
    let slow = head;
    let fast = head;

    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

// Fast moved two nodes ahead until the end, than return slow as it will be at the middle of list