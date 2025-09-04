import { Link } from "react-router-dom";

const Printable = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-background border-b border-border px-6 py-4">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <Link to="/" className="text-2xl font-light text-foreground tracking-wide hover:opacity-80 transition-opacity">
            Sudoku
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl sm:text-5xl font-light text-foreground mb-8 tracking-wide">
          Printable Sudoku Puzzles - A New Challenge Daily
        </h1>

        <div className="mb-12">
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Enjoy Kuku Sudoku offline! Every day we provide a fresh, printer-friendly PDF with puzzles 
            for every skill level. Perfect for a break from the screen. Download today's puzzles below.
          </p>

          {/* Preview Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img 
                src="/printable-preview.png" 
                alt="Preview of printable Sudoku puzzles showing easy, medium, and hard difficulty levels"
                className="rounded-lg shadow-lg border border-border max-w-full h-auto"
                style={{ 
                  boxShadow: '0 10px 30px -10px hsl(var(--shadow-medium) / 0.3)',
                  borderRadius: 'var(--radius)'
                }}
              />
              <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                New Daily
              </div>
            </div>
          </div>

          {/* Download Button */}
          <div className="text-center mb-12">
            <a 
              href="/daily-sudoku.pdf"
              download
              className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <svg 
                className="w-6 h-6 mr-3" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                />
              </svg>
              Download & Print Today's Puzzles (PDF)
            </a>
          </div>

          {/* Features Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
            <div className="p-6 rounded-lg border border-border bg-card">
              <h3 className="font-semibold text-foreground mb-3 flex items-center">
                <span className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center mr-3 text-sm font-bold">3</span>
                Difficulty Levels
              </h3>
              <p className="text-muted-foreground text-sm">Easy, Medium, and Hard puzzles in every PDF to match your skill level.</p>
            </div>
            
            <div className="p-6 rounded-lg border border-border bg-card">
              <h3 className="font-semibold text-foreground mb-3 flex items-center">
                <span className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center mr-3 text-sm font-bold">✓</span>
                Solutions Included
              </h3>
              <p className="text-muted-foreground text-sm">Complete solutions provided on a separate page for easy checking.</p>
            </div>
            
            <div className="p-6 rounded-lg border border-border bg-card">
              <h3 className="font-semibold text-foreground mb-3 flex items-center">
                <span className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center mr-3 text-sm font-bold">📅</span>
                Daily Updates
              </h3>
              <p className="text-muted-foreground text-sm">Fresh puzzles generated daily for endless offline entertainment.</p>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-muted/30 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">Why Print Your Puzzles?</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-start">
                <span className="text-primary mr-3 font-bold">•</span>
                <span className="text-muted-foreground">Take a break from screen time while keeping your mind active</span>
              </div>
              <div className="flex items-start">
                <span className="text-primary mr-3 font-bold">•</span>
                <span className="text-muted-foreground">Perfect for travel, commuting, or relaxing anywhere</span>
              </div>
              <div className="flex items-start">
                <span className="text-primary mr-3 font-bold">•</span>
                <span className="text-muted-foreground">Share with family and friends for group solving sessions</span>
              </div>
              <div className="flex items-start">
                <span className="text-primary mr-3 font-bold">•</span>
                <span className="text-muted-foreground">Use your favorite pen or pencil for a tactile experience</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link 
              to="/" 
              className="inline-flex items-center px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors font-medium"
            >
              Play Online Instead
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-background border-t border-border mt-16">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left text-muted-foreground">
              <p>&copy; 2024 Kuku Sudoku. Challenge your mind daily.</p>
            </div>
            <div className="flex gap-6">
              <Link 
                to="/how-to-play" 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                How to Play
              </Link>
              <Link 
                to="/printable" 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Printable Puzzles
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Printable;