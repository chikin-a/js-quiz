import { currentCount } from '../app.js'
import { DB } from './DB.js'

export const generationQuest = () => {
  const quest = document.querySelector('.quest')
  const questVariants = document.createElement('div')
  const questData = DB[currentCount]

  for (let i = 0; i < questData.variants.length; i++) {
    questVariants.innerHTML += `
      <div class="variants-item">
        <input type="${questData.type}" name="quest" value="${i}"> ${questData.variants[i]}
      </div>
    `
  }

  quest.replaceChildren(questVariants)
}
