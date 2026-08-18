/**
 * Remove elements from a linked list
 * Steps: Take a sentinal node (helps to delete the head element)
 * Keep checking next element, if its equal to val then point next to next.next
 * return sentinal head
 */
const removeElements = (head, val) => {
    let sentinal = new ListNode();
    sentinal.next = head; //point sentinal to head

    let prev = sentinal;

    while(prev && prev.next) {
        if (prev.next.val === val) {
            prev.next = prev.next.next;
        } else {
            prev = prev.next
        }
    }

    return sentinal.next;
}