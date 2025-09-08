const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({ 
    args: ['--no-sandbox', '--disable-setuid-sandbox'] 
  });
  
  const page = await browser.newPage();
  
  // Load the temporary HTML file
  const htmlPath = path.resolve(__dirname, '../temp-printable.html');
  
  if (!fs.existsSync(htmlPath)) {
    console.error('temp-printable.html not found. Run inject-puzzles.js first.');
    process.exit(1);
  }
  
  await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });
  
  // Create the PDF with print-optimized settings
  await page.pdf({
    path: 'public/daily-sudoku.pdf',
    format: 'A4',
    printBackground: true,
    margin: {
      top: '20px',
      right: '20px',
      bottom: '20px',
      left: '20px'
    }
  });

  await browser.close();
  
  // Clean up temporary file
  fs.unlinkSync(htmlPath);
  fs.unlinkSync('puzzles.json');
  
  console.log('Successfully created daily-sudoku.pdf from HTML template');
})();