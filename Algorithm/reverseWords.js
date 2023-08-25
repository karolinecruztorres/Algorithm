function reverseWords(sentence) {
  const words = sentence.split(' ');
  const reversedWords = words.reverse();
  const reversedSentence = reversedWords.join(' ');
  return reversedSentence;
}

const sentence1 = "Hello World";
const sentence2 = "Coding is fun";
const sentence3 = "Challenge accepted";

console.log(reverseWords(sentence1));  
console.log(reverseWords(sentence2));  
console.log(reverseWords(sentence3));  