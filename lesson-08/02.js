/*
Задание: Реализация интерактивного отсчёта запуска ракеты

Цель задания: Написать код для обработки событий нажатия на кнопки "Старт" и "Отмена", реализуя обратный отсчёт с помощью JavaScript.

Задача:

1. Добавить обработчик событий для кнопки "Старт":

- При нажатии на кнопку "Старт" должен начаться обратный отсчёт с 3 до 1. Значение счётчика должно отображаться в элементе countdownDisplay. Цифра 3 должна отобразиться немедленно.
- Каждую секунду значение счётчика должно уменьшаться на 1.
- Когда счётчик достигнет 0, вместо 0 должен отображаться эмодзи ракеты "🚀" и таймер должен быть остановлен. Пользователь видит: 3 -> 2 -> 1 -> 🚀


2. Добавить обработчик событий для кнопки "Отмена":

- При нажатии на кнопку "Отмена" таймер должен быть остановлен
- В элементе отображения счётчика (countdownDisplay) должно появиться сообщение "Отменено".
- Отмена таймера возможна только во время его работы
- После отмены таймера возможен повторный запуск ракеты

Обратите внимание на корректность работы таймера: повторное нажатие на "Старт" не должно приводить к нескольким одновременно работающим таймерам.

Подсказки:
- 🧙‍♂️ Для выполнения этого задания нужно познакомиться с браузерными функциями setInterval (https://doka.guide/js/setinterval/) и clearInterval(https://doka.guide/js/clearinterval/). Они очень похоже на setTimeout и clearTimeout.
 */

const startButton = document.getElementById('start')
const cancelButton = document.getElementById('cancel')
const countdownDisplay = document.getElementById('countdown')

let isTimerStarted = false
let timerId

startButton.addEventListener('click', () => {
  let counter = 3
  // your code
  if (isTimerStarted) {
    return;
  }


  countdownDisplay.textContent = `${counter}`;
  isTimerStarted = true

  timerId = setInterval(function () {
    counter -= 1
    if (counter > 0) {
      countdownDisplay.textContent = `${counter}`;
    } else {
      countdownDisplay.textContent = "🚀";
      clearInterval(timerId)
      isTimerStarted = false
    }
  }, 1000)
})

cancelButton.addEventListener('click', () => {
  // your code
  if (isTimerStarted) {
    clearInterval(timerId)
    countdownDisplay.textContent = "Отменено"
    isTimerStarted = false
  }

})

// 2. Добавить обработчик событий для кнопки "Отмена":

// - При нажатии на кнопку "Отмена" таймер должен быть остановлен
// - В элементе отображения счётчика (countdownDisplay) должно появиться сообщение "Отменено".
// - Отмена таймера возможна только во время его работы
// - После отмены таймера возможен повторный запуск ракеты


// Описание задачи: Создать счетчик, который будет увеличивать значение каждую секунду, начиная с 0. У него должны быть две кнопки:

// "Старт": запускает счетчик.
// "Пауза": приостанавливает счетчик.
// Требования:

// При нажатии на кнопку "Старт" счетчик должен начинать увеличиваться каждую секунду.
// При нажатии на кнопку "Пауза" счетчик должен приостанавливать свое увеличение.
// После нажатия на "Пауза", если снова нажать "Старт", счетчик должен продолжать увеличиваться с того места, где остановился.
// Подсказки:

// Используй setInterval для увеличения счетчика.
// Используй clearInterval для остановки счетчика.
// Храни текущее значение счетчика в переменной.
// Примерный код (без реализации)

// const startButton = document.getElementById('start');
// const pauseButton = document.getElementById('pause');
// const counterDisplay = document.getElementById('counter');

// let counter = 0;
// let timerId;
// let isTimerRunning = false;

// startButton.addEventListener('click', () => {
//   // Реализуй логику запуска счетчика
//   if (isTimerRunning) {
//     return;
//   }

//   isTimerRunning = true
//   timerId = setInterval(() => {
//     counter += 1
//     counterDisplay.textContent = `${counter}`;
//   }, 1000);
// });

// pauseButton.addEventListener('click', () => {
//   // Реализуй логику паузы счетчика
//   if (isTimerRunning) {
//     clearInterval(timerId)
//     isTimerRunning = false;
//   }

// });