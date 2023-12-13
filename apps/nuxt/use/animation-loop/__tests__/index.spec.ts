/**
 * @vitest-environment jsdom
 */

import {animationLoop} from '../'
import {describe, expect, it, vi} from 'vitest'
import {getWindow} from '../../get-window'

describe('animationLoop', () => {
  it('should call callback by requestAnimationFrame', () => {
    let loop: any
    vi.spyOn(window, 'requestAnimationFrame').mockImplementation((_loop: any) => {
      loop = _loop
      return 1
    })
    vi.spyOn(window, 'cancelAnimationFrame')
    const callback = vi.fn()
    const ani = animationLoop(callback)
    expect(callback).not.toBeCalled()
    ani.start()
    loop?.()
    expect(callback).toBeCalled()
    loop?.()
    expect(callback).toBeCalledTimes(2)
    ani.stop()
    expect(window.cancelAnimationFrame).toBeCalledWith(1)
  })
})
