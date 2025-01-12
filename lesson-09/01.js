/*
Напишите свою версию метода `filter`.
Ваша задача — создать функцию `filter`, которая принимает два параметра:

- `array` (массив, над которым выполняется операция),
- `callback` (функция, которая вызывается для каждого элемента массива).

Функция `callback` должна принимать два параметра:

- `element` (текущий элемент массива)
- `index` (индекс текущего элемента)

Функция `filter` должна возвращать новый массив, содержащий только те элементы `array`, для которых `callback` возвращает `true`.
*/





// console.log(oddNumbers) // Должен вывести: [1, 3, 5]
// */
// let callback = (element, index) => {
  
// }

// const numbers = [1, 2, 3, 4, 5]

const filter = (array, callback) => {
  let resultArray = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i)) {
      resultArray.push(array[i]);
    }
  }
  return resultArray;
};



// const oddNumbers = filter(numbers, (element) => {
//   return element % 2 !== 0
// });

