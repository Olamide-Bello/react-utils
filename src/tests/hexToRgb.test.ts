import hexToRgb from '../utils/hexToRgb';

describe('hexToRgb', () => {
    it('should convert hex #ff0000 (red) to rgb', () => {
        const result = hexToRgb('#ff0000');
        expect(result).toEqual({ r: 255, g: 0, b: 0 });
    });

    it('should convert hex #00ff00 (green) to rgb', () => {
        const result = hexToRgb('#00ff00');
        expect(result).toEqual({ r: 0, g: 255, b: 0 });
    });

    it('should convert hex #0000ff (blue) to rgb', () => {
        const result = hexToRgb('#0000ff');
        expect(result).toEqual({ r: 0, g: 0, b: 255 });
    });

    it('should convert hex #ffffff (white) to rgb', () => {
        const result = hexToRgb('#ffffff');
        expect(result).toEqual({ r: 255, g: 255, b: 255 });
    });

    it('should convert hex #000000 (black) to rgb', () => {
        const result = hexToRgb('#000000');
        expect(result).toEqual({ r: 0, g: 0, b: 0 });
    });

    it('should handle 3-character hex codes (e.g. #f00)', () => {
        const result = hexToRgb('#f00');
        expect(result).toEqual({ r: 255, g: 0, b: 0 });
    });

    it('should handle hex values without the hash prefix', () => {
        const result = hexToRgb('00ff00');
        expect(result).toEqual({ r: 0, g: 255, b: 0 });
    });

    it('should return null for invalid hex codes', () => {
        expect(hexToRgb('#xyzxyz')).toBeNull(); // Non-hex characters
        expect(hexToRgb('#12')).toBeNull(); // Invalid length
        expect(hexToRgb('#1234567')).toBeNull(); // Too long
    });
});
