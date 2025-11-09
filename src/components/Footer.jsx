export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-violet-600 to-sky-500 grid place-items-center text-white font-bold">E</div>
            <p className="mt-3 text-slate-600">Effred Technology — New Gen Automation for modern enterprises.</p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">Offerings</h4>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li>AI Automation</li>
              <li>Cloud & DevOps</li>
              <li>Data & Analytics</li>
              <li>Product Engineering</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">Company</h4>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li>About</li>
              <li>Why Effred</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">Contact</h4>
            <p className="mt-3 text-slate-600">hello@effred.tech</p>
            <p className="text-slate-600">+1 (000) 000-0000</p>
          </div>
        </div>
        <div className="mt-10 text-xs text-slate-500">© {new Date().getFullYear()} Effred Technology. All rights reserved.</div>
      </div>
    </footer>
  );
}
