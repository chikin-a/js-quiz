const generateQuest = (arr, i) => {
  const quizBody = document.querySelector('.quiz-body')
  const progress = document.querySelector('progress')
  const step = document.querySelector('.quiz-step')

  let temp = 100 / arr.length

  progress.value += temp

  step.textContent = `Питання ${i + 1}`

  const { quest, solution } = arr[i]
  const { answers } = arr[i]

  quizBody.innerHTML = `
    <label for="quest" class="question">${quest}</label>
    <div class="answers">
      <div class="answers-item">
       <input name="quest" value="a" type="radio" /> ${answers[0]}
      </div>
      <div class="answers-item">
       <input name="quest" value="b" type="radio" /> ${answers[1]}
      </div>
      <div class="answers-item">
       <input name="quest" value="c" type="radio" /> ${answers[2]}
      </div>
    </div>
  `
}

export default generateQuest
