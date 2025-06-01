export default {
  compilerOptions: {
    target: 'ES2020',
    module: 'ESNext',
    jsx: 'react-jsx',
    moduleResolution: 'NodeNext',
    strict: true,
    noImplicitAny: true,
    strictNullChecks: true,
    baseUrl: './src',
    paths: {
      '@/*': ['./*'],
    },
    skipLibCheck: true,
    allowJs: true,
  },
  include: ['src'],
  exclude: ['node_modules', 'dist', 'build', '**/*.config.ts', '**/config/**', '**/__tests__/**'],
};
