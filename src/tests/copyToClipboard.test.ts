/**
 * @jest-environment jsdom
 */
import copyToClipboard from '../utils/copyToClipboard';

describe('copyToClipboard', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();

    // Mock the ClipboardItem constructor
    global.ClipboardItem = class {
        constructor(items: Record<string, Blob>) {
          return items;
        }
        static supports(type: string): boolean {
          return true;
        }
      } as unknown as { new (items: Record<string, Blob>): ClipboardItem; supports(type: string): boolean }

    // Mock the clipboard object
    Object.defineProperty(navigator, 'clipboard', {
      value: {
        write: jest.fn().mockResolvedValue(undefined),
        writeText: jest.fn().mockResolvedValue(undefined),
      },
      writable: true,
    });
  });

  it('should copy a string to the clipboard', async () => {
    // Mock navigator.clipboard.writeText
    Object.defineProperty(navigator, 'clipboard', {
        value: {
            writeText: jest.fn().mockResolvedValue(undefined),
        },
        writable: true,
    });

    const textToCopy = 'Hello, World!';
    
    await copyToClipboard(textToCopy);

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(textToCopy);
});

it('should copy text and HTML to the clipboard', async () => {
    // Mock navigator.clipboard.write
    Object.defineProperty(navigator, 'clipboard', {
        value: {
            write: jest.fn().mockResolvedValue(undefined),
        },
        writable: true,
    });

    const dataToCopy = {
        text: 'Hello, World!',
        html: '<strong>Hello, World!</strong>',
    };

    await copyToClipboard(dataToCopy);

    expect(navigator.clipboard.write).toHaveBeenCalledTimes(1);
    expect(navigator.clipboard.write).toHaveBeenCalledWith(expect.arrayContaining([
        expect.objectContaining({
            'text/plain': expect.any(Blob),
        }),
        expect.objectContaining({
            'text/html': expect.any(Blob),
        }),
    ]));
});

it('should handle errors when copying fails', async () => {
    // Mock navigator.clipboard.writeText to throw an error
    Object.defineProperty(navigator, 'clipboard', {
        value: {
            writeText: jest.fn().mockRejectedValue(new Error('Clipboard error')),
        },
        writable: true,
    });

    const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

    const textToCopy = 'Hello, World!';

    await copyToClipboard(textToCopy);

    expect(consoleSpy).toHaveBeenCalledWith('Failed to copy: ', expect.any(Error));

    consoleSpy.mockRestore();
  });
});
