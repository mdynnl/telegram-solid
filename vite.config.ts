import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import labels from 'babel-plugin-solid-labels'
import uno from 'unocss/vite'
import { presetUno as css, presetIcons as icons } from 'unocss'

export default defineConfig({
  envPrefix: '_',
  resolve: { alias: { '~': '/src' } },
  base: './',
  plugins: [uno({ presets: [css({}), icons({})] }), solid({ babel: { plugins: [labels] } })],
})
