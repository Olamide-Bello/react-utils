/**
 * @jest-environment jsdom
 */
import copyImageToClipboard from '../utils/copyImageToClipboard';

describe('copyImageToClipboard', () => {
  beforeEach(() => {
    // Mock the fetch API
    global.fetch = jest.fn(() =>
      Promise.resolve({
        blob: () => Promise.resolve(new Blob()),
      })
    ) as jest.Mock;

    // Mock ClipboardItem including the 'supports' method
    global.ClipboardItem = jest.fn().mockImplementation((items: Record<string, Blob>) => ({
      supports: jest.fn(() => true), // Mocking the 'supports' method
    })) as any;

    // Mock navigator.clipboard.write
    Object.defineProperty(navigator, 'clipboard', {
      value: {
        write: jest.fn().mockResolvedValue(undefined),
      },
      configurable: true,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should copy the image to the clipboard successfully', async () => {
    await copyImageToClipboard('https://example.com/image.jpg');

    // Verify fetch was called with the correct URL
    expect(fetch).toHaveBeenCalledWith('https://example.com/image.jpg');

    // Verify ClipboardItem was created
    expect(global.ClipboardItem).toHaveBeenCalled();

    // Verify navigator.clipboard.write was called
    expect(navigator.clipboard.write).toHaveBeenCalled();
  });

  it('should handle errors when the image cannot be fetched', async () => {
    // Mock fetch to reject
    global.fetch = jest.fn(() => Promise.reject(new Error('Fetch error')));

    console.error = jest.fn(); // Mock console.error to silence error output

    await copyImageToClipboard('https://example.com/invalid-image.jpg');

    // Verify console.error was called with the appropriate error
    expect(console.error).toHaveBeenCalledWith(
      'Failed to copy image: ',
      expect.any(Error)
    );
  });
});
