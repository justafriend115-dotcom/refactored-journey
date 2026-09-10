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
    <div className="min-h-screen bg-charcoal-900 flex overflow-hidden">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-charcoal-800 border-b border-gold-700/30 px-4 py-3">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-bold text-gradient-gold">REFACTORED JOURNEY</h1>
          <button className="text-gold-500 p-2">☰</button>
        </div>
      </div>

      {/* Sidebar Navigation - Desktop */}
      <aside className="hidden lg:flex flex-col w-72 bg-charcoal-800 border-r-2 border-gold-700 p-6 relative overflow-y-auto">
        {/* Ornate header background */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-ornate-pattern opacity-20 pointer-events-none"></div>
        
        <div className="mb-8 relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 via-gold-500 to-gold-700 flex items-center justify-center text-charcoal-900 font-black text-xl gold-glow">
              RJ
            </div>
            <div>
              <h1 className="text-xl font-black text-gradient-gold tracking-wide">REFACTORED</h1>
              <p className="text-xs text-gold-600 font-semibold tracking-wider">JOURNEY</p>
            </div>
          </div>
          <p className="text-sm text-grey-400 italic border-l-2 border-gold-600 pl-3 mt-3">Navigate the path from legacy to modern</p>
        </div>
        
        <nav className="space-y-3 relative z-10 flex-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`group flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-300 relative overflow-hidden ${
                location.pathname === item.path
                  ? 'bg-gradient-to-r from-gold-600/30 to-gold-700/20 text-gold-400 border-2 border-gold-500 shadow-gold'
                  : 'text-grey-400 hover:bg-charcoal-700/70 hover:text-gold-300 border-2 border-transparent'
              }`}
            >
              {/* Active indicator glow */}
              {location.pathname === item.path && (
                <div className="absolute inset-0 bg-gradient-to-r from-gold-500/10 to-transparent animate-pulse"></div>
              )}
              <span className="text-2xl group-hover:scale-110 transition-transform duration-200">{item.icon}</span>
              <span className="font-bold text-sm tracking-wide">{item.label}</span>
              {location.pathname === item.path && (
                <span className="ml-auto text-gold-400">→</span>
              )}
            </Link>
          ))}
        </nav>

        <div className="mt-6 relative z-10">
          <div className="bg-gradient-to-br from-charcoal-900 to-charcoal-800 rounded-2xl p-5 border-2 border-gold-700/50 shadow-ornate relative overflow-hidden">
            {/* Decorative corners */}
            <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-gold-500"></div>
            <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-gold-500"></div>
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-gold-500"></div>
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-gold-500"></div>
            
            <p className="text-xs text-grey-400 uppercase tracking-widest mb-2">Current Project</p>
            <p className="font-bold text-gold-300 text-lg">Legacy Monolith v2.3</p>
            <div className="mt-4">
              <div className="flex justify-between text-xs text-grey-400 mb-2">
                <span className="uppercase tracking-wider">Progress</span>
                <span className="text-gold-400 font-bold">37%</span>
              </div>
              <div className="w-full bg-charcoal-900 rounded-full h-3 border border-gold-700/30 overflow-hidden">
                <div className="bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 h-3 rounded-full shadow-glow animate-pulse-slow" style={{ width: '37%' }}></div>
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <span className="px-2 py-1 bg-gold-600/20 text-gold-400 text-xs rounded border border-gold-700/30">🔴 High Risk</span>
              <span className="px-2 py-1 bg-gold-600/20 text-gold-400 text-xs rounded border border-gold-700/30">⏳ 6 Months</span>
            </div>
          </div>
        </div>
        
        {/* Bottom decorative element */}
        <div className="mt-6 h-2 bg-gradient-to-r from-gold-700 via-gold-500 to-gold-700 rounded-full opacity-50"></div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-auto pt-16 lg:pt-0">
        <header className="bg-charcoal-800/80 backdrop-blur-md border-b-2 border-gold-700/30 px-6 lg:px-8 py-4 sticky top-0 lg:top-0 z-40">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl lg:text-2xl font-black text-gold-400 uppercase tracking-wider">
                {navItems.find(item => item.path === location.pathname)?.label || 'Dashboard'}
              </h2>
              <p className="text-xs lg:text-sm text-grey-400 mt-1 hidden sm:block">
                {location.pathname === '/' && 'Welcome to your modernization journey'}
                {location.pathname === '/terrain' && 'Visual dependency mapping and coupling analysis'}
                {location.pathname === '/strangler' && 'Guided microservice extraction workflows'}
                {location.pathname === '/equivalence' && 'Behavioral testing and shadow comparison'}
                {location.pathname === '/dashboard' && 'Track progress, milestones, and ROI'}
              </p>
            </div>
            <div className="flex items-center gap-3 lg:gap-4">
              <button className="hidden sm:flex px-4 lg:px-5 py-2 bg-gradient-to-r from-gold-600/30 to-gold-700/20 text-gold-400 rounded-xl hover:from-gold-600/40 hover:to-gold-700/30 transition-all duration-300 border border-gold-600/30 font-semibold text-sm shadow-ornate">
                📥 Import Codebase
              </button>
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-gold-400 via-gold-500 to-gold-700 flex items-center justify-center text-charcoal-900 font-black text-sm lg:text-base gold-glow border-2 border-gold-300">
                RJ
              </div>
            </div>
          </div>
        </header>

        <div className="p-4 lg:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
