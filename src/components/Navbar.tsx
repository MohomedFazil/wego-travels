import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  // Check if we are on a page that requires a transparent header initially (Home, Detail, Services, About, Experiences)
  const isHeroPage = location.pathname === '/' ||
    location.pathname.includes('/destination/') ||
    location.pathname === '/destinations' ||
    location.pathname === '/services' ||
    location.pathname === '/about' ||
    location.pathname === '/experiences' ||
    location.pathname === '/blogs' ||
    location.pathname === '/contact';


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navBackground = isHeroPage && !isScrolled ? 'bg-transparent' : 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100/50';

  const textColor = (isHeroPage && !isScrolled) ? 'text-white' : 'text-[#0167B2]';
  const activeColor = 'text-[#F48A34]';

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Services', path: '/services' },
    { name: 'Experiences', path: '/experiences' },
    { name: 'Blogs', path: '/blogs' }
  ];

  const isContactActive = location.pathname === '/contact';

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBackground}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <img
                src="/logo/76293549293501.png"
                alt="Wego Travels Logo"
                className="h-10 md:h-14 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
              <span className={`text-2xl font-bold tracking-tighter ${textColor}`}>
                Wego<span className="text-orange-500">Travels</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center justify-center flex-1 absolute left-1/2 transform -translate-x-1/2">
              <div className="flex space-x-8">
                {navLinks.map(link => {
                  const isActive = link.path === '/'
                    ? location.pathname === '/'
                    : location.pathname.startsWith(link.path);
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      className={`${isActive ? activeColor : textColor} hover:text-[#F48A34] transition-colors font-bold text-xs uppercase tracking-widest relative group`}
                    >
                      {link.name}
                      {/* Underline indicator for active desktop links */}
                      {isActive && (
                        <motion.div
                          layoutId="navUnderline"
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#F48A34]"
                        />
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Contact Us Button - Desktop */}
            <div className="hidden lg:flex items-center">
              <Link to="/contact">
                <button className={`${isContactActive ? 'bg-[#0167B2] ring-4 ring-[#0167B2]/20' : 'bg-orange-500 hover:bg-orange-600'} text-white px-6 py-2.5 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center gap-2`}>
                  Contact Us
                  {isContactActive && <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />}
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`${textColor} focus:outline-none`}>
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <motion.div
        initial={false}
        animate={isMobileMenuOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, pointerEvents: 'auto' },
          closed: { opacity: 0, pointerEvents: 'none' }
        }}
        className="fixed inset-0 bg-black/50 lg:hidden z-[55]"
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Nav Drawer */}
      <motion.div
        initial={false}
        animate={isMobileMenuOpen ? "open" : "closed"}
        variants={{
          open: { x: 0 },
          closed: { x: '100%' }
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed right-0 top-0 h-full w-[280px] bg-white shadow-2xl z-[60] lg:hidden flex flex-col"
      >
        <div className="p-6 flex justify-end">
          <button onClick={() => setIsMobileMenuOpen(false)} className="text-[#0167B2] focus:outline-none">
            <X size={28} />
          </button>
        </div>

        <div className="flex-1 px-6 space-y-2 overflow-y-auto">
          {navLinks.map(link => {
            const isActive = link.path === '/'
              ? location.pathname === '/'
              : location.pathname.startsWith(link.path);
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-4 font-bold uppercase tracking-widest text-sm border-b border-gray-50 ${isActive ? 'text-[#F48A34]' : 'text-[#0167B2]'}`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block py-4 font-bold uppercase tracking-widest text-sm border-b border-gray-50 ${isContactActive ? 'text-[#F48A34]' : 'text-[#0167B2]'}`}
          >
            Contact Us
          </Link>
        </div>
      </motion.div>
    </>
  );
}