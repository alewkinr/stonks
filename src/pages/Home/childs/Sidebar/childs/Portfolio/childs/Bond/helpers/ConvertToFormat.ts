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
function convertToFormat(value: number): string {

    const normilizedValue = normilize(value.toString());
    const formatter = new Intl.NumberFormat("ru");

    const format = formatter.format(normilizedValue);

    return format === "не число" ? "" : format;
}

/**
 * Нормализует значение и приводит к числу.
 *
 * @param value Строковое значение.
 * @returns Числовое значение.
 */
function normilize(value: string): number {
    const MAX_LIMIT = 100;

    if (!value) {
        return 0;
    }

    const clearValue = value.replace(/[^\d+]/gm, "");
    let number = Number.parseInt(clearValue);

    if (number > MAX_LIMIT) {
        number = MAX_LIMIT;
    }

    return number;
}

// customParseInt - враппер для parseInt
function customParseInt(value: string): number {
    let res = Number.parseInt(value, 10);
    if (isNaN(res)) {
        return 0;
    }
    return res;
};

export { convertToFormat, customParseInt };
