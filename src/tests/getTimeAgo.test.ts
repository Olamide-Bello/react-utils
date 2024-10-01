import getTimeAgo from '../utils/getTimeAgo';

describe('getTimeAgo', () => {
    it('should return "seconds ago" for timestamps within the last minute', () => {
        const now = new Date();
        const timestamp = new Date(now.getTime() - 20 * 1000).toISOString(); // 20 seconds ago
        expect(getTimeAgo(timestamp)).toBe('20 seconds ago');
    });

    it('should return "minutes ago" for timestamps within the last hour', () => {
        const now = new Date();
        const timestamp = new Date(now.getTime() - 5 * 60 * 1000).toISOString(); // 5 minutes ago
        expect(getTimeAgo(timestamp)).toBe('5 minutes ago');
    });

    it('should return "hours ago" for timestamps within the last day', () => {
        const now = new Date();
        const timestamp = new Date(now.getTime() - 3 * 60 * 60 * 1000).toISOString(); // 3 hours ago
        expect(getTimeAgo(timestamp)).toBe('3 hours ago');
    });

    it('should return "days ago" for timestamps within the last week', () => {
        const now = new Date();
        const timestamp = new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000).toISOString(); // 2 days ago
        expect(getTimeAgo(timestamp)).toBe('2 days ago');
    });

    it('should return "weeks ago" for timestamps within the last month', () => {
        const now = new Date();
        const timestamp = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000).toISOString(); // 2 weeks ago
        expect(getTimeAgo(timestamp)).toBe('2 weeks ago');
    });

    it('should return "months ago" for timestamps within the last year', () => {
        const now = new Date();
        const timestamp = new Date(now.getTime() - 2 * 30 * 24 * 60 * 60 * 1000).toISOString(); // 2 months ago
        expect(getTimeAgo(timestamp)).toBe('2 months ago');
    });

    it('should return "years ago" for timestamps more than a year ago', () => {
        const now = new Date();
        const timestamp = new Date(now.getTime() - 2 * 365 * 24 * 60 * 60 * 1000).toISOString(); // 2 years ago
        expect(getTimeAgo(timestamp)).toBe('2 years ago');
    });

    it('should return "in the future" for future timestamps', () => {
        const futureDate = new Date(Date.now() + 60 * 1000).toISOString(); // 1 minute in the future
        expect(getTimeAgo(futureDate)).toBe('in the future');
    });

    it('should handle the edge case of 0 seconds ago', () => {
        const now = new Date().toISOString();
        expect(getTimeAgo(now)).toBe('0 seconds ago');
    });
});
