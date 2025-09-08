import { readFileSync, writeFileSync } from 'fs';
import { load } from 'cheerio'; // CORRECTED IMPORT: Use a named import for 'load'
import puzzles from '../puzzles.json' with { type: 'json' }; // CORRECTED IMPORT: Use 'with' instead of 'assert'

// Load the HTML template
const htmlTemplate = readFileSync('public/printable-template.html', 'utf-8');
const $ = load(htmlTemplate); // Use the imported 'load' function directly

// --- Helper function to populate a grid ---
function populateGrid(selector, gridData) {
  const grid = $(selector);
  const cells = grid.find('td'); // Assuming the grid is a <table> with <td> cells
  for (let i = 0; i < 81; i++) {
    const row = Math.floor(i / 9);
    const col = i % 9;
    const value = gridData[row][col];
    if (value !== 0) {
      $(cells[i]).text(value);
    }
  }
}

// Note to Lovable: You must ensure the template uses a <table> structure with 81 <td> elements for this to work.

// Populate the puzzles and solutions
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