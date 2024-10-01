/**
 * @jest-environment jsdom
 */
import isMobileDevice from '../utils/isMobile'; // Adjust the import based on your file structure

describe('isMobileDevice', () => {
  afterEach(() => {
    // Reset the mock after each test
    jest.resetAllMocks();
  });

  it('should return true for mobile user agents', () => {
    Object.defineProperty(window, 'navigator', {
      value: { userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X)' },
      writable: true,
    });

    expect(isMobileDevice()).toBe(true);
  });

  it('should return false for desktop user agents', () => {
    Object.defineProperty(window, 'navigator', {
      value: { userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' },
      writable: true,
    });

    expect(isMobileDevice()).toBe(false);
  });

  it('should return true for Android user agents', () => {
    Object.defineProperty(window, 'navigator', {
      value: { userAgent: 'Mozilla/5.0 (Linux; Android 9; Pixel 3)' },
      writable: true,
    });

    expect(isMobileDevice()).toBe(true);
  });

  it('should return false for tablet user agents (iPad)', () => {
    Object.defineProperty(window, 'navigator', {
      value: { userAgent: 'Mozilla/5.0 (iPad; CPU OS 13_1 like Mac OS X)' },
      writable: true,
    });

    expect(isMobileDevice()).toBe(true); // Treats iPad as mobile
  });

  it('should return false if window or navigator is undefined (SSR)', () => {
    Object.defineProperty(global, 'navigator', {
      value: undefined,
      writable: true,
    });

    Object.defineProperty(global, 'window', {
      value: undefined,
      writable: true,
    });

    expect(isMobileDevice()).toBe(false); // Simulates server-side rendering environment
  });
});
