import { Router } from 'solid-app-router'
import { render } from 'solid-js/web'
import App from './App'
import 'uno.css'
import '@unocss/reset/tailwind.css'
import './index.css'

import { createEventListenerMap } from '@solid-primitives/event-listener'
const CtrlOutline = () => {
  let ctrl = $signal(false)
  const set = ({ ctrlKey: v }: KeyboardEvent) => (ctrl = v)
  $cleanup(createEventListenerMap(window, { keydown: set, keyup: set, blur: set }))

  return (
    <$show when={!ctrl}>
      <style>{`*{outline: 2px solid #f009}`}</style>
    </$show>
  )
}

render(
  () => (
    <>
      {/* <CtrlOutline /> */}
      <Router>
        <App />
      </Router>
    </>
  ),
  document.getElementById('root')!
)
