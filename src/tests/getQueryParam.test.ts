import getQueryParam from '../utils/getQueryParam';

describe('getQueryParam', () => {
    it('should return the correct value for an existing query parameter', () => {
        const url = 'https://example.com/?name=Alice&age=30';
        expect(getQueryParam(url, 'name')).toBe('Alice');
        expect(getQueryParam(url, 'age')).toBe('30');
    });

    it('should return the default value for a non-existing query parameter', () => {
        const url = 'https://example.com/?name=Alice';
        expect(getQueryParam(url, 'age')).toBe('');
        expect(getQueryParam(url, 'gender', 'unknown')).toBe('unknown');
    });

    it('should return the default value if the parameter exists but is empty', () => {
        const url = 'https://example.com/?name=Alice&age=';
        expect(getQueryParam(url, 'age')).toBe('');
        expect(getQueryParam(url, 'gender', 'unknown')).toBe('unknown');
    });

    it('should handle URLs without any query parameters', () => {
        const url = 'https://example.com/';
        expect(getQueryParam(url, 'name')).toBe('');
        expect(getQueryParam(url, 'age', 'unknown')).toBe('unknown');
    });

    it('should return the correct value for a URL with multiple same parameters', () => {
        const url = 'https://example.com/?name=Alice&name=Bob';
        expect(getQueryParam(url, 'name')).toBe('Alice'); // getQueryParam returns the first value
    });
});
