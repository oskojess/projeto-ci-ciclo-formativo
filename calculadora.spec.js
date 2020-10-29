const calcular = require('./calculadora');

describe('Calculadora', () => {
  it('Somar', () =>{
    expect(calcular.somar(1, 1)).toBe(2);
  });
});