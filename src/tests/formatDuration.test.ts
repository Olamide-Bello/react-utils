import formatDuration from '../utils/formatDuration';

describe('formatDuration', () => {
    it('should format durations less than one minute correctly', () => {
        expect(formatDuration(30)).toBe('00:30');
        expect(formatDuration(59)).toBe('00:59');
    });

    it('should format durations of exactly one minute', () => {
        expect(formatDuration(60)).toBe('01:00');
    });

    it('should format durations of multiple minutes less than an hour', () => {
        expect(formatDuration(120)).toBe('02:00');
        expect(formatDuration(3599)).toBe('59:59');
    });

    it('should format durations of exactly one hour', () => {
        expect(formatDuration(3600)).toBe('01:00:00');
    });

    it('should format durations longer than an hour correctly', () => {
        expect(formatDuration(3661)).toBe('01:01:01');
        expect(formatDuration(7325)).toBe('02:02:05');
    });
});
