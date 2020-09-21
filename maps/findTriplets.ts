const data = [0, 0, 0];
const data1 = [1, 2, 3]




function addItemsToMap(subArray) {
  const firstVal = subArray.shift();
  const secondVal = subArray.shift();
  const thirdVal = subArray.shift();

  const firstSecondSame = firstVal === secondVal;
  const secondThirdSame = secondVal === thirdVal;
  const firstThirdSame = firstVal === thirdVal;

  const allAreEqual = firstSecondSame && firstThirdSame;

  const mapHasFirst = numMap.has(firstVal);

  if (allAreEqual && mapHasFirst) {
    const ogFirstVal = numMap.get(firstVal);
    numMap.set(firstVal, ogFirstVal + 1);
  } else if (allAreEqual && !mapHasFirst) {
    numMap.set(firstVal, 3);
  }

  if (firstSecondSame) {

  } else {

  }

  if (firstThirdSame) {

  } else {

  }

  if (secondThirdSame) {

  }
}

function splitIntoSections(arr) {
  const numSections = Math.ceil(arr / 2);

  let slicePoint = 0;

  for (let sectionIndex = numSections; sectionIndex > 0; sectionIndex--) {
    slicePoint = slicePoint + 3;
    const subArray = arr.slice(0, slicePoint);

    addItemsToMap(subArray);
  }
}

function moveItemsToMap(arr, numMap) {
  while (arr.length > 0) {
    const currentValue = arr.shift();

    const mapHasValue = numMap.has(currentValue);

    if (mapHasValue) {
      const mapOldVal = numMap.get(mapHasValue);
      numMap.set(currentValue, mapOldVal + 1);
    } else {
      numMap.set(currentValue, 1);
    }
  }
}

function addTriplet(numMap) {
  for (const mapEntry in numMap.entries()) {
    console.log(mapEntry);
  }
}

// Complete the countTriplets function below.
function countTriplets(arr, r) {
  const arrLen = arr.length;

  if (arrLen < 3) {
    return 0;
  }

  const numMap = new Map();
  let tripletCount = 0;

  moveItemsToMap(arr, numMap);

  addTriplet(numMap);
}
