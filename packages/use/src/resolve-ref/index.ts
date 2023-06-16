import {isWritableRef} from 'src/is-writable-ref'
import {assignRef} from 'src/assign-ref'
import {computed, isReactive, isRef, Ref} from 'vue'
import {MaybeRef} from 'src/types'

export interface ResolveRefOptions {
  iReallyWantToUpdateOriginalRef?: boolean
}

/**
 * ref 여 부와 상관 없이 computed ref 로 만들어 반환 합니다
 * ref 일 경우 ref 가 변경되면 computed ref 도 변경 됩니다
 * reactive 일 경우 updateOrigin 이 되지 않습니다
 * @param value
 * @param options
 */
export function resolveRef<T>(value: MaybeRef<T>, options: ResolveRefOptions = {}): Ref<T> {
  const {iReallyWantToUpdateOriginalRef} = options
  const __isReactive = isReactive(value)
  const __value = __isReactive ? assignRef(value) : value
  const createGet = () => {
    if (isRef(__value) || isReactive(__value)) {
      return () => {
        return (__value as any).value
      }
    }
    return () => {
      return __value
    }
  }

  const createSet = (): any => {
    if (iReallyWantToUpdateOriginalRef && isWritableRef(__value)) {
      return (_value: T) => {
        if (process.env.NODE_ENV === 'development') {
          console.warn('Update resolveRef original but place do not update')
        }
        ;(__value as any).value = _value
      }
    }
    return () => {
      if (process.env.NODE_ENV === 'development') {
        console.warn('Can not update resolveRef original')
      }
      // empty skip write
    }
  }

  return computed({
    get: createGet(),
    set: createSet(),
  })
}
