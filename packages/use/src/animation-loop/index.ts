import {onScopeDispose} from 'vue'

export const useRequestLoop =
  (
    requestLoop: (callback: (...args: any[]) => any) => number,
    cancelLoop: (flag: number) => void,
  ) =>
  (callback: () => boolean) => {
    let flag: number | undefined
    const loop = () => {
      let result = true
      if (typeof flag === 'number') {
        result = callback()
      }
      if (result) {
        flag = requestLoop(loop)
      }
    }

    const stop = () => {
      if (typeof flag === 'number') {
        cancelLoop(flag)
      }
    }

    onScopeDispose(() => {
      stop()
    })

    return {
      loop,
      stop,
    }
  }

export const useAnimationLoop = useRequestLoop(
  window.requestAnimationFrame,
  window.cancelAnimationFrame,
)

export const useIdleLoop = useRequestLoop(window.requestIdleCallback, window.cancelIdleCallback)
