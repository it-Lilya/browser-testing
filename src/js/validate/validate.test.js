import { validate } from './validate';

test.each([
  ['invalid', '1234', false],
  ['valid', '123456789123', true],
])(('valid test'), (_, value, expected) => {
  expect(validate(value)).toBe(expected);
});
