function max(a, b) {
  return Math.max(a, b);
}

let cache;

function packBagpack(scores, weights, capacity) {
  const sLen = scores.length;
  const wLen = weights.length;

  cache = new Array(sLen);

  // if there are no remaining items to evaluate
  // return zero
  if (!sLen || !wLen) {
    return 0;
  }

  // if the list lengths are 1
  // and the weight of the last item is GT the capacity
  // return zero
  if (
    sLen === 1
    && weights[0] > capacity
  ) {
    return 0;
  }


  // create a slice point for reducing the arrays
  const slicePoint = sLen - 1;

  if (cache[sLen] && cache[sLen][capacity]) {
    console.log("RETREIVING VAL")
    console.log(cache[sLen][capacity])
    return cache[sLen][capacity];
  }

  // reduce the arrays and store the active values in variables
  const currentScore = scores[slicePoint];
  const currentWeight = weights[slicePoint];

  // copies of the original arrays
  const _scores = scores.slice(0, slicePoint);
  const _weights = weights.slice(0, slicePoint);

  // set defaults for the scores that will be compared
  let includeCurrentScore = 0;
  let excludeCurrentScore = 0;
  let path1 = 0;
  let path2 = 0;

  if (currentWeight <= capacity) {
    const reducedCapacity = capacity - currentWeight;

    // includes previous item's value
    includeCurrentScore = currentScore + packBagpack(_scores, _weights, reducedCapacity);

    // excludes previous item's value
    excludeCurrentScore = packBagpack(_scores, _weights, capacity);

    path1 = max(includeCurrentScore, excludeCurrentScore);
  } else {
    path2 = packBagpack(_scores, _weights, capacity);
  }

  let result = max(path1, path2);

  if (cache[sLen]) {
    console.log("SETTING VAL")
    cache[sLen][capacity] = result;
  } else {
    cache[sLen] = new Array();
    cache[sLen][capacity] = result;
  }

  // return the greater of the two items
  return result
}

const data = {
  scores: [15, 10, 9, 5],
  weights: [1, 5, 3, 4],
  capacity: 8,
};

const data1 = {
  scores: [20, 5, 10, 40, 15, 25],
  weights: [1, 2, 3, 8, 7, 4],
  capacity: 10,
};

const data2 = {
  scores: [19, 8, 6, 20, 3, 16],
  weights: [8, 2, 3, 10, 1, 5],
  capacity: 17,
};

console.log({
  // test: packBagpack(data.scores, data.weights, data.capacity),
  // test1: packBagpack(data1.scores, data1.weights, data1.capacity),
  test2: packBagpack(data2.scores, data2.weights, data2.capacity),
  cache
});
