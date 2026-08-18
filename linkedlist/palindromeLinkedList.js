// Checks if the linked list is palindrome or not

const isPalindrome = (head) => {
    // Find the mid of linked list
    // Reverse the second half of the linked list
    // Add two pointers pointer start and end and compare until end of second half list

    let slow = head;
    let fast = head;

    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // mid will be slow

    // Now reverse the second half

    let prev = null;
    let curr = slow;

    while (curr) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    // Now take start and end pointer compare both ends moving towards middle

    let start = head;
    let end = prev;

    while (end) {
        if (start.val !== end.val) {
            return false;
        }

        start = start.next;
        end = end.next;
    }

    return true;
}