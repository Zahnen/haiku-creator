export default class Line {
  constructor(string, words, syllables) {
    this.string = string;
    this.words = [];
    this.syllables = 0;
  }

  splitWord() {
    let words = (this.string).split(" ");
    return words;
  }
};