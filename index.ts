//frontend (browser-compatible) exports



export {html, xml} from './src/loaders/html/html'
export * from './src/loaders/html/html.loader'

export { DOMElement, addCustomElement } from './src/loaders/html/DOMElement'
export * from './src/loaders/html/wc.loader' //includes the web component spec, html loader is a little leaner otherwise

export * from './src/services/http/HTTP.browser'

export * from './src/services/sse/SSE.browser'

export * from './src/services/wss/WSS.browser'

//export * from './services/struct/Struct.frontend'

export * from './src/services/webrtc/WebRTC.browser'

//this one needs work but it was more for demonstration
export * from './src/services/ecs/ECS.service'