// Ejercicio 12
/* Tenemos dos conjuntos de personas y para cada persona sabemos su habilidad de baile. Queremos
armar la máxima cantidad de parejas de baile, sabiendo que para cada pareja debemos elegir
exactamente una persona de cada conjunto de modo que la diferencia de habilidad sea menor o
igual a 1 (en módulo). Además, cada persona puede pertenecer a lo sumo a una pareja de baile.
Por ejemplo, si tenemos un multiconjunto con habilidades {1, 2, 4, 6} y otro con {1, 5, 5, 7, 9}, la
máxima cantidad de parejas es 3. Si los multiconjuntos de habilidades son {1, 1, 1, 1, 1} y {1, 2, 3},
la máxima cantidad es 2. */

function parejasDeBaile(A, B, i, j) {
  if (i >= A.length || j >= B.length) return 0;
  if (Math.abs(A[i] - B[j]) <= 1) {
    return 1 + parejasDeBaile(A, B, i + 1, j + 1);
  }
  if (A[i] < B[j]) {
    return parejasDeBaile(A, B, i + 1, j);
  }
  if (A[i] > B[j]) {
    return parejasDeBaile(A, B, i, j + 1);
  }
}

console.log(parejasDeBaile([1, 2, 4, 6], [1, 5, 5, 7, 9], 0, 0));
