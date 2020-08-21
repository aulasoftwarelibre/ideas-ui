module.exports = {
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.test.json",
    },
  },
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom-fourteen",
  setupFilesAfterEnv: ["./internal/jest-setup.ts"],
  testMatch: ["**/__tests__/**/.+(ts|tsx|js)", "**/*.(test|spec).+(ts|tsx|js)"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};
