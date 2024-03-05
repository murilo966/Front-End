import { soma, subtrai, divide, multiplica } from "./matematica";

describe('teste de funções de matemática', () => {
    it('Soma corretamente',() => {
        let result = soma(10,2);
        expect(result).toBe(12);
        expect(result).toBeGreaterThan(11);
        expect(result).toBeLessThan(13);
    })

    it('Subtrai corretamente', () => {
        let result = subtrai(15,7);
        expect(result).toBe(8)
    })

    it('Multiplica corretamente', () => {
        let result = multiplica(10,7);
        expect(result).toBe(70)
    })

    it('Divide corretamente', () => {
        let result = divide(8,2);
        expect(result).toBe(4)
    })
})