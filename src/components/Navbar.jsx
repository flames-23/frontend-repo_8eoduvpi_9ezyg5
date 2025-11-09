import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Rocket, Cloud, Bot, Layers, BarChart3, Database, Shield, MessageSquare } from 'lucide-react';

function NavItem({ children }) {
  return (
    <li className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors cursor-pointer">
      {children}
    </li>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const megaRef = useRef(null);

  useEffect(() => {
    function onClick(e) {
      if (megaRef.current && !megaRef.current.contains(e.target)) {
        setMegaOpen(false);
      }
    }
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-violet-600 to-sky-500 grid place-items-center text-white font-bold">
              E
            </div>
            <span className="text-xl font-semibold tracking-tight text-slate-900">Effred Technology</span>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            <div
              className="relative"
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
            >
              <button
                onClick={() => setMegaOpen(v => !v)}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors"
              >
                Products & Services <ChevronDown size={16} className={`transition-transform ${megaOpen ? 'rotate-180' : ''}`} />
              </button>

              {megaOpen && (
                <div ref={megaRef} className="absolute left-0 mt-2 w-[800px] bg-white border border-slate-200 shadow-xl rounded-xl p-6 grid grid-cols-3 gap-6">
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">Automation</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 cursor-pointer">
                        <Bot className="h-5 w-5 text-violet-600 mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold text-slate-900">AI Automation</p>
                          <p className="text-xs text-slate-600">Reduce 60% workload with intelligent agents and workflows.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 cursor-pointer">
                        <Cloud className="h-5 w-5 text-sky-600 mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold text-slate-900">Cloud Automation</p>
                          <p className="text-xs text-slate-600">Provision, scale, and secure across AWS, Azure, and GCP.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 cursor-pointer">
                        <MessageSquare className="h-5 w-5 text-emerald-600 mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold text-slate-900">Chatbots & Integrations</p>
                          <p className="text-xs text-slate-600">Omnichannel assistants for support and sales.</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">Data & Analytics</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 cursor-pointer">
                        <BarChart3 className="h-5 w-5 text-amber-600 mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold text-slate-900">BI Dashboards</p>
                          <p className="text-xs text-slate-600">Grafana & Power BI for real-time decision making.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 cursor-pointer">
                        <Layers className="h-5 w-5 text-rose-600 mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold text-slate-900">ETL & Pipelines</p>
                          <p className="text-xs text-slate-600">Pentaho and Apache NiFi powered data flows.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 cursor-pointer">
                        <Database className="h-5 w-5 text-indigo-600 mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold text-slate-900">Database Engineering</p>
                          <p className="text-xs text-slate-600">Design, tuning, migrations, and 24x7 support.</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">Software & Cloud</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 cursor-pointer">
                        <Rocket className="h-5 w-5 text-fuchsia-600 mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold text-slate-900">Product Engineering</p>
                          <p className="text-xs text-slate-600">Web, mobile, desktop, API-first development.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 cursor-pointer">
                        <Shield className="h-5 w-5 text-teal-600 mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold text-slate-900">Cloud & DevOps</p>
                          <p className="text-xs text-slate-600">Migration, security, engineering, and SRE.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 cursor-pointer">
                        <Database className="h-5 w-5 text-purple-600 mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold text-slate-900">Interactive Portals</p>
                          <p className="text-xs text-slate-600">Custom company portals and self-service experiences.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <NavItem>Why Effred</NavItem>
            <NavItem>About</NavItem>
            <NavItem>Contact</NavItem>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#careers" className="text-sm font-medium text-slate-700 hover:text-slate-900">Careers</a>
            <a href="#contact" className="px-4 py-2 rounded-md bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800">Get in touch</a>
          </div>

          <button onClick={() => setOpen(v => !v)} className="md:hidden p-2 rounded-md hover:bg-slate-100">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-slate-200 py-3 space-y-2">
            <button onClick={() => setMegaOpen(v => !v)} className="w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-slate-100">
              <span className="text-sm font-medium text-slate-700">Products & Services</span>
              <ChevronDown size={16} className={`transition-transform ${megaOpen ? 'rotate-180' : ''}`} />
            </button>
            {megaOpen && (
              <div className="p-3 grid grid-cols-1 gap-3">
                <div className="bg-slate-50 rounded-lg p-3">
                  <p className="text-xs font-semibold text-slate-500 mb-2">Automation</p>
                  <div className="flex flex-col gap-2 text-sm">
                    <div className="flex items-center gap-2"><Bot className="h-4 w-4 text-violet-600" /> AI Automation</div>
                    <div className="flex items-center gap-2"><Cloud className="h-4 w-4 text-sky-600" /> Cloud Automation</div>
                    <div className="flex items-center gap-2"><MessageSquare className="h-4 w-4 text-emerald-600" /> Chatbots</div>
                  </div>
                </div>
                <div className="bg-slate-50 rounded-lg p-3">
                  <p className="text-xs font-semibold text-slate-500 mb-2">Data & Analytics</p>
                  <div className="flex flex-col gap-2 text-sm">
                    <div className="flex items-center gap-2"><BarChart3 className="h-4 w-4 text-amber-600" /> BI Dashboards</div>
                    <div className="flex items-center gap-2"><Layers className="h-4 w-4 text-rose-600" /> ETL Pipelines</div>
                    <div className="flex items-center gap-2"><Database className="h-4 w-4 text-indigo-600" /> Databases</div>
                  </div>
                </div>
                <div className="bg-slate-50 rounded-lg p-3">
                  <p className="text-xs font-semibold text-slate-500 mb-2">Software & Cloud</p>
                  <div className="flex flex-col gap-2 text-sm">
                    <div className="flex items-center gap-2"><Rocket className="h-4 w-4 text-fuchsia-600" /> Product Engineering</div>
                    <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-teal-600" /> Cloud & DevOps</div>
                    <div className="flex items-center gap-2"><Database className="h-4 w-4 text-purple-600" /> Interactive Portals</div>
                  </div>
                </div>
              </div>
            )}
            <div className="px-3 space-y-1">
              <a href="#why" className="block px-3 py-2 rounded-md hover:bg-slate-100 text-sm font-medium">Why Effred</a>
              <a href="#about" className="block px-3 py-2 rounded-md hover:bg-slate-100 text-sm font-medium">About</a>
              <a href="#contact" className="block px-3 py-2 rounded-md hover:bg-slate-100 text-sm font-medium">Contact</a>
              <a href="#careers" className="block px-3 py-2 rounded-md hover:bg-slate-100 text-sm font-medium">Careers</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
