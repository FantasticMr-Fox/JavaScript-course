const wordList = ['apple', 'banana', 'cherry'];
console.log('Initial word list:', wordList);

let score = 0;
console.log('Initial score:', score);

let firstWord = prompt('Enter the first word: ' + wordList[0]);

if (firstWord === wordList[0]) {
    score += 1;
    console.log('Correct! Score increased to:', score);
}

let secondWord = prompt('Enter the second word: ' + wordList[1]);

if (secondWord === wordList[1]) {
    score += 1;
    console.log('Correct! Score increased to:', score);
}

let thirdWord = prompt('Enter the third word: '+ wordList[2]);

if (thirdWord === wordList[2]) {
    score += 1;
    console.log('Correct! Score increased to:', score);
}

console.log('Final score:', score);