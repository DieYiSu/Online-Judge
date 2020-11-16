function stringify(list) {
    // Write your code here
    return list === null ? "null" : `${list.data} -> ${stringify(list.next)}`
  }
