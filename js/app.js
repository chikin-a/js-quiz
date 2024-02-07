import quizDB from './module/quizDB.js'
import generateQuest from './module/generateQuest.js'
import scoring from './module/scoring.js'

const solution = []
let page = 0

const btn = document
  .querySelector('.button-next')
  .addEventListener('click', () => {
    if (quizDB.length == solution.length) {
      return console.log('stop')
    }

    const quest = document.querySelectorAll('input[name="quest"]:checked')

    if (quest.length < 1) return console.error('please select variant')

    const tempSolution = []
    quest.forEach((i) => tempSolution.push(i.value))

    page++

    solution.push(tempSolution)

    console.log(solution)

    if (quizDB.length <= solution.length) {
      const quiz = document.querySelector('.quiz')
      const quizForm = document.querySelector('.quiz-form')
      const correctAnswers = quizDB.map((obj) => obj.solution)

      quizForm.classList.add('hide')
      setTimeout(() => {
        const score = scoring(correctAnswers, solution)
        quiz.innerHTML = `<p class="score">${score}/12</p> `
      }, 400)

      return console.log('stop')
    }

    generateQuest(quizDB, page)
  })

generateQuest(quizDB, page)
