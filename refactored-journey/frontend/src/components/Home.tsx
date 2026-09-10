import { Link } from 'react-router-dom'

const features = [
  {
    icon: '🗺️',
    title: 'Terrain Mapper',
    description: 'Visual dependency graphing that shows coupling hotspots and impact analysis',
    path: '/terrain',
    accent: 'bg-[#FF6B00]',
  },
  {
    icon: '🌿',
    title: 'Strangler Fig Orchestrator',
    description: 'Step-by-step guided workflows for gradual microservice extraction',
    path: '/strangler',
    accent: 'bg-[#B8A8E8]',
  },
  {
    icon: '⚖️',
    title: 'Equivalence Engine',
    description: 'AI-powered behavioral testing to prove new code matches old behavior',
    path: '/equivalence',
    accent: 'bg-[#FF6B00]',
  },
  {
    icon: '📊',
    title: 'Journey Dashboard',
    description: 'Track progress, milestones, and ROI for stakeholders',
    path: '/dashboard',
    accent: 'bg-[#B8A8E8]',
  },
]

const stats = [
  { label: 'Modules Analyzed', value: '847' },
  { label: 'Dependencies Mapped', value: '2,341' },
  { label: 'Services Extracted', value: '12' },
  { label: 'Tests Generated', value: '1,893' },
]

export default function Home() {
  return (
    <div className="space-y-8 fade-in">
      {/* Manifesto Header */}
      <section className="py-8 border-b-2 border-black mb-8">
        <span className="annotation mb-4 block">[001] WELCOME MODULE</span>
        <h1 className="manifesto-header leading-tight">
          Navigate the path<br />
          <span className="text-[#FF6B00]">from legacy</span><br />
          to modern
        </h1>
        <p className="mt-6 text-lg max-w-3xl font-mono-tiny text-[#333333]">
          REFACTORED JOURNEY is an AI-assisted visual orchestration platform designed to make 
          massive software modernization manageable, transparent, and enjoyable. No big bang rewrites. 
          Just guided strangulation, visual dependencies, and proven equivalence.
        </p>
      </section>

      {/* Stats Grid - Bento Box Style */}
      <section className="bento-grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="nb-box bg-white p-6 text-center">
            <div className="text-4xl font-bold text-black mb-2 font-serif">{stat.value}</div>
            <div className="font-mono-tiny text-[#333333]">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Core Features */}
      <section>
        <span className="annotation mb-4 block">[002] CORE FEATURES</span>
        <h2 className="text-4xl font-serif font-bold mb-6 text-black">Core Features</h2>
        <div className="bento-grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <Link
              key={feature.title}
              to={feature.path}
              className="nb-box bg-white p-6 group"
            >
              <div className={`w-10 h-10 ${feature.accent} border-2 border-black flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-black mb-2 group-hover:text-[#FF6B00] transition-colors">
                {feature.title}
              </h3>
              <p className="text-[#333333] font-mono-tiny leading-relaxed">
                {feature.description}
              </p>
              <div className="mt-4 font-mono-tiny text-black font-bold flex items-center gap-2">
                EXPLORE →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Recent Activity */}
      <section className="nb-box bg-white p-6">
        <span className="annotation mb-4 block">[003] RECENT ACTIVITY</span>
        <h3 className="text-2xl font-serif font-bold text-black mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {[
            { action: 'Dependency graph updated', module: 'PaymentService', time: '2 hours ago', status: 'success' },
            { action: 'New equivalence test created', module: 'UserAuth', time: '5 hours ago', status: 'success' },
            { action: 'Coupling hotspot detected', module: 'OrderProcessor', time: '1 day ago', status: 'warning' },
            { action: 'Service extraction completed', module: 'InventoryAPI', time: '2 days ago', status: 'success' },
          ].map((activity, index) => (
            <div key={index} className="flex items-center gap-4 p-3 bg-[#F5EBE0] border border-black">
              <div className={`w-3 h-3 border-2 border-black ${
                activity.status === 'success' ? 'bg-[#FF6B00]' : 'bg-[#B8A8E8]'
              }`} />
              <div className="flex-1">
                <p className="text-black font-bold">{activity.action}</p>
                <p className="font-mono-tiny text-[#333333]">{activity.module}</p>
              </div>
              <div className="font-mono-tiny text-[#333333]">{activity.time}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
