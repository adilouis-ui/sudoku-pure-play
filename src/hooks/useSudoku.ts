import { useState, useCallback } from 'react';

export type SudokuGrid = (number | null)[][];
export type Difficulty = 'warm-up' | 'challenge' | 'brain-fire';

interface SudokuState {
  grid: SudokuGrid;
  solution: SudokuGrid;
  givenCells: boolean[][];
  activeCell: { row: number; col: number } | null;
  isComplete: boolean;
}

// Generate a complete, valid Sudoku solution
const generateCompleteSudoku = (): SudokuGrid => {
  const grid: SudokuGrid = Array(9).fill(null).map(() => Array(9).fill(null));
  
  const isValid = (grid: SudokuGrid, row: number, col: number, num: number): boolean => {
    // Check row
    for (let x = 0; x < 9; x++) {
      if (grid[row][x] === num) return false;
    }
    
    // Check column
    for (let x = 0; x < 9; x++) {
      if (grid[x][col] === num) return false;
    }
    
    // Check 3x3 box
    const startRow = row - (row % 3);
    const startCol = col - (col % 3);
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (grid[i + startRow][j + startCol] === num) return false;
      }
    }
    
    return true;
  };

  const solve = (grid: SudokuGrid): boolean => {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (grid[row][col] === null) {
          const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9].sort(() => Math.random() - 0.5);
          for (const num of numbers) {
            if (isValid(grid, row, col, num)) {
              grid[row][col] = num;
              if (solve(grid)) return true;
              grid[row][col] = null;
            }
          }
          return false;
        }
      }
    }
    return true;
  };

  solve(grid);
  return grid;
};

// Create a puzzle by removing cells from a complete solution
const generatePuzzle = (solution: SudokuGrid, difficulty: Difficulty): { puzzle: SudokuGrid; givenCells: boolean[][] } => {
  const puzzle = solution.map(row => [...row]);
  const givenCells = Array(9).fill(null).map(() => Array(9).fill(true));
  
  const cellsToRemove = {
    'warm-up': 35,
    'challenge': 45,
    'brain-fire': 55
  }[difficulty];

  let removed = 0;
  while (removed < cellsToRemove) {
    const row = Math.floor(Math.random() * 9);
    const col = Math.floor(Math.random() * 9);
    
    if (puzzle[row][col] !== null) {
      puzzle[row][col] = null;
      givenCells[row][col] = false;
      removed++;
    }
  }

  return { puzzle, givenCells };
};

export const useSudoku = () => {
  const [state, setState] = useState<SudokuState>({
    grid: Array(9).fill(null).map(() => Array(9).fill(null)),
    solution: Array(9).fill(null).map(() => Array(9).fill(null)),
    givenCells: Array(9).fill(null).map(() => Array(9).fill(false)),
    activeCell: null,
    isComplete: false,
  });

  const generateNewGame = useCallback((difficulty: Difficulty) => {
    const solution = generateCompleteSudoku();
    const { puzzle, givenCells } = generatePuzzle(solution, difficulty);
    
    setState({
      grid: puzzle,
      solution,
      givenCells,
      activeCell: null,
      isComplete: false,
    });
  }, []);

  const setActiveCell = useCallback((row: number, col: number) => {
    setState(prev => ({
      ...prev,
      activeCell: { row, col }
    }));
  }, []);

  const setCellValue = useCallback((row: number, col: number, value: number | null) => {
    if (state.givenCells[row][col]) return; // Can't modify given cells

    setState(prev => {
      const newGrid = prev.grid.map(r => [...r]);
      newGrid[row][col] = value;
      
      // Check if puzzle is complete
      const isComplete = newGrid.every((row, r) => 
        row.every((cell, c) => cell === prev.solution[r][c])
      );

      return {
        ...prev,
        grid: newGrid,
        isComplete
      };
    });
  }, [state.givenCells]);

  const getHighlightedCells = useCallback((activeRow: number, activeCol: number): Set<string> => {
    const highlighted = new Set<string>();
    
    // Highlight row and column
    for (let i = 0; i < 9; i++) {
      highlighted.add(`${activeRow}-${i}`);
      highlighted.add(`${i}-${activeCol}`);
    }
    
    // Highlight 3x3 block
    const blockStartRow = Math.floor(activeRow / 3) * 3;
    const blockStartCol = Math.floor(activeCol / 3) * 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        highlighted.add(`${blockStartRow + i}-${blockStartCol + j}`);
      }
    }
    
    return highlighted;
  }, []);

  return {
    grid: state.grid,
    givenCells: state.givenCells,
    activeCell: state.activeCell,
    isComplete: state.isComplete,
    generateNewGame,
    setActiveCell,
    setCellValue,
    getHighlightedCells,
  };
};