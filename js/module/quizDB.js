const quizDB = [
  {
    type: 'checkbox',
    quest: 'Що таке DOM в контексті JavaScript?',
    answers: [
      'Document Object Model',
      'Data Object Model',
      'Document Order Model',
    ],
    solution: ['a', 'c'],
  },
  {
    type: 'radio',
    quest: 'Яка функція викликається автоматично при завантаженні сторінки?',
    answers: ['onload()', 'onready()', 'onstart()'],
    solution: ['a'],
  },
  {
    type: 'radio',
    quest: 'Як створити змінну в JavaScript?',
    answers: ['int myVar', 'variable myVar', 'let myVar'],
    solution: ['c'],
  },
  {
    type: 'radio',
    quest: 'Яким методом можна додати елемент в кінець масиву?',
    answers: ['push()', 'append()', 'addToEnd()'],
    solution: ['a'],
  },
  {
    type: 'radio',
    quest: 'Як перевірити тип даних змінної?',
    answers: ['typeof myVar', 'typeOf(myVar)', 'myVar.type()'],
    solution: ['a'],
  },
  {
    type: 'radio',
    quest: 'Як викликати функцію через певний інтервал часу?',
    answers: ['setInterval()', 'setTimeout()', 'setTimeInterval()'],
    solution: ['b'],
  },
  {
    type: 'radio',
    quest: 'Як перевірити, чи існує змінна чи об`єкт в JavaScript?',
    answers: [
      'exists(variable)',
      'isDefined(variable)',
      'typeof variable !== "undefined"',
    ],
    solution: ['c'],
  },
  {
    type: 'radio',
    quest: 'Яка різниця між == та === в операторах порівняння?',
    answers: [
      '== порівнює значення без перевірки типу',
      '=== порівнює значення та тип даних',
      'Обидва роблять однакові порівняння',
    ],
    solution: ['b'],
  },
  {
    type: 'radio',
    quest: 'Що таке замикання (closure) в контексті JavaScript?',
    answers: [
      'Замикання дверей в об`єктах',
      'Функція, яка має доступ до змінних зовнішньої функції',
      'Замикання клавіші вводу',
    ],
    solution: ['b'],
  },
  {
    type: 'radio',
    quest: 'Як вивести повідомлення в консоль в JavaScript?',
    answers: ['console.print()', 'log.console()', 'console.log()'],
    solution: ['c'],
  },
  {
    type: 'radio',
    quest: 'Як використовувати localStorage для зберігання даних на клієнті?',
    answers: ['localData.save()', 'storage.set()', 'localStorage.setItem()'],
    solution: ['c'],
  },
  {
    type: 'radio',
    quest: 'Що таке AJAX в JavaScript?',
    answers: [
      'Asynchronous JavaScript and XML',
      'Advanced JavaScript and XML',
      'Asynchronous JavaScript and XHTML',
    ],
    solution: ['a'],
  },
]

export default quizDB
