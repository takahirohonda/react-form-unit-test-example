module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.stories.{ts,tsx}',
    '!src/**/*.styled.{ts,tsx}',
    '!src/components/PDF/PDF.ts',
    '!src/index.tsx',
    '!src/styles/*',
    '!src/types/*',
  ],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}',
  ],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|mjs|cjs|ts|tsx)$': 'ts-jest',
  },
  modulePaths: ['<rootDir>/src'],
  moduleFileExtensions: [
    'web.js',
    'js',
    'web.ts',
    'ts',
    'web.tsx',
    'tsx',
    'json',
    'web.jsx',
    'jsx',
    'node',
  ],

  resetMocks: true,
  clearMocks: true,
}
