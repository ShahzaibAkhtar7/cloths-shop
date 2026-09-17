import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingBag, Heart, Search, Menu, X } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { navLinks } from "../data/products";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { count, setIsOpen } = useCart();
  const { items: wished } = useWishlist();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-stone-800 rounded-sm flex items-center justify-center">
                <span className="text-cream-50 font-display text-sm font-bold">V</span>
              </div>
              <span className="font-display text-2xl font-semibold tracking-tight text-stone-800">
                Vélos
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`font-body text-sm font-medium tracking-wide transition-colors relative group ${
                    location.pathname === link.href
                      ? "text-sand-600"
                      : "text-stone-600 hover:text-stone-900"
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-sand-400 transition-all duration-300 ${
                    location.pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
                </Link>
              ))}
            </div>

            {/* Icons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 text-stone-600 hover:text-stone-900 transition-colors"
              >
                <Search size={20} />
              </button>
              <Link
                to="/wishlist"
                className="p-2 text-stone-600 hover:text-stone-900 transition-colors relative"
              >
                <Heart size={20} />
                {wished.length > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-red-400 rounded-full text-white text-xs flex items-center justify-center font-medium">
                    {wished.length}
                  </span>
                )}
              </Link>
              <button
                onClick={() => setIsOpen(true)}
                className="p-2 text-stone-600 hover:text-stone-900 transition-colors relative"
              >
                <ShoppingBag size={20} />
                {count > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-sand-500 rounded-full text-white text-xs flex items-center justify-center font-medium">
                    {count}
                  </span>
                )}
              </button>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden p-2 text-stone-600 hover:text-stone-900 transition-colors"
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-white border-t border-stone-100`}>
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="font-body text-stone-700 hover:text-stone-900 font-medium py-1 border-b border-stone-100 last:border-0"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Search Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm flex items-start justify-center pt-24 px-4">
          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl p-6 animate-fade-up">
            <div className="flex items-center gap-4 border-b border-stone-200 pb-4">
              <Search size={20} className="text-stone-400" />
              <input
                autoFocus
                type="text"
                placeholder="Search for dresses, shirts, accessories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 text-stone-800 text-lg outline-none font-body placeholder:text-stone-400"
              />
              <button onClick={() => setSearchOpen(false)}>
                <X size={20} className="text-stone-400 hover:text-stone-700" />
              </button>
            </div>
            <p className="text-stone-400 text-sm mt-4 font-body">
              Try searching "dress", "shirt", or "accessories"
            </p>
          </div>
        </div>
      )}
    </>
  );
}
