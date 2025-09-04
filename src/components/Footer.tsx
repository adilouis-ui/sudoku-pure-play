import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border mt-auto">
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
  );
};