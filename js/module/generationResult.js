import { DB } from './DB.js'

export const generationResult = (s) => {
  const quiz = document.querySelector('.quiz')
  const quizForm = document.querySelector('.quiz-form')

  quizForm.classList.add('hide')
  setTimeout(() => {
    quiz.innerHTML = `<p class="score">${s}/${DB.length}</p> `
  }, 400)
}
