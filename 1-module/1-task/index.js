function factorial(n) {
  let x = 1;
  let i;
  for (i = 1; i <= n; i++) {
    x = x * i;
  }
  return (x);
}