import request from 'supertest';
import app from '../src/app';

test('test awal', async () => {
  const res = await request(app).get('/');
  expect(res.text).toBe('hallo');
});

test('test env', async () => {
  const res = await request(app).get('/env');
  expect(res.text).toBe('NOTES-API-TEST');
});
