const stepState = (i) => {
  const step = (document.querySelector('.quiz-step').textContent = `Питання ${
    i + 1
  }`)
}

export default stepState
