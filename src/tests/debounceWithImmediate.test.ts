import debounceWithImmediate from '../utils/debounceWithImmediate';

describe('debounceWithImmediate', () => {
    jest.useFakeTimers();

    it('should call the function immediately and debounce subsequent calls', () => {
        const mockFn = jest.fn();
        const debouncedFn = debounceWithImmediate(mockFn, 1000);

        debouncedFn(); // First call should execute immediately
        expect(mockFn).toHaveBeenCalledTimes(1);

        debouncedFn(); // Second call should not execute immediately
        expect(mockFn).toHaveBeenCalledTimes(1);

        jest.advanceTimersByTime(1000); // Fast-forward the timers
        expect(mockFn).toHaveBeenCalledTimes(1); // Still should only be called once

        debouncedFn(); // Call again
        expect(mockFn).toHaveBeenCalledTimes(2); // Should now be called again
    });
});
