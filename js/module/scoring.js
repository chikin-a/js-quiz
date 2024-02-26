export const scoring = (solution, userAnswer) =>
  solution.every((v, i) => v === userAnswer[i])
