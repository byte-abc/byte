import {ComputedRef, Ref, ToRef, WatchSource, WritableComputedRef} from 'vue'

/**
 * 함수를 제외한 값들은 Ref 입니다 custom hook 만들때 리턴값으로 사용하면 좋습니다
 */
export type ToRefsValueOnly<T = any> = {
  [K in keyof T]: T[K] extends (...args: any) => any ? T[K] : ToRef<T[K]>
}

/**
 * 모든 종류의 Ref 입니다 또는 일반 변수 입니다
 */
export type MaybeRef<T> = Ref<T> | ComputedRef<T> | T | WritableComputedRef<T>

/**
 * 쓰기가능한 Ref 타입 입니다
 */
export type WritableRef<T> = WritableComputedRef<T> | Ref<T>

/**
 * 여러 WatchSource
 */
export type MultiWatchSources = (WatchSource<unknown> | object)[]

export type ReactiveOptions<T> = {
  [K in keyof T]: MaybeRef<T[K]>
}
