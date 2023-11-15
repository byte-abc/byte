import {MaybeRef, resolveRef} from '@byte-abc/use'
import {watchEffect} from 'vue'

export type LongEventKey = 'long-start' | 'long-end' | 'click'
export type LongEventCallback = (event: LongEventKey) => unknown

const DEFAULT_WAIT = 250

export const longCall = (callback: LongEventCallback, wait: number = DEFAULT_WAIT) => {
  let downFlag: any
  let afterWaiting = false

  return {
    down: () => {
      if (downFlag !== undefined) {
        return
      }
      downFlag = setTimeout(() => {
        callback('long-start')
        afterWaiting = true
      }, wait)
    },
    up: () => {
      clearTimeout(downFlag)
      if (afterWaiting) {
        callback('long-end')
      } else if (downFlag) {
        callback('click')
      }
      downFlag = undefined
      afterWaiting = false
    },
  }
}

const onEvent = (element: MaybeRef<any>, eventName: string, callback?: (event: any) => unknown) => {
  const elementRef = resolveRef(element)
  const _callback = (event: Event) => {
    callback?.(event)
  }

  watchEffect((onCleanup) => {
    const element = elementRef.value

    if (!element) {
      return
    }

    element.addEventListener(eventName, _callback)

    onCleanup(() => {
      element.removeEventListener(eventName, _callback)
    })
  })
}

export const onLongMouseEvent = (element: MaybeRef<any>, callback: LongEventCallback) => {
  const {up, down} = longCall(callback)
  onEvent(element, 'mousedown', down)
  onEvent(element, 'mouseup', up)
}

export const onLongKeyEvent = (element: MaybeRef<any>, callback: LongEventCallback) => {
  const {up, down} = longCall(callback)
  onEvent(element, 'keydown', down)
  onEvent(element, 'keyup', up)
}
