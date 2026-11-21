import React from 'react';
import { IconClose, IconGitHub, IconCheck } from './Icons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#1E2120] border border-[#444640] rounded-xl text-[#EEECE5] shadow-2xl p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-5 right-5 p-2 rounded-lg bg-[#191B1A] text-[#B9B6AC] hover:text-[#EEECE5] border border-[#444640] transition-colors cursor-pointer"
          aria-label="Close"
        >
          <IconClose className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="pr-8 space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono-code font-bold px-2.5 py-1 rounded-sm bg-[#A65B3D] text-[#EEECE5]">
              {project.category}
            </span>
            <span className="text-xs font-mono-code text-[#B9B6AC]">
              {project.year}
            </span>
          </div>

          <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#EEECE5]">
            {project.title}
          </h2>

          <p className="text-sm text-[#B9B6AC]">
            {project.tagline}
          </p>
        </div>

        {/* Overview */}
        <div className="p-4 rounded-lg bg-[#191B1A] border border-[#444640] text-sm text-[#EEECE5] leading-relaxed">
          {project.summary}
        </div>

        {/* Feature List */}
        <div className="space-y-3">
          <h3 className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#A65B3D]">
            Key Features & Implementations:
          </h3>
          <div className="space-y-2">
            {project.bulletPoints.map((point, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#B9B6AC]">
                <div className="mt-1 p-0.5 rounded-full bg-[#A65B3D]/20 text-[#A65B3D] flex-shrink-0">
                  <IconCheck className="w-3.5 h-3.5" />
                </div>
                <span className="text-[#EEECE5] leading-relaxed">{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div>
          <h3 className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#A65B3D] mb-2.5">
            Tech Stack:
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-sm text-xs font-medium bg-[#191B1A] text-[#EEECE5] border border-[#444640]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-[#444640] flex items-center justify-between">
          <a
            href={project.links.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-sm text-xs font-bold bg-[#A65B3D] text-[#EEECE5] hover:bg-[#A65B3D]/90 transition-colors"
          >
            <IconGitHub className="w-4 h-4" />
            <span>GitHub Repository</span>
          </a>

          <button
            onClick={onClose}
            type="button"
            className="px-4 py-2.5 rounded-sm text-xs font-semibold text-[#B9B6AC] hover:text-[#EEECE5] bg-[#191B1A] border border-[#444640] cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
