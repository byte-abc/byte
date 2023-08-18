/**
 * @jest-environment jsdom
 */
import {mutRef} from '../'
import {mountComposition} from '@vue/test-utils'
import {computed, ref, toRef} from 'vue'

// describe('mutRef', () => {
//   it('should mutate value with prop', async () => {
//     const mount = mountComposition(
//       (props) => {
//         const nameProp = toRef(props, 'name')
//         const mutProp = mutRef(nameProp)
//         return {
//           mutProp,
//         }
//       },
//       {
//         props: {
//           name: 'foo',
//         },
//       },
//     )
//
//     expect(mount.setupState.mutProp).toBe('foo')
//
//     mount.setupState.mutProp = 'bar'
//     expect(mount.setupState.mutProp).toBe('bar')
//
//     await mount.setProps({
//       name: 'john',
//     })
//
//     expect(mount.setupState.mutProp).toBe('john')
//   })
//   it('should mutate value with computed', async () => {
//     const valueRef = ref(0)
//     const computedRef = computed(() => {
//       return valueRef.value + 1
//     })
//     const mutValueRef = mutRef(computedRef)
//
//     expect(mutValueRef.value).toBe(1)
//
//     mutValueRef.value = 2
//
//     expect(mutValueRef.value).toBe(2)
//     expect(valueRef.value).toBe(0)
//
//     valueRef.value = 4
//     expect(mutValueRef.value).toBe(5)
//   })
//   it('should mutate value with write able computed', async () => {
//     const valueRef = ref(0)
//     const computedRef = computed({
//       get: () => {
//         return valueRef.value + 1
//       },
//       set: (v) => {
//         valueRef.value = v
//       },
//     })
//     const mutValueRef = mutRef(computedRef)
//
//     expect(mutValueRef.value).toBe(1)
//
//     mutValueRef.value = 2
//
//     expect(mutValueRef.value).toBe(2)
//     expect(valueRef.value).toBe(0)
//
//     valueRef.value = 4
//     expect(mutValueRef.value).toBe(5)
//   })
//   it('should mutate value with ref', async () => {
//     const valueRef = ref(0)
//     const mutValueRef = mutRef(valueRef)
//
//     expect(mutValueRef.value).toBe(0)
//
//     mutValueRef.value = 2
//
//     expect(mutValueRef.value).toBe(2)
//     expect(valueRef.value).toBe(0)
//
//     valueRef.value = 4
//     expect(mutValueRef.value).toBe(4)
//   })
// })
