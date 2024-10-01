import isEmailValid from '../utils/isEmailValid';

describe('isEmailValid', () => {
    it('should return true for valid email addresses', () => {
      const validEmails = [
        'test@example.com',
        'user.name+tag+sorting@example.com',
        'user_name@domain.co.in',
        'customer/department=shipping@example.com',
      ];
  
      validEmails.forEach(email => {
        expect(isEmailValid(email)).toBe(true);
      });
    });
  
    it('should return false for invalid email addresses', () => {
      const invalidEmails = [
        'plainaddress',                // Missing @
        '@missingusername.com',        // Missing username
        'username@.com',               // Invalid domain name
        'username@domain..com',        // Double dot in domain
        'username@domain',             // No TLD
        'username@domain.c',           // Single character TLD
        'username@domain..com',        // Consecutive dots in domain
        'username@domain.com.',        // Trailing dot in domain
      ];
  
      invalidEmails.forEach(email => {
        expect(isEmailValid(email)).toBe(false);
      });
    });
  });