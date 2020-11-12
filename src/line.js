export default class Line {
  constructor(string, words, syllables) {
    this.string = string;
    this.words = [];
    this.syllables = 0;
  }

  
  countVowels() { 
    let vowelCount = 0;
    let countString = (this.string).toLowerCase();
    for (let i = 0; i<= countString.length-1; i++) {
      if (countString.charAt(i) == "a" || countString.charAt(i) == "e" || countString.charAt(i) == "i" || countString.charAt(i) == "o" || countString.charAt(i) == "u") {
      vowelCount += 1;
      }
    }
    return vowelCount;
  }
    
      splitWord() {
        let words = (this.string).split(" ");
        return words;
      }
};