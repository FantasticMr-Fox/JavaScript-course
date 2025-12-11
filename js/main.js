const wordList = ['apple', 'banana', 'cherry'];
const sentenceList = ['I like to eat', 'My favorite fruit is', 'I enjoy making smoothies with'];

let score = 0;

let userChoice = prompt('Choose mode: 1 for Words, 2 for Sentences');

if (userChoice === '1') {

    for (let i = 0; i < wordList.length; i++) {
        let userWord = prompt('Enter word: '+ wordList[i]);

        if (userWord === wordList[i]) {
            score += 1;
            console.log('Correct! Score increased to:', score);
        }
        else {
            console.log('Incorrect. The correct word was:', wordList[i]);
        }
    }

} else if (userChoice === '2') {

   for (let i = 0; i < sentenceList.length; i++) {
        let userSentence = prompt('Enter sentence: '+ sentenceList[i]);

        if (userSentence === sentenceList[i]) {
            score += 1;
            console.log('Correct! Score increased to:', score);
        }
        else {
            console.log('Incorrect. The correct sentence was:', sentenceList[i]);
        }
    } 

} else {
    console.log('Invalid choice. Please refresh and try again.');
}


console.log('Final score:', score);