const data = 'acba';
const data2 = 'aba';
const data3 = 'x';
const chars = 10;

function repeatedString(s, n) {
  const sLen = s.length;
  const hasAs = s.indexOf('a') > -1;

  if (
    sLen === 1
    && hasAs
  ) {
    return n;
  }

  const totalRepeats = Math.floor(n / sLen);
  const neededChars = n % sLen;

  const numAsInFull = s.split('').filter((val) => val === 'a').length;

  if (numAsInFull === 0) {
    return 0;
  }

  const partialString = s.slice(0, neededChars);

  const numAsInPartial = partialString.split('').filter((val) => val === 'a').length;

  const totalAs = (numAsInFull * totalRepeats) + numAsInPartial;

  return totalAs;
}

// const result = repeatedString(data, chars);
// const result2 = repeatedString(data2, 10);
const result3 = repeatedString(data3, 970770);

console.info({
  // result,
  // result2,
  result3,
});