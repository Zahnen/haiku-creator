import Line from '../src/line.js';
  
describe('Line', () => {

  let line;

  beforeEach(() => {
    line = new Line("I hope this test fails",0, [], 0);
  });

  test('should correctly create a line object with string, words, and syllables', () => {
    expect(line.string).toEqual("I hope this test fails");
    expect(line.vowelCount).toEqual(0);
    expect(line.words).toEqual([]);
    expect(line.syllables).toEqual(0);
  });

  test('should correctly split string into words', () => {
    expect(line.splitWord("")).toEqual(["I", "hope", "this", "test", "fails"]);
  });

  test('should correctly count vowels within a line', () => {
    expect(line.countVowels()).toEqual(7);
  });

  test('should correctly subtract one vowel in words that contain diphthongs', () => {
    expect(line.checkDipth()).toEqual(-2);
  });

  // test('should correctly subtract one vowel from the vowel total', () => {
  //   expect("hope").toEqual(1);
  // });

});
  