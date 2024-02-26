import { DB } from './module/DB.js'
import { generationQuest } from './module/generationQuest.js'
import { stateProgressBar } from './module/stateProgressBar.js'
import { stateCounter } from './module/stateCounter.js'
import { scoring } from './module/scoring.js'
import { generationResult } from './module/generationResult.js'

export let currentCount = 0
let totalScore = 0

const nextButton = document
  .querySelector('.next')
  .addEventListener('click', () => {
    try {
      const selectedVariants = document.querySelectorAll('input[name="quest"]')
      const questData = DB[currentCount]
      const userSolution = [...selectedVariants].map((el) => {
        if (el.checked) return parseInt(el.value)
      })

      currentCount++
      stateProgressBar(currentCount)

      if (scoring(questData.solution, userSolution)) totalScore++

      if (currentCount === DB.length) {
        generationResult(totalScore)
        console.log('end')
      } else {
        generationQuest()
        stateCounter(currentCount)
      }
    } catch (error) {
      console.error(error)
    }
  })

generationQuest()
