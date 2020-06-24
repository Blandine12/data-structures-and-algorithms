const HashTable = require('./HashTable.js');

describe('HashTable tests', () => {
  const map = new HashTable(20);

  it('Adds a key/value to your hashtable', () => {
    map.add('strawbery', 'my best fruit');
    expect(map.contains('strawbery')).toBe(true);
    let indx = map.hash('strawbery');
    expect(map.map[indx].val).toEqual('my best fruit');
  });

});