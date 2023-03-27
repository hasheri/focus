import { findFirstWinningBingoCardIndex } from "./findFirstWinningBingoCardIndex";
import { numbers, bingoCards } from "./fixtures/part2.json";

describe('test findFirstWinningBingoCardIndex', function () {
  it('returns the first winner card index from the list of bingo cards', function () {
    const expected = 2;
    const guaranteedWinnerBoard = findFirstWinningBingoCardIndex(numbers, bingoCards);

    expect(guaranteedWinnerBoard).toEqual(expected);
  })
})