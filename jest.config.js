module.exports = {
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.test.json",
    },
  },
  preset: "ts-jest",
  testEnvironment: "node",
  setupFilesAfterEnv: ["./internal/jest-setup.ts"],
  globalSetup: "./internal/global-setup.js",
  testMatch: ["**/__tests__/**/.+(ts|tsx|js)", "**/*.test.+(ts|tsx|js)"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};
