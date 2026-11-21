import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'frontend', label: 'Frontend & UI' },
    { id: 'backend', label: 'Backend & DB' },
    { id: 'tools', label: 'State & Tools' },
    { id: 'ai', label: 'AI Acceleration' },
  ];

  return (
    <section id="skills" className="py-24 bg-[#191B1A] text-[#EEECE5] border-b border-[#444640]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="pb-8 mb-12 border-b border-[#444640]">
          <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#A65B3D] block mb-2">
            Technical Stack
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl uppercase tracking-tight text-[#EEECE5]">
            Skills & Competencies<span className="text-[#A65B3D]">.</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#B9B6AC] mt-2 max-w-xl">
            A comprehensive overview of frontend engineering, full-stack MERN technologies, state systems, and AI-accelerated workflows.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 mt-6 font-sans text-xs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-sm transition-all cursor-pointer font-medium ${
                  activeCategory === cat.id
                    ? 'bg-[#A65B3D] text-[#EEECE5] font-bold shadow-sm'
                    : 'bg-[#1E2120] text-[#B9B6AC] hover:text-[#EEECE5] border border-[#444640]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Frontend */}
          {(activeCategory === 'all' || activeCategory === 'frontend') && (
            <div className="p-6 rounded-lg bg-[#1E2120] border border-[#444640] space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#444640]">
                <h3 className="font-display font-bold text-base text-[#EEECE5]">
                  Frontend Technologies
                </h3>
                <span className="text-xs font-mono-code text-[#A65B3D] font-bold">10 Technologies</span>
              </div>
              <div className="space-y-2 font-sans text-xs">
                {skills.frontend.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-2.5 rounded-sm bg-[#191B1A] border border-[#444640]/70 hover:border-[#A65B3D] transition-colors"
                  >
                    <span className="font-semibold text-[#EEECE5]">{item.name}</span>
                    <span className="text-[11px] font-mono-code text-[#B9B6AC]">
                      {item.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Backend & Database */}
          {(activeCategory === 'all' || activeCategory === 'backend') && (
            <div className="p-6 rounded-lg bg-[#1E2120] border border-[#444640] space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#444640]">
                <h3 className="font-display font-bold text-base text-[#EEECE5]">
                  Backend & Database
                </h3>
                <span className="text-xs font-mono-code text-[#A65B3D] font-bold">9 Technologies</span>
              </div>
              <div className="space-y-2 font-sans text-xs">
                {skills.backend.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-2.5 rounded-sm bg-[#191B1A] border border-[#444640]/70 hover:border-[#A65B3D] transition-colors"
                  >
                    <span className="font-semibold text-[#EEECE5]">{item.name}</span>
                    <span className="text-[11px] font-mono-code text-[#B9B6AC]">
                      {item.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* State & Tools */}
          {(activeCategory === 'all' || activeCategory === 'tools') && (
            <div className="p-6 rounded-lg bg-[#1E2120] border border-[#444640] space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#444640]">
                <h3 className="font-display font-bold text-base text-[#EEECE5]">
                  State & Architecture
                </h3>
                <span className="text-xs font-mono-code text-[#A65B3D] font-bold">7 Technologies</span>
              </div>
              <div className="space-y-2 font-sans text-xs">
                {skills.stateAndTools.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-2.5 rounded-sm bg-[#191B1A] border border-[#444640]/70 hover:border-[#A65B3D] transition-colors"
                  >
                    <span className="font-semibold text-[#EEECE5]">{item.name}</span>
                    <span className="text-[11px] font-mono-code text-[#B9B6AC]">
                      {item.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* AI Tools */}
          {(activeCategory === 'all' || activeCategory === 'ai') && (
            <div className="p-6 rounded-lg bg-[#1E2120] border border-[#444640] space-y-4 md:col-span-2 lg:col-span-3">
              <div className="flex items-center justify-between pb-3 border-b border-[#444640]">
                <h3 className="font-display font-bold text-base text-[#EEECE5]">
                  AI Accelerators & LLM Integration
                </h3>
                <span className="text-xs font-mono-code text-[#A65B3D] font-bold">Modern Tooling</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {skills.aiTools.map((tool, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-sm bg-[#191B1A] border border-[#444640] hover:border-[#A65B3D] transition-colors"
                  >
                    <span className="font-display font-bold text-sm text-[#EEECE5] block mb-1">
                      {tool.name}
                    </span>
                    <p className="font-sans text-xs text-[#B9B6AC] leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
