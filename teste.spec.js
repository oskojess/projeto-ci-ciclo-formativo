const saudacao = require('./teste')

describe('', () => {
  it('Saudações', () => {
      expect(saudacao('Olá')).toBe('Olá');
  })
})