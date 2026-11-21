import React from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  IconGitHub,
  IconLinkedIn,
  IconMail,
  IconPhone,
  IconArrowRight,
  IconDownload,
} from './Icons';
import image2 from '../assets/jagathimage2.png';
import resumePdf from '../assets/Jagath_Krishna-Resume-r.pdf';

export default function Hero({ onCopyToast }) {
  const { personal } = portfolioData;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    onCopyToast && onCopyToast('Email address copied to clipboard!');
  };

  return (
    <section id="hero" className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-[#EEECE5] text-[#191B1A] border-b border-[#B9B6AC]/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Status & Meta Strip - Clean, un-congested */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-[#B9B6AC]/50 mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#191B1A] text-[#EEECE5] text-xs font-mono-code w-fit">
            <span className="w-2 h-2 rounded-full bg-[#A65B3D] animate-pulse"></span>
            <span>Available for Immediate Joining</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono-code text-[#444640]">
            <span>THRISSUR, KERALA</span>
            <span className="text-[#B9B6AC]">•</span>
            <span>REACT.JS // FULL-STACK MERN</span>
          </div>
        </div>

        {/* Main Hero Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Spacious, Focused Headline & Overview */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8 order-2 lg:order-1">
            
            {/* Monumental Name & Role */}
            <div className="space-y-3">
              <span className="text-xs sm:text-sm font-mono-code font-bold uppercase tracking-wider text-[#A65B3D] block">
                Frontend & UI Engineering
              </span>
              <h1 className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-[1.02] uppercase text-[#191B1A]">
                Jagath Krishna<span className="text-[#A65B3D]">.</span>
              </h1>
              <p className="font-display text-xl sm:text-2xl lg:text-3xl font-semibold text-[#444640]">
                React.js Developer & MERN Specialist
              </p>
            </div>

            {/* Clear, readable elevator pitch with breathing room */}
            <p className="font-sans text-base sm:text-lg text-[#191B1A] leading-relaxed max-w-2xl">
              Production React developer at <strong className="text-[#191B1A] font-bold">Scanntek Solutions</strong> crafting responsive, modular web applications. Experienced in building reusable components, scalable state workflows, and resilient RESTful API integrations with Tailwind CSS.
            </p>

            {/* Call to Actions (Clean responsive buttons) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href="#projects"
                className="font-sans text-sm font-bold px-7 py-3.5 bg-[#191B1A] text-[#EEECE5] hover:bg-[#A65B3D] transition-colors rounded-sm flex items-center justify-center gap-2 shadow-sm text-center"
              >
                <span>Explore Projects</span>
                <IconArrowRight className="w-4 h-4" />
              </a>

              <a
                href={resumePdf}
                download="Jagath_Krishna_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="font-sans text-sm font-bold px-7 py-3.5 border-2 border-[#191B1A] text-[#191B1A] hover:bg-[#191B1A] hover:text-[#EEECE5] transition-colors rounded-sm flex items-center justify-center gap-2 cursor-pointer text-center"
              >
                <IconDownload className="w-4 h-4 text-[#A65B3D]" />
                <span>Download Resume</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="font-sans text-xs font-semibold px-4 py-3.5 border border-[#B9B6AC] text-[#444640] hover:border-[#191B1A] hover:text-[#191B1A] transition-colors rounded-sm flex items-center justify-center gap-2 cursor-pointer"
                title="Click to copy email address"
              >
                <IconMail className="w-4 h-4 text-[#A65B3D]" />
                <span>Copy Email</span>
              </button>
            </div>

            {/* Social channels */}
            <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm font-medium text-[#444640]">
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

          {/* Right Column: Clean, Natural, Single-Image Presentation */}
          <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2">
            <div className="relative w-full max-w-[280px] sm:max-w-[340px] lg:max-w-md">
              
              {/* Clean Image Container without boxy frame or text */}
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#B9B6AC]/30 to-[#B9B6AC]/10 shadow-2xl transition-transform duration-300 hover:scale-[1.02]">
                <img
                  src={image2}
                  alt="Jagath Krishna - React.js Developer"
                  className="w-full h-auto object-cover object-top block"
                  priority="true"
                />
              </div>

              {/* Minimal floating role indicator */}
              <div className="mt-3 text-center">
                <span className="inline-block text-xs font-mono-code text-[#444640] uppercase tracking-wider">
                  Jagath Krishna // React.js Developer
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* Decompressed Horizontal Metrics Strip Across Full Width */}
        <div className="mt-12 lg:mt-16 pt-8 border-t border-[#B9B6AC]/60 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="space-y-1">
            <span className="text-[11px] font-mono-code uppercase text-[#A65B3D] block font-bold">
              01 // Current Engagement
            </span>
            <span className="font-sans text-sm font-bold text-[#191B1A] block">
              Scanntek Solutions
            </span>
            <span className="text-xs text-[#444640] block">React.js Developer</span>
          </div>

          <div className="space-y-1">
            <span className="text-[11px] font-mono-code uppercase text-[#A65B3D] block font-bold">
              02 // Education
            </span>
            <span className="font-sans text-sm font-bold text-[#191B1A] block">
              M.C.A (7.34 CGPA)
            </span>
            <span className="text-xs text-[#444640] block">KTU Technological Univ</span>
          </div>

          <div className="space-y-1">
            <span className="text-[11px] font-mono-code uppercase text-[#A65B3D] block font-bold">
              03 // Full-Stack Base
            </span>
            <span className="font-sans text-sm font-bold text-[#191B1A] block">
              MERN Stack
            </span>
            <span className="text-xs text-[#444640] block">MongoDB, Node, Express</span>
          </div>

          <div className="space-y-1">
            <span className="text-[11px] font-mono-code uppercase text-[#A65B3D] block font-bold">
              04 // Availability
            </span>
            <span className="font-sans text-sm font-bold text-[#A65B3D] block">
              Immediate Joining
            </span>
            <span className="text-xs text-[#444640] block">0 Days Notice Period</span>
          </div>
        </div>

      </div>
    </section>
  );
}
