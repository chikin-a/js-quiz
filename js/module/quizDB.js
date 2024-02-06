const quizDB = [
  {
    quest: 'Що таке DOM в контексті JavaScript?',
    answers: [
      'Document Object Model',
      'Data Object Model',
      'Document Order Model',
    ],
    solution: 'a',
  },
  {
    quest: 'Яка функція викликається автоматично при завантаженні сторінки?',
    answers: ['onload()', 'onready()', 'onstart()'],
    solution: 'a',
  },
  {
    quest: 'Як створити змінну в JavaScript?',
    answers: ['int myVar', 'variable myVar', 'let myVar'],
    solution: 'c',
  },
  {
    quest: 'Яким методом можна додати елемент в кінець масиву?',
    answers: ['push()', 'append()', 'addToEnd()'],
    solution: 'a',
  },
  {
    quest: 'Як перевірити тип даних змінної?',
    answers: ['typeof myVar', 'typeOf(myVar)', 'myVar.type()'],
    solution: 'a',
  },
  {
    quest: 'Як викликати функцію через певний інтервал часу?',
    answers: ['setInterval()', 'setTimeout()', 'setTimeInterval()'],
    solution: 'b',
  },
  {
    quest: 'Як перевірити, чи існує змінна чи об`єкт в JavaScript?',
    answers: [
      'exists(variable)',
      'isDefined(variable)',
      'typeof variable !== "undefined"',
    ],
    solution: 'c',
  },
  {
    quest: 'Яка різниця між == та === в операторах порівняння?',
    answers: [
      '== порівнює значення без перевірки типу',
      '=== порівнює значення та тип даних',
      'Обидва роблять однакові порівняння',
    ],
    solution: 'b',
  },
  {
    quest: 'Що таке замикання (closure) в контексті JavaScript?',
    answers: [
      'Замикання дверей в об`єктах',
      'Функція, яка має доступ до змінних зовнішньої функції',
      'Замикання клавіші вводу',
    ],
    solution: 'b',
  },
  {
    quest: 'Як вивести повідомлення в консоль в JavaScript?',
    answers: ['console.print()', 'log.console()', 'console.log()'],
    solution: 'c',
  },
  {
    quest: 'Як використовувати localStorage для зберігання даних на клієнті?',
    answers: ['localData.save()', 'storage.set()', 'localStorage.setItem()'],
    solution: 'c',
  },
  {
    quest: 'Що таке AJAX в JavaScript?',
    answers: [
      'Asynchronous JavaScript and XML',
      'Advanced JavaScript and XML',
      'Asynchronous JavaScript and XHTML',
    ],
    solution: 'a',
  },
]

export default quizDB
