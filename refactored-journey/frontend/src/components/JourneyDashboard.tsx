interface Milestone {
  id: string
  title: string
  description: string
  targetDate: string
  actualDate?: string
  status: 'completed' | 'on-track' | 'at-risk' | 'delayed'
  progress: number
  impact: 'high' | 'medium' | 'low'
}

interface DebtItem {
  id: string
  category: string
  description: string
  estimatedHours: number
  priority: 'critical' | 'high' | 'medium' | 'low'
  status: 'identified' | 'planned' | 'in-progress' | 'resolved'
}

const mockMilestones: Milestone[] = [
  { id: 'm1', title: 'Phase 1: Authentication Service', description: 'Extract user authentication to dedicated microservice', targetDate: '2024-01-15', actualDate: '2024-01-12', status: 'completed', progress: 100, impact: 'high' },
  { id: 'm2', title: 'Phase 2: Payment Processing', description: 'Migrate payment logic to new service with zero downtime', targetDate: '2024-02-28', status: 'on-track', progress: 73, impact: 'high' },
  { id: 'm3', title: 'Phase 3: Order Management', description: 'Decouple order processing from monolith', targetDate: '2024-04-15', status: 'on-track', progress: 45, impact: 'medium' },
  { id: 'm4', title: 'Phase 4: Inventory System', description: 'Implement event-driven inventory management', targetDate: '2024-06-01', status: 'at-risk', progress: 22, impact: 'medium' },
  { id: 'm5', title: 'Phase 5: Reporting & Analytics', description: 'Complete data warehouse migration', targetDate: '2024-08-15', status: 'delayed', progress: 8, impact: 'low' },
]

const mockDebtItems: DebtItem[] = [
  { id: 'd1', category: 'Architecture', description: 'Remove circular dependencies in UserAuth module', estimatedHours: 16, priority: 'critical', status: 'resolved' },
  { id: 'd2', category: 'Testing', description: 'Add integration tests for PaymentService', estimatedHours: 24, priority: 'high', status: 'in-progress' },
  { id: 'd3', category: 'Documentation', description: 'Document API contracts for all extracted services', estimatedHours: 12, priority: 'medium', status: 'planned' },
  { id: 'd4', category: 'Performance', description: 'Optimize database queries in OrderProcessor', estimatedHours: 20, priority: 'high', status: 'identified' },
  { id: 'd5', category: 'Security', description: 'Implement rate limiting on public APIs', estimatedHours: 8, priority: 'critical', status: 'planned' },
  { id: 'd6', category: 'Code Quality', description: 'Refactor legacy notification system', estimatedHours: 32, priority: 'medium', status: 'identified' },
]

const journeyData = {
  startDate: '2023-09-01',
  totalPhases: 5,
  completedPhases: 1,
  overallProgress: 37,
  riskReduction: 42,
  debtPaidDown: 28,
  roi: {
    costSavings: 145000,
    productivityGain: 23,
    incidentReduction: 67,
  }
}

export default function JourneyDashboard() {
  return (
    <div className="space-y-6 fade-in">
      {/* Executive Summary */}
      <div className="bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 rounded-2xl p-8 border border-gray-700">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Journey Progress Dashboard</h3>
            <p className="text-gray-300">Legacy Monolith → Microservices Architecture</p>
            <p className="text-sm text-gray-400 mt-1">
              Started: {journeyData.startDate} • {Math.floor((new Date().getTime() - new Date(journeyData.startDate).getTime()) / (1000 * 60 * 60 * 24))} days in progress
            </p>
          </div>
          <div className="text-right">
            <div className="text-4xl font-bold text-primary mb-2">{journeyData.overallProgress}%</div>
            <p className="text-sm text-gray-400">Overall Completion</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="bg-dark-card/50 rounded-xl p-4 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">🎯</span>
              <span className="text-sm text-gray-400">Phases Complete</span>
            </div>
            <p className="text-2xl font-bold text-white">
              {journeyData.completedPhases} / {journeyData.totalPhases}
            </p>
            <div className="mt-2 w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-primary to-accent h-2 rounded-full"
                style={{ width: `${(journeyData.completedPhases / journeyData.totalPhases) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="bg-dark-card/50 rounded-xl p-4 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">📉</span>
              <span className="text-sm text-gray-400">Risk Reduction</span>
            </div>
            <p className="text-2xl font-bold text-green-400">{journeyData.riskReduction}%</p>
            <p className="text-xs text-gray-500 mt-1">System stability improved significantly</p>
          </div>

          <div className="bg-dark-card/50 rounded-xl p-4 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">💰</span>
              <span className="text-sm text-gray-400">ROI Delivered</span>
            </div>
            <p className="text-2xl font-bold text-secondary">${journeyData.roi.costSavings.toLocaleString()}</p>
            <p className="text-xs text-gray-500 mt-1">Cost savings + productivity gains</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Milestones Timeline */}
        <div className="col-span-2 space-y-4">
          <h4 className="text-lg font-semibold text-white">Milestone Timeline</h4>
          
          {mockMilestones.map((milestone, index) => (
            <div key={milestone.id} className="relative">
              {/* Connector Line */}
              {index < mockMilestones.length - 1 && (
                <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gray-700"></div>
              )}
              
              <div className={`bg-dark-card rounded-xl p-5 border transition-all duration-300 ${
                milestone.status === 'completed' ? 'border-green-500/50 bg-green-500/5' :
                milestone.status === 'on-track' ? 'border-blue-500/50' :
                milestone.status === 'at-risk' ? 'border-yellow-500/50' :
                'border-red-500/50'
              }`}>
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                    milestone.status === 'completed' ? 'bg-green-500 text-white' :
                    milestone.status === 'on-track' ? 'bg-blue-500 text-white' :
                    milestone.status === 'at-risk' ? 'bg-yellow-500 text-white' :
                    'bg-red-500 text-white'
                  }`}>
                    {milestone.status === 'completed' ? '✓' : `${milestone.progress}%`}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-semibold text-white">{milestone.title}</h5>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        milestone.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                        milestone.status === 'on-track' ? 'bg-blue-500/20 text-blue-400' :
                        milestone.status === 'at-risk' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {milestone.status.replace('-', ' ').toUpperCase()}
                      </span>
                    </div>
                    
                    <p className="text-sm text-gray-400 mb-3">{milestone.description}</p>
                    
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                      <span>📅 Target: {new Date(milestone.targetDate).toLocaleDateString()}</span>
                      {milestone.actualDate && (
                        <span className="text-green-400">✓ Completed: {new Date(milestone.actualDate).toLocaleDateString()}</span>
                      )}
                      <span className={`px-2 py-0.5 rounded ${
                        milestone.impact === 'high' ? 'bg-red-500/20 text-red-400' :
                        milestone.impact === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-gray-700 text-gray-400'
                      }`}>
                        {milestone.impact.toUpperCase()} IMPACT
                      </span>
                    </div>
                    
                    {milestone.progress < 100 && (
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-500 ${
                            milestone.progress >= 70 ? 'bg-green-500' :
                            milestone.progress >= 40 ? 'bg-blue-500' :
                            'bg-yellow-500'
                          }`}
                          style={{ width: `${milestone.progress}%` }}
                        ></div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Debt Tracker */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white">Technical Debt Tracker</h4>
          
          <div className="bg-dark-card rounded-xl p-4 border border-gray-700">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">Debt Paid Down</span>
                <span className="text-green-400 font-bold">{journeyData.debtPaidDown}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div className="bg-gradient-to-r from-green-500 to-emerald-400 h-3 rounded-full" style={{ width: `${journeyData.debtPaidDown}%` }}></div>
              </div>
            </div>

            <div className="space-y-2">
              {mockDebtItems.map((item) => (
                <div key={item.id} className="p-3 bg-gray-800/50 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-white">{item.category}</span>
                    <span className={`text-xs px-2 py-0.5 rounded ${
                      item.priority === 'critical' ? 'bg-red-500/20 text-red-400' :
                      item.priority === 'high' ? 'bg-orange-500/20 text-orange-400' :
                      item.priority === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-gray-700 text-gray-400'
                    }`}>
                      {item.priority}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mb-2">{item.description}</p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500">⏱️ {item.estimatedHours}h</span>
                    <span className={`capitalize ${
                      item.status === 'resolved' ? 'text-green-400' :
                      item.status === 'in-progress' ? 'text-blue-400' :
                      'text-gray-500'
                    }`}>
                      {item.status.replace('-', ' ')}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-4 px-4 py-2 bg-primary/20 text-primary rounded-lg hover:bg-primary/30 transition-colors text-sm">
              View All Debt Items
            </button>
          </div>

          {/* Stakeholder Metrics */}
          <div className="bg-gradient-to-br from-accent/10 to-purple-500/10 rounded-xl p-4 border border-accent/30">
            <h4 className="font-semibold text-white mb-3">Stakeholder Metrics</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Productivity Gain</span>
                <span className="text-green-400 font-bold">+{journeyData.roi.productivityGain}%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Incident Reduction</span>
                <span className="text-green-400 font-bold">-{journeyData.roi.incidentReduction}%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Deployment Frequency</span>
                <span className="text-blue-400 font-bold">5x increase</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Lead Time</span>
                <span className="text-green-400 font-bold">-62%</span>
              </div>
            </div>
          </div>

          {/* Export Options */}
          <div className="bg-dark-card rounded-xl p-4 border border-gray-700">
            <h4 className="font-semibold text-white mb-3">Export Reports</h4>
            <div className="space-y-2">
              <button className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors text-sm text-left">
                📊 Executive Summary PDF
              </button>
              <button className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors text-sm text-left">
                📈 ROI Analysis Spreadsheet
              </button>
              <button className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors text-sm text-left">
                📋 Technical Debt Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
