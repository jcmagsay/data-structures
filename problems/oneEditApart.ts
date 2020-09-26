const wordsAreSame = (w1, w2) => {
  // though this can technically be true, especially
  // when the length of each word is 1
  return w1 === w2;
}

const wordsHaveSameLength = (w1, w2) => {
  return w1.length === w2.length;
};

const characterWasInserted = (w1, w2) => {
  console.log("initialize characterWasInserted()");

  const w2Len = w2.length;
  let iterator = 0;
  let diffs = 0;

  while (iterator < w2Len) {
    let compareVal;
    if (iterator === 0) {
      compareVal = w2.slice(iterator + 1);
    } else {
      compareVal = `${w2.slice(0, iterator)}${w2.slice(iterator + 1)}`
    }

    if (w1 === compareVal) {
      diffs += 1;
    }

    iterator += 1;
  }

  return diffs === 1;
};

const characterWasRemoved = (w1, w2) => {
  console.log("initialize characterWasRemoved()");

  const w1Len = w1.length;
  let iterator = 0;
  let diffs = 0;

  while (iterator < w1Len) {
    let compareVal;
    if (iterator === 0) {
      compareVal = w1.slice(iterator + 1);
    } else {
      compareVal = `${w1.slice(0, iterator)}${w1.slice(iterator + 1)}`
    }

    if (w2 === compareVal) {
      diffs += 1;
    }

    iterator += 1;
  }

  return diffs === 1;
};

const characterWasReplaced = (w1, w2) => {
  console.log("initialize characterWasReplaced()");

  const w1Len = w1.length;
  let iterator = 0;
  let diffs = 0;

  while (iterator < w1Len) {
    let w1CompareVal;
    let w2CompareVal;

    if (iterator === 0) {
      w1CompareVal = w1.slice(iterator + 1);
      w2CompareVal = w2.slice(iterator + 1);
    } else {
      w1CompareVal = `${w1.slice(0, iterator)}${w1.slice(iterator + 1)}`
      w2CompareVal = `${w2.slice(0, iterator)}${w2.slice(iterator + 1)}`
    }

    if (w1CompareVal === w2CompareVal) {
      diffs += 1;
    }

    iterator += 1;
  }

  return diffs === 1;
};

// takes a string and will return true/false based on whether
// or not one of the following criteria are met:
//   1. Inserting one character anywhere in the word
//      (including at the beginning and end)
//   2. Removing one character
//   3. Replacing one character
const oneEditApart = (oldWord, newWord) => {
  console.log("initialize oneEditApart()");
  const wordsSame = wordsAreSame(oldWord, newWord);

  if (wordsSame) {
    return false;
  }

  if (
    !wordsSame
    && oldWord.length === 1
    && newWord.length === 1
  ) {
    return true;
  }

  const wordsSameLen = wordsHaveSameLength(oldWord, newWord);
  if (wordsSameLen) {
    return characterWasReplaced(oldWord, newWord);
  }

  const delta = oldWord.length - newWord.length;
  const cleanDelta = delta < 0
    ? delta * -1
    : delta;

  if (cleanDelta >= 2) {
    return false;
  }

  if (oldWord.length > newWord.length) {
    return characterWasRemoved(oldWord, newWord);
  } else if (oldWord.length < newWord.length) {
    return characterWasInserted(oldWord, newWord);
  }
}


// test cases
const word1 = "ab";
const word2 = "b";
/**
 * # TRUE CASES
 * a, b
 * b, a
 * ab, b
 * ab, ac
 * cat, cats
 * cat, cast
 * at, cat
 * cat, at
 * cat, bat
 *
 *
 * # FALSE CASES
 *
 *
 *
 */

const result = oneEditApart(word1, word2);

console.log({
  first: oneEditApart('cat', 'at'),
  second: oneEditApart('cat', 'cast'),
  third: oneEditApart('fart', 'cart'),
  fourth: oneEditApart('a', 'a'),
  fifth: oneEditApart('apple', 'orange'),
  sixth: oneEditApart('apple', 'wapples'),
});