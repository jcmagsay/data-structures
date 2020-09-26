function reverseString(str) {
  const strLength = str.length;

  if (strLength === 1) {
    return str;
  }

  let iterator = 0;
  let reversedString = "";

  while (iterator <= strLength) {
    const charPosition = strLength - iterator;
    const char = str.charAt(charPosition);

    reversedString = reversedString.concat(char);

    iterator += 1;
  }

  return reversedString;
}

// test data
const test = "abcde";
const cow = "cow";
const mow = "mow";

console.log({
  test: reverseString(test),
  cow: reverseString(cow),
  mow: reverseString(mow),
});