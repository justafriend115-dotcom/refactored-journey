import { useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text, Line } from '@react-three/drei'

interface Node {
  id: string
  name: string
  type: 'module' | 'service' | 'database' | 'api'
  x: number
  y: number
  z: number
  connections: string[]
  riskLevel: 'low' | 'medium' | 'high'
}

interface CouplingHotspot {
  id: string
  modules: string[]
  severity: 'warning' | 'critical'
  description: string
}

const mockNodes: Node[] = [
  { id: '1', name: 'UserAuth', type: 'module', x: 0, y: 0, z: 0, connections: ['2', '3', '5'], riskLevel: 'high' },
  { id: '2', name: 'PaymentService', type: 'service', x: 4, y: 2, z: 1, connections: ['1', '4', '6'], riskLevel: 'high' },
  { id: '3', name: 'OrderProcessor', type: 'module', x: -3, y: 3, z: 2, connections: ['1', '4', '7'], riskLevel: 'medium' },
  { id: '4', name: 'InventoryDB', type: 'database', x: 2, y: -3, z: 0, connections: ['2', '3', '8'], riskLevel: 'low' },
  { id: '5', name: 'NotificationAPI', type: 'api', x: -4, y: -2, z: 1, connections: ['1', '6'], riskLevel: 'low' },
  { id: '6', name: 'EmailService', type: 'service', x: 5, y: -1, z: 3, connections: ['2', '5'], riskLevel: 'medium' },
  { id: '7', name: 'ShippingModule', type: 'module', x: -2, y: 5, z: -1, connections: ['3'], riskLevel: 'low' },
  { id: '8', name: 'ReportingAPI', type: 'api', x: 3, y: -4, z: 2, connections: ['4'], riskLevel: 'low' },
]

const mockHotspots: CouplingHotspot[] = [
  { id: 'h1', modules: ['UserAuth', 'PaymentService', 'OrderProcessor'], severity: 'critical', description: 'Tight coupling between auth and payment flows' },
  { id: 'h2', modules: ['OrderProcessor', 'InventoryDB'], severity: 'warning', description: 'Direct database access should be abstracted' },
]

function NodeSphere({ node, onSelect, isSelected }: { node: Node; onSelect: (id: string) => void; isSelected: boolean }) {
  const [hovered, setHovered] = useState(false)
  
  const color = node.riskLevel === 'high' ? '#ef4444' : 
                node.riskLevel === 'medium' ? '#f59e0b' : '#10b981'
  
  const scale = isSelected ? 1.5 : hovered ? 1.3 : 1
  
  useFrame((_state, _delta) => {
    if (hovered && !isSelected) {
      // Subtle pulsing animation
    }
  })

  return (
    <group position={[node.x, node.y, node.z]}>
      <mesh
        onClick={() => onSelect(node.id)}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={scale}
      >
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered || isSelected ? 0.8 : 0.3}
          transparent
          opacity={0.9}
        />
      </mesh>
      <Text
        position={[0, -1.2, 0]}
        fontSize={0.4}
        color="white"
        anchorX="center"
        anchorY="top"
      >
        {node.name}
      </Text>
      {node.type === 'database' && (
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.9, 0.9, 0.3, 32]} />
          <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={0.5} />
        </mesh>
      )}
    </group>
  )
}

function ConnectionLines({ nodes }: { nodes: Node[] }) {
  const lines: [number, number, number, number, number, number][] = []
  
  nodes.forEach((node, index) => {
    node.connections.forEach((connId) => {
      const connNode = nodes.find((n) => n.id === connId)
      if (connNode && index < nodes.findIndex((n) => n.id === connId)) {
        lines.push([
          node.x, node.y, node.z,
          connNode.x, connNode.y, connNode.z,
        ])
      }
    })
  })

  return (
    <>
      {lines.map((line, i) => (
        <Line
          key={i}
          points={[[line[0], line[1], line[2]], [line[3], line[4], line[5]]]}
          color="#475569"
          lineWidth={1}
          transparent
          opacity={0.6}
        />
      ))}
    </>
  )
}

export default function TerrainMapper() {
  const [selectedNode, setSelectedNode] = useState<string | null>(null)
  const [rotationSpeed, setRotationSpeed] = useState(0.2)

  const selectedNodeData = mockNodes.find((n) => n.id === selectedNode)

  return (
    <div className="space-y-6 fade-in">
      {/* Controls */}
      <div className="flex items-center justify-between bg-dark-card rounded-xl p-4 border border-gray-700">
        <div className="flex items-center gap-4">
          <h3 className="text-lg font-semibold text-white">Dependency Graph</h3>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 bg-primary/20 text-primary rounded-lg text-sm hover:bg-primary/30 transition-colors">
              Auto-Layout
            </button>
            <button className="px-3 py-1.5 bg-gray-700 text-white rounded-lg text-sm hover:bg-gray-600 transition-colors">
              Export SVG
            </button>
            <button className="px-3 py-1.5 bg-gray-700 text-white rounded-lg text-sm hover:bg-gray-600 transition-colors">
              Export JSON
            </button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <label className="text-sm text-gray-400">Rotation Speed:</label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={rotationSpeed}
            onChange={(e) => setRotationSpeed(parseFloat(e.target.value))}
            className="w-32 accent-primary"
          />
        </div>
      </div>

      {/* Main Visualization */}
      <div className="grid grid-cols-4 gap-6 h-[600px]">
        <div className="col-span-3 bg-dark-card rounded-xl border border-gray-700 overflow-hidden">
          <Canvas camera={{ position: [10, 10, 10], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />
            
            <group rotation={[0, 0, 0]}>
              {useFrame((state, delta) => {
                state.scene.rotation.y += delta * rotationSpeed * 0.1
              })}
              
              {mockNodes.map((node) => (
                <NodeSphere
                  key={node.id}
                  node={node}
                  onSelect={setSelectedNode}
                  isSelected={selectedNode === node.id}
                />
              ))}
              <ConnectionLines nodes={mockNodes} />
            </group>
            
            <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
          </Canvas>
        </div>

        {/* Side Panel */}
        <div className="space-y-4">
          {/* Selected Node Details */}
          <div className="bg-dark-card rounded-xl p-4 border border-gray-700">
            <h4 className="font-semibold text-white mb-3">Node Details</h4>
            {selectedNodeData ? (
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-400">Name</p>
                  <p className="text-white font-medium">{selectedNodeData.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Type</p>
                  <p className="text-white capitalize">{selectedNodeData.type}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Risk Level</p>
                  <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                    selectedNodeData.riskLevel === 'high' ? 'bg-red-500/20 text-red-400' :
                    selectedNodeData.riskLevel === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-green-500/20 text-green-400'
                  }`}>
                    {selectedNodeData.riskLevel.toUpperCase()}
                  </span>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Connections</p>
                  <p className="text-white">{selectedNodeData.connections.length} modules</p>
                </div>
                <button className="w-full mt-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm">
                  View Impact Analysis
                </button>
              </div>
            ) : (
              <p className="text-gray-400 text-sm">Select a node to view details</p>
            )}
          </div>

          {/* Coupling Hotspots */}
          <div className="bg-dark-card rounded-xl p-4 border border-gray-700">
            <h4 className="font-semibold text-white mb-3">Coupling Hotspots</h4>
            <div className="space-y-3">
              {mockHotspots.map((hotspot) => (
                <div key={hotspot.id} className="p-3 bg-gray-800/50 rounded-lg border-l-4 border-red-500">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                      hotspot.severity === 'critical' ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {hotspot.severity.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-sm text-gray-300">{hotspot.description}</p>
                  <p className="text-xs text-gray-500 mt-2">Modules: {hotspot.modules.join(', ')}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="bg-dark-card rounded-xl p-4 border border-gray-700">
            <h4 className="font-semibold text-white mb-3">Legend</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <span className="text-gray-300">High Risk</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <span className="text-gray-300">Medium Risk</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-gray-300">Low Risk</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                <span className="text-gray-300">Database</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-4 gap-4">
        {[
          { label: 'Total Modules', value: '847', change: '+12 this week' },
          { label: 'Dependencies', value: '2,341', change: 'Mapped' },
          { label: 'Hotspots Found', value: '23', change: '5 critical' },
          { label: 'Refactoring Priority', value: 'High', change: 'Start with UserAuth' },
        ].map((stat) => (
          <div key={stat.label} className="bg-dark-card rounded-xl p-4 border border-gray-700">
            <p className="text-sm text-gray-400">{stat.label}</p>
            <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
            <p className="text-xs text-primary mt-1">{stat.change}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
