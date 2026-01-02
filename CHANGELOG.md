# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-01-02

### Added

- 🎉 Initial release of react-native-leaflet
- ✨ LeafletMap component with full TypeScript support
- 📍 Markers support with customizable icons and popups
- 🔷 Polygons support with customizable styling
- 📏 Polylines support with dash patterns
- ⭕ Circles support with configurable radius
- ▭ Rectangles support with bounds
- 🎯 Click handlers for all shape types
- 🧭 Map controls (zoom, pan, scroll wheel)
- 🎨 Customizable styling and colors
- 🔧 Custom hooks for map manipulation
- 🛠️ Utility functions (distance calculation, center point, bounds checking)
- 📦 Ref-based imperative API for advanced usage
- 🌍 OpenStreetMap and Google Street View support
- 📱 Responsive design support
- 🔒 Type-safe with comprehensive TypeScript definitions
- 📚 Complete documentation and examples
- 🧪 Jest testing setup
- 📋 ESLint and Prettier configuration
- 🚀 Ready for npm publication

### Features

#### LeafletMap Component

- Full Leaflet integration
- Support for markers, polygons, polylines, circles, and rectangles
- Event callbacks for user interactions
- Map control via ref
- Custom styling through props
- Responsive container sizing

#### Hooks

- `useMapControls`: Access map control functions

#### Utilities

- `calculateDistance`: Haversine distance calculation
- `getCenterPoint`: Find center of multiple points
- `formatPosition`: Format coordinates for display
- `isPositionInBounds`: Check if point is within bounds

#### Types

- Complete TypeScript definitions
- Interfaces for all shapes and options
- Type-safe props

### Documentation

- Comprehensive README with examples
- API documentation
- Advanced usage examples
- Contributing guidelines
- Publishing guide

---

For future versions, see [Semantic Versioning](https://semver.org/) for guidance on version numbers.
