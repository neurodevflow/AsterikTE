// Test setup file

beforeAll(async () => {
  // Set test environment variables
  process.env.NODE_ENV = 'test';
  process.env.JWT_SECRET = 'test-jwt-secret-key-for-testing-only';
});

afterAll(async () => {
  // Cleanup after all tests
});

beforeEach(() => {
  // Clear any mocks before each test
  jest.clearAllMocks();
});