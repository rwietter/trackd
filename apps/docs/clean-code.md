## Clean Code

- Prefira simples a complexo;
- Prefira concreto a abstrato;
- Prefira explícito a implícito;
- Prefira raso a aninhado;
- Escreva código em inglês;
- Escreva código em camelCase.

---

Escreva números como constantes e escreva constantes com letra maiúscula.

Bad
```js
setTimeout(blastOff, 86400000);
```

Good
```js
const MILLISECONDS_PER_DAY = 60 * 60 * 24 * 1000; //86400000;

setTimeout(blastOff, MILLISECONDS_PER_DAY);
```

---

