function Node(data) {
    this.data = data;
    this.next = null;
  }
  
  function push(head, data) {
    // Go.
    const newNode = new Node(data);
    if(head){
      newNode.next = head
      return newNode
    }
    return newNode
  }
  
  function buildOneTwoThree() {
    // Go.
    const head = new Node(1);
    let current = head;
    for(index = 2; index<=3; index++){
      current.next = new Node(index);
      current = current.next;
      console.log(current)
    }
    return head;
  }