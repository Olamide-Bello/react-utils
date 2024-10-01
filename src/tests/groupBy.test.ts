import groupBy from '../utils/groupBy';

describe('groupBy', () => {
    type Item = { category: string | null | undefined, value: number };

    it('should group by a valid key', () => {
        const data: Item[] = [
            { category: 'fruit', value: 10 },
            { category: 'vegetable', value: 20 },
            { category: 'fruit', value: 30 },
            { category: 'vegetable', value: 40 },
        ];

        const result = groupBy(data, 'category');

        expect(result).toEqual({
            fruit: [
                { category: 'fruit', value: 10 },
                { category: 'fruit', value: 30 }
            ],
            vegetable: [
                { category: 'vegetable', value: 20 },
                { category: 'vegetable', value: 40 }
            ]
        });
    });

    it('should group by a key with null and undefined values', () => {
        const data: Item[] = [
            { category: 'fruit', value: 10 },
            { category: null, value: 20 },
            { category: 'vegetable', value: 30 },
            { category: undefined, value: 40 },
        ];

        const result = groupBy(data, 'category');

        expect(result).toEqual({
            fruit: [{ category: 'fruit', value: 10 }],
            null: [{ category: null, value: 20 }],
            vegetable: [{ category: 'vegetable', value: 30 }],
            undefined: [{ category: undefined, value: 40 }]
        });
    });

    it('should return an empty object if input array is empty', () => {
        const data: Item[] = [];
        const result = groupBy(data, 'category');
        expect(result).toEqual({});
    });

    it('should group by a numeric key', () => {
        const data = [
            { age: 25, name: 'Alice' },
            { age: 30, name: 'Bob' },
            { age: 25, name: 'Charlie' },
        ];

        const result = groupBy(data, 'age');
        
        expect(result).toEqual({
            '25': [
                { age: 25, name: 'Alice' },
                { age: 25, name: 'Charlie' }
            ],
            '30': [{ age: 30, name: 'Bob' }]
        });
    });
});
