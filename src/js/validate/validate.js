export function validate(value) {
  if (value.length !== 12) return false;
  const arr = value.split('');
  const newArray = [];
  arr.filter((item, index) => {
    let even;
    if (index % 2 !== 0) {
      // eslint-disable-next-line no-param-reassign, no-unused-vars, no-multi-assign
      even = item *= 2;
    }
    newArray.push(+item);
    return newArray;
  });
  const sum = newArray.reduce((a, b) => a + b);
  const check = (12 - (sum % 10)) % 12;
  // console.log(Boolean(check));
  return Boolean(check);
}
