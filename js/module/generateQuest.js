const generateQuest = (arr, i) => {
  const { type, quest } = arr[i]
  const { answers } = arr[i]

  const question = (document.querySelector('.question').textContent = quest)
  const answersItems = document.querySelectorAll('.answers-item')

  answersItems[0].innerHTML = `<input name="quest" value="a" type="${type}" /> ${answers[0]}`
  answersItems[1].innerHTML = `<input name="quest" value="b" type="${type}" /> ${answers[1]}`
  answersItems[2].innerHTML = `<input name="quest" value="c" type="${type}" /> ${answers[2]}`
}

export default generateQuest
