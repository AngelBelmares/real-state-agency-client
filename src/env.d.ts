/// <reference path="../.astro/types.d.ts" />
import 'astro/client'

interface ImportMetaEnv {
  readonly VITE_API_URL: string
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}
