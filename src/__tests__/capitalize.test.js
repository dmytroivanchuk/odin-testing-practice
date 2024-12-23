import capitalize from '../capitalize';

test('capitalize', () => {
  const testCases = [
    { received: 'hello', expected: 'Hello' },
    { received: 'world', expected: 'World' },
  ];

  testCases.forEach((testCase) => {
    const received = capitalize(testCase.received);
    expect(received).toBe(testCase.expected);
  });
});
