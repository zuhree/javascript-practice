// function counterWords(sentence) {
//   let words = sentence.trim().split(/\s+/);
//   let wordsLength = words.length;

//   return wordsLength;
// }

function counterWords(sentence) {
  return sentence.trim().split(/\s+/).length;
}

console.log(counterWords("This  is  the    JavaScript    Word Counter"));
