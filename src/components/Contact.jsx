import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { IconMail, IconPhone, IconMapPin, IconGitHub, IconLinkedIn, IconSend } from './Icons';

export default function Contact({ onCopyToast }) {
  const { personal } = portfolioData;

  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    const subjectEncoded = encodeURIComponent(
      form.subject || `Inquiry from ${form.name}`
    );
    const bodyEncoded = encodeURIComponent(
      `Hi Jagath,\n\nName: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}\n`
    );
    window.location.href = `mailto:${personal.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;

    setSubmitted(true);
    onCopyToast && onCopyToast('Opening your email client...');
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    onCopyToast && onCopyToast(`Copied ${label} to clipboard!`);
  };

  return (
    <section id="contact" className="py-24 bg-[#EEECE5] text-[#191B1A] border-b border-[#B9B6AC]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="pb-8 mb-12 border-b border-[#B9B6AC]/70">
          <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#A65B3D] block mb-2">
            Get In Touch
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl uppercase tracking-tight text-[#191B1A]">
            Let's Connect<span className="text-[#A65B3D]">.</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#444640] mt-2 max-w-xl">
            Currently available for immediate joining. Open to full-time React.js Developer positions, full-stack MERN roles, and engineering collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-6 sm:p-7 rounded-lg bg-[#191B1A] text-[#EEECE5] space-y-5 shadow-lg">
              <h3 className="font-display font-bold text-lg text-[#EEECE5] pb-3 border-b border-[#444640]">
                Contact Information
              </h3>

              {/* Email */}
              <div className="p-4 rounded-md bg-[#1E2120] border border-[#444640] flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#B9B6AC] block">Email</span>
                  <a
                    href={`mailto:${personal.email}`}
                    className="font-sans text-sm font-bold text-[#EEECE5] hover:text-[#A65B3D] transition-colors"
                  >
                    {personal.email}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(personal.email, 'email')}
                  className="text-xs px-3 py-1.5 rounded-sm bg-[#191B1A] text-[#EEECE5] border border-[#444640] hover:border-[#A65B3D] transition-colors cursor-pointer"
                >
                  Copy
                </button>
              </div>

              {/* Phone */}
              <div className="p-4 rounded-md bg-[#1E2120] border border-[#444640] flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#B9B6AC] block">Phone / Mobile</span>
                  <a
                    href={`tel:${personal.phone}`}
                    className="font-sans text-sm font-bold text-[#EEECE5] hover:text-[#A65B3D] transition-colors"
                  >
                    {personal.phoneDisplay}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(personal.phone, 'phone number')}
                  className="text-xs px-3 py-1.5 rounded-sm bg-[#191B1A] text-[#EEECE5] border border-[#444640] hover:border-[#A65B3D] transition-colors cursor-pointer"
                >
                  Copy
                </button>
              </div>

              {/* Location */}
              <div className="p-4 rounded-md bg-[#1E2120] border border-[#444640]">
                <span className="text-xs text-[#B9B6AC] block">Location</span>
                <span className="font-sans text-sm font-bold text-[#EEECE5]">
                  {personal.location}
                </span>
              </div>

              {/* Social Channels */}
              <div className="pt-2 flex gap-3">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 text-center rounded-sm font-sans text-xs font-bold bg-[#1E2120] border border-[#444640] text-[#EEECE5] hover:border-[#A65B3D] hover:text-[#A65B3D] transition-colors"
                >
                  GitHub
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 text-center rounded-sm font-sans text-xs font-bold bg-[#1E2120] border border-[#444640] text-[#EEECE5] hover:border-[#A65B3D] hover:text-[#A65B3D] transition-colors"
                >
                  LinkedIn
                </a>
              </div>

            </div>

            {/* Availability Notice */}
            <div className="p-4 rounded-lg bg-[#EEECE5] border border-[#B9B6AC] flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#A65B3D] flex-shrink-0 animate-pulse"></span>
              <p className="text-xs font-sans text-[#191B1A]">
                <strong>Notice Period: None.</strong> Ready for immediate deployment in on-site, hybrid, or remote positions.
              </p>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-lg bg-[#191B1A] text-[#EEECE5] border border-[#444640] shadow-xl">
              <h3 className="font-display font-bold text-xl text-[#EEECE5] mb-2">
                Send a Message
              </h3>
              <p className="text-sm text-[#B9B6AC] mb-6">
                Fill out the form below to reach out directly to Jagath.
              </p>

              {submitted ? (
                <div className="p-6 rounded-md bg-[#1E2120] border border-[#A65B3D] text-center space-y-2">
                  <span className="text-base font-bold text-[#A65B3D] block">Message Initiated!</span>
                  <p className="text-xs text-[#B9B6AC]">
                    Your default mail application was opened with pre-filled details. Thank you!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-sans text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#B9B6AC] mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="e.g. Alex Miller"
                        className="w-full p-3 rounded-sm bg-[#1E2120] border border-[#444640] text-[#EEECE5] placeholder-[#B9B6AC]/40 focus:outline-none focus:border-[#A65B3D] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#B9B6AC] mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="alex@company.com"
                        className="w-full p-3 rounded-sm bg-[#1E2120] border border-[#444640] text-[#EEECE5] placeholder-[#B9B6AC]/40 focus:outline-none focus:border-[#A65B3D] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#B9B6AC] mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="e.g. React.js Developer Role Opportunity"
                      className="w-full p-3 rounded-sm bg-[#1E2120] border border-[#444640] text-[#EEECE5] placeholder-[#B9B6AC]/40 focus:outline-none focus:border-[#A65B3D] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#B9B6AC] mb-1.5">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      required
                      placeholder="Hi Jagath, we reviewed your portfolio and would like to talk about an opportunity..."
                      className="w-full p-3 rounded-sm bg-[#1E2120] border border-[#444640] text-[#EEECE5] placeholder-[#B9B6AC]/40 focus:outline-none focus:border-[#A65B3D] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-sm font-bold text-sm bg-[#A65B3D] text-[#EEECE5] hover:bg-[#A65B3D]/90 transition-colors shadow-sm cursor-pointer flex items-center justify-center gap-2"
                  >
                    <IconSend className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
