import { readFileSync, writeFileSync } from 'fs';
import { load } from 'cheerio';
import puzzles from '../puzzles.json' with { type: 'json' };

console.log('--- Starting Puzzle Injection Script ---');

// --- Step 1: Load the HTML Template with Error Checking ---
const templatePath = 'public/printable-template.html';
let htmlTemplate;
try {
  htmlTemplate = readFileSync(templatePath, 'utf-8');
  console.log(`Successfully loaded template from: ${templatePath}`);
} catch (error) {
  console.error(`FATAL: Could not read HTML template at ${templatePath}`);
  throw error; // This will cause the action to fail loudly
}

const $ = load(htmlTemplate);

// --- Step 2: The Robust Helper Function ---
function populateGrid(selector, gridData) {
  console.log(`Attempting to populate grid with selector: ${selector}`);
  const grid = $(selector);
  
  if (grid.length === 0) {
    // This is a critical error and must stop the script
    throw new Error(`FATAL: Could not find grid with selector: ${selector}. Please check the ID in the HTML template.`);
  }

  const cells = grid.find('td');
  if (cells.length !== 81) {
    throw new Error(`FATAL: Grid ${selector} does not have exactly 81 <td> cells. Found ${cells.length}.`);
  }

  // Iterate and populate
  for (let i = 0; i < 81; i++) {
    const row = Math.floor(i / 9);
    const col = i % 9;
    const value = gridData[row][col];
    
    if (value !== 0) {
      $(cells[i]).text(value);
    } else {
      $(cells[i]).text('');
    }
  }
  console.log(`Successfully populated grid: ${selector}`);
}

// --- Step 3: Populate All Grids ---
try {
  const date = new Date().toLocaleDateString('en-US', { timeZone: 'UTC' });
  $('#date-placeholder').text(date);
  console.log(`Date updated to: ${date}`);

  populateGrid('#easy-puzzle-grid', puzzles.easy.puzzle);
  populateGrid('#medium-puzzle-grid', puzzles.medium.puzzle);
  populateGrid('#hard-puzzle-grid', puzzles.hard.puzzle);
  
  populateGrid('#easy-solution-grid', puzzles.easy.solution);
  populateGrid('#medium-solution-grid', puzzles.medium.solution);
  populateGrid('#hard-solution-grid', puzzles.hard.solution);
} catch (error) {
  console.error('An error occurred during grid population:');
  throw error;
}

// --- Step 4: Save the Final HTML File ---
const outputPath = 'temp-printable.html';
writeFileSync(outputPath, $.html());
console.log(`Successfully created final HTML file at: ${outputPath}`);
console.log('--- Puzzle Injection Script Finished ---');