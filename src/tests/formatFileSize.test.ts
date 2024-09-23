import formatFileSize from '../utils/formatFileSize';

describe('formatFileSize', () => {
    it('should format file sizes less than 1 KB correctly', () => {
        expect(formatFileSize(500)).toBe('500.00 Bytes');
        expect(formatFileSize(1023)).toBe('1023.00 Bytes');
    });

    it('should format file sizes in KB correctly', () => {
        expect(formatFileSize(1024)).toBe('1.00 KB');
        expect(formatFileSize(1500)).toBe('1.46 KB');
        expect(formatFileSize(10240)).toBe('10.00 KB');
    });

    it('should format file sizes in MB correctly', () => {
        expect(formatFileSize(1048576)).toBe('1.00 MB');
        expect(formatFileSize(5242880)).toBe('5.00 MB');
    });

    it('should format file sizes in GB correctly', () => {
        expect(formatFileSize(1073741824)).toBe('1.00 GB');
        expect(formatFileSize(3221225472)).toBe('3.00 GB');
    });

    it('should format file sizes in TB correctly', () => {
        expect(formatFileSize(1099511627776)).toBe('1.00 TB');
        expect(formatFileSize(2199023255552)).toBe('2.00 TB');
    });
});
