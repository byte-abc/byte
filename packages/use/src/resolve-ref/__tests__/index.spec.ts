import {computed, reactive, ref, watch} from 'vue'
import {resolveRef} from '../'
import {afterEach, beforeEach, describe, expect, it, vi} from 'vitest'

describe('resolveRef', () => {
  const setup = (target, updateOrigin?) => {
    const callback = vi.fn()
    const result = resolveRef(target, {iReallyWantToUpdateOriginalRef: updateOrigin})
    watch(result, callback, {flush: 'sync'})
    return {
      callback,
      result,
    }
  }
  it('should return a ref with null', () => {
    const {result} = setup(null)
    expect(result.value).toBeNull()
  })
  it('should return a ref with undefined', () => {
    const {result} = setup(undefined)
    expect(result.value).toBeUndefined()
  })
  it('should return a ref with an object', () => {
    const {result} = setup({})
    expect(result.value).toEqual({})
  })
  it('should detect changes', () => {
    const value = ref('foo')
    const {result, callback} = setup(value)

    expect(result.value).toBe('foo')

    value.value = 'bar'
    expect(result.value).toBe('bar')
    expect(callback).toHaveBeenCalledTimes(1)
  })
  it('should detect changes with null and undefined', () => {
    const value = ref()
    const {result, callback} = setup(value)
    expect(result.value).toEqual(undefined)

    value.value = null
    expect(result.value).toEqual(null)
    expect(callback).toHaveBeenCalledTimes(1)

    value.value = 'bar'
    expect(result.value).toEqual('bar')
    expect(callback).toHaveBeenCalledTimes(2)
  })
  it('should detect changes with values', () => {
    const value = ref('foo')

    const {result, callback} = setup(value, true)

    expect(result.value).toBe('foo')

    value.value = 'bar'
    expect(result.value).toBe('bar')
    expect(callback).toHaveBeenCalledTimes(1)

    result.value = 'john'
    expect(result.value).toBe('john')
    expect(callback).toHaveBeenCalledTimes(2)
  })
  //
  it('should detect changes with reactive', () => {
    const data = reactive({
      name: 'foo',
    })
    const {result, callback} = setup(data)
    expect(result.value).toEqual({name: 'foo'})

    data.name = 'bar'
    expect(result.value).toEqual({name: 'bar'})
    expect(callback).toHaveBeenCalledTimes(1)
  })

  describe('resolveRef updateOrigin', () => {
    it('should not update the result ref with readonly computed', () => {
      const value = ref('foo')
      const computedValue = computed(() => value.value)

      const {result, callback} = setup(computedValue, true)

      expect(result.value).toBe('foo')

      value.value = 'bar'
      expect(result.value).toBe('bar')
      expect(callback).toHaveBeenCalledTimes(1)

      // skip set
      result.value = 'john'
      expect(result.value).toBe('bar')
      expect(callback).toHaveBeenCalledTimes(1)
    })
    it('should not update the result ref when update original option is false', () => {
      const value = ref('foo')
      const computedValue = computed(() => value.value)

      const {result, callback} = setup(computedValue, false)

      expect(result.value).toBe('foo')

      value.value = 'bar'
      expect(result.value).toBe('bar')
      expect(callback).toHaveBeenCalledTimes(1)

      result.value = 'john'
      expect(result.value).toBe('bar')
      expect(callback).toHaveBeenCalledTimes(1)
    })
    it('should update the result ref with writeable computed', () => {
      const value = ref('foo')
      const computedValue = computed({
        get: () => value.value,
        set: (_value) => {
          value.value = _value
        },
      })

      const {result, callback} = setup(computedValue, true)

      expect(result.value).toBe('foo')

      value.value = 'bar'
      expect(result.value).toBe('bar')
      expect(callback).toHaveBeenCalledTimes(1)

      // skip set
      result.value = 'john'
      expect(result.value).toBe('john')
      expect(callback).toHaveBeenCalledTimes(2)
    })
    it('should not update the result ref with reactive', () => {
      const value = reactive({
        age: 10,
        name: 'foo',
      })

      const {result, callback} = setup(value, true)

      expect(result.value).toEqual({age: 10, name: 'foo'})

      value.name = 'bar'
      expect(result.value).toEqual({age: 10, name: 'bar'})
      expect(callback).toHaveBeenCalledTimes(1)

      value.age = 20
      expect(result.value).toEqual({age: 20, name: 'bar'})
      expect(callback).toHaveBeenCalledTimes(2)

      // skip set
      result.value = {age: 30, name: 'john'}
      expect(value.name).toBe('bar')
      expect(result.value).toEqual({age: 20, name: 'bar'})
      expect(callback).toHaveBeenCalledTimes(2)

      // skip set
      result.value.name = 'john'
      expect(value.name).toBe('bar')
      expect(result.value).toEqual({age: 20, name: 'john'})
      expect(callback).toHaveBeenCalledTimes(2)
    })
  })
  describe('warns', () => {
    beforeEach(() => {
      vi.spyOn(console, 'warn').mockImplementation(() => null)
      process.env.NODE_ENV = 'development'
    })

    afterEach(() => {
      process.env.NODE_ENV = 'test'
      vi.restoreAllMocks()
    })

    it('should warn when update the original ref', () => {
      const foo = ref('foo')
      const result = resolveRef(foo, {iReallyWantToUpdateOriginalRef: true})

      result.value = 'bar'
      expect(console.warn).toHaveBeenCalledWith(
        'Update resolveRef original but place do not update',
      )
    })
    it('should warn when update the readonly original ref', () => {
      const fooRef = ref('foo')
      const foo = computed(() => fooRef.value)
      const result = resolveRef(foo, {iReallyWantToUpdateOriginalRef: true})

      result.value = 'bar'
      expect(console.warn).toHaveBeenCalledWith('Can not update resolveRef original')
    })
  })
})
