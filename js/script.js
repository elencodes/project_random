//1 Создаем переменную alphabet, в которой будет храниться строка с алфавитом, из которых будем генерировать случайное слово.
const alphabet = `А Б В Г Д Е Ё Ж З И Й К Л М Н О П Р С Т У Ф Х Ц Ч Ш Щ Ъ Ы Ь Э Ю Я`
//2 Используя split, создаем новые массивы данных.
const alphabetResult = alphabet.split(` `);
// Ищем объект кнопки и текста в HTML документе для дальнейшего взаимодействия.
const button = document.querySelector(`#button`);
const text = document.querySelector(`#text`);
//3 Используя объект Math, создаем четыре случайных индекса в диапазоне от 0 до длины alphabet.
const randomWord = () => {
	//Создаем случайный индекс для первой буквы
	const randomIndexFirst = Math.floor(Math.random() * alphabetResult.length);
	//Создаем случайный индекс для второй буквы
	const randomIndexSecond = Math.floor(Math.random() * alphabetResult.length);
	//Создаем случайный индекс для третьей буквы
	const randomIndexThird = Math.floor(Math.random() * alphabetResult.length);
	//Создаем случайный индекс для четвертой буквы
	const randomIndexFourth = Math.floor(Math.random() * alphabetResult.length);
	//4 Используя полученные случайные индексы, извлекаем соответствующие символы из alphabet и объединяем их в строку, чтобы сформировать случайное слово.
	const randomWordResult = alphabetResult[randomIndexFirst] + alphabetResult[randomIndexSecond] + alphabetResult[randomIndexThird] + alphabetResult[randomIndexFourth];
	text.textContent = randomWordResult;
}
//5 Выводим полученное случайное слово на экран, чтобы проверить результат.
button.addEventListener(`click`, randomWord);