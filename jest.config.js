export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  transform: {
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      {
        tsconfig: "<rootDir>/tsconfig.app.json",
      },
    ],
  },
  moduleNameMapper: {
    "\\.css$": "identity-obj-proxy",
    "^@routes/(.*)$": "<rootDir>/src/routes/$1",
    "^@pages/(.*)$": "<rootDir>/src/pages/$1",
    "^@src/(.*)$": "<rootDir>/src/$1",
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "^@services/(.*)$": "<rootDir>/src/services/$1",
    "^@hooks/(.*)$": "<rootDir>/src/hooks/$1",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
};
