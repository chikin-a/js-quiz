import quizDB from './module/quizDB.js'
import generateQuest from './module/generateQuest.js'
import progressState from './module/progressState.js'
import stepState from './module/stepState.js'
import scoring from './module/scoring.js'
import generateScore from './module/generateScore.js'

const solution = []

generateQuest(quizDB, solution.length)

const nextButton = document
  .querySelector('.button-next')
  .addEventListener('click', () => {
    if (quizDB.length !== solution.length) {
      const quest = document.querySelectorAll('input[name="quest"]:checked')

      if (quest.length < 1) return console.error('please select variant')

      quest.forEach((i) => solution.push(i.value))

      progressState(quizDB.length)
      stepState(solution.length)

      if (quizDB.length <= solution.length) {
        const quiz = document.querySelector('.quiz')
        const quizForm = document.querySelector('.quiz-form')
        const correctAnswers = quizDB.map((obj) => obj.solution)

        quizForm.classList.add('hide')
        setTimeout(() => {
          const score = scoring(correctAnswers, solution)
          quiz.innerHTML = `<p class="score">${score}/12</p> `
        }, 400)

        return undefined
      }

      generateQuest(quizDB, solution.length)
    }
  })
