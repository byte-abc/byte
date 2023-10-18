import {longCall} from '../'
import {afterEach, beforeEach, describe, expect, it, vi} from 'vitest'
import {useFakeTimers} from 'sinon'

describe('longCall', () => {
  beforeEach(() => {
    vi.useFakeTimers({
      shouldAdvanceTime: true,
    })
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('should call callback with long-start and long-end parameter', () => {
    const callback = vi.fn()
    const {up, down} = longCall(callback, 250)

    down()

    vi.advanceTimersByTime(250)

    expect(callback).toBeCalledWith('long-start')

    up()

    expect(callback).toBeCalledWith('long-end')

    callback.mockClear()
    //[ down] ..... 250ms long start call .... [up] long end call
    //
    down()

    vi.advanceTimersByTime(100)

    expect(callback).not.toBeCalled()

    up()

    expect(callback).toBeCalledWith('click')
  })
  it('should call callback with long event parameter', () => {
    const callback = vi.fn()
    const {up, down} = longCall(callback, 250)

    down()

    vi.advanceTimersByTime(100)

    down()

    vi.advanceTimersByTime(150)

    expect(callback).toBeCalledWith('long-start')

    up()

    expect(callback).toBeCalledWith('long-end')

    callback.mockClear()
    //[ down] ..... 250ms long start call .... [up] long end call
    //
    down()

    vi.advanceTimersByTime(100)

    expect(callback).not.toBeCalled()

    up()

    expect(callback).toBeCalledWith('click')
  })
  it('should call callback with long event parameter', () => {
    const callback = vi.fn()
    const {up, down} = longCall(callback, 250)

    down()

    vi.advanceTimersByTime(100)

    up()

    expect(callback).toBeCalledWith('click')

    vi.advanceTimersByTime(300)

    expect(callback).not.toBeCalledWith('long-start')
  })
  it('should call callback with long event parameter', () => {
    const callback = vi.fn()
    const {up, down} = longCall(callback, 250)

    down()
    vi.advanceTimersByTime(100)

    expect(callback).not.toBeCalled()

    up()

    expect(callback).toBeCalledWith('click')
  })
  it('should call callback with long event parameter', () => {
    const callback = vi.fn()
    const {up, down} = longCall(callback, 250)

    up()

    expect(callback).not.toBeCalledWith('click')
  })
})
