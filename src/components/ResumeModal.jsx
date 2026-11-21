import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { IconClose, IconDownload, IconMail, IconPhone, IconMapPin, IconGitHub } from './Icons';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const { personal, skills, experience, education, projects } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#EEECE5] text-[#191B1A] border-2 border-[#191B1A] rounded-lg shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#191B1A] text-[#EEECE5] border-b border-[#444640]">
          <div className="flex items-center gap-2 text-sm font-bold">
            <span className="w-2.5 h-2.5 rounded-full bg-[#A65B3D]"></span>
            <span>{personal.name} — Professional Resume</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              type="button"
              className="text-xs font-bold px-4 py-2 rounded-sm bg-[#A65B3D] text-[#EEECE5] hover:bg-[#A65B3D]/90 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <IconDownload className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              type="button"
              className="p-1.5 text-[#EEECE5] hover:text-[#A65B3D] transition-colors cursor-pointer"
              aria-label="Close"
            >
              <IconClose className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document */}
        <div className="p-6 sm:p-10 space-y-8 bg-[#EEECE5] text-[#191B1A]">
          
          {/* Header */}
          <div className="border-b-2 border-[#191B1A] pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="font-display font-bold text-4xl sm:text-5xl uppercase tracking-tight text-[#191B1A]">
                {personal.name}<span className="text-[#A65B3D]">.</span>
              </h1>
              <p className="font-sans text-base font-bold text-[#A65B3D] mt-1">
                {personal.title} — MERN Full-Stack Developer
              </p>
            </div>

            <div className="font-sans text-xs text-[#444640] space-y-1 sm:text-right">
              <div>{personal.email}</div>
              <div>{personal.phoneDisplay}</div>
              <div>{personal.location}</div>
              <div className="text-[#A65B3D] font-bold">Availability: Immediate Joining</div>
            </div>
          </div>

          {/* Profile Statement */}
          <div className="space-y-2">
            <h2 className="font-sans text-xs font-bold uppercase tracking-wider text-[#A65B3D] border-b border-[#191B1A] pb-1">
              Professional Profile
            </h2>
            <p className="font-sans text-sm text-[#191B1A] leading-relaxed">
              {personal.about}
            </p>
          </div>

          {/* Professional Experience */}
          <div className="space-y-4">
            <h2 className="font-sans text-xs font-bold uppercase tracking-wider text-[#A65B3D] border-b border-[#191B1A] pb-1">
              Professional Experience
            </h2>
            <div className="space-y-5">
              {experience.map((exp, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                    <span className="font-bold text-[#191B1A]">
                      {exp.role} — {exp.company} ({exp.location})
                    </span>
                    <span className="font-sans text-xs font-bold text-[#A65B3D]">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-1.5 font-sans text-xs text-[#444640]">
                    {exp.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2">
                        <span className="text-[#A65B3D] font-bold">•</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div className="space-y-4">
            <h2 className="font-sans text-xs font-bold uppercase tracking-wider text-[#A65B3D] border-b border-[#191B1A] pb-1">
              Featured Projects
            </h2>
            <div className="space-y-4">
              {projects.map((proj, idx) => (
                <div key={idx} className="space-y-1 text-xs">
                  <div className="flex items-center justify-between font-bold text-sm">
                    <span className="text-[#191B1A]">{proj.title}</span>
                    <span className="text-xs text-[#444640]">{proj.year}</span>
                  </div>
                  <div className="font-sans text-xs text-[#A65B3D] font-medium">
                    {proj.technologies.join(', ')}
                  </div>
                  <ul className="space-y-1 text-[#444640]">
                    {proj.bulletPoints.map((bp, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <span className="text-[#A65B3D]">•</span>
                        <span>{bp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="font-sans text-xs font-bold uppercase tracking-wider text-[#A65B3D] border-b border-[#191B1A] pb-1">
              Technical Skills
            </h2>
            <div className="font-sans text-xs space-y-1.5 text-[#191B1A]">
              <div>
                <span className="font-bold">Frontend: </span>
                <span className="text-[#444640]">{skills.frontend.map((s) => s.name).join(', ')}</span>
              </div>
              <div>
                <span className="font-bold">Backend & Database: </span>
                <span className="text-[#444640]">{skills.backend.map((s) => s.name).join(', ')}</span>
              </div>
              <div>
                <span className="font-bold">State Management & Tools: </span>
                <span className="text-[#444640]">{skills.stateAndTools.map((s) => s.name).join(', ')}</span>
              </div>
              <div>
                <span className="font-bold">AI Acceleration: </span>
                <span className="text-[#444640]">{skills.aiTools.map((s) => s.name).join(', ')}</span>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="font-sans text-xs font-bold uppercase tracking-wider text-[#A65B3D] border-b border-[#191B1A] pb-1">
              Education
            </h2>
            <div className="space-y-2 font-sans text-xs">
              {education.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <div>
                    <span className="font-bold text-[#191B1A]">{edu.degree}</span>
                    <span className="text-[#A65B3D] font-bold ml-2">({edu.score})</span>
                    <div className="text-[#444640]">{edu.institution} ({edu.university})</div>
                  </div>
                  <span className="text-[#444640]">{edu.period}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
