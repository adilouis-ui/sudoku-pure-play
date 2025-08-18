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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, row: number, col: number) => {
    if (givenCells[row][col]) return;

    const value = e.target.value;
    if (value === '' || value === '0') {
      onCellChange(row, col, null);
    } else if (value >= '1' && value <= '9') {
      onCellChange(row, col, parseInt(value));
    }
  };

  return (
    <div 
      className="sudoku-grid"
      ref={(el) => {
        if (el) {
          const rect = el.getBoundingClientRect();
          const parentRect = el.parentElement?.getBoundingClientRect();
          console.log('Desktop QA - Grid dimensions:', {
            gridWidth: rect.width,
            gridHeight: rect.height,
            parentWidth: parentRect?.width,
            parentHeight: parentRect?.height,
            viewportWidth: window.innerWidth,
            viewportHeight: window.innerHeight,
            calculatedMaxSize: window.innerHeight - 80 - 32 - 32, // 80px navbar + 2rem gap + 2rem buffer
            isDesktop: window.innerWidth >= 769,
            gridTop: rect.top,
            gridBottom: rect.bottom,
            isClipped: rect.bottom > window.innerHeight
          });
        }
      }}
    >
      {grid.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          const cellKey = `${rowIndex}-${colIndex}`;
          const isActive = activeCell?.row === rowIndex && activeCell?.col === colIndex;
          const isHighlighted = highlightedCells.has(cellKey) && !isActive;
          const isGiven = givenCells[rowIndex][colIndex];

          return (
            <div
              key={cellKey}
              className={`
                sudoku-cell-container
                ${isActive ? 'active' : ''}
                ${isHighlighted ? 'highlighted' : ''}
                ${isGiven ? 'given' : ''}
              `}
              onClick={() => onCellClick(rowIndex, colIndex)}
            >
              <input
                type="text"
                inputMode="numeric"
                pattern="[1-9]*"
                maxLength={1}
                value={cell || ''}
                onChange={(e) => handleInputChange(e, rowIndex, colIndex)}
                onKeyDown={(e) => handleKeyDown(e, rowIndex, colIndex)}
                onFocus={() => onCellClick(rowIndex, colIndex)}
                readOnly={isGiven}
                className="sudoku-cell-input"
                tabIndex={0}
              />
            </div>
          );
        })
      )}
    </div>
  );
};