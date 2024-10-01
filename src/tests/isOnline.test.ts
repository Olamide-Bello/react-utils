/**
 * @jest-environment jsdom
 */
import isOnline from '../utils/isOnline'; // Adjust based on your file structure

describe('isOnline', () => {
    beforeEach(() => {
      jest.resetAllMocks();
    });
  
    it('should return false if navigator is offline', async () => {
      Object.defineProperty(navigator, 'onLine', {
        value: false,
        writable: true,
      });
  
      const result = await isOnline();
      expect(result).toBe(false);
    });
  
    it('should return true if fetch succeeds', async () => {
      Object.defineProperty(navigator, 'onLine', {
        value: true,
        writable: true,
      });
  
      global.fetch = jest.fn(() =>
        Promise.resolve({
          ok: true,
        }),
      ) as jest.Mock;
  
      const result = await isOnline();
      expect(result).toBe(true);
    });
  
    it('should return false if fetch fails', async () => {
      Object.defineProperty(navigator, 'onLine', {
        value: true,
        writable: true,
      });
  
      global.fetch = jest.fn(() => Promise.reject(new Error('Fetch failed'))) as jest.Mock;
  
      const result = await isOnline();
      expect(result).toBe(false);
    });
  
    // Increase timeout for long-running tests
    it('should return false if request times out', async () => {
      Object.defineProperty(navigator, 'onLine', {
        value: true,
        writable: true,
      });
  
      global.fetch = jest.fn(
        () =>
          new Promise((_, reject) => {
            setTimeout(() => reject(new Error('Request timed out')), 6000);
          }),
      ) as jest.Mock;
  
      const result = await isOnline('https://example.com', 5000);
      expect(result).toBe(false);
    }, 10000); // Increase timeout to 10 seconds
  
    it('should abort fetch request if it exceeds the timeout', async () => {
      Object.defineProperty(navigator, 'onLine', {
        value: true,
        writable: true,
      });
  
      const mockAbort = jest.spyOn(AbortController.prototype, 'abort');
  
      global.fetch = jest.fn(
        () =>
          new Promise((_, reject) => {
            setTimeout(() => reject(new Error('Request timed out')), 6000);
          }),
      ) as jest.Mock;
  
      await isOnline('https://example.com', 1000);
  
      expect(mockAbort).toHaveBeenCalled();
    }, 10000); // Increase timeout to 10 seconds
  });