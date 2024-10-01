import hslToHex from '../utils/hslToHex'; // Adjust the import path accordingly

describe('hslToHex', () => {
    it('should convert HSL to HEX correctly', () => {
        expect(hslToHex('hsl(0, 100%, 50%)')).toBe('#ff0000');   // Red
        expect(hslToHex('hsl(120, 100%, 50%)')).toBe('#00ff00'); // Green
        expect(hslToHex('hsl(240, 100%, 50%)')).toBe('#0000ff'); // Blue
        expect(hslToHex('hsl(60, 100%, 50%)')).toBe('#ffff00');  // Yellow
    });

    it('should handle shades of gray (achromatic colors)', () => {
        expect(hslToHex('hsl(0, 0%, 0%)')).toBe('#000000');   // Black
        expect(hslToHex('hsl(0, 0%, 50%)')).toBe('#808080');  // Gray
        expect(hslToHex('hsl(0, 0%, 100%)')).toBe('#ffffff'); // White
    });

    it('should throw an error for invalid HSL strings', () => {
        expect(() => hslToHex('invalid string')).toThrow('Invalid HSL format. Expected format: hsl(hue, saturation%, lightness%)');
    });

    it('should throw an error for out-of-range HSL values', () => {
        expect(() => hslToHex('hsl(400, 100%, 50%)')).toThrow('HSL values out of range');
        expect(() => hslToHex('hsl(0, 200%, 50%)')).toThrow('HSL values out of range');
        expect(() => hslToHex('hsl(0, 100%, -50%)')).toThrow('HSL values out of range');
    });

    it('should correctly handle lowercase or uppercase input strings', () => {
        expect(hslToHex('hsl(180, 50%, 50%)')).toBe('#40bfbf');  // Aqua color
        expect(hslToHex('HSL(180, 50%, 50%)')).toBe('#40bfbf');  // Should handle case insensitivity
    });
    
    it('should pad hex values correctly to always be 6 characters long', () => {
        expect(hslToHex('hsl(0, 0%, 10%)')).toBe('#1a1a1a');     // Dark gray (padded to 6 characters)
    });
});
