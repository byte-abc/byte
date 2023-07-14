export const isNumber = (value: any) => {
  if (typeof value === 'string' && /\d+/u.test(value)) {
    return true
  }

  return typeof value === 'number'
}
