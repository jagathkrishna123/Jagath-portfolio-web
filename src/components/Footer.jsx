import React from 'react';
import { portfolioData } from '../data/portfolioData';
import resumePdf from '../assets/Jagath_Krishna-Resume-r.pdf';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#191B1A] text-[#EEECE5] border-t border-[#444640]">
      {/* Clean single Oxide accent hairline */}
      <div className="h-1 bg-[#A65B3D]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#444640]">

          {/* Brand */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-sm bg-[#EEECE5] text-[#191B1A] flex items-center justify-center font-display font-bold text-lg">
                <span>J</span>
                <span className="text-[#A65B3D]">.</span>
              </div>
              <span className="font-display font-bold text-xl uppercase tracking-tight text-[#EEECE5]">
                {personal.name}<span className="text-[#A65B3D]">.</span>
              </span>
            </div>

            <p className="font-sans text-sm text-[#B9B6AC] max-w-md leading-relaxed">
              React.js Developer focused on high-performance component engineering, clean state architectures, and full-stack MERN integrations.
            </p>

            <div className="text-xs font-mono-code text-[#A65B3D] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#A65B3D]"></span>
              <span>Available for Immediate Joining</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-2 font-sans text-xs">
            <span className="text-[#EEECE5] font-bold uppercase tracking-wider block mb-3">
              Navigation
            </span>
            <ul className="space-y-2 text-[#B9B6AC]">
              <li><a href="#about" className="hover:text-[#EEECE5] transition-colors">About Me</a></li>
              <li><a href="#skills" className="hover:text-[#EEECE5] transition-colors">Skills & Tech Stack</a></li>
              <li><a href="#experience" className="hover:text-[#EEECE5] transition-colors">Work Experience</a></li>
              <li><a href="#projects" className="hover:text-[#EEECE5] transition-colors">Selected Projects</a></li>
              <li><a href="#education" className="hover:text-[#EEECE5] transition-colors">Education</a></li>
              <li>
                <a
                  href={resumePdf}
                  download="Jagath_Krishna_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#A65B3D] transition-colors font-semibold"
                >
                  Download Resume (PDF)
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-3 space-y-2 font-sans text-xs">
            <span className="text-[#EEECE5] font-bold uppercase tracking-wider block mb-3">
              Direct Contact
            </span>
            <ul className="space-y-2 text-[#B9B6AC]">
              <li>
                <a href={personal.github} target="_blank" rel="noreferrer" className="hover:text-[#EEECE5] transition-colors">
                  GitHub // jagathkrishna123
                </a>
              </li>
              <li>
                <a href={personal.linkedin} target="_blank" rel="noreferrer" className="hover:text-[#EEECE5] transition-colors">
                  LinkedIn // Profile
                </a>
              </li>
              <li>
                <a href={`mailto:${personal.email}`} className="hover:text-[#EEECE5] transition-colors">
                  {personal.email}
                </a>
              </li>
              <li>
                <a href={`tel:${personal.phone}`} className="hover:text-[#EEECE5] transition-colors">
                  {personal.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#B9B6AC]">
          <div>
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">

            <span>•</span>
            <button
              onClick={scrollToTop}
              className="text-[#A65B3D] font-bold hover:underline cursor-pointer"
            >
              Back to top ↑
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
