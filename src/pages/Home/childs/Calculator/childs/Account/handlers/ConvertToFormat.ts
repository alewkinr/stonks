/**
 * Конвертирует пользовательское значение в формат
 * отображения числа для региона `ru-RU`.
 * 
 * @example
 * 123123123 => 123 123 123
 *
 * @param {string} value Пользовательское значение.
 * @returns {string} Отформатированное значение.
 */
const convertToFormat = (value: string): string => {
	const formatter = new Intl.NumberFormat("ru");
	const cleanValue = value.replace(/\s/gm, "");

	const format = formatter.format(Number.parseInt(cleanValue));

	return format === "не число" ? "" : format;
}

export { convertToFormat };
