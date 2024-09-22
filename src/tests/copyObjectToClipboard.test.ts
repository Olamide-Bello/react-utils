/**
 * @jest-environment jsdom
 */
import copyObjectToClipboard from '../utils/copyObjectToClipboard'

describe('copyObjectToClipboard', () => {
  beforeEach(() => {
    // Reset any mocks before each test
    jest.clearAllMocks();
  });

  it('should copy the object to the clipboard as JSON', async () => {
    // Mock navigator.clipboard.writeText
    Object.defineProperty(navigator, 'clipboard', {
      value: {
        writeText: jest.fn().mockResolvedValue(undefined),
      },
      writable: true,
    });

    const testObject = { name: 'Test', value: 42 };

    await copyObjectToClipboard(testObject);

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(JSON.stringify(testObject));
  });

  it('should handle errors when copying to the clipboard fails', async () => {
    // Mock navigator.clipboard.writeText to throw an error
    Object.defineProperty(navigator, 'clipboard', {
      value: {
        writeText: jest.fn().mockRejectedValue(new Error('Clipboard error')),
      },
      writable: true,
    });

    const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

    const testObject = { name: 'Test', value: 42 };

    await copyObjectToClipboard(testObject);

    expect(consoleSpy).toHaveBeenCalledWith('Failed to copy object: ', new Error('Clipboard error'));

    consoleSpy.mockRestore();
  });
});
