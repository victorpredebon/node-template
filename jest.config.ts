export default {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
  coverageDirectory: "coverage",
  roots: ["<rootDir>/src"],
  testEnvironment: "jest-environment-node",
  transform: { ".+\\.ts$": "ts-jest" },
};
