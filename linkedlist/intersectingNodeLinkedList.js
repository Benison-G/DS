const getIntersectingNode = (headA, headB) => {
    const set = new Set();

    while(headB) {
        set.add(headB);
        headB = headB.next;
    }

    
    while(headA) {
        if (set.has(headA)) {
            return headA
        }
        headA = headA.next;
    }
}