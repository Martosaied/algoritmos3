function astroVoid(p, j, c, B) {
  console.log("c", c);
  console.log("j", j);
  let res;
  if (c > j || c < 0) return 0;
  if (B[p[j]][c]) return B[p[j]][c];
  const av1 = astroVoid(p, j - 1, c - 1, B) - p[j];
  const av2 = astroVoid(p, j - 1, c + 1, B) + p[j];
  const av3 = astroVoid(p, j - 1, c, B);

  res = Math.max(av1, av2, av3);
  B[p[j]][c] = res;

  return res;
}

console.log(
  astroVoid([3, 6, 10], 2, 2, [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ])
);

// NO FUNCIONA, solo con el primer ejemplo funca
