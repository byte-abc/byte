export const getWindow = (): undefined | (Window & typeof globalThis) => {
  if (typeof window === 'undefined') {
    return
  }
  return window
}
