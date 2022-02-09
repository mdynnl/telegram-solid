/// <reference types="vite/client" />

interface ImportMetaEnv {
  _TELEGRAM_API_ID: number
  _TELEGRAM_API_HASH: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
