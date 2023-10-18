export const worker = globalThis.Worker
  ? new Worker('_nuxt/static/worker.js')
  : ({
      postMessage: () => null,
    } as any)
