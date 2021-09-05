function billetes(B, i, j, C) {
  if (C[i][j]) {
    return C[i][j];
  }
  let resp = [];
  if (j <= 0) resp = [0, j];
  if (i == B.length - 1 && j > 0) resp = [1000000, 10000000];
  if (i == B.length - 1) resp = [0, j];

  const q1 = billetes(B, i + 1, j, C);
  const q2 = billetes(B, i + 1, j - B[i], C);
  q2[0]++;

  if (Math.abs(q1[1]) < Math.abs(q2[1])) {
    resp = q1;
  } else {
    if (Math.abs(q1[1]) == Math.abs(q2[1])) {
      if (q1[0] < q2[0]) {
        resp = q1;
      } else {
        resp = q2;
      }
    } else {
      resp = q2;
    }
  }
  C[i][j] = resp;
  return C[i][j];
}
console.log(
  billetes([2, 3, 5, 10, 20, 20], 0, 14, [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ])
);
