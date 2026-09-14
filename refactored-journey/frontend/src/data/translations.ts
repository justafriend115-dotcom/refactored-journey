export const translations = {
  en: {
    nav: {
      home: 'Home',
      terrain: 'Terrain Mapper',
      strangler: 'Strangler Fig',
      equivalence: 'Equivalence Engine',
      dashboard: 'Journey Dashboard',
    },
    hero: {
      label: '[001] MANIFESTO MODULE',
      title: 'Navigate the path from legacy to modern.',
      subtitle: 'Refactored Journey is an AI-assisted visual orchestration platform designed to make massive software modernization manageable, transparent, and enjoyable.',
      cta: 'Start Journey',
      secondary: 'View Documentation',
    },
    stats: {
      modules: 'Modules Analyzed',
      debt: 'Technical Debt Reduced',
      services: 'Services Extracted',
      coverage: 'Test Coverage',
    },
    features: {
      label: '[002] CORE SYSTEMS',
      terrain: {
        title: 'Terrain Mapper',
        desc: 'Interactive 3D dependency graphing highlighting coupling hotspots and risk levels in your monolith.',
      },
      strangler: {
        title: 'Strangler Fig Orchestrator',
        desc: 'Step-by-step guided workflows and automated checklists for safely extracting microservices.',
      },
      equivalence: {
        title: 'Equivalence Engine',
        desc: 'Behavioral testing dashboard comparing legacy vs. refactored code outputs via shadow testing.',
      },
      dashboard: {
        title: 'Journey Dashboard',
        desc: 'Stakeholder-friendly progress tracking with milestones, technical debt metrics, and ROI reporting.',
      },
    },
    activity: {
      label: '[003] RECENT OPERATIONS',
      title: 'Recent Activity',
    },
    footer: {
      copyright: '© 2026 Refactored Journey Contributors. MIT License.',
      links: 'Documentation | Contributing | Code of Conduct',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      terrain: 'Mapeo de Terreno',
      strangler: 'Orquestador Fig',
      equivalence: 'Motor de Equivalencia',
      dashboard: 'Panel de Viaje',
    },
    hero: {
      label: '[001] MÓDULO DE MANIFIESTO',
      title: 'Navega el camino del legado a lo moderno.',
      subtitle: 'Refactored Journey es una plataforma de orquestación visual asistida por IA diseñada para hacer que la modernización masiva de software sea manejable, transparente y agradable.',
      cta: 'Iniciar Viaje',
      secondary: 'Ver Documentación',
    },
    stats: {
      modules: 'Módulos Analizados',
      debt: 'Deuda Técnica Reducida',
      services: 'Servicios Extraídos',
      coverage: 'Cobertura de Pruebas',
    },
    features: {
      label: '[002] SISTEMAS PRINCIPALES',
      terrain: {
        title: 'Mapeo de Terreno',
        desc: 'Graphado de dependencias 3D interactivo que resalta puntos críticos de acoplamiento y niveles de riesgo en su monolito.',
      },
      strangler: {
        title: 'Orquestador Fig',
        desc: 'Flujos de trabajo guiados paso a paso y listas de verificación automatizadas para extraer microservicios de forma segura.',
      },
      equivalence: {
        title: 'Motor de Equivalencia',
        desc: 'Panel de pruebas de comportamiento que compara salidas de código legado vs. refactorizado mediante pruebas sombra.',
      },
      dashboard: {
        title: 'Panel de Viaje',
        desc: 'Seguimiento de progreso amigable para partes interesadas con hitos, métricas de deuda técnica e informes de ROI.',
      },
    },
    activity: {
      label: '[003] OPERACIONES RECIENTES',
      title: 'Actividad Reciente',
    },
    footer: {
      copyright: '© 2026 Colaboradores de Refactored Journey. Licencia MIT.',
      links: 'Documentación | Contribuyendo | Código de Conducta',
    },
  },
};

export type Language = 'en' | 'es';
export type TranslationKey = keyof typeof translations.en;
