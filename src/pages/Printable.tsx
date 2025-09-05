const Printable = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Printable Sudoku Puzzles</h1>
      <p className="mb-6">Enjoy Kuku Sudoku offline! Download our daily, printer-friendly PDF with puzzles for every skill level.</p>
      <a href="/daily-sudoku.pdf" download className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
        Download Today's Puzzles (PDF)
      </a>
    </div>
  );
};

export default Printable;