import { defineConfig } from 'tsup';

export default defineConfig({
    format: ['cjs', 'esm'],
    entryPoints: ['./src/index.ts'],
    dts: true,
    shims: true,
    clean: true,
    skipNodeModulesBundle: true
});