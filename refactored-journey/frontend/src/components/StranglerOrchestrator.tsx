interface WorkflowStep {
  id: number
  title: string
  description: string
  status: 'pending' | 'in-progress' | 'completed' | 'blocked'
  checklist: { id: string; item: string; completed: boolean }[]
  estimatedHours: number
  dependencies: number[]
}

interface ExtractionCandidate {
  id: string
  moduleName: string
  currentCoupling: number
  proposedService: string
  complexity: 'low' | 'medium' | 'high'
  priority: number
  estimatedEffort: string
}

const mockWorkflow: WorkflowStep[] = [
  {
    id: 1,
    title: 'Identify Extraction Candidate',
    description: 'Select a module with low coupling and high cohesion for initial extraction',
    status: 'completed',
    checklist: [
      { id: 'c1', item: 'Analyze dependency graph for isolation candidates', completed: true },
      { id: 'c2', item: 'Review module boundaries and interfaces', completed: true },
      { id: 'c3', item: 'Document current behavior and test coverage', completed: true },
    ],
    estimatedHours: 8,
    dependencies: [],
  },
  {
    id: 2,
    title: 'Create Service Skeleton',
    description: 'Set up the new microservice structure with proper scaffolding',
    status: 'completed',
    checklist: [
      { id: 'c4', item: 'Initialize new service repository', completed: true },
      { id: 'c5', item: 'Configure CI/CD pipeline', completed: true },
      { id: 'c6', item: 'Set up monitoring and logging', completed: true },
      { id: 'c7', item: 'Define API contracts', completed: true },
    ],
    estimatedHours: 16,
    dependencies: [1],
  },
  {
    id: 3,
    title: 'Implement API Gateway Routing',
    description: 'Configure the API gateway to route traffic between old and new implementations',
    status: 'in-progress',
    checklist: [
      { id: 'c8', item: 'Update gateway configuration', completed: true },
      { id: 'c9', item: 'Implement feature flags for gradual rollout', completed: false },
      { id: 'c10', item: 'Set up canary deployment strategy', completed: false },
      { id: 'c11', item: 'Configure load balancing rules', completed: false },
    ],
    estimatedHours: 12,
    dependencies: [2],
  },
  {
    id: 4,
    title: 'Migrate Data Layer',
    description: 'Extract and migrate database dependencies to the new service',
    status: 'pending',
    checklist: [
      { id: 'c12', item: 'Analyze database schema dependencies', completed: false },
      { id: 'c13', item: 'Design new data access layer', completed: false },
      { id: 'c14', item: 'Implement data migration scripts', completed: false },
      { id: 'c15', item: 'Test data consistency', completed: false },
    ],
    estimatedHours: 24,
    dependencies: [3],
  },
  {
    id: 5,
    title: 'Run Equivalence Tests',
    description: 'Execute shadow testing to verify behavioral equivalence',
    status: 'pending',
    checklist: [
      { id: 'c16', item: 'Generate test cases from legacy behavior', completed: false },
      { id: 'c17', item: 'Configure parallel execution environment', completed: false },
      { id: 'c18', item: 'Run shadow tests and compare outputs', completed: false },
      { id: 'c19', item: 'Document any discrepancies', completed: false },
    ],
    estimatedHours: 20,
    dependencies: [4],
  },
  {
    id: 6,
    title: 'Gradual Traffic Migration',
    description: 'Slowly shift traffic from legacy to new service while monitoring',
    status: 'pending',
    checklist: [
      { id: 'c20', item: 'Start with 1% traffic', completed: false },
      { id: 'c21', item: 'Monitor error rates and latency', completed: false },
      { id: 'c22', item: 'Increase to 10%, then 25%, 50%, 100%', completed: false },
      { id: 'c23', item: 'Prepare rollback plan', completed: false },
    ],
    estimatedHours: 16,
    dependencies: [5],
  },
  {
    id: 7,
    title: 'Decommission Legacy Code',
    description: 'Remove the extracted functionality from the monolith',
    status: 'pending',
    checklist: [
      { id: 'c24', item: 'Verify all traffic is routed to new service', completed: false },
      { id: 'c25', item: 'Remove legacy code paths', completed: false },
      { id: 'c26', item: 'Clean up unused dependencies', completed: false },
      { id: 'c27', item: 'Update documentation', completed: false },
    ],
    estimatedHours: 8,
    dependencies: [6],
  },
]

const mockCandidates: ExtractionCandidate[] = [
  { id: 'c1', moduleName: 'NotificationService', currentCoupling: 2, proposedService: 'notification-api', complexity: 'low', priority: 1, estimatedEffort: '2 weeks' },
  { id: 'c2', moduleName: 'EmailTemplates', currentCoupling: 3, proposedService: 'template-service', complexity: 'low', priority: 2, estimatedEffort: '1 week' },
  { id: 'c3', moduleName: 'ReportGenerator', currentCoupling: 5, proposedService: 'reporting-api', complexity: 'medium', priority: 3, estimatedEffort: '3 weeks' },
  { id: 'c4', moduleName: 'UserPreferences', currentCoupling: 4, proposedService: 'preferences-service', complexity: 'medium', priority: 4, estimatedEffort: '2 weeks' },
  { id: 'c5', moduleName: 'AuditLogger', currentCoupling: 6, proposedService: 'audit-service', complexity: 'high', priority: 5, estimatedEffort: '4 weeks' },
]

export default function StranglerOrchestrator() {
  const totalSteps = mockWorkflow.length
  const completedSteps = mockWorkflow.filter(s => s.status === 'completed').length
  const progressPercentage = (completedSteps / totalSteps) * 100

  return (
    <div className="space-y-6 fade-in">
      {/* Progress Overview */}
      <div className="bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10 rounded-xl p-6 border border-green-500/30">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Strangler Fig Pattern Progress</h3>
            <p className="text-gray-300">Current Extraction: NotificationService → notification-api</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-green-400">{Math.round(progressPercentage)}%</div>
            <div className="text-sm text-gray-400">Complete</div>
          </div>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-3">
          <div 
            className="bg-gradient-to-r from-green-500 to-emerald-400 h-3 rounded-full transition-all duration-500"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <div className="flex justify-between mt-2 text-xs text-gray-400">
          <span>{completedSteps} of {totalSteps} steps completed</span>
          <span>Estimated remaining: 96 hours</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Workflow Steps */}
        <div className="col-span-2 space-y-4">
          <h4 className="text-lg font-semibold text-white">Extraction Workflow</h4>
          {mockWorkflow.map((step) => (
            <div 
              key={step.id}
              className={`bg-dark-card rounded-xl p-5 border transition-all duration-300 ${
                step.status === 'completed' ? 'border-green-500/50 bg-green-500/5' :
                step.status === 'in-progress' ? 'border-primary border-l-4' :
                step.status === 'blocked' ? 'border-red-500/50' :
                'border-gray-700'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                    step.status === 'completed' ? 'bg-green-500 text-white' :
                    step.status === 'in-progress' ? 'bg-primary text-white animate-pulse' :
                    step.status === 'blocked' ? 'bg-red-500 text-white' :
                    'bg-gray-700 text-gray-400'
                  }`}>
                    {step.status === 'completed' ? '✓' : step.id}
                  </div>
                  <div>
                    <h5 className="font-semibold text-white">{step.title}</h5>
                    <p className="text-sm text-gray-400">{step.description}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  step.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                  step.status === 'in-progress' ? 'bg-primary/20 text-primary' :
                  step.status === 'blocked' ? 'bg-red-500/20 text-red-400' :
                  'bg-gray-700 text-gray-400'
                }`}>
                  {step.status.replace('-', ' ').toUpperCase()}
                </span>
              </div>

              {/* Checklist */}
              <div className="ml-11 space-y-2">
                {step.checklist.map((item) => (
                  <label key={item.id} className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={item.completed}
                      readOnly
                      className="w-4 h-4 rounded border-gray-600 text-primary focus:ring-primary focus:ring-offset-0 bg-gray-700"
                    />
                    <span className={`text-sm ${
                      item.completed ? 'text-gray-400 line-through' : 'text-gray-300 group-hover:text-white'
                    }`}>
                      {item.item}
                    </span>
                  </label>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-4 text-xs text-gray-500">
                <span>⏱️ {step.estimatedHours}h estimated</span>
                {step.dependencies.length > 0 && (
                  <span>🔗 Depends on: {step.dependencies.join(', ')}</span>
                )}
              </div>

              {step.status === 'in-progress' && (
                <div className="mt-4 flex gap-2">
                  <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm">
                    Continue
                  </button>
                  <button className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors text-sm">
                    View Documentation
                  </button>
                  <button className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors text-sm">
                    Report Blocker
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Side Panel */}
        <div className="space-y-4">
          {/* Next Candidates */}
          <div className="bg-dark-card rounded-xl p-4 border border-gray-700">
            <h4 className="font-semibold text-white mb-3">Next Extraction Candidates</h4>
            <div className="space-y-3">
              {mockCandidates.slice(0, 4).map((candidate, index) => (
                <div key={candidate.id} className="p-3 bg-gray-800/50 rounded-lg border-l-4" style={{ borderColor: index === 0 ? '#10b981' : '#475569' }}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-white text-sm">{candidate.moduleName}</span>
                    <span className={`text-xs px-2 py-0.5 rounded ${
                      candidate.complexity === 'low' ? 'bg-green-500/20 text-green-400' :
                      candidate.complexity === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {candidate.complexity}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400 space-y-1">
                    <p>Coupling Score: {candidate.currentCoupling}/10</p>
                    <p>Effort: {candidate.estimatedEffort}</p>
                    <p className="text-primary">Priority #{candidate.priority}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-3 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors text-sm">
              View All Candidates
            </button>
          </div>

          {/* API Gateway Status */}
          <div className="bg-dark-card rounded-xl p-4 border border-gray-700">
            <h4 className="font-semibold text-white mb-3">API Gateway Status</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Traffic Split</span>
                <span className="text-white font-medium">Legacy: 73% | New: 27%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-orange-500 to-green-500 h-2 rounded-full" style={{ width: '27%' }}></div>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-gray-700">
                <span className="text-sm text-gray-400">Error Rate</span>
                <span className="text-green-400 text-sm">0.02%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Latency (p99)</span>
                <span className="text-white text-sm">142ms</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-dark-card rounded-xl p-4 border border-gray-700">
            <h4 className="font-semibold text-white mb-3">Quick Actions</h4>
            <div className="space-y-2">
              <button className="w-full px-4 py-2 bg-primary/20 text-primary rounded-lg hover:bg-primary/30 transition-colors text-sm text-left">
                📋 Generate Next Step Checklist
              </button>
              <button className="w-full px-4 py-2 bg-primary/20 text-primary rounded-lg hover:bg-primary/30 transition-colors text-sm text-left">
                🔄 Run Equivalence Tests
              </button>
              <button className="w-full px-4 py-2 bg-primary/20 text-primary rounded-lg hover:bg-primary/30 transition-colors text-sm text-left">
                📊 Export Progress Report
              </button>
              <button className="w-full px-4 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors text-sm text-left">
                ⚠️ Trigger Rollback
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
