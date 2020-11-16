function Node(data) {
    this.data = data;
    this.next = null;
  }
  
  function append(listA, listB) {
    // Your code goes here.
    // Remember to return the head of the list.
    if(!listA) return listB;
    listA.next = append(listA.next, listB)
    console.log(listA)
    return listA
  }