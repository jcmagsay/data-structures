function insert(head, data, position) {
  if (
    !head
    || head.data === null
  ) {
    return {
      data,
      next: null,
    };
  }

  const iterator = position;

  if (iterator === 0) {
    return {
      data,
      next: head,
    };
  }

  position -= 1;

  return {
    data: head.data,
    next: insert(head.next, data, iterator)
  };
}

const linkedList1 = {
  data: 'a',
  next: {
    data: 'b',
    next: {
      data: 'c',
      next: {
        data: 'd',
        next: {
          data: 'e',
          next: null,
        },
      },
    },
  },
}

const test1 = insert(linkedList1, 'z', 4);

console.log({
  test: JSON.stringify(test1),
});
