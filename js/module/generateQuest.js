const generateQuest = (arr, i) => {
  const quizBody = document.querySelector('.quiz-body')
  const { type, quest } = arr[i]
  const { answers } = arr[i]

  quizBody.innerHTML = `
    <label for="quest" class="question">${quest}</label>
    <div class="answers">
      <div class="answers-item">
       <input name="quest" value="a" type="${type}" /> ${answers[0]}
      </div>
      <div class="answers-item">
       <input name="quest" value="b" type="${type}" /> ${answers[1]}
      </div>
      <div class="answers-item">
       <input name="quest" value="c" type="${type}" /> ${answers[2]}
      </div>
    </div>
  `
}

export default generateQuest
