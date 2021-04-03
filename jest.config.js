module.exports = {
    roots: ['<rootDir>/tests'],
    collectCoverageFrom: [
        '<rootDir>/src/**/*.ts',
        '!<rootDir>/src/application/**'
    ],
    coverageDirectory: 'coverage',
    testEnvironment: 'node',
    preset: '@shelf/jest-mongodb',
    transform: {
        '.+\\.ts$': 'ts-jest'
    }
}