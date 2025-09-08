import sudoku from 'sudoku';
import { writeFileSync } from 'fs';

// Generate puzzles with different difficulty levels
const puzzles = {
  easy: {
    puzzle: sudoku.makepuzzle(),
    solution: null
  },
  medium: {
    puzzle: sudoku.makepuzzle(),
    solution: null
  },
  hard: {
    puzzle: sudoku.makepuzzle(),
    solution: null
  }
};

// Generate solutions for each puzzle
puzzles.easy.solution = sudoku.solvepuzzle(puzzles.easy.puzzle);
puzzles.medium.solution = sudoku.solvepuzzle(puzzles.medium.puzzle);
puzzles.hard.solution = sudoku.solvepuzzle(puzzles.hard.puzzle);

// Convert null values to empty strings for display
function formatGrid(grid) {
  return grid.map(cell => cell === null ? '' : (cell + 1).toString());
}

// Format all grids
puzzles.easy.puzzle = formatGrid(puzzles.easy.puzzle);
puzzles.easy.solution = formatGrid(puzzles.easy.solution);
puzzles.medium.puzzle = formatGrid(puzzles.medium.puzzle);
puzzles.medium.solution = formatGrid(puzzles.medium.solution);
puzzles.hard.puzzle = formatGrid(puzzles.hard.puzzle);
puzzles.hard.solution = formatGrid(puzzles.hard.solution);

// Save to JSON file
writeFileSync('puzzles.json', JSON.stringify(puzzles, null, 2));
console.log('Successfully generated and saved puzzles.json');