import { useState } from 'react';

export default function ContactCareers() {
  const [tab, setTab] = useState('contact');

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1">
            <div className="inline-flex rounded-full p-1 bg-white shadow-sm">
              <button onClick={() => setTab('contact')} className={`px-4 py-2 text-sm font-medium rounded-full ${tab==='contact' ? 'bg-slate-900 text-white' : 'text-slate-700'}`}>Contact us</button>
              <button onClick={() => setTab('careers')} className={`px-4 py-2 text-sm font-medium rounded-full ${tab==='careers' ? 'bg-slate-900 text-white' : 'text-slate-700'}`}>Careers</button>
            </div>

            {tab === 'contact' ? (
              <div className="mt-6 rounded-2xl bg-white p-6 border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900">Tell us about your goals</h3>
                <p className="mt-2 text-sm text-slate-600">We’ll get back within 24 hours.</p>
                <form className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input required placeholder="Full name" className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400" />
                  <input required type="email" placeholder="Work email" className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400" />
                  <input placeholder="Company" className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400" />
                  <input placeholder="Phone" className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400" />
                  <textarea rows={5} placeholder="How can we help?" className="sm:col-span-2 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400" />
                  <button className="sm:col-span-2 px-5 py-3 rounded-lg bg-slate-900 text-white font-semibold hover:bg-slate-800">Send message</button>
                </form>
              </div>
            ) : (
              <div id="careers" className="mt-6 rounded-2xl bg-white p-6 border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900">Apply to Effred</h3>
                <p className="mt-2 text-sm text-slate-600">Share your resume and the role you’re excited about.</p>
                <form className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input required placeholder="Full name" className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400" />
                  <input required type="email" placeholder="Email" className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400" />
                  <input required placeholder="Role applying for" className="sm:col-span-2 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400" />
                  <textarea rows={5} placeholder="Short description" className="sm:col-span-2 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400" />
                  <input type="file" accept=".pdf,.doc,.docx" className="sm:col-span-2 w-full rounded-lg border border-slate-300 px-3 py-2 bg-white" />
                  <button className="sm:col-span-2 px-5 py-3 rounded-lg bg-slate-900 text-white font-semibold hover:bg-slate-800">Submit application</button>
                </form>
              </div>
            )}
          </div>

          <div className="w-full lg:w-[420px]">
            <div className="rounded-2xl bg-gradient-to-br from-violet-600 to-sky-500 p-6 text-white">
              <h4 className="text-lg font-semibold">Why Effred</h4>
              <ul className="mt-4 space-y-3 text-sm/6">
                <li>• 60% workload reduction with automation</li>
                <li>• Cloud-native engineering and DevOps excellence</li>
                <li>• Enterprise-grade security and governance</li>
                <li>• Outcome-based delivery with measurable ROI</li>
              </ul>
            </div>

            <div className="mt-6 rounded-2xl bg-white p-6 border border-slate-200">
              <h4 className="text-lg font-semibold text-slate-900">Global presence</h4>
              <p className="mt-2 text-sm text-slate-600">We partner across time zones with 24x7 support coverage.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
