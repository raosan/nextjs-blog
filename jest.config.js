module.exports = {
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js'
  },
  transform: {
    "^.+\\.(js|jsx|ts|tsx|css)$": "<rootDir>/node_modules/babel-jest"
  }
};