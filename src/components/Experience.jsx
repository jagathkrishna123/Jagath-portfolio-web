import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 bg-[#191B1A] text-[#EEECE5] border-b border-[#444640]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="pb-8 mb-12 border-b border-[#444640]">
          <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#A65B3D] block mb-2">
            Work History
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl uppercase tracking-tight text-[#EEECE5]">
            Professional Experience<span className="text-[#A65B3D]">.</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#B9B6AC] mt-2 max-w-xl">
            Hands-on software development experience across production feature delivery and full-stack MERN engineering.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experience.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-lg bg-[#1E2120] border border-[#444640] hover:border-[#A65B3D] transition-colors space-y-5"
            >
              {/* Header Row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#444640]">
                <div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-[#EEECE5]">
                      {exp.role}
                    </h3>
                    {exp.status === 'Current Role' && (
                      <span className="px-2.5 py-0.5 rounded-sm text-xs font-mono-code font-bold bg-[#A65B3D] text-[#EEECE5]">
                        Present Role
                      </span>
                    )}
                  </div>
                  <div className="font-sans text-sm font-semibold text-[#EEECE5]/80 mt-1">
                    <span>{exp.company}</span>
                    <span className="mx-2 text-[#444640]">•</span>
                    <span className="text-xs text-[#B9B6AC] font-normal">{exp.location}</span>
                  </div>
                </div>

                <div className="font-mono-code text-xs text-left sm:text-right">
                  <span className="block font-bold text-[#EEECE5]">{exp.period}</span>
                  <span className="text-[#B9B6AC]">{exp.type}</span>
                </div>
              </div>

              {/* Description */}
              <p className="font-sans text-sm text-[#EEECE5]/90 leading-relaxed">
                {exp.description}
              </p>

              {/* Achievements */}
              <div className="space-y-2.5">
                {exp.achievements.map((item, aIdx) => (
                  <div key={aIdx} className="flex items-start gap-3">
                    <span className="text-[#A65B3D] font-bold mt-1 text-sm">•</span>
                    <p className="font-sans text-xs sm:text-sm text-[#B9B6AC] leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {/* Skills applied */}
              <div className="pt-4 border-t border-[#444640] flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono-code font-bold text-[#EEECE5] mr-1">
                  Technologies Used:
                </span>
                {exp.skillsUsed.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-xs px-2.5 py-1 rounded-sm bg-[#191B1A] border border-[#444640] text-[#EEECE5]"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
