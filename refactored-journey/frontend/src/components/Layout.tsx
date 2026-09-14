import { Outlet, Link, useLocation } from 'react-router-dom'
import { useApp } from '../context/AppContext'

const navItems = [
  { path: '/', label: 'home', icon: '🏠' },
  { path: '/terrain', label: 'terrain', icon: '🗺️' },
  { path: '/strangler', label: 'strangler', icon: '🌿' },
  { path: '/equivalence', label: 'equivalence', icon: '⚖️' },
  { path: '/dashboard', label: 'dashboard', icon: '📊' },
]

export default function Layout() {
  const location = useLocation()
  const { t, darkMode, toggleDarkMode, language, setLanguage } = useApp()

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] flex overflow-hidden transition-colors duration-300">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[var(--bg-secondary)] border-b border-[var(--border-color)] px-4 py-3">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-black text-[var(--text-primary)]">REFACTORED JOURNEY</h1>
          <div className="flex items-center gap-2">
            <button onClick={toggleDarkMode} className="text-[var(--text-primary)] p-2">
              {darkMode ? '☀️' : '🌙'}
            </button>
            <button className="text-[var(--text-primary)] p-2">☰</button>
          </div>
        </div>
      </div>

      {/* Sidebar Navigation - Desktop */}
      <aside className="hidden lg:flex flex-col w-72 bg-[var(--bg-secondary)] border-r-2 border-[var(--border-color)] p-6 relative overflow-y-auto">
        <div className="mb-8 relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-safety to-orange-bright flex items-center justify-center text-white font-black text-xl shadow-lg">
              RJ
            </div>
            <div>
              <h1 className="text-xl font-black text-[var(--text-primary)] tracking-wide">REFACTORED</h1>
              <p className="text-xs text-[var(--text-muted)] font-semibold tracking-wider">JOURNEY</p>
            </div>
          </div>
          <p className="text-sm text-[var(--text-secondary)] italic border-l-2 border-orange-safety pl-3 mt-3">{t.hero.title}</p>
        </div>
        
        <nav className="space-y-3 relative z-10 flex-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`group flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-300 relative overflow-hidden border-2 ${
                location.pathname === item.path
                  ? 'bg-orange-safety/10 text-orange-safety border-orange-safety shadow-lg'
                  : 'text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)] hover:text-orange-safety border-transparent'
              }`}
            >
              <span className="text-2xl group-hover:scale-110 transition-transform duration-200">{item.icon}</span>
              <span className="font-bold text-sm tracking-wide uppercase">{t.nav[item.label as keyof typeof t.nav]}</span>
              {location.pathname === item.path && (
                <span className="ml-auto">→</span>
              )}
            </Link>
          ))}
        </nav>

        <div className="mt-6 space-y-4 relative z-10">
          {/* Language Selector */}
          <div className="bg-[var(--bg-tertiary)] rounded-xl p-4 border-2 border-[var(--border-color)]">
            <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-2">Language / Idioma</p>
            <div className="flex gap-2">
              <button
                onClick={() => setLanguage('en')}
                className={`flex-1 py-2 px-3 rounded-lg text-sm font-bold transition-all ${
                  language === 'en'
                    ? 'bg-orange-safety text-white'
                    : 'bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:bg-orange-safety/20'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('es')}
                className={`flex-1 py-2 px-3 rounded-lg text-sm font-bold transition-all ${
                  language === 'es'
                    ? 'bg-lavender text-white'
                    : 'bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:bg-lavender/20'
                }`}
              >
                ES
              </button>
            </div>
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="w-full bg-[var(--bg-tertiary)] rounded-xl p-4 border-2 border-[var(--border-color)] hover:border-orange-safety transition-all group"
          >
            <div className="flex items-center justify-between">
              <div className="text-left">
                <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider">Theme</p>
                <p className="font-bold text-[var(--text-primary)]">{darkMode ? 'Dark Mode' : 'Light Mode'}</p>
              </div>
              <span className="text-3xl group-hover:scale-110 transition-transform">{darkMode ? '🌙' : '☀️'}</span>
            </div>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 pt-16 lg:pt-0 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  )
}
