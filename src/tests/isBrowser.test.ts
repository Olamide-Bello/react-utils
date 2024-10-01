import isBrowser from '../utils/isBrowser';

describe('isBrowser', () => {
    it('should return true in a browser environment', () => {
        // Store the original window and document
        const originalWindow = global.window;
        const originalDocument = global.document;
        
        // Mock the window and document objects with minimal valid properties
        global.window = { document: {} } as unknown as Window & typeof globalThis;
        global.document = {} as Document;
        
        expect(isBrowser()).toBe(true);
        
        // Restore the original window and document
        global.window = originalWindow;
        global.document = originalDocument;
    });

    it('should return false in a non-browser environment', () => {
        // Store the original window and document
        const originalWindow = global.window;
        const originalDocument = global.document;

        // Remove window and document from global
        delete (global as any).window;
        delete (global as any).document;

        expect(isBrowser()).toBe(false);

        // Restore the original window and document
        global.window = originalWindow;
        global.document = originalDocument;
    });
});
