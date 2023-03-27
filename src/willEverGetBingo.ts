import { findWinningBingoNumberIndex } from "./findWinningBingoNumberIndex";

export function willEverGetBingo(numbers: number[], bingoCard: number[][]): boolean {
  const winningBingoNumberIndex = findWinningBingoNumberIndex(numbers, bingoCard);

  return winningBingoNumberIndex !== -1;
}

