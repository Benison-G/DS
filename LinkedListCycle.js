// Linked list cycle 

// Return true is there is no tail = null else return false;
// 1 -> 2 -> 3 -> 4 -> 2   === 4 is again pointing to 2 making a cycle

// We can either user Set() -> add each node and return true if you find the next node in the set.
// But we can solve it using fast and slow pointer.

// This is floyd's algorithm - cycle goes with 2 pointers, one will be slow and other will be fast.
// At some path of their cycle both will meet at same point.


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