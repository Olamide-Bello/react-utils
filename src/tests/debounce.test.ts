import debounce from '../utils/debounce';

describe('debounce', () => {
    it('should maintain the correct context', async () => {
        const mockFunction = jest.fn();
        const debouncedFunction = debounce(mockFunction, 100);

        const context = { name: 'Test Context' };

        debouncedFunction.call(context, 'arg1', 'arg2');

        // Wait for the debounce delay to ensure the function has time to be called
        await new Promise(resolve => setTimeout(resolve, 150));

        // Check that the mockFunction was called with the correct arguments
        expect(mockFunction).toHaveBeenCalledWith('arg1', 'arg2');
        expect(mockFunction).toHaveBeenCalledTimes(1);
    });
});

