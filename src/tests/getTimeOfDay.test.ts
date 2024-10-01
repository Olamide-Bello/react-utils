import getTimeOfDay from '../utils/getTimeOfDay';

describe('getTimeOfDay', () => {
    it('should return "morning" for a time between 5:00 and 11:59', () => {
        const morningTime = new Date().setHours(6, 30, 0); // 6:30 AM
        const isoString = new Date(morningTime).toISOString();
        expect(getTimeOfDay(isoString)).toBe('morning');
    });

    it('should return "afternoon" for a time between 12:00 and 17:59', () => {
        const afternoonTime = new Date().setHours(14, 45, 0); // 2:45 PM
        const isoString = new Date(afternoonTime).toISOString();
        expect(getTimeOfDay(isoString)).toBe('afternoon');
    });

    it('should return "night" for a time outside of morning and afternoon hours', () => {
        const nightTime = new Date().setHours(23, 0, 0); // 11:00 PM
        const isoString = new Date(nightTime).toISOString();
        expect(getTimeOfDay(isoString)).toBe('night');
    });

    it('should return "morning" when using UTC time between 5:00 and 11:59', () => {
        const morningTime = new Date().setUTCHours(7, 30, 0); // 7:30 AM UTC
        const isoString = new Date(morningTime).toISOString();
        expect(getTimeOfDay(isoString, false)).toBe('morning');
    });

    it('should return "afternoon" when using UTC time between 12:00 and 17:59', () => {
        const afternoonTime = new Date().setUTCHours(16, 0, 0); // 4:00 PM UTC
        const isoString = new Date(afternoonTime).toISOString();
        expect(getTimeOfDay(isoString, false)).toBe('afternoon');
    });

    it('should return "night" when using UTC time outside of morning and afternoon hours', () => {
        const nightTime = new Date().setUTCHours(22, 0, 0); // 10:00 PM UTC
        const isoString = new Date(nightTime).toISOString();
        expect(getTimeOfDay(isoString, false)).toBe('night');
    });
});
