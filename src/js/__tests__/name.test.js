const Validator = require('../app'); 

describe('Validator', () => {
    const validator = new Validator();

    it('Должно подтвердить действительное имя пользователя', () => {
        expect(validator.validateUsername('john_doe123')).toBe(true);
    });

    it('Должно сделать недействительным имя пользователя, содержащее недопустимые символы', () => {
        expect(validator.validateUsername('user$%name')).toBe(false);
    });

    it('Должно сделать недействительным имя пользователя, начинающееся с цифры', () => {
        expect(validator.validateUsername('1user')).toBe(false);
    });

    it('Должно сделать недействительным имя пользователя, заканчивающееся подчеркиванием', () => {
        expect(validator.validateUsername('user_')).toBe(false);
    });

    it('Должно сделать недействительным имя пользователя, содержащее более трех цифр подряд', () => {
        expect(validator.validateUsername('user1234')).toBe(false);
    });

    it('Должно проверить имя пользователя, содержащее не более трех цифр подряд', () => {
        expect(validator.validateUsername('user123')).toBe(true);
    });
});