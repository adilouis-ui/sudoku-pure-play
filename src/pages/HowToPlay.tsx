import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HowToPlay = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background border-b border-border px-6 py-4">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <Link to="/" className="text-2xl font-light text-foreground tracking-wide hover:text-primary transition-colors">
            Sudoku
          </Link>
          <Link to="/">
            <Button variant="outline">Back to Game</Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h1 className="text-4xl font-light text-foreground mb-8 tracking-wide">
            How to Play Sudoku: A Beginner's Guide
          </h1>

          <section className="mb-8">
            <h2 className="text-2xl font-medium text-foreground mb-4">What is Sudoku?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Sudoku is a logic-based number puzzle that challenges your mind with simple rules but complex solutions. 
              The goal is to fill a 9×9 grid with numbers so that each column, each row, and each of the nine 3×3 boxes 
              contains all digits from 1 to 9.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-medium text-foreground mb-4">The Basic Rules</h2>
            <div className="space-y-4">
              <div className="bg-muted/30 p-6 rounded-lg border border-border">
                <h3 className="text-xl font-medium text-foreground mb-3">1. The 9×9 Grid</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every Sudoku puzzle consists of a large square divided into 81 smaller squares, 
                  arranged in a 9×9 grid. Some squares will already contain numbers (called "givens"), 
                  while others are empty and waiting for you to fill them.
                </p>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg border border-border">
                <h3 className="text-xl font-medium text-foreground mb-3">2. The 3×3 Boxes</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The 9×9 grid is further divided into nine 3×3 boxes (also called "regions" or "blocks"). 
                  Each box must contain all numbers from 1 to 9, just like the rows and columns.
                </p>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg border border-border">
                <h3 className="text-xl font-medium text-foreground mb-3">3. No Repetition</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The core rule: Each number from 1 to 9 must appear exactly once in each row, 
                  exactly once in each column, and exactly once in each 3×3 box. No repetition allowed!
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-medium text-foreground mb-4">How to Solve</h2>
            <div className="space-y-4">
              <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                <h3 className="text-xl font-medium text-foreground mb-3">Start with the Obvious</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Look for cells where only one number can fit. This happens when eight out of nine numbers 
                  are already present in the same row, column, or 3×3 box.
                </p>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                <h3 className="text-xl font-medium text-foreground mb-3">Use Process of Elimination</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  For each empty cell, mentally note which numbers are already used in its row, column, 
                  and 3×3 box. The remaining numbers are your possibilities for that cell.
                </p>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                <h3 className="text-xl font-medium text-foreground mb-3">Work Systematically</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Focus on one area at a time. Sometimes filling one number will create a chain reaction 
                  that reveals the solution for several other cells.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-medium text-foreground mb-4">Difficulty Levels</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                <h3 className="text-lg font-medium text-green-800 dark:text-green-300 mb-2">Rookie</h3>
                <p className="text-green-700 dark:text-green-400 text-sm">
                  Perfect for beginners. More given numbers make it easier to find the next move.
                </p>
              </div>
              <div className="bg-yellow-50 dark:bg-yellow-950/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
                <h3 className="text-lg font-medium text-yellow-800 dark:text-yellow-300 mb-2">Pro</h3>
                <p className="text-yellow-700 dark:text-yellow-400 text-sm">
                  A balanced challenge that requires logical thinking and patience.
                </p>
              </div>
              <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                <h3 className="text-lg font-medium text-red-800 dark:text-red-300 mb-2">Master</h3>
                <p className="text-red-700 dark:text-red-400 text-sm">
                  For experienced players. Fewer given numbers mean more complex logical deductions.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-muted/20 p-8 rounded-lg border border-border">
            <h2 className="text-2xl font-medium text-foreground mb-4">Ready to Play?</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Now that you understand the rules, it's time to put your knowledge to the test! 
              Remember, every Sudoku puzzle has exactly one solution, and you can find it using only logic—no guessing required.
            </p>
            <Link to="/">
              <Button size="lg" className="w-full sm:w-auto">
                Start Playing Sudoku
              </Button>
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
};

export default HowToPlay;