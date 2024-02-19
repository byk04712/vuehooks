import { ref, onUnmounted } from 'vue'

export const useTimer = (callback = () => { }, step = 1000) => {
  let timerVariableId = null
  let times = 0
  const isPaused = ref(false)

  const stop = () => {
    if (timerVariableId) {
      clearInterval(timerVariableId)
      timerVariableId = null
      resume()
    }
  }

  const start = () => {
    stop()
    if (!timerVariableId) {
      times = 0
      timerVariableId = setInterval(() => {
        if (!isPaused.value) {
          times++
          callback(times, step * times)
        }
      })
    }
  }
}