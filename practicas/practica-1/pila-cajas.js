function pilaCajas(w, s, i, peso) {
  if (i == -1) return 0;

  if (s[i] >= peso) {
    const pila1 = 1 + pilaCajas(w, s, i - 1, peso + w[i]);
    const pila2 = pilaCajas(w, s, i - 1, peso);
    return Math.max(pila1, pila2);
  } else {
    return pilaCajas(w, s, i - 1, peso);
  }
}

function pilaCajasPD()

console.log(pilaCajas([19, 7, 5, 6, 1], [15, 13, 7, 8, 2], 4, 0));
