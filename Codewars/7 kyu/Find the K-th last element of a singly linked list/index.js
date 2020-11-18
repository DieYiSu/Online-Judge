/* Predefined object for list nodes

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}

*/

function getKthLastElement(head, index) {
    // head is the first Node in the list.
    // k is the 0-based index as counted from the end of the list.
    
    // return the list element corresponding to the index k
    // e.g. 
    //   if k === 0 return the last element
    //   if k === 1 return the penultimate element
    
    let current = head;
    let count = 0;
    while(current){
      count++;
      current = current.next;
    }
    
    if(index > count-1 || head === null){
      return null
    }
    
    count = count-1;
    while(head){
      if(index === count){
        return head
      }
      count--;
      head = head.next;
    }
  }