// Ejercicio 13
/* Queremos encontrar la suma de los elementos de un multiconjunto de números naturales. Cada
suma se realiza exactamente entre dos números x e y y tiene costo x + y.
Por ejemplo, si queremos encontrar la suma de {1, 2, 5} tenemos 3 opciones:
    1 + 2 (con costo 3) y luego 3 + 5 (con costo 8), resultando en un costo total de 11;
    1 + 5 (con costo 6) y luego 6 + 2 (con costo 8), resultando en un costo total de 14;
    2 + 5 (con costo 7) y luego 7 + 1 (con costo 8), resultando en un costo total de 15.
*/

// El algortimo de costo minimo utilizaria una estructura
// como min-heap y una busqueda del minimo en O(1)

// Asumimos A ordenado
function minimoCosto(A) {
  let res = A[0] + A[1];
  for (let i = 2; i < A.length; i++) {
    let minimo = A[i];

    res = res + (res + minimo);
  }
  return res;
}

console.log(minimoCosto([1, 2, 5]));
