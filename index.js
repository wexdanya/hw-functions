// 1) написати функцію, яка повертає слово 'odd' або 'even', в залежності від прийнятого аргументу(число).
// Значення для перевірки функції вводить користувач.
/**
 *
 * @param {number} number
 * @returns {boolean}
 */
function isEven(number) {
  if (number % 2 === 0) {
    return "even";
  }
  return "odd";
}
console.log(isEven(11));

// 2)написати функцію, яка приймає два аргументи і, якщо аргументи одного типу, то повертає той,
//  який має більше значення (якщо значення рівні - повертаємо null), інакше(якщо різного типу) теж повертає null.
/**
 *
 * @param {any} value
 * @param {any} value2
 * @returns {number | null}
 */
function isSame(value, value2) {
  if (typeof value === typeof value2) {
    if (value === value2) {
      return null;
    }
    if (value > value2) {
      return value;
    }
    return value2;
  }
  return null;
}
console.log(isSame(1, 10));
