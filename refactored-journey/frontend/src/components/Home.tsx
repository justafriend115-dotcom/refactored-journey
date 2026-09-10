import { Link } from 'react-router-dom'

const features = [
  {
    icon: '🗺️',
    title: 'Terrain Mapper',
    description: 'Visual dependency graphing that shows coupling hotspots and impact analysis',
    path: '/terrain',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: '🌿',
    title: 'Strangler Fig Orchestrator',
    description: 'Step-by-step guided workflows for gradual microservice extraction',
    path: '/strangler',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: '⚖️',
    title: 'Equivalence Engine',
    description: 'AI-powered behavioral testing to prove new code matches old behavior',
    path: '/equivalence',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: '📊',
    title: 'Journey Dashboard',
    description: 'Track progress, milestones, and ROI for stakeholders',
    path: '/dashboard',
    color: 'from-orange-500 to-red-500',
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
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-2xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">
          Welcome to Your Modernization Journey
        </h2>
        <p className="text-lg text-gray-300 mb-6 max-w-3xl">
          Refactoring doesn't have to be chaotic. Navigate the path from legacy to modern with AI-assisted 
          visual orchestration, guided workflows, and mathematical proof of behavioral equivalence.
        </p>
        <div className="flex gap-4">
          <Link
            to="/terrain"
            className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            Start Mapping Terrain
          </Link>
          <Link
            to="/dashboard"
            className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors font-medium"
          >
            View Progress
          </Link>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-dark-card rounded-xl p-6 border border-gray-700 text-center">
            <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
            <div className="text-sm text-gray-400">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Features Grid */}
      <section>
        <h3 className="text-2xl font-bold text-white mb-6">Core Features</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <Link
              key={feature.title}
              to={feature.path}
              className="group bg-dark-card rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h4>
              <p className="text-gray-400">
                {feature.description}
              </p>
              <div className="mt-4 text-primary text-sm font-medium flex items-center gap-2">
                Explore →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Recent Activity */}
      <section className="bg-dark-card rounded-xl p-6 border border-gray-700">
        <h3 className="text-xl font-bold text-white mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {[
            { action: 'Dependency graph updated', module: 'PaymentService', time: '2 hours ago', status: 'success' },
            { action: 'New equivalence test created', module: 'UserAuth', time: '5 hours ago', status: 'success' },
            { action: 'Coupling hotspot detected', module: 'OrderProcessor', time: '1 day ago', status: 'warning' },
            { action: 'Service extraction completed', module: 'InventoryAPI', time: '2 days ago', status: 'success' },
          ].map((activity, index) => (
            <div key={index} className="flex items-center gap-4 p-3 bg-gray-800/50 rounded-lg">
              <div className={`w-3 h-3 rounded-full ${
                activity.status === 'success' ? 'bg-secondary' : 'bg-warning'
              }`} />
              <div className="flex-1">
                <p className="text-white font-medium">{activity.action}</p>
                <p className="text-sm text-gray-400">{activity.module}</p>
              </div>
              <div className="text-sm text-gray-500">{activity.time}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
