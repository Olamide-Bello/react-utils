import hexToHsl from '../utils/hexToHsl';

describe('hexToHsl', () => {
    it('should convert hex #ff0000 (red) to hsl', () => {
        const result = hexToHsl('#ff0000');
        expect(result).toBe('hsl(0, 100%, 50%)');
    });

    it('should convert hex #00ff00 (green) to hsl', () => {
        const result = hexToHsl('#00ff00');
        expect(result).toBe('hsl(120, 100%, 50%)');
    });

    it('should convert hex #0000ff (blue) to hsl', () => {
        const result = hexToHsl('#0000ff');
        expect(result).toBe('hsl(240, 100%, 50%)');
    });

    it('should convert hex #ffffff (white) to hsl', () => {
        const result = hexToHsl('#ffffff');
        expect(result).toBe('hsl(0, 0%, 100%)');
    });

    it('should convert hex #000000 (black) to hsl', () => {
        const result = hexToHsl('#000000');
        expect(result).toBe('hsl(0, 0%, 0%)');
    });

    it('should handle hex values without the hash prefix', () => {
        const result = hexToHsl('ff0000');
        expect(result).toBe('hsl(0, 100%, 50%)');
    });

    it('should convert hex #808080 (gray) to hsl', () => {
        const result = hexToHsl('#808080');
        expect(result).toBe('hsl(0, 0%, 50%)');
    });

    it('should convert hex #f4a460 (sandy brown) to hsl', () => {
        const result = hexToHsl('#f4a460');
        expect(result).toBe('hsl(28, 87%, 67%)');
    });

    it('should handle invalid hex string lengths gracefully', () => {
        const result = hexToHsl('#12345'); // Invalid hex code
        expect(result).toBe('hsl(NaN, NaN%, NaN%)');
    });
});
