import healthCheck from '../healthBar';

test('test healthy status', () => {
  const data = { name: 'Маг', health: 90 };
  const result = healthCheck(data);
  expect(result).toBe('healthy');
});

test('test healthy status', () => {
  const data = { name: 'Маг', health: 40 };
  const result = healthCheck(data);
  expect(result).toBe('wounded');
});

test('test healthy status', () => {
  const data = { name: 'Маг', health: 10 };
  const result = healthCheck(data);
  expect(result).toBe('critical');
});
