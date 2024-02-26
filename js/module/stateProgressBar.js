import { DB } from './DB.js'

export const stateProgressBar = (v) => {
  const progressBar = document.querySelector('progress')
  progressBar.max = DB.length
  progressBar.value = v
}
