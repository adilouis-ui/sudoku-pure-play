import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-background border-b border-border px-6 py-4">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <Link to="/" className="text-2xl font-light text-foreground tracking-wide hover:opacity-80 transition-opacity">
          Sudoku
        </Link>
        <div className="flex items-center space-x-6">
          <Link to="/how-to-play" className="text-muted-foreground hover:text-foreground transition-colors">
            How to Play
          </Link>
          <Link to="/printable" className="text-muted-foreground hover:text-foreground transition-colors">
            Printable
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;