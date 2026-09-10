import { Outlet, Link, useLocation } from 'react-router-dom'

const navItems = [
  { path: '/', label: 'Home', icon: '🏠' },
  { path: '/terrain', label: 'Terrain Mapper', icon: '🗺️' },
  { path: '/strangler', label: 'Strangler Fig', icon: '🌿' },
  { path: '/equivalence', label: 'Equivalence Engine', icon: '⚖️' },
  { path: '/dashboard', label: 'Journey Dashboard', icon: '📊' },
]

export default function Layout() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-dark-bg flex">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-dark-card border-r border-gray-700 p-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-primary mb-2">Refactored Journey</h1>
          <p className="text-sm text-gray-400">Navigate the path from legacy to modern</p>
        </div>
        
        <nav className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                location.pathname === item.path
                  ? 'bg-primary/20 text-primary border-l-4 border-primary'
                  : 'text-gray-400 hover:bg-gray-700/50 hover:text-white'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-6 left-6 right-6">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg p-4 border border-primary/30">
            <p className="text-sm text-gray-300">Current Project</p>
            <p className="font-semibold text-white mt-1">Legacy Monolith v2.3</p>
            <div className="mt-3">
              <div className="flex justify-between text-xs text-gray-400 mb-1">
                <span>Progress</span>
                <span>37%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full" style={{ width: '37%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-auto">
        <header className="bg-dark-card/50 backdrop-blur-sm border-b border-gray-700 px-8 py-4 sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-white">
                {navItems.find(item => item.path === location.pathname)?.label || 'Dashboard'}
              </h2>
              <p className="text-sm text-gray-400 mt-1">
                {location.pathname === '/' && 'Welcome to your modernization journey'}
                {location.pathname === '/terrain' && 'Visual dependency mapping and coupling analysis'}
                {location.pathname === '/strangler' && 'Guided microservice extraction workflows'}
                {location.pathname === '/equivalence' && 'Behavioral testing and shadow comparison'}
                {location.pathname === '/dashboard' && 'Track progress, milestones, and ROI'}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button className="px-4 py-2 bg-primary/20 text-primary rounded-lg hover:bg-primary/30 transition-colors">
                📥 Import Codebase
              </button>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
                RJ
              </div>
            </div>
          </div>
        </header>

        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
