const data = [2, 1, 5, 3, 4]; // yields 3
const data1 = [2, 5, 1, 3, 4]; // yields Too chaotic
const data2 = [5, 1, 2, 3, 7, 8, 6, 4]; // yields Too chaotic
const data3 = [1, 2, 5, 3, 7, 8, 6, 4]; // yields 7

// sample input: og = 5, cv = 3
const determineDelta = (ogLastPersonIndex, currentLastPersonValue) => {
  let delta = 0;

  delta = currentLastPersonValue - ogLastPersonIndex;

  // console.log({
  //   ogLastPersonIndex,
  //   currentLastPersonValue,
  //   delta,
  // });

  return delta < 1
    ? delta * -1
    : delta;
}

const findBribes = (q) => {
  let decrementer = q.length;

  let totalBribes = 0;
  let isChaotic = false;

  while (decrementer > 0) {
    // find max value of array
    const maxValue = Math.max(...q);

    // find max value's index in array
    const currentIndex = q.indexOf(maxValue);

    // determine place of max val
    const currentPlace = currentIndex + 1;
    // const currentValue = q[currentIndex];

    const delta = determineDelta(currentPlace, currentValue);

    // set indexes
    const nextIndex = currentIndex + 1;
    const nextPlusIndex = currentIndex + 2;

    // set values
    const nextValue = q[nextIndex];
    const nextPlusValue = q[nextPlusIndex];

    let decrementBy = 1;

    const swapOneVal = (
      nextValue
      && nextPlusValue
      && currentValue > nextValue
      && currentValue > nextPlusValue
    );

    const swapTwoVals = (
      nextValue
      && nextPlusValue
      && currentValue > nextValue
      && currentValue > nextPlusValue
    );

    console.log({
      decrementer,
      swapOneVal,
      swapTwoVals,
      currentValue,
      currentPlace,
      nextValue,
      nextPlusValue,
    });

    if (delta > 2) {
      isChaotic = true;
      decrementBy += decrementer;
    } else if (swapTwoVals) {
      console.log("is swapping 2")
      q[currentIndex] = nextValue;
      q[nextIndex] = nextPlusValue;
      q[nextPlusIndex] = currentValue;

      totalBribes += 2;
    } else if (swapOneVal) {
      console.log("is swapping 1")
      q[currentIndex] = nextValue;
      q[nextIndex] = currentValue;

      totalBribes += 1;
    }

    console.log("q new", q);

    decrementer -= decrementBy;
  }


  return {
    isChaotic,
    totalBribes,
    q,
  };
}

const minimumBribes2 = (q) => {
  let decrementer = q.length;

  let totalBribes = 0;
  let isChaotic = false;

  while (decrementer > 0) {
    const currentIndex = q.indexOf(decrementer);
    const currentPlace = currentIndex + 1;
    const currentValue = q[currentIndex];

    const delta = determineDelta(currentPlace, currentValue);

    // set indexes
    const nextIndex = currentIndex + 1;
    const nextPlusIndex = currentIndex + 2;

    // set values
    const nextValue = q[nextIndex];
    const nextPlusValue = q[nextPlusIndex];

    let decrementBy = 1;

    if (delta > 2) {
      isChaotic = true;
      decrementBy += decrementer;
    } else if (
      nextValue
      && nextPlusValue
      && currentValue > nextValue
      && currentValue > nextPlusValue
    ) {
      q[currentIndex] = nextValue;
      q[nextIndex] = nextPlusValue;
      q[nextPlusIndex] = currentValue;

      totalBribes += 2;
    } else if (
      nextValue
      && currentValue > nextValue
    ) {
      // may need extra case to check for nextPlus, but likely not
      q[currentIndex] = nextValue;
      q[nextIndex] = currentValue;

      totalBribes += 1;
    }

    decrementer -= decrementBy;
  }

  const result = isChaotic ? 'Too chaotic' : totalBribes;

  console.log(result);
};

// Complete the minimumBribes function below.
function minimumBribes(q) {
  const qLen = q.length;
  const halfMark = qLen / 2;
  const left = q.slice(0, halfMark);
  const right = q.slice(halfMark);

  console.log({
    left,
    right,
  })
  const leftSorted = findBribes(left);
  const rightSorted = findBribes(right);

  // console.log({
  //   leftSorted,
  //   rightSorted,
  // });

  if (
    leftSorted.isChaotic
    || rightSorted.isChaotic
  ) {
    console.log('Too chaotic');
  } else {
    const leftSide = leftSorted.q;
    const rightSide = rightSorted.q;

    const mergedArray = leftSide.concat(rightSide);
    const allSorted = findBribes(mergedArray);

    if (allSorted.isChaotic) {
      console.log('Too chaotic');
    } else {
      const sumBribes = leftSorted.totalBribes + rightSorted.totalBribes + allSorted;
      console.log(sumBribes);
    }
  }
}

// const result = minimumBribes(data);
// const result1 = minimumBribes(data1);
// const result2 = minimumBribes(data2);
const result3 = minimumBribes(data3);

// console.log({
//   result,
//   result2,
//   result3,
// })