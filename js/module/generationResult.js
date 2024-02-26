import { DB } from './DB.js'

export const generationResult = (s) => {
  const quiz = document.querySelector('.quiz')
  const container = quiz.querySelector('.container')
  const quizForm = document.querySelector('.quiz-form')
  const quizResult = document.createElement('div')
  const resultSolution = document.createElement('p')
  quizResult.classList.add('quiz-result')
  resultSolution.classList.add('result-solution')

  quizForm.classList.add('hide')

  DB.forEach((el) => (quizResult.innerHTML += `<h3>${el.question}</h3>`))

  setTimeout(() => {
    // quiz.innerHTML = `<p class="score">${s}/${DB.length}</p> `
    quizForm.remove()
    container.appendChild(quizResult)
  }, 400)
}
