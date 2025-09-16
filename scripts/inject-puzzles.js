import { readFileSync, writeFileSync, existsSync } from 'fs';
import { load } from 'cheerio';
import puzzles from '../puzzles.json' with { type: 'json' };

console.log('--- Starting Puzzle Injection Script ---');

const templatePath = 'public/printable-template.html';
if (!existsSync(templatePath)) {
  throw new Error(`FATAL: HTML template not found at path: ${templatePath}`);
}
const htmlTemplate = readFileSync(templatePath, 'utf-8');
const $ = load(htmlTemplate);
console.log('Successfully loaded HTML template.');

function populateGrid(selector, gridData) {
  const grid = $(selector);
  if (grid.length === 0) throw new Error(`FATAL: Could not find grid with selector: ${selector}`);
  
  const cells = grid.find('td');
  if (cells.length !== 81) throw new Error(`FATAL: Grid ${selector} needs 81 <td> cells, but found ${cells.length}.`);

  gridData.flat().forEach((value, i) => {
    $(cells[i]).text(value !== 0 ? value : '');
  });
  console.log(`Successfully populated grid: ${selector}`);
}

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
  console.error('An error occurred during grid population!');
  throw error;
}

const outputPath = 'temp-printable.html';
writeFileSync(outputPath, $.html());
console.log(`Successfully created final HTML file at: ${outputPath}`);
console.log('--- Puzzle Injection Script Finished ---');