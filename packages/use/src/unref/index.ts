import {unref as _unref} from 'vue'
import {MaybeRef} from 'src/types'

/**
 * same as vue.unref but it supports MaybeRef (having component toRef ...) type
 * @param value
 */
export const unref = <T>(value: MaybeRef<T>): T => {
  return _unref(value) as any
}

/**
 * unref alias
 */
export const getRef = unref
