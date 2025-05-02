const formatUsers = require('../utils/formatUsers');

describe('formatUsers', () => {
  it('should format users properly', () => {
    const inputUser = [
      {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
          street: 'Kulas Light',
          suite: 'Apt. 556',
          city: 'Gwenborough',
          zipcode: '92998-3874',
          geo: {
            lat: '-37.3159',
            lng: '81.1496',
          },
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
          name: 'Romaguera-Crona',
          catchPhrase: 'Multi-layered client-server neural-net',
          bs: 'harness real-time e-markets',
        },
      },
    ];

    const expected = [
      {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        street: 'Kulas Light',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company_name: 'Romaguera-Crona',
      },
    ];

    expect(formatUsers(inputUser)).toEqual(expected);
  });
});
