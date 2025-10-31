/** node modules */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { registerSW } from 'virtual:pwa-register'

/** tanstack modules */
import { TanStackDevtools } from '@tanstack/react-devtools'
import { FormDevtoolsPlugin } from '@tanstack/react-form-devtools'

/** styles */
import './styles/global.scss'

/** components */
import App from './App.tsx'

const rootElem = document.getElementById('root') as HTMLElement | null
if (!rootElem) {
  throw new Error("The document does not contain an element with ID 'root'.")
}

const root = createRoot(rootElem)
root.render(
  <StrictMode>
    <App />
    <TanStackDevtools
      config={{ hideUntilHover: true }}
      plugins={[FormDevtoolsPlugin()]}
    />
  </StrictMode>,
)

registerSW({
  immediate: true,
  onNeedRefresh() {
    console.log('New content available, refresh to update.')
  },
  onOfflineReady() {
    console.log('App ready to work offline.')
  },
})
