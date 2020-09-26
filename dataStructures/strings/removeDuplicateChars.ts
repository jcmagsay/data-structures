function removeDuplicateChars(str) {
  if (str === null) {
    return null;
  }

  const strLen = str.length;

  if (strLen <= 1) {
    return str;
  }

  let iterator = strLen;
  let deDupedStr = "";

  while (iterator >= 0) {
    const position = iterator - 1;
    const sliced = str.slice(0, position);
    const char = str.charAt(position)

    let firstInstance = sliced.indexOf(char);

    if (firstInstance === -1) {
      deDupedStr = char.concat(deDupedStr);
    }

    iterator -= 1;
  }

  return deDupedStr;
};

// test data
const testNull = null;
const test1 = "a";
const test2 = "aa";
const test3 = "ab";
const test4 = "aaabaz";
const test5 = "aaabbbcccdddabcdefgiiiiijsnk";

console.log({
  testNull: removeDuplicateChars(testNull),
  test1: removeDuplicateChars(test1),
  test2: removeDuplicateChars(test2),
  test3: removeDuplicateChars(test3),
  test4: removeDuplicateChars(test4),
  test5: removeDuplicateChars(test5),
})