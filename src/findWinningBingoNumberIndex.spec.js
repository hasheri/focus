import { findWinningBingoNumberIndex } from './findWinningBingoNumberIndex';

describe('test findWinningBingoNumberIndex', function () {
  it('returns -1 if no winner', function () {
    const numbers = [1, 2, 3, 4, 6, 7, 8, 9];
    const bingoCard = [
      [1, 5, 3],
      [4, 5, 6],
      [5, 8, 5]
    ];

    const expected = -1;
    const actual = findWinningBingoNumberIndex(numbers, bingoCard);

    expect(actual).toEqual(expected);
  })

  it('returns 0 if first number is winner', function () {
    const numbers = [1, 2, 3, 4, 6, 7, 8, 9];
    const bingoCard = [
      [1, 1, 1],
      [4, 5, 6],
      [5, 8, 5]
    ];

    const expected = 0;
    const actual = findWinningBingoNumberIndex(numbers, bingoCard);

    expect(actual).toEqual(expected);
  })
})