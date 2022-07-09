// // ## Example 1 - Базовые операции с массивом

// // 1. Создайте массив `genres` с элементами «Jazz» и «Blues».
// // 2. Добавьте «Рок-н-ролл» в конец.
// // 3. Выведите в консоль первый элемент массива.
// // 4. Выведите в консоль последний элемент массива. Код должен работать для массива
// //    произвольной длины.
// // 5. Удалите первый элемент и выведите его в консоль.
// // 6. Вставьте «Country» и «Reggy» в начало массива.

// const genres = ["Rock", "Blues", "Jazz", "Pop", "Classic"];
// console.log(genres.pop()); // выводит последний элемент массива
// console.log(genres.shift());  // выводит первый элемент массива
// console.log(genres.unshift("Rap", "Reggy")); // добавляет элемент в начало массива
// console.log(genres);
// console.log(genres.push("Rock-n-Roll")); // добавляет элемент в конец массива
// console.log(genres);
// console.log(genres[0]); // выводит первый элемент массива
// console.log(genres[genres.length - 1]); // выводит последний элемент массива


// // ## Example 2 - Массивы и строки

// // Напиши скрипт для вычисления площади прямоугольника со сторонами, значения
// // которых хранятся в переменной `values` в виде строки. Значения гарантированно
// // разделены пробелом.

// const values = "5 9";
// const numbers = values.split(" ");
// console.log(numbers);
// const result = numbers[0] * numbers[1];
// console.log(result);



// // ## Example 3 - Перебор массива

// // Напиши скрипт для перебора массива `fruits` циклом `for`. Для каждого элемента
// // массива выведи в консоль строку в формате `номер_элемента: значение_элемента`.
// // Нумерация элементов должна начинаться с `1`.

// // // ```js
// const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];
// // // ```

// for (const fruit of fruits) {
//     console.log(`${fruits.indexOf(fruit) + 1}: ${fruit}`);
    
// }


function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line

  for (let i = 0; i < order.length; i += 1) {
    total += order[i];
  }

  // Change code above this line
  return total;
}