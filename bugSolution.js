function foo(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // Or handle the non-number case appropriately.
  }
  return a + b; // Add the numbers
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: NaN
console.log(foo(1, null)); // Output: NaN
console.log(foo(0, 2)); // Output: 2
console.log(foo(1, "")); // Output: NaN
console.log(foo(false, 2)); // Output: NaN