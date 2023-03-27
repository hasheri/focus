import { findWinningBingoNumberIndex } from "./findWinningBingoNumberIndex";

/**
 * Finds the index of the first winning bingo card based on a list of numbers and a list of bingo cards.
 * A bingo card is considered a winner if all cells in a column or row are marked with numbers that are in the list of numbers.
 * 
 * @param {number[]} numbers - A list of numbers
 * @param {number[][][]} bingoCards - A list of bingo cards, each represented as a 2D array of numbers.
 * @returns {number} - The index of the first winning bingo card, or -1 if no card is a winner.
 */

export function findFirstWinningBingoCardIndex(numbers: number[], bingoCards: number[][][]): number {
  let firstWinningBingoCardIndex = -1; // If no winner, returns -1
  let winningBingoNumberIndex: number | undefined;

  for (let i = 0; i < bingoCards.length; i++) {
    const currentBingoCard = bingoCards[i];
    const currentBingoNumberIndex = findWinningBingoNumberIndex(numbers, currentBingoCard);

    if (currentBingoNumberIndex === -1) {
      // This bingo card doesn't contain a winning number, so skip it
      continue;
    }

    if (!winningBingoNumberIndex || (currentBingoNumberIndex < winningBingoNumberIndex)) {
      // This bingo card contains a winning number that is earlier in the list of numbers than any previously found winning number
      winningBingoNumberIndex = currentBingoNumberIndex;
      firstWinningBingoCardIndex = i;
    }
  }

  return firstWinningBingoCardIndex;
}

