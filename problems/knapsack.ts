function max(a, b) {
  return Math.max(a, b);
}

function knapsack(iterator, capacity, weights, scores) {
  const nextIteration = iterator - 1;
  const currentWeight = weights[nextIteration];
  const currentScore = scores[nextIteration];

  console.log({
    iter: iterator,
    cap: capacity,
    currentScore,
    currentWeight,
    slice: nextIteration
  })

  let path1 = 0;
  let path2 = 0;

  if (
    !scores.length
    || !weights.length
    || iterator === 0
    || capacity === 0
    || nextIteration <= 0
  ) {
    return 0;
  } else if (
    weights.length === 1
    && weights[0] > capacity
  ) {
    return 0;
  } else if (
    currentWeight <= capacity
  ) {
    const reducedCapacity = capacity - currentWeight;

    const includeCurrentScore = knapsack(nextIteration, reducedCapacity, weights, scores);

    const excludeCurrentScore = currentScore + knapsack(nextIteration, capacity, weights, scores)

    path1 = max(includeCurrentScore, excludeCurrentScore);
  } else {
    path2 = knapsack(nextIteration, capacity, weights, scores);
  }

  return max(path1, path2);
}

function packBagpackDp(scores, weights, capacity) {
  return knapsack(scores.length, capacity, weights, scores);
}

const _data = {
  scores: [15, 10, 9, 5],
  weights: [1, 5, 3, 4],
  capacity: 8,
};

const _data1 = {
  scores: [20, 5, 10, 40, 15, 25],
  weights: [1, 2, 3, 8, 7, 4],
  capacity: 10,
};

const _data2 = {
  scores: [19, 8, 6, 20, 3, 16],
  weights: [8, 2, 3, 10, 1, 5],
  capacity: 17,
};

console.log({
  // test: packBagpack(data.scores, data.weights, data.capacity),
  // test1: packBagpack(data1.scores, data1.weights, data1.capacity),
  test2: packBagpackDp(_data2.scores, _data2.weights, _data2.capacity),
});