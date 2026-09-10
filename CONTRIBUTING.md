# Contributing to Refactored Journey

Thank you for your interest in contributing to Refactored Journey! We believe that modernizing legacy software should be a collaborative, transparent, and community-driven effort. 

Whether you're fixing a typo, adding a new 3D visualization, or improving our AI prompts, every contribution matters.

## 🛠️ How to Contribute

### 1. Fork and Clone
Fork the repository on GitHub, then clone your fork locally:
```bash
git clone https://github.com/YOUR-USERNAME/refactored-journey.git
cd refactored-journey/frontend
npm install
```

### 2. Create a Branch
Create a new branch for your feature or bugfix. Use a descriptive name:
```bash
git checkout -b feature/add-new-terrain-metric
# or
git checkout -b fix/dependency-graph-rendering
```

### 3. Make Your Changes
- Write clean, typed TypeScript code.
- Ensure your changes align with the existing Tailwind CSS styling.
- If you add a new feature, consider adding a brief comment or updating the README.

### 4. Test Your Changes
Make sure the project builds and runs without errors:
```bash
npm run dev
npm run build
npm run lint
```

### 5. Commit and Push
Use clear, concise commit messages:
```bash
git add .
git commit -m "feat: add coupling hotspot visualization to Terrain Mapper"
git push origin feature/add-new-terrain-metric
```

### 6. Open a Pull Request
Go to the original repository and open a Pull Request. 
- Provide a clear description of what your PR does.
- Link any related issues (e.g., "Closes #12").
- Be patient and open to feedback during the code review process!

## 💡 Ideas for First-Time Contributors
- 🐛 Look for issues labeled `good first issue` or `help wanted`.
- 📝 Improve documentation or add missing TypeScript types.
- 🎨 Add new mock data scenarios to the Journey Dashboard.
- 🔑 Help integrate additional AI providers for the BYOK feature.
- 🧪 Write unit tests for existing components.

## 📝 Code Style Guidelines
- Use TypeScript for all new code
- Follow ESLint rules configured in the project
- Use functional components with hooks
- Keep components small and focused
- Add JSDoc comments for complex functions

## 🤔 Questions?
- Check existing [issues](https://github.com/justafriend115-dotcom/refactored-journey/issues) before opening a new one
- Join discussions in the [Discussions](https://github.com/justafriend115-dotcom/refactored-journey/discussions) tab
- Reach out to maintainers for guidance

---

## 📜 Code of Conduct
Please note that this project adheres to a welcoming and inclusive environment. By participating, you are expected to uphold our [Code of Conduct](CODE_OF_CONDUCT.md).

---

Thank you for helping us make software modernization a smoother journey for everyone! 🚀
