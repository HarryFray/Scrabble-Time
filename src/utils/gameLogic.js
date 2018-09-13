export function generateRandomLetters() {
  let consonants = 'BCDFGHJKLMNPQRSTVWXZ';
  let vowels = 'AEIOUY';
  let allLetters = vowels + consonants;
  let letters = [];
  for (let i = 0; i < 9; i++) {
    if (i < 2) {
      letters.push(this.getRandomLetter(vowels));
    } else if (i < 4) {
      letters.push(this.getRandomLetter(consonants));
    } else {
      letters.push(this.getRandomLetter(allLetters));
    }
  }
  return letters;
}

export function getRandomLetter(chars) {
  let randIndex = Math.floor(Math.random() * chars.length);
  return chars[randIndex];
}

export function checkIfWordInLetters(word) {
  let bigWord = word.toUpperCase();
  for (let i = 0; i < word.length; i++) {
    if (!this.letters.includes(bigWord[i])) return false;
  }
  return true;
}
