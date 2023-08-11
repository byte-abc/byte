import {AllowedComponentProps, Component, VNodeProps} from 'vue'

// using outside this package
// noinspection JSUnusedGlobalSymbols
export type ExtractComponentProps<C extends Component> = C extends new (...args: any) => any
  ? Omit<InstanceType<C>['$props'], keyof VNodeProps | keyof AllowedComponentProps>
  : never

export type Data = Record<string, unknown>

// noinspection JSUnusedGlobalSymbols
export type FastPropObjectOptions<P = Data> = {
  [K in keyof P]: null
}
