import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import labels from 'babel-plugin-solid-labels'

export default defineConfig({
  envPrefix: '_',
  resolve: { alias: { '~': '/src' } },
  plugins: [solid({ babel: { plugins: [labels] } })],
})
