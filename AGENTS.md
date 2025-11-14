# Campfire - Hack Club Game Jam Website

## Commands
- **Development**: `npm run dev` (start development server)
- **Build**: `npm run build` (TypeScript compile + Vite build)  
- **Lint**: `npm run lint` (ESLint check)
- **Preview**: `npm run preview` (preview production build)
- **Working directory**: Always use `/Users/asc/code/campfire/frontend` as cwd for npm commands

## Architecture
- **Tech Stack**: React 19 + TypeScript + Vite + TailwindCSS 4
- **Single Frontend Application**: No backend - purely client-side React app
- **Structure**: `/frontend` contains entire application
- **Build Tool**: Vite with React plugin and TailwindCSS integration
- **Styling**: TailwindCSS 4 with custom fonts (Amatic SC, DREAM PLANNER)

## Code Style Guidelines
- **TypeScript**: Strict mode enabled, prefer explicit types, use `.tsx` for React components
- **React**: Functional components with hooks, React 19 features, JSX transform
- **Props**: Use interface definitions with optional props (e.g., `{ className?: string }`)
- **Styling**: TailwindCSS classes, inline styles for custom fonts via `style={{ fontFamily: fonts.name }}`
- **Assets**: Public assets in `/frontend/public`, imported with `/path` prefix
- **Functions**: Use `function ComponentName()` declaration style, not arrow functions for components
- **Imports**: ES modules, prefer named imports, use `.tsx` extensions in imports
- **Naming**: PascalCase for components, camelCase for variables/functions
- **No Tests**: No testing framework configured - purely presentation website
