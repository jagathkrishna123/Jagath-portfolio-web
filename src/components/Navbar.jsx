import React, { useState, useEffect } from 'react';
import { IconMenu, IconClose, IconDownload } from './Icons';
import resumePdf from '../assets/Jagath_Krishna-Resume-r.pdf';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['about', 'skills', 'experience', 'projects', 'education', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#191B1A]/95 backdrop-blur-md border-b border-[#444640] py-3.5 shadow-xl text-[#EEECE5]'
          : 'bg-[#EEECE5] border-b border-[#B9B6AC]/50 py-4 text-[#191B1A]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Clean Logo Mark */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className={`w-9 h-9 flex items-center justify-center font-display font-bold text-lg rounded-sm transition-colors ${
              scrolled ? 'bg-[#EEECE5] text-[#191B1A]' : 'bg-[#191B1A] text-[#EEECE5]'
            }`}>
              <span>J</span>
              <span className="text-[#A65B3D]">.</span>
            </div>
            
            <div className="flex flex-col">
              <span className={`font-display font-bold text-lg tracking-tight ${
                scrolled ? 'text-[#EEECE5]' : 'text-[#191B1A]'
              }`}>
                Jagath Krishna<span className="text-[#A65B3D]">.</span>
              </span>
              <span className={`text-xs font-mono-code font-medium ${
                scrolled ? 'text-[#B9B6AC]' : 'text-[#444640]'
              }`}>
                React.js Developer
              </span>
            </div>
          </a>

          {/* Clean Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium tracking-wide transition-colors ${
                    isActive
                      ? 'text-[#A65B3D] font-bold'
                      : scrolled
                        ? 'text-[#B9B6AC] hover:text-[#EEECE5]'
                        : 'text-[#444640] hover:text-[#191B1A]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Action Button: Direct PDF Download & Status */}
          <div className="hidden sm:flex items-center gap-4">
            <span className={`text-xs font-mono-code px-3 py-1 rounded-sm border flex items-center gap-2 ${
              scrolled
                ? 'border-[#444640] text-[#B9B6AC] bg-[#191B1A]'
                : 'border-[#B9B6AC] text-[#444640] bg-[#EEECE5]'
            }`}>
              <span className="w-2 h-2 rounded-full bg-[#A65B3D]"></span>
              Immediate Joining
            </span>

            {/* Direct PDF Download Anchor */}
            <a
              href={resumePdf}
              download="Jagath_Krishna_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className={`text-xs font-semibold px-4 py-2 rounded-sm transition-all flex items-center gap-1.5 cursor-pointer shadow-sm ${
                scrolled
                  ? 'bg-[#A65B3D] text-[#EEECE5] hover:bg-[#A65B3D]/90'
                  : 'bg-[#191B1A] text-[#EEECE5] hover:bg-[#A65B3D]'
              }`}
            >
              <IconDownload className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={resumePdf}
              download="Jagath_Krishna_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-bold px-3 py-1.5 bg-[#A65B3D] text-[#EEECE5] rounded-sm flex items-center gap-1"
            >
              <IconDownload className="w-3.5 h-3.5" />
              <span>CV</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className={`p-1.5 border rounded-sm ${
                scrolled ? 'border-[#444640] text-[#EEECE5]' : 'border-[#B9B6AC] text-[#191B1A]'
              }`}
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <IconClose className="w-5 h-5" /> : <IconMenu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-4 border-t border-[#444640] bg-[#191B1A] text-[#EEECE5] -mx-4 px-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm py-2 text-[#B9B6AC] hover:text-[#A65B3D] border-b border-[#444640]/40"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3">
              <a
                href={resumePdf}
                download="Jagath_Krishna_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 bg-[#A65B3D] text-[#EEECE5] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 rounded-sm"
              >
                <IconDownload className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>
        )}

      </div>
    </nav>
  );
}
