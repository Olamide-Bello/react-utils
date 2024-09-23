import getAllQueryParams from '../utils/getAllQueryParams';

describe('getAllQueryParams', () => {
    it('should return all query params with their values', () => {
        const url = 'https://example.com/?foo=1&bar=2';
        const result = getAllQueryParams(url);
        expect(result).toEqual({ foo: '1', bar: '2' });
    });

    it('should return null for query params without values', () => {
        const url = 'https://example.com/?foo&bar=2';
        const result = getAllQueryParams(url);
        expect(result).toEqual({ foo: null, bar: '2' });
    });

    it('should return null for query params with empty values', () => {
        const url = 'https://example.com/?foo=&bar=2';
        const result = getAllQueryParams(url);
        expect(result).toEqual({ foo: null, bar: '2' });
    });

    it('should return an empty object if there are no query parameters', () => {
        const url = 'https://example.com/';
        const result = getAllQueryParams(url);
        expect(result).toEqual({});
    });

    it('should handle URLs with special characters in query params', () => {
        const url = 'https://example.com/?foo=%20hello&bar=2';
        const result = getAllQueryParams(url);
        expect(result).toEqual({ foo: ' hello', bar: '2' }); // '%20' is decoded to a space
    });
});
