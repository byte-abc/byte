export const getWindow = (): undefined | Window => {
  if (typeof window === 'undefined') {
    return
  }
  return window
}
