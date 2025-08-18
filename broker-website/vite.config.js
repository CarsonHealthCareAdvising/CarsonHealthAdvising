import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Uses the repo name as the base path on GitHub Pages automatically.
const repo = process.env.GITHUB_REPOSITORY ? process.env.GITHUB_REPOSITORY.split('/')[1] : ''

export default defineConfig({
  plugins: [react()],
  base: repo ? `/${repo}/` : '/',
})
