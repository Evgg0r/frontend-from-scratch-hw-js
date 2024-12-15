// Задание 1: reverseString(str)
// Напиши функцию reverseString(str), которая принимает строку и возвращает её в обратном порядке. Например:

// Ввод: "hello"

// Вывод: "olleh"

let reverseString = (str) => {

  let newStr = str.split("")

  let newArr = []

  for (let i = newStr.length - 1; i >= 0; i--) {
    newArr.push(newStr[i])
  }

  return newArr.join('')
}

