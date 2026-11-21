import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { IconCheck, IconMail, IconPhone, IconMapPin, IconAcademic, IconBriefcase, IconDownload } from './Icons';
import resumePdf from '../assets/Jagath_Krishna-Resume-r.pdf';

export default function About() {
  const { personal } = portfolioData;

  const coreStrengths = [
    {
      title: "Modular Component Architecture",
      desc: "Architecting clean, reusable React components adhering to composition, custom hooks, and maintainable design patterns."
    },
    {
      title: "State Management & Routing",
      desc: "Orchestrating deterministic state flows using React Context API and Redux, coordinated with multi-page flows via React Router."
    },
    {
      title: "RESTful API Integration",
      desc: "Integrating Node.js/Express backends with async loading skeletons, error boundaries, and dynamic data rendering."
    },
    {
      title: "Performance & Tailwind CSS",
      desc: "Building pixel-accurate, mobile-first responsive layouts with Tailwind CSS while optimizing DOM re-renders and load speeds."
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#191B1A] text-[#EEECE5] border-b border-[#444640]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="pb-8 mb-12 border-b border-[#444640]">
          <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#A65B3D] block mb-2">
            Professional Overview
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl uppercase tracking-tight text-[#EEECE5]">
            About Me<span className="text-[#A65B3D]">.</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#B9B6AC] mt-2 max-w-xl">
            React.js Developer with production experience at Scanntek Solutions and a certified full-stack MERN background.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Story & Highlights */}
          <div className="lg:col-span-7 space-y-8">
            <div className="p-7 sm:p-8 rounded-lg bg-[#1E2120] border border-[#444640] space-y-5">
              <h3 className="font-display font-bold text-xl text-[#EEECE5]">
                Engineering Scalable, User-Friendly Web Apps
              </h3>

              <p className="font-sans text-sm sm:text-base text-[#EEECE5]/90 leading-relaxed">
                I am a passionate <strong className="text-[#EEECE5] font-bold">React.js Developer</strong> dedicated to turning complex feature requirements into intuitive, performant user interfaces. My primary toolkit includes React.js, Tailwind CSS, JavaScript (ES6+), and REST APIs.
              </p>

              <p className="font-sans text-sm sm:text-base text-[#B9B6AC] leading-relaxed">
                Currently working at <strong className="text-[#EEECE5]">Scanntek Solutions</strong> (Kinfra Techno Industrial Park, Calicut), I develop modular UI component libraries, optimize page load metrics, and manage routing workflows across core applications. Backed by an 8-month full-stack MERN certification from <strong className="text-[#EEECE5]">Luminar Technolabs</strong> and a Master of Computer Applications (M.C.A) degree, I bridge frontend finesse with robust backend services.
              </p>

              <div className="pt-4 border-t border-[#444640]">
                {/* Direct PDF Download Anchor */}
                <a
                  href={resumePdf}
                  download="Jagath_Krishna_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-sm bg-[#EEECE5] text-[#191B1A] hover:bg-[#A65B3D] hover:text-[#EEECE5] transition-colors cursor-pointer"
                >
                  <IconDownload className="w-4 h-4 text-[#A65B3D]" />
                  <span>Download Full Resume (PDF)</span>
                </a>
              </div>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {coreStrengths.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-lg bg-[#1E2120] border border-[#444640] hover:border-[#A65B3D] transition-colors"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-1 rounded-sm bg-[#A65B3D]/20 text-[#A65B3D]">
                      <IconCheck className="w-3.5 h-3.5" />
                    </div>
                    <h4 className="font-sans font-bold text-sm text-[#EEECE5]">
                      {pillar.title}
                    </h4>
                  </div>
                  <p className="font-sans text-xs text-[#B9B6AC] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* Candidate Overview Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-lg bg-[#1E2120] border border-[#444640] space-y-6">
              <h3 className="font-display font-bold text-base text-[#EEECE5] pb-3 border-b border-[#444640] flex items-center justify-between">
                <span>Candidate Details</span>
                <span className="text-xs font-mono-code font-bold px-2 py-0.5 rounded-sm bg-[#A65B3D] text-[#EEECE5]">
                  Immediate Joiner
                </span>
              </h3>

              <div className="space-y-4 font-sans text-sm">
                
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-sm bg-[#191B1A] border border-[#444640] text-[#A65B3D]">
                    <IconBriefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-[#B9B6AC] block">Current Experience</span>
                    <span className="font-bold text-[#EEECE5]">React Js Developer @ Scanntek Solutions</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-sm bg-[#191B1A] border border-[#444640] text-[#A65B3D]">
                    <IconAcademic className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-[#B9B6AC] block">Highest Degree</span>
                    <span className="font-bold text-[#EEECE5]">M.C.A (7.34 CGPA)</span>
                    <span className="text-xs text-[#B9B6AC] block">APJ Abdul Kalam Technological University</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-sm bg-[#191B1A] border border-[#444640] text-[#A65B3D]">
                    <IconMapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-[#B9B6AC] block">Location</span>
                    <span className="font-bold text-[#EEECE5]">{personal.location}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-sm bg-[#191B1A] border border-[#444640] text-[#A65B3D]">
                    <IconMail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-[#B9B6AC] block">Email</span>
                    <a href={`mailto:${personal.email}`} className="font-bold text-[#EEECE5] hover:text-[#A65B3D] transition-colors">
                      {personal.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-sm bg-[#191B1A] border border-[#444640] text-[#A65B3D]">
                    <IconPhone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-[#B9B6AC] block">Phone / WhatsApp</span>
                    <a href={`tel:${personal.phone}`} className="font-bold text-[#EEECE5] hover:text-[#A65B3D] transition-colors">
                      {personal.phoneDisplay}
                    </a>
                  </div>
                </div>

              </div>

              <div className="pt-2 border-t border-[#444640]">
                <div className="p-3 rounded-sm bg-[#191B1A] border border-[#444640] text-xs font-mono-code text-[#B9B6AC]">
                  <span className="text-[#A65B3D] font-bold">Notice Period: </span>
                  0 Days (Ready to start immediately on-site, hybrid, or remote)
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
