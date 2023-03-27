/**
 * Returns the index of the first number in the `numbers` array that matches a winning pattern on the `bingoCard`.
 * If no winning pattern is found, returns -1.
 *
 * @param numbers - list of numbers to check
 * @param bingoCard - bingo card represented as a 2D array
 * @returns Index of the first winning number, or -1 if no winning number is found
 */

export function findWinningBingoNumberIndex(numbers: number[], bingoCard: number[][]): number {
  const bingoCardSize = bingoCard.length;
  const matchedNumbersInRows: number[] = new Array(bingoCardSize).fill(0);
  const matchedNumbersInCols: number[] = new Array(bingoCardSize).fill(0);
  const bingoCardNumbersRowColMap = new Map<number, [number, number][]>();

  // Store the row and col of each number in the bingoCardNumbersRowColMap
  for (let row = 0; row < bingoCardSize; row++) {
    for (let col = 0; col < bingoCardSize; col++) {
      const currentCardNumber = bingoCard[row][col];

      if (bingoCardNumbersRowColMap.has(currentCardNumber)) {
        bingoCardNumbersRowColMap.get(currentCardNumber)!.push([row, col]);
      } else {
        bingoCardNumbersRowColMap.set(currentCardNumber, [[row, col]]);
      }
    }
  }

  // Check each number in the list
  for (let i = 0; i < numbers.length; i++) {
    const numberToCheck = numbers[i];

    // If the number is present in the bingo card
    if (bingoCardNumbersRowColMap.has(numberToCheck)) {
      const rowColList = bingoCardNumbersRowColMap.get(numberToCheck)!;

      // Update the count of matched numbers in rows and columns
      for (let j = 0; j < rowColList.length; j++) {
        const [row, col] = rowColList[j];

        // Check if all cells in the row are marked
        matchedNumbersInRows[row]++;
        if (matchedNumbersInRows[row] === bingoCardSize) return i;

        // Check if all cells in the column are marked
        matchedNumbersInCols[col]++;
        if (matchedNumbersInCols[col] === bingoCardSize) return i;
      }

      // Remove the number from the map
      bingoCardNumbersRowColMap.delete(numberToCheck);
    }
  }

  // If no number matches all the cells in a row or column in the bingo card, return -1
  return -1;
}