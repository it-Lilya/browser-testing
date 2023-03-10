export function type(value) {
  if (/^4/.test(value)) {
    return '.visa';
  } if (/^5[1-5]/.test(value)) {
    return '.master';
  } if (/^3[47]/.test(value)) {
    return '.amex';
  } if (/^[220(0|4)]/.test(value)) {
    return '.mir';
  } if (/^6(?:011|5)/.test(value)) {
    return '.discover';
  }
  return null;
}
