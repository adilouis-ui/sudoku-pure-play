import { useEffect } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { Footer } from './Footer';

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    // Create a simple, CSS-friendly class name from the URL pathname
    const pageClass = location.pathname === '/' ? 'page-home' : `page-${location.pathname.substring(1).replace('/', '-')}`;
    
    // Add the new class and remove old ones
    document.body.className = ''; // Clear previous classes
    document.body.classList.add(pageClass);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex flex-col">
        <Outlet /> {/* This will render the specific page's content */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;