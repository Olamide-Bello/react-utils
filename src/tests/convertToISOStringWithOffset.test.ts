import convertToISOStringWithOffset from '../utils/isoDateWithOffset'; // Adjust based on your file structure

describe('convertToISOStringWithOffset', () => {

  it('should return null when the date is null', () => {
    const result = convertToISOStringWithOffset(null, 5);
    expect(result).toBeNull();
  });

  it('should correctly adjust the date by the specified positive offset', () => {
    const originalDate = new Date('2023-09-21T10:00:00Z'); // UTC time
    const result = convertToISOStringWithOffset(originalDate, 5);
    
    const expectedDate = new Date('2023-09-21T15:00:00Z').toISOString(); // Adjusted by +5 hours
    expect(result).toBe(expectedDate);
  });

  it('should correctly adjust the date by the specified negative offset', () => {
    const originalDate = new Date('2023-09-21T10:00:00Z');
    const result = convertToISOStringWithOffset(originalDate, -5);

    const expectedDate = new Date('2023-09-21T05:00:00Z').toISOString(); // Adjusted by -5 hours
    expect(result).toBe(expectedDate);
  });

  it('should handle daylight savings time correctly', () => {
    const dstDate = new Date('2024-03-10T01:00:00'); // DST start in some regions
    const result = convertToISOStringWithOffset(dstDate, 2);
    
    const adjustedDate = new Date('2024-03-10T03:00:00').toISOString(); // Adjust by +2 hours
    expect(result).toBe(adjustedDate);
  });

  it('should not mutate the original date object', () => {
    const originalDate = new Date('2023-09-21T10:00:00Z');
    const originalDateCopy = new Date(originalDate.getTime()); // Make a copy for comparison

    convertToISOStringWithOffset(originalDate, 5);

    // Ensure the original date has not been mutated
    expect(originalDate).toEqual(originalDateCopy);
  });

  it('should handle offsets that cross into a different day', () => {
    const originalDate = new Date('2023-09-21T23:00:00Z');
    const result = convertToISOStringWithOffset(originalDate, 2); // Should move to the next day
    
    const expectedDate = new Date('2023-09-22T01:00:00Z').toISOString();
    expect(result).toBe(expectedDate);
  });

});
