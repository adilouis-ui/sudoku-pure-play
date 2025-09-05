import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background border-b border-border">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo / Site Title */}
        <Link to="/" className="text-2xl font-bold text-foreground">
          Sudoku
        </Link>

        {/* Desktop Navigation Links (Visible only on medium screens and up) */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/how-to-play" className="text-muted-foreground hover:text-foreground transition-colors">
            How to Play
          </Link>
          <Link to="/printable" className="text-muted-foreground hover:text-foreground transition-colors">
            Printable
          </Link>
        </nav>

        {/* Mobile Hamburger Button (Visible only on mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="text-foreground focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel (Overlay) */}
      <div
        className={`
          md:hidden fixed top-0 left-0 w-full h-full bg-black/50 z-40
          transition-opacity duration-300
          ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          className={`
            fixed top-0 right-0 w-64 h-full bg-background z-50 p-6 border-l border-border
            transform transition-transform duration-300 ease-in-out
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          `}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          
          {/* Menu Links */}
          <nav className="mt-12 flex flex-col space-y-4">
            <Link
              to="/how-to-play"
              className="text-lg text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              How to Play
            </Link>
            <Link
              to="/printable"
              className="text-lg text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Printable
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;