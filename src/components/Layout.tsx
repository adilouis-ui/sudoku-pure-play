import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { Footer } from './Footer';

const Layout = () => {
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