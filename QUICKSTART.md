# 🚀 React Native Leaflet - Quick Start Guide

Welcome! You have a complete npm project ready to be developed and published. Here's everything you need to know to get started.

## ✅ What was created

### Complete Project Structure
- ✨ React component with TypeScript
- 📦 Build configured with Rollup
- 🧪 Tests with Jest
- 📝 Complete documentation
- 🔧 Ready npm configuration

### Components
- 🗺️ **LeafletMap** - Main map component
- 📍 **Markers** (Markers)
- 🔷 **Polygons** (Polygons)
- 📏 **Polylines** (Polylines)
- ⭕ **Circles** (Circles)
- ▭ **Rectangles** (Rectangles)

### Features
- ✅ Complete TypeScript
- ✅ Custom hooks
- ✅ Geographic utility functions
- ✅ Imperative API via ref
- ✅ Event callbacks
- ✅ Customizable styles

## 📋 Next Steps

### 1. Initial Setup

```bash
# Navigate to the project directory
cd /srv/http/react-native-leaflet

# Install dependencies
npm install

# (Optional) If using yarn
yarn install
```

### 2. Custom Configuration

Edit the `package.json` file with your data:

```json
{
  "name": "your-username/react-native-leaflet",
  "author": {
    "name": "Your Name",
    "email": "your.email@example.com"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/your-username/react-native-leaflet.git"
  },
  "bugs": {
    "url": "https://github.com/your-username/react-native-leaflet/issues",
    "email": "your.email@example.com"
  },
  "homepage": "https://github.com/your-username/react-native-leaflet#readme"
}
```

### 3. Initial Build

```bash
# Compile and bundle the project
npm run build

# Result in: dist/
# - dist/index.js (CommonJS)
# - dist/index.esm.js (ES Modules)
# - dist/index.d.ts (Types)
```

### 4. Local Development

```bash
# Watch mode (automatic rebuild)
npm run dev

# Linting
npm run lint

# Formatting
npm run format

# Tests (if configuring Jest)
npm run test
```

### 5. Test Locally

```bash
# Generate a package
npm pack

# Test in another project
npm install ./react-native-leaflet-1.0.0.tgz

# Or use directly in local project
npm install /srv/http/react-native-leaflet
```

### 6. npm Publication

#### First time:

```bash
# Log in to npm
npm login

# Check everything
bash pre-publish-check.sh

# Publish
npm publish
```

#### Updates:

```bash
# Update the version
npm version patch  # 1.0.0 -> 1.0.1
npm version minor  # 1.0.0 -> 1.1.0
npm version major  # 1.0.0 -> 2.0.0

# Publish
npm publish
```

## 📚 Documentation

| File | Description |
|------|-------------|
| [README.md](README.md) | Main documentation and API |
| [EXAMPLES.md](EXAMPLES.md) | 5+ practical examples |
| [PUBLISH.md](PUBLISH.md) | Complete npm publication guide |
| [CONTRIBUTING.md](CONTRIBUTING.md) | Guide for contributors |
| [CHANGELOG.md](CHANGELOG.md) | Version history |
| [STRUCTURE.md](STRUCTURE.md) | Detailed project structure |

## 🎯 Use Cases

### Basic Usage
```tsx
import { LeafletMap } from 'react-native-leaflet';

export default function BasicMap() {
  return (
    <LeafletMap
      options={{
        center: { lat: -23.347509, lng: -47.847536 },
        zoom: 15
      }}
    />
  );
}
```

### With Markers
```tsx
<LeafletMap
  options={{ center: { lat: 0, lng: 0 }, zoom: 12 }}
  initialMarkers={[
    {
      position: { lat: 0, lng: 0 },
      title: 'My Marker',
      popupContent: '<h3>Hello!</h3>'
    }
  ]}
  onMarkerClick={(marker, index) => console.log('Clicked:', marker)}
/>
```

### Programmatic Control
```tsx
const mapRef = useRef();

<LeafletMap ref={mapRef} options={...} />

// Then you can:
mapRef.current?.setCenter({ lat: 0, lng: 0 }, 15);
mapRef.current?.fitBounds();
mapRef.current?.addMarker(newMarker);
```

## 🔍 Available Scripts

```bash
npm run build          # Build for production
npm run clean          # Clean dist/
npm run compile        # Compile TypeScript
npm run bundle         # Bundle with Rollup
npm run dev            # Watch mode
npm run test           # Run tests
npm run lint           # Lint code
npm run format         # Format code with Prettier
npm run prepare        # Run before install (auto npm publish)
npm run prepublishOnly # Run before publish (checks)
```

## 🔗 Useful Links

- [Leaflet Documentation](https://leafletjs.com/)
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [npm Documentation](https://docs.npmjs.com/)
- [Semantic Versioning](https://semver.org/)

## ❓ Frequently Asked Questions

### How do I use the component in my project?

```bash
npm install react-native-leaflet leaflet
```

```tsx
import { LeafletMap } from 'react-native-leaflet';

// Use normally as a React component
```

### How do I add more features?

1. Add the code in `src/`
2. Export in `src/index.ts`
3. Run `npm run build`
4. Increment the version in `package.json`
5. Publish: `npm publish`

### How do I report bugs?

1. Create an issue on GitHub
2. Include minimal reproduction
3. Describe expected vs. actual behavior

### How do I contribute?

1. Fork the repository
2. Create branch: `git checkout -b feature/AmazingFeature`
3. Commit: `git commit -m 'Add AmazingFeature'`
4. Push: `git push origin feature/AmazingFeature`
5. Open a Pull Request

## ⚠️ Important Before Publishing

```bash
# Final checklist:
bash pre-publish-check.sh

# Check:
✓ npm login working
✓ code passing lint
✓ build generating without errors
✓ package.json with correct data
✓ README.md updated
✓ version incremented
✓ git commits made
```

## 🎉 Next Step

```bash
cd /srv/http/react-native-leaflet
npm install
npm run build
npm publish
```

## 📞 Support

- Documentation: See README.md
- Examples: See EXAMPLES.md
- Issues: GitHub Issues
- Contributing: See CONTRIBUTING.md

---

**Developed with ❤️ based on the philosophy of the [laravel-leaflet](https://github.com/ginocampra/laravel-leaflet) project**

Good luck with your project! 🚀
