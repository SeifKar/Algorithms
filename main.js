function analyzeSentence(sentence) {
    let length = 0;
    let words = 0;
    let vowels = 0;

    let inWord = false;
    const vowelSet = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];

        // Increment length counter
        length++;

        // Check for end of sentence
        if (char === '.') {
            // Ensure the last character is counted as the end of the last word if necessary
            if (inWord) {
                words++;
            }
            break;
        }

        // Check for vowels
        if (vowelSet.has(char)) {
            vowels++;
        }

        // Check for word boundaries
        if (char === ' ') {
            if (inWord) {
                words++;
                inWord = false;
            }
        } else {
            inWord = true;
        }
    }

    return {
        length: length,
        words: words,
        vowels: vowels
    };
}

const sentence = "This is a test sentence.";
const result = analyzeSentence(sentence);

console.log(`Length of the sentence: ${result.length}`);
console.log(`Number of words: ${result.words}`);
console.log(`Number of vowels: ${result.vowels}`);
