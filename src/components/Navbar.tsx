import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav className="bg-background border-b border-border px-6 py-4 relative">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <Link to="/" className="text-2xl font-light text-foreground tracking-wide hover:opacity-80 transition-opacity">
            Sudoku
          </Link>
          
          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/how-to-play" className="text-muted-foreground hover:text-foreground transition-colors">
              How to Play
            </Link>
            <Link to="/printable" className="text-muted-foreground hover:text-foreground transition-colors">
              Printable
            </Link>
          </div>

          {/* Hamburger Button - Visible only on mobile */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-foreground hover:text-muted-foreground transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <div className={`md:hidden fixed inset-x-0 top-[73px] z-50 bg-background border-b border-border transform transition-transform duration-300 ease-in-out ${
        isMenuOpen ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="px-6 py-4 space-y-4">
          <Link 
            to="/how-to-play" 
            className="block text-muted-foreground hover:text-foreground transition-colors py-2"
            onClick={toggleMenu}
          >
            How to Play
          </Link>
          <Link 
            to="/printable" 
            className="block text-muted-foreground hover:text-foreground transition-colors py-2"
            onClick={toggleMenu}
          >
            Printable
          </Link>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/20 z-40 top-[73px]"
          onClick={toggleMenu}
        />
      )}
    </>
  );
};

export default Navbar;