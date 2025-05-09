import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, ExternalLink } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about-us' },
  { name: 'Services', path: '/services' },
  { name: 'Solutions', path: '/solutions' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact Us', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('/');

  useEffect(() => {
    setActiveLink(window.location.pathname);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-secondary/20 backdrop-blur-lg shadow-md' : 'bg-transparent'
      }`}
      role="navigation"
    >
      <div className="max-w-screen-xl mx-auto px-4 md:px-6">
        <div className="flex items-center  justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="/"
            className={`flex items-center   w-48 p-4 h-14  transition-all duration-200 ${
              scrolled ? 'rounded-xl bg-gray-300  w-48 p-4 h-14' : 'bg-transparent'
            } outline-none relative`}
          >
            <img
              src="/src/assets/Zeus Corp.svg"
              alt="Zeus Corporation"
              className="h-8 md:h-10  text-gray-500 w-auto scale-125"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className={`
                  px-3 py-2 text-xs tracking-wider uppercase font-mono
                  transition-colors duration-200 relative group
                  ${
                    activeLink === link.path
                      ? 'text-white'
                      : 'text-gray-500 hover:text-white'
                  }
                `}
              >
                <span className="relative z-10">{link.name}</span>
                {activeLink === link.path && (
                  <div className="absolute bottom-0 left-0 w-full h-px bg-blue-500"></div>
                )}
                <div className="absolute bottom-0 left-0 w-0 h-px bg-blue-500 group-hover:w-full transition-all duration-300"></div>
              </a>
            ))}
            <a
              href="/contact"
              className="ml-6 px-4 py-1 border border-blue-500 text-xs font-mono tracking-wider uppercase text-blue-500 hover:bg-blue-500 hover:text-black transition-colors duration-300"
            >
              <span className="flex items-center">
                Contact <ChevronRight size={14} className="ml-1" />
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div
        className={`
          md:hidden fixed inset-0 bg-black/95 backdrop-blur-lg z-40 pt-16
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex flex-col p-6 space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className={`
                font-mono text-sm tracking-wider uppercase py-2
                border-b border-gray-800 flex items-center justify-between
                ${activeLink === link.path ? 'text-blue-500' : 'text-gray-400'}
              `}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
              <ChevronRight
                size={16}
                className={
                  activeLink === link.path ? 'text-blue-500' : 'text-gray-600'
                }
              />
            </a>
          ))}

          <div className="pt-6">
            <a
              href="/contact"
              className="flex items-center justify-center w-full px-4 py-3 border border-blue-500 text-xs font-mono tracking-wider uppercase text-blue-500 hover:bg-blue-500 hover:text-black transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              <span className="flex items-center">
                Start a project <ExternalLink size={14} className="ml-2" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
