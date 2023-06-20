import {ComputedRef, Ref, WritableComputedRef} from 'vue'
/**
 * 모든 종류의 Ref 입니다 또는 일반 변수 입니다
 */
export type MaybeRef<T> = Ref<T> | ComputedRef<T> | T | WritableComputedRef<T>
