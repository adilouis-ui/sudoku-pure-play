import { Link } from "react-router-dom";

const HowToPlay = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl sm:text-5xl font-light text-foreground mb-8 tracking-wide">
          How to Play Sudoku: A Beginner's Guide
        </h1>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">The Basics</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Sudoku is a logic-based number puzzle that consists of a 9×9 grid divided into nine 3×3 boxes. 
              The goal is simple: fill every row, column, and 3×3 box with the digits 1 through 9, 
              with each digit appearing exactly once in each row, column, and box.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">The Rules</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="font-semibold text-primary mr-2">1.</span>
                Each row must contain all digits from 1 to 9, with no repetition
              </li>
              <li className="flex items-start">
                <span className="font-semibold text-primary mr-2">2.</span>
                Each column must contain all digits from 1 to 9, with no repetition
              </li>
              <li className="flex items-start">
                <span className="font-semibold text-primary mr-2">3.</span>
                Each 3×3 box must contain all digits from 1 to 9, with no repetition
              </li>
              <li className="flex items-start">
                <span className="font-semibold text-primary mr-2">4.</span>
                Pre-filled numbers (given numbers) cannot be changed
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Getting Started</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">Start with the easiest cells:</strong> Look for rows, columns, 
                or 3×3 boxes that already have many numbers filled in. The more numbers present, 
                the fewer options you have for the remaining empty cells.
              </p>
              <p>
                <strong className="text-foreground">Use the process of elimination:</strong> For each empty cell, 
                determine which numbers are already present in its row, column, and 3×3 box. 
                The missing numbers are your possible candidates.
              </p>
              <p>
                <strong className="text-foreground">Look for naked singles:</strong> If a cell can only contain 
                one possible number based on the constraints, fill it in immediately.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Difficulty Levels</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="p-4 rounded-lg border border-border">
                <h3 className="font-semibold text-warm-up mb-2">Warm-up</h3>
                <p className="text-sm text-muted-foreground">Perfect for beginners. Many numbers are pre-filled, making it easier to spot patterns.</p>
              </div>
              <div className="p-4 rounded-lg border border-border">
                <h3 className="font-semibold text-challenge mb-2">Challenge</h3>
                <p className="text-sm text-muted-foreground">Moderate difficulty requiring basic solving techniques and logical reasoning.</p>
              </div>
              <div className="p-4 rounded-lg border border-border">
                <h3 className="font-semibold text-brain-fire mb-2">Brain Fire</h3>
                <p className="text-sm text-muted-foreground">Advanced puzzles that require multiple solving strategies and careful analysis.</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Tips for Success</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>• <strong className="text-foreground">Take your time:</strong> Sudoku is about logic, not speed</p>
              <p>• <strong className="text-foreground">Use pencil marks:</strong> Keep track of possible numbers in each cell</p>
              <p>• <strong className="text-foreground">Stay organized:</strong> Work systematically through the grid</p>
              <p>• <strong className="text-foreground">Practice regularly:</strong> Your pattern recognition will improve over time</p>
            </div>
          </section>

          <div className="text-center">
            <Link 
              to="/" 
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Start Playing Now
            </Link>
          </div>
        </div>
    </div>
  );
};

export default HowToPlay;