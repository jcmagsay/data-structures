// const mag = 'A bird is a walk in the dark at dawn for lunch time killing';
// const note = 'killing is a walk in the park';
const mag = 'give me one grand today night'.split(' ');
const note = 'give one grand today'.split(' ');

function checkMagazine(magazine, note) {
  if (
    !magazine.length
    || !note.length
  ) {
    console.log('No');
  }

  const wordDictionary = magazine.reduce((dictionary, word) => {
    if (dictionary[word]) {
      dictionary[word] += 1;
    } else {
      dictionary[word] = 1;
    }

    return dictionary
  }, {});

  let noteIsValid = true;

  while (
    noteIsValid
    && note.length > 0
  ) {
    const noteWord = note.shift();
    const dictWord = wordDictionary[noteWord];
    const hasWord = dictWord > 0;

    if (hasWord) {
      wordDictionary[noteWord] -= 1;
    } else {
      noteIsValid = false;
    }
  }

  const result = noteIsValid ? 'Yes' : 'No';
  console.log(result);
}

const note1 = checkMagazine(mag, note);