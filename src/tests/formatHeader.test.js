const formatHeader = require('../utils/formatHeader');

describe('formatHeader', () => {
  it('should format headers with underscores to capitalized words', () => {
    expect(formatHeader('my_company_name')).toBe('My Company Name');
  });

  it('should capitalize a single lowercase word', () => {
    expect(formatHeader('email')).toBe('Email');
  });

  it('should handle keys that are already formatted', () => {
    expect(formatHeader('First Name')).toBe('First Name');
  });

  it('should return an empty string if input is empty', () => {
    expect(formatHeader('')).toBe('');
  });

  it('should not break with numeric keys', () => {
    expect(formatHeader('my_1_data')).toBe('My 1 Data');
  });
});
