const generateScore = (score, arr) => {
  const quiz = document.querySelector('.quiz')
  const quizForm = document.querySelector('.quiz-form')
  let maxScore = 0

  arr.forEach((i) => {
    maxScore += i.solution.length
  })

  quizForm.classList.add('hide')
  setTimeout(() => {
    quiz.innerHTML = `<p class="score">${score}/${maxScore}</p> `
  }, 400)
}

export default generateScore
