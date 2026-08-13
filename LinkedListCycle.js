// Linked list cycle 

// Return true is there is no tail = null else return false;
// 1 -> 2 -> 3 -> 4 -> 2   === 4 is again pointing to 2 making a cycle

// We can either user Set() -> add each node and return true if you find the next node in the set.
// But we can solve it using fast and slow pointer.


const hasCycle = (head) => {
    let slow = head;
    let fast = head;

    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow == fast) {
            return true;
        }
    }

    return false
}