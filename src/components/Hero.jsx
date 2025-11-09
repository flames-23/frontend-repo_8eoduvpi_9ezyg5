import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[80vh] md:h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur text-xs font-semibold text-slate-700">
            <span className="h-2 w-2 rounded-full bg-emerald-500" /> New Gen Automation
          </div>
          <h1 className="mt-4 text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            Automate. Accelerate. Lead.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-700 max-w-xl">
            Effred Technology designs intelligent automation that removes up to 60% of repetitive work. We engineer software, data pipelines, and cloud systems that scale.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#contact" className="px-5 py-3 rounded-lg bg-slate-900 text-white font-semibold hover:bg-slate-800">Start a project</a>
            <a href="#products" className="px-5 py-3 rounded-lg bg-white/80 backdrop-blur text-slate-900 font-semibold hover:bg-white">Explore solutions</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/40" />
    </section>
  );
}
