import generateUUID from '../utils/generateUUID';

describe('generateUUID', () => {
    it('should generate a UUID with a length of 36 characters', () => {
        const uuid = generateUUID();
        expect(uuid).toHaveLength(36);
    });

    it('should contain hyphens at the correct positions', () => {
        const uuid = generateUUID();
        expect(uuid[8]).toBe('-');
        expect(uuid[13]).toBe('-');
        expect(uuid[18]).toBe('-');
        expect(uuid[23]).toBe('-');
    });

    it('should generate a UUID where the 13th character is always "4" (version 4)', () => {
        const uuid = generateUUID();
        expect(uuid[14]).toBe('4');  // 13th character (index 14 because index starts at 0)
    });

    it('should generate a UUID where the 17th character is "8", "9", "A", or "B" (variant)', () => {
        const uuid = generateUUID();
        const variantChar = uuid[19];  // 17th character (index 19 due to hyphens)
        expect(['8', '9', 'a', 'A', 'b', 'B']).toContain(variantChar);
    });

    it('should generate unique UUIDs for multiple calls', () => {
        const uuid1 = generateUUID();
        const uuid2 = generateUUID();
        expect(uuid1).not.toEqual(uuid2);  // They should not be the same
    });
});
