import dbConfig from '../src/config/config';

describe('config', () => {
  test('config.ts', () => {
    expect(dbConfig.username).toBe('root');
    expect(dbConfig.password).toBe('');
    expect(dbConfig.hostname).toBe('localhost');
    expect(dbConfig.name).toBe('db_notes_api');
    expect(dbConfig.dialect).toBe('mysql');
  });
});
