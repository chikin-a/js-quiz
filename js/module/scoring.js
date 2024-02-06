const scoring = (correctAnswers, answers) => {
  let score = 0

  for (let i = 0; i < correctAnswers.length; i++) {
    if (correctAnswers[i] == answers[i]) score++
  }

  return score
}

export default scoring
