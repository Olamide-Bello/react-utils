import formatAmount  from '../utils/formatAmount'

describe('formatAmount', () => {
    it('formats a number correctly', () => {
      expect(formatAmount(1000)).toBe('$1,000.00');
      expect(formatAmount(1234567.89)).toBe('$1,234,567.89');
    });
  
    it('handles zero and negative numbers', () => {
      expect(formatAmount(0)).toBe('$0.00');
      expect(formatAmount(-100)).toBe('-$100.00');
    });
  });