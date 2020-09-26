function determineAnagram(str1, str2) {
  if (str1 === str2) {
    return true;
  }

  if (str1.length !== str2.length) {
    return false;
  }

  let isAnagram = true;

  let iterator = 0;
  let word1Accumulator = str1;

  while (
    isAnagram
    && iterator < str1.length
  ) {
    const char = str2.charAt(iterator);
    const charPosition = word1Accumulator.indexOf(char);

    if (charPosition === -1) {
      isAnagram = false;
    } else {
      // remove char from word 1
      const chunk1 = word1Accumulator.slice(0, charPosition);
      const chunk2 = word1Accumulator.slice(charPosition + 1);
      word1Accumulator = `${chunk1}${chunk2}`;
    }

    iterator += 1
  }

  return isAnagram;
}

// test data

const words0 = ['been', 'neeb'];
const words = ['race', 'care'];
const words1 = ['coffee', 'coffee'];
const words2 = ['abc', 'cba'];
const words3 = ['apple', 'orange'];
const words4 = ['iamlordvoldemort', 'tommarvoloriddle'];
const words5 = ['coffee', 'coofee'];

console.log({
  words0: determineAnagram(words0[0], words0[1]),
  words: determineAnagram(words[0], words[1]),
  words1: determineAnagram(words1[0], words1[1]),
  words2: determineAnagram(words2[0], words2[1]),
  words3: determineAnagram(words3[0], words3[1]),
  words4: determineAnagram(words4[0], words4[1]),
  words5: determineAnagram(words5[0], words5[1]),
})


