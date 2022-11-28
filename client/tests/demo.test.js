test('Esta prueba no debe de fallar', () => {
    if (1 === 0) {
        throw new Error('No pudes dividir entre 0')
    }
})