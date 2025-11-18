import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-2xl bg-gradient-to-r from-white/60 via-gray-100/40 to-white/60 border-b border-white/30 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/assets/images/naiyo24_logo.jpeg"
              alt="Naiyo24 Logo"
              className="w-8 h-8 rounded-xl object-cover shadow-lg border border-white/40"
              style={{ boxShadow: "0 2px 12px 0 rgba(136, 136, 136, 0.08)" }}
            />
            <span className="text-xl font-bold bg-gradient-to-r from-black via-gray-700 to-black bg-clip-text text-transparent">
              Naiyo24
            </span>
          </Link>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-2 py-1 rounded-xl transition-all duration-300 font-medium ${
                  isActive(item.path)
                    ? "text-black bg-white/40 shadow border-b-2 border-gray-400"
                    : "text-gray-700 hover:text-gray-900 hover:bg-white/30 hover:shadow-lg"
                }`}
                style={{
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                }}
              >
                <span className="transition-all duration-300">{item.name}</span>
                {isActive(item.path) && (
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-gray-400 to-gray-300 rounded-full animate-pulse" />
                )}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl bg-white/30 backdrop-blur-lg shadow-lg border border-white/20 transition-all duration-300 hover:bg-white/50"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gradient-to-br from-white/80 via-gray-100/60 to-white/80 border-t border-white/30 shadow-xl backdrop-blur-2xl">
          <div className="px-4 py-3 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-xl font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? "text-black bg-white/40 shadow border-b-2 border-gray-400"
                    : "text-gray-700 hover:text-gray-900 hover:bg-white/30 hover:shadow-lg"
                }`}
                style={{
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                }}
              >
                <span className="transition-all duration-300">{item.name}</span>
                {isActive(item.path) && (
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-gray-400 to-gray-300 rounded-full animate-pulse" />
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
