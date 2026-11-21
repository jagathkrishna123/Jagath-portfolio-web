import React from 'react';

// Import all 16 skill logo images from src/assets/Skills
import bootstrapImg from '../assets/Skills/bootstrap.png';
import expressImg from '../assets/Skills/express-js.png';
import figmaImg from '../assets/Skills/figma.png';
import framerImg from '../assets/Skills/framer.png';
import githubImg from '../assets/Skills/github.png';
import html5Img from '../assets/Skills/html5.png';
import jsImg from '../assets/Skills/javascript.png';
import mongodbImg from '../assets/Skills/mongodb.png';
import nextjsImg from '../assets/Skills/nextjs.png';
import nodeImg from '../assets/Skills/node.png';
import reactImg from '../assets/Skills/react.png';
import reduxImg from '../assets/Skills/redux.png';
import restApiImg from '../assets/Skills/rest-api.png';
import tailwindImg from '../assets/Skills/tailwindcss.png';
import tsImg from '../assets/Skills/typescript.png';
import viteImg from '../assets/Skills/vite.png';

const skillsList = [
  // Frontend
  { name: 'React.js', category: 'Frontend', img: reactImg },
  { name: 'Next.js', category: 'Framework', img: nextjsImg },
  { name: 'HTML5', category: 'Web Core', img: html5Img },

  // Languages
  { name: 'JavaScript', category: 'Language', img: jsImg },
  { name: 'TypeScript', category: 'Language', img: tsImg },

  // Styling
  { name: 'Tailwind CSS', category: 'Styling', img: tailwindImg },
  { name: 'Bootstrap', category: 'CSS Framework', img: bootstrapImg },

  // Backend
  { name: 'Node.js', category: 'Backend', img: nodeImg },
  { name: 'Express.js', category: 'Backend', img: expressImg },

  // Database
  { name: 'MongoDB', category: 'Database', img: mongodbImg },

  // State Management
  { name: 'Redux', category: 'State', img: reduxImg },

  // API
  { name: 'REST APIs', category: 'API Design', img: restApiImg },

  // Tools
  { name: 'Vite', category: 'Tooling', img: viteImg },
  { name: 'GitHub', category: 'Version Control', img: githubImg },

  // UI/UX & Animation
  { name: 'Figma', category: 'UI / UX', img: figmaImg },
  { name: 'Framer', category: 'Animation', img: framerImg },
];

export default function TechLogos() {
  return (
    <section className="py-20 bg-[#161817] text-[#EEECE5] border-b border-[#444640] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-12 border-b border-[#444640] gap-4">
          <div>
            <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#A65B3D] block mb-2">
              Technology Ecosystem
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#EEECE5]">
              Core Tech & Tooling<span className="text-[#A65B3D]">.</span>
            </h2>
            <p className="font-sans text-sm text-[#B9B6AC] mt-2 max-w-xl">
              Libraries, frameworks, databases, and development tools I leverage to engineer production web applications.
            </p>
          </div>

          <div className="text-xs font-mono-code text-[#B9B6AC]">
            <span className="text-[#A65B3D] font-bold">16 TECHNOLOGIES</span> // PRODUCTION READY
          </div>
        </div>

        {/* Dedicated 16-Logo Grid Showcase */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3 sm:gap-4">
          {skillsList.map((skill, idx) => (
            <div
              key={idx}
              className="group p-4 rounded-lg bg-[#1E2120] border border-[#444640] hover:border-[#A65B3D] transition-all duration-300 flex flex-col items-center justify-center text-center space-y-3 hover:-translate-y-1 hover:shadow-lg shadow-black/40"
            >
              {/* Logo Tile with subtle light backing for dark logos like GitHub/Next */}
              <div className="w-14 h-14 rounded-md bg-[#EEECE5] p-2.5 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                <img
                  src={skill.img}
                  alt={`${skill.name} logo`}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>

              {/* Title & Category */}
              <div>
                <span className="font-display font-bold text-xs sm:text-sm text-[#EEECE5] block group-hover:text-[#A65B3D] transition-colors leading-tight">
                  {skill.name}
                </span>
                <span className="font-mono-code text-[10px] text-[#B9B6AC] block mt-0.5 uppercase tracking-wider">
                  {skill.category}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Infinite Horizontal Logo Marquee Band */}
      <div className="mt-14 pt-6 border-t border-[#444640]/50 relative">
        <div className="overflow-hidden whitespace-nowrap">
          <div className="animate-marquee-smooth flex items-center gap-10">
            {/* First duplicate for seamless infinite loop */}
            {[...skillsList, ...skillsList].map((skill, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#1E2120] border border-[#444640]/80 flex-shrink-0"
              >
                <div className="w-6 h-6 rounded-full bg-[#EEECE5] p-1 flex items-center justify-center">
                  <img
                    src={skill.img}
                    alt={skill.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="font-sans text-xs font-bold text-[#EEECE5]">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
