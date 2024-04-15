// TODO: write your code here
import sum from './basic';

class Validator {
	validateUsername(username) {
			// Регулярное выражение для проверки имени пользователя
			const usernameRegex = /^(?!^\d)[a-zA-Z0-9_-]+(?<![^\w-])$/;

			// Проверка имени пользователя с помощью регулярного выражения
			return usernameRegex.test(username) && !/\d{4,}/.test(username) && !/_$/.test(username);
	}
}

module.exports = Validator; 