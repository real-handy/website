import LogoType from './LogoType';
import { Link } from 'react-router';

import { Button } from '@/components/ui/button';


export function Navbar() {
  return (
    <header className="bg-background py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <LogoType size="md" variant="light" />
          </a>
        </div>
        
        <nav>
          <ul className="flex space-x-6">
            <Link to="/services" className="text-foreground hover:text-accent transition-colors">Services</Link>
            <Link to="/about" className="text-foreground hover:text-accent transition-colors">About</Link>
            <Link to="/conversations" className="text-foreground hover:text-accent transition-colors">Insights</Link>
          </ul>
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="text-foreground hover:text-accent transition-colors">
            <Link to="/contact">Contact</Link>
          </Button>
          <Link to="/login" className="text-foreground hover:text-accent transition-colors">Login</Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
