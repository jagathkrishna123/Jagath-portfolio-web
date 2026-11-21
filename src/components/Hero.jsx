import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  IconGitHub,
  IconLinkedIn,
  IconMail,
  IconPhone,
  IconArrowRight,
  IconDownload,
} from './Icons';
import image1 from '../assets/jagathimage1.png';
import image2 from '../assets/jagathimage2.png';
import resumePdf from '../assets/Jagath_Krishna-Resume-r.pdf';

export default function Hero({ onCopyToast }) {
  const [selectedPhoto, setSelectedPhoto] = useState(2);
  const { personal } = portfolioData;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    onCopyToast && onCopyToast('Email copied to clipboard!');
  };

  return (
    <section id="hero" className="relative pt-28 pb-20 bg-[#EEECE5] text-[#191B1A] border-b border-[#B9B6AC]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#191B1A] text-[#EEECE5] text-xs font-mono-code mb-8">
          <span className="w-2 h-2 rounded-full bg-[#A65B3D] animate-pulse"></span>
          <span>Available for Immediate Joining</span>
          <span className="text-[#444640]">|</span>
          <span className="text-[#B9B6AC]">React Developer</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-3">
              <span className="text-sm font-mono-code font-bold uppercase tracking-wider text-[#A65B3D]">
                Frontend & Full-Stack Engineering
              </span>
              <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.05] uppercase text-[#191B1A]">
                Jagath Krishna<span className="text-[#A65B3D]">.</span>
              </h1>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#444640]">
                React.js Developer & MERN Specialist
              </h2>
            </div>

            <p className="font-sans text-base sm:text-lg text-[#191B1A] leading-relaxed max-w-2xl">
              Currently engineering robust UI components and dynamic web applications at{' '}
              <strong className="text-[#191B1A] font-bold">Scanntek Solutions</strong>. Experienced in building responsive, scalable frontends using{' '}
              <strong className="text-[#191B1A]">React.js</strong>,{' '}
              <strong className="text-[#191B1A]">Tailwind CSS</strong>, and modern JavaScript, backed by full-stack MERN expertise.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="font-sans text-sm font-bold px-6 py-3.5 bg-[#191B1A] text-[#EEECE5] hover:bg-[#A65B3D] transition-colors rounded-sm flex items-center gap-2 shadow-sm"
              >
                <span>View Projects</span>
                <IconArrowRight className="w-4 h-4" />
              </a>

              {/* Direct PDF Download Anchor */}
              <a
                href={resumePdf}
                download="Jagath_Krishna_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="font-sans text-sm font-bold px-6 py-3.5 border-2 border-[#191B1A] text-[#191B1A] hover:bg-[#191B1A] hover:text-[#EEECE5] transition-colors rounded-sm flex items-center gap-2 cursor-pointer"
              >
                <IconDownload className="w-4 h-4 text-[#A65B3D]" />
                <span>Download Resume</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="font-sans text-sm font-medium px-4 py-3.5 border border-[#B9B6AC] text-[#444640] hover:border-[#191B1A] hover:text-[#191B1A] transition-colors rounded-sm flex items-center gap-2"
                title="Click to copy email"
              >
                <IconMail className="w-4 h-4 text-[#A65B3D]" />
                <span className="hidden sm:inline text-xs font-mono-code">{personal.email}</span>
                <span className="sm:hidden text-xs">Copy Email</span>
              </button>
            </div>

            {/* Quick Metrics */}
            <div className="pt-4 border-t border-[#B9B6AC]/60 grid grid-cols-2 sm:grid-cols-3 gap-4 font-sans text-xs">
              <div>
                <span className="block text-[#444640] font-mono-code uppercase text-[11px]">Current Role</span>
                <span className="font-bold text-[#191B1A]">React Dev @ Scanntek</span>
              </div>
              <div>
                <span className="block text-[#444640] font-mono-code uppercase text-[11px]">Education</span>
                <span className="font-bold text-[#191B1A]">M.C.A (7.34 CGPA)</span>
              </div>
              <div>
                <span className="block text-[#444640] font-mono-code uppercase text-[11px]">Location</span>
                <span className="font-bold text-[#191B1A]">Kerala, India</span>
              </div>
            </div>

            {/* Social channels */}
            <div className="flex items-center gap-5 text-sm font-medium text-[#444640]">
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#A65B3D] transition-colors flex items-center gap-1.5"
              >
                <IconGitHub className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <span className="text-[#B9B6AC]">•</span>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#A65B3D] transition-colors flex items-center gap-1.5"
              >
                <IconLinkedIn className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <span className="text-[#B9B6AC]">•</span>
              <a
                href={`tel:${personal.phone}`}
                className="hover:text-[#A65B3D] transition-colors flex items-center gap-1.5"
              >
                <IconPhone className="w-4 h-4 text-[#A65B3D]" />
                <span>{personal.phoneDisplay}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Clean Image */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-sm">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#B9B6AC]/20 shadow-xl transition-all">
                <img
                  src={selectedPhoto === 1 ? image1 : image2}
                  alt="Jagath Krishna - React Developer"
                  className="w-full h-full object-cover object-top transition-all duration-300"
                />
              </div>

              {/* Clean Switch Buttons Below Image */}
              <div className="flex items-center justify-center gap-2 mt-4">
                <button
                  type="button"
                  onClick={() => setSelectedPhoto(2)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                    selectedPhoto === 2
                      ? 'bg-[#191B1A] text-[#EEECE5] font-bold shadow-sm'
                      : 'bg-[#B9B6AC]/40 text-[#444640] hover:text-[#191B1A]'
                  }`}
                >
                  Studio Photo
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedPhoto(1)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                    selectedPhoto === 1
                      ? 'bg-[#191B1A] text-[#EEECE5] font-bold shadow-sm'
                      : 'bg-[#B9B6AC]/40 text-[#444640] hover:text-[#191B1A]'
                  }`}
                >
                  Portrait Photo
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
