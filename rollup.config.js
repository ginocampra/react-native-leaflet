import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
        sourcemap: true,
        exports: 'named',
      },
      {
        file: 'dist/index.esm.js',
        format: 'es',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve({
        browser: true,
      }),
      commonjs(),
      typescript({
        compilerOptions: {
          declaration: true,
          declarationDir: 'dist',
          jsx: 'react-jsx',
          allowSyntheticDefaultImports: true,
          esModuleInterop: true,
          noEmit: false,
        },
      }),
    ],
    external: ['react', 'react-dom', 'leaflet'],
  },
];
