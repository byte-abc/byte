import {flow} from '@byte-abc/lodash'
export const getNumberValue = (value: string) => {
  return value.replace(/\D/gu, '')
}

export const createGetMaxValue = (max: number = 0) => {
  return (value: string) => {
    return value.slice(0, max)
  }
}

interface Options {
  max?: number
  min?: number
  number?: boolean
}

export const createGetValue = (options: Options = {}) => {
  const {max, number} = options
  const functions = []
  if (number) {
    functions.push(getNumberValue)
  }
  if (max) {
    functions.push(createGetMaxValue(max))
  }
  return flow(functions)
}
