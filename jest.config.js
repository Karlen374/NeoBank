/** @type {import('ts-jest').JestConfigWithTsJest} */

module.exports = {
  verbose: true,
  // чтобы построить React DOM
  testEnvironment: 'jsdom',

  // Список путей к директориям, в которых Jest должен искать файлы с тестами.
  roots: ['<rootDir>/src/spec'],

  testMatch: ['<rootDir>/src/spec/**.spec.{ts,tsx}', '<rootDir>/src/spec/unitTests/**.spec.{ts,tsx}'],
  // transform: { '^.+\\.ts$': 'ts-jest' },
  // Список путей к модулям, которые запускают некоторый код для настройки среды тестирования перед каждым тестом.
  setupFilesAfterEnv: ['<rootDir>/src/spec/imports/importJestDOM.ts'],
  moduleNameMapper: {
    '^@components$': '<rootDir>/src/components',
    '^@utils$': '<rootDir>/src/utils',
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/src/spec/imports/style.js',
    '^.*\\.scss$': '<rootDir>/src/spec/imports/style.js',
  },
};
