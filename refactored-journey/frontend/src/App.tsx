import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Layout from './components/Layout'
import TerrainMapper from './components/TerrainMapper'
import StranglerOrchestrator from './components/StranglerOrchestrator'
import EquivalenceEngine from './components/EquivalenceEngine'
import JourneyDashboard from './components/JourneyDashboard'
import Home from './components/Home'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="terrain" element={<TerrainMapper />} />
            <Route path="strangler" element={<StranglerOrchestrator />} />
            <Route path="equivalence" element={<EquivalenceEngine />} />
            <Route path="dashboard" element={<JourneyDashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
