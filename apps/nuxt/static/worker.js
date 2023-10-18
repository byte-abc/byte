/// <reference lib="webworker" />
/// <reference lib="esnext" />
/// <reference no-default-lib="true"/>
//
// self.onmessage = (event) => {
//   console.log(event.data)
// }

self.addEventListener('message', (event) => {
  self.postMessage({...event.data, bar: 'bar'})
})
