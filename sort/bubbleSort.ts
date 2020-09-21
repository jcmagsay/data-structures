const arr0 = [6, 4, 1];

function countSwaps(a) {
  const aLen = a.length;
  let numSwaps = 0;
  const arr = a;
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap arr[j+1] and arr[i]
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        numSwaps += 1;
      }
    }
  }

  console.log(`Array is sorted in ${numSwaps} swaps.`);
  console.log(`First Element: ${arr.shift()}`);
  console.log(`Last Element: ${arr.pop()}`);
}

countSwaps(arr0);