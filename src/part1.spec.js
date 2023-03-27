import { willEverGetBingo } from './willEverGetBingo';
import { numbers, bingoCard } from "./fixtures/part1.json";

describe('test willEverGetBingo', function () {
  it('returns true when there is a bingo', function () {
    const isBingo = willEverGetBingo(numbers, bingoCard);

    expect(isBingo).toEqual(true);
  })
})