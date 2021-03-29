var hasCycle = function(head) {
    let fastPointer = head;
    let slowPointer = head;
    
    while(fastPointer !== null && fastPointer.next !== null){
        fastPointer = fastPointer.next.next;
        slowPointer = slowPointer.next;
        
        if(slowPointer === fastPointer){
            return true;
        }
    }
    return false;
};