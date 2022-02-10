import { Router } from 'solid-app-router'
import { render } from 'solid-js/web'
import 'uno.css'
import '@unocss/reset/tailwind.css'
import { App } from './App'
import './index.css'
render(
  () => (
    <>
      <Router>
        <App />
      </Router>
    </>
  ),
  document.getElementById('root')!
)
