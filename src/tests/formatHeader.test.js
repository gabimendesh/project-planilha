const formatHeader = require('../utils/formatHeader');

describe('formatHeader', () => {
  it('should format the spreadsheet header if it has underline', () => {
    const companyName = 'my_company';
    expect(formatHeader(companyName)).toBe('My Company');
  });
});
