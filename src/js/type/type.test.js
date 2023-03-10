import { type } from './type';

test.each([
  ['test1', '4556380073705879', '.visa'],
  ['test2', '5384458842538303', '.master'],
  ['test3', '348999468551423', '.amex'],
  ['test4', '6011979860750719', '.discover'],
  ['test5', '2202675930384373', '.mir'],
])(('type card'), (_, value, expected) => {
  expect(type(value)).toBe(expected);
});
