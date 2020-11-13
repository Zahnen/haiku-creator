export default class Line {
  constructor(string, vowelCount, words, syllables) {
    this.string = string;
    this.vowelCount = 0
    this.words = [];
    this.syllables = 0;
  }
  
  countVowels() { 
    let countString = (this.string).toLowerCase();
    for (let i = 0; i<= countString.length-1; i++) {
      if (countString.charAt(i) == "a" || countString.charAt(i) == "e" || countString.charAt(i) == "i" || countString.charAt(i) == "o" || countString.charAt(i) == "u" || countString.charAt(i) == "y") {
      this.vowelCount += 1;
      }
    }
    return this.vowelCount;
  }

  checkDipth() {
    let words = (this.string).split(" ");
    let vowelNum = this.vowelCount;
    const globalRegex = /["ai", "oo"]/g
    words.forEach (function(element) {
      if (globalRegex.test(element)) {
      vowelNum -= 1;
      }
    });  
    return vowelNum;
  }

  splitWord() {
    let words = (this.string).split(" ");
    return words;
  }
};


// let vowelAmount = this.vowelCount
  //   let countString = (this.string).toLowerCase();
  //   if (countString.includes("au" || "oo" || "oi" || "ou" || "ey" || "ai" || "ea" || "oy" || "ay" || "ie" || "ei")) {
  //     vowelAmount -= 1;
  //   }
  //     return vowelAmount; 
  // }