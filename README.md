# 🚀 Refactored Journey

> **Navigate the path from legacy to modern.** 

Refactored Journey is an open-source, AI-assisted visual orchestration platform designed to make massive software modernization and legacy refactoring projects manageable, transparent, and even enjoyable. 

Instead of a "big bang" rewrite, Refactored Journey guides engineering teams through the "Strangler Fig" pattern, visualizes hidden dependencies, and proves behavioral equivalence—all without locking you into expensive SaaS subscriptions.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Vite](https://img.shields.io/badge/Vite-5-purple)
![Three.js](https://img.shields.io/badge/Three.js-R3F-black)

---

## ✨ Core Features

- 🗺️ **Terrain Mapper**: Interactive 3D dependency graphing (powered by React Three Fiber) that highlights coupling hotspots and risk levels in your monolith.
- 🪢 **Strangler Fig Orchestrator**: Step-by-step guided workflows and automated checklists for safely extracting microservices.
- ⚖️ **Equivalence Engine**: A behavioral testing dashboard concept for comparing legacy vs. refactored code outputs via shadow testing.
- 📈 **Journey Dashboard**: Stakeholder-friendly progress tracking with milestones, technical debt metrics, and ROI reporting.
- 🔑 **100% Free & BYOK**: Bring Your Own Key (BYOK) architecture. Connect your own free AI provider (like Groq or OpenRouter) so your code never leaves your control and you pay zero platform fees.

---

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, `clsx`, `tailwind-merge`
- **Visualization**: Three.js (`@react-three/fiber`, `@react-three/drei`), D3.js
- **State & Data**: Zustand, TanStack React Query
- **Testing**: Vitest
- **AI Integration**: BYOK (Bring Your Own Key) - Supports Groq, OpenRouter, OpenAI, Anthropic

---

## 🤖 BYOK AI Features

Refactored Journey uses a **Bring Your Own Key** model for all AI-powered features:

### What is BYOK?
- **Your Keys, Your Control**: You provide your own API keys for AI providers
- **No Vendor Lock-in**: Choose from multiple AI providers (Groq, OpenRouter, OpenAI, Anthropic)
- **Privacy First**: Your code analysis stays within your controlled environment
- **Cost Transparency**: You pay only what your chosen provider charges (many have free tiers!)

### Supported AI Providers
- **Groq** ⚡ - Lightning-fast inference with free tier
- **OpenRouter** 🌐 - Access to multiple models through one API
- **OpenAI** 🧠 - GPT-4 and GPT-3.5-turbo models
- **Anthropic** 🎯 - Claude models for complex reasoning

### AI-Powered Capabilities
- **Dependency Analysis**: Automatically detect coupling hotspots in your codebase
- **Service Extraction Recommendations**: AI-suggested boundaries for microservice extraction
- **Test Case Generation**: Auto-generate shadow test cases based on legacy behavior
- **Migration Path Optimization**: Get AI-recommended strangler fig workflows
- **Risk Assessment**: Intelligent risk scoring for each refactoring step

### Getting Your API Keys
1. **Groq** (Recommended for speed + free tier): https://console.groq.com/keys
2. **OpenRouter**: https://openrouter.ai/keys
3. **OpenAI**: https://platform.openai.com/api-keys
4. **Anthropic**: https://console.anthropic.com/keys

*Keys are stored locally in your browser and never sent to our servers.*

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm, yarn, pnpm, or bun
- (Optional) API key from Groq, OpenRouter, OpenAI, or Anthropic for AI features

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/justafriend115-dotcom/refactored-journey.git
   cd refactored-journey/frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

5. (Optional) Configure your AI provider:
   - Click the 🔑 **AI Settings** icon in the sidebar
   - Select your preferred provider (Groq recommended)
   - Paste your API key
   - Start using AI-powered features!

---

## 📁 Project Structure

```
refactored-journey/
├── frontend/
│   ├── src/
│   │   ├── components/       # React components
│   │   ├── hooks/            # Custom React hooks
│   │   ├── lib/              # Utilities and helpers
│   │   ├── stores/           # Zustand state management
│   │   ├── types/            # TypeScript type definitions
│   │   └── App.tsx           # Main application
│   ├── public/               # Static assets
│   ├── index.html            # Entry HTML
│   ├── package.json          # Dependencies
│   ├── tailwind.config.js    # Tailwind configuration
│   └── vite.config.ts        # Vite configuration
├── README.md                 # This file
├── CONTRIBUTING.md           # Contribution guidelines
├── LICENSE                   # MIT License
└── CODE_OF_CONDUCT.md        # Community guidelines
```

---

## 🤝 Contributing

We welcome contributions! Whether it's fixing a bug, adding a new visualization, or improving the documentation, your help is appreciated. 

Please read our [Contributing Guidelines](CONTRIBUTING.md) and [Code of Conduct](CODE_OF_CONDUCT.md) before submitting a Pull Request.

### Quick Start for Contributors
```bash
# Fork and clone
git clone https://github.com/YOUR-USERNAME/refactored-journey.git
cd refactored-journey/frontend

# Install and run
npm install
npm run dev

# Create a branch
git checkout -b feature/your-feature-name

# After making changes
npm run build
npm run lint
git commit -m "feat: your descriptive message"
```

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Built with ❤️ by the open-source community
- Inspired by the Strangler Fig Pattern by Martin Fowler
- Powered by amazing open-source tools: React, Three.js, TailwindCSS, and Vite

---

> **Have a feature request or found a bug?** [Open an Issue](https://github.com/justafriend115-dotcom/refactored-journey/issues)!
> 
> **Want to contribute?** Check out our [Contributing Guidelines](CONTRIBUTING.md)!
> 
> *Built with ❤️ by the open-source community.*
# refactored-journey
