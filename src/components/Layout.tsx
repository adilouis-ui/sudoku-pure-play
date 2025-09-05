import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Footer } from './Footer';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Navigation */}
      <nav className="bg-background border-b border-border px-6 py-4">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <Link to="/" className="text-2xl font-light text-foreground tracking-wide hover:opacity-80 transition-opacity">
            Sudoku
          </Link>
        </div>
      </nav>
      
      {/* Main content area with flex-grow to push footer down */}
      <main className="flex-grow">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;