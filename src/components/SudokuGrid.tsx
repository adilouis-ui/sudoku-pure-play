import React from 'react';
import { SudokuGrid as GridType } from '@/hooks/useSudoku';

interface SudokuGridProps {
  grid: GridType;
  givenCells: boolean[][];
  activeCell: { row: number; col: number } | null;
  highlightedCells: Set<string>;
  onCellClick: (row: number, col: number) => void;
  onCellChange: (row: number, col: number, value: number | null) => void;
}

export const SudokuGrid: React.FC<SudokuGridProps> = ({
  grid,
  givenCells,
  activeCell,
  highlightedCells,
  onCellClick,
  onCellChange,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent, row: number, col: number) => {
    if (givenCells[row][col]) return;

    const key = e.key;
    if (key >= '1' && key <= '9') {
      onCellChange(row, col, parseInt(key));
    } else if (key === 'Backspace' || key === 'Delete' || key === '0') {
      onCellChange(row, col, null);
    }
  };

  return (
    <div className="sudoku-grid max-w-lg mx-auto">
      {grid.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          const cellKey = `${rowIndex}-${colIndex}`;
          const isActive = activeCell?.row === rowIndex && activeCell?.col === colIndex;
          const isHighlighted = highlightedCells.has(cellKey) && !isActive;
          const isGiven = givenCells[rowIndex][colIndex];

          return (
            <button
              key={cellKey}
              className={`
                sudoku-cell
                ${isActive ? 'active' : ''}
                ${isHighlighted ? 'highlighted' : ''}
                ${isGiven ? 'given' : ''}
              `}
              onClick={() => onCellClick(rowIndex, colIndex)}
              onKeyDown={(e) => handleKeyDown(e, rowIndex, colIndex)}
              tabIndex={0}
            >
              {cell || ''}
            </button>
          );
        })
      )}
    </div>
  );
};