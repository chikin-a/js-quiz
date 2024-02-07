const scoring = (correctAnswers, answers) => {
  let score = 0

  for (let i = 0; i < correctAnswers.length; i++) {
    for (let j = 0; j < correctAnswers[i].length; j++) {
      if (correctAnswers[i][j] == answers[i][j]) score++
    }
  }

  return score
}

export default scoring
