import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { IconAcademic, IconMapPin } from './Icons';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 bg-[#191B1A] text-[#EEECE5] border-b border-[#444640]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="pb-8 mb-12 border-b border-[#444640]">
          <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#A65B3D] block mb-2">
            Academic Background
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl uppercase tracking-tight text-[#EEECE5]">
            Education & Degrees<span className="text-[#A65B3D]">.</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#B9B6AC] mt-2 max-w-xl">
            Formal foundations in Computer Applications, algorithms, web architectures, and software engineering.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-lg bg-[#1E2120] border border-[#444640] hover:border-[#A65B3D] transition-colors space-y-4"
            >
              <div className="flex items-center justify-between pb-3 border-b border-[#444640]">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-sm bg-[#191B1A] text-[#A65B3D]">
                    <IconAcademic className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono-code font-bold text-[#EEECE5]">
                    {edu.period}
                  </span>
                </div>
                <span className="text-xs font-mono-code font-bold px-2.5 py-1 rounded-sm bg-[#A65B3D] text-[#EEECE5]">
                  {edu.score}
                </span>
              </div>

              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#EEECE5]">
                {edu.degree}
              </h3>

              <h4 className="font-sans text-sm font-semibold text-[#EEECE5]/90">
                {edu.institution}
              </h4>

              <p className="font-sans text-xs text-[#B9B6AC]">
                {edu.university}
              </p>

              <div className="flex items-center gap-1.5 text-xs text-[#B9B6AC]">
                <IconMapPin className="w-3.5 h-3.5 text-[#A65B3D]" />
                <span>{edu.location}</span>
              </div>

              <p className="font-sans text-xs sm:text-sm text-[#B9B6AC] pt-2 leading-relaxed">
                {edu.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
