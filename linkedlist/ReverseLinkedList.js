const ReverseLinkedList = (head) => {
    let prev = null;
    let curr = head;

    while (curr) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    return prev; // or assign prev to head and return head, 
    // as at the end of while loop prev will be last element and return it as head 
    // of reversed linked list
}