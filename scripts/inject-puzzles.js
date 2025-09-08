const fs = require('fs');
const cheerio = require('cheerio');
const puzzles = require('../puzzles.json');

// Load the HTML template
const htmlTemplate = fs.readFileSync('public/printable-template.html', 'utf-8');
const $ = cheerio.load(htmlTemplate);

// Helper function to populate a grid
function populateGrid(selector, gridData, cellClass = 'sudoku-cell') {
  const gridContainer = $(selector);
  gridContainer.empty(); // Clear existing content
  
  // Create 81 cells for the 9x9 grid
  for (let i = 0; i < 81; i++) {
    const cellValue = gridData[i] || '';
    const cellElement = `<div class="${cellClass}">${cellValue}</div>`;
    gridContainer.append(cellElement);
  }
}

// Populate the puzzles
populateGrid('#easy-puzzle-grid', puzzles.easy.puzzle);
populateGrid('#medium-puzzle-grid', puzzles.medium.puzzle);
populateGrid('#hard-puzzle-grid', puzzles.hard.puzzle);

// Populate the solutions with solution-cell class
populateGrid('#easy-solution-grid', puzzles.easy.solution, 'solution-cell');
populateGrid('#medium-solution-grid', puzzles.medium.solution, 'solution-cell');
populateGrid('#hard-solution-grid', puzzles.hard.solution, 'solution-cell');

// Update the date
const today = new Date();
const dateString = today.toLocaleDateString('en-US', { 
  weekday: 'long', 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric' 
});
$('#date-placeholder').text(dateString);

// Update generation timestamp
const timestamp = today.toLocaleString('en-US');
$('footer p').last().html(`© 2024 Kuku Sudoku. All rights reserved. | Generated: ${timestamp}`);

// Save the new, populated HTML file
fs.writeFileSync('temp-printable.html', $.html());
console.log('Successfully created temp-printable.html with populated puzzles');