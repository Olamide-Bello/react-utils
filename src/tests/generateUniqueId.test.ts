import generateUniqueId from '../utils/generateUniqueId';
import generateUUID from '../utils/generateUUID';

// Mock the generateUUID function
jest.mock('../utils/generateUUID');

describe('generateUniqueId', () => {
    beforeEach(() => {
        // Reset the mock before each test
        (generateUUID as jest.Mock).mockReset();
    });

    it('should generate a unique ID with the default prefix', () => {
        (generateUUID as jest.Mock).mockReturnValue('123e4567-e89b-12d3-a456-426614174000');
        
        const uniqueId = generateUniqueId();
        expect(uniqueId).toBe('id-123e4567-e89b-12d3-a456-426614174000');
    });

    it('should generate a unique ID with a custom prefix', () => {
        (generateUUID as jest.Mock).mockReturnValue('123e4567-e89b-12d3-a456-426614174000');
        
        const uniqueId = generateUniqueId('user');
        expect(uniqueId).toBe('user-123e4567-e89b-12d3-a456-426614174000');
    });

    it('should call generateUUID exactly once', () => {
        (generateUUID as jest.Mock).mockReturnValue('123e4567-e89b-12d3-a456-426614174000');
        
        generateUniqueId();
        expect(generateUUID).toHaveBeenCalledTimes(1);
    });
});
