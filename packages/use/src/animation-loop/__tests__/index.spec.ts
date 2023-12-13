/**
 * @vitest-environment jsdom
 */

import {afterEach, beforeEach, describe, expect, it, vi} from 'vitest'
import {useAnimationLoop} from '../'
import {effectScope} from 'vue'

describe('useAnimationLoop', () => {
  let triggerAnimation: any
  let flag = 1
  beforeEach(() => {
    vi.spyOn(window, 'requestAnimationFrame').mockImplementation((loop) => {
      triggerAnimation = loop

      flag += 1
      return flag
    })
    vi.spyOn(window, 'cancelAnimationFrame')
  })

  afterEach(() => {
    flag = 1
    vi.restoreAllMocks()
  })

  it.each([
    //
    [[true, true, false], 3],
    [[true], 2],
    [[], 1],
  ])('call loop', (returnValue, times) => {
    const scope = effectScope()
    let returnValueIndex = -1
    const callback = vi.fn(() => {
      returnValueIndex += 1
      return returnValue[returnValueIndex]
    })

    const animationLoop = scope.run(() => useAnimationLoop(callback))

    expect(callback).toHaveBeenCalledTimes(0)

    animationLoop?.loop()

    for (let index = 0; index < times; index += 1) {
      expect(window.requestAnimationFrame).toBeCalledTimes(index + 1)
      expect(callback).toHaveBeenCalledTimes(index)

      triggerAnimation()
    }
    expect(window.requestAnimationFrame).not.toBeCalledTimes(times + 1)
  })
  it('should teardown', () => {
    const scope = effectScope()
    const callback = vi.fn()
    scope.run(() => {
      return useAnimationLoop(callback)
    })

    scope.stop()

    expect(window.cancelAnimationFrame).toBeCalled()
  })
  it('should stop', () => {
    const scope = effectScope()
    const callback = vi.fn()
    const animationLoop = scope.run(() => {
      return useAnimationLoop(callback)
    })

    animationLoop?.stop()

    expect(window.cancelAnimationFrame).toBeCalled()
  })
})
