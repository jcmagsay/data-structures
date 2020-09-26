/**** INSTRUCTIONS ****/

/**
 * Given two strings, determine if they share a common substring. A substring
 * may be as small as one character.
 *
 * For example, the words "a", "and", "art" share the common substring .
 * The words "be" and "cat" do not share a substring.
 *
 * Function Description
 *
 * Complete the function twoStrings in the editor below. It should return a
 * string, either YES or NO based on whether the strings share a common
 * substring.
 *
 * twoStrings has the following parameter(s):
 * s1, s2: two strings to analyze .
 *
 * Input Format
 *
 * The first line contains a single integer , the number of test cases.
 *
 * The following  pairs of lines are as follows:
 * The first line contains string .
 * The second line contains string .
 *
 * Constraints
 * s1 and s2 consist of characters in the range ascii[a-z].
 * 1 <= p <= 10
 * 1 <= |s1|,|s2| <= 10^5
 *
 * Output Format
 * For each pair of strings, return YES or NO.
 *
 * Sample Input
 * 2
 * hello
 * world
 * hi
 * world
 *
 * Sample Output
 * YES
 * NO
 */

/**** MOCK DATA ****/

const setstr1 = 'hello';
const setstr2 = 'world';
const set1str1 = 'wouldyoulikefrieswouldyoulikefrieswouldyoulikefrieswouldyoulikefrieswouldyoulikefrieswouldyoulikefrieswouldyoulikefrieswouldyoulikefrieswouldyoulikefrieswouldyoulikefrieswouldyoulikefrieswouldyoulikea';
const set1str2 = 'abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcab';
const set2str1 = 'hackerrankcommunity'
const set2str2 = 'cdecdecdecde'
const set3str1 = 'jackandjill'
const set3str2 = 'wentupthehill'
const set4str1 = 'writetoyourparents'
const set4str2 = 'fghmqzldbc'

/**** SOLUTIONS ****/

/**** BRUTE FORCE BELOW ****/

function getUniqueChars2(s1Array) {
  const uniqueChars = new Set();

  while (s1Array.length > 0) {
    const char = s1Array.shift();
    uniqueChars.add(char);
  }

  return uniqueChars;
}

function determineIfHasSubstrings2(set1, set2) {
  let numSubstringMatches = 0;

  for (const charSet of set1.entries()) {
    const char = charSet.shift();

    const charIsShared = set2.has(char);

    if (charIsShared) {
      numSubstringMatches += 1;
    }
  }

  return numSubstringMatches > 0;
}

function twoStrings2(s1, s2) {
  const s1Array = s1.split('');
  const s2Array = s2.split('');
  const s1UniqueChars = getUniqueChars2(s1Array);
  const s2UniqueChars = getUniqueChars2(s2Array);

  const hasMatches = determineIfHasSubstrings2(s1UniqueChars, s2UniqueChars);

  const result = hasMatches ? 'YES' : 'NO';

  console.log(result);

  return result;
}

/**** PERFORMANT BELOW ****/

function createSetOfUniqueChars(collection) {
  console.log("enter - createSetOfUniqueChars");
  return collection.reduce((set, char) => {
    set.add(char);
    return set;
  }, new Set());
}

function createBatchSets(batches) {
  console.log("enter - createBatchSets");
  const batchesTotal = batches.length;

  const batchSets = new Array()

  for (let iterator = 0; iterator < batchesTotal; iterator++) {
    const currentBatch = batches[iterator];
    const currentSet = createSetOfUniqueChars(currentBatch);

    batchSets.push(currentSet);
  }

  return batchSets;
}

function createBatches(stringArray, limit) {
  console.log("enter - createBatches");
  let totalBatches = Math.ceil(stringArray.length / limit);

  const batches = new Array();

  for (let batchCount = 0; batchCount < totalBatches; batchCount++) {
    const startAt = batchCount * limit;
    const endAt = (batchCount + 1) * limit;
    const substring = stringArray.slice(startAt, endAt);

    batches.push(substring);
  }

  return batches;
}

function mergeSets(sets) {
  console.log("enter - mergeSets");
  const mergedSet = new Set();

  let sLen = sets.length;
  let totalMatches = 0;

  for (let setIndex = 0; setIndex < sLen; setIndex++) {
    const currentSet = sets[setIndex];

    for (const charSet of currentSet.entries()) {
      const char = charSet.shift();

      const alreadyExists = mergedSet.has(char);

      if (alreadyExists) {
        totalMatches += 1;
      } else {
        mergedSet.add(char);
      }
    }
  }

  const mergedObject = {
    set: mergedSet,
    totalMatches,
  };

  return mergedObject;
}

function findUniqueChars(stringArray, limit) {
  console.log("enter - findUniqueChars");
  let batches = [];
  let batchSets = [];

  if (stringArray.length > limit) {
    batches = createBatches(stringArray, limit);
  }

  if (batches.length) {
    batchSets = createBatchSets(batches);
  }

  if (batchSets.length) {
    const mergedSet = mergeSets(batchSets);
    return mergedSet.set;
  }

  const set = createSetOfUniqueChars(stringArray)
  return set;
}

function twoStrings(s1, s2) {
  if (s1 === s2) {
    return 'YES';
  }

  const stringArray1 = s1.split('');
  const stringArray2 = s2.split('');

  let limit = 50;
  const uniqueSetString1 = findUniqueChars(stringArray1, limit);
  const uniqueSetString2 = findUniqueChars(stringArray2, limit);

  const mergedRootSets = mergeSets([
    uniqueSetString1,
    uniqueSetString2,
  ]);

  const hasCommonSubStrings = mergedRootSets.totalMatches > 0;

  console.log({ hasCommonSubStrings });

  return hasCommonSubStrings ? 'YES' : 'NO';
}

/**** TEST CASE(S) ****/

const start = new Date().getMilliseconds();

twoStrings(set1str1, set1str2);

const stopTime = new Date().getMilliseconds();

const duration = stopTime - start;

console.log({
  duration,
})

