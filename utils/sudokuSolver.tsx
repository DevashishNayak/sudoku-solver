export function solveSudoku(board: number[][]) {
  const emptySpot = findEmptySpot(board);

  if (!emptySpot) {
    // No empty spots left, puzzle solved
    return board;
  }

  const [row, col] = emptySpot;

  for (let num = 1; num <= 9; num++) {
    if (isSafe(board, row, col, num)) {
      board[row][col] = num;

      if (solveSudoku(board)) {
        return board;
      }

      board[row][col] = 0;
    }
  }

  return null; // Unsolved
}

function findEmptySpot(board: number[][]) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === 0) {
        return [row, col];
      }
    }
  }
  return null;
}

function isSafe(board: any, row: number, col: number, num: number) {
  return (
    !usedInRow(board, row, num) &&
    !usedInCol(board, col, num) &&
    !usedInBox(board, row - (row % 3), col - (col % 3), num)
  );
}

function usedInRow(
  board: { [x: string]: any[] },
  row: string | number,
  num: any
) {
  for (let col = 0; col < 9; col++) {
    if (board[row][col] === num) {
      return true;
    }
  }
  return false;
}

function usedInCol(
  board: { [x: string]: any }[],
  col: string | number,
  num: any
) {
  for (let row = 0; row < 9; row++) {
    if (board[row][col] === num) {
      return true;
    }
  }
  return false;
}

function usedInBox(
  board: { [x: string]: { [x: string]: any } },
  boxStartRow: number,
  boxStartCol: number,
  num: any
) {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (board[row + boxStartRow][col + boxStartCol] === num) {
        return true;
      }
    }
  }
  return false;
}
