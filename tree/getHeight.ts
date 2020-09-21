const tree = {
  data: 1,
  left: {
    data: 2,
  },
  right: {
    data: 3,
  },
};

const tree1 = {
  data: 1,
  left: {
    data: 2,
  },
  right: {
    data: 3,
    left: {
      data: 4,
    },
    right: {
      data: 5,
      left: {
        data: 6,
      },
      right: {
        data: 7,
      },
    },
  },
};

function height(node) {
  let actualHeight = 0;
  let sumsLeft = 0;
  let sumsRight = 0;

  if (
    node.data
    && !node.left
    && !node.right
  ) {
    sumsLeft += 0;
    sumsRight += 0;
  }

  if (node.left) {
    sumsLeft += 1;
    sumsLeft += height(node.left);
  }

  if (node.right) {
    sumsRight += 1;
    sumsRight += height(node.right);
  }

  const greaterHeight = sumsLeft > sumsRight
    ? sumsLeft
    : sumsRight;

  actualHeight += greaterHeight;

  return actualHeight;
}

console.log({
  tree: height(tree),
  tree1: height(tree1),
});