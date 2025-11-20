import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", scrollTop: true },
    { name: "About", path: "/about", scrollTop: true },
    { name: "Services", path: "/services", scrollTop: true },
    { name: "Pricing", path: "/pricing", scrollTop: true },
    { name: "Testimonials", path: "/testimonials", scrollTop: true },
    { name: "Contact", path: "/contact", scrollTop: true },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/assets/images/naiyo24_logo.jpeg"
              alt="Naiyo24 Logo"
              className="w-8 h-8 rounded-xl object-cover shadow-lg border border-gray-200"
              style={{ boxShadow: "0 2px 12px 0 rgba(136, 136, 136, 0.08)" }}
            />
            <span className="text-xl font-bold text-black">Naiyo24</span>
          </Link>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative px-2 py-1 font-medium text-gray-700 hover:text-black transition-all duration-200"
                onClick={
                  item.scrollTop
                    ? () => window.scrollTo({ top: 0, behavior: "smooth" })
                    : undefined
                }
              >
                <span>{item.name}</span>
                {isActive(item.path) && (
                  <span className="block w-full h-0.5 mt-1 bg-black rounded-full" />
                )}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl bg-gray-100 border border-gray-300 transition-all duration-200 hover:bg-gray-200"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-xl">
          <div className="px-4 py-3 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 font-medium text-gray-700 hover:text-black transition-all duration-200"
              >
                <span>{item.name}</span>
                {isActive(item.path) && (
                  <span className="block w-full h-0.5 mt-1 bg-black rounded-full" />
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
