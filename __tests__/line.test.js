import Line from '../src/line.js';
  
describe('Line', () => {

  let line;

  beforeEach(() => {
    line = new Line("I hope this test fails", [], 0);
  });

  test('should correctly create a line object with string, words, and syllables', () => {
    expect(line.string).toMatch();
    expect(line.words).toBeUndefined([]);
    expect(line.syllables).toEqual(0);
  });

  // test('should correctly split string into words', () => {
  //   expect(line.split("")).toMatch("I", "hope", "this", "test", "fails");
  // });

  // test('should correctly count vowels within each word', () => {
  //   expect("I").toEqual(1);
  // });

  // test('should correctly subtract one vowel in words that contain diphthongs', () => {
  //   expect("fails").toEqual(1);
  // });

  // test('should correctly subtract one vowel from the vowel total', () => {
  //   expect("hope").toEqual(1);
  // });

});
  