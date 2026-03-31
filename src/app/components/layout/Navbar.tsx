import { Link, useNavigate } from 'react-router';
import { Search, ShoppingBag, Heart, User, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const { cartCount, isAuthenticated, setSearchQuery } = useApp();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      setSearchQuery(searchInput);
      navigate('/search');
      setIsSearchOpen(false);
      setSearchInput('');
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        isScrolled ? 'shadow-sm' : ''
      }`}
    >
      <div className="border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 hover:bg-secondary transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo */}
            <Link to="/" className="font-medium tracking-wider text-xl md:text-2xl">
              MINIMALIST
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link to="/category/nu" className="hover:text-muted-foreground transition-colors">
                Nữ
              </Link>
              <Link to="/category/nam" className="hover:text-muted-foreground transition-colors">
                Nam
              </Link>
              <Link
                to="/category/unisex"
                className="hover:text-muted-foreground transition-colors"
              >
                Unisex
              </Link>
              <Link to="/blog" className="hover:text-muted-foreground transition-colors">
                Blog
              </Link>
              <Link to="/about" className="hover:text-muted-foreground transition-colors">
                Về Chúng Tôi
              </Link>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3 md:gap-4">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 hover:bg-secondary transition-colors"
              >
                <Search size={20} />
              </button>

              <Link to="/wishlist" className="p-2 hover:bg-secondary transition-colors">
                <Heart size={20} />
              </Link>

              <Link to="/cart" className="relative p-2 hover:bg-secondary transition-colors">
                <ShoppingBag size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>

              <Link
                to={isAuthenticated ? '/profile' : '/login'}
                className="p-2 hover:bg-secondary transition-colors"
              >
                <User size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      {isSearchOpen && (
        <div className="border-b border-border bg-white">
          <div className="container mx-auto px-4 py-4">
            <form onSubmit={handleSearch} className="flex gap-2">
              <Input
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="flex-1"
                autoFocus
              />
              <Button type="submit">Tìm kiếm</Button>
            </form>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-border bg-white">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link
              to="/category/nu"
              className="hover:text-muted-foreground transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Nữ
            </Link>
            <Link
              to="/category/nam"
              className="hover:text-muted-foreground transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Nam
            </Link>
            <Link
              to="/category/unisex"
              className="hover:text-muted-foreground transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Unisex
            </Link>
            <Link
              to="/blog"
              className="hover:text-muted-foreground transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/about"
              className="hover:text-muted-foreground transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Về Chúng Tôi
            </Link>
            <Link
              to="/contact"
              className="hover:text-muted-foreground transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Liên Hệ
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
