function reverseList(list) {
    node = null;
    while (list)
    {
      node = [list[0], node];
      list = list[1];
    }
    return node;
  }