import {onScopeDispose} from 'vue'
import {getWindow} from '../get-window'

export const animationLoop = (callback: () => void) => {
  let id: number | undefined
  const loop = () => {
    callback()
    id = getWindow()?.requestAnimationFrame(loop)
  }
  const start = () => {
    id = getWindow()?.requestAnimationFrame(loop)
  }

  const stop = () => {
    if (id) {
      getWindow()?.cancelAnimationFrame(id)
      id = undefined
    }
  }

  onScopeDispose(stop)

  return {
    start,
    stop,
  }
}
