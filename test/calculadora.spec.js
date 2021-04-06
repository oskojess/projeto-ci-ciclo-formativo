const calculadora = require('../src/calculadora');

test('soma 1 e 2 tem que ser igual a 3', () => {
	const resultado = calculadora.soma(1,2);

	expect(resultado).toEqual(3);
});

test('subtracao 3 e 1 tem que ser igual a 2', () => {
	const resultado = calculadora.subtrai(3, 1);

	expect(resultado).toEqual(3);
})
