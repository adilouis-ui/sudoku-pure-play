import { readFileSync, writeFileSync } from 'fs';
import { load } from 'cheerio';
import sudoku from 'sudoku';
import puppeteer from 'puppeteer';
import qrcode from 'qrcode';
import path from 'path';
import { fileURLToPath } from 'url';

// --- Main async function to run everything ---
async function generatePdf() {
  console.log('--- Starting Daily PDF Generation ---');

  // 1. GENERATE QR CODE (in memory)
  const qrCodeDataUri = await qrcode.toDataURL('https://kukusudoku.com/');
  console.log('Step 1: QR Code generated as Data URI.');

  // 2. GENERATE PUZZLES (in memory)
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
  
  console.log('Step 2: Puzzles generated in memory.');

  // 3. POPULATE HTML TEMPLATE (in memory)
  const templatePath = 'public/printable-template.html';
  const htmlTemplate = readFileSync(templatePath, 'utf-8');
  const $ = load(htmlTemplate);

  // Inject the QR Code Data URI into the image tag
  $('#qr-code-img').attr('src', qrCodeDataUri);

  function populateGrid(selector, gridData) {
    const grid = $(selector);
    if (grid.length === 0) throw new Error(`FATAL: Could not find grid: ${selector}`);
    const cells = grid.find('td');
    if (cells.length !== 81) throw new Error(`FATAL: Grid ${selector} needs 81 cells, found ${cells.length}.`);
    gridData.forEach((value, i) => {
      $(cells[i]).text(value || '');
    });
  }
  
  $('#date-placeholder').text(new Date().toLocaleDateString('en-US', { timeZone: 'UTC' }));
  populateGrid('#easy-puzzle-grid', puzzles.easy.puzzle);
  populateGrid('#medium-puzzle-grid', puzzles.medium.puzzle);
  populateGrid('#hard-puzzle-grid', puzzles.hard.puzzle);
  populateGrid('#easy-solution-grid', puzzles.easy.solution);
  populateGrid('#medium-solution-grid', puzzles.medium.solution);
  populateGrid('#hard-solution-grid', puzzles.hard.solution);
  
  const finalHtml = $.html();
  console.log('Step 3: HTML template populated in memory.');

  // 4. CREATE PDF FROM HTML STRING (in memory)
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setContent(finalHtml, { waitUntil: 'networkidle0' });
  
  await page.pdf({
    path: 'public/daily-sudoku.pdf',
    format: 'A4',
    printBackground: true,
  });

  await browser.close();
  console.log('Step 4: PDF successfully created from HTML string.');
  console.log('--- Daily PDF Generation Finished ---');
}

// --- Run the main function ---
generatePdf().catch(err => {
  console.error(err);
  process.exit(1);
});