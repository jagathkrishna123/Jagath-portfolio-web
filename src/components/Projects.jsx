import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { IconArrowRight, IconGitHub } from './Icons';

export default function Projects({ onSelectProject }) {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState('all');

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((p) => p.category.toLowerCase().includes(filter));

  return (
    <section id="projects" className="py-24 bg-[#191B1A] text-[#EEECE5] border-b border-[#444640]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Clean Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-12 border-b border-[#444640] gap-4">
          <div>
            <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#A65B3D] block mb-2">
              Featured Portfolio
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl uppercase tracking-tight text-[#EEECE5]">
              Selected Projects<span className="text-[#A65B3D]">.</span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#B9B6AC] mt-2 max-w-xl">
              Production-ready applications demonstrating frontend component engineering, full-stack MERN architectures, and real-time APIs.
            </p>
          </div>

          {/* Clean Category Filters */}
          <div className="flex flex-wrap gap-2 font-sans text-xs">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 rounded-sm transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-[#A65B3D] text-[#EEECE5] font-bold'
                  : 'bg-[#444640]/40 text-[#B9B6AC] hover:text-[#EEECE5] border border-[#444640]'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('mern')}
              className={`px-3.5 py-1.5 rounded-sm transition-all cursor-pointer ${
                filter === 'mern'
                  ? 'bg-[#A65B3D] text-[#EEECE5] font-bold'
                  : 'bg-[#444640]/40 text-[#B9B6AC] hover:text-[#EEECE5] border border-[#444640]'
              }`}
            >
              MERN E-Commerce
            </button>
            <button
              onClick={() => setFilter('ai')}
              className={`px-3.5 py-1.5 rounded-sm transition-all cursor-pointer ${
                filter === 'ai'
                  ? 'bg-[#A65B3D] text-[#EEECE5] font-bold'
                  : 'bg-[#444640]/40 text-[#B9B6AC] hover:text-[#EEECE5] border border-[#444640]'
              }`}
            >
              AI Platform
            </button>
            <button
              onClick={() => setFilter('real-time')}
              className={`px-3.5 py-1.5 rounded-sm transition-all cursor-pointer ${
                filter === 'real-time'
                  ? 'bg-[#A65B3D] text-[#EEECE5] font-bold'
                  : 'bg-[#444640]/40 text-[#B9B6AC] hover:text-[#EEECE5] border border-[#444640]'
              }`}
            >
              Real-Time Chat
            </button>
          </div>
        </div>

        {/* Modern Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="group bg-[#1E2120] border border-[#444640] rounded-lg overflow-hidden flex flex-col justify-between hover:border-[#A65B3D] transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              {/* Card Header & Content */}
              <div className="p-7 space-y-4">
                
                {/* Meta Row */}
                <div className="flex items-center justify-between text-xs font-mono-code">
                  <span className="text-[#A65B3D] font-bold text-sm">
                    0{idx + 1}
                  </span>
                  <span className="px-2.5 py-1 bg-[#444640]/60 text-[#EEECE5] rounded-sm">
                    {project.category}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="font-display font-bold text-2xl text-[#EEECE5] group-hover:text-[#A65B3D] transition-colors leading-snug">
                  {project.title}
                </h3>

                {/* Tagline / Summary */}
                <p className="font-sans text-sm text-[#B9B6AC] leading-relaxed">
                  {project.tagline}
                </p>

                {/* Key Bullet Highlights */}
                <div className="pt-2 border-t border-[#444640]/60 space-y-2">
                  <span className="block text-xs font-mono-code font-bold uppercase tracking-wider text-[#EEECE5]">
                    Core Capabilities
                  </span>
                  {project.bulletPoints.slice(0, 3).map((bp, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5 text-xs text-[#B9B6AC]">
                      <span className="text-[#A65B3D] font-bold mt-0.5">•</span>
                      <span className="leading-relaxed line-clamp-2">{bp}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="pt-3 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs px-2.5 py-1 rounded-sm bg-[#191B1A] border border-[#444640] text-[#EEECE5] font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

              {/* Card Action Footer */}
              <div className="px-7 py-4 bg-[#191B1A] border-t border-[#444640] flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => onSelectProject(project)}
                  className="font-sans text-xs font-bold text-[#EEECE5] hover:text-[#A65B3D] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Architecture & Details</span>
                  <IconArrowRight className="w-3.5 h-3.5 text-[#A65B3D]" />
                </button>

                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 text-[#B9B6AC] hover:text-[#EEECE5] hover:bg-[#444640]/40 rounded-sm transition-colors"
                  title="View GitHub Repository"
                >
                  <IconGitHub className="w-4 h-4" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
