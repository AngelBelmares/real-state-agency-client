import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import { loadEnv } from 'vite'
import vercel from '@astrojs/vercel/serverless'

import react from '@astrojs/react'

const { NODE_TLS_REJECT_UNAUTHORIZED } = loadEnv(process.env.NODE_ENV, process.cwd(), '')
process.env.NODE_TLS_REJECT_UNAUTHORIZED = NODE_TLS_REJECT_UNAUTHORIZED
// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: 'server',
  adapter: vercel()
})
