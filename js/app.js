import quizDB from './module/quizDB.js'
import generateQuest from './module/generateQuest.js'
import scoring from './module/scoring.js'

const btn = document.querySelector('.button-next')
const solution = []
let page = 0

btn.addEventListener('click', () => {
  try {
    const quest = document.querySelector('input[name="quest"]:checked').value

    page++

    solution.push(quest)
    generateQuest(quizDB, page)
  } catch (error) {
    console.log('Please, select variant')
  }

  if (solution.length >= quizDB.length) {
    const quiz = document.querySelector('.quiz')
    const quizForm = document.querySelector('.quiz-form')
    const correctAnswers = quizDB.map((obj) => obj.solution)

    quizForm.classList.add('hide')
    setTimeout(() => {
      const score = scoring(correctAnswers, solution)
      quiz.innerHTML = `<p class="score">${score}/12</p> `
    }, 400)
  }
})

generateQuest(quizDB, page)
