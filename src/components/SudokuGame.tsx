import React, { useState } from 'react';
import { useSudoku, Difficulty } from '@/hooks/useSudoku';
import { SudokuGrid } from './SudokuGrid';
import { DifficultyButtons } from './DifficultyButtons';
import { ConfettiAnimation } from './ConfettiAnimation';

export const SudokuGame: React.FC = () => {
  const [currentDifficulty, setCurrentDifficulty] = useState<Difficulty>('challenge');
  
  const {
    grid,
    givenCells,
    activeCell,
    isComplete,
    generateNewGame,
    setActiveCell,
    setCellValue,
    getHighlightedCells,
  } = useSudoku();

  const highlightedCells = activeCell 
    ? getHighlightedCells(activeCell.row, activeCell.col)
    : new Set<string>();

  const handleDifficultySelect = (difficulty: Difficulty) => {
    setCurrentDifficulty(difficulty);
    generateNewGame(difficulty);
  };

  const handleCellClick = (row: number, col: number) => {
    setActiveCell(row, col);
  };

  const handleCellChange = (row: number, col: number, value: number | null) => {
    setCellValue(row, col, value);
  };

  const hasStarted = grid.some(row => row.some(cell => cell !== null));

  return (
    <>
      {!hasStarted ? (
        // Initial centered view
        <div className="flex flex-col items-center justify-center p-4">
          <div className="text-center mb-6">
            <h1 className="text-4xl sm:text-5xl font-light text-foreground mb-4 tracking-wide">
              Sudoku
            </h1>
            <p className="text-muted-foreground text-lg mb-6">
              Fill each row, column, and 3×3 box with digits 1-9
            </p>
          </div>
          <DifficultyButtons 
            onDifficultySelect={handleDifficultySelect} 
            currentDifficulty={currentDifficulty}
            variant="standalone"
          />
        </div>
      ) : (
        // Game view without duplicate navigation
        <div className="flex flex-col gap-3 py-2 px-4">
          {/* Difficulty Controls */}
          <div className="flex justify-center">
            <DifficultyButtons 
              onDifficultySelect={handleDifficultySelect}
              currentDifficulty={currentDifficulty}
              variant="segmented"
            />
          </div>

          {/* Game Content */}
          <div className="flex justify-center">
            <div className="relative">
              <SudokuGrid
                grid={grid}
                givenCells={givenCells}
                activeCell={activeCell}
                highlightedCells={highlightedCells}
                onCellClick={handleCellClick}
                onCellChange={handleCellChange}
              />

              {/* Success Overlay */}
              {isComplete && (
                <div className="absolute inset-0 success-overlay rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <h2 className="text-4xl sm:text-5xl font-bold success-message mb-4">
                      Brilliantly Solved!
                    </h2>
                    <p className="text-lg text-foreground/80 mb-6">
                      Ready for another challenge?
                    </p>
                    <DifficultyButtons 
                      onDifficultySelect={handleDifficultySelect}
                      currentDifficulty={currentDifficulty}
                      variant="standalone"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Instructions */}
          {!isComplete && (
          <div className="pb-4 text-center text-sm text-muted-foreground">
            Click a cell and type 1-9 to fill it • Press Backspace to clear
          </div>
          )}
        </div>
      )}

      {/* Confetti Animation */}
      <ConfettiAnimation isVisible={isComplete} />
    </>
  );
};