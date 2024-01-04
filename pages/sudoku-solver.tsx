import { useState } from "react";
import { solveSudoku } from "../utils/sudokuSolver";

const SudokuSolver = () => {
  const initialBoard = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9],
  ];

  const [board, setBoard] = useState([...initialBoard]);
  const [solved, setSolved] = useState(false);

  const handleSolveClick = () => {
    const solvedBoard = solveSudoku(board.map((row) => [...row]));
    if (solvedBoard) {
      setBoard([...solvedBoard]);
      setSolved(true);
    } else {
      // Handle unsolvable puzzle
      alert("The Sudoku puzzle is unsolvable.");
    }
  };

  const handleResetClick = () => {
    setBoard([...initialBoard]);
    setSolved(false);
  };

  return (
    <div>
      <h1>Sudoku Solver</h1>
      <table>
        <tbody>
          {board.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={colIndex}>{cell || ""}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleSolveClick}>Solve</button>
      <button onClick={handleResetClick}>Reset</button>
      {solved && <p>The puzzle has been solved!</p>}
    </div>
  );
};

export default SudokuSolver;
