const allCharsUnique = (s) => {
  const sLen = s.length;

  let iterator = 0;
  let diffs = 0;

  if (sLen === 1) {
    return true;
  }

  while (
    iterator < sLen
    && diffs === 0
  ) {
    const predicate = s.slice(iterator + 1);
    const char = s[iterator];

    const isDuplicate = predicate.indexOf(char) > -1;

    if (isDuplicate) {
      diffs += 1;
    }

    iterator += 1;
  }

  return diffs === 0;
};

// tests
const data = 'abcdefg';
const data2 = 'abcdefgg';

console.log({
  test1: allCharsUnique(data),
  test2: allCharsUnique(data2),
});