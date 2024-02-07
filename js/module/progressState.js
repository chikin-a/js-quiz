const progressState = (length) => {
  const part = 100 / length
  const progress = (document.querySelector('progress').value += part)
}

export default progressState
