const saudacao = require('./teste')

describe('', () => {
    it('Saudações', () => {
        expect(saudacao('Olá')).toBe('Olá');
    });

    it('Errado', () => {
        expect(saudacao('Oi').toBe('Bem vinda'))
    })
})