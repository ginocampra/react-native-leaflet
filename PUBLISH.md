# npm Publishing Guide

## Prerequisites

1. **npm Account**: Create one at [npmjs.com](https://www.npmjs.com/)
2. **Node.js**: Version 14 or higher
3. **Git**: For version control

## Step 1: Configure npm Login

```bash
npm login
```

Enter your npm credentials when prompted:
- Username (username)
- Password (password)
- Email (associated email)

You can verify that you're logged in with:
```bash
npm whoami
```

## Step 2: Update package.json

Make sure `package.json` has:

```json
{
  "name": "@your-username/react-native-leaflet",
  "version": "1.0.0",
  "description": "A React component for Leaflet",
  "main": "dist/index.js",
  "module": "dist/index.esm.js",
  "types": "dist/index.d.ts",
  "author": "Your Name",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/your-username/react-native-leaflet.git"
  },
  "bugs": {
    "url": "https://github.com/your-username/react-native-leaflet/issues"
  },
  "homepage": "https://github.com/your-username/react-native-leaflet#readme"
}
```

### Note: Naming

- **Public package**: `react-native-leaflet` (without scope)
- **Scoped package**: `@your-username/react-native-leaflet` (with @)

To use scope, you need a paid npm account or be part of an organization.

## Step 3: Build the Project

```bash
npm run build
```

This will generate files in `dist/`:
- `index.js` (CommonJS)
- `index.esm.js` (ES Modules)
- `index.d.ts` (TypeScript Types)

## Step 4: Publish

### First Publication

```bash
npm publish
```

The version defined in `package.json` will be published (default: 1.0.0)

### Subsequent Updates

Increase semantic version:

```bash
# Patch release (1.0.0 -> 1.0.1)
npm version patch

# Minor release (1.0.0 -> 1.1.0)
npm version minor

# Major release (1.0.0 -> 2.0.0)
npm version major

# Custom version
npm version 1.0.5
```

Then publish:

```bash
npm publish
```

## Step 5: Verify Publication

Visit: `https://www.npmjs.com/package/react-native-leaflet`

Or search in the terminal:

```bash
npm info react-native-leaflet
```

## Automated Publishing with GitHub Actions (Optional)

Create `.github/workflows/publish.yml`:

```yaml
name: Publish to npm

on:
  release:
    types: [created]

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          registry-url: 'https://registry.npmjs.org'
      - run: npm install
      - run: npm run build
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

## Important Tips

### 1. Semantic Versioning

- **MAJOR.MINOR.PATCH** (ex: 1.2.3)
- MAJOR: Breaking changes
- MINOR: Compatible new features
- PATCH: Bug fixes

### 2. Change Logs

Keep a `CHANGELOG.md`:

```markdown
# Changelog

## [1.0.0] - 2025-01-02

### Added
- Main LeafletMap component
- Support for Markers, Polygons, Polylines, Circles, Rectangles
- Custom hooks
- Geographic utility functions

### Fixed
- Default Leaflet icon fix
```

### 3. .npmignore

Create a `.npmignore` file to exclude unnecessary files:

```
src/
examples/
.github/
.gitignore
.eslintrc.json
tsconfig.json
rollup.config.js
EXAMPLES.md
PUBLISH.md
*.tgz
```

### 4. Local Testing

Before publishing, test locally:

```bash
# Build
npm run build

# Simulate publication
npm pack

# Test in another project
npm install ./react-native-leaflet-1.0.0.tgz
```

### 5. 2FA Permissions

If your npm account has 2FA enabled, use:

```bash
npm publish --otp XXXXXX
```

## Troubleshooting

### Error: "403 Forbidden"

- Check login: `npm whoami`
- If using scope: confirm payment or organization access

### Error: "Package name not available"

- The name already exists on npm
- Change to: `@your-username/package-name`

### Error: "ENEEDAUTH"

```bash
npm logout
npm login
npm publish
```

### Incomplete build

```bash
rm -rf node_modules dist
npm install
npm run build
npm publish
```

## Useful Links

- [npm Documentation](https://docs.npmjs.com/)
- [Semantic Versioning](https://semver.org/)
- [npm Best Practices](https://docs.npmjs.com/misc/developers)

## Support

For questions, visit:
- [npm Community](https://npm.community/)
- [Stack Overflow - npm tag](https://stackoverflow.com/questions/tagged/npm)
