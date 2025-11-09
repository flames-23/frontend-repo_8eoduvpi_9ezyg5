import { Wrench, Bot, Cloud, BarChart3, Layers, Database, Shield, Globe, MessageSquare } from 'lucide-react';

const items = [
  {
    title: 'AI Automation',
    icon: Bot,
    desc: 'Cognitive agents, RPA, and workflow orchestration to eliminate repetitive tasks and boost productivity.',
  },
  {
    title: 'Cloud Automation',
    icon: Cloud,
    desc: 'IaC, autoscaling, and cost governance across AWS, Azure, and GCP with enterprise security.',
  },
  {
    title: 'Chatbots & Integrations',
    icon: MessageSquare,
    desc: 'Omnichannel assistants integrated with your CRM, support desk, and data sources.',
  },
  {
    title: 'BI Dashboards',
    icon: BarChart3,
    desc: 'Grafana and Power BI implementations for real-time insights and self-serve analytics.',
  },
  {
    title: 'ETL & Data Pipelines',
    icon: Layers,
    desc: 'Pentaho and Apache NiFi based ingestion, transformation, and quality monitoring.',
  },
  {
    title: 'Database Engineering',
    icon: Database,
    desc: 'Architecture, optimization, migrations, and 24x7 managed support for critical data.',
  },
  {
    title: 'Product Engineering',
    icon: Wrench,
    desc: 'Web, mobile, desktop, and API-first software built with scalable architectures.',
  },
  {
    title: 'Cloud & DevOps',
    icon: Shield,
    desc: 'Cloud migration, platform engineering, security hardening, CI/CD and SRE.',
  },
  {
    title: 'Global Delivery',
    icon: Globe,
    desc: 'Nearshore and offshore models with outcome-based SLAs and 24x7 coverage.',
  },
];

export default function Services() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Products & Services</h2>
          <p className="mt-3 text-slate-600">A full-stack portfolio across automation, data, software engineering, and cloud.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ title, icon: Icon, desc }) => (
            <div key={title} className="group rounded-2xl border border-slate-200 p-6 bg-white hover:shadow-xl hover:-translate-y-0.5 transition-all">
              <div className="h-10 w-10 rounded-xl grid place-items-center bg-gradient-to-tr from-violet-600 to-sky-500 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
