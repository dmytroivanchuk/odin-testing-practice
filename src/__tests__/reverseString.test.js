import reverseString from '../reverseString';

test('reverseString', () => {
  const testCases = [
    { received: 'Hello', expected: 'olleH' },
    { received: 'World', expected: 'dlroW' },
  ];

  testCases.forEach((testCase) => {
    const received = reverseString(testCase.received);
    expect(received).toBe(testCase.expected);
  });
});
