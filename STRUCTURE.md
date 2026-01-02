# Project Structure

```
react-native-leaflet/
│
├── src/
│   ├── LeafletMap.tsx         # Main React component
│   ├── types.ts               # TypeScript type definitions
│   ├── hooks.ts               # Custom hooks
│   ├── utils.ts               # Utility functions
│   └── index.ts               # Entry point/exports
│
├── dist/                      # Compiled files (generated after build)
│   ├── index.js               # CommonJS build
│   ├── index.esm.js           # ES Modules build
│   ├── index.d.ts             # TypeScript definitions
│   └── *.map                  # Source maps
│
├── docs/
│   └── (additional documentation if needed)
│
├── examples/
│   └── (usage examples if needed)
│
├── package.json               # Dependencies and project scripts
├── tsconfig.json              # TypeScript configuration
├── rollup.config.js           # Rollup build configuration
├── .eslintrc.json             # ESLint configuration
├── .prettierrc                # Prettier configuration
├── .gitignore                 # Git ignored files
├── .npmrc                     # npm configuration
├── README.md                  # Main documentation
├── CHANGELOG.md               # Version history
├── EXAMPLES.md                # Usage examples
├── PUBLISH.md                 # Publishing guide
├── CONTRIBUTING.md            # Contributing guide
├── LICENSE.md                 # MIT License
└── pre-publish-check.sh       # Pre-publication verification script

```

## File Descriptions

### Main Files (src/)

#### LeafletMap.tsx
- Main React component
- Manages the entire map lifecycle
- Renders markers, polygons, polylines, circles, and rectangles
- Provides imperative API via ref
- ~350 lines of code

#### types.ts
- TypeScript interfaces for all geometric shapes
- Component prop definitions
- Callback types
- Enums and utility types

#### hooks.ts
- `useMapControls`: Hook to control the map
- Functions like fitBounds, setCenter, getCenter, etc.

#### utils.ts
- `calculateDistance`: Calculates distance between points (Haversine)
- `getCenterPoint`: Finds the center point
- `formatPosition`: Formats coordinates for display
- `isPositionInBounds`: Checks if point is within bounds

#### index.ts
- Library entry point
- Re-exports all components, types, and functions

### Configuration Files

#### package.json
- Defines npm package metadata
- Lists dependencies and devDependencies
- Defines build, dev, test, lint, format scripts
- npm publication configuration

#### tsconfig.json
- TypeScript compiler configuration
- Target ES2020 with source maps
- React JSX support

#### rollup.config.js
- Rollup bundling configuration
- Generates CommonJS and ES Modules
- Includes source maps
- Optimizes peer dependencies

#### .eslintrc.json
- Linting configuration
- TypeScript rules
- Browser and Node.js environments

#### .prettierrc
- Code formatting configuration
- Semicolons, single quotes, print width

### Documentation Files

#### README.md
- Main documentation
- Installation guide
- Basic examples
- API reference
- Contributing instructions

#### EXAMPLES.md
- 5+ practical examples
- From simple to advanced
- Programmatic control examples
- Custom styling examples

#### PUBLISH.md
- Step-by-step guide to publish to npm
- Account configuration
- Semantic versioning
- Common troubleshooting

#### CONTRIBUTING.md
- Guide for contributors
- Code standards
- How to commit
- How to submit PRs

#### CHANGELOG.md
- Version history
- What changed in each release
- Follows Keep a Changelog

#### LICENSE.md
- MIT License
- Copyright and permissions

### Useful Scripts

#### pre-publish-check.sh
- Automated bash script
- Checks npm login
- Lints the code
- Runs tests
- Compiles the project
- Verifies dist structure
- Prepares for publication

## Build Process

```
src/ (TypeScript)
  ↓
tsc (TypeScript Compiler)
  ↓
compiled JS files
  ↓
rollup (Bundler)
  ↓
dist/
  ├── index.js (CommonJS)
  ├── index.esm.js (ES Modules)
  └── index.d.ts (Types)
```

## Installation in Projects

### After publishing to npm:

```bash
npm install react-native-leaflet leaflet
```

### Usage in React application:

```tsx
import { LeafletMap } from 'react-native-leaflet';

function App() {
  return (
    <LeafletMap
      options={{
        center: { lat: 0, lng: 0 },
        zoom: 12
      }}
    />
  );
}
```

## Next Steps

1. ✅ Complete structure created
2. ⏭️  Install dependencies: `npm install`
3. ⏭️  Build: `npm run build`
4. ⏭️  Test locally: `npm run dev`
5. ⏭️  Update package.json with your data
6. ⏭️  Create Git repository
7. ⏭️  Publish to npm: `npm publish`
