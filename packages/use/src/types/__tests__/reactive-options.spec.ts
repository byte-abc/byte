import {ReactiveOptions} from '../ref'
import {reactive, ref, watch} from 'vue'
import {flushPromises} from '@vue/test-utils'

describe('reactive options', () => {
  it('should be reactive options', async () => {
    interface UseReactiveOptionsOptions {
      foo?: string
    }

    const watchCallback = jest.fn()

    const useReactiveOptions = (options: ReactiveOptions<UseReactiveOptionsOptions>) => {
      const optionsObjectRef = reactive(options)

      watch(
        () => optionsObjectRef.foo,
        (foo) => {
          watchCallback(foo)
        },
        {immediate: true},
      )
    }

    const foo = ref('foo')

    useReactiveOptions({foo})

    expect(watchCallback).toHaveBeenCalledWith('foo')

    foo.value = 'bar'

    await flushPromises()

    expect(watchCallback).toHaveBeenCalledWith('bar')
  })
})
