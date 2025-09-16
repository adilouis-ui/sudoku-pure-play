import { readFileSync, writeFileSync } from 'fs';
import { load } from 'cheerio';
import puzzles from '../puzzles.json' with { type: 'json' };

const htmlTemplate = readFileSync('public/printable-template.html', 'utf-8');
const $ = load(htmlTemplate);

// This is the robust helper function to populate a grid
function populateGrid(selector, gridData) {
  const grid = $(selector);
  if (grid.length === 0) {
    console.error(`Error: Could not find grid with selector: ${selector}`);
    return;
  }

  // Find all table data cells (<td>) within the grid
  const cells = grid.find('td');
  if (cells.length !== 81) {
    console.error(`Error: Grid ${selector} does not have exactly 81 cells.`);
    return;
  }

  // Iterate through all 81 cells and populate them
  for (let i = 0; i < 81; i++) {
    const row = Math.floor(i / 9);
    const col = i % 9;
    const value = gridData[row][col];
    
    // Only place a number if it's not a zero (empty cell)
    if (value !== 0) {
      $(cells[i]).text(value);
    } else {
      $(cells[i]).text(''); // Ensure empty cells are truly empty
    }
  }
}

// Populate all puzzles and solutions
populateGrid('#easy-puzzle-grid', puzzles.easy.puzzle);
populateGrid('#medium-puzzle-grid', puzzles.medium.puzzle);
populateGrid('#hard-puzzle-grid', puzzles.hard.puzzle);

populateGrid('#easy-solution-grid', puzzles.easy.solution);
populateGrid('#medium-solution-grid', puzzles.medium.solution);
populateGrid('#hard-solution-grid', puzzles.hard.solution);

// Update the date
$('#date-placeholder').text(new Date().toLocaleDateString('en-US'));

// Save the new, populated HTML file
writeFileSync('temp-printable.html', $.html());
console.log('Successfully created temp-printable.html');