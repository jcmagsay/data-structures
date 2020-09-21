const data = [1];
const data2 = [1, 2, 3];
const data3 = [1, 2, 3, 4, 5, 6, 7];

function rotLeft(a, d) {
  const arrLen = a.length;
  // const isDivisible = (arrLen / d) % 2 === 0;
  if (
    arrLen === 1
    // || isDivisible
  ) {
    return a;
  }


  for (let counter = d; counter > 0; counter--) {
    const valToShift = a.shift();
    a.push(valToShift);
  }

  return a;
}

const response = rotLeft(data, 1);
const response2 = rotLeft(data2, 4);
const response3 = rotLeft(data3, 49);

console.info({
  response,
  response2,
  response3,
});