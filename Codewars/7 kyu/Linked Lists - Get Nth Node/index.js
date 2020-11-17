function Node(data) {
    this.data = data;
    this.next = null;
  }
  
  function getNth(node, index) {
    // Your code goes here.
    
    if(node === null || node === undefined || index < 0 ){
      throw new Error();
    }
    
    let currentIndex = 0;
    let current = node;
    while(current !== null){
      if(currentIndex == index){
        return current
      }
      current = current.next
      currentIndex++
    }
    throw new Error();
  }
  